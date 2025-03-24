/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly SITE: string;
    // APP
    readonly APP_NAME: string;
    readonly APP_AUTH: boolean;
    readonly APP_LOGO: string;
    readonly APP_DEBUG: boolean;
    readonly APP_AUTHOR: string;
    readonly APP_FULL_NAME: string;
    readonly APP_SECRET: string;
    readonly APP_HOST_NAME: string;
    readonly APP_HOST_PORT: number;
    readonly APP_VERSION: number;
    readonly APP_LANGUAGE: string;
    readonly APP_TIMEZONE: string;
    readonly APP_LOGO_MINI: string;
    readonly APP_DESCRIPTION: string;
    readonly APP_DATE_FORMAT: string;
    readonly APP_TIME_FORMAT: string;
    readonly APP_SHORT_VERSION: number;
    // APP redirect
    readonly APP_HOST_DOMAIN: string;
    readonly APP_REDIRECT_URI: string;
    // API
    readonly API_URL: string;
    readonly API_KEY: string;
    readonly API_USER: string;
    readonly API_PASS: string;
    readonly API_VERSION: number;
    readonly API_DEBUG: boolean;
    readonly API_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}