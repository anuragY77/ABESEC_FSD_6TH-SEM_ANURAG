
function showSection(sectionId){

document.getElementById("home").classList.remove("active");
document.getElementById("work").classList.remove("active");

document.getElementById(sectionId).classList.add("active");

}

function clickButton(){
alert("Work button clicked!");
}

const images = [

"https://wallpapers.com/images/hd/naruto-pictures-swx9z36f9aa3dcza.jpg",  
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Kilb6oMIDH6w10eCixLl8OQC0HLuuGAe9w&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvAtfkDsym6ad31HG7xdEJBEzP3Km80SCAA&s", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcunQ8DJAJ2qR4KSOiYMM94__AQtGw-sYnmA&s", 
"https://cdn.displate.com/artwork/857x1200/2025-05-26/9a579dd43af2c32371589d6e6ea49db1_ac80afab18a1544defda992138b2c732.jpg" 

];

let index = 0;

function changeImage(){

document.getElementById("animeImage").src = images[index];

index++;

if(index >= images.length){
index = 0;
}

}

setInterval(changeImage, 3000);

changeImage();