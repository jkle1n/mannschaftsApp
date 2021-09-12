import React, { useContext } from 'react';
import AppContext from './AppContext';
const View = (children: any) => {
    const { app } = useContext(AppContext);
    const { user } = app;
    return (
        <div> Hello, {user.displayName}!</div>
    );
};
export default View;