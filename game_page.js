
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    var get_word = document.getElementById("word").value ;
    word = get_word.toLowerCase();
    console.log(word);
    var ch1 = word.charAt(1);
    console.log(ch1);
    var half_len = Math.floor(word.length / 2);
    var ch2 = word.charAt(half_len);
    console.log(ch2);
    var len_1 = word.length-1;
    var ch3 = word.charAt(len_1);
    console.log(ch3);

    var replace_1=word.replace(ch1,"_");
    var replace_2=replace_1.replace(ch2,"_");
    var replace_3=replace_2.replace(ch3,"_");
    console.log(replace_3);

    question_word="<h4 id='word_display'>Q."+replace_3+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_btn="<br><br><button onclick='check()' class='btn btn-info'>CHECK</button>";
    row = question_word + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn="player1";
answer_turn="player2";

function check() {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if (answer==word) {
        console.log("correct answer");
        if (answer_turn=="player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1" ) {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}