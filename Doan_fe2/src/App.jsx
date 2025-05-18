import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LoginForm from "./components/loginForm/login";
import Home from "./components/home/home";

function App() {
  const [count, setCount] = useState(0);

  return <LoginForm />;
}

export default App;
