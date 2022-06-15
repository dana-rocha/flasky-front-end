import Driver from "./Driver.js";

const DriverList = (props) => {
    const driverComponents = props.drivers.map((driver) => {
        return (
            <Driver
                id={driver.id}
                name={driver.name}
                team={driver.name}
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

export default DriverList;