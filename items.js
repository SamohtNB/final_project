var monElement = document.getElementsByClassName("sup2");

document.addEventListener("DOMContentLoaded", function () {
        let myBoxItems = document.querySelectorAll('.majBoxItem')
        myBoxItems.forEach((box) => {
            // On ajoute le listener pour le bouton .net
            box.querySelector(".next").addEventListener("click",() => {
                try{
                    myFirstDomNode = box.querySelector('.sup');
                    mySecondDomNode = box.querySelector('.sup2');
                    myFirstDomNode.classList.add("sup2")
                    myFirstDomNode.classList.remove("sup")
                    mySecondDomNode.classList.add("sup")
                    mySecondDomNode.classList.remove("sup2");
                }catch(e){
                    console.log(e);
                }
            })
            // On ajoute le listener pour le bouton .prev
            box.querySelector(".prev").addEventListener("click",() => {
                try{
                    myFirstDomNode = box.querySelector('.sup');
                    mySecondDomNode = box.querySelector('.sup2');
                    myFirstDomNode.classList.add("sup2")
                    myFirstDomNode.classList.remove("sup")
                    mySecondDomNode.classList.add("sup")
                    mySecondDomNode.classList.remove("sup2");
                }catch(e){
                    console.log(e);
                }
            })

        })
})
