// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.children = [];
//     }

//     addChild(node) {
//         this.children.push(node);
//     }
// }

// class GiftMatching {
//     constructor() {
//         // Initialize tree structure with more categories
//         this.root = new TreeNode("root");

//         // Main categories
//         const forHim = new TreeNode("for him");
//         const forHer = new TreeNode("for her");
//         this.root.addChild(forHim);
//         this.root.addChild(forHer);

//         // For Him subcategories
//         const tech = new TreeNode("tech");
//         const sports = new TreeNode("sports");
//         const fashion = new TreeNode("fashion");
//         const books = new TreeNode("books");
//         forHim.addChild(tech);
//         forHim.addChild(sports);
//         forHim.addChild(fashion);
//         forHim.addChild(books);

//         // Tech subcategories
//         const smartwatch = new TreeNode("smartwatch");
//         const laptop = new TreeNode("laptop");
//         const headphones = new TreeNode("headphones");
//         tech.addChild(smartwatch);
//         tech.addChild(laptop);
//         tech.addChild(headphones);

//         // Add more items under "laptop"
//         const gamingLaptop = new TreeNode("gaming laptop");
//         const ultrabook = new TreeNode("ultrabook");
//         const macbook = new TreeNode("macbook");
//         laptop.addChild(gamingLaptop);
//         laptop.addChild(ultrabook);
//         laptop.addChild(macbook);

//         // Sports subcategories
//         const football = new TreeNode("football");
//         const basketball = new TreeNode("basketball");
//         const tennis = new TreeNode("tennis");
//         sports.addChild(football);
//         sports.addChild(basketball);
//         sports.addChild(tennis);

//         // Fashion subcategories
//         const shoes = new TreeNode("shoes");
//         const jacket = new TreeNode("jacket");
//         const watch = new TreeNode("watch");
//         fashion.addChild(shoes);
//         fashion.addChild(jacket);
//         fashion.addChild(watch);

//         // Books subcategories
//         const fiction = new TreeNode("fiction");
//         const nonFiction = new TreeNode("non-fiction");
//         const biography = new TreeNode("biography");
//         books.addChild(fiction);
//         books.addChild(nonFiction);
//         books.addChild(biography);

//         // For Her subcategories
//         const beauty = new TreeNode("beauty");
//         const fashionHer = new TreeNode("fashion");
//         const techHer = new TreeNode("tech");
//         forHer.addChild(beauty);
//         forHer.addChild(fashionHer);
//         forHer.addChild(techHer);

//         // Beauty subcategories
//         const skincare = new TreeNode("skincare");
//         const makeup = new TreeNode("makeup");
//         const perfume = new TreeNode("perfume");
//         beauty.addChild(skincare);
//         beauty.addChild(makeup);
//         beauty.addChild(perfume);

//         // Fashion for Her subcategories
//         const dresses = new TreeNode("dresses");
//         const shoesHer = new TreeNode("shoes");
//         fashionHer.addChild(dresses);
//         fashionHer.addChild(shoesHer);

//         // Tech for Her subcategories
//         const tablet = new TreeNode("tablet");
//         const phone = new TreeNode("phone");
//         const smartwatchHer = new TreeNode("smartwatch");
//         techHer.addChild(tablet);
//         techHer.addChild(phone);
//         techHer.addChild(smartwatchHer);

//         // For Kids subcategories
//         const toys = new TreeNode("toys");
//         const clothesKids = new TreeNode("clothes");
//         const booksKids = new TreeNode("books");
//         forKids.addChild(toys);
//         forKids.addChild(clothesKids);
//         forKids.addChild(booksKids);

//         // Toys subcategories
//         const actionFigures = new TreeNode("action figures");
//         const dolls = new TreeNode("dolls");
//         const legos = new TreeNode("legos");
//         toys.addChild(actionFigures);
//         toys.addChild(dolls);
//         toys.addChild(legos);

//         // Clothes for Kids
//         const jacketsKids = new TreeNode("jackets");
//         const pantsKids = new TreeNode("pants");
//         clothesKids.addChild(jacketsKids);
//         clothesKids.addChild(pantsKids);

//         // Books for Kids
//         const pictureBooks = new TreeNode("picture books");
//         const activityBooks = new TreeNode("activity books");
//         booksKids.addChild(pictureBooks);
//         booksKids.addChild(activityBooks);

//         this.currentNode = this.root;
//     }

//     displayChoices() {
//         /** Display the current category and its options. */
//         const categoryContainer = document.getElementById("current-category");
//         const choicesContainer = document.getElementById("choices-container");

//         categoryContainer.innerHTML = `<h2>Current category: ${this.currentNode.value}</h2>`;
//         choicesContainer.innerHTML = '';

//         // Only display options if there are children
//         if (this.currentNode.children.length > 0) {
//             this.currentNode.children.forEach((child, index) => {
//                 const button = document.createElement('button');
//                 button.textContent = child.value;
//                 button.onclick = () => this.chooseCategory(child);
//                 choicesContainer.appendChild(button);
//             });
//         } else {
//             // If no more children, display a message
//             const message = document.createElement('p');
//             message.textContent = "No more options available in this category.";
//             choicesContainer.appendChild(message);
//         }
//     }

//     chooseCategory(node) {
//         this.currentNode = node;
//         this.displayChoices();
//     }

//     start() {
//         this.displayChoices();
//     }
// }

// const giftMatching = new GiftMatching();
// giftMatching.start();

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.url = "";  // URL for official product page
    }

    addChild(node) {
        this.children.push(node);
    }

    setUrl(url) {
        this.url = url;
    }
}

