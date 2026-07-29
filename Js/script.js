function bukaSurat() {
    
    confetti();
    
    document.getElementById("popup").style.display = "block";
    
    document.getElementById("surat").innerHTML = "";
    
    document.getElementById("musik").play();
    
}
function tutupSurat(){

    document.getElementById("popup").style.display="none";

    document.getElementById("musik").pause();

}
 function buatHati(){

    let hati = document.createElement("div");

    hati.innerHTML = "️🤍";

    hati.className = "heart";

    hati.style.left = Math.random()*100 + "vw";

    hati.style.animationDuration = (Math.random()*3+2)+"s";
    
    hati.style.fontSize =
(Math.random()*25+20)+"px";

    document.body.appendChild(hati);

    setTimeout(function(){

        hati.remove();

    },5000);
    
    let emoji = ["❤️","💖","💕","💘","🤍"];

hati.innerHTML = emoji[
    Math.floor(Math.random()*emoji.length)
];

}
setInterval(buatHati,300);


let daftarFoto = [
    
    "images/foto1.jpg",
    
    "images/foto2.jpg",
    
    "images/foto3.jpg",
    
    "images/foto4.jpg"
    
];

let sekarang = 0;

function gantiFoto() {
    
    sekarang++;
    
    if (sekarang >= daftarFoto.length) {
        
        sekarang = 0;
        
    }
    
    document.getElementById("foto").src = daftarFoto[sekarang];
    
}

setInterval(gantiFoto, 3000);

function confetti() {
    
    let warna = ["🎉", "✨", "💖", "💗", "🌸"];
    
    for (let i = 0; i < 40; i++) {
        
        let c = document.createElement("div");
        
        c.className = "confetti";
        
        c.innerHTML =
            
            warna[Math.floor(Math.random() * warna.length)];
        
        c.style.left = Math.random() * 100 + "vw";
        
        c.style.animationDuration =
            
            (Math.random() * 3 + 2) + "s";
        
        document.body.appendChild(c);
        
        setTimeout(() => {
            
            c.remove();
            
        }, 5000);
        
    }
    
}
function mulaiWebsite() {
    
    document.getElementById("opening").style.display = "none";
    
    document.getElementById("mainWebsite").style.display = "block";
    
    document.getElementById("musik").play();
    
    confetti();
    
}

function buatBintang() {
    
    let star = document.createElement("div");
    
    star.className = "star";
    
    star.innerHTML = "✨";
    
    star.style.left = Math.random() * 100 + "vw";
    
    star.style.animationDuration = (Math.random() * 5 + 4) + "s";
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        
        star.remove();
        
    }, 8000);
    
}

setInterval(buatBintang, 300);

