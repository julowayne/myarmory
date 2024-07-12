/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLIENT_ID: string
    readonly VITE_CLIENT_SECRET: string
    readonly VITE_API_TOKEN: string
    readonly VITE_WOW_STATIC_NAMESPACE: string
    readonly VITE_WOW_DYNAMIC_NAMESPACE: string
    readonly VITE_WOW_PROFILE_NAMESPACE: string
    readonly VITE_WOW_LOCALE: string
    readonly VITE_WOW_REGION: string
  }