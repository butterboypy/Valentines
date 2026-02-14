// // script.js

// // Function to handle button click events
// function selectOption(option) {
//     // Check which option was clicked
//     if (option === 'yes') {
//         // Flash rainbow colors
//         flashRainbowColors(function() {
//             document.getElementById('question').style.display = 'none'; // Hide the question
//             displayCatHeart(); // Display the cat-heart.gif
//         });
//     } else if (option === 'no') {
//         // Change text on the "No" button to "You sure?"
//         document.getElementById('no-button').innerText = 'You sure?'; 
//         // Increase font size of "Yes" button
//         var yesButton = document.getElementById('yes-button');
//         var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
//         var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
//         yesButton.style.fontSize = newSize + 'px';
//     } else {
//         // If neither "Yes" nor "No" was clicked, show an alert message
//         alert('Invalid option!');
//     }
// }

// // Function to flash rainbow colors and then execute a callback function
// function flashRainbowColors(callback) {
//     var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
//     var i = 0;
//     var interval = setInterval(function() {
//         document.body.style.backgroundColor = colors[i];
//         i = (i + 1) % colors.length;
//     }, 200); // Change color every 200 milliseconds
//     setTimeout(function() {
//         clearInterval(interval);
//         document.body.style.backgroundColor = ''; // Reset background color
//         if (callback) {
//             callback();
//         }
//     }, 2000); // Flash colors for 2 seconds
// }

// // Function to display the cat.gif initially
// function displayCat() {
//     // Get the container where the image will be displayed
//     var imageContainer = document.getElementById('image-container');
//     // Create a new Image element for the cat
//     var catImage = new Image();
//     // Set the source (file path) for the cat image
//     catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
//     // Set alternative text for the image (for accessibility)
//     catImage.alt = 'Cat';
//     // When the cat image is fully loaded, add it to the image container
//     catImage.onload = function() {
//         imageContainer.appendChild(catImage);
//     };
// }

// // Function to display the cat-heart.gif
// function displayCatHeart() {
//     // Clear existing content in the image container
//     document.getElementById('image-container').innerHTML = '';
//     // Get the container where the image will be displayed
//     var imageContainer = document.getElementById('image-container');
//     // Create a new Image element for the cat-heart
//     var catHeartImage = new Image();
//     // Set the source (file path) for the cat-heart image
//     catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
//     // Set alternative text for the image (for accessibility)
//     catHeartImage.alt = 'Cat Heart';
//     // When the cat-heart image is fully loaded, add it to the image container
//     catHeartImage.onload = function() {
//         imageContainer.appendChild(catHeartImage);
//         // Hide the options container
//         document.getElementById('options').style.display = 'none';
//     };
// }

// // Display the cat.gif initially
// displayCat();


///////////////////////////////  NEW CODE BELOW ///////////////////////////////

// script.js

// 1. Define your series of GIFs here
const noGifs = ['maxwell-spin.gif', 'cat.gif', 'oia-uia.gif', 'oia-uia.gif']; // Add your "No" GIFs here
const yesGifs = ['maxwell-spin.gif', 'cat.gif', 'oia-uia.gif'];  // Add your "Yes" GIFs here
const noTexts = ['No', 'You sure?', 'Pleease?', 'Think again!', 'Last chance!'];

let noCount = 0;

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').innerText = "Yay! See you soon Janhvi ji! ❤️";
            displaySeries(yesGifs); // Play the "Yes" series
        });
    } else if (option === 'no') {
        noCount++;
        
        // Update "No" button text based on count
        const noButton = document.getElementById('no-button');
        if (noCount < noTexts.length) {
            noButton.innerText = noTexts[noCount];
        } else {
            noButton.innerText = 'Please?';
        }

        // Increase "Yes" button size (your existing logic)
        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentFontSize) * 1.5; // Adjusted to 1.5x so it doesn't get TOO huge too fast
        yesButton.style.fontSize = newSize + 'px';

        // Cycle through the "No" GIFs
        updateImage(noGifs[noCount % noGifs.length]);
    }
}

// Function to update just the image
function updateImage(imageSrc) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear old image
    const img = new Image();
    img.src = imageSrc;
    img.alt = 'Cat GIF';
    img.onload = function() {
        imageContainer.appendChild(img);
    };
}

// Function to play a series of GIFs for "Yes"
function displaySeries(gifArray) {
    document.getElementById('options').style.display = 'none'; // Hide buttons
    let i = 0;
    updateImage(gifArray[i]);
    
    // Change the "Yes" GIF every 3 seconds
    setInterval(function() {
        i = (i + 1) % gifArray.length;
        updateImage(gifArray[i]);
    }, 3000);
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Initial image
updateImage('cat.gif');