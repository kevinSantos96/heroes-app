
import { useNavigate, useLocation } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { getHeroesbyName } from "../../selectors/getHeroesbyName"
import { HeroCard } from "../hero/HeroCard"
import { useMemo } from "react"


export const Searchscreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();// nos dice en la ruta que estamos
    // console.log(location.search)
    const {q =''} = queryString.parse(location.search)//guardamos el nombre que se esta buscando
    
    const [{searchText},hanleInputChange]= useForm({searchText: q})//mandamos el value de nuestro form

    const heroesFilter = useMemo(()=>getHeroesbyName(q), [q]);  

    const handleSearch = (e)=>{
        e.preventDefault();
        if(searchText.length <=2){
            alert('Busqueda no valida')
        }
        navigate(`?q=${searchText}`)
        // reset();
    }
    
    return (
        <>
            <h1>Busqueda de Heroes</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Busqueda</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value = { searchText }
                            onChange={hanleInputChange}
                        />
                        <button 
                            type="submit"
                            className="btn btn-primary mt-2"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Resultados</h4>
                    <hr/>
                    
                    {
                        (q==='')?<div className="alert alert-info"> Busca un Heroe </div>
                        :(heroesFilter.length === 0) && 
                        <div className="alert alert-danger"> No hay resultados de: {q}  </div>
                    }


                    {
                        heroesFilter.map(h =>(
                            <HeroCard
                                key={h.id} 
                                 {...h}
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}

