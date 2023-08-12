import './style.css';
import $ from 'jquery';
import 'animate.css';
import darkMode from "./js/module/setting/darkMode.js";
import logoTop from "./js/module/header/logoTop.js";
import desktopNavBarFetch from "./js/module/header/desktopNavbarFetch.js";
import desktopNavbarSettings from "./js/module/header/desktopNavbarSettings.js";
import mobileNavbarFetch from './js/module/header/mobileNavbarFetch';
import mobileNavbarSettings from "./js/module/header/mobileNavbarSettings.js";
import blueIntroFetch from './js/module/posts/blueIntroFetch.js';
import paymentGateway from './js/module/posts/paymentGateway.js';
import postsFade from './js/module/setting/postsFade.js';
import zarinLink from './js/module/posts/zarin-link.js';
import zarinCard from './js/module/posts/zarin-card.js';
import payOut from './js/module/posts/pay-out.js';
import zarinPlus from './js/module/posts/zarin-plus.js';
import readMore from './js/module/posts/read-more.js';
import joinBox from './js/module/posts/join-box.js';

try {
    
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
    
    await blueIntroFetch.fetchBlueIntro();
    
    await paymentGateway.fetchPgPost();

    await zarinLink.fetchZlPost();

    await zarinCard.fetchZcPost();

    await payOut.fetchPoPost();

    await zarinPlus.fetchZpPost();
    
    postsFade.fadePosts();

    await readMore.fetchRMPost();

    await joinBox.fetchJbPost();

} catch (error) {

    throw error;

}