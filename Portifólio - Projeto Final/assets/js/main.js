const abrirjanela = document.querySelectorAll('.janela .abrir');

abrirjanela.forEach((abrir) =>{
    abrir.addEventListener('click', (e) =>{
        const janela = abrir.parentElement
        const isopen = janela.classList.contains('open')

        if(isopen){
            janela.classList.remove('open')
        }else{
            janela.classList.add('open')
        }
    })
})