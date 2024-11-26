export const prerender = false;

import type { APIRoute } from "astro";
import { getAccessToken, getAlbums } from "../../utils/spotifyUtils";

export const GET: APIRoute = async (request) => {
  const ARTIST_ID = "4RPZ6dqa0oJOuaSCEqDmP8";

  try {
    const accessToken = await getAccessToken();

    const [latestTrack] = await getAlbums(ARTIST_ID, accessToken, 1);

    return new Response(JSON.stringify(latestTrack), { status: 200 });
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    return new Response("Error getting access token", { status: 500 });
  }
};
