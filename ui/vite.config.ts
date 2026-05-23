import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createReadStream, existsSync, statSync } from "node:fs";
import { join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");

function serveDataPlugin(): Plugin {
  return {
    name: "serve-data",
    configureServer(server) {
      server.middlewares.use("/data", (req, res, next) => {
        const urlPath = decodeURIComponent(req.url?.split("?")[0] ?? "/");
        const filePath = normalize(join(DATA_DIR, urlPath));
        if (!filePath.startsWith(DATA_DIR) || !existsSync(filePath)) {
          next();
          return;
        }
        if (!statSync(filePath).isFile()) {
          next();
          return;
        }
        const ext = filePath.slice(filePath.lastIndexOf("."));
        const types: Record<string, string> = {
          ".json": "application/json",
          ".md": "text/markdown; charset=utf-8",
        };
        res.setHeader("Content-Type", types[ext] ?? "text/plain; charset=utf-8");
        createReadStream(filePath).pipe(res);
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveDataPlugin()],
  server: {
    fs: { allow: [".."] },
  },
});
