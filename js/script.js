// click button -> show entire menu
$(".tit .btn").click(function(e){
    e.preventDefault();
    // $("#cont_nav").css("display", "block");
    // $("#.cont_navi").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
});

//slick banner
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//tapmenu
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show()
         .parent("li").addClass("active")
         .siblings("li").removeClass("active")
         .find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//gallery
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

//layer popup
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").slideUp();
});

//window popup
$(".window").click(function(e){
    e.preventDefault();
    //window.open("fileName", "popupName", "option");
    window.open("html/sample_popup.html", "popup01",
       "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0" );
});

//lightgallery
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});
