// Polar para retangular
const but = document.getElementById('but')
var mod = document.getElementById('modulo')
var ang = document.getElementById('angulo')
var x = document.getElementById('x')
var y = document.getElementById('y')

function convert(){
    if((mod.value==''&& ang.value==''&& x.value==''&&y.value=='')// todos sem preenchimento
    ||
    (mod.value!=''&& ang.value==''&& x.value==''&&y.value=='')
    ||
    (mod.value==''&& ang.value!=''&& x.value==''&&y.value=='')
    ||
    (mod.value==''&& ang.value==''&& x.value!=''&&y.value=='')
    ||
    (mod.value==''&& ang.value==''&& x.value==''&&y.value!='')
    ||
    (mod.value!=''&& ang.value==''&& x.value!=''&&y.value=='')){
        window.alert('Preencha corretamente os campos!!!')
    }else if(mod.value!=''&& ang.value!=''){
    //Os dois são preenchidos polar para retangular
        let graus = ang.value * Math.PI/180;
        let cos = Math.cos(graus)
        let seno = Math.sin(graus)
        x.value= (mod.value * cos).toFixed(4)
        y.value = (mod.value * seno).toFixed(4)
    }else if(x!=''&&y!=''){
        mod.value = (Math.sqrt(x.value**2+y.value**2)).toFixed(4)
        ang.value=(Math.atan(y.value/x.value)*180/Math.PI).toFixed(4)
    }
    
}

but.addEventListener("click",convert);

// Retangular para polar 



// Polar para exponencial

// retangular para exponencial

