//defineerime muutujad ja algväärtustame
carX = 1;
carY = 1;
cyclistX = 4;
cyclistY = 1;
minutes = 0;
carMoves = true;
cyclistMoves = false;

function cyclist(){ //jalgratturi liikumise funktsioon
    if(cyclistX==4 && cyclistY==4){ //vaatab kust jalgrattur käesoleval hetkel liikumist alustab ja sellest lähtuvalt valib, milline pilt temast pärast liikumist maha peaks jääma
        document.getElementById("a"+cyclistX+cyclistY).src = "images/ark.jpg";
    }else{
        document.getElementById("a"+cyclistX+cyclistY).src = "images/road.jpg";
    }
    
    if(carMoves==true){ //kui eksamiauto (mängija) on alustanud liikumist
        //pseudo-suvalise liikumissuuna valimine
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
    if(cyclistX==carX && cyclistY==carY){ //kui pärast liikumist sattus jalgrattur samale ruudule kus asus eksamiauto
        carMoves = false; //auto ei saa liikuda
        window.clearInterval(cyclistMoves); //lõpeta millisekundite lugemine jalgratturi liikumiste vahel (lõpeta taimeri töö)
        cyclistMoves = false; //jalgrattur ei saa liikuda
        document.getElementById("a"+cyclistX+cyclistY).src = "images/crash.png"; //paneb kokkupõrkeruutu avarii pildi
        document.getElementById("gameInfo").innerHTML = "Sõitsid jalgratturile ette. Oled eksami läbi kukkunud."; //muudab teksti mängu all, et anda mängijale tagasisidet juhtunu kohta
    }else{
        document.getElementById("a"+cyclistX+cyclistY).src = "images/cyclist.jpg"; //paneb ruudule kuhu jalgrattur just liikus jalgratturi pildi
    }
}

function liigu(x, y){ //eksamiauto liikumise funktsioon (x ja y on selle ruudu koordinaadid, millele mängija vajutas)
    if(carX==x && carY==y && carMoves==true){ //kui mängija vajutas ruudule, kus asub auto, ja auto saab liikuda
        if(!cyclistMoves){ //kui taimerit pole veel käivitatud
            cyclistMoves = window.setInterval(cyclist, 1000); //käivitab taimeri, mis kutsub iga 1000 millisekundi (1 sekundi) tagant välja jalgratturi liikumise funktsiooni, ning omastab muutujale väärtuseks taimeri ID
        }
        //pseudo-suvalise liikumissuuna valimine
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
        
        minutes++; //minutite (eksamiauto liikumiskordade) lugemine
        
        if(minutes == 1){ //annab mängijale teada, mitu korda ta on liikunud (õiges käändes)
            document.getElementById("gameInfo").innerHTML = "Sõit on kestnud " + minutes + " minut.";
        }else{
            document.getElementById("gameInfo").innerHTML = "Sõit on kestnud " + minutes + " minutit.";
        }
        document.getElementById("a"+x+y).src = "images/road.jpg"; //asendab ruudus, kus auto just asus (mille peale just vajutati), pildi teega 
        document.getElementById("a"+carX+carY).src = "images/car.jpg"; //asendab ruudus, kuhu auto just liikus, pildi autoga
        
        if(carX==cyclistX && carY==cyclistY){ //kui pärast liikumist sattus eksamiauto samale ruudule, kus asus jalgrattur
            carMoves = false; //auto ei saa liikuda
            window.clearInterval(cyclistMoves); //lõpeta taimeri töö
            cyclistMoves = false; //jalgrattur ei saa liikuda
            document.getElementById("a"+cyclistX+cyclistY).src = "images/crash.png"; //paneb kokkupõrkeruutu avarii pildi
            document.getElementById("gameInfo").innerHTML = "Sõitsid jalgratturile otsa. Oled eksami läbi kukkunud. Uuesti mängimiseks refreshi lehte!"; //muudab teksti mängu all, et anda mängijale tagasisidet juhtunu kohta
        }
        
        if(carX==4 && carY==4){ //kui eksamiauto jõudis alla paremasse nurka (Maanteeametisse)
            carMoves = false; //auto ei saa liikuda
            window.clearInterval(cyclistMoves); //lõpeta taimeri töö
            cyclistMoves = false; //jalgrattur ei saa liikuda
            document.getElementById("a44").src = "images/licence.png"; //paneb alla paremasse ruutu juhiloa pildi
            document.getElementById("gameInfo").innerHTML = "Jõudsid Maanteeametisse " + minutes + " minutiga. Eksam edukalt sooritatud! Uuesti mängimiseks refreshi lehte!"; //muudab teksti mängu all, et anda mängijale tagasisidet juhtunu kohta
        }
    }
}

//kood on võetud keskkoolis loodud tunnitööst (ehk nullist ise tehtud)
//Märt Tender - r01bf195.11a.risk.ee/Kirbumang
//Kaur Vali - r01bf196.11a.risk.ee/Kirbumang