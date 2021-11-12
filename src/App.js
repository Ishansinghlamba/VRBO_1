import Home  from "./Components/Home";
import Search from "./Components/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useState} from "react";


function App() {
  const [open,setOpen] = useState(false);
  const [openl,setOpenl] = useState(false)
  return (
     <Router>
       <Switch>
         <Route exact path="/"><Home setOpen={setOpen} setOpenl={setOpenl} open={open} openl={openl}/></Route>
         <Route exact path="/search"><Search setOpen={setOpen} setOpenl={setOpenl} open={open} openl={openl}/></Route>


       </Switch>
     </Router>
      
  );
}

export default App;
