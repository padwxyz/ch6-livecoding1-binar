import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar2 from './components/navbar';

function Navbar1() {
  return (
  <div>
    <h1>Hi</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>FAQ</li>
    </ul>
  </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const menu = ["menu1", "menu2", "menu3"];

  return (
    <>
      <Navbar1 />
      <Navbar2 menu={menu}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
