window.addEventListener("DOMContentLoaded",()=> {
    const emojis = [
        "🐶",
        "🐶",
        "🐱",
        "🐱",
        "🐸",
        "🐸",
        "🐔",
        "🐔",
        "🐭",
        "🐭",
        "🐮",
        "🐮",
        "🐷",
        "🐷",
        "🐴",
        "🐴"
    ]
    
    let shufflerEmojis = emojis.sort( () => (Math.random() > 0.5 ? 2: -1));
    
    let openCard = [];
    
    const addZero = numero => numero < 10 ? `0${numero}` : numero ;

    const tempo = document.getElementById("tempo");
    let minuto = '00';
    let segundo = 0;
    setInterval(()=>{
        segundo++;
        segundo = addZero(segundo)

        if(segundo > 59){
            minuto++;
            minuto = addZero(minuto);
            segundo = '00'
        }
        tempo.innerText = `${minuto}:${segundo}`
    }, 1000)
    
    shufflerEmojis.map(e => {
        let box = document.createElement("div");
        box.className="item";
        box.innerHTML = e;
        box.addEventListener("click", onClick);
        document.getElementById("game").appendChild(box);
    })
    
    function onClick () {
        if(openCard.length < 2 ){
            this.classList.add("boxOpen");
            openCard.push(this);
        }
    
        if(openCard.length === 2){
            document.getElementById("jogadas").innerText++;
            setTimeout(checkMatch, 750);
        }
    
    }
    
    function checkMatch () {
        if(openCard[0].innerHTML === openCard[1].innerHTML){
            openCard.forEach(e => e.classList.add("boxMatch"));
        }
        else {
            openCard.forEach(e => e.classList.remove("boxOpen"))
        }
        openCard = [];
        
        if(document.getElementsByClassName("boxMatch")
        .length === emojis.length) return alert("Fim do jogo")
    }
})