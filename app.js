const form = document.querySelector('.meme-form');
const image = document.querySelector('input[name="image"]');
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const results = document.querySelector('.results');
//const removeButtons = document.querySelectorAll('button.remove');
const presetBtn1 = document.querySelector('.preset-1');
const presetBtn2 = document.querySelector('.preset-2');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(image.value, topText.value, bottomText.value);
    const newMeme = generateMeme(image.value, topText.value, bottomText.value);
    results.appendChild(newMeme);
    event.target.reset();
});

results.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove')) {
        // Grab parent element (the main meme div)
        const parent = e.target.parentElement.parentElement;

        console.log('Remove is clicked!', e.target.parentElement.parentElement);
        //const index = todoList.indexOf(parent);
        parent.remove();
        //e.target.parentElement.remove();

        // couldve done tagName === 'LI' but needs to be capital, switched this to contain the class for the toggle
    }
});

function generateMeme(img, top, bottom) {
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme', 'col-xl-4', 'col-lg-6', 'mb-4');
    memeDiv.innerHTML =
        '<div class="inner"><button class="btn btn-danger btn-sm remove">X</button><div class="top-text">' +
        top +
        '</div><div class="bottom-text">' +
        bottom +
        '</div> <img class="image" src="' +
        img +
        '" /></div>';

    return memeDiv;
}

function presetFill(img, top, bottom) {
    image.value = img;
    topText.value = top;
    bottomText.value = bottom;
}

presetBtn1.addEventListener('click', function () {
    presetFill(
        'https://imgflip.com/s/meme/Im-The-Captain-Now.jpg',
        'LOOK AT ME',
        'I AM THE CAPTAIN NOW'
    );
});
presetBtn2.addEventListener('click', function () {
    presetFill(
        'https://imgflip.com/s/meme/Spiderman-Peter-Parker.jpg',
        'MY FACE',
        'WHEN IT WORKS'
    );
});

/*
**Requirements**
- The HTML page shows a form with three input options - Top Text, Bottom Text, Image - and a submit button (DONE)
- Users should be able to submit a form on the page to generate a new meme on the page (DONE)
- They should be able to add **multiple memes** to the page by submitting the form multiple times (DONE)
- Users should be able to click on a button to delete/remove a meme from the page
- The form boxes should clear out automatically after the submit is clicked (DONE)
- The form fields need to have validation so they will not submit if a field is missing (DONE - Did we wanna make sure a form has http at start?)
- Be sure to style your meme generator! It should be functional but also look nice
- **Only use vanilla JavaScript: no frameworks/third-party libraries are allowed**
RE: Vanilla JS: I'm not using any Bootstrap JS!
*/
