const roles = [
"Data Analyst",
"Python Developer",
"AI Enthusiast"
];

let i = 0;

function changeText(){
    document.getElementById("typing").innerHTML = roles[i];
    i++;

    if(i==roles.length){
        i=0;
    }
}

setInterval(changeText,2000);
changeText();