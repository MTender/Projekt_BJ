window.addEventListener("load", function(){ //mis juhtub kui leht ära laeb
    //muudame objektide klasse, et rakenduks css, mille kohaselt objektid peavad nähtamatuteks muutuma
    const loader = document.querySelector(".loader"); //peidame keerleva laadimisikooni
    loader.className += " hidden";
    const overlay = document.querySelector(".overlay"); //peidame poolläbipaistva lehe katte
    overlay.className += " hidden";
});

//kood on ise kirjutatud