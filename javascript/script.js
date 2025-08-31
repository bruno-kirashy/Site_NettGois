const c = (n) => document.querySelector(n)
/* ----------------- Menu -------------------*/
/* ----------------- Menu -------------------*/
/* ----------------- Menu -------------------*/
/* ----------------- Menu -------------------*/
window.addEventListener('scroll', ativarnav)
const menus = [".menu_one",".menu_two",".menu_three",".menu_four",".menu_five"];
function ativarnav() {
    for (i = 0 ; 4 > i; i++){
        c(menus[i]).classList.remove('actived_menu');
    }
    if (window.scrollY >= 0 && window.scrollY < 500 ) {
        c('.menu_one').classList.remove('actived_menu');
        c('.menu_one').classList.add('actived_menu');
    }
    else if (window.scrollY >= 500 && window.scrollY <= 1380 ) {
        c('.menu_two').classList.remove('actived_menu');
        c('.menu_two').classList.add('actived_menu');
    }
    else if (window.scrollY >= 1380 && window.scrollY <= 2000 ) {
        c('.menu_three').classList.remove('actived_menu');
        c('.menu_three').classList.add('actived_menu');
    }
    else if (window.scrollY >= 2006 && window.scrollY <= 3000 ) {
        c('.menu_four').classList.remove('actived_menu');
        c('.menu_four').classList.add('actived_menu');
    }
}




function clicoumenu() {
    scrollTo({top: 0, left: 0, behavior: 'smooth'});
}
function clicouportfolio() {
    scrollTo({top: 530, left: 0, behavior: 'smooth'});
}
function clicousobre() {
    scrollTo({top: 1430 , left: 0, behavior: 'smooth'});
}
function clicouclientes() {
    scrollTo({top: 2032, left: 0, behavior: 'smooth'});
}
function clicouhorarios() {
    scrollTo({top: 0, left: 0, behavior: 'smooth'});
}



/* ----------------- Menu MOBILE -------------------*/
/* ----------------- Menu MOBILE-------------------*/
/* ----------------- Menu MOBILE-------------------*/
/* ----------------- Menu MOBILE-------------------*/




function clickMenuMobile() {
    var div = c('.menu-mobile-open');
    if (div.style.display === 'none') {
        div.style.display = 'flex';
        
        c('.menu-mobile-close-x').style.display = 'flex';
        c('.menu-mobile-close').style.display = 'none';
    }
    else {
        div.style.display = 'none';
        c('.menu-mobile-close-x').style.display = 'none';
        c('.menu-mobile-close').style.display = 'flex';
    }
}


function clicoumenuMobile() {
    scrollTo({top: 0, left: 0, behavior: 'smooth'});
    c('.menu-mobile-open').style.display = 'none';

    c('.menu-mobile-close-x').style.display = 'none';
    c('.menu-mobile-close').style.display = 'flex';
}
function clicouportfolioMobile() {
    scrollTo({top: 214, left: 0, behavior: 'smooth'});
    c('.menu-mobile-open').style.display = 'none';

    c('.menu-mobile-close-x').style.display = 'none';
    c('.menu-mobile-close').style.display = 'flex';
}
function clicousobreMobile() {
    scrollTo({top: 2981, left: 0, behavior: 'smooth'});
    c('.menu-mobile-open').style.display = 'none';

    c('.menu-mobile-close-x').style.display = 'none';
    c('.menu-mobile-close').style.display = 'flex';
}
function clicouclientesMobile() {
    scrollTo({top: 3771, left: 0, behavior: 'smooth'});
    c('.menu-mobile-open').style.display = 'none';

    c('.menu-mobile-close-x').style.display = 'none';
    c('.menu-mobile-close').style.display = 'flex';
}
function clicouhorariosMobile() {
    scrollTo({top: 0, left: 0, behavior: 'smooth'});
    c('.menu-mobile-open').style.display = 'none';

    c('.menu-mobile-close-x').style.display = 'none';
    c('.menu-mobile-close').style.display = 'flex';
}





/* ----------------- SLIDER -------------------*/
/* ----------------- SLIDER -------------------*/
/* ----------------- SLIDER -------------------*/
/* ----------------- SLIDER -------------------*/


