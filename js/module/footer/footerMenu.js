let fetchFooterMenu = async () => {

    try {
        
        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/footerMenu.json");

        let jsonOut = await res.json();

        let fMenuOutput = await jsonOut.map(elem =>{

            if(elem.type === "fMenu"){
    
                return `
    
                    <div class="fMenuWrapper">
    
                        <div class="footerTitle">
                            ${elem.footerTitle}
                        </div>
    
                        <ul class="fMenuUl">
                            ${elem.listTitles.map(lists =>{
    
                                return `
                                <li class="fMenuLi">
                                    ${lists.title}
                                </li>`
    
                            }).join("")}
                        </ul>
                        
                    </div>`
    
            }
            
        }).join("")
        
        let logoOutput = await jsonOut.map(elem =>{
            
            if(elem.type === "footerTitle"){

                return `
                <div class="footerTitle text-center">
                    ${elem.footerLogoTitle}
                </div>

                <div class="socialNetworks">`

            }else if(elem.type === "footerlogo"){

                    return `
                    <a href="#" class="logoSetting">
                            
                        <img src="${elem.logoUrl}" class="hover:opacity-70" alt="">

                    </a>`

            }else if(elem.type === "eNamad"){

                return `
                </div>

                <div class="eNamad">
                    
                        <img src="${elem.eNamad}" class="w-[78px] h-[82px]" alt="">
                    
                </div>`

            }

        }).join("")

        document.querySelector("section.footerMenu>div.fMenu").innerHTML = fMenuOutput;

        document.querySelector("section.footerMenu>div.footerLogos").innerHTML = logoOutput;

    } catch (error) {
        
        throw error;

    }
}

export default {fetchFooterMenu}