import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Explore Karakuram experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Explore Karakuram — Travel with Altitude<\/title>/i);
  assert.match(html, /Travel with/);
  assert.match(html, /altitude\./);
  assert.match(html, /Signature adventures/);
  assert.match(html, /K2 Base Camp/);
  assert.match(html, /info@explorekarakuram\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
});

test("keeps the collected assets and audit available", async () => {
  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/assets/source/manifest.json", import.meta.url)),
    access(new URL("../public/assets/images/03-dd0593.jpg", import.meta.url)),
    access(new URL("../ASSET_AUDIT.md", import.meta.url)),
  ]);

  const [page, layout, audit, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../ASSET_AUDIT.md", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Explore Karakuram/);
  assert.match(layout, /socialImage/);
  assert.match(layout, /og\.png/);
  assert.match(audit, /55 usable image, font, and stylesheet files/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
