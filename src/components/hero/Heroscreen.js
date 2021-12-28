import { useParams, Navigate, useNavigate} from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";
import {useMemo} from 'react';

export const Heroscreen = () => {
    const navigate = useNavigate();

    const {heroeId} = useParams();// nos manda la informacion del id
    const hero = useMemo( ()=>getHeroById(heroeId),[heroeId] ); //usamos memo para optimizar la llamada

    const handlereturn =()=>{
                navigate(-1)
            }

     if (!hero){
         alert('Heroe no existe!');
         return <Navigate to='/'/>
     }

     const imagePath = `/assets/${hero.id}.jpg`;
     
     

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={imagePath}
                alt={hero.superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"/>
            </div>
            <div className="col-8">
                <h3 className="text-center">{hero.superhero}</h3>
                <ul className="list-group animate__animated animate__fadeInRight">
                    <li className="list group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className="list group-item"><b>Publisher: </b>{hero.publisher}</li>
                    <li className="list group-item"><b>Primera Aparición: </b>{hero.first_appearence}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{ hero.characters }</p>

                <button className="btn btn-outline-info"
                        onClick={ handlereturn }>
                    Regresar
                </button>
            </div>
        </div>
    )
}