class GiftMatching {
    constructor() {
        // initialise tree structure with categories, sub categories, items 
        //work in progress (mechanism works but need to add + refine options)
        this.root = new TreeNode("root");

        const forHim = new TreeNode("for him");
        const forHer = new TreeNode("for her");
        this.root.addChild(forHim);
        this.root.addChild(forHer);

        const tech = new TreeNode("tech");
        const fashion = new TreeNode("fashion");
        const sports = new TreeNode("sports");
        forHim.addChild(tech);
        forHim.addChild(fashion);
        forHim.addChild(sports);

        const beauty = new TreeNode("beauty");
        const fashionHer = new TreeNode("fashion");
        const techHer = new TreeNode("tech");
        forHer.addChild(beauty);
        forHer.addChild(fashionHer);
        forHer.addChild(techHer);

        const smartphones = new TreeNode("smartphones");
        const laptops = new TreeNode("laptops");
        const airpods = new TreeNode("airpods");
        tech.addChild(smartphones);
        tech.addChild(laptops);
        tech.addChild(airpods);

        const iphone = new TreeNode("iPhone 14");
        const samsung = new TreeNode("Samsung Galaxy S21");
        smartphones.addChild(iphone);
        smartphones.addChild(samsung);
        iphone.setUrl("https://www.apple.com/iphone-14/");
        samsung.setUrl("https://www.samsung.com/galaxy-s21/");

        const gamingLaptop = new TreeNode("gaming laptop");
        const ultrabook = new TreeNode("ultrabook");
        laptops.addChild(gamingLaptop);
        laptops.addChild(ultrabook);
        gamingLaptop.setUrl("https://www.dell.com/gaming-laptops");
        ultrabook.setUrl("https://www.lenovo.com/ultrabooks");

        airpods.setUrl("https://www.apple.com/airpods");

        this.currentCategory = null;
        this.currentOptionIndex = 0;
        this.optionHistory = []; 
        this.displayingUrl = false;

        this.categoryContainer = document.getElementById("current-category");
        this.choicesContainer = document.getElementById("choices-container");
    }

    displayChoice() {
        const currentOption = this.currentCategory.children[this.currentOptionIndex];
        if (!currentOption) {
            this.categoryContainer.innerHTML = `<h2>No more options available in this category.</h2>`;
            return;
        }

        if (!this.displayingUrl) {
            this.categoryContainer.innerHTML = `<h2>Current category: ${this.currentCategory.value}</h2>`;
            this.choicesContainer.innerHTML = `
                <p>Do you like this item? ${currentOption.value}</p>
                <button id="swipe-left">Swipe Left (Yes)</button>
                <button id="swipe-right">Swipe Right (No)</button>
            `;

            document.getElementById("swipe-left").onclick = () => this.swipeLeft(currentOption);
            document.getElementById("swipe-right").onclick = () => this.swipeRight();
        } else {
            // if user is done and chose an item, show  URL
            this.categoryContainer.innerHTML = `<h2>Official Product Page:</h2>`;
            this.choicesContainer.innerHTML = `
                <a href="${currentOption.url}" target="_blank">Click here to view product</a>
                <button onclick="giftMatching.goBack()">Go Back to Categories</button>
            `;
        }
    }

    swipeLeft(option) {
        if (option.children.length > 0) {
            this.optionHistory.push({ category: this.currentCategory, index: this.currentOptionIndex });
            this.currentCategory = option;
            this.currentOptionIndex = 0; // Reset index to show first child
        } else {
            // if no more subcategories, show the official product page
            this.displayingUrl = true;
        }
        this.displayChoice();
    }

    swipeRight() {
        /** User swiped right (No) - Go to the next option in the same category */
        if (this.currentOptionIndex < this.currentCategory.children.length - 1) {
            this.currentOptionIndex++;
        } else {
            // If no more options in the category, go back to the root category or end
            if (this.optionHistory.length > 0) {
                const lastState = this.optionHistory.pop();
                this.currentCategory = lastState.category;
                this.currentOptionIndex = lastState.index + 1; // Move to next option
            } else {
                this.categoryContainer.innerHTML = "<h2>No more options available!</h2>";
                return;
            }
        }
        this.displayChoice();
    }

    goBack() {
        /** Go back to the previous category */
        this.displayingUrl = false;
        this.currentCategory = this.root;
        this.currentOptionIndex = 0;
        this.displayChoice();
    }

    start() {
        // Step 1: Allow the user to select "For Him" or "For Her"
        this.categoryContainer.innerHTML = `
            <h2>Select a category</h2>
            <button onclick="giftMatching.selectCategory('for him')">For Him</button>
            <button onclick="giftMatching.selectCategory('for her')">For Her</button>
        `;
        this.choicesContainer.innerHTML = '';
    }

    selectCategory(category) {
        // Step 2: After selecting "For Him" or "For Her," display subcategories
        const selectedCategory = this.root.children.find(cat => cat.value === category);
        this.currentCategory = selectedCategory;
        this.categoryContainer.innerHTML = `<h2>Current category: ${category}</h2>`;
        this.choicesContainer.innerHTML = '';

        // Show subcategories
        selectedCategory.children.forEach((child, index) => {
            const button = document.createElement("button");
            button.innerHTML = child.value;
            button.onclick = () => this.selectSubcategory(child);
            this.choicesContainer.appendChild(button);
        });
    }

    selectSubcategory(subcategory) {
        // Step 3: Display options for the selected subcategory
        this.currentCategory = subcategory;
        this.currentOptionIndex = 0;
        this.displayChoice();
    }
}

// Initialize and start the gift-matching process
const giftMatching = new GiftMatching();
giftMatching.start();
