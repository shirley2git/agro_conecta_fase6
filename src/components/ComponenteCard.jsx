import './ComponenteCard.css';

function ComponenteCard({ icon, title, description }) {

    return (
        <div className="componente-card">
            <div className="comp-icon">{icon}</div>
            <div className="comp-text">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default ComponenteCard;
