$(document).ready(function() {
    activate_image(1);
    scrollFunction();


    let lengthK = document.getElementById('home-vision-head-tab').offsetHeight;
    for (let i = 0; i < document.getElementsByClassName('main-sec-img-switch').length; i++) {
        document.getElementsByClassName('main-sec-img-switch')[i].style.height = lengthK + 'px';
    }

});

function activate_image(id) {
    $('#vision-tab-img').css('display', id === 1 ? 'block' : 'none');
    $('#mission-tab-img').css('display', id === 2 ? 'block' : 'none');
    $('#history-tab-img').css('display', id === 3 ? 'block' : 'none');
    var contentChange = document.getElementsByClassName('main-data-item');
    var contentChange2 = document.getElementsByClassName('tab-title-div');
    for (var i = 0; i < contentChange.length; i++) {
        if (contentChange[i].classList.contains('tab-title-active')) {
            contentChange[i].classList.remove('tab-title-active');
            contentChange2[i].classList.remove('tab-title-active');
        }
    }
    if (id === 1) {
        contentChange[id - 1].classList.add('tab-title-active');
        contentChange2[id - 1].classList.add('tab-title-active');
    }
    if (id === 2) {
        contentChange[id - 1].classList.add('tab-title-active');
        contentChange2[id - 1].classList.add('tab-title-active');
    }
    if (id === 3) {
        contentChange[id - 1].classList.add('tab-title-active');
        contentChange2[id - 1].classList.add('tab-title-active');
    }

}


/* var contentChange = document.getElementsByClassName('main-data-item');
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


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sli-img");
    var inext = document.getElementsByClassName("next");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < inext.length; i++) {
        inext[i].className = inext[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    inext[slideIndex - 1].className += " active";
}




var branch_names = {
    "AM": "Applied Mechanics and Hydraulics",
    "CH": "Chemical Engineering",
    "CY": "Chemistry",
    "CV": "Civil Engineering",
    "CSE": "Computer Science and Engineering",
    "EEE": "Electrical and Electronics Engineering",
    "ECE": "Electronics and Communication Engineering",
    "MBA": "School of Management",
    "IT": "Information Technology",
    "MCA": "Mathematical and Computational Sciences",
    "ME": "Mechanical Engineering",
    "MT": "Metallurgical and Materials Engineering",
    "MN": "Mining Engineering",
    "PH": "Physics",
}
var options = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    series: [{
        name: 'Placements',
        data: [86.4, 87.9, 87.9, 79.4, 84.4, 89.3, 89.6, 93.0, 100]
    }, {
        name: 'Higher Studies',
        data: [
            11.6, 8.9, 11.6, 14.4, 11.0, 5.5, 0, 0, 0
        ]
    }, ],
    xaxis: {
        categories: ["UG 2017", "UG 2018", "UG 2019", "PG 2017", "PG 2018", "PG 2019", "MCA 2017", "MCA 2018", "MCA 2019"],
    },
    yaxis: {
        max: 100,
        title: {
            text: 'Percentage of Students'
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        onDatasetHover: {
            highlightDataSeries: true,
        },
        y: {
            formatter: function(val, { series, seriesIndex, dataPointIndex, w }) {
                return val;
            },

        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();





// slider slick js 


$(document).ready(function () {
    $('.news-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow: $('.prev-news'),
        nextArrow: $('.next-news'),
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.news-slider').show()
});

$(document).ready(function () {
    $('.announce-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow: $('.prev-announcements'),
        nextArrow: $('.next-announcements'),
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.announce-slider').show()
});
// $(document).ready(function() {
//     $('.news-slider').click({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1300,
//         responsive: [{
//             breakpoint: 850,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         }]
//     });
//     $('.news-slider').show()
// });

