const blogTitleId = document.querySelector('.title');
const articleId = document.querySelector('.article');

// bannner

const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

//publish 

const publishBtn = document.querySelector('.Publish-btn');
const uploadInput = document.querySelector('#image-upload');



// Banner Image change
bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

//UploadImage change
uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
                method: 'post',
                body: formdata
            }).then(res => res.json())
            .then(data => {
                if (uploadType == "image") {
                    addImage(data, file.name);
                } else {
                    bannerPath = `${location.origin}/${data}`;
                    banner.style.backgroundImage = `url("${bannerPath}")`;
                }
            })
    } else {
        alert("upload Image only");
    }
}


const addImage = (imagepath, alt) => {
    let curPos = articleId.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleId.value = articleId.value.slice(0, curPos) + textToInsert + articleId.value.slice(curPos);
}


let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if (articleId.value.length && blogTitleId.value.length) {
        // generating id 
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let blogTitle = blogTitleId.value.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // setting up documentName 
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // for published info 

        //accessing firestore with db variable
        db.collection("blogs").doc(docName).set({
                title: blogTitleId.value,
                article: articleId.value,
                bannerImage: bannerPath,
                publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
            })
            .then(() => {
                location.href = `/${docName}`;
            })
            .catch((err) => {
                console.error(err);
            })
    }
})


// Menu bar

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

var wrapper;
var burger_menu;
var search_menu;

function declare() {
  wrapper = document.querySelector(".site-wrapper ");
  burger_menu = document.querySelector(".burger-menu");
  search_menu = document.querySelector(".search");
}

declare();

const main = document.querySelector("main");

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