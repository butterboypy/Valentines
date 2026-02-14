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
const noGifs = ['maxwell-spin.gif', 'cat.gif', 'oia-uia.gif', 'oia-uia.gif']; 
const yesGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif']; 
const partyGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif']; 
const noTexts = ['No', 'You sure?', 'Pleease?', 'Think again!', 'Last chance!'];

let noCount = 0;

function selectOption(option) {
    if (option === 'yes') {
        // 1. Show the first GIF immediately
        updateImage('zavarius-zavarius-teddy.gif');
        
        // 2. Update text and hide buttons
        document.getElementById('question').innerText = "Yayyyyyyyyyyyyy!!!!!! Let's go Babyyyy!!!! ❤️";
        document.getElementById('options').style.display = 'none';

        // 3. Swap to the second GIF after 1.5 seconds
        setTimeout(function() {
            updateImage('cheering-baby-yeah.gif');
        }, 1500);

        // 4. Start the full party explosion after 3 seconds total
        setTimeout(function() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('image-container').style.display = 'none';
            startParty();
        }, 3000);

    } else if (option === 'no') {
        noCount++;
        const noButton = document.getElementById('no-button');
        noButton.innerText = noTexts[noCount % noTexts.length];

        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        const newSize = parseFloat(currentFontSize) * 1.5; 
        yesButton.style.fontSize = newSize + 'px';

        updateImage(noGifs[noCount % noGifs.length]);
    }
}

function startParty() {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let colorIndex = 0;

    for (let i = 0; i < 20; i++) {
        createFloatingGif();
    }

    const colorInterval = setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 200);

    const partyInterval = setInterval(() => {
        createFloatingGif();
    }, 150); 

    setTimeout(() => {
        clearInterval(colorInterval);
        clearInterval(partyInterval);
        document.body.style.backgroundColor = '#FADADD'; 
        
        const icons = document.querySelectorAll('.party-icon');
        icons.forEach(icon => icon.remove());

        // --- NEW LOGIC FOR FINAL GIF ---
        document.getElementById('question').style.display = 'block';
        document.getElementById('question').innerText = "I love you Janhvi! ❤️";
        
        // Make the image container visible again and set the final GIF
        const imageContainer = document.getElementById('image-container');
        imageContainer.style.display = 'block'; 
        updateImage('love-cute.gif'); // Replace with your actual filename
    }, 10000);
}

function createFloatingGif() {
    const img = new Image();
    img.src = partyGifs[Math.floor(Math.random() * partyGifs.length)];
    img.className = 'party-icon';
    
    img.style.left = Math.random() * 90 + "vw"; 
    img.style.top = Math.random() * 90 + "vh";
    
    const size = Math.random() * 150 + 100; 
    img.style.width = size + "px";

    document.body.appendChild(img);

    setTimeout(() => { 
        if(img.parentNode) {
            img.remove(); 
        }
    }, 3000);
}

function updateImage(imageSrc) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; 
    const img = new Image();
    img.src = imageSrc;
    img.alt = 'Cat GIF';
    img.onload = function() {
        imageContainer.appendChild(img);
    };
}

// Initial image load - This keeps your "Will you be my valentine" GIF as Maxwell
updateImage('maxwell-spin.gif');