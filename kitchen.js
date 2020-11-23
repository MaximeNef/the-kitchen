const ul = document.querySelector('ul')
const enfant = ul.childNodes;
console.log(enfant)
//-------------------//


//--->  sert a la fonction clone 

//for (let list of enfant) 

for (let i = 0; i < enfant.length; i++) {
    const list = enfant[i];

    if (list.nodeType === 1) {
        console.log(list.textContent)

    }

    if (list.textContent === 'Fast and Furious') {
        const first = ul.firstElementChild
        list.parentElement.insertBefore(list, first)
        list.className = 'important'
    }


    list.addEventListener('click', function () {

        if (list.textContent === 'Fast and Furious') {
            alert(list.textContent + " :The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        } else {
            alert(list.textContent)
        }
    })

    for (j = i + 1; j < enfant.length; j++) {
        const newList = enfant[j];
        if (list.isEqualNode(newList)) {
            ul.removeChild(newList)
        }
    }
}




function shuffle() {
    const oldUl = document.querySelector('ul')
    const newUl = document.createElement('ul')

    newUl.appendChild(oldUl.children[0])

    for (let i = 0; oldUl.children.length > 0; i++) {
        const oldLi = oldUl.children
        const randomIndex = Math.floor(oldLi.length * Math.random())
        newUl.appendChild(oldLi[randomIndex])
    }

    document.body.removeChild(oldUl)
    document.body.appendChild(newUl)




}

document.body.addEventListener('keyup', function (e) {
    if (e.key == 'r') {
        shuffle()
    }


})

let fAndf = document.querySelector("li")
document.body.addEventListener('keyup', function (e) {
    if (e.key == "d") {
        const clone = fAndf.cloneNode(true);
        ul.appendChild(clone)
    }
})






