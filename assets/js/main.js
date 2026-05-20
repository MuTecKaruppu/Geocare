/* //////////////////////////////////////

    1. Mobile Nav
    2. Swiper Hero
    3. Topbar Ticker + Count-Up
    4. Scroll Reveal

////////////////////////////////////// */


/** 
    1. Mobile Nav 
*/

    const hamburger        = document.getElementById('hamburger');
    const mobileNav        = document.getElementById('mobileNav');
    const mobileNavClose   = document.getElementById('mobileNavClose');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');

    function openMNav() {
        mobileNav.classList.add('open');
        hamburger.classList.add('open');
        document.body.classList.add('nav-open');
    }
    function closeMNav() {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('nav-open');
    }
    hamburger.addEventListener('click', openMNav);
    mobileNavClose.addEventListener('click', closeMNav);
    mobileNavOverlay.addEventListener('click', closeMNav);

    function toggleMSub(id, el) {
        const sub = document.getElementById(id);
        const isOpen = sub.classList.contains('open');
        // close all
        document.querySelectorAll('.mnav-sub').forEach(s => s.classList.remove('open'));
        document.querySelectorAll('.mnav-link svg').forEach(s => s.style.transform = '');
        if (!isOpen) {
            sub.classList.add('open');
            el.querySelector('svg').style.transform = 'rotate(180deg)';
        }
    }


/** 
    2. Swiper Hero 
*/

    const slideDurationTime = 6000;

    const heroSwiper = new Swiper('#heroSwiper', {
        loop: true,
        speed: 900,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: { delay: slideDurationTime, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    // Progress bar

    const progressBar = document.getElementById('swiperProgress');
    function resetProgress() {
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            progressBar.style.transition = `width ${slideDurationTime}ms linear`;
            progressBar.style.width = '100%';
        }));
    }
    resetProgress();
    heroSwiper.on('slideChange', resetProgress);


/** 
    3. Topbar Ticker + Count-Up 
*/

    const tickerStats = [
        { el: document.getElementById('tickerCount0'), target: 5000,  display: '5K',   duration: 2000 },
        { el: document.getElementById('tickerCount1'), target: 600000, display: '600K', duration: 2400 },
    ];
    const tickerItems  = [
        document.getElementById('tickerItem0'),
        document.getElementById('tickerItem1'),
    ];

    let tickerActive = 0;
    let countDone    = [false, false];

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function runCountUp(stat) {
        const start = performance.now();
        function step(now) {
            const elapsed  = now - start;
            const progress = Math.min(elapsed / stat.duration, 1);
            const eased    = easeOutCubic(progress);
            const val      = Math.floor(eased * stat.target);
            
            if (val >= 1000000)      stat.el.textContent = (val / 1000000).toFixed(1).replace('.0','') + 'M';
            else if (val >= 1000)    stat.el.textContent = (val / 1000).toFixed(val % 1000 === 0 ? 0 : 1).replace('.0','') + 'K';
            else                     stat.el.textContent = val;
            if (progress < 1) requestAnimationFrame(step);
            else stat.el.textContent = stat.display;
        }
        requestAnimationFrame(step);
    }

    function showTickerItem(idx) {
        
        const prev = tickerActive;
        tickerItems[prev].classList.remove('active');
        tickerItems[prev].classList.add('exit');
        setTimeout(() => tickerItems[prev].classList.remove('exit'), 500);

        tickerActive = idx;
        tickerItems[idx].classList.add('active');

        if (!countDone[idx]) {
            countDone[idx] = true;
            runCountUp(tickerStats[idx]);
        }
    }

    runCountUp(tickerStats[0]);
    countDone[0] = true;

    setInterval(() => {
        const next = (tickerActive + 1) % tickerItems.length;
        showTickerItem(next);
    }, 3500);


/** 
    4. Scroll Reveal
*/

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObserver.unobserve(entry.target);
        }
    });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => revealObserver.observe(el));

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 40
        ? '0 4px 30px rgba(3,35,59,0.18)'
        : '0 2px 20px rgba(3,35,59,0.12)';
    });

    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        const sb = document.querySelector('.search-bar');
        sb.style.transition = 'transform 0.2s ease';
        searchInput.addEventListener('focus', () => sb.style.transform = 'scale(1.02)');
        searchInput.addEventListener('blur',  () => sb.style.transform = 'scale(1)');
    }

/*
    5. Mega Menu
*/

    function megaMenu() {

        const headerContainer = document.querySelector("header .mt__navbar");
        if (!headerContainer) return;

        const scrollX = window.pageXOffset || window.scrollX || 0;
        const headerLeft = headerContainer.getBoundingClientRect().left + scrollX;

        const megaMenus = document.querySelectorAll("li.has-mega-menu");

        megaMenus.forEach(function (parent) {
            const parentLeft = parent.getBoundingClientRect().left + scrollX;
            const subMenu = parent.querySelector(":scope > ul.sub-menu");
            if (!subMenu) return;

            subMenu.style.left = `${headerLeft - parentLeft}px`;
        });
    }

    megaMenu();
    window.addEventListener("resize", megaMenu);


/** 
    6. Brand Section Swiper
*/

    const brandSwiper = new Swiper('#brandSwiper', {
        loop: true,
        speed: 900,
        effect: 'default',
        slidesPerView: '6',
        spaceBetween: 30,
        autoplay: { delay: 2000, disableOnInteraction: false },
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 15 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
        }
    });
