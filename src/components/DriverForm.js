const DriverForm = (props) => { 
    return(
        <form>
            {/* Good semantic HTML, keeps all forms together in one. Put a label for each input form */}
            <label htmlFor="country">Country</label>
            <input type="text" name="country"/>
            
        </form>
    );
};

export default DriverForm;