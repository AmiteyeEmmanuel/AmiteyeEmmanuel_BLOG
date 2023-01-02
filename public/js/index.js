// Hero Animation slider
var slideImg = document.getElementById('slideImg');
var images = new Array(
    "images/i/Slide1.jpg",
    "images/i/Slide2.jpg",
    "images/i/Slide3.jpg",
);

var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 4000);
}

//ejs function
// $(document).ready(function() {
//     "use strict";

//     $(".post-carousel-twoCol").slick({
//         dots: false,
//         arrows : false,
//         slidesToShow : 2,
//         slidesToSCroll :1,
//         responsive : [
//             {
//                 breakpoint : 768,
//                 settings : {
//                     slidesToShow : 2,
//                     slidesToSCroll : 2,
//                     dots : false,
//                     arrows : false,
//                 }
//             },
//             {
//                 breakpoint : 576,
//                 settings : {
//                     slidesToShow : 1,
//                     slidesToSCroll : 1,
//                     dots:false,
//                     arrows : false,
//                 }
//             }
//         ]
//     });

//     $(".carousel-topNav-prev").click(function() {
//         $(".post-carousel-twoCol").slick('slickPrev');
//     });
//     $(".carousel-topNav-next").click(function() {
//         $(".post-carousel-twoCol").slick('slickNext');
//     });

//     $(".post-carousel-widget").slick({
//         dots: false,
//         arrows : false,
//         slidesToShow : 1,
//         slidesToSCroll :1,
//         responsive : [
//             {
//                 breakpoint : 991,
//                 settings : {
//                     slidesToShow : 2,
//                     slidesToSCroll : 1,
//                 }
//             },
//             {
//                 breakpoint : 576,
//                 settings : {
//                     slidesToShow : 1,
//                     slidesToSCroll : 1,
//                     centerMode : true,
//                 }
//             }
//         ]
//     });

//     $(".carousel-botNav-prev").click(function() {
//         $(".post-carousel-widget").slick('slickPrev');
//     });
//     $(".carousel-botNav-next").click(function() {
//         $(".post-carousel-widget").slick('slickNext');
//     });


  



//     var $header = $(".header-default"),
//     $clone = $header.before($header.clone().addClass("clone"));
//     $(window).on("scroll", function(){
//         var fromTop = $(window).scrollTop();
//         $('body').toggleClass("down", (fromTop > 300));
//     });
// });

$(function(){
    "use strict";

    $('.sidebar').stickySidebar({
        topSpacing : 60,
        bottomSpacing : 30,
        containerSelector : '.main-content',
    });
    $(".submenu").before('<i class="icon-arrow-down switch"></i>');
    $(".vertical-menu li i.switch").on('click', function() {
    var $submenu = $(this).next(".submenu");
    $submenu.slideToggle(300);
    $submenu.parent().toggleClass("openmenu");
});

    $("button.burger-menu").on('click', function(){
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on('click', function() {
        $(".canvas-menu").removeClass("open");
        $(".main-overlay").removeClass("active");
    });

    $("button.search").on('click',function(){
        $(".search-popup").addClass("visible");
    });

    $(".search-popup .btn-close").on('click', function(){
        $(".search-popup").removeClass("visible");
    });

    $(document).keyup(function(e){
        if(e.key ===  "Escape"){
            $(".search-popup").removeClass("visible");
        }
    });


    // loader tab pane 
    // $('button[data-bs-toggle="tab"]').on('click', function() {
    //     $(".tab-pane").addClass("loading");
    //     $(".lds-dual-ring").addClass("loading");
    //     setTimeout(function () {
    //         $(".tab-pane").removeClass("loading");
    //         $(".lds-dual-ring").removeClass("loading");
    //     }, 500);
    // });
    // share toggle button 
    // $(".post button.toggle-button").each(function() {
    //     $(this).on('click', function(e){
    //         $(this).next('.social-share .icons').toggleClass("visible");
    //         $(this).toggleClass("icon-close").toggleClass("icon-share");
    //     });
    // });

    // var list = document.getElementsByClassName('spacer');
    // for(var i = 0; i< list.length; i++){
    //     var size = list[i].getAttribute('data-height');
    //     list[i].style.height = "" + size + "px";
    // }

    // var list = document.getElementsByClassName('data-bg-image');

    // for(var i =0; i< list.length; i++){
    //     var bgimg = list[i].getAttribute('data-bg-image');
    //     list[i].style.backgroundImage = "url('" + bgimg + "')";
    // }


});

// light and dark mode
var toggle_btn;
var wrapper;
var burger_menu;
var search_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  wrapper = document.querySelector(".site-wrapper ");
  burger_menu = document.querySelector(".burger-menu");
  search_menu = document.querySelector(".search");
}

declare();

const main = document.querySelector("main");

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  }else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }

  clone.classList.add("copy");
  main.appendChild(clone);

  clone.addEventListener("animationend", () => {

    wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });

}

/*==================== Toggle Event ====================*/
function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  burger_menu.addEventListener("click", () => {
    "use strict";

    $('.sidebar').stickySidebar({
        topSpacing : 60,
        bottomSpacing : 30,
        containerSelector : '.main-content',
    });
    $(".submenu").before('<i class="icon-arrow-down switch"></i>');
    $(".vertical-menu li i.switch").on('click', function() {
    var $submenu = $(this).next(".submenu");
    $submenu.slideToggle(300);
    $submenu.parent().toggleClass("openmenu");
});

    $("button.burger-menu").on('click', function(){
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on('click', function() {
        $(".canvas-menu").removeClass("open");
        $(".main-overlay").removeClass("active");
    });

  });
  search_menu.addEventListener("click", () => {
    "use strict";

    $("button.search").on('click',function(){
        $(".search-popup").addClass("visible");
    });

    $(".search-popup .btn-close").on('click', function(){
        $(".search-popup").removeClass("visible");
    });

    $(document).keyup(function(e){
        if(e.key ===  "Escape"){
            $(".search-popup").removeClass("visible");
        }
    });
  })
}


events();







// Blog post

const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 45) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
}

getMore();

async function getMore() {
    const response = await fetch('/more');
    const data = await response.json();
    console.log(data);
}