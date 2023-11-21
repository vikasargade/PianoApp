const pianokeys = document.querySelectorAll('.key')

function playsound(newUrl){
    new Audio(newUrl).play()
}

pianokeys.forEach((pianokey, i)=>{
    const newUrl = '24/key' + (i+1) + '.mp3'
    pianokey.addEventListener('click', ()=> playsound(newUrl))
})