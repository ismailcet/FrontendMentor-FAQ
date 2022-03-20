const titles=document.querySelectorAll('.title');
const arrows=document.querySelectorAll('.arrow');

titles.forEach(title=>{

    title.addEventListener('click',showText);
});
arrows.forEach(arrow=>{

    arrow.addEventListener('click',showArrow);
});

function showText(e){
    let question=e.target.parentElement.parentElement;
    let title=e.target.parentElement.children[0];
    let arrow=e.target.parentElement.children[1];

    if(e.target.classList.contains('active')){
        question.children[1].classList.remove('answer__active');
        title.classList.remove('active');
        arrow.classList.remove('active__arrow');
    }else{
        question.children[1].classList.add('answer__active');
        title.classList.add('active');
        arrow.classList.add('active__arrow');
    }
};
function showArrow(e){
    let question=e.target.parentElement.parentElement;
    let title=e.target.parentElement.children[0];
    let arrow=e.target.parentElement.children[1];

    if(e.target.classList.contains('active__arrow')){
        question.children[1].classList.remove('answer__active');
        title.classList.remove('active');
        arrow.classList.remove('active__arrow');
    }else{
        question.children[1].classList.add('answer__active');
        title.classList.add('active');
        arrow.classList.add('active__arrow');
    }
}