//loading//
//const loading= document.querySelector('#loading');//

//window.addEventListener('load', () => {//
 //   loading.classList.add('loaded');//
//});//


// --- Dark Mode Toggle ---
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = 'LIGHT MODE';
        btn.style.background = '#ffffff';
        btn.style.color = '#000000';
    } else {
        btn.textContent = 'DARK MODE';
        btn.style.background = '#000000';
        btn.style.color = '#ffffff';
    }
});

// --- Scroll Progress Bar ---
const getScrollPercent = () => {
    const scrolled = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    
    // Avoid division by zero if page isn't scrollable
    const totalScrollable = pageHeight - viewHeight;
    const percentage = totalScrollable > 0 ? (scrolled / totalScrollable) * 100 : 0;

    const ldbar = document.querySelector('#ldbar');
    if (ldbar) {
        ldbar.style.width = `${percentage}%`;
        ldbar.textContent = Math.floor(percentage) + '%';
    }
};

window.addEventListener('scroll', getScrollPercent);

// --- Header & Special Section Entrance ---
const loadingmenu = document.querySelector("#top");
loadingmenu.animate({ opacity: [0, 1] }, 2000);

const pickup = document.querySelector("#special");
pickup.animate({
    opacity: [0, 1],
    translate: ['0 50px', '0 0']
}, {
    duration: 2000,
    easing: 'ease-out'
});

// --- Comments Title Color Animation ---
const commentsId = document.querySelector("#commentsId");
commentsId.animate([
    { color: 'rgba(74, 100, 232, 0.4)' },
    { color: 'rgb(0, 0, 0)' },
    { color: 'rgb(251, 52, 52)' },
    { color: '#0bd' }
], {
    duration: 8000,
    direction: 'alternate', // Fixed from 'directions'
    iterations: Infinity,
});

// --- Footer Appearance ---
const footerInfo = document.querySelector("#footer_company");
footerInfo.animate([
    { color: 'transparent', backgroundPosition: '100% 0' },
    { color: '#ffffff', backgroundPosition: '0 0' } // Fixed comma typo
], {
    duration: 2000,
    easing: 'ease'
});

// --- Item "Buy" Button Morphing ---
// Using querySelectorAll to handle all buttons regardless of count
const buyButtons = document.querySelectorAll('[id^="itemBuy"]');
buyButtons.forEach((button) => {
    button.animate([
        { borderRadius: '20% 50% 50% 70%/50% 50% 70% 50%' },
        { borderRadius: '50% 20% 50% 50%/40% 40% 60% 60%' },
        { borderRadius: '50% 40% 20% 40%/40% 50% 50% 80%' },
        { borderRadius: '50% 50% 50% 20%/40% 40% 60% 60%' }
    ], {
        duration: 8000,
        direction: 'alternate',
        iterations: Infinity,
    });
});

// --- Image Blur-In Effect ---
const itemImages = document.querySelectorAll('.img-item');
itemImages.forEach((img, i) => {
    img.animate([
        { filter: 'blur(20px)', opacity: 0 },
        { filter: 'blur(0)', opacity: 1 }
    ], {
        duration: 600,
        delay: i * 300,
        fill: 'forwards',
        easing: 'ease-in-out'
    });
});