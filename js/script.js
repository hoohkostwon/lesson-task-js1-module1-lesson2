//Q1
document.querySelector ("h3").innerHTML = "Hello";

//Q2
const heading4= document.querySelectorAll("h4");
for (let i=0; i<heading4.length; i++) {
    heading4[i].style.marginBottom= "-20px";
}

//Q3
heading4[1].style.backgroundColor="red";

//Q4
const firstP = document.querySelector("p.one");
firstP.style.color= "blue";
firstP.style.fontSize= "24px";

//Q5


//Q6

const addContent= document.querySelector (".content");
addContent.innerHTML += "<P> Another paragraph </P>";

//Q7
const contentItem = document.querySelectorAll(".content p")
for (let i=0; i< contentItem.length; i++) {
    contentItem[i].innerHTML += "<div class=content-item> XX </div>";
}

//Q8
const liItem = document.querySelector ("#services");
liItem.innerHTML+= "<li>new item</li>";

//Q9
liItem.classList.remove ("service-list");

//Q10
document.querySelector("#hide").style.display= "none";