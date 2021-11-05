import Banner from "./Components/Banner/Banner";
import Crousel from "./Components/Crousel/Crousel";
import Extra from "./Components/Extra/Extra";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Section-1/Main";
import {useState} from "react"
import Modal from "./Components/Modal/Modal";


function App() {
  const [open,setOpen] = useState(false)
  return (
    <div >
      <Navbar setOpen={setOpen}/>
      <Banner/>
      <Main/>
      <Crousel/>
      <Extra/>
      {open && <Modal/>}
    </div>
  );
}

export default App;
