import DriverList from "./components/DriverList.js";
import { useState } from "react";

function App() {
  const [drivers, setDrivers] = useState ([
    // can import data here i.e from JSON file, API, etc
    {
      id : 0,
      name: "Yuki Tsunoda",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true
    },
    {
      id : 1, 
      name : "Carlos Sainz",
      team : "Ferrari",
      country : "Spain",
      handsome : true
    },
  ]);

  const flipHandsome = (id) => {
    // const newDrivers = [];
    // // start with empty array. for specific driver i want to change, change the id and push to array
    // // going through every driver, making a copy of the array with one change
    // // replacing the entire list every single we call this function
    
    // for (const driver of drivers) {
    //   if (driver.id === id) {
    //     // reverses whatever driver.handsome was
    //     driver.handsome = !driver.handsome;
    //   }
    //   newDrivers.push(driver);
    // }
    // setDrivers(newDrivers);

    


    // need to pass in a new array so that React knows that something 
    // has changed because it needs a new reference 

    const newDrivers = [];
    for (const driver of drivers) {
      // Initialize new object
      const newDriver = {...driver};
      if (newDriver.id === id) {
        // reverses whatever driver.handsome was
        newDriver.handsome = !newDriver.handsome;
      }
      newDrivers.push(newDriver);
      // arrays are mutable
    }
    setDrivers(newDrivers);
  };

  const deleteDriver = (id) => {
    const newDrivers = [];

    for (const driver of drivers) {
      // add every driver to the new list except for the driver we want to delete
      if (driver.id !== id) {
        newDrivers.push(driver);
      }
    }
    console.log(newDrivers);
    setDrivers(newDrivers);
  };

  return (
    <div>
      {/* no parentheses bc not calling this function right now, passing down the func itself */}
      
      {/* Defining what we want our props object to be */}

      <DriverList 
      drivers={drivers} 
      handsomeCallback={flipHandsome} 
      deleteCallback={deleteDriver}
      />

    </div>
  );

}

export default App;
