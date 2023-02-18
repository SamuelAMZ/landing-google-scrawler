import { createContext, useState, useContext } from "react";

const StartFormContext = createContext();

export const StartFormProvider = ({ children }) => {
  const [data, setData] = useState(false);

  const changeData = (newData) => {
    setData(newData);
  };

  return (
    <StartFormContext.Provider value={{ data, changeData }}>
      {children}
    </StartFormContext.Provider>
  );
};

export function useAppContext() {
  return useContext(StartFormContext);
}

export default StartFormContext;
