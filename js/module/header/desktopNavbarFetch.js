let fetchDeskNav = async ()=>{
    
    try {
        
        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/header-nav.json");
        
        let jsonOut = await res.json();
        
        let output = await jsonOut.map(elem=>{
        
            if(elem.button){
        
                return `
                    <li class="list-bigNav">
                        <a href="#" class="zarinpal-button">${elem.title}</a>
                    </li>`
        
            }else if(elem.more){
        
                if (elem.menuClass === 1) {
                    
                    return `
                    <li class="list-bigNav" more-menu-1>
        
                        <div class="text-group flex flex-row items-center">
                            ${elem.title}
                            <span class="flex flex-row items-center">
                                <img src="${elem.angleIconBlack}" class="w-[9px] h-[12px] mr-[6.5px] dark:hidden">
                                <img src="${elem.angleIconWhite}" class="w-[9px] h-[12px] mr-[6.5px] hidden dark:block">
                            </span>
                        </div>
        
                        <div class="more-menu-1">
                            <div class="product-side pr-[8px]">
                                ${elem.moreTitlesRight.map(more=>{
        
                                    return `
        
                                    <a href="#" class="no-underline text-black">
                                        <div class="product-container">
                                            <p class="product-title">${more.productTitle}</p>
                                            <p class="product-subtitle">${more.productSubtitle}</p>
                                        </div>
                                    </a>`
        
                                }).join("")}
                            </div>
                            
                            <div class="product-side pl-[8px]">
                                ${elem.moreTitlesLeft.map(more=>{
        
                                    return `
        
                                    <a href="#" class="no-underline text-black">
                                        <div class="product-container">
                                            <p class="product-title">${more.productTitle}</p>
                                            <p class="product-subtitle">${more.productSubtitle}</p>
                                        </div>
                                    </a>`
        
                                }).join("")}
                            </div>
                        </div>
                    </li>`
        
                }else if(elem.menuClass === 2){
        
                    return `
        
                    <li class="list-bigNav" more-menu-2>
        
                        <div class="text-group flex flex-row items-center">
                            ${elem.title}
                            <span class="flex flex-row items-center">
                                <img src="${elem.angleIconBlack}" class="w-[9px] h-[12px] mr-[6.5px] dark:hidden">
                                <img src="${elem.angleIconWhite}" class="w-[9px] h-[12px] mr-[6.5px] hidden dark:block">
                            </span>
                        </div>
        
                        <div class="more-menu-2">
        
                            <div class="product-side">
        
                                ${elem.moreTitles.map(more => {
        
                                    return `
        
                                    <a href="#" class="no-underline text-black">
                                        <div class="product-container-2">
                                            <p class="product-title-2 ">${more.productTitle}</p>
                                        </div>
                                    </a>`
                                    
                                }).join("")}
                            </div>
                        </div>
                    </li>`
                }
                
            }else{
                return `<li class="list-bigNav">${elem.title}</li>`
            }
            
        }).join("");
        
        document.querySelector("ul.ul-bigNav").innerHTML = output;
        
    } catch (error) {

        throw error;
        
    }


}

export default {fetchDeskNav};