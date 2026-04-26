import './DesafiosCard.css';

function DesafiosCard({ icon, title, description }) {

    return (
        <div className="card-desafio">
            <div className="card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
};

export default DesafiosCard;
