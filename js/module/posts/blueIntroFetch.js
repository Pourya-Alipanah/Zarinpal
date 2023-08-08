let fetchBlueIntro = async ()=>{
    
    try {
        
        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/blueIntro.json");
        
        let jsonOut = await res.json();
        
        let output = await jsonOut.map((elem=>{
        
            if(elem.side === "right"){
        
                return `
                <div class="right-box">
        
                    <div class="head-title">
                        <span>${elem.headTitleLine1}</span>
                        <span>${elem.headTitleLine2}</span>
                    </div>
        
                    <p class="description-title">
                        ${elem.descriptionTitle}
                    </p>
        
                    <div class="lg:my-[40px] mt-[20px] flex items-end">
                        <a href="#" class="register-btn">${elem.registerBtn}</a>
                        <a href="#" class="login-btn">${elem.loginBtn}</a>
                    </div>
                </div>`
        
            }else if(elem.side === "left"){
        
                return `
                <div class="left-box">
                    <img src="${elem.mobilesPic}" class="xl:w-[500px] xl:h-[534px] lg:w-[430px] lg:h-[474px]" alt="${elem.alt}">
                </div>`
        
            }else if(elem.side === "arrow-bottom"){
        
                return `
                <div class="arrow-down">
                    <a href="#" class="relative bottom-[9px]">
                        <img src="${elem.arrowDownBlackUrl}" class="w-[21px] h-[21px] cursor-pointer dark:hidden" alt="">
                        <img src="${elem.arrowDownwhiteUrl}" class="w-[21px] h-[21px] cursor-pointer hidden dark:inline-block" alt="">
                    </a>
                </div>`
                
            }
        })).join("");
        
        document.querySelector("div.blueIntroWrapper").innerHTML = output;

    } catch (error) {

        throw error;
        
    }

}

export default {fetchBlueIntro}