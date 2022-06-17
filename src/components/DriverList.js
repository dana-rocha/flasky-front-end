import Driver from "./Driver.js";
import PropTypes from "prop-types";

const DriverList = (props) => {
    const driverComponents = props.drivers.map((driver) => {
        // turning JS driver objects to actual components 
        // can do this with map or for-loop to add to an array

        // array of different driver components
        return (
            <Driver
                // key helps React keep track of the components
                // specific to React
                // key is not accessible
                key={driver.id}
                id={driver.id}
                name={driver.name}
                team={driver.team}
                country={driver.country}
                handsome={driver.handsome}
            />
        )
    }

    );

    return (
        <div>
            <h1>Drivers</h1>
            {driverComponents} 
        </div> 
    )
};

// Expecting an array
DriverList.propTypes = {
    name : PropTypes.string.isRequired,
    team : PropTypes.string.isRequired,
    country : PropTypes.string.isRequired,
    handsome : PropTypes.bool.isRequired,
    id : PropTypes.number.isRequired
};

export default DriverList;