
function getSlice(text, endpoint) {
    return text.slice(0, endpoint);
}

function pickRandomTextFromArr(paramRandArr) {
    const randomIndex = Math.floor(Math.random() * paramRandArr.length);
    const randomWord = paramRandArr[randomIndex];
    return randomWord;
}

function replaceMyElem(paramId, text) {
    const myElem = document.getElementById(paramId);
    myElem.textContent = text;
}

// Eventually remove once update and replace code
function replaceMyElemFromArr(paramId, paramRandArr) {
    const myElem = document.getElementById(paramId);
    const randomIndex = Math.floor(Math.random() * paramRandArr.length);
    const randomWord = paramRandArr[randomIndex];
    myElem.textContent = randomWord;
}

//////

/*
// Might take out...
function blinkingCursor() {
    const cursor = document.getElementById('cursor');
    let isCursorVisible = true;

    setInterval(() => {
        if (isCursorVisible) {
            cursor.style.opacity = 0;
        } else {
            cursor.style.opacity = 1;
        }
        isCursorVisible = !isCursorVisible;
    }, 500); // Blinking speed in milliseconds
}
*/

//////

function loopingDelayedTiming(text, id, delay) {
    // code
    for (let i = 0; i <= text.length; i++) {
        setTimeout(function () {
            const mySlice = getSlice(text, i);
            console.log(`Iteration ${i}`);
            console.log(`myslice: ${mySlice}`);
            console.log(`delay inside loop: ${delay}`);
            replaceMyElem(id, mySlice);
            delay = 500 * i;
        }, 500 * i + delay); // Increase delay for each iteration
    }
    // console.log(text);
    // console.log(id.textContent);
    // console.log(delay);

    // return delay;
}

//////

// This is where the action is
window.addEventListener('load', function () {
    // Bloody scoping...
    // Your code to execute after the page fully loads

    // blinkingCursor();

    // Print first line, "Hello World"
    const helloWorldID = "randomHelloWorld";
    const helloWorlds = ["Hello, World", "Hello, World Tree", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "مرحبا بالعالم", "你好世界", "안녕하세요, 세상", "Salve, Mundus"];
    const randomText = pickRandomTextFromArr(helloWorlds);
    // replaceMyElem(helloWorldID, helloWorlds);

    let delay = 0;

    loopingDelayedTiming(randomText, helloWorldID, delay);
    delay += 500 * randomText.length;
    console.log("The next starting delay is: " + delay);

    // After printing first line, "Hello World"
    // Print middle line
    const middleGreetingID = "middleGreeting";
    // const middleText = document.getElementById(middleGreetingID).textContent;
    const middleText = "I'm Heather, and I am";
    loopingDelayedTiming(middleText, middleGreetingID, delay);
    console.log("The next starting delay is: " + delay);
    console.log("end of middle line code");

    // Print last line
    const personalTitleID = "randomTitle";
    const personalTitles = ["a programmer", "a coder", "a web developer", "a fullstack engineer", "a support professional", "a tech junkie"];
    replaceMyElemFromArr(personalTitleID, personalTitles);
});