function startIdentification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Gt4og9ars/model.json", modelReady);

}

function modelReady() {
  classifier.classify(gotResult);
  console.log("Model is Ready");
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(result);
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    console.log("r=" + r + " g=" + g + " b=" + b);
    document.getElementById("result_label").innerHTML = "I Can Hear - " + result[0].label;
    document.getElementById("result_accuracy").innerHTML = "Accuracy - " + (result[0].confidence * 100).toFixed(2) + " %";

    document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("result_accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

    img1=document.getElementById("alien1");
    img2=document.getElementById("alien2");
    img3=document.getElementById("alien3");
    img4=document.getElementById("alien4");

    if (result[0].label=="Clap") {
      img1.src="aliens-01.gif";
      img2.src="aliens-02.png";
      img3.src="aliens-03.png";
      img4.src="aliens-04.png";
    }

    else if (result[0].label=="Whistle") {
      img1.src="aliens-01.png";
      img2.src="aliens-02.gif";
      img3.src="aliens-03.png";
      img4.src="aliens-04.png";
    }

    else if (result[0].label=="Bell") {
      img1.src="aliens-01.png";
      img2.src="aliens-02.png";
      img3.src="aliens-03.gif";
      img4.src="aliens-04.png";
    }

    else {
      img1.src="aliens-01.png";
      img2.src="aliens-02.png";
      img3.src="aliens-03.png";
      img4.src="aliens-04.gif";
    }
  }

}