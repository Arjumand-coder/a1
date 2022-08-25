
function startClasification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/prwsuEF_o/model.json', modelReady);

    
}

function modelReady() {
    classifier.classify(gotResults);
}