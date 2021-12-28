
import { heroes } from "../data/heroes"


export const getHeroesbyName =(name ='')=>{

    console.log('me vengo!!!')

    if(name.length === 0 ) {
        return[];
    }

    name = name.toLowerCase();
    return heroes.filter(hero=>hero.superhero.toLowerCase().includes(name))
}