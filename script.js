//pagewrapper
const pageWrapper = document .createElement('div');

document.body.appendChild(pageWrapper);

const button = document.querySelector('button');
button.addEventListener('click',showInput);

function showInput(){
    const  myInput = document.querySelector('input');
    console.log(myInput.value);
}