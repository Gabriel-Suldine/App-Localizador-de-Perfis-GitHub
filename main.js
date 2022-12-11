import './style.css'
import '@picocss/pico';
const formConsultarConta = document.querySelector('#consultarConta');
const inputConta = formConsultarConta.name;
const divDados = document.querySelector('#dados')

formConsultarConta.addEventListener('submit', event => {
  event.preventDefault()  //anula o comportamento padrão de envio do form  
  divDados.setAttribute('aria-busy', 'true')
  divDados.textContent = 'Localizando Peril...';
  consultarConta(inputConta.value)

})


async function consultarConta(conta) {
  let response = await fetch(`https://api.github.com/users/${conta}`)
  let dadosConta = await response.json()
  divDados.removeAttribute('aria-busy')
  divDados.textContent = ''
  if (dadosConta.name.value === 'undefined') {
    divDados.innerHTML = `<a href="#"> Perfil não Lozalicado </a> ` 
  } else {
    divDados.innerHTML = `   
    <img src="${dadosConta.avatar_url}">
    <p> ${dadosConta.name} </p>     
    <a href="${dadosConta.html_url}"> Perfil no GitHub</a>   
`}

}

