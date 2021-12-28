import { heroes } from "../data/heroes";

export const getHeroByPublisher=(publisher)=>{

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher) ){
        throw new Error(`${ publisher } es un publisher no valido`);
    }
    return heroes.filter(hero=> hero.publisher === publisher);
}