import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyContext} from "./MyContext.ts";

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);

    const {one_value, set_one_value} = useContext(MyContext);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => set_one_value(one_value + 1)}>context value: { one_value }</button>
                <br/>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <br/>
                <button onClick={() => setCount2((count) => count - 1)}>
                    count is {count2}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
