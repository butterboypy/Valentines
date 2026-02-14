// 1. Define your series of GIFs here
const noGifs = ['glorp-spin.gif','maxwell-spin.gif', 'oia-uia.gif', 'hit-bubu.webp','hasbulla-hasbik.gif','gorilla-beating-chest.gif']; 
const yesGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif']; 
const partyGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif', 'alien-cat-gleepy.gif','mochi-peachcat-cute-cat.gif','cute-happy.gif','happy-dance-happy (1).gif','pengu-pudgy.gif']; 
const noTexts = ['No', 'You sure?', 'Pleease?', 'Think again!', 'Last chance!'];

let noCount = 0;

function selectOption(option) {
    if (option === 'yes') {
        // 1. Show the first transition GIF immediately
        updateImage('zavarius-zavarius-teddy.gif');
        
        // 2. Update text and hide buttons
        document.getElementById('question').innerText = "Yayyyyyyyyyyyyy!!!!!! Let's go Babyyyy!!!! ❤️";
        document.getElementById('options').style.display = 'none';

        // 3. Swap to the second transition GIF after 1.5 seconds
        setTimeout(function() {
            updateImage('cheering-baby-yeah.gif');
        }, 1500);

        // 4. Start the full party explosion after 4 seconds total
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

    // THE FINAL SEQUENCE (Starts after 15 seconds of party)
    setTimeout(() => {
        clearInterval(colorInterval);
        clearInterval(partyInterval);
        document.body.style.backgroundColor = '#FADADD'; 
        
        const icons = document.querySelectorAll('.party-icon');
        icons.forEach(icon => icon.remove());

        const imageContainer = document.getElementById('image-container');
        imageContainer.style.display = 'block'; 
        document.getElementById('question').style.display = 'block';

        // --- THE TIMELINE (Linear/Non-overlapping) ---

        // 0s: I Love You starts
        document.getElementById('question').innerText = "I love you Janhvi! ❤️";
        updateImage('love-cute.gif'); 

        // 4s: "Wait!" appears
        setTimeout(() => {
            document.getElementById('question').innerText = "Wait!";
            updateImage('doggy-cute.gif'); 
        }, 4000); 

        // 5.5s: "I got something..." (4s + 1.5s)
        setTimeout(() => {
            document.getElementById('question').innerText = "I got something for you (˵ •̀ ᴗ - ˵ ) ✧";
            updateImage('kutya.gif'); 
        }, 5500);

        // 8.5s: "It is on your way..." (5.5s + 3s)
        setTimeout(() => {
            document.getElementById('question').innerText = "It is on your way...";
            updateImage('presents-gifts.gif'); 
        }, 8500);

        // 11.5s: "Wait patiently" (8.5s + 3s)
        setTimeout(() => {
            document.getElementById('question').innerText = "Wait patiently hehe 🎁";
            updateImage('cute-cat.gif'); 
        }, 11500);

        // 15s: "You are the best" (11.5s + 3.5s)
        setTimeout(() => {
            document.getElementById('question').innerText = "u r the best baby. Mwaahhh !!! ❤️✨";
            updateImage('cat-cat-meme.gif'); 
        }, 15000);

        // 19s: Final Message (15s + 4s)
        setTimeout(() => {
            document.getElementById('question').innerText = "Okay Bui-bui Bund Paari, that ass deserves a raise 😁🧚‍♀️";
            updateImage('apple-apple-cat.gif'); 
        }, 19000);

    }, 15000); // 15 seconds of chaos before the sentimental ending
}

function createFloatingGif() {
    const img = new Image();
    img.src = partyGifs[Math.floor(Math.random() * partyGifs.length)];
    img.className = 'party-icon';
    
    const size = Math.random() * 100 + 100; 
    img.style.width = size + "px";

    const randomLeft = Math.floor(Math.random() * 80) + 5; 
    const randomTop = Math.floor(Math.random() * 80) + 5;  
    
    img.style.left = randomLeft + "vw"; 
    img.style.top = randomTop + "vh";

    document.body.appendChild(img);

    setTimeout(() => { 
        if(img.parentNode) {
            img.remove(); 
        }
    }, 3000);
}

// CRITICAL FIX: The function that clears the container before adding a new image
function updateImage(imageSrc) {
    const imageContainer = document.getElementById('image-container');
    
    // Clear the container completely to prevent overlapping/double images
    imageContainer.innerHTML = ''; 
    
    const img = new Image();
    img.src = imageSrc;
    img.alt = 'Valentine GIF';
    
    // Wait for the image to load before showing it to avoid blank flashes
    img.onload = function() {
        imageContainer.appendChild(img);
    };
}

// Initial image load
updateImage('maxwell-spin.gif');