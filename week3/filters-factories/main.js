/*

filters are used to fomat values

{{expression | currency}}




Factories

used for passing data or methods to muliple controllers, holding or sharing infomation

- closest to the M in MVC, hold a lot of your data

like controllers, they are registered to a module 
    used for?
        most often for data or common METHODS
        can be used in multiple CONTROLLERS
            share data between them
            
            
Factories are 'singletons'
    factories are only ever created once
    
as much as possible, try and get your data to live in one place... take the data, and put it in the factory.

return MUST HAVE A RETURN STATEMENT!
inject it using the 'string' name $inject

they generally return objects

*/


angular.module("WestWorld")
    .controller("Bernard", bernardCtrl);

function bernardCtrl(){
    var dCtrl = bernard
}

