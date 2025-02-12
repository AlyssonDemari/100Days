const previous = document.querySelector('.previous')
const next = document.querySelector(".next");
const iframe = document.querySelector("#iframe");
const days = document.querySelector('.days')
const name = document.querySelector('.name')
const descrition = document.querySelector('.descrition')
let counter = 1; 
let counterArra = 0
const informacoes = [
    {"nome": "100 Days CSS", "descrition": "Uma maneira fácil de começar o desafio com um número de construção personalizado com gradiente."},
    {"nome": "Menu Icon", "descrition": "Usado em quase todos os sites atualmente, simples, mas impressionantemente animado, tornando-se um verdadeiro atrativo visual."},
    {"nome": "The Pyramide", "descrition": "Não tão desafiador quanto as verdadeiras pirâmides do Egito, mas o caminho da sombra não é fácil."},
    {"nome": "Loading", "descrition": "Os melhores são sempre os sites que não precisam de um status de carregamento. Se precisarem, aqui está um que seria calmante..."},
    {"nome": "Statistic", "descrition": "Em um mundo de números, é importante saber interpretá-los corretamente. Estatísticas bonitas ajudam a capturar esses dados de forma eficaz"},
    {"nome": "Profile", "descrition": "Quem de vocês sabe quantos perfis em redes sociais já criou? Para uma reviravolta refrescante, você também pode criar um você mesmo."},
    {"nome": "Notifications, Search and Menu", "descrition": "Os três pilares de qualquer aplicação? Reunidos no menor espaço possível."},
    {"nome": "Metaballs", "descrition": "À primeira vista, parece impossível de implementar com CSS, mas os filtros tornam isso possível também"},
    {"nome": "Rainy Night", "descrition": "A hora perfeita do dia e o clima ideal para programar em paz. As gotas de chuva até se estilhaçam no chão."},
    {"nome": "Watch", "descrition": "Clássica, nobre, moderna ou divertida? Como você gostaria que seu relógio favorito fosse?"},
    {"nome": "Walking Boots", "descrition": "Essa botas foram feitas para caminhar. Onde será que elas vão parar? "},
    {"nome": "Tooltip", "descrition": "Essas botas foram feitos para caminhar. Para onde elas estão indo e por quanto tempo?"},
    {"nome": "User Gallery", "descrition": "Uma ideia para uma transição entre a visão geral do usuário e a página de perfil"},
    // {"nome": "Byciclopter ", "descrition": "Dirigir ou voar para o trabalho de manhã?"},
    // {"nome": "Upload ", "descrition": "Sim, você realmente pode arrastar e soltar um arquivo ali. Mas não se preocupe, o processo de upload é simulado."},
    // {"nome": "Blobby ", "descrition": "Aparece, balança, muda de forma e desaparece novamente. Assim, sem mais nem menos."},
    // {"nome": "Penrose Triangle ", "descrition": " CSS faz até o impossível se tornar possível. Consegue descobrir como foi feito?"},
    // {"nome": "Elastic ", "descrition": " Pensei por um longo tempo na melhor maneira de alcançar esse efeito. No final, a solução foi mais simples do que eu esperava"},
    // {"nome": "Slider with Radio Buttons ", "descrition": "Por que usar JavaScript quando você pode usar CSS? Os seletores podem ser combinados de maneira incrível uns com os outros."},
    // {"nome": "Send Mail ", "descrition": "Surpreenda seus visitantes com uma animação bacana, em vez de um simples pedido enviado."}
]

previous.disabled = true
previous.addEventListener('click', () => {
    counter--
    if(counter == 1){
        previous.disabled = true
    }
    next.disabled = false; 
    counterArra--
    iframe.src = `day${String(counter).padStart(3, '0')}/index.html`
    days.innerHTML = `Day <strong>#${counter}</strong>`;
    name.innerHTML = `<strong>${informacoes[counterArra].nome}:</strong>`
    descrition.innerHTML = `${informacoes[counterArra].descrition}`;
})

next.addEventListener('click', () => {
    counter++;
    if (counter === informacoes.length) {
        next.disabled = true; 
    }
    previous.disabled = false
    counterArra++
    iframe.src = `day${String(counter).padStart(3, '0')}/index.html`;
    days.innerHTML = `Day <strong>#${counter}</strong>`;
    name.innerHTML = `<strong>${informacoes[counterArra].nome}:</strong>`
    descrition.innerHTML = `${informacoes[counterArra].descrition}`
});