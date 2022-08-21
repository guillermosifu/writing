const maquina = document.getElementById('escritura')

const maquinaEscribir = (Text= '', tiempo=200,etiqueta='')=>{
    let arrayCaracteres = Text.split('')
    etiqueta.innerHTML=''
    let cont=0
    let escribir = setInterval(function(){
        etiqueta.innerHTML+=arrayCaracteres[cont]
        cont++
        if(cont === arrayCaracteres.length){
            cont=0
            etiqueta.innerHTML=''
        }
    },tiempo)
}

maquinaEscribir("Front-End Developer       ",150,maquina)