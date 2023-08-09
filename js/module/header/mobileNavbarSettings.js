let openMenu = ()=> $(".menuIcon").on("click" , ()=>{
    $(".mobileMenu").slideDown(300).addClass("flexActive");
    $(".coverPage3").fadeIn(300);
})
let closeMenu = ()=> $(".closeBtn").on("click" , ()=>{
    $(".mobileMenu").slideUp(300).removeClass("flexActive")
    $(".coverPage3").fadeOut(300);
})

let coverCloseMenu = ()=> $(".coverPage3").on("click", ()=>{
    $(".mobileMenu").slideUp(300).removeClass("flexActive")
    $(".coverPage3").fadeOut(300);
});

let accordionBtn = ()=> $("li[more-menu-mobile]").on("click" , ()=>{
    $(".subProducts").slideToggle(500).toggleClass("flexActive")
    if( $("html").hasClass("dark") ){
        $("div.productOpenerBtn>span>img:nth-of-type(2)").toggleClass("rotateAngle")
    }else{
        $("div.productOpenerBtn>span>img:first-of-type").toggleClass("rotateAngle")
    }
})

const setting = ()=>{
    try {

        openMenu();
        closeMenu();
        coverCloseMenu();
        accordionBtn();

    } catch (error) {
        throw error;
    }
}

export default {setting}