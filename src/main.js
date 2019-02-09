// alert(2);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    },
    mounted() {
        $('.hypothesis-list__item_text:first').slideDown(0);
    },
    methods: {
        toggleItem(e) {
            let target = e.currentTarget.parentNode;
            $(target).find('.hypothesis-list__item_text').stop().slideToggle();
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                target.classList.add('active');
            }
        },
        navigation(e) {
            e.preventDefault();

        }
    }
})