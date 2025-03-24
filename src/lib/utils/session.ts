import { SignJWT, jwtVerify } from 'jose';
import { APP_NAME, APP_SECRET } from '@Configs/constants';
import { parse, serialize } from 'cookie';
import type { JWTPayload } from 'jose';
import type { AstroGlobal, APIContext } from 'astro';
const JWT_SECRET = new TextEncoder().encode(APP_SECRET || 'your-secret-key');
const SESSION_NAME = APP_NAME + '-session';
const API_TOKEN = APP_NAME + '-apisession';
const CSRF_TOKEN_NAME = 'csrf-token';

export interface SessionData extends JWTPayload {
    id: string;
    level: number;
    signature: string;
}

export async function createSessionToken(data: SessionData): Promise<string> {
    return new SignJWT(data)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('24h')
        .sign(JWT_SECRET);
}

export async function getSession(Astro: AstroGlobal | APIContext): Promise<SessionData | null> {
    const cookies = parse(Astro.request.headers.get('cookie') || '');
    const token = cookies[SESSION_NAME];

    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as SessionData;
    } catch {
        return null;
    }
}

export function setSessionCookie(sessionToken: string, apiToken: string) {
    serialize(SESSION_NAME, sessionToken, {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 // 24 hours
    });
    serialize(API_TOKEN, apiToken, {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 4 // 4 hours
    });
}

export function generateCsrfToken(): string {
    return crypto.randomUUID();
}

export function setCsrfCookie(token: string): string {
    return serialize(CSRF_TOKEN_NAME, token, {
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'lax',
        path: '/'
    });
}

export async function validateCsrfToken(request: Request): Promise<boolean> {
    const cookies = parse(request.headers.get('cookie') || '');
    const cookieToken = cookies[CSRF_TOKEN_NAME];
    const formToken = request.headers.get('x-csrf-token');

    return cookieToken === formToken;
}