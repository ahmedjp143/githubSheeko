import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Headers from './Headers';
import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headers />
      <Sidebar />

      <h1>hi ahmed</h1>
      <h1>hi hassan</h1>
    </>
  );
}

export default App;
