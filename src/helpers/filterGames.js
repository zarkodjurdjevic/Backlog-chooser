

export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {

    //je mapt en zet alles vanuit de games array in de game en zo kan je de gegevens er vanuit halen  zoals naam & id
    return toBeSearchedArray.filter(game => {
        
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1 ){
            return game;
        }
        
    });
    
}

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) =>{
    return toBeSearchedArray.filter(game => {
        let found = false;
        game.platforms.forEach(platform =>{
            if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
                found = true;
            }
        });
        if(found === true){
            return game;
        }
    });
}
 
