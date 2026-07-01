async function translateText() {

    let text = document.getElementById("inputText").value;
    let from = document.getElementById("fromLang").value;
    let to = document.getElementById("toLang").value;

    if (text.trim() === "") {
        alert("Please enter text");
        return;
    }

    const url = "https://api.mymemory.translated.net/get?q="
        + encodeURIComponent(text)
        + "&langpair=" + from + "|" + to;

    try {
        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("outputText").value =
            data.responseData.translatedText;

    } catch (error) {
        alert("Translation failed");
        console.log(error);
    }
}

// COPY FUNCTION
function copyText() {
    let output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Copied!");
}