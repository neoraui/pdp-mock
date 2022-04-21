$(document).foundation();


const product = {
    name: "Product Name (H1)",
    images: [ /*images go in this array*/ ],
    labels: [ /*labels go in this array*/ ],
    rating: {
        icon: '<i class="fa-solid fa-star"></i>',
        stars: 4,
        reviews: 231,
    },
    price: {
        oneTime: 100.00,
        smartShop: 80.00
    },
    description: {
        short: "",
        long: "",
    },
    upsell: {
        settings: {
            showUpsell: true,
            showCTAs: true,
            showImages: true,
            showDescriptions: true,
            showPrice: false
        },
        products: [
            {
                name: "Product Name",
                labels: [/*images go in this array*/],
                description: "",
                cta: {
                    redirectUrl: "#",
                    ctaTitle: "View"
                },
                price: {
                    oneTime: 100.00,
                    smartShop: 80.00
                }
            },
            {
                name: "Product Name",
                labels: [],
                description: "",
                cta: {
                    redirectUrl: "#",
                    ctaTitle: "View"
                },
                price: {
                    oneTime: 100.00,
                    smartShop: 80.00
                }
            },
            {
                name: "Product Name",
                labels: [],
                description: "",
                cta: {
                    redirectUrl: "#",
                    ctaTitle: "View"
                },
                price: {
                    oneTime: 100.00,
                    smartShop: 80.00
                }
            },
            {
                name: "Product Name",
                labels: [],
                description: "",
                cta: {
                    redirectUrl: "#",
                    ctaTitle: "View"
                },
                price: {
                    oneTime: 100.00,
                    smartShop: 80.00
                }
            },
        ]
    }
}

// populate proruct names
const productNames = document.querySelectorAll('.product-name');
productNames.forEach(name => {
    name.textContent = product.name;
});

// populate star ratings/reviews
const starRatings = document.querySelectorAll('.star-rating');
starRatings.forEach(rating => {
    for(let i = 0; i < 5; i ++){
        const li = document.createElement('li');
        li.classList.add('star');
        li.innerHTML = product.rating.icon;
        if (i < product.rating.stars) {
            li.classList.add('rated');
        }
        rating.appendChild(li);
    }
});


// popular review count
const reviewCounts = document.querySelectorAll('.review-count');
reviewCounts.forEach(count => {
    count.textContent = `(${product.rating.reviews} reviews)`
});

// overlay / modal 
const moreInfoIcon = document.querySelectorAll('.order-info');
moreInfoIcon.forEach(icon => {
    icon.addEventListener('click', e => {
        if (e.target === icon) {
            overlay.toggle();
        }
    })
});

const closeOverlay = document.querySelector('.overlay .modal i');
closeOverlay.addEventListener('click', () => {
    overlay.toggle();
})


const overlay = {
    overlay: document.querySelector('.overlay'),
    mainUI: [
        document.querySelector('header'),
        document.querySelector('main'),
        document.querySelector('footer')
    ],
    toggle: () => {
        overlay.overlay.classList.toggle('show');
        overlay.mainUI.forEach(el => {
            el.classList.toggle("blur");
        })
    }
}
