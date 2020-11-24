carX = 1;
carY = 1;
cyclistX = 4;
cyclistY = 1;
minutes = 0;
carMoves = true;
cyclistMoves=false;

function cyclist(){
    if(cyclistX==4 && cyclistY==4){
        document.getElementById("a"+cyclistX+cyclistY).src = "../images/ark.jpg";
    }else{
        document.getElementById("a"+cyclistX+cyclistY).src = "../images/road.jpg";
    }
    
    if(carMoves==true){
        if(Math.random()<0.5){
            if(cyclistX==1){
                cyclistX++;
            }else if(cyclistX==4){
                cyclistX--;
            }else if(Math.random()<0.5){
                cyclistX++;
            }else{
                cyclistX--;
            }
        }else{
            if(cyclistY==1){
                cyclistY++;
            }else if(cyclistY==4){
                cyclistY--;
            }else if(Math.random()<0.5){
                cyclistY++;
            }else{
                cyclistY--;
            }
        }
    }
    if(cyclistX==carX && cyclistY==carY){
        carMoves = false;
        window.clearInterval(cyclistMoves);
        cyclistMoves = false;
        document.getElementById("a"+cyclistX+cyclistY).src = "../images/crash.png";
        document.getElementById("gameInfo").innerHTML = "Sõitsid jalgratturile ette. Oled eksami läbi kukkunud.";
    }else{
        document.getElementById("a"+cyclistX+cyclistY).src = "../images/cyclist.jpg";
    }
}

function liigu(x, y){
    if(carX==x && carY==y && carMoves==true){
        if(!cyclistMoves){
            cyclistMoves = window.setInterval(cyclist, 1000);
        }
        if(Math.random()<0.5){
            if(carX==1){
                carX++;
            }else if(carX==4){
                carX--;
            }else if(Math.random()<0.5){
                carX++;
            }else{
                carX--;
            }
        }else{
            if(carY==1){
                carY++;
            }else if(carY==4){
                carY--;
            }else if(Math.random()<0.5){
                carY++;
            }else{
                carY--;
            }
        }
        
        minutes++;
        
        document.getElementById("gameInfo")
        if(minutes == 1){
            document.getElementById("gameInfo").innerHTML = "Sõit on kestnud " + minutes + " minut.";
        }else{
            document.getElementById("gameInfo").innerHTML = "Sõit on kestnud " + minutes + " minutit.";
        }
        document.getElementById("a"+x+y).src = "../images/road.jpg";
        document.getElementById("a"+carX+carY).src = "../images/car.jpg";
        
        if(carX==cyclistX && carY==cyclistY){
            carMoves = false;
            window.clearInterval(cyclistMoves);
            cyclistMoves = false;
            document.getElementById("a"+cyclistX+cyclistY).src = "../images/crash.png";
            document.getElementById("gameInfo").innerHTML = "Sõitsid jalgratturile otsa. Oled eksami läbi kukkunud.";
        }
        
        if(carX==4 && carY==4){
            carMoves = false;
            window.clearInterval(cyclistMoves);
            cyclistMoves = false;
            document.getElementById("a44").src = "../images/licence.png";
            document.getElementById("gameInfo").innerHTML = "Jõudsid Maanteeametisse " + minutes + " minutiga. Eksam edukalt sooritatud!";
        }
    }
}