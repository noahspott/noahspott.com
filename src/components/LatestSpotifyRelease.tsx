import { useState, useEffect } from "react";
import {
  getArtwork,
  getSpotifyUrl,
  getLatestAlbum,
  getAlbumName,
  getArtistName,
} from "../utils/spotifyUtils";
import { FaSpotify } from "react-icons/fa6";
import type { Album } from "../types/spotifyTypes";

export default function LatestSpotifyRelease() {
  const [isFetching, setIsFetching] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [latestAlbum, setLatestAlbum] = useState<Album | undefined>(undefined);

  function getButtonMessage(isFetching: boolean, isFetched: boolean) {
    if (isFetching) {
      return "FETCHING...";
    } else if (isFetched) {
      return "LISTEN ON SPOTIFY";
    } else {
      return "CALL SPOTIFY API";
    }
  }

  function getDisplayMessage(isFetched: boolean) {
    return isFetched ? (
      <>
        Click on the artwork to{" "}
        <span className="font-bold">listen on Spotify</span>!
      </>
    ) : (
      <>
        Click the button above to display my latest music release from the{" "}
        <span className="font-bold">Spotify Web API</span>.
      </>
    );
  }

  async function handleButtonClick() {
    setIsFetching(true);
    setLatestAlbum(await getLatestAlbum());
    setIsFetching(false);
    setIsFetched(true);
  }

  return (
    <div className="w-72 max-w-72">
      <div className="flex flex-col gap-4">
        <div
          className={`h-72 w-72 ${!isFetched && "border-2 border-white"} ${isFetching && "animate-pulse border-2 border-white bg-white"}`}
        >
          {isFetched && (
            <a
              href={getSpotifyUrl(latestAlbum)}
              className="animate-fadeIn duration-100 hover:opacity-70"
            >
              <img
                src={getArtwork(latestAlbum)}
                alt="Latest ivoryHAUS release artwork"
                className="w-full"
              />
            </a>
          )}
        </div>
        {isFetched && (
          <p className="animate-fadeIn text-center text-xs uppercase tracking-wider">
            {getAlbumName(latestAlbum)} - {getArtistName(latestAlbum)}
          </p>
        )}
        {!isFetched && (
          <button
            onClick={handleButtonClick}
            className={`flex items-center justify-center gap-4 bg-spotify-500 p-4 font-black uppercase tracking-wider text-white duration-100 hover:opacity-70 focus:opacity-70 disabled:line-through disabled:opacity-50 disabled:hover:scale-100 ${isFetching && "animate-pulse"} `}
          >
            {getButtonMessage(isFetching, isFetched)}
            <FaSpotify />
          </button>
        )}
        <p className={`${isFetched && "animate-fadeIn"}`}>
          {getDisplayMessage(isFetched)}
        </p>
      </div>
    </div>
  );
}
