$(document).ready(function () {



/*============================== CREATE CHARACTER OBJECT AND DISPLAY VALUES ON DOM ====================================*/

    //Obi's Character Attributes
    var obiAttrib = {
        name: "Obi-Wan",
        hitPoints: Math.floor(Math.random() * (200 - 100 + 1) + 100),
        attackPower: Math.floor(Math.random() * 20 + 1),
        counterAttackPower: Math.floor(Math.random() * 20 + 1)
    }

    //Kylo's Character Attributes
    var kyloAttrib = {
        name: "Kylo Ren",
        hitPoints: Math.floor(Math.random() * (200 - 100 + 1) + 100),
        attackPower: Math.floor(Math.random() * 20 + 1),
        counterAttackPower: Math.floor(Math.random() * 20 + 1)
    }

    //Yoda's Character Attributes
    var yodaAttrib = {
        name: "Yoda",
        hitPoints: Math.floor(Math.random() * (200 - 100 + 1) + 100),
        attackPower: Math.floor(Math.random() * 20 + 1),
        counterAttackPower: Math.floor(Math.random() * 20 + 1)
    }

    //Vader's Character Attributes
    var vaderAttrib = {
        name: "Darth Vader",
        hitPoints: Math.floor(Math.random() * (200 - 100 + 1) + 100),
        attackPower: Math.floor(Math.random() * 20 + 1),
        counterAttackPower: Math.floor(Math.random() * 20 + 1)
    }

    //append Obi's attributes to his starting image
    var obisAtts = $("<div  class='text-center m-auto char-attrib'>").appendTo($("#obi-img"))
    var obiHp = $("<div  class='text-center m-auto char-attrib game-hp'>").appendTo($(obisAtts)).text("HP: " + obiAttrib.hitPoints);
    var obiAp = $("<div  class='text-center m-auto char-attrib obi-game-ap game-ap'>").appendTo($(obisAtts)).text("Attack Power: " + obiAttrib.attackPower);
    var obiCap = $("<div  class='text-center m-auto char-attrib obi-game-cap'>").appendTo($(obisAtts)).text("Counter Attack: " + obiAttrib.counterAttackPower);

    //append Kylo's attributes to his starting image
    var kyloAtts = $("<div  class='text-center m-auto char-attrib'>").appendTo($("#kylo-ren-img"))
    var kyloHp = $("<div class='text-center m-auto char-attrib game-hp'>").appendTo($(kyloAtts)).text("HP: " + kyloAttrib.hitPoints);
    var kyloAp = $("<div class='text-center m-auto char-attrib game-ap kylo-game-ap'>").appendTo($(kyloAtts)).text("Attack Power: " + kyloAttrib.attackPower);
    var kyloCap = $("<div class='text-center m-auto char-attrib kylo-game-cap'>").appendTo($(kyloAtts)).text("Counter Attack: " + kyloAttrib.counterAttackPower);

    //append Yoda's attributes to his starting image
    var yodaAtts = $("<div  class='text-center m-auto char-attrib'>").appendTo($("#yoda-master-img"))
    var yodaHp = $("<div class='text-center m-auto char-attrib game-hp'>").appendTo($(yodaAtts)).text("HP: " + yodaAttrib.hitPoints);
    var yodaAp = $("<div class='text-center m-auto char-attrib game-ap yoda-game-ap'>").appendTo($(yodaAtts)).text("Attack Power: " + yodaAttrib.attackPower);
    var yodaCap = $("<div class='text-center m-auto char-attrib yoda-game-cap'>").appendTo($(yodaAtts)).text("Counter Attack: " + yodaAttrib.counterAttackPower);

    //append Darth's attributes to his starting image
    var darthAtts = $("<div  class='text-center m-auto char-attrib'>").appendTo($("#darth-img"))
    var darthHp = $("<div class='text-center m-auto char-attrib game-hp'>").appendTo($(darthAtts)).text("HP: " + vaderAttrib.hitPoints);
    var darthAp = $("<div class='text-center m-auto char-attrib game-ap vader-game-ap'>").appendTo($(darthAtts)).text("Attack Power: " + vaderAttrib.attackPower);
    var darthCap = $("<div class='text-center m-auto char-attrib vader-game-cap'>").appendTo($(darthAtts)).text("Counter Attack: " + vaderAttrib.counterAttackPower);
   

    // trying to create a variable with the object for the character on which you click 
    var usersCharacter;
    var userEnemy;
    var noEnemyChosen = true;


    //audio used in gameplay
    const kyloSound = new Audio("../unit-4-game/Assets/audio/chose-character.mp3");
    const yodaLaugh = new Audio("../unit-4-game/Assets/audio/yoda-laugh.WAV");
    const vaderSound = new Audio("../unit-4-game/Assets/audio/vader-sound.mp3");
    const obiSound = new Audio("../unit-4-game/Assets/audio/obi-sound.mov");
    const attackSound = new Audio("../unit-4-game/Assets/audio/saber-hit.wav");
    const winSound = new Audio("../unit-4-game/Assets/audio/winSound.mov");
    const deadSound = new Audio("../unit-4-game/Assets/audio/scream.wav");

/*=============================================== RESET FUNCTION =================================================*/

    //reset function
    $("#reset-btn").on("click", function() {
        window.location.reload(true);
    })




/*========================================== CHOOSE YOUR CHARACTER =================================================*/

    function charChosen() {
        //Hide the character selection area
        $("#character-section").css("display", "none");

        //Un-hide the HTML for the enemy choice area and header
        $("#choose-enemy").css("display", "flex");
        $("#enemies-selection").css("display", "flex");

        //Un-hide the HTML for the chosen character, chosen enemy
        $(".selected-characters").css("display", "flex");
        $("#selected-enemy").css("display", "flex");

    }


    //when obi wan is clicked
    $("#obi-wan-img").on("click", function () {

        charChosen()

        obiSound.play();

        //link obi's object to the users choice
        var obiCharacter = obiAttrib;
        window.usersCharacter = obiCharacter;


        //adds users character name to the header. Not sure if I want this
        /*var userCharName = $("<h2 class='m-auto'>").text(window.usersCharacter.name);
        $("#selected-char-name").append(userCharName);*/

        //Create a new div with the image of your chosen character and their attributes
        var chosenCharacter = $("<div><img class='w-50 ml-5 pl-5' src='./Assets/images/obi-wan.png'></div>");
        $("#selected-character").append(chosenCharacter);
        $("#selected-char-stats").append(obiHp).append(obiAp);

        //create a new div with an image and append it to a row in the enemy area for
        //each of the three remaining characters
        var enemyDivOne = $("<div class='pl-5 enemy-options-image'><img id='kylo-img-enemy' class='w-50' src='./Assets/images/kylo.png'></div>");
        $(".enemy-one").html("<h5 class='text-center m-auto' id='kylo-name-selection'>Kylo Ren</h5>").append(enemyDivOne).append(kyloHp).append(kyloCap);
        $(".enemy-one").attr("id", "kylo-img-enemy-div");

        var enemyDivTwo = $("<div class='pl-5 enemy-options-image'><img id='yoda-img-enemy' class='w-50' src='./Assets/images/yoda.png'></div>");
        $(".enemy-two").html("<h5 class='text-center m-auto' id='yoda-name-selection'>Yoda</h5>").append(enemyDivTwo).append(yodaHp).append(yodaCap);
        $(".enemy-two").attr("id", "yoda-img-enemy-div");

        var enemyDivThree = $("<div class='pl-5 enemy-options-image'><img id='vader-img-enemy' class='w-50' src='./Assets/images/vader.png'></div>");
        $(".enemy-three").html("<h5 class='text-center m-auto' id='vader-name-selection'>Darth Vader</h5>").append(enemyDivThree).append(darthHp).append(darthCap);
        $(".enemy-three").attr("id", "vader-img-enemy-div");

    })


    //when kylo is clicked
    $("#kylo-img").on("click", function () {

        charChosen()

        kyloSound.play();

        //link kylo's object to the users choice
        var kyloCharacter = kyloAttrib;
        window.usersCharacter = kyloCharacter;

        //Create a new div with the image of your chosen character
        var chosenCharacter = $("<div><img class='w-50 ml-5' src='./Assets/images/kylo.png'></div>");
        $("#selected-character").append(chosenCharacter);
        $("#selected-char-stats").append(kyloHp).append(kyloAp);

        //create a new div with an image and append it to a row in the enemy area for
        //each of the three remaining characters
        var enemyDivOne = $("<div class='pl-5'><img id='obi-wan-img-enemy' class='w-50 enemy-options-image' src='./Assets/images/obi-wan.png'></div>");
        $(".enemy-one").html("<h5 class='text-center m-auto' id='obi-wan-name-selection'>Obi-Wan</h5>").append(enemyDivOne).append(obiHp).append(obiCap);
        $(".enemy-one").attr("id", "obi-wan-img-enemy-div");

        var enemyDivTwo = $("<div class='pl-5'><img id='yoda-img-enemy' class='w-50 enemy-options-image' src='./Assets/images/yoda.png'></div>");
        $(".enemy-two").html("<h5 class='text-center m-auto' id='yoda-name-selection'>Yoda</h5>").append(enemyDivTwo).append(yodaHp).append(yodaCap);
        $(".enemy-two").attr("id", "yoda-img-enemy-div");

        var enemyDivThree = $("<div class='pl-5'><img id='vader-img-enemy' class='w-50 enemy-options-image' src='./Assets/images/vader.png'></div>");
        $(".enemy-three").html("<h5 class='text-center m-auto' id='vader-name-selection'>Darth Vader</h5>").append(enemyDivThree).append(darthHp).append(darthCap);
        $(".enemy-three").attr("id", "vader-img-enemy-div");
    })



    //when yoda is clicked
    $("#yoda-img").on("click", function () {

        charChosen()

        yodaLaugh.play();

        //link yoda's object to the users choice
        var yodaCharacter = yodaAttrib;
        window.usersCharacter = yodaCharacter;

        //Create a new div with the image of your chosen character
        var chosenCharacter = $("<div><img class='w-50 ml-5 pl-5' src='./Assets/images/yoda.png'></div>");
        $("#selected-character").append(chosenCharacter);
        $("#selected-char-stats").append(yodaHp).append(yodaAp);

        //create a new div with an image and append it to a row in the enemy area for
        //each of the three remaining characters
        var enemyDivOne = $("<div class='pl-5 enemy-options-image'><img id='kylo-img-enemy' class='w-50' src='./Assets/images/kylo.png'></div>");
        $(".enemy-one").html("<h5 class='text-center m-auto' id='kylo-name-selection'>Kylo Ren</h5>").append(enemyDivOne).append(kyloHp).append(kyloCap);
        $(".enemy-one").attr("id", "kylo-img-enemy-div");

        var enemyDivTwo = $("<div class='pl-5 enemy-options-image'><img id='obi-wan-img-enemy' class='w-50' src='./Assets/images/obi-wan.png'></div>");
        $(".enemy-two").html("<h5 class='text-center m-auto' id='obi-wan-name-selection'>Obi Wan</h5>").append(enemyDivTwo).append(obiHp).append(obiCap);
        $(".enemy-two").attr("id", "obi-wan-img-enemy-div");

        var enemyDivThree = $("<div class='pl-5 enemy-options-image'><img id='vader-img-enemy' class='w-50' src='./Assets/images/vader.png'></div>");
        $(".enemy-three").html("<h5 class='text-center m-auto' id='vader-name-selection'>Darth Vader</h5>").append(enemyDivThree).append(darthHp).append(darthCap);
        $(".enemy-three").attr("id", "vader-img-enemy-div");
    })



    //when vader is clicked
    $("#vader-img").on("click", function () {

        charChosen()

        vaderSound.play();

        //link vader's object to the users choice
        var vaderCharacter = vaderAttrib;
        window.usersCharacter = vaderCharacter;

        //Create a new div with the image of your chosen character
        var chosenCharacter = $("<div><img class='w-50 ml-5' src='./Assets/images/vader.png'></div>");
        $("#selected-character").append(chosenCharacter);
        $("#selected-char-stats").append(darthHp).append(darthAp);

        //create a new div with an image and append it to a row in the enemy area for
        //each of the three remaining characters
        var enemyDivOne = $("<div class='pl-5 enemy-options-image'><img id='kylo-img-enemy' class='w-50 enemy-select-img' src='./Assets/images/kylo.png'></div>");
        $(".enemy-one").html("<h5 class='text-center m-auto' id='kylo-name-selection'>Kylo Ren</h5>").append(enemyDivOne).append(kyloHp).append(kyloCap);
        $(".enemy-one").attr("id", "kylo-img-enemy-div");

        $("#character-section").css("display", "none");

        var enemyDivTwo = $("<div class='pl-5 enemy-options-image'><img id='yoda-img-enemy' class='w-50 enemy-select-img' src='./Assets/images/yoda.png'></div>");
        $(".enemy-two").html("<h5 class='text-center m-auto' id='yoda-name-selection'>Yoda</h5>").append(enemyDivTwo).append(yodaHp).append(yodaCap);
        $(".enemy-two").attr("id", "yoda-img-enemy-div");

        var enemyDivThree = $("<div class='pl-5 enemy-options-image'><img id='obi-wan-img-enemy' class='w-50 enemy-select-img' src='./Assets/images/obi-wan.png'></div>");
        $(".enemy-three").html("<h5 class='text-center m-auto' id='obi-wan-name-selection'>Obi Wan</h5>").append(enemyDivThree).append(obiHp).append(obiCap);
        $(".enemy-three").attr("id", "obi-wan-img-enemy-div");
    })

    
    
/*================================================ CHOOSE YOUR ENEMY =================================================*/

    function enemyChosen() {
        //Hide the character selection area
        $("#choose-enemy").empty();//css("display", "none");

        //add text to say enemies remaining
        $("#choose-enemy").html("<h3 class='text-center m-auto'>Enemies Remaining</h3>");

        //unhide the fight section
        $("#fight-section").css("display", "flex");

        //Hide the place holder img in the enemy section
        $("#selected-enemy").empty();

        //Make sure the attack button is enabled
        $("#attack-btn").removeAttr("disabled"); 

        window.noEnemyChosen = false

    }

    $(document).on("click", "#vader-img-enemy", function () {

        //call the enemyChosen function
        enemyChosen();

        vaderSound.play();

        $(".vader-game-ap").css("display", "none");

        $("#vader-img-enemy").addClass("disabled-enemies");

        $("#vader-img-enemy-div").addClass("disabled-enemies");

        //link yoda's object to the users enemy choice
        var vaderEnemy = vaderAttrib;
        window.userEnemy = vaderEnemy;

        //append the enemies stats to the defender area
        $("#selected-enemy-stats").empty();
        //var chosenEnemyStats = $("<div>");
        $("#selected-enemy-stats").append(darthHp).append(darthCap);

        $("#vader-name-selection").css("display", "none");

        //partially hide the chosen image
        $("#vader-img-enemy").css("opacity", ".4");

        //create a new div for your enemy and insert the image
        var chosenEnemy = $("<div><img class='w-50 ml-5 pl-5' id='enemy-chosen' src='./Assets/images/vader.png'></div>");
        $("#selected-enemy").append(chosenEnemy);

    })

    $(document).on("click", "#yoda-img-enemy", function () {

        //call the enemyChosen function
        enemyChosen();

        //Play Yoda's sound
        yodaLaugh.play();

        $("#yoda-img-enemy").addClass("disabled-enemies");

        $("#yoda-img-enemy-div").addClass("disabled-enemies");

        //link yoda's object to the users enemy choice
        var yodaEnemy = yodaAttrib;
        window.userEnemy = yodaEnemy;

        //append the enemies stats to the defender area
        $("#selected-enemy-stats").empty();
        var chosenEnemyStats = $("<div>");
        $("#selected-enemy-stats").append(yodaHp).append(yodaCap);
        

        //hide yodas name when clicked
        $("#yoda-name-selection").css("display", "none");
        $(".yoda-game-ap").css("display", "none");

        //partially hide the chosen image
        $("#yoda-img-enemy").css("opacity", ".4");

        //create a new div for your enemy and insert the image
        var chosenEnemy = $("<div><img class='w-50 ml-5 pl-5' id='enemy-chosen' src='./Assets/images/yoda.png'></div>");
        $("#selected-enemy").append(chosenEnemy);

    })

    $(document).on("click", "#kylo-img-enemy", function () {

        //call the enemyChosen function
        enemyChosen();

        kyloSound.play();

        $(".kylo-game-ap").css("display", "none");

        $("#kylo-img-enemy").addClass("disabled-enemies");

        $("#kylo-img-enemy-div").addClass("disabled-enemies");

        //link kylo's object to the users enemy choice
        var kyloEnemy = kyloAttrib;
        window.userEnemy = kyloEnemy;

        //append the enemies stats to the defender area
        $("#selected-enemy-stats").empty();
        var chosenEnemyStats = $("<div>");
        $("#selected-enemy-stats").append(kyloHp).append(kyloCap);

        $("#kylo-name-selection").css("display", "none");

        //partially hide the chosen image
        $("#kylo-img-enemy").css("opacity", ".4");

        //create a new div for your enemy and insert the image
        var chosenEnemy = $("<div><img class='w-50 ml-5 pl-5' id='enemy-chosen' src='./Assets/images/kylo.png'></div>");
        $("#selected-enemy").append(chosenEnemy);

    })

    $(document).on("click", "#obi-wan-img-enemy", function () {

        //call the enemyChosen function
        enemyChosen();

        obiSound.play(); 

        $(".obi-game-ap").css("display", "none");

        $("#obi-wan-img-enemy").addClass("disabled-enemies");

        $("#obi-wan-img-enemy-div").addClass("disabled-enemies");

        //link obi's object to the users enemy choice
        var obiEnemy = obiAttrib;
        window.userEnemy = obiEnemy;

        //append the enemies stats to the defender area
        $("#selected-enemy-stats").empty();
        var chosenEnemyStats = $("<div>");
        $("#selected-enemy-stats").append(obiHp).append(obiCap);

        $("#obi-wan-name-selection").css("display", "none");

        //partially hide the chosen image
        $("#obi-wan-img-enemy").css("opacity", ".4");

        //create a new div for your enemy and insert the image
        var chosenEnemy = $("<div><img class='w-50 ml-5 pl-5' src='./Assets/images/obi-wan.png'></div>");
        $("#selected-enemy").append(chosenEnemy);

        

    })



/*=================================================== ATTACK LOGIC =====================================================*/

    var enemiesRemaining = 3;

    //When you press the attack button
    $(document).on("click", "#attack-btn", function() {


        attackSound.play();

        //show the attack results section
        $("#attack-results-enemy").css("display", "flex");
        $("#attack-results-player").css("display", "flex");

        //hide the header for the fight section
        $("#fight-section-header").css("display", "none");
        
        //empty the last attack results
        $("#attack-results-enemy").empty();
        $("#attack-results-player").empty();

        //append the text and damage dealt to the enemy
        var userAttackStats = $("<div class='w-100'>").text( window.usersCharacter.name + " dealt " + window.usersCharacter.attackPower + " points damage");
        $("#attack-results-player").append(userAttackStats);

        //append the text and damage dealt to the enemy
        var enemyAttackStats = $("<div class='w-100'>").text(window.userEnemy.name + " countered with " + window.userEnemy.counterAttackPower + " points damage");
        $("#attack-results-enemy").append(enemyAttackStats);

        //update the enemies hp
        window.userEnemy.hitPoints = parseInt(window.userEnemy.hitPoints) - parseInt(window.usersCharacter.attackPower);

        //update the players hp
        window.usersCharacter.hitPoints = parseInt(window.usersCharacter.hitPoints) - parseInt(window.userEnemy.counterAttackPower);

        //increment the users attack power
        window.usersCharacter.attackPower += 5;
        
        //clear the previous enemy and character hp value from the screen
        $("#selected-enemy-stats .game-hp").empty();

        $("#selected-char-stats .game-hp").empty();

        //clear the users attack power from the screen
        $("#selected-char-stats .game-ap").empty();

        //update the screen with the new enemy and char hp
        var enemyGameHp = $("<div>").text("HP: " + window.userEnemy.hitPoints);
        $("#selected-enemy-stats .game-hp").append(enemyGameHp);

        var charGameHp = $("<div>").text("HP: " + window.usersCharacter.hitPoints);
        $("#selected-char-stats .game-hp").append(charGameHp);

        //update the users new attack power on the screen
        var charGameAp = $("<div>").text("Attack Power: " + window.usersCharacter.attackPower);
        $("#selected-char-stats .game-ap").append(charGameAp);


        if (window.userEnemy.hitPoints <= 0) {
            $("#choose-enemy").css("display", "block");
            $("#selected-enemy").empty();
            $("#selected-enemy-stats").empty();
            $("#attack-results-player").empty();
            $("#attack-results-enemy").empty();
            deadSound.play();
            $("#enemies-selection").removeClass("disabled-enemies");

            enemiesRemaining--;
            if (enemiesRemaining === 0) {
                //alert("You Win!");

                $("#selected-enemy").empty();

                $("#enemies-selection").css("display", "none");

                setTimeout(winner, 800);

                function winner () {
                    $("body").empty();
                    $("body").html('<div id="youWin" class="row"><div class="col-lg-12 text-center"><p>YOU WIN!</p></div></div>');
                    winSound.play();
                }

                setTimeout(restart, 1000 * 9 + 800);

                function restart() {
                    window.location.reload(true);
                }
                
            }
            window.noEnemyChosen = true;

        }

        if (window.usersCharacter.hitPoints <= 0) {
            $("#selected-enemy").empty();
            $("#selected-enemy-stats").empty();
            $("#attack-results-player").empty();
            $("#attack-results-enemy").empty();
            $("#selected-character").empty();
            $("#selected-char-stats").empty();
            alert("You Lose!");
            window.location.reload(true);
        }

        if (window.noEnemyChosen === true) {

            var chooseNextEnemy = $("<div class='w-100 text-center' id='choose-next-enemy'><h3>Choose Your Next Enemy</h3></div>");
            var chooseNewEnemy = $("<img src=../unit-4-game/Assets/images/question2.png id='noEnemySelected'>");
            $("#selected-enemy").append(chooseNewEnemy).append(chooseNextEnemy);

            
        }

        if (!$("#selected-enemy .pl-5").length) { 
           $("#attack-btn").attr("disabled", "");

        }
        
        if ($("#selected-enemy .pl-5").length === 1) {
            $("#enemies-selection").addClass("disabled-enemies");
            console.log("test 2");
        }

    })

    
//================================= TO DOS =================================================

    //make the character's AP increment by its original AP, not by 5

    //make it so that once you choose an enemy, no other enemy can be chosen until the
    //current enemy is dead



    //BONUS
    //Refactor the character selection process with a single function that runs based
    //on 'this' instead of 4 separate functions for each character

})



















