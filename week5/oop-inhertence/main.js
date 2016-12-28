//Wizard Class
function Wizard (wizardInfo){
    this.name = wizardInfo.name
    this.color = wizardInfo.color
    this.spells = wizardInfo.spells
}

Wizard.prototype.castSpell = function(spellIndex){
    return this.name + "cast " + this.spells[spellIndex]
}


var gandalf = new Wizard({
    name: 'Gandalf',
    color: 'white',
    spells: ['you shall not pass', 'summon fireworks', 'king de-demonizer']
});


var drStrange = new Wizard({
    name: 'Dr. Stange MD',
    color: 'blue',
    spells: ['teleport', 'world bend', 'timebend']
});
    
    

function Alchemist (alchemistInfo){
    
    Wizard.call(this. alchemistInfo);
    new Wizard(wizardInfo)
    
    this.potions = alchemistInfo.potions  
    
}

//setting up the inheritance chain
Alchemist.prototype = new Wizard({}); //setting the alchemist prototype to a new, empty wizard object
Alchemist.prototype.contructor = Alchemist; //because the line above destroys the old Alchemist prototype object, we have to reset 

var merlin = new Alchemist({
    name: 'Merlin',
    color: 'green',
    spells: [gold, immortallity],
    potions: [beer, wine, gold],
})


//when you are accesssing a property of methos on an object it looks for that property or method in the following manner:

// 1 - looks on the object itself

____ instanceof ____


// ```````````````` NEW ES6 SNYTAX`````````````\\



use constructor

class Alchemist extends Wizard
    
    return super.castSpell(spellIndex)









