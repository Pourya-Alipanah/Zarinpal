let fetchZcPost = async ()=>{
    try {

        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/zarin-card.json");

        let jsonOut = await res.json();

        let output = await jsonOut.map(elem => {

            if(elem.side === "right"){

                return `
                <div class="zc-right">
                    <div class="zc-image"></div>
                </div>`

            }else if(elem.side === "left"){

                return `
                <div class="zc-left">

                    <h2 class="zc-top-title">
                        ${elem.topTitle}
                    </h2>

                    <h2 class="zc-header-title">
                        ${elem.headerTitle}
                    </h2>

                    <p class="zc-header-description">

                        <span class="leading-[40px]">
                            ${elem.headeDescription}
                        </span>

                    </p>

                    <div class="zc-btn-group">

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
        
        document.querySelector("section.zarin-card").innerHTML = output;

    } catch (error) {

        throw error;

    }
}

export default {fetchZcPost}