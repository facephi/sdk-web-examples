/// <reference types="vite/client" />

interface ImportMetaEnv {
 readonly NG_APP_API_KEY?: string;
}

interface ImportMeta {
 readonly env: ImportMetaEnv;
}