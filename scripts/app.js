// 1) fetch a cat image
async function getCatImage() {
    let catImage = fetch("https://api.thecatapi.com/v1/images/search");
    return catImage
}

// 2) display cat image
let catImage = getCatImage();

catImage
    .then(catObject => catObject.json())
    .then(catArray => catArray[0].url)
    .then(catURL => {
        const catImageElement = document.createElement("img");
        catImageElement.src = catURL;
        catImageElement.className = "cat-image";
        const imageDiv = document.querySelector(".cat-img-container");
        imageDiv.appendChild(catImageElement);
    })
    .catch(e => console.log(e))

// 3) fetch a cat fact
async function getCatFact() {
    let catFact = fetch("https://cat-fact.herokuapp.com/facts");
    return catFact;
}

// 4) display a cat fact
let catFact = getCatFact();
/*
catFact
    .then(catObject => catObject.json())
    .then(catData => catData.all)
    .then(catArray => {
        const element = Math.floor(Math.random() * catArray.length);
        return catArray[element];
    })
    .then(catFact => catFact.text)
    .then(factText => {
        const factParagraph = document.createElement("p");
        const textDiv = document.querySelector(".cat-text");
        factParagraph.innerHTML = factText;
        factParagraph.className = "fact-paragraph";
        textDiv.appendChild(factParagraph);
    })
    .catch(err => console.log(err))
*/

catFact
    .then(catObject => catObject.json())
    .then(catData => {
        const element = Math.floor(Math.random() * catData.length)
        const factText = catData[element].text
        const factBox = document.createElement("p");
        const textDiv = document.querySelector(".cat-text");
        factBox.innerHTML = factText;
        factBox.className = "fact-paragraph";
        textDiv.appendChild(factBox)
    })
    .catch(err => console.log(err))