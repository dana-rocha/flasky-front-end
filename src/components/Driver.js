import './Driver.css';
import PropTypes from "prop-types";
import { useState } from "react";

const Driver = (props) => {
    const [handsome, setHandsome] = useState(props.handsome); 
    const [country, setCountry] = useState(props.country); 
    const flipHandsomeness = () => {
        // console.log(event);
        if (handsome) {
            setHandsome(false);
        } else {
            setHandsome(true);
        }
    }; 

    // const changeCountryName = (event) => {
    //     setCountry(event.target.value);
    // }
    return (
        <div>
            <h2 className="driver__name">{props.name}</h2>
            <ul>
                <li>Team: {props.team}</li>
                <li>Country: {country}</li>
                <li>Handsome: {handsome ? "Hella fine" : "Not for me"}</li> 
                <button onClick={flipHandsomeness}>Change Handsomeness</button>
                Set Country
                <input type="text" value={country} onChange={(event) => setCountry(event.target.value)}></input>
            </ul>
        </div>
    );
};

Driver.propTypes = {
    name : PropTypes.string.isRequired,
    team : PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    handsome : PropTypes.bool.isRequired,
    id : PropTypes.number.isRequired
}

export default Driver;