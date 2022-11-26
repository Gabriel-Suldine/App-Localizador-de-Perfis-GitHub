import './style.css'
import '@picocss/pico';
const formConsultarConta = document.querySelector('#consultarConta');
const inputConta = formConsultarConta.name;
const divDados = document.querySelector('#dados')
const btnConsultarConta = document.querySelector('#btnConsultarConta')

formConsultarConta.addEventListener('submit', event => {
  event.preventDefault()  //anula o comportamento padrão de envio do form  
  ativaLoader(true)
  consultarConta(inputConta.value)

})


async function consultarConta(conta) {
  let response = await fetch(`https://api.github.com/users/${conta}`)
  let dadosConta = await response.json()
  divDados.innerHTML = `   
    <img src="${dadosConta.avatar_url}">
    <p> ${dadosConta.name} </p>     
    <a href="${dadosConta.html_url}"> Perfil no GitHub</a>   
`
ativaLoader(false)
}


function ativaLoader(ativo) {
  if (ativo) {
    btnConsultarConta.setAttribute('aria-busy', 'true')
    btnConsultarConta.textContent = 'Localizando Peril...'
  }else{
    btnConsultarConta.removeAttribute('aria-busy')
    btnConsultarConta.textContent = 'Consultar'
  }
}