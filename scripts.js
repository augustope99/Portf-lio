
// esse comando debaixo serve para ficar OBSERVANDO o local aonde a constant foi declara
// exemplo o Last-One, foi declarado no final da pagina, toda vez que eu descer para ela, ele vai ativar 
// e vai dizer que ela existe e que está sendo observada
const myObserver = new IntersectionObserver((informacoes)=>{
    informacoes.forEach( (informe)=>{
        if(informe.isIntersecting){
            informe.target.classList.add('Show')
        } else {
            informe.target.classList.remove('Show')
        }
    })
})
const elements = document.querySelectorAll('.Hidden')
elements.forEach((elements)=> myObserver.observe(elements))