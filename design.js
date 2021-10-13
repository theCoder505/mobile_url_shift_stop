var newMmbrId = document.getElementById("newMmbrId");
var giestId = document.getElementById("giestId");
var rgstrdMmbr = document.getElementById("rgstrdMmbr");
var playGame = document.getElementById("playGame");
var landingPage = document.getElementById("landingPage");
var instructions = document.getElementById("instructions");


newMmbrId.addEventListener("click", function () {
    newMmbrId.type = "text";
    newMmbrId.value = "";
    rgstrdMmbr.classList.remove("activated");
    giestId.classList.remove("activated");
    newMmbrId.classList.add("activated");
    rgstrdMmbr.type = "submit";
    rgstrdMmbr.value = "Registered Member";
});


rgstrdMmbr.addEventListener("click", function () {
    newMmbrId.type = "submit";
    newMmbrId.value = "New Member";
    giestId.classList.remove("activated");
    newMmbrId.classList.remove("activated");
    rgstrdMmbr.classList.add("activated");
    rgstrdMmbr.type = "text";
    rgstrdMmbr.value = "";
});


giestId.addEventListener("click", function () {
    rgstrdMmbr.classList.remove("activated");
    newMmbrId.classList.remove("activated");
    giestId.classList.add("activated");

    newMmbrId.type = "submit";
    newMmbrId.value = "New Member";
    rgstrdMmbr.type = "submit";
    rgstrdMmbr.value = "Registered Member";
});


console.log(newMmbrId.length);


playGame.addEventListener("click", function () {
    landingPage.classList.add("d-none");
    instructions.classList.remove("d-none");



    //validate 
    if (giestId.classList.contains("activated")) {
        var uniqueNum = (Math.floor(Math.random() * 10000000) + 1);
        var playerName = "Guest@" + uniqueNum;
        alert(playerName);
    }


    else if (newMmbrId.classList.contains("activated")) {
        var uniqueNum = (Math.floor(Math.random() * 10000000) + 1);
        var typedName = document.getElementById("newMmbrId").value;

        if(typedName.length !== null){
            var playerName = typedName + "@" + uniqueNum;
            alert(playerName);

            //insert user 
        }else{
            alert("Please Insert Player Name");
        }

    }


    else if (rgstrdMmbr.classList.contains("activated")) {
        var uniqueNum = (Math.floor(Math.random() * 10000000) + 1);
        var typedName = document.getElementById("rgstrdMmbr").value;
        
        if(typedName.length !== ''){
            var playerName = typedName + "@" + uniqueNum;
            alert(playerName);
        }
        //check before submit
    }






});







