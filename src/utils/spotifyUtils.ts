import type { Album } from "../types/spotifyTypes";

export function getClientId() {
  const clientId =
    import.meta.env.SPOTIFY_CLIENT_ID ||
    process.env.SPOTIFY_CLIENT_ID ||
    Netlify.env.get("SPOTIFY_CLIENT_ID") ||
    "{}";

  return clientId;
}

export function getClientSecret() {
  const clientSecret =
    import.meta.env.SPOTIFY_CLIENT_SECRET ||
    process.env.SPOTIFY_CLIENT_SECRET ||
    Netlify.env.get("SPOTIFY_CLIENT_SECRET") ||
    "{}";

  return clientSecret;
}

export async function getAccessToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${getClientId()}&client_secret=${getClientSecret()}`,
  });
  const { access_token } = await response.json();
  return access_token;
}

export async function getAlbums(
  artistId: string,
  accessToken: string,
  limit = 20,
) {
  // API can only accept between 1-50
  if (limit < 1 || limit > 50) {
    limit = 20;
  }

  const OFFSET = 1;
  const ALBUMS_ENDPOINT = `https://api.spotify.com/v1/artists/${artistId}/albums?limit=${limit}&offset=${OFFSET}`;

  try {
    const response = await fetch(ALBUMS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    const albums = data.items;
    return albums;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
  }
}

export function getArtwork(album: Album | undefined) {
  return album?.images[1 | 0]?.url;
}

export function getSpotifyUrl(album: Album | undefined) {
  return album?.external_urls.spotify;
}

export function getAlbumName(album: Album | undefined) {
  return album?.name;
}

export function getArtistName(album: Album | undefined) {
  return album?.artists[0].name;
}

export async function getLatestAlbum() {
  const response = await fetch("/api/get-latest-track");
  const latestAlbum = await response.json();
  return latestAlbum;
}
