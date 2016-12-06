angular.module('JoeDirt, []')
    .controller('brandy', brandyController);

function brandyController(){
    
    var brandy = this;
    
    brandy.greeting = "Life's a garden, dig it";
    
    brandy.characters=[
        "Joe",
        "Brandy",
        "Zander",
        "Kicking Wing",
        "Joe",
    ];
    
    brandy.charactersObject - {
        main : "Joe",
        supporting : "Brandy",
        fireworksguy : "Kicking Wing",
    }
    
    brandy.scene = [
        {
            name: 'Intro',
            set : 'Trailer Park',
            actors : ['Joe', 'Brandy']
        }
        
        {
            name: 'fdjskal',
            set : 'fdsafsa',
            actors : ['gfdsg', 'gfds']
        }
        
        {
            name: 'bvcxbcv',
            set : 'rtwertwe',
            actors : ['fgsdg', 'bvcx']
        }
        
        
        
    ]
    
    
}






/*

brandy.character.forEach(function(castMember))


*/