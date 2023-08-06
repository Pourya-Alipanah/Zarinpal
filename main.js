import './style.css';
import $ from 'jquery';
import darkMode from "./js/module/setting/darkMode.js";
import logoTop from "./js/module/header/logoTop.js";
import desktopNavBarFetch from "./js/module/header/desktopNavbarFetch.js";
import desktopNavbarSettings from "./js/module/header/desktopNavbarSettings.js";
import mobileNavbarSettings from "./js/module/header/mobileNavbarSettings.js";

window.$ = $;
darkMode.setting();

logoTop.fetchLogo();

await desktopNavBarFetch.fetchDeskNav();

desktopNavbarSettings.setting();

mobileNavbarSettings.setting();
