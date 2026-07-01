let notes = ["C4","D4","E4","F4","G4","A4","B4"];
let melody = [];

function generateMusic(){

    melody = [];

    for(let i=0;i<16;i++){
        let randomNote = notes[Math.floor(Math.random()*notes.length)];
        melody.push(randomNote);
    }

    document.getElementById("output").innerHTML =
        "🎼 Melody Generated:<br><br>" + melody.join(" - ");
}

// 🎧 PLAY REAL SOUND
function playMusic(){

    if(melody.length === 0){
        alert("Generate music first!");
        return;
    }

    const synth = new Tone.Synth().toDestination();

    let time = 0;

    melody.forEach(note => {
        synth.triggerAttackRelease(note, "8n", "+" + time);
        time += 0.3;
    });

    Tone.start();
}