Webcam.set({
width:350,
height:350,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_url+'">';
})
}
console.log("ML5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6i_9UpfFE/model.json",modelloaded);
function modelloaded(){
console.log("Model Loaded")
}

function identify(){
img = document.getElementById("capture_img");
classifier.classify(img, gotResult);
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("objname").innerHTML = results[0].label;
document.getElementById("objacc").innerHTML = results[0].confidence.toFixed(3);
}
}