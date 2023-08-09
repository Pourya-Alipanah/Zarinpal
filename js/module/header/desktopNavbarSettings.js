//initial variables:
let menu1 = "li[more-menu-1]";
let menu2 = "li[more-menu-2]";

// to animatedly open "محصولات" section in navBar:
const Opener1Procces = ()=>{

    $(`${menu1}>div.more-menu-1`).slideToggle(200).toggleClass("flexActive");

    $(".coverPage").fadeToggle(200);

    $(menu1).addClass("z-[99]");

    $(menu2).removeClass("z-[99]");
};

let productMenuOpener = ()=> $(`${menu1}>div.text-group`).on("click", Opener1Procces);

// to cover background when "محصولات" section is open:
const coverPage1Procces = ()=>{

    $(`${menu1}>div.more-menu-1`).slideToggle(200).toggleClass("flexActive");

    $(".coverPage").fadeToggle(200);
};

let coverPageProductMenu = ()=> $(".coverPage").on("click", coverPage1Procces);

// to animatedly open "بیش تر" section in navBar:

const Opener2Procces = ()=>{

    $(`${menu2}>div.more-menu-2`).slideToggle(200).toggleClass("flexActive");

    $(".coverPage2").fadeToggle(200);

    $(menu2).addClass("z-[99]");

    $(menu1).removeClass("z-[99]");
};

let moreMenuOpener = ()=> $(`${menu2}>div.text-group`).on("click", Opener2Procces);

// to cover background when "بیش تر" section is open:

const coverPage2Procces = ()=>{

    $(`${menu2}>div.more-menu-2`).slideToggle(200).toggleClass("flexActive");

    $(".coverPage2").fadeToggle(200);
};

let coverPageMoreMenu = ()=> $(".coverPage2").on("click", coverPage2Procces);

// assign changes to header with add a class , when page is scrolled:

const navScrollProcces = ()=>{
    
    let st = $(document).scrollTop();
    let screenSize = window.innerWidth;

    if(st > 2 && screenSize >= 768){

        $("header").addClass("scrollHeaderStyle");
        
    }else{

        $("header").removeClass("scrollHeaderStyle");
    }
};

let navScroll = ()=> $(document).on("scroll", navScrollProcces);


// Let's combine all of the above:

const setting = ()=>{

    try {
        productMenuOpener()
        coverPageProductMenu()
        moreMenuOpener()
        coverPageMoreMenu()
        navScroll()

    } catch (error) {
        throw error;
    }
};

export default {setting};