const DriverForm = (props) => { 
    return(
        <form>
            {/* Good semantic HTML, keeps all forms together in one. Put a label for each input form */}
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>

            <label htmlFor="country">Country</label>
            <input type="text" name="country"/>

            <label htmlFor="team">Team</label>
            <input type="text" name="team"/>
            
        </form>
    );
};

export default DriverForm;