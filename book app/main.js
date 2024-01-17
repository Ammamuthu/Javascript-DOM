let blackscreen =  document.getElementById("overlay")
let form = document.getElementById("forme")
let plusbtn = document.getElementById('add')
let formcancel = document.getElementById('formcancel')
let movie = document.getElementById('movie')
let description = document.getElementById('description')
let formadd =  document.getElementById('adding')
let content = document.getElementById('content')
let deldiv = document.getElementById('del')


plusbtn.addEventListener("click",function(){
    blackscreen.style.display="block";
    form.style.display="block";
    
})

formcancel.addEventListener('click',function(event){
    // Every button has a function that do there own , so we're preventing that
    event.preventDefault();
    blackscreen.style.display="none";
    form.style.display="none";
    
})

formadd.addEventListener('click',function(event){
    event.preventDefault();
    let div = document.createElement("div")
    div.setAttribute("class","popup")
    div.innerHTML=`<h1>${movie.value}</h1>
    <p>${description.value}</p>
    <button>Delete</button>`
    content.append(div)

    blackscreen.style.display="none";
    form.style.display="none";

    console.log(div)

}
)
function del(event){
    event.target.parentElement.remove()
}