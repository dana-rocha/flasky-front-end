import Driver from "./components/Driver.js";
import DriverList from "./components/DriverList.js";

function App() {
  const drivers = [
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
    }
  ];
  return (
    <div>
      <DriverList drivers={drivers}/>
    </div>
  );
}

export default App;
