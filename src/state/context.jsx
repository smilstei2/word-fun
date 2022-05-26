import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [word, setWord] = useState([]);

  return (
    <AppContext.Provider value={{ word, setWord }}>
      {props.children}
    </AppContext.Provider>
  );
};
