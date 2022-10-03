var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://o.remove.bg/downloads/1977cdf0-7957-459d-b691-4dbe91c7ca62/dogee-removebg-preview.png";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://o.remove.bg/downloads/ab8552ca-6f2c-47fa-9d1f-c2ed9f1146be/download__29_-removebg-preview.png";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://o.remove.bg/downloads/31f6424f-1e76-4d12-8a6f-59f574372d77/7f7d3241ad760a3cd9bf22bcdb1b0983-removebg-preview.png";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://o.remove.bg/downloads/6789bbba-1a43-4a82-baba-94ec9fdbccbe/78a08cc29216b8d9c3c4ed193c536ed1-removebg-preview.png";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}