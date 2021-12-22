$(document).ready(function() {
    activate_image(1);
    scrollFunction();


    let lengthK = document.getElementById('home-vision-head-tab').offsetHeight;
    for (let i = 0; i < document.getElementsByClassName('img-section-switch').length; i++) {
        document.getElementsByClassName('img-section-switch')[i].style.height = lengthK + 'px';
    }

});

function activate_image(id) {
    $('#vision-tab-img').css('display', id === 1 ? 'block' : 'none');
    $('#mission-tab-img').css('display', id === 2 ? 'block' : 'none');
    $('#history-tab-img').css('display', id === 3 ? 'block' : 'none');
    var contentChange = document.getElementsByClassName('gdlr-core-tab-item-content');
    var contentChange2 = document.getElementsByClassName('gdlr-core-tab-item-title');
    for (var i = 0; i < contentChange.length; i++) {
        if (contentChange[i].classList.contains('gdlr-core-active')) {
            contentChange[i].classList.remove('gdlr-core-active');
            contentChange2[i].classList.remove('gdlr-core-active');
        }
    }
    if (id === 1) {
        contentChange[id - 1].classList.add('gdlr-core-active');
        contentChange2[id - 1].classList.add('gdlr-core-active');
    }
    if (id === 2) {
        contentChange[id - 1].classList.add('gdlr-core-active');
        contentChange2[id - 1].classList.add('gdlr-core-active');
    }
    if (id === 3) {
        contentChange[id - 1].classList.add('gdlr-core-active');
        contentChange2[id - 1].classList.add('gdlr-core-active');
    }

}


/* var contentChange = document.getElementsByClassName('gdlr-core-tab-item-content');
for (var i = 0; i < contentChange.length; i++) {
    contentChange[i].onclick = function(e) {
        console.log(e.target);
    }
} */

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