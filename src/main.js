// alert(2);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    },
    mounted() {
        $('.hypothesis-list__item_text:first').slideDown(0);

        $(document).on('scroll', ()=>{

        });
        $(window).on('click', (e) => {
            var modal = $('.modal.opened');

            if (modal && e.target.contains(modal[0])) {
                this.closeModal();
            }
        });
    },
    methods: {
        headerCheck() {

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
})