import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {MyContext} from "./MyContext.ts";
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MyContext.Provider value={1000}>
            <App/>
        </MyContext.Provider>
    </React.StrictMode>,
)
