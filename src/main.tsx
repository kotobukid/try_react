import React, {ReactNode, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {MyContext} from "./MyContext.ts";
import './index.css'



const MyProvider = ({children}: {children: ReactNode}) => {
    const [one_value, set_one_value] = useState(2000);

    return (
        <MyContext.Provider value={{ one_value, set_one_value }}>
            { children }
        </MyContext.Provider>
    )
};


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyProvider>
            <App/>
        </MyProvider>
    </React.StrictMode>,
)
