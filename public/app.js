(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// alert(2);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    },
    mounted: function mounted() {
        var _this = this;

        $('.hypothesis-list__item_text:first').slideDown(0);

        $(document).on('scroll', function () {});
        $(window).on('click', function (e) {
            var modal = $('.modal.opened');

            if (modal && e.target.contains(modal[0])) {
                _this.closeModal();
            }
        });
    },

    methods: {
        headerCheck: function headerCheck() {},
        toggleAccordeonItem: function toggleAccordeonItem(e) {
            var target = e.currentTarget.parentNode;
            $(target).find('.hypothesis-list__item_text').stop().slideToggle();
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                target.classList.add('active');
            }
        },
        toggleReferenceItem: function toggleReferenceItem(e) {
            var target = e.currentTarget;
            $(target).next().stop().slideToggle();
            if (target.classList.contains('active')) {
                target.classList.remove('active');
            } else {
                target.classList.add('active');
            }
        },
        navigation: function navigation(e) {
            e.preventDefault();
        },
        openModal: function openModal(name) {
            $('.modal').filter('[data-id="' + name + '"]').addClass('opened');
            $('.main-wrapper').addClass('opened');
        },
        closeModal: function closeModal() {
            $('.modal').removeClass('opened');
            $('.main-wrapper').removeClass('opened');
        }
    }
});

},{}]},{},[1]);
