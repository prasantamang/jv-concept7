//pagewrapper
const PageWrapper = document .createElement('div');
document.body.appendChild(PageWrapper);

//creating input 
const FirstInput =document.createElement('input');
PageWrapper.appendChild(FirstInput);

//creating add button
const AddButton = document.createElement('button');
PageWrapper.appendChild(AddButton);
AddButton.innerHTML="Add"

//creting list
const Ul = document.createElement('ul');
PageWrapper.appendChild(Ul);

//creating listen eventer
AddButton.addEventListener('click',READ_WRITE);

//creating funtion
function READ_WRITE(){
    const Inside_list =document.createElement('li');
    Ul.appendChild(Inside_list);
    Inside_list.innerHTML = FirstInput.value
}
//console.log
FirstInput.value=""