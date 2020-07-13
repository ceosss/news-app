import axios from "axios";

export const getTendingTopics = async () => {
  const getTendingTopicsURL =
    "https://api.breakingapi.com/trending?api_key=5FF9D39A5CD24C99A41999DBCF17D251&locale=en-IN";

  const trendingTopics = await axios.get(getTendingTopicsURL);
  return trendingTopics;
};

export const getNews = async (query) => {
  let getNewsURL;
  query = query.toLowerCase();
  query = query.replace(/ /g, "");

  if (!query || query === "headlines") {
    getNewsURL = `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&apiKey=9e7d7cc5ef0b45b6bb33680e579917dc`;
  } else {
    getNewsURL = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=9e7d7cc5ef0b45b6bb33680e579917dc`;
  }
  const news = await axios.get(getNewsURL);
  return news;
};
