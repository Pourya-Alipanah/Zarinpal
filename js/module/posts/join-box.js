let fetchJbPost = async ()=>{

    try {

        let res = await fetch("https://pourya-alipanah.github.io/ZarinpalApi/join-box.json");

        let jsonOut = await res.json();

        let output = await jsonOut.map(elem =>{

            return `
            <div class="jb-wrapper">

                <h3 class="jb-top-title">
                    ${elem.topTitle}
                </h3>

                <span class="jb-description">
                    ${elem.descriptionTitle}
                </span>

                <a href="#" class="register-btn mt-[17px]">
                    ${elem.regBtn}
                </a>
            </div>`

        }).join("")

        document.querySelector("section.join-box").innerHTML = output
        
    } catch (error) {
        
        throw error;

    }
}

export default {fetchJbPost}