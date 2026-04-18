const INDEXNOW_KEY = "a1b2c3d4e5f6g7di";
const HOST = "andykgroupinternational.com";

export async function pingIndexNow(urls: string | string[]) {
  await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: Array.isArray(urls) ? urls : [urls],
    }),
  });
}
