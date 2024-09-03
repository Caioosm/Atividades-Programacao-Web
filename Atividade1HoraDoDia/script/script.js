function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    //var hora = data.getHours()
    msg.innerHTML = ` ${data} `
    if(data >= 0 && data < 12){
        //BOM-DIA
        img.src = '/Atividade1/images/manha.png'
        document.body.style.background = '#c17a50'
    }else if(data >= 12 && data <= 18 ){
        //BOA-TARDE
        img.src = '/Atividade1/images/tarde.png'
        document.body.style.background = '#d85946'
    }else{
        //BOA-NOITE
        img.src = '/Atividade1/images/noite.png'
        document.body.style.background = '#485357'
    }
}