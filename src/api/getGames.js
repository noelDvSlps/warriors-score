import { API_CONFIG } from "./config";

export const getGames = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "X-RapidAPI-Key",
    "8cea0fddb2msha3b4c49045acd20p1b70d5jsn818197337df7"
  );
  myHeaders.append("X-RapidAPI-Host", "api-nba-v1.p.rapidapi.com");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(
    API_CONFIG.baseUrl + "/games?season=2023&team=11",
    requestOptions
  ).then((response) => {
    if (!response.ok) {
      throw new Error("could not get game");
    }

    return response.json();
  });
};
