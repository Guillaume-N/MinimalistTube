import searchYoutube from "youtube-api-v3-search";
import YOUTUBE_API_KEY from "./API_KEYS";

const searchVideos = term => {
  const options = {
    q: term,
    part: "snippet",
    type: "video"
  };
  return searchYoutube(YOUTUBE_API_KEY, options);
};

export default searchVideos;
