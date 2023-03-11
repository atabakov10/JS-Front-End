function movies(input) {
    let array = [];
    for (const lines of input) {
        if (lines.includes('addMovie')){
            let nameMovie = lines.split('addMovie ')[1];
            array.push({name: nameMovie});
        }else if (lines.includes('directedBy')){
            let splitter = lines.split(' directedBy ');
            let movie = splitter[0];
            let director = splitter[1];
            let movieFinder = array.find(movieObj => movieObj.name === movie);
            if (movieFinder){
                movieFinder.director = director;
            }
        }else if (lines.includes('onDate')){
            let splitter = lines.split(' onDate ');
            let movie = splitter[0];
            let date = splitter[1];
            let movieFinder = array.find(movieObj => movieObj.name === movie);
            if (movieFinder){
                movieFinder.date = date;
            }
        }
    }

    for (const movie of array) {
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }

}

movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])