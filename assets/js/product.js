
/* //////////////////////////////////////

    1. Product Thumbnail Slider

////////////////////////////////////// */


/**  
    1. Product Thumbnail Slider
*/

    // const productItem = document.querySelectorAll('.product-item');

    // productItem.forEach((item, index) => {
    //     const slider = item.querySelectorAll('.product-thumb .product_image_link img');

    //     if (slider.length <= 1) {
    //         return; // No need for slider if only one image
    //     } else {

    //         const uniqueClass = `${Math.random().toString(36).substr(2, 9)}`;
    //         item.querySelector('.product-thumb').setAttribute('id', (item.querySelector('.product-thumb').getAttribute('id') || '') + 'swiper-thumb-' + uniqueClass);

    //         let swiperWrapper = document.createElement('div');
    //         swiperWrapper.className = 'swiper-wrapper';

    //         slider.forEach(img => {
    //             let swiperSlide = document.createElement('div');
    //             swiperSlide.className = 'swiper-slide';
    //             swiperSlide.appendChild(img.cloneNode(true));
    //             swiperWrapper.appendChild(swiperSlide);

    //             img.remove(); // Remove original image from DOM
    //         });

    //         // Append the constructed swiper wrapper
    //         item.querySelector('.product_image_link').appendChild(swiperWrapper);

    //         // Create navigation buttons
    //         const prevBtn = document.createElement('div');
    //         prevBtn.className = 'swiper-prev-' + uniqueClass;
    //         const nextBtn = document.createElement('div');
    //         nextBtn.className = 'swiper-next-' + uniqueClass;

    //         // append navigation buttons to the product-thumb element (not to an ancestor)
    //         const thumbEl = item.querySelector('.product-thumb');
    //         if (thumbEl) {
    //             thumbEl.appendChild(prevBtn);
    //             thumbEl.appendChild(nextBtn);
    //         }

    //         var swiper = new Swiper(`#swiper-thumb-${uniqueClass}`, {
    //             loop: true,
    //             autoplay: {
    //                 delay: 2500,
    //                 disableOnInteraction: false,
    //             },
    //             pagination: {
    //                 el: `.swiper-pagination-${uniqueClass}`,
    //                 clickable: true,
    //             },
    //             navigation: {
    //                 nextEl: `.swiper-next-${uniqueClass}`,
    //                 prevEl: `.swiper-prev-${uniqueClass}`,
    //             },
    //         });
    //     }

    // });

