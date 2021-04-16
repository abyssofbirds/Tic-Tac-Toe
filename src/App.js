import React, { useEffect, useState } from "react";

import "./App.css";

import TicTacElement from "./TicTacElement";

import popupService from "./services/popupService";
import ticTacToeGame from "./services/TicTacToeGame";

const App = () => {
  const [gameTable, updateGameTable] = useState(new Array(9).fill(""));

  useEffect(() => {
    ticTacToeGame.createNewGame();
    updateGameTable(ticTacToeGame.getState());
  }, []);

  function handleGameStep(num) {
    ticTacToeGame.makeStep(num);
    updateGameTable(ticTacToeGame.getState());

    if (ticTacToeGame.checkWin()) {
      alertWin();
      return;
    }
    if (ticTacToeGame.checkFail()) {
      alertLoser();
      return;
    }
    if (!ticTacToeGame.isEmptyCellsExists()) {
      alertEndOfGame();
      return;
    }
  }

  function resetGame() {
    ticTacToeGame.createNewGame();
    updateGameTable(ticTacToeGame.getState());
  }

  const alertEndOfGame = () => {
    popupService.fire("Игра окончена. Ничья &#128528;").then((result) => {
      if (!result.isConfirmed) return;
      resetGame();
    });
  };

  const alertWin = () => {
    popupService
      .fire("Вы выиграли!!!", {
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://i.pinimg.com/originals/4a/db/ca/4adbca36f44b37005a6f0c685f36117d.gif")
              left top
              no-repeat
        `,
      })
      .then((result) => {
        if (!result.isConfirmed) return;
        resetGame();
      });
  };

  const alertLoser = () => {
    popupService
      .fire("Вы проиграли(((", {
        customClass: {
          confirmButton: "order-2",
        },
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media1.giphy.com/media/l4FGrgquGXeNOS8aA/giphy.gif")
          right bottom
          no-repeat
        `,
      })
      .then((result) => {
        if (!result.isConfirmed) return;
        resetGame();
      });
  };

  return (
    <div className="mx-auto mt-5 my-app">
      <h1 className="text-center font-weight-bold text-logo">Tic-Tac-Toe</h1>
      <table className="table-bordered mx-auto mt-5">
        <tbody>
          <tr>
            <TicTacElement
              elem={gameTable[0]}
              handleChangeTable={handleGameStep}
              position={1}
            />
            <TicTacElement
              elem={gameTable[1]}
              handleChangeTable={handleGameStep}
              position={2}
            />
            <TicTacElement
              elem={gameTable[2]}
              handleChangeTable={handleGameStep}
              position={3}
            />
          </tr>
          <tr>
            <TicTacElement
              elem={gameTable[3]}
              handleChangeTable={handleGameStep}
              position={4}
            />
            <TicTacElement
              elem={gameTable[4]}
              handleChangeTable={handleGameStep}
              position={5}
            />
            <TicTacElement
              elem={gameTable[5]}
              handleChangeTable={handleGameStep}
              position={6}
            />
          </tr>
          <tr>
            <TicTacElement
              elem={gameTable[6]}
              handleChangeTable={handleGameStep}
              position={7}
            />
            <TicTacElement
              elem={gameTable[7]}
              handleChangeTable={handleGameStep}
              position={8}
            />
            <TicTacElement
              elem={gameTable[8]}
              handleChangeTable={handleGameStep}
              position={9}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
