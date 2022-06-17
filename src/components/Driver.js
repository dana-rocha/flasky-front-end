import './Driver.css';
import PropTypes from "prop-types";
import { useState } from "react";

const Driver = (props) => {
    // We are able to pass everything through the props
    // I have access to props.handsomeCallback

    // supplying id to flipHandsome
    const flipMyHandsome = () => {
        props.handsomeCallback(props.id);
    };

    const deleteMe = () => {
        props.deleteCallback(props.id);
    }

    return (
        <div>
            <h2 className="driver__name">{props.name}</h2>
            <ul>
                <li>Team: {props.team}</li>
                {/* <li>Country: {country}</li> */}
                <li>Handsome: {props.handsome ? "Hella fine" : "Not for me"}</li> 
                <button onClick={flipMyHandsome}>Change Handsomeness</button>
                <button onClick={deleteMe}>Delete</button>
                {/* Set Country
                <input type="text" value={country} 
                onChange={(event) => setCountry(event.target.value)}></input> */}
            </ul>
        </div>
    );
};

Driver.propTypes = {
    name : PropTypes.string.isRequired,
    team : PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    handsome : PropTypes.bool,
    id : PropTypes.number.isRequired
};

export default Driver;