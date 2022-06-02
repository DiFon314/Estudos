const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const addjump=()=>{
    mario.classList.add('jump');
    setTimeout(()=>{mario.classList.remove('jump');},750)
}

const loop=setInterval(()=>{

    const pipeposition = pipe.offsetLeft;
    const marioAltura=+window.getComputedStyle(mario).bottom.replace('px','');

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
    }
    console.log(marioAltura)

},10)

window.document.addEventListener('keydown',addjump);