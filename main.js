import './style.css';
import $ from 'jquery';
import darkMode from "./js/module/setting/darkMode.js";
import logoTop from "./js/module/header/logoTop.js";
import desktopNavBarFetch from "./js/module/header/desktopNavbarFetch.js";
import desktopNavbarSettings from "./js/module/header/desktopNavbarSettings.js";
import mobileNavbarFetch from './js/module/header/mobileNavbarFetch';
import mobileNavbarSettings from "./js/module/header/mobileNavbarSettings.js";

$(window).on("load",()=>{
    $('.pl').fadeOut(5000);
    $("div#app").delay(4600).fadeIn(300)
});

window.$ = $;
darkMode.setting();

logoTop.fetchLogo();

await desktopNavBarFetch.fetchDeskNav();

desktopNavbarSettings.setting();

await mobileNavbarFetch.fetchMobileNav();

mobileNavbarSettings.setting();

