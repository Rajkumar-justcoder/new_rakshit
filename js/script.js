$(document).ready(function() {
    activate_image(1);
    scrollFunction();

});

function activate_image(id) {
    $('#vision-tab-img').css('display', id === 1 ? 'block' : 'none');
    $('#mission-tab-img').css('display', id === 2 ? 'block' : 'none');
    $('#history-tab-img').css('display', id === 3 ? 'block' : 'none');
}

console.log(document.getElementById('home-vision-head-tab').offsetHeight);

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
    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.main-nav-sec').addClass('scroll-nav');
        } else if ($(window).scrollTop() <= 50) {
            $('.main-nav-sec').removeClass('scroll-nav');
        }
    })
}





const items = document.querySelectorAll('img');
    const itemCount = items.length;
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    let count = 0;

    function showNextItem() {
      items[count].classList.remove('active');

      if (count < itemCount - 1) {
        count++;
      } else {
        count = 0;
      }

      items[count].classList.add('active');
      console.log(count);
    }

    function showPreviousItem() {
      items[count].classList.remove('active');

      if (count > 0) {
        count--;
      } else {
        count = itemCount - 1;
      }

      items[count].classList.add('active');
      console.log(count);
    }

    function keyPress(e) {
      e = e || window.event;

      if (e.keyCode == '37') {
        showPreviousItem();
      } else if (e.keyCode == '39') {
        showNextItem();
      }
    }

    nextItem.addEventListener('mouseover', showNextItem);
    previousItem.addEventListener('mouseover', showPreviousItem);
    document.addEventListener('keydown', keyPress);