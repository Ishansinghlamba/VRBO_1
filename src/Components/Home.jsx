import Banner from "./Banner/Banner";
import Crousel from "./Crousel/Crousel";
import Extra from "./Extra/Extra";
import Navbar from "./Navbar/Navbar";
import Main from "./Section-1/Main";
import {useState} from "react";
import "../App.css"
import Modal from "./Modal/Modal";
import Modal_L from "./Modal/Modal_L";
function Home() {
    const [open,setOpen] = useState(false);
    const [openl,setOpenl] = useState(false)

    return (
        <div>
            <Navbar setOpen={setOpen} setOpenl={setOpenl}/>
      <Banner/>
      <Main/>
      <Crousel/>
      <Extra/>
      {open && <Modal setOpen={setOpen}/>}
      {openl && <Modal_L setOpenl={setOpenl}/>}

      <div className="feedback">feedback</div>
        </div>
    )
}

export default Home
