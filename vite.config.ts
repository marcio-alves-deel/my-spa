/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import { resolve } from "path";

const htmlPlugin = (env: Record<string, string>) => {
  return {
    name: "html-transform",
    transformIndexHtml(html: any) {
      return html.replace(/%(.*?)%/g, function (match: any, p1: any) {
        return env[p1];
      });
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./");

  return {
    plugins: [
      htmlPlugin(env),
      commonjs(),
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
  };
});
