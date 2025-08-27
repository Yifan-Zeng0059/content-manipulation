//database: headingContent, bodyText, imgUrl and imgAlt
let database = {
    splitComplimentary: {
        headingContent: "Split Complimentary",
        imgUrl: "img/split-complimentary.jpg",
        imgAlt: "split-complimentary",
        bodyText: "A split-complementary color scheme uses one base color and two adjacent colors to its complement. This creates bold contrast while maintaining harmony.Perfect for designs needing energy without the tension of direct complements."
    },
    analogous: {
        headingContent: "Analogous",
        imgUrl: "img/analogous.jpg",
        imgAlt: "analogous",
        bodyText: "Analogous colors sit side-by-side on the color wheel. They create serene, cohesive visuals. Ideal for nature-themed designs or calming interfaces."
    },
    complimentary: {
        headingContent: "Complimentary",
        imgUrl: "img/complimentary.jpg",
        imgAlt: "complimentary",
        bodyText: "Complementary colors are opposites on the color wheel. They maximize contrast and vibrancy. Great for call-to-action buttons or attention-grabbing graphics."
    }
}

let content = document.querySelector(".content");
let buttons = document.querySelectorAll(".controls button");

//load initial content
content.innerHTML =
    `<h2>${database.splitComplimentary.headingContent}</h2>
    <div class="container">
    <img src="${database.splitComplimentary.imgUrl}" alt="${database.splitComplimentary.imgAlt}">
    <p>${database.splitComplimentary.bodyText}</p>
    </div>`;

//target EventObject
function handleClick(eventObject) {
    for (let button of buttons) {
        if (button.hasAttribute('id')) {
            button.removeAttribute('id');
        }
    }

    let currentClick = eventObject.target;
    let key = currentClick.dataset.id;

    content.innerHTML = `<h2>${database[key].headingContent}</h2>
    <div class="container">
    <img src="${database[key].imgUrl}" alt="${database[key].imgAlt}">
        <p>${database[key].bodyText}</p>
        </div>`;

    currentClick.id = 'active-button';
}

// register event-target-object for click event
for (let button of buttons) {
    button.addEventListener('click', handleClick);
}

// preload images
function preloader() {
    const imagesList = [
        "img/split-complimentary.jpg",
        "img/analogous.jpg",
        "img/complimentary.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

splitComplimentary.addEventListener("load", preloader);
