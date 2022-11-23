// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Login } from './Login';
import { Home } from './Home';
import { setupApi } from './api';

const api = setupApi();

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    api.post("/auth/login")
      .then((response) => {
        setState(response.data);
      });
  }, []);

  return !state ? <Login /> : <Home />;
}

export default App;
