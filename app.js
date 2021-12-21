// Seleção dos links das sessões
const links = document.querySelector('.link');
const sections = document.querySelector('section'); 
// Seleciona o link ativo atual
let activeLink = 0;

// forEach- para percorrer todos os links e dentro dele o link indivudual
// de cada link
links.forEach((link, i) => {
    // Evento de link para vincular com os links
    link.addEventListener('click', () => {
        // Verificação para ver se o usuário não está clicando no link ativo
        if(activeLink != i){
            //removendo a classe ativa do link ativo atual usando
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            //adicionar um atraso de 1s na execução dos códigos abaixo. Dentro do tempo limite, basta adicionar a classe ativa novamente.
            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active')
            }, 1000);
        }
    })
})


