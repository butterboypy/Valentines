//////////////////////////////  NEW CODE BELOW ///////////////////////////////

// script.js

// 1. Define your series of GIFs here
const noGifs = ['glorp-spin.gif','maxwell-spin.gif', 'cat.gif', 'oia-uia.gif', 'hit-bubu.webp','hasbulla-hasbik.gif','gorilla-beating-chest.gif']; 
const yesGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif']; 
const partyGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif', 'alien-cat-gleepy.gif','mochi-peachcat-cute-cat.gif','cute-happy.gif','happy-dance-happy (1).gif','pengu-pudgy.gif']; 
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
        }, 4000);

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
    }, 15000);
}

function createFloatingGif() {
    const img = new Image();
    img.src = partyGifs[Math.floor(Math.random() * partyGifs.length)];
    img.className = 'party-icon';
    
    // Set size first so we can use it for positioning math
    const size = Math.random() * 100 + 100; // Between 100px and 200px
    img.style.width = size + "px";

    // Position math: (Viewport Width - Image Size) ensures it stays on screen
    // We use a 80% range to keep them more centered and away from the very edges
    const randomLeft = Math.floor(Math.random() * 80) + 5; // 5% to 85%
    const randomTop = Math.floor(Math.random() * 80) + 5;  // 5% to 85%
    
    img.style.left = randomLeft + "vw"; 
    img.style.top = randomTop + "vh";

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