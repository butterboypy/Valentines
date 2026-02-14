// 1. Define your series of GIFs here
const noGifs = ['glorp-spin.gif','maxwell-spin.gif', 'oia-uia.gif', 'hit-bubu.webp','hasbulla-hasbik.gif','gorilla-beating-chest.gif']; 
const partyGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif', 'alien-cat-gleepy.gif','mochi-peachcat-cute-cat.gif','cute-happy.gif','happy-dance-happy (1).gif','pengu-pudgy.gif']; 
const noTexts = ['No', 'You sure?', 'Pleease?', 'Think again!', 'Last chance!'];

let noCount = 0;

// --- INITIAL MESSAGE LOGIC ---
function initValentine() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const imageContainer = document.getElementById('image-container');

    // Hide things initially for the long message
    optionsElement.style.display = 'none';
    imageContainer.style.display = 'none';

    // Set the long message
    questionElement.innerText = "TAKE A SCREENSHOT TO READ IT LATER\n\n" +
        "Happy Valentine’s Day ❤️\n\n" +
        "Two years with you and I’m still wondering how you manage to be this cute, this smart, and this dangerously amazing all at once. " +
        "You don’t just steal my heart—you run it like a pro 😏\n" +
        "You’re confident, beautiful, and way too awesome to be real… and somehow you chose me. " +
        "I’m insanely proud to call you mine, and yes, I’m very, very in love with you (˵ •̀ ᴗ - ˵ ) ✧ ❤️";

    // Wait 5 seconds, then show the Valentine Question
    setTimeout(() => {
        questionElement.innerText = "Will you be my valentine Janhvi?";
        optionsElement.style.display = 'block';
        imageContainer.style.display = 'block';
        updateImage('maxwell-spin.gif');
    }, 5000); 
}

function selectOption(option) {
    if (option === 'yes') {
        const music = document.getElementById('valentine-music');
        music.play().catch(e => console.log("Playback blocked until user interaction."));

        updateImage('zavarius-zavarius-teddy.gif');
        document.getElementById('question').innerText = "Yayyyyyyyyyyyyy!!!!!! Let's go Babyyyy!!!! ❤️";
        document.getElementById('options').style.display = 'none';

        setTimeout(function() {
            updateImage('cheering-baby-yeah.gif');
        }, 1500);

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

        const imageContainer = document.getElementById('image-container');
        imageContainer.style.display = 'block'; 
        document.getElementById('question').style.display = 'block';

        // --- THE FINAL TIMELINE ---
        document.getElementById('question').innerText = "I love you Janhvi! ❤️";
        updateImage('love-cute.gif'); 

        setTimeout(() => {
            document.getElementById('question').innerText = "Wait!";
            updateImage('doggy-cute.gif'); 
        }, 2000); 

        setTimeout(() => {
            document.getElementById('question').innerText = "I got something for you (˵ •̀ ᴗ - ˵ ) ✧";
            updateImage('kutya.gif'); 
        }, 5500);

        setTimeout(() => {
            document.getElementById('question').innerText = "It is on your way...";
            updateImage('presents-gifts.gif'); 
        }, 8500);

        setTimeout(() => {
            document.getElementById('question').innerText = "Wait patiently hehe 🎁";
            updateImage('cute-cat.gif'); 
        }, 11500);

        setTimeout(() => {
            document.getElementById('question').innerText = "u r the best baby. Mwaahhh !!! ❤️✨";
            updateImage('cat-cat-meme.gif'); 
        }, 15000);

        setTimeout(() => {
            document.getElementById('question').innerText = "Okay Bui-bui Bund Paari, that ass deserves a raise 😁🧚‍♀️";
            updateImage('apple-apple-cat.gif'); 
        }, 19000);

    }, 15000);
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
    setTimeout(() => { if(img.parentNode) img.remove(); }, 3000);
}

function updateImage(imageSrc) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; 
    const img = new Image();
    img.src = imageSrc;
    img.alt = 'Valentine GIF';
    img.onload = function() {
        imageContainer.appendChild(img);
    };
}

// START THE FLOW
initValentine();