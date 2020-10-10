import React from 'react';

const AppContext = React.createContext({ client: null });

export function AppProvider({ children, client }) {
  const value = { client };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppClient() {
  return React.useContext(AppContext).client;
}
