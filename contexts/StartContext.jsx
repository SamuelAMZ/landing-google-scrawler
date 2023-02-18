import { createContext, useState, useContext } from "react";

const StartContext = createContext();

export const StartProvider = ({ children }) => {
  const [startData, setData] = useState(null);

  const changeStartData = (newData) => {
    setData(newData);
  };

  return (
    <StartContext.Provider value={{ startData, changeStartData }}>
      {children}
    </StartContext.Provider>
  );
};

export function useStartContext() {
  return useContext(StartContext);
}

export default StartContext;
