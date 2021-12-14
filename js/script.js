
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
        if ($(window).scrollTop()) {
            $('.main-nav-sec').addClass('scroll-nav');
        } else {
            $('.main-nav-sec').removeClass('scroll-nav');
        }
    })
}
