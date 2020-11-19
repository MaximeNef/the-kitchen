const ul = document.querySelector('ul')
const enfant = ul.childNodes;
console.log(enfant)
for(let list of enfant){
    
    if(list.nodeType === 1){
    console.log(list.textContent)
    
    }
   if(list.textContent ==='Fast and Furious'){

    const first = ul.firstElementChild
    list.parentElement.insertBefore(list, first )
   }
}
