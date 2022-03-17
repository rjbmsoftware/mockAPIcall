changeText();

async function changeText() {
    setTimeout(async () => {
        let response = await fetch('http://127.0.0.1:3000/greeting');
        let text = await response.text();
        document.getElementById('textToChange').innerHTML = text;
    }, 2000);
}