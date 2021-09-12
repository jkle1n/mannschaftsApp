import React, { createContext, useState } from 'react';
const user = window.__user || { displayName: 'Anonymous' };
const AppContext = createContext({ app: { user } });
const INIT_STATE = { user };
const AppContextProvider = (props) => {
    const [app, setApp] = useState(INIT_STATE);
    return (
        <AppContext.Provider value={{ app }}>
            {props.children}
        </AppContext.Provider>
    );
};
const AppContextConsumer = AppContext.Consumer;
export { AppContext, AppContextProvider, AppContextConsumer };
export default AppContext;