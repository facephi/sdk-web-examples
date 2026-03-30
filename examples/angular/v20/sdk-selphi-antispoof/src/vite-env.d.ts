/// <reference types="vite/client" />
/// <reference types="@facephi/sdk-web-wc/dist/types/components" />

interface ImportMetaEnv {
 readonly NG_APP_API_KEY?: string;
}

interface ImportMeta {
 readonly env: ImportMetaEnv;
}