import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true
      },
      adapter: adapter()
    })
  ],
  test: {
    expect: { requireAssertions: true },
    name: "server",
    environment: "node",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    exclude: ["src/**/*.svelte.{test,spec}.{js,ts}", "src/lib/server/**"]
  }
});
