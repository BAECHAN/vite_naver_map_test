import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: any }) => {
  const env = loadEnv(mode, process.cwd());
  // process에서 타입에러가 뜨게된다.
  // @type/node를 설치해주자
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_NAVER_MAP_API_KEY_ID,
          },
        },
      }),
    ],
  };
};
