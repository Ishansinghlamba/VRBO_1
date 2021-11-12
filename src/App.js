import Home  from "./Components/Home";
import Search from "./Components/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
     <Router>
       <Switch>
         <Route exact path="/"><Home></Home></Route>
         <Route exact path="/search"><Search></Search></Route>


       </Switch>
     </Router>
      
  );
}

export default App;
