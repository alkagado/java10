
var list = document.getElementById('list');
var add = document.getElementById('addElem');
var number = document.getElementsByTagName('li') ;
var x =number.length;

add.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'item'+ x++ ;
 


list.appendChild(element);  
})
 

console.log(number.length)
awTree(5);