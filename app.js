const male = document.querySelector('.male');
const female = document.querySelector('.female');
const btn = document.querySelector('.btn button');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const output = document.querySelector('.output');
const message = document.querySelector('.message');

function changeGenderSelection(){
    male.addEventListener('click', () => {
        male.classList.add('border-selected');
        female.classList.remove('border-selected');
    })
    female.addEventListener('click', () => {
        female.classList.add('border-selected');
        male.classList.remove('border-selected');
    })
}
function BMI(){
    const h = height.value;
    const w = weight.value;
    const condition1 = isNaN(h) || isNaN(w);
    const condition2 = h.length == 0 || w.length == 0;
    const condition3 = !male.classList.contains('border-selected') && !female.classList.contains('border-selected');

    if(condition1 || condition2 || condition3){
        output.innerText = "--";
        message.style.visibility = 'hidden';
        message.style.opacity = '0';
        return;
    }

    const bmi = 10000*w/(h*h);
    if(bmi < 18.5) 
        message.innerText = 'Underweight';
    else if(bmi >= 18.5 && bmi <= 24.9)
        message.innerText = 'Healthy Weight';
    else if(bmi >= 25 && bmi <= 29.9)
        message.innerText = 'Overweight';
    else
        message.innerText = 'Obesity';
    output.innerText = bmi.toFixed(2);
    
    message.style.visibility = 'visible';
    message.style.opacity = '1';
}
btn.addEventListener('click', () => {
    BMI();
})
changeGenderSelection();

