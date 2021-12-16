$(document).ready(function () {
    activate_image(1);
    scrollFunction();

});

function activate_image(id) {
    $('#vision-tab-img').css('display', id === 1 ? 'block' : 'none');
    $('#mission-tab-img').css('display', id === 2 ? 'block' : 'none');
    $('#history-tab-img').css('display', id === 3 ? 'block' : 'none');
}


// // scroll effect on nav image start

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("main-scroll-img").style.;
//   } else {
//     document.getElementById("main-scroll-img").style.scale = "90px";
//   }
// }
// //   scroll effect on nav image end
// this is on work so DNT 

function scrollFunction() {
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.main-nav-sec').addClass('scroll-nav');
        } else if ($(window).scrollTop() <= 50) {
            $('.main-nav-sec').removeClass('scroll-nav');
        }
    })
}

// $('.main-li-hover').hover(function () {

//     $('#sublink-of-main4').toggle('.nav-ul-hide');


// });


//  $li.toggle('.nav-ul-hide');
// var link=document.getElementsByClassName('main-li-hover');
// console.log(link);
// for (let l = 0; l < link.length; l++) {
//         // link[l].hover(function () {
//         //     $('#sublink-of-main'+l).toggle('.nav-ul-hide');
//         //  }); 
//          link[l].onmouseover=function (e) { 
//              $('#sublink-of-main'+l).toggle('.nav-ul-hide');
//           }
         
// }

// $(function () {
//     $('.nav-ul-hover > .main-li-hover, .sub-nav > li').hover(
//         function () {  
//             var submenu = $(this).find('ul.sub-nav');
//             if (submenu.hasClass('sub-nav')) {
//                 submenu.removeClass('nav-ul-hide');
//             }
//         },
//         function () {
//             var submenu = $(this).find('ul.sub-nav');
//             if (submenu.hasClass('sub-nav')) {
//                 submenu.addClass('nav-ul-hide');
//             }
//         });
// });