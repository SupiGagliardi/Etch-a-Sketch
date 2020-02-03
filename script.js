

const container = document.querySelector('.container');





function randomRBG() {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const rainbow = document.querySelector('#rainbow');

rainbow.addEventListener('click', () => {
    if(rainbow.textContent === 'Rainbow OFF'){
        rainbow.textContent = 'Rainbow ON'
    } else {
        rainbow.textContent = 'Rainbow OFF'
    }
})


function initializeGrid(gridSize) {

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };


    
    let boardSize = gridSize * gridSize;

    for (let i = 0; i < boardSize; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }

    const divs = document.querySelector('main').querySelectorAll('div');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            
            if(rainbow.textContent === 'Rainbow OFF'){
                div.style.backgroundColor = 'black';
            } else {
                div.style.backgroundColor = randomRBG();
            }
        })
    })




    const resetBtn = document.querySelector('#reset');

    resetBtn.addEventListener('click', () => {
        divs.forEach((div) => {
            div.style.cssText = 'background-color: #FFFFFF'
        })
    })
}

initializeGrid(32);




const slider = document.querySelector('#sizeText');
const gridSize = document.querySelector('#grid-size');


slider.addEventListener('input', () => {
    initializeGrid(slider.value);
    container.style.cssText = `grid-template: repeat(${slider.value}, 1fr) / repeat(${slider.value}, 1fr);`
    gridSize.textContent = `${slider.value}x${slider.value}`

})








