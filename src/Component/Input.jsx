
import PropTypes from "prop-types";

function Input({name, handleChange}) {

    return ( <div className="w-full">
        <label htmlFor="" className="w-[25%] ml-2 inline-block">{name}:</label>
        <input name={name} onChange={handleChange} type="number" min="0" max="100"  
        className="bg-red-400 border-2 text-white w-[200px]
         rounded-lg p-3"   />
    </div> );

    Input.propTypes = {
        name : PropTypes.string,
         handleChange: PropTypes.func,
    }

}

export default Input;