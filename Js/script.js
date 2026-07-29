// ===============================
// OPEN LETTER
// ===============================


function bukaSurat(){

    confetti();

    const popup = document.getElementById("popup");
    const musik = document.getElementById("musik");


    popup.style.display = "block";


    musik.play();

}



function tutupSurat(){

    const popup = document.getElementById("popup");
    const musik = document.getElementById("musik");


    popup.style.display = "none";


    musik.pause();

}



// ===============================
// START WEBSITE
// ===============================


function mulaiWebsite(){

    const opening = document.getElementById("opening");
    const mainWebsite = document.getElementById("mainWebsite");
    const musik = document.getElementById("musik");


    opening.style.display = "none";

    mainWebsite.style.display = "flex";


    musik.play();


    confetti();

}





// ===============================
// FALLING HEART
// ===============================


function buatHati(){


    const hati = document.createElement("div");


    const emoji = [
        "❤️",
        "💖",
        "💕",
        "💘",
        "🤍"
    ];


    hati.className = "heart";


    hati.innerHTML =
    emoji[Math.floor(Math.random()*emoji.length)];


    hati.style.left =
    Math.random()*100 + "vw";


    hati.style.animationDuration =
    (Math.random()*3+2) + "s";


    hati.style.fontSize =
    (Math.random()*25+20) + "px";


    document.body.appendChild(hati);



    setTimeout(()=>{

        hati.remove();

    },5000);


}



setInterval(buatHati,300);






// ===============================
// PHOTO SLIDER
// ===============================


const daftarFoto = [

    "images/foto1.jpg",

    "images/foto2.jpg",

    "images/foto3.jpg",

    "images/foto4.jpg"

];


let sekarang = 0;



function gantiFoto(){


    sekarang++;


    if(sekarang >= daftarFoto.length){

        sekarang = 0;

    }


    const foto =
    document.getElementById("foto");


    foto.src =
    daftarFoto[sekarang];


}



setInterval(gantiFoto,3000);






// ===============================
// CONFETTI EFFECT
// ===============================


function confetti(){


    const emojiConfetti = [

        "🎉",
        "✨",
        "💖",
        "💗",
        "🌸"

    ];



    for(let i = 0; i < 40; i++){


        const c = document.createElement("div");


        c.className = "confetti";


        c.innerHTML =
        emojiConfetti[
            Math.floor(
                Math.random()*emojiConfetti.length
            )
        ];



        c.style.left =
        Math.random()*100 + "vw";



        c.style.animationDuration =
        (Math.random()*3+2)+"s";



        document.body.appendChild(c);



        setTimeout(()=>{

            c.remove();

        },5000);


    }


}






// ===============================
// FALLING STAR
// ===============================


function buatBintang(){


    const star = document.createElement("div");


    star.className = "star";


    star.innerHTML = "✨";


    star.style.left =
    Math.random()*100+"vw";


    star.style.animationDuration =
    (Math.random()*5+4)+"s";



    document.body.appendChild(star);



    setTimeout(()=>{

        star.remove();

    },8000);


}



setInterval(buatBintang,300);
