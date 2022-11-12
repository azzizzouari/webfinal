import { createContext} from "react";
import "./App.css";
import MainRouter from "./MainRouter";
import UserContext from "./UserContext.js" ;

export const TodoContext = createContext({});
function App() {
  return (
    <UserContext.Provider >
      <TodoContext.Provider >
        <div className="App">
          <MainRouter />
        </div>
      </TodoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
