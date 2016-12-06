// console.log(document)

// querSelector takes a node slection criteria
// querySelector takes a selector, CSS style
// console.log( document.querySelector("#main-title").textContent)

var btn = document.getElementsByClassName('crazy-btn')[0];

console.log(btn.textContent)

btn.addEventListener('click', function(){
  counter++
  if(counter >= 5){
    console.log("Stop clicking me!")
  }
  console.log('Clicked!');
});

console.log('Im online')