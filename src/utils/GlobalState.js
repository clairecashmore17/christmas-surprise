import React, { createContext, useContext, useReducer } from "react";

const globalState = {
  town: 0,
  santas: 0,
  bakery: 0,
  reindeer: 0,
  dialogue_index: 0,
  challenge: false,
  game_over: false,
};
const GameContext = createContext(globalState);
const dispatchStateContext = createContext(undefined);

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    globalState
  );
  return (
    <GameContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </GameContext.Provider>
  );
};

const useGlobalState = () => [
  useContext(GameContext),
  useContext(dispatchStateContext),
];

export { GameProvider, useGlobalState };
