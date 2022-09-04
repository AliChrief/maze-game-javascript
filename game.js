window.addEventListener("load",(event)=> {
    var wall=document.getElementsByClassName("boundary")
    let counter=0
    for (let i = 0; i< wall.length; i++){
    wall[i].addEventListener("mouseenter",road)
    }
    start.addEventListener("mouseenter",begin)
    start.addEventListener("click",newScore)
    end.addEventListener("mouseenter",theEnd)
    function begin(){
       for (let i = 0; i< wall.length; i++){
        wall[i].style.borderColor = "black"
       } 
        document.getElementById("status").innerHTML="Begin by moving your mouse over the 'S'."
    }
    function road(){
        for (let i = 0; i< wall.length; i++){
            wall[i].style.borderColor = "red"
        }
        
        document.getElementById("status").innerHTML="You lose"
        if (counter <= 0) {
            counter=0
            document.getElementById("status").innerHTML="You lost"
            document.getElementsByClassName("example")[0].innerHTML=counter+"points"
           }
        else{
            counter-=10
            document.getElementById("status").innerHTML="You lost"
            document.getElementsByClassName("example")[0].innerHTML=counter+"points"
           }
    }
    function theEnd(){
        counter+=5
        document.getElementById("status").innerHTML="You won"
        document.getElementsByClassName("example")[0].innerHTML=counter+"points"
    }
    function newScore(){
        counter=0
        document.getElementsByClassName("example")[0].innerHTML= counter + " "+ "points"
    }
})