const noGifs = ['glorp-spin.gif','maxwell-spin.gif', 'oia-uia.gif', 'hit-bubu.webp','hasbulla-hasbik.gif','gorilla-beating-chest.gif']; 
const partyGifs = ['maxwell-spin.gif', 'cat-heart.gif', 'oia-uia.gif', 'alien-cat-gleepy.gif', 'mochi-peachcat-cute-cat.gif', 'cute-happy.gif', 'happy-dance-happy (1).gif', 'pengu-pudgy.gif']; 
const noTexts = ['No', 'You sure?', 'Pleease?', 'Think again!', 'Last chance!'];

let noCount = 0;
let colorInterval, partyInterval;

function setFont(type) {
    const q = document.getElementById('question');
    if (type === 'arial') {
        q.classList.remove('script-font');
        q.classList.add('arial-font');
    } else {
        q.classList.remove('arial-font');
        q.classList.add('script-font');
    }
}

function initValentine() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const imageContainer = document.getElementById('image-container');

    optionsElement.style.display = 'none';
    imageContainer.style.display = 'none';

    // 1. Arial for the Long Message
    setFont('arial');
    questionElement.innerText = "TAKE A SCREENSHOT TO READ IT LATER\n\n" +
        "Happy Valentine’s Day ❤️\n\n" +
        "Two years with you and I’m still wondering how you manage to be this cute, this smart, and this dangerously amazing all at once. " +
        "You don’t just steal my heart—you run it like a pro 😏\n\n" +
        "You’re confident, beautiful, and way too awesome to be real… and somehow you chose me. " +
        "I’m insanely proud to call you mine, and yes, I’m very, very in love with you (˵ •̀ ᴗ - ˵ ) ✧ ❤️";

    setTimeout(() => {
        // 2. Script for the Question
        setFont('script');
        questionElement.innerText = "Will you be my valentine Janhvi?";
        optionsElement.style.display = 'flex';
        imageContainer.style.display = 'block';
        updateImage('maxwell-spin.gif'); 
    }, 5000); 
}

function triggerPartyEffects() {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let colorIndex = 0;
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 200);
    partyInterval = setInterval(() => createFloatingGif(), 150);
}

function selectOption(option) {
    if (option === 'yes') {
        const music = document.getElementById('valentine-music');
        music.play().catch(e => console.log("Audio waiting for user click."));

        // 3. Arial for "Let's go baby"
        setFont('arial');
        updateImage('zavarius-zavarius-teddy.gif');
        document.getElementById('question').innerText = "Yayyyyyyyyyyyyy!!!!!! Let's go Babyyyy!!!! ❤️";
        document.getElementById('options').style.display = 'none';

        setTimeout(() => updateImage('cheering-baby-yeah.gif'), 2500);

        setTimeout(() => {
            document.getElementById('question').style.display = 'none';
            document.getElementById('image-container').style.display = 'none';
            startPartySequence();
        }, 5500);

    } else if (option === 'no') {
        noCount++;
        const noButton = document.getElementById('no-button');
        noButton.innerText = noTexts[noCount % noTexts.length];
        const yesButton = document.getElementById('yes-button');
        const currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        yesButton.style.fontSize = (parseFloat(currentFontSize) * 1.4) + 'px';
        updateImage(noGifs[noCount % noGifs.length]);
    }
}

function startPartySequence() {
    triggerPartyEffects();

    setTimeout(() => {
        clearInterval(colorInterval);
        clearInterval(partyInterval);
        document.body.style.backgroundColor = '#FADADD'; 
        document.querySelectorAll('.party-icon').forEach(icon => icon.remove());
        document.getElementById('image-container').style.display = 'block'; 
        document.getElementById('question').style.display = 'block';

        // 4. Script for I Love You
        setFont('script');
        document.getElementById('question').innerText = "I love you Janhvi! ❤️";
        updateImage('love-cute.gif'); 

        // 5. Arial for all subsequent messages
        setTimeout(() => {
            setFont('arial');
            document.getElementById('question').innerText = "Wait!";
            updateImage('doggy-cute.gif'); 
        }, 3000); 

        setTimeout(() => {
            document.getElementById('question').innerText = "I got something for you (˵ •̀ ᴗ - ˵ ) ✧";
            updateImage('kutya.gif'); 
        }, 6000);

        setTimeout(() => {
            document.getElementById('question').innerText = "It is on your way...";
            updateImage('presents-gifts.gif'); 
        }, 10000);

        setTimeout(() => {
            document.getElementById('question').innerText = "Wait patiently hehe 🎁";
            updateImage('cute-cat.gif'); 
        }, 13000);

        setTimeout(() => {
            document.getElementById('question').innerText = "u r the best baby. Mwaahhh !!! ❤️✨";
            updateImage('cat-cat-meme.gif'); 
        }, 16000);

        setTimeout(() => {
            document.getElementById('question').innerText = "Okay Bui-bui Bund Paari, that ass deserves a raise 😁🧚‍♀️";
            updateImage('apple-apple-cat.gif'); 
            triggerPartyEffects();
        }, 20000);
    }, 15000);
}

function createFloatingGif() {
    const img = new Image();
    img.src = partyGifs[Math.floor(Math.random() * partyGifs.length)];
    img.className = 'party-icon';
    img.style.width = (Math.random() * 100 + 100) + "px";
    img.style.left = (Math.random() * 85) + "vw"; 
    img.style.top = (Math.random() * 85) + "vh";
    document.body.appendChild(img);
    setTimeout(() => { if(img.parentNode) img.remove(); }, 3000);
}

function updateImage(imageSrc) {
    const container = document.getElementById('image-container');
    container.innerHTML = ''; 
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => container.appendChild(img);
}

initValentine();