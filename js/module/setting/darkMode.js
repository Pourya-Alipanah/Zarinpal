// initial variables:
let darkBtnCheck = document.querySelector("input.dn");
const htmlC = document.documentElement.classList;

// gets prefer theme color from the user OS:
const darkCheck = mode => window.matchMedia(`(prefers-color-scheme: ${mode})`);

// check what theme is preferred by the user in previous sessions or OS setting:
const themeChecker = ()=>{

    if(localStorage.theme === "dark" || (!('theme' in localStorage) && darkCheck("dark").matches)){

        htmlC.add("dark");
        darkBtnCheck.checked = true;

    }else{

        htmlC.remove("dark");
        darkBtnCheck.checked = false;
        
    }
}

// this function makes change theme and changer button's face when user wants to change theme manually:
const changeTheme = ()=>{

    darkBtnCheck.addEventListener("change", event =>{

        if(event.target.checked){

            htmlC.add("dark");
            localStorage.theme = 'dark';

        }else{

            htmlC.remove("dark");
            localStorage.theme = 'light';
        }
    })
}

// Let's combine all of the above
const setting = ()=>{
    try {

        themeChecker();
        changeTheme();

    } catch (error) {
        console.log(error);
    }
}
export default {setting}