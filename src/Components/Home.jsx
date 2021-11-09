import Banner from "./Banner/Banner";
import Crousel from "./Crousel/Crousel";
import Extra from "./Extra/Extra";
import Navbar from "./Navbar/Navbar";
import Main from "./Section-1/Main";
import {useState} from "react";
import "../App.css"
// import Modal from "./Components/Modal/Modal";
function Home() {
    const [open,setOpen] = useState(false)

    return (
        <div>
            <Navbar setOpen={setOpen}/>
      <Banner/>
      <Main/>
      <Crousel/>
      <Extra/>
      {/* {open && <Modal setOpen={setOpen}/>} */}
      <div className="feedback">feedback</div>
        </div>
    )
}

export default Home
