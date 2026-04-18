// Server Component — revalidates every hour
export const revalidate = 3600;

const ARTIST_ID = "3JhFGt6jRQvnYgvhWMQHUU";

const FALLBACK = {
  name: "Paraller Stories",
  type: "single" as const,
  image: null as string | null,
  url: "https://hyperfollow.com/djandyk",
};

async function getLatestRelease() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) return null;

  try {
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: "grant_type=client_credentials",
      next: { revalidate: 3600 },
    });

    if (!tokenRes.ok) return null;
    const { access_token } = (await tokenRes.json()) as { access_token: string };

    const albumsRes = await fetch(
      `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single,album&limit=1&market=GB`,
      {
        headers: { Authorization: `Bearer ${access_token}` },
        next: { revalidate: 3600 },
      }
    );

    if (!albumsRes.ok) return null;
    const data = await albumsRes.json() as {
      items: Array<{
        name: string;
        album_type: string;
        images: Array<{ url: string }>;
        external_urls: { spotify: string };
      }>;
    };

    const latest = data.items?.[0];
    if (!latest) return null;

    return {
      name: latest.name,
      type: latest.album_type as "album" | "single",
      image: latest.images?.[0]?.url ?? null,
      url: latest.external_urls?.spotify ?? `https://open.spotify.com/artist/${ARTIST_ID}`,
    };
  } catch {
    return null;
  }
}

export default async function LatestReleaseBanner() {
  const release = (await getLatestRelease()) ?? FALLBACK;
  const label = release.type === "album" ? "Album" : "Single";

  return (
    <div className="w-full bg-highlight px-4 py-2.5">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Cover thumbnail */}
          {release.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={release.image}
              alt={release.name}
              className="w-8 h-8 rounded object-cover shrink-0"
            />
          ) : (
            <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-4 h-4">
                <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}

          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-mono block leading-tight">
              New {label} · Out Now
            </span>
            <span className="text-sm font-semibold text-white truncate block leading-tight">
              {release.name}
            </span>
          </div>
        </div>

        <a
          href={release.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors px-3 py-1.5 rounded"
        >
          Listen Now
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
}
