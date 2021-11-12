import Navbar from "./Navbar/Navbar"
import Modal from "./Modal/Modal"
import Modal_L from "./Modal/Modal_L"
function Search({setOpen,setOpenl,open,openl}) {
    return (
        <div>
            <Navbar setOpen={setOpen} setOpenl={setOpenl}/>
            {open && <Modal setOpen={setOpen} setOpenl={setOpenl}/>}
      {openl && <Modal_L setOpenl={setOpenl}/>}
        </div>
    )
}

export default Search
