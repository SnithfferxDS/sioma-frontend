import { APP_URL } from "@Configs/constants";

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
    return `${APP_URL}/${path}`;
}

export function asset(path: string) {
    // NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
    return `${APP_URL}/assets/${path}`;
}