import Navbar from "./Navbar/Navbar"
import Modal from "./Modal/Modal"
import Modal_L from "./Modal/Modal_L"
import Search_after from "./Search_after/Search_after"
function Search({setOpen,setOpenl,open,openl}) {
    return (
        <div>
            <Navbar setOpen={setOpen} setOpenl={setOpenl}/>
            {open && <Modal setOpen={setOpen} setOpenl={setOpenl}/>}
      {openl && <Modal_L setOpenl={setOpenl}/>}
      <Search_after/>
        </div>
    )
}

export default Search
