var loveScore = Math.random() * 100;
prompt("what is your name? ");
prompt("what is their name? ");
loveScore = Math.floor(loveScore) + 1;

if(loveScore  > 75){
    alert("Your love score is "+ loveScore + " %. " +"You love each other like kanaye loves kanaye.");
}
if(loveScore > 30 && loveScore <=75){
    
    alert("Your love score is "+ loveScore + "%.");
}
if(loveScore <=30){
    alert("Your love score is "+ loveScore + " %. "  + "Your love is like oil and water.");
}


