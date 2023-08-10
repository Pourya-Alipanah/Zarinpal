let fetchPoPost = async ()=>{
    try {

        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/pay-out.json");

        let jsonOut = await res.json();

        let output = await jsonOut.map(elem => {

            if(elem.side === "left"){

                return `
                <div class="po-left">
                    <div class="po-image"></div>
                </div>`

            }else if(elem.side === "right"){

                return `
                <div class="po-right">

                    <h2 class="po-top-title">
                        ${elem.topTitle}
                    </h2>

                    <h2 class="po-header-title">
                        ${elem.headerTitle}
                    </h2>

                    <p class="po-header-description">

                        <span class="leading-[40px]">
                            ${elem.headeDescription}
                        </span>

                    </p>

                    <div class="po-btn-group">

                        <a href="#" class="register-btn leading-[28px]">
                            ${elem.regBtn}
                        </a>

                        <a href="#" class="more-btn">

                            ${elem.moreBtn}

                            <img src="${elem.arrowBlackUrl}" class="w-[15px] h-[15px] mr-[5px] dark:hidden" alt="">
                            <img src="${elem.arrowWhiteUrl}" class="w-[15px] h-[15px] mr-[5px] hidden dark:inline-block" alt="">

                        </a>
                    </div>
                </div>`

            }
        }).join("")
        
        document.querySelector("section.pay-out").innerHTML = output;

    } catch (error) {

        throw error;

    }
}

export default {fetchPoPost}