function sliderPushOne(){
    for (var i=0; i < 5; i++){
        let pointers = ['.pointer-one','.pointer-two','.pointer-three','.pointer-for','.pointer-five'];
        c(pointers[i]).classList.remove('pointer-actived');
    }
    c('.slider-table').style.margin = "0vw 0vw 0vw 0vw";
    c('.slider-table').style.transition = "0.0s";
    c('.pointer-one').classList.add('pointer-actived');
}
function sliderPushTwo(){
    for (var i=0; i < 5; i++){
        let pointers = ['.pointer-one','.pointer-two','.pointer-three','.pointer-for','.pointer-five'];
        document.querySelector(pointers[i]).classList.remove('pointer-actived');
    }
    c('.slider-table').style.margin = "0vw 0vw 0vw -100vw";
    c('.slider-table').style.transition = "0.3s";
    c('.pointer-two').classList.add('pointer-actived');
}
function sliderPushThree(){
    for (var i=0; i < 5; i++){
        let pointers = ['.pointer-one','.pointer-two','.pointer-three','.pointer-for','.pointer-five'];
        c(pointers[i]).classList.remove('pointer-actived');
    }
    c('.slider-table').style.margin = "0vw 0vw 0vw -200vw";
    c('.slider-table').style.transition = "0.3s";
    c('.pointer-three').classList.add('pointer-actived');
}
function sliderPushFor(){
    for (var i=0; i < 5; i++){
        let pointers = ['.pointer-one','.pointer-two','.pointer-three','.pointer-for','.pointer-five'];
        c(pointers[i]).classList.remove('pointer-actived');
    }
    c('.slider-table').style.margin = "0vw 0vw 0vw -300vw";
    c('.slider-table').style.transition = "0.3s";
    c('.pointer-for').classList.add('pointer-actived');
}
function sliderPushFive(){
    for (var i=0; i < 5; i++){
        let pointers = ['.pointer-one','.pointer-two','.pointer-three','.pointer-for','.pointer-five'];
        c(pointers[i]).classList.remove('pointer-actived');
    }
    c('.slider-table').style.margin = "0vw 0vw 0vw -400vw";
    c('.slider-table').style.transition = "0.3s";
    c('.pointer-five').classList.add('pointer-actived');
}

setTimeout(sliderAuto(), 0)
function sliderAuto() {
    setTimeout(sliderPushOne,4000);
    setTimeout(sliderPushTwo,8000);
    setTimeout(sliderPushThree,12000);
    setTimeout(sliderPushFor,16000);
    setTimeout(sliderPushFive,20000);
}
setInterval(sliderAuto,20000);


/* ----------------- PORTIFOLIO -------------------*/
/* ----------------- PORTIFOLIO -------------------*/
/* ----------------- PORTIFOLIO -------------------*/
/* ----------------- PORTIFOLIO -------------------*/

const portfolio = {
    aniversario: ['Miniaturas/Aniversário/AQ3A7534.jpg','Miniaturas/Aniversário/AQ3A7546.jpg','Miniaturas/Aniversário/AQ3A8643.jpg','Miniaturas/Aniversário/AQ3A8644.jpg','Miniaturas/Aniversário/AQ3A8645.jpg','Miniaturas/Aniversário/AQ3A8659.jpg','Miniaturas/Aniversário/AQ3A8695.jpg','Miniaturas/Aniversário/AQ3A8786.jpg','Miniaturas/Aniversário/AQ3A8794.jpg','Miniaturas/Aniversário/AQ3A9046.jpg','Miniaturas/Aniversário/AQ3A9164.jpg','Miniaturas/Aniversário/AQ3A9213.jpg'],
    noiva: ['Miniaturas/Noiva/AQ3A4304.jpg','Miniaturas/Noiva/AQ3A4321.jpg','Miniaturas/Noiva/AQ3A4309....jpg','Miniaturas/Noiva/AQ3A4314.jpg','Miniaturas/Noiva/AQ3A4316.jpg','Miniaturas/Noiva/AQ3A4322.jpg','Miniaturas/Noiva/AQ3A4324.jpg','Miniaturas/Noiva/AQ3A7662.jpg','Miniaturas/Noiva/AQ3A7681.jpg','Miniaturas/Noiva/AQ3A7687.jpg','Miniaturas/Noiva/AQ3A7787.jpg','Miniaturas/Noiva/AQ3A7792.jpg'],
    feminina: ['Miniaturas/Feminino/AQ3A1786....jpg','Miniaturas/Feminino/AQ3A1807.jpg','Miniaturas/Feminino/AQ3A2460.jpg','Miniaturas/Feminino/AQ3A2438.jpg','Miniaturas/Feminino/AQ3A2413.jpg','Miniaturas/Feminino/AQ3A1875.jpg','Miniaturas/Feminino/AQ3A1848.jpg','Miniaturas/Feminino/AQ3A1808.jpg','Miniaturas/Feminino/AQ3A1807.jpg','Miniaturas/Feminino/AQ3A2402.jpg','Miniaturas/Feminino/AQ3A7838.jpg','Miniaturas/Feminino/AQ3A7833.jpg'],
    casal: ['Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg'],
    gestantes: ['Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg','Miniaturas/default/default.jpg']
}

var selectPort = ' ';

function imagensPortfolioNoiva() {
    for (var i = 0; i < 12; i++) {
        let div = c('.images_sec1');
        c('.image_box_sec1').removeChild(div);
    }
    for (var i = 0; i < 12; i++) {
        let div = document.createElement('div');
        c('.image_box_sec1').appendChild(div);
        div.classList.add('images_sec1');
        div.id = [i]
        div.style.backgroundImage = "url(/imagens/"+portfolio.noiva[i]+")";
    }
    for (var i = 0; i < 5; i++) {
        let buttons = ['.button_sec1','.button_sec2','.button_sec3','.button_sec4','.button_sec5'];
        c(buttons[i]).classList.remove('buttonactive');
    }
    c('.button_sec1').classList.add('buttonactive');
    selectPort = '0';
}

