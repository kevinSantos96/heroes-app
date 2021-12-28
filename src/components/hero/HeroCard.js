import { Link } from "react-router-dom";


export const HeroCard = ({id, superhero, publisher,alter_ego,first_appearance,characters}) => {//resiviendo propiedad4es de data
    
    const imgPath = `/assets/${id}.jpg`;

    return (
        <div className="col">
            <div className="card animate__animated animate__fadeInRight">
             {/* {superhero}{id} */}

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imgPath} className="card-img" alt={superhero}/>
                    </div>
                    <div className="col-8">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) &&
                            <p className="text-muted">{characters}</p>
                        }
                        <p className="card-text"> 
                            <small className="text-muted">{ first_appearance}</small>
                        </p>
                        <Link to={ `/hero/${id}`} > 
                            <button className="btn btn-outline-success"> Mas..</button>
                        </Link>	
                    </div>
                </div>
           </div>
        </div>
    )
}
