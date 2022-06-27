// Polar para retangular
const but= document.getElementById('butao')
var mod = document.getElementById('modulo')
var ang = document.getElementById('angulo')
var x = document.getElementById('x')
var y= document.getElementById('y')


function convert(){
    if(mod.value!=''&& ang.value!=''){
        let graus = ang.value * Math.PI/180;
        let cos = Math.cos(graus)
        let seno = Math.sin(graus)
        x.value= (mod.value * cos).toFixed(4)
        y.value = (mod.value * seno).toFixed(4)
    }
    
}

but.addEventListener("click",convert);

// Retangular para polar 



// Polar para exponencial

// retangular para exponencial

