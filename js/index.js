//speed
var eggSpeed = 1.5 ; 
function speed()
{   
    if(eggSpeed<=3.5)
        eggSpeed += 0.2;
    console.log(eggSpeed);
}

//start play

    var Egg1Move ;
    var Egg2Move ;
    var Egg3Move ;
    var Egg1OnFloor ;
    var Egg2OnFloor ;
    var Egg3OnFloor ;
    var Egg1OnBasket ;
    var Egg2OnBasket ;
    var Egg3OnBasket ;
    var END;
    var SPEED ;

var play = document.getElementById("play");
play.addEventListener("click" ,function(){
    document.getElementById("start").style.display = "none";
     Egg1Move = setInterval(egg1Move , 10);
     Egg2Move = setInterval(egg2Move , 10);
     Egg3Move = setInterval(egg3Move , 10);
     Egg1OnFloor = setInterval(egg1OnFloor,1);
     Egg2OnFloor = setInterval(egg2OnFloor,1);
     Egg3OnFloor = setInterval(egg3OnFloor,1);
     Egg1OnBasket = setInterval(egg1OnBasket,1);
     Egg2OnBasket = setInterval(egg2OnBasket,1);
     Egg3OnBasket = setInterval(egg3OnBasket,1);
     END = setInterval(end,1);
     SPEED = setInterval(speed,5000);
} )


//end game
function end()
{
    if(lifeCount < 1)
    {
        document.getElementById("main").style.display ="none";
        document.getElementById("finalScore").innerHTML = cout;
        document.getElementById("end").style.display = "block ";
        clearInterval(Egg1Move);
        clearInterval(Egg2Move);
        clearInterval(Egg3Move);
        clearInterval(Egg1OnBasket);
        clearInterval(Egg2OnBasket);
        clearInterval(Egg3OnBasket);
        clearInterval(Egg1OnFloor);
        clearInterval(Egg2OnFloor);
        clearInterval(Egg3OnFloor);
        clearInterval(END);
        clearInterval(SPEED);
    }
}

//playAgain
var playAgain = document.getElementById("playAgain")
playAgain.addEventListener("click" , function() {window.location.reload()});

/* basket move*/ 
var basket = document.getElementById("basket");
var basketScore = document.getElementById("basketScore");
var cout = 0;
basketScore.innerHTML=cout;
document.body.addEventListener("mousemove",function(e)
{
    basket.style.left = e.clientX;
})





/*eggs move*/
var floor = document.getElementById("floor");
var floorTop;
var score = document.getElementById("score");
score.innerHTML = cout;
var life = document.getElementById("life");
var lifeCount = 10;
life.innerHTML = lifeCount ;
//egg1
var egg1 = document.getElementById("egg1");
var egg1Bottom;
var egg1Top = 40;
function egg1Move()
{     
    egg1Top += eggSpeed ;
    egg1.style.top = egg1Top + "px" ;
}

function egg1OnFloor()
{
    egg1Bottom = Math.round(egg1.getBoundingClientRect().bottom);
    floorTop = Math.round(floor.getBoundingClientRect().top);
    if(Math.round((egg1Bottom + egg1Top) / 2) >= floorTop)
    {
        brokenEgg3.style.display =   "block" ;
        egg1Top = 40;
        egg1.style.top = egg1Top + "px";
        lifeCount--;
        life.innerHTML = lifeCount ;
    }
}
function egg1OnBasket()
{
    var egg1X = Math.round((egg1.getBoundingClientRect().left + egg1.getBoundingClientRect().right) / 2);
    var egg1Y = Math.round((egg1Top + egg1Bottom) / 2);
    var basketLeft = Math.round(basket.getBoundingClientRect().left);
    var basketRight = Math.round(basket.getBoundingClientRect().right);
    var basketTop =Math.round( basket.getBoundingClientRect().top);
    if( egg1X >= basketLeft && egg1X <= basketRight )
    {
        if( basketTop  == egg1Bottom || (egg1Bottom >= basketTop && egg1Bottom <= basketTop +   50) )
        {
            egg1Top = 40;
            egg1.style.top = egg1Top + "px";
            cout++;
            basketScore.innerHTML=cout;
            score.innerHTML = cout; 
        }
    }   
}


//egg2
var egg2 = document.getElementById("egg2");
var egg2Bottom;
var egg2Top = 40;
function egg2Move()
{     
    egg2Top += eggSpeed ;
    egg2.style.top = egg2Top + "px" ;   
}
function egg2OnFloor()
{
    egg2Bottom = Math.round(egg2.getBoundingClientRect().bottom);
    floorTop = Math.round(floor.getBoundingClientRect().top);
    if(Math.round((egg2Bottom + egg2Top) / 2) >= floorTop)
    {
        brokenEgg2.style.display =   "block" ;
        egg2Top = 40;
        egg2.style.top = egg2Top + "px";
        lifeCount--;
        life.innerHTML = lifeCount ;
    }
}
function egg2OnBasket()
{
    var egg2X = Math.round((egg2.getBoundingClientRect().left + egg2.getBoundingClientRect().right) / 2);
    var egg2Y = Math.round((egg2Top + egg2Bottom) / 2);
    var basketLeft = Math.round(basket.getBoundingClientRect().left);
    var basketRight = Math.round(basket.getBoundingClientRect().right);
    var basketTop =Math.round( basket.getBoundingClientRect().top);
    if( egg2X >= basketLeft && egg2X <= basketRight )
    {
        if( basketTop  == egg2Bottom || (egg2Bottom >= basketTop && egg2Bottom <= basketTop +   50) )
        {
            egg2Top = 40;
            egg2.style.top = egg2Top + "px";
            cout++;
            basketScore.innerHTML=cout;
            score.innerHTML = cout;
        }
    }   
}

//egg3
var egg3 = document.getElementById("egg3");
var egg3Bottom;
var egg3Top = 40;
function egg3Move()
{     
    egg3Top += eggSpeed ;
    egg3.style.top = egg3Top + "px" ;   
}

function egg3OnFloor()
{
    egg3Bottom = Math.round(egg3.getBoundingClientRect().bottom);
    floorTop = Math.round(floor.getBoundingClientRect().top);
    if(Math.round((egg3Bottom + egg3Top) / 2) >= floorTop)
    {
        brokenEgg3.style.display =   "block" ;
        egg3Top = 40;
        egg3.style.top = egg3Top + "px";
        lifeCount--;
        life.innerHTML = lifeCount ;
    }
}
function egg3OnBasket()
{
    var egg3X = Math.round((egg3.getBoundingClientRect().left + egg3.getBoundingClientRect().right) / 2);
    var egg3Y = Math.round((egg3Top + egg3Bottom) / 2);
    var basketLeft = Math.round(basket.getBoundingClientRect().left);
    var basketRight = Math.round(basket.getBoundingClientRect().right);
    var basketTop =Math.round( basket.getBoundingClientRect().top);
    if( egg3X >= basketLeft && egg3X <= basketRight )
    {
        if( basketTop  == egg3Bottom || (egg3Bottom >= basketTop && egg3Bottom <= basketTop +   50) )
        {
            egg3Top = 40;
            egg3.style.top = egg3Top + "px";
            cout++;
            basketScore.innerHTML=cout;
            score.innerHTML = cout;
        }
    }   
}

//btoken Egg
var brokenEgg1 = document.getElementById("brokenEgg1");
var brokenEgg2 = document.getElementById("brokenEgg2");
var brokenEgg3 = document.getElementById("brokenEgg3");