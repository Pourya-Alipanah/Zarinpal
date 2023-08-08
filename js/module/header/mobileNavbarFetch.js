let fetchMobileNav = async ()=>{

    try {
        
        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/mobile-nav.json")
    
        let jsonOut = await res.json();
    
        let menuIconOut = await jsonOut.map(elem=>{
            if(elem.class === "menuIcon"){
    
                return `
                <span class="${elem.class}">
                    <img src="${elem.blackMenuIconUrl}" class="w-[100%] h-[100%] cursor-pointer dark:hidden">
                    <img src="${elem.whiteMenuIconUrl}" class="w-[100%] h-[100%] cursor-pointer hidden dark:inline-block">
                </span>`
    
            }
        }).join("");
        
    
    
        let navOutput = await jsonOut.map(elem=>{
    
            if(elem.moreMenuMobile === true){
    
                return `
                            <li class="py-[9px] " more-menu-mobile>
                                <div class="productOpenerBtn">
                                    محصولات
                                    <span class="flex items-center">
                                        <img src="${elem.angleDownBlackUrl}" class="w-[9px] h-[12px] mr-[6.5px] dark:hidden duration-500">
                                        <img src="${elem.angleDownWhiteUrl}" class="w-[9px] h-[12px] mr-[6.5px] hidden dark:block duration-500">
                                    </span>
                                </div>
                                <ul class="subProducts">
                                    ${elem.moreMenuTitles.map(e=>{
                                        return `
                                        <li class="py-[6px]">
                                            <a href="#" class="no-underline text-[#303030] dark:text-[#fffefb]">${e.title}</a>
                                        </li>`
                                    }).join("")}
                                </ul>
                            </li>`
    
            }else if(elem.title){
                return `
                            <li class="py-[9px]">
                                <a href="#" class="no-underline text-[#303030] dark:text-[#fffefb]">
                                    ${elem.title}
                                </a>
                            </li>`
            }
    
        }).join("");
    
        let zarinpalBtnOut = await jsonOut.map(elem =>{
            if(elem.zarinpalBtn){
                return `
                <div class="py-[20px] px-[30px] bg-[#eee] w-[100%] hover:bg-[rgba(228,197,0,.15)] dark:bg-[rgba(228,197,0,.15)] dark:hover:bg-[rgba(232,239,254,.6)] order-3 group">
    
                    <a href="#" class="zarinpal-button-mobile-link">
                        <span>${elem.titleBtn}</span>
                        <span>
                            <img src="${elem.arrowBlackUrl}" class="w-[12px] h-[12px] mr-[5px] flex items-center dark:hidden dark:group-hover:flex">
                            <img src="${elem.arrowWhiteUrl}" class="w-[12px] h-[12px] mr-[5px] hidden items-center dark:flex dark:group-hover:hidden">
                        </span>
                    </a>
                </div>`
            }
        }).join("")
    
        document.querySelector("div.mobileNav").innerHTML += menuIconOut;
        document.querySelector("ul.ul-mobileNav").innerHTML += navOutput;
        document.querySelector("div.mobileMenu").innerHTML += zarinpalBtnOut;

    } catch (error) {

        throw error;
        
    }
}

export default {fetchMobileNav}