let fetchSup = async ()=>{

    try {

        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/footer-support.json");

        let jsonOut = await res.json();

        let output = await jsonOut.map(elem => {

            if(elem.side === "right"){

                return `
                <div class="sup-right">

                <span>
                    ${elem.title}
                </span>

                <span class="pipe">|</span>

                <span>
                
                    ${elem.titlePhoneNumPort}

                    <span class="phone-number">
                        ${elem.phoneNumPort}
                    </span>
                
                </span>

                <span class="pipe">|</span>

                <span>
                
                    ${elem.titlePhoneNumCust}

                    <span class="phone-number">
                        ${elem.phoneNumCust}
                    </span>
                
                </span>

                </div>`

            }else if(elem.side === "left"){

                return `
                <div class="sup-left">

                    <span class="cursor-pointer">
                        ${elem.title}
                    </span>
                
                    <span class="cursor-pointer">
                
                        <img src="${elem.arrowLeftBlack}" class="lg:w-[16px] w-[14px] lg:h-[16px] h-[14px] xl:mr-[15px] mr-[10px] flex items-center dark:hidden" alt="">

                        <img src="${elem.arrowLeftWhite}" class="lg:w-[16px] w-[14px] lg:h-[16px] h-[14px] xl:mr-[15px] mr-[10px] hidden dark:flex items-center" alt="">
                
                    </span>

                </div>`

            }

        }).join("")

        document.querySelector("section.support").innerHTML = output;
        
    } catch (error) {
        
        throw error;

    }
}

export default {fetchSup}