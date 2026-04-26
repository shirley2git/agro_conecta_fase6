import './Pilar.css';

function Pilar({ title, description }) {

    return (
        <div className="pilar">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
};

export default Pilar;
