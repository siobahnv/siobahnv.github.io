
function replaceMyElem(paramId, paramRandArr) {
    const myElem = document.getElementById(paramId);
    const randomIndex = Math.floor(Math.random() * paramRandArr.length); 
    const randomWord = paramRandArr[randomIndex];
    myElem.textContent = randomWord;
}

window.addEventListener('load', function () {
    // Your code to execute after the page fully loads
    const helloWorldID = "randomHelloWorld";
    const helloWorlds = ["Hello, World Tree", "Hola Mundo", "Bonjour le monde", "Ciao mondo", "مرحبا بالعالم", "你好世界", "안녕하세요, 세상", "Salve, Mundus"];
    replaceMyElem(helloWorldID, helloWorlds);

    const personalTitleID = "randomTitle";
    const personalTitles = ["a programmer", "a coder", "a web developer", "a fullstack engineer", "a support professional", "a tech junkie"];
    replaceMyElem(personalTitleID, personalTitles);
});