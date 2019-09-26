

window.addEventListener('load', function(event) {
    console.log('A página terminou de carregar!');
});

window.addEventListener('load', function(event) {
    console.log('A página terminou de carregar2!');
});


function processar() {
    console.log('Digite A , B e C')
    let valorA = parseFloat(document.querySelector('#inputA').value);
    let valorB = parseFloat(document.querySelector('#inputB').value);
    let valorC = parseFloat(document.querySelector('#inputC').value);

    let delta = (valorB*valorB)-4*(valorA*valorC);
    let cima1 = -valorB + Math.sqrt(delta);
    let cima2 = -valorB - Math.sqrt(delta);
    let valorX1 = cima1/(2*valorA);
    let valorX2 = cima2/(2*valorA);


    document.querySelector('#resultado').innerHTML = valorX1;
    console.log('O resultado é: ', valorX1);
    document.querySelector('#resultado2').innerHTML = valorX2;
    console.log('O resultado é: ', valorX2);
}












