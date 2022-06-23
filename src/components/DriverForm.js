import { useState } from "react";

const defaultDriver = {
    name: '',
    country: '',
    team: '',
    handsome: true
};

const DriverForm = (props) => { 
    // State will hold one object 
    const [formData, setFormData] = useState(defaultDriver);

    return(
        <form>
            {/* Good semantic HTML, keeps all forms together in one. Put a label for each input form */}
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name}/>

            <label htmlFor="country">Country</label>
            <input type="text" name="country" value={formData.country}/>

            <label htmlFor="team">Team</label>
            <input type="text" name="team" value={formData.team}/>
            
        </form>
    );
};

export default DriverForm;