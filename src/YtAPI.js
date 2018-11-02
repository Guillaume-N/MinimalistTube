import searchYoutube from "youtube-api-v3-search";

const API_KEY = "AIzaSyAktD_QpHPS2F42M1PH0IEfOXR9F5hFw5U";

const searchVideos = term => {
  const options = {
    q: term,
    part: "snippet",
    type: "video"
  };
  return searchYoutube(API_KEY, options);
};

export default searchVideos;
