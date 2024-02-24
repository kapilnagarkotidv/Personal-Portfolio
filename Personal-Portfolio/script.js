const menu = document.querySelector('#hamburger');
const sidemenu = document.querySelector('.sidemenu')
const hidemenu = document.querySelector('#x');
menu.addEventListener('click', function(){
    sidemenu.style.display = 'block';
});

hidemenu.addEventListener('click',function(){
    sidemenu.style.display = 'none';
});

const project = document.querySelectorAll('.project-cards');
Array.from(project).forEach(function(card){
    card.addEventListener('mouseover',function(){
        showOverlay(this);
    });

    card.addEventListener('mouseout',function(){
        hideOverlay(this);
    });
});
function showOverlay(card){
    card.document.querySelector('.project-cards .info').style.bottom = '0';
}
function hideOverlay(card){
    card.document.querySelector('.project-cards .info').style.bottom = '-100%';
}
