const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const p = document.querySelector('.p');
const nuvens = document.querySelector('.nuvens');
var ss= 000000;
const addjump=()=>{
    mario.classList.add('jump');
    setTimeout(()=>{mario.classList.remove('jump');},750)
}

const loop=setInterval(()=>{

    const pipeposition = pipe.offsetLeft;
    const nuvensposition = nuvens.offsetLeft;
    const marioAltura=+window.getComputedStyle(mario).bottom.replace('px','');
    nuvens.classList.add('move')
    /* Jogo Acabando*/
    if(pipeposition<=120 &&pipeposition > 0 && marioAltura <=120){

        pipe.style.animation='none';
        pipe.style.left=`${pipeposition}px`;

        
        mario.style.animation='none';
        mario.style.bottom=`${marioAltura}px`;


        mario.src='img/game-over.png';
        mario.style.width='75px';
        mario.style.marginLeft='50px';
        
        clearInterval(loop);
        clearInterval(score);

        nuvens.style.animation='none';
        nuvens.style.left=`${nuvensposition}px`;

        /*Tela de Game-over*/

        window.document.body.insertAdjacentHTML('beforeend', '<button id="botao" class="botao" onclick="recomeçar()">Jogar novamente</button>');

    }

},10)

function recomeçar(){
    window.alert('Teste')
}

const score=setInterval(()=>{
    ss++
    if(ss<10){
       var format = '00000' + ss;
    }else if (ss<100){
        var format ='0000'+ss;
    }else if(ss<1000){
        var format='000'+ss;
    }else if (ss<10000){
        var format ='00'+ss;
    }else if (ss<10000){
        var format ='0'+ss;
    }else{
        var format = ss;
    };

    document.getElementById('p').innerHTML= format;
},100)

window.document.addEventListener('keydown',addjump);