function imagensPortfolioAniversario() {
    for (var i = 0; i < 12; i++) {
    let div = c('.images_sec1');
    c('.image_box_sec1').removeChild(div);
    }
    for (var i = 0; i < 12; i++) {
        let div = document.createElement('div');
        c('.image_box_sec1').appendChild(div);
        div.classList.add('images_sec1');
        div.id = [i]
        div.style.backgroundImage = "url(/imagens/"+portfolio.aniversario[i]+")";
    }
    for (var i = 0; i < 5; i++) {
        let buttons = ['.button_sec1','.button_sec2','.button_sec3','.button_sec4','.button_sec5'];
        c(buttons[i]).classList.remove('buttonactive');
    }
    c('.button_sec2').classList.add('buttonactive');
    selectPort = '1';
}

function imagensPortfolioFeminina() {
    for (var i = 0; i < 12; i++) {
        let div = c('.images_sec1');
        c('.image_box_sec1').removeChild(div);
    }
    for (var i = 0; i < 12; i++) {
        let div = document.createElement('div');
        c('.image_box_sec1').appendChild(div);
        div.classList.add('images_sec1');
        div.id = [i]
        div.style.backgroundImage = "url(/imagens/"+portfolio.feminina[i]+")";
    }
    for (var i = 0; i < 5; i++) {
        let buttons = ['.button_sec1','.button_sec2','.button_sec3','.button_sec4','.button_sec5'];
        c(buttons[i]).classList.remove('buttonactive');
    }
    c('.button_sec3').classList.add('buttonactive');
    selectPort = '2';
}

function imagensPortfolioCasal() {
    for (var i = 0; i < 12; i++) {
        let div = c('.images_sec1');
        c('.image_box_sec1').removeChild(div);
    }
    for (var i = 0; i < 12; i++) {
        let div = document.createElement('div');
        c('.image_box_sec1').appendChild(div);
        div.classList.add('images_sec1');
        div.id = [i]
        div.style.backgroundImage = "url(/imagens/"+portfolio.casal[i]+")";
    }
    for (var i = 0; i < 5; i++) {
        let buttons = ['.button_sec1','.button_sec2','.button_sec3','.button_sec4','.button_sec5'];
        c(buttons[i]).classList.remove('buttonactive');
    }
    c('.button_sec4').classList.add('buttonactive');
    selectPort = '3';
}

function imagensPortfolioGestantes() {
    for (var i = 0; i < 12; i++) {
        let div = c('.images_sec1');
        c('.image_box_sec1').removeChild(div);
    }
    for (var i = 0; i < 12; i++) {
        let div = document.createElement('div');
        c('.image_box_sec1').appendChild(div);
        div.classList.add('images_sec1');
        div.id = [i]
        div.onclick="ClickModal()";
        div.style.backgroundImage = "url(/imagens/"+portfolio.gestantes[i]+")";
    }
    for (var i = 0; i < 5; i++) {
        let buttons = ['.button_sec1','.button_sec2','.button_sec3','.button_sec4','.button_sec5'];
        c(buttons[i]).classList.remove('buttonactive');
    }
    c('.button_sec5').classList.add('buttonactive');
    selectPort = '4';
}

imagensPortfolioNoiva()

divModal = c('.image_box_sec1');
divModal.addEventListener('click', function (divModal) {
   var key = divModal.target.id;
   c('.image_box_modal').style.display = 'flex';
   c('.image_box_modal').style.transition = '0.4s';
   setTimeout(transicaoModal,400)
   function transicaoModal() { 
    c('.image_box_modal').style.opacity = '100%';
   }
   switch (selectPort) {
    case '0':  c('.image_modal_img').style.backgroundImage = "url(/imagens/"+portfolio.noiva[key]+")";
    break;
    case '1':  c('.image_modal_img').style.backgroundImage = "url(/imagens/"+portfolio.aniversario[key]+")";
    break;
    case '2':  c('.image_modal_img').style.backgroundImage = "url(/imagens/"+portfolio.feminina[key]+")";
    break;
    case '3':  c('.image_modal_img').style.backgroundImage = "url(/imagens/"+portfolio.casal[key]+")";
    break;
    default:  c('.image_modal_img').style.backgroundImage = "url(/imagens/"+portfolio.gestantes[key]+")";
    break;
   }
})



function clickMenuModal() {
    c('.image_box_modal').style.transition = '0.5s';
    c('.image_box_modal').style.opacity = '0%';
    c('.menu-modal-close-x').style.marginBottom = '900px';
    setTimeout(fechandoModal,500)
}
function fechandoModal(){
    c('.image_box_modal').style.display = 'none';
    c('.menu-modal-close-x').style.marginBottom = '18px';
}