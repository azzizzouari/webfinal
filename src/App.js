import { createContext, useState} from "react";
import "./App.css";
import MainRouter from "./MainRouter";
import UserContext from "./UserContext.js" ;

export const TodoContext = createContext({});

function App() {

  const [cart, setCart] = useState([])
  return (
    <UserContext.Provider value={{cart, setCart}}>
      <TodoContext.Provider >
        <div className="App">
          <MainRouter />
        </div>
      </TodoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
