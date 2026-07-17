// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
});

// Show / hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'fa fa-plus'){
            icon.className = 'fa fa-minus'
        }else{
            icon.className = 'fa fa-plus'
        }
    })
});

// Alertas de login

function pagina_logado(){
    swal({
      title: "Você foi logado com sucesso!",
      icon: false, 
      text: "Aguarde enquanto organizamos tudo para você...",
      button: false,
      closeOnClickOutside: false,
      timer: 3000,
    });
    setTimeout(function() {
      window.location = './edicao/principal.html';
      }, 2000);
    };
  function erro(){
    swal({
      title: "Tente Novamente!",
      icon: 'error', 
      text: "E-mail e/ou senha incorreto(s).",
      button: false,
      closeOnClickOutside: false,
      timer: 2000,
    });
  };
  

// Show / hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

