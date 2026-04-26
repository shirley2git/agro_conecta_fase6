import './RecursosCard.css';

function RecursosCard({ icon, title, description }) {

    return (
        <div className="recurso-card">
            <div className="recurso-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
};

export default RecursosCard;




