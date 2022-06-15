import './Driver.css';

const Driver = (props) => {

    return (
    <div>
        <h2 className="driver__name">{props.name}</h2>
        <ul>
            <li>Team: {props.team}</li>
            <li>Country: {props.country}</li>
            <li>Handsome: {props.handsome ? "Hella fine" : "Not for me"}</li> 
        </ul>
    </div>
    );
}

export default Driver;