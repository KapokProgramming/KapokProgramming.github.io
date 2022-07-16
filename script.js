window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const portrait_menu = document.querySelector('.portrait-nav');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        portrait_menu.classList.toggle('is-active');
    });
}
