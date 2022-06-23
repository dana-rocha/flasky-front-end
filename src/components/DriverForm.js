import { useState } from "react";

const defaultDriver = {
    name: "",
    country: "",
    team: "",
    handsome: true
};

const DriverForm = (props) => { 
    // State will hold one object 
    const [formData, setFormData] = useState(defaultDriver);

    const onFormChange = (event) => {
        // target is where i'm pressing the key aka which input box
        // value is what it's changing to

        // console.log(event.target.name);
        // console.log(event.target.value);

        const stateName = event.target.name;
        // Shows us what's in that text box
        const inputValue = event.target.value;

        // console.log(stateName);
        // console.log(inputValue);

        // Okay with shallow copy here because defaultDriver is not nested
        // If it was nested, would need a deeper copy
        const newFormData = {...formData};
        // New object, change it so it has new info in it
        newFormData[stateName] = inputValue;

        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        // event is submit event aka user pressed the submit button
        // Supress refreshing the page and then call addDriverCallback
        event.preventDefault();

        props.addDriverCallback(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            {/* Good semantic HTML, keeps all forms together in one. Put a label for each input form */}
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={onFormChange}/>

            <label htmlFor="country">Country</label>
            <input type="text" name="country" value={formData.country} onChange={onFormChange}/>

            <label htmlFor="team">Team</label>
            <input type="text" name="team" value={formData.team} onChange={onFormChange}/>
            
            <input type="submit" value="Add Driver!"/>
        </form>
    );
};

export default DriverForm;