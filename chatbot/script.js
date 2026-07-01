const faqs = [
    { q: "html", a: "HTML is used to create web pages." },
    { q: "css", a: "CSS is used for styling websites." },
    { q: "javascript", a: "JavaScript makes websites interactive." },
    { q: "internet", a: "Internet is a global network of computers." },
    { q: "computer", a: "A computer processes data and performs tasks." }
];

function send() {

    let input = document.getElementById("userInput");
    let text = input.value.toLowerCase().trim();

    if(text === "") return;

    addMessage(text,"user");

    let reply = "Sorry, I don't understand that question.";

    for(let i=0;i<faqs.length;i++){
        if(text.includes(faqs[i].q)){
            reply = faqs[i].a;
            break;
        }
    }

    input.value = "";

    setTimeout(()=>{
        typeMessage(reply);
    },500);
}

function addMessage(text,type){
    let chat = document.getElementById("chat");

    let msg = document.createElement("div");
    msg.classList.add("msg",type);
    msg.innerText = text;

    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

// ✨ typing effect (AI feel)
function typeMessage(text){
    let chat = document.getElementById("chat");

    let msg = document.createElement("div");
    msg.classList.add("msg","bot");
    chat.appendChild(msg);

    let i = 0;
    let interval = setInterval(()=>{
        msg.innerHTML += text.charAt(i);
        i++;

        if(i === text.length){
            clearInterval(interval);
        }

        chat.scrollTop = chat.scrollHeight;
    },20);
}