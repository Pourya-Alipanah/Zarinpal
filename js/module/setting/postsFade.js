
let fadePostsRight1= (container , faded)=> $(document).on("scroll" , ()=>{
    
        const st = $(document).scrollTop();

        if( st > $(container).offset().top - 500){

            $(faded).fadeIn(500).addClass("animate__animated animate__backInRight flexActive")

        }
});

let fadePostsLeft2= (container , faded)=> $(document).on("scroll" , ()=>{

        const st = $(document).scrollTop();

        if( st > $(container).offset().top - 500){

            $(faded).fadeIn(500).addClass("animate__animated animate__zoomInLeft flexActive")

        }
});

let fadePostsUp= (container , faded)=> $(document).on("scroll" , ()=>{

        const st = $(document).scrollTop();
        
        if( st > $(container).offset().top - 500){

            $(faded).fadeIn(500).addClass("animate__animated animate__slideInUp flexActive")

        }
});

const fadePosts = ()=>{
    
    try {

        fadePostsUp(".payment-gateway" , "div.pg-left");

        fadePostsRight1(".zarin-link" , "div.zl-right");

        fadePostsLeft2(".zarin-card" , "div.zc-left");
        
        fadePostsUp(".pay-out" , "div.po-right");
        
        fadePostsLeft2(".zarin-plus" , "div.zp-left");

    } catch (error) {

        throw error;

    }
}

export default {fadePosts}