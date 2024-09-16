
import PropTypes from "prop-types";

function Navbar({setToggle}) {
    return ( <>
    <button className="bg-green-600 p-4 hover:bg-green-300 text-white" onClick={()=>setToggle(true)} >Effect</button>
    <button className="bg-green-600 p-4 hover:bg-green-300 text-white" onClick={()=>setToggle(false)}>State</button>
    </> );
}

Navbar.propTypes = {
    setToggle : PropTypes.func,
}

export default Navbar;