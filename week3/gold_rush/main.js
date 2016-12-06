angular.module("gold", [])
    .controller("GoldRush", findGold);
    
function findGold(){
    
    var gCtrl = this;
    
    gCtrl.iconArea = [];
    gCtrl.markers = [];
    
    
    
    gCtrl.coords= function($event){
//         var x = event.clientX;
//         var y = event.clientY;
//         var coords = "X coords: " + x + ", Y coords: " + y;
       
        
//         console.log(coords)
        
      } 
    
    gCtrl.markerImg = "http://i.imgur.com/dKGlvhHt.png"
    
        
 
    
    gCtrl.addMarker = function($event){
        var x = event.clientX;
        var y = event.clientY;
        var coords = "X coords: " + x + ", Y coords: " + y;

        var marker = {
            x: x,
            y: y,
         }
       
        
        console.log(coords)
        
        console.log("adding marker!");
         gCtrl.markers.push(marker);
        console.log(gCtrl.markers);
         gCtrl.iconArea.push(coords);
        }
    
    gCtrl.removeMarker = function($index, $event){
        gCtrl.markers.splice($index, 1);
        $event.stopPropagation();
       }
        
    
}
    
