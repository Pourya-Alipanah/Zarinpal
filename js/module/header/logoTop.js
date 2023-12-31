let fetchLogo = async ()=>{

    try {
        
        let res = await fetch ("https://pourya-alipanah.github.io/ZarinpalApi/header-logo.json");
    
        let jsonOut = await res.json()
        
        let output = await jsonOut.map(elem=>{
    
            return `
            <a href="#" class="flex md:items-start items-center w-[100%] h-[100%]">
                <img id="${elem.id}" src="${elem.blackLogoUrl}" class="md:mt-[7px] md:mr-[20px] mr-0 select-none dark:hidden" alt="${elem.alt}">
                <img id="${elem.id}" src="${elem.whiteLogoUrl}" class="md:mt-[7px] md:mr-[20px] mr-0 select-none hidden dark:block" alt="${elem.alt}">
            </a>`
    
        }).join("")
        
        document.querySelector("div.top-logo").innerHTML=output

    } catch (error) {

        throw error;
        
    }

}
export default {fetchLogo}