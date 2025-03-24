import { APP_SECRET, CSRF_TOKEN_NAME } from '@Configs/constants';
import type { UserSchema } from '@Types/schemas/UserSchema';
import type { APIContext, AstroGlobal } from 'astro';
import { jwtVerify, SignJWT } from 'jose'

const key = new TextEncoder().encode(APP_SECRET);

export const generateToken = (payload: {
    user?: UserSchema;
    usb?: string;
    exp: number;
}) => {
    // If user and usb is undefined, return null
    if (!payload.user || !payload.usb) return null;
    const token = new SignJWT({
        sub: payload.user.id.toString(),
        email: payload.user.email,
        username: payload.user.name
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(payload.exp)
        .sign(key);
    return token;
};

export const verifyToken = (token: string) => {
    const decodedToken = jwtVerify(token, key, {
        issuer: 'shopingui',
        audience: 'shopingui',
        algorithms: ['HS256']
    });
    return decodedToken;
};

export const generateCsrfToken = async (astro: AstroGlobal | APIContext | null) => {
    // If astro is null, generate a new token
    if (!astro || astro === null) {
        const token = await generateToken({
            usb: crypto.randomUUID(),
            exp: 24 * 60 * 60
        });
        if (token) {
            return token;
        }
    }
    const cookie = astro?.cookies.get(CSRF_TOKEN_NAME);
    if (cookie) {
        const tokenValue = cookie.value;
        console.log(tokenValue);
        return tokenValue;
    }
}