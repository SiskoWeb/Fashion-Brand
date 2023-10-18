

// Function to create a single review element
function createReviewElement(review) {
    const section = document.querySelector(".reviews-list");

    // Create review container
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("item-review");

    // Create star rating
    const starRating = document.createElement("div");
    starRating.classList.add("star-review");
    for (let i = 0; i < review.stars; i++) {
        const starIcon = document.createElement("i");
        starIcon.classList.add("fa-solid", "fa-star");
        starRating.appendChild(starIcon);
    }

    // Create name and checkmark
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-review");
    const name = document.createElement("h3");
    name.innerHTML = `${review.name}<span><i class="fa-solid fa-circle-check"></i></span>`;
    nameContainer.appendChild(name);

    // Create review text
    const reviewText = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = `"${review.text}"`;
    reviewText.appendChild(paragraph);

    // Append elements to the review container
    reviewContainer.appendChild(starRating);
    reviewContainer.appendChild(nameContainer);
    reviewContainer.appendChild(reviewText);

    // Append the review container to the section
    section.appendChild(reviewContainer);
}


// fetch data and Loop through it

fetch("dummydata/reviews.json")
    .then((response) => response.json())
    .then((data) => {
        for (const review of data) {
            createReviewElement(review);
        }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });




/// scrolling logic
const itemList = document.querySelector('.reviews-list');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');

let scrollPosition = 0;

leftButton.addEventListener('click', () => {
    scrollPosition -= 100;
    if (scrollPosition === -2500) return scrollPosition += 100;
    itemList.style.transform = `translateX(${scrollPosition}px)`;
});

rightButton.addEventListener('click', () => {
    scrollPosition += 100;
    if (scrollPosition === 2500) return scrollPosition -= 100;
    itemList.style.transform = `translateX(${scrollPosition}px)`;
});
