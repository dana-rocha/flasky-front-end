import Driver from "./Driver.js";
import PropTypes from "prop-types";

const DriverList = (props) => {
    const driverComponents = props.drivers.map((driver) => {
        return (
            <Driver
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
    team : PropTypes.string,
    country : PropTypes.string.isRequired,
    handsome : PropTypes.bool,
    id : PropTypes.number.isRequired
};

export default DriverList;