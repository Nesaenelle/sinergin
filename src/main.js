// alert(2);
import { isScrolledIntoView, scrollToAnimate } from './Utils.js'
let scrollInstance = new scrollToAnimate();

var app = new Vue({
    el: '#app',
    data: {
        showMenu: false
    },
    mounted() {
        $('.hypothesis-list__item_text:first').slideDown(0);

        this.headerCheck();
        $(document).on('scroll', () => {
            this.headerCheck();
        });
        $(window).on('click', (e) => {
            var modal = $('.modal.opened');

            if (modal && e.target.contains(modal[0])) {
                this.closeModal();
            }
        });

        window.addEventListener('mousewheel', () => {
            scrollInstance.clear();
        });

        window.addEventListener('click', (e) => {
            if (!this.$refs.menu.contains(e.target)) {
                this.showMenu = false;
            }
        });

        let tabs = $('[data-navigation]');
        let links = $('header a[href]');

        window.addEventListener('scroll', () => {
            tabs.each((i, elem) => {
              if (isScrolledIntoView(elem, 110)) {
                var id = elem.getAttribute('data-navigation');
                links.each((i, link) => {
                  if (link.getAttribute('href').substr(1) === id) {
                    link.classList.add('active');
                  } else {
                    link.classList.remove('active');
                  }
                });
              }
            });
          }, false);
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        headerCheck() {
            if (document.documentElement.scrollTop > 200) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        },
        toggleAccordeonItem(e) {
            let target = e.currentTarget.parentNode;
            $(target).find('.hypothesis-list__item_text').stop().slideToggle();
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                target.classList.add('active');
            }
        },
        toggleReferenceItem(e) {
            let target = e.currentTarget;
            $(target).next().stop().slideToggle();
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                target.classList.add('active');
            }
        },
        navigation(e) {
            e.preventDefault();
            var id = e.currentTarget.getAttribute('href').substr(1);
            var elem = document.querySelector(`[data-navigation="${id}"]`);
            let offset = elem.offsetTop - 99;
            if(id === 'home'){
                offset = 0;
            }
            if (elem) {
              scrollInstance.animate(document.documentElement, offset, 1250);
            }
        },
        openModal(name) {
            $('.modal').filter(`[data-id="${name}"]`).addClass('opened');
            $('.main-wrapper').addClass('opened');
        },
        closeModal() {
            $('.modal').removeClass('opened');
            $('.main-wrapper').removeClass('opened');
        }
    }
});


[].forEach.call(document.querySelectorAll('img[data-src]'), (img)=>{
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = ()=> {
    img.removeAttribute('data-src');
  };
});