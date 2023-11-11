import { useState } from "react";
import "./App.css";
import { getGames } from "./api/getGames";
import { useEffect } from "react";

function App() {
  const [gameToday, setGameToday] = useState(null);

  const getGame = async () => {
    const game = await getGames();
    const game2 = game.response;

    const myGame = game2.filter((g) => {
      return g.id === +document.getElementById("gameId").value;
    })[0];
    setGameToday(myGame);
    // console.log(running);
    return myGame;
  };

  useEffect(() => {
    // getGame();
    setInterval(() => {
      getGame();
      console.log("running");
    }, 5000);
  }, []);

  return (
    <>
      <div>12680 warriors</div>
      <div>12677 bucks</div>
      <input type="text" id="gameId" />
      {gameToday && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ width: "20%" }}>
            <img
              src={gameToday.teams ? gameToday.teams.home.logo : ""}
              alt=""
              width="100%"
            />
          </div>
          <div>
            <span style={{ marginRight: "5px" }}>
              {gameToday.teams ? gameToday.teams.home.nickname : "loading..."}
            </span>
            <span>
              {gameToday.scores
                ? gameToday.scores.home.points
                  ? gameToday.scores.home.points
                  : 0
                : "loading..."}
            </span>
          </div>
          <div>vs</div>
          <div style={{ width: "20%" }}>
            <img
              src={gameToday.teams ? gameToday.teams.visitors.logo : ""}
              alt=""
              width="100%"
            />
          </div>

          <span style={{ marginRight: "5px" }}>
            {gameToday.teams ? gameToday.teams.visitors.nickname : "loading..."}
          </span>
          <span>
            {gameToday.scores
              ? gameToday.scores.visitors.points
                ? gameToday.scores.visitors.points
                : 0
              : "loading..."}
          </span>
        </section>
      )}
    </>
  );
}

export default App;
