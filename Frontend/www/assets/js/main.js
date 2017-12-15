(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var question_info = [
    {
        id:1,
        title: "Naruto",
        question:"What is the colour of Shisui Uchiha's susanoo? What is the colour of Shisui Uchiha's susanoo? ",
        answers:{
            one:"Black",
            two:"Green",
            three:"Purple",
            four:"Orange"
        },
        correctAns:"three"
    },
    {
        id:2,
        title: "Naruto",
        question:"Killer Bee is the jinchuuriki of the _ tails?",
        answers:{
            one:"6",
            two:"7",
            three:"8",
            four:"9"
        },
        correctAns:"four"
    },
    {
        id:3,
        title: "Naruto",
        question:"Sasori of the___",
        answers:{
            one:"Iron sand",
            two:"Red sand",
            three:"Hidden sand",
            four:"Golden sand"
        },
        correctAns:"three"
    },
    {
        id:4,
        title: "Naruto",
        question:"Who sealed Orochimaru's hands?",
        answers:{
            one:"Sasuke Uchiha",
            two:"Tsunade",
            three:"Naruto",
            four:"Itachi Uchiha"
        },
        correctAns:"four"
    },
    {
        id:5,
        title: "Naruto",
        question:"Kabuto obtained__?",
        answers:{
            one:"Sage mode",
            two:"Snake sage mode",
            three:"None",
            four:"Both"
        },
        correctAns:"three"
    },
    {
        id:6,
        title: "Naruto",
        question:"Who created the shadow clone technique?",
        answers:{
            one:"Tobirama Senju",
            two:"Kakashi Hatake",
            three:"Naruto Uzumaki",
            four:"Minato Namikaze"
        },
        correctAns:"four"
    },
    {
        id:7,
        title: "Naruto",
        question:"Who was Hiruzen's teammate when he was young?",
        answers:{
            one:"Orochimaru",
            two:"Danzo Shimura",
            three:"Hashirama Senju",
            four:"Tobirama Senju"
        },
        correctAns:"three"
    },
    {
        id:8,
        title: "Naruto",
        question:"Who reanimated the 4 hokages?",
        answers:{
            one:"Kabuto",
            two:"Sasuke Uchiha",
            three:"Itachi Uchiha",
            four:"Naruto"
        },
        correctAns:"four"
    },
    {
        id:9,
        title: "Naruto",
        question:"What was the name of the sword that Kisame and Killer Bee both wielded?",
        answers:{
            one:"Sameheda",
            two:"Samohada",
            three:"Sumahoda",
            four:"Samohoda"
        },
        correctAns:"three"
    },
    {
        id:10,
        title: "Naruto",
        question:"What was the name of the 1 tail? (Gaara's beast)",
        answers:{
            one:"Shikahu",
            two:"Gyuki",
            three:"Shukaku",
            four:"Son goku"
        },
        correctAns:"four"
    },
    {
        id:1,
        title: "History",
        question:"Since the end of World War II, which three colors have been on the German flag?",
        answers:{
            one:"Green, White, Blue",
            two:"Green, White, Red",
            three:"Green, Yellow, Red",
            four:"Green, White, Black"
        },
        correctAns:"three"
    },
    {
        id:2,
        title: "History",
        question:"Which job did John Adams NOT hold? " +
        "Ambassador to Britain President Ambassador to Mexico Vice President",
        answers:{
            one:"1  LukeChrisReagan  1,991",
            two:"2  AreReally  1,991",
            three:"3  AwesomeGuys  1,991",
            four:"4  IAgree  1,991"
        },
        correctAns:"four"
    },
    {
        id:3,
        title: "History",
        question:"Which animal did William T. Sherman promise to freed slaves, along with 40 acres of land?",
        answers:{
            one:"Llama",
            two:"Goat",
            three:"Mule",
            four:"Dog"
        },
        correctAns:"three"
    },
    {
        id:4,
        title: "History",
        question:"American inventor Eli Whitney is best known for which of his inventions?",
        answers:{
            one:"Mechanical reaper",
            two:"Cotton gin",
            three:"Sewing machine",
            four:"Helicopter"
        },
        correctAns:"four"
    },
    {
        id:5,
        title: "History",
        question:"Who was England's king when the Tower of London was built?",
        answers:{
            one:"King George III",
            two:"King Henry VIII",
            three:"William the Conqueror",
            four:"King Henry V"
        },
        correctAns:"three"
    },
    {
        id:6,
        title: "History",
        question:'What does the U.S. Marine Corps motto--"semper fidelis"--mean?',
        answers:{
            one:"Always victorious",
            two:"Always right",
            three:"Always prepared",
            four:"Always faithful"
        },
        correctAns:"four"
    },
    {
        id:7,
        title: "History",
        question:"Which profitable crop began to be cultivated in the Jamestown, Virginia, colony in 1612?",
        answers:{
            one:"Cotton",
            two:"Tobacco",
            three:"Soybeans",
            four:"Corn"
        },
        correctAns:"three"
    },
    {
        id:8,
        title: "History",
        question:"Who was the sixth wife of Henry VIII?",
        answers:{
            one:"Catherine Parr",
            two:"Jane Seymour",
            three:"Catherine Howard",
            four:"Anne of Cleves"
        },
        correctAns:"four"
    },
    {
        id:9,
        title: "History",
        question:"Who was the 43rd president of the United States?",
        answers:{
            one:"George H. W. Bush",
            two:"George W. Bush",
            three:"Bill Clinton",
            four:"Jimmy Carter"
        },
        correctAns:"three"
    },
    {
        id:10,
        title: "History",
        question:"Which side did Mary Todd Lincoln's family support during the Civil War?",
        answers:{
            one:"Free-Soilers",
            two:"Confederacy",
            three:"Border states",
            four:"Union"
        },
        correctAns:"four"
    },
    {
        id:1,
        title: "JavaScript",
        question:"1. Inside which HTML element do we put the JavaScript?",
        answers:{
            one:"<scripting>",
            two:" <javascript>",
            three:" <script>",
            four:" <js>"
        },
        correctAns:"three"
    },
    {
        id:2,
        title: "JavaScript",
        question:'2. What is the correct JavaScript syntax to change the content of the HTML element below? ' +
        '<p id="demo">This is a demonstration.</p>',
    answers:{
    one:'document.getElementById("demo").innerHTML = "Hello World!";',
        two:'document.getElement("p").innerHTML = "Hello World!";',
        three:'#demo.innerHTML = "Hello World!";',
        four:'document.getElementByName("p").innerHTML = "Hello World!";'
},
correctAns:"one"
},
{
    id:3,
        title: "JavaScript",
    question:"3. Where is the correct place to insert a JavaScript?",
    answers:{
    one:"The <head> section",
        two:" The <body> section",
        three:" Both the <head> section and the <body> section are correct",
        four:" The <script> section",
},
    correctAns:"three"
},
{
    id:4,
        title: "JavaScript",
    question:'4. What is the correct syntax for referring to an external script called "xxx.js"?',
    answers:{
    one:'<script src="xxx.js">',
        two:'<script href="xxx.js">',
        three:'<script name="xxx.js">',
        four:'<script lol="xxx.js">'
},
    correctAns:"one"
},
{
    id:5,
        title: "JavaScript",
    question:"5. The external JavaScript file must contain the <script> tag.",
    answers:{
        one:"True",
        two:"False",
        three:"I don't know",
        four:"Both"
},
    correctAns:"two"
},
{
    id:6,
        title: "JavaScript",
    question:'6. How do you write "Hello World" in an alert box?',
    answers:{
    one:'alert("Hello World");',
        two:' msgBox("Hello World");',
        three:' msg("Hello World");',
        four:' alertBox("Hello World;");'
},
    correctAns:"one"
},
{
    id:7,
        title: "JavaScript",
    question:"7. How do you create a function in JavaScript?",
    answers:{
    one:"function myFunction()",
        two:" function:myFunction()",
        three:" function = myFunction()",
        four:" myFunction()"
},
    correctAns:"one"
},
{
    id:8,
        title: "JavaScript",
    question:"8. How to insert a comment that has more than one line?",
    answers: {
        one: "<--This comment has more than one line-->",
        two: "/*This comment has\n" +
        "    //    more than one line*/",
        three: "//This comment has\n" +
        "    //     more than one line//",
        four: "/*This comment has\n" +
        "    //    more than one line*/"
    },
    correctAns:"two"
},
{
    id:9,
        title: "JavaScript",
    question:"9. How to write an IF statement in JavaScript?",
    answers:{
    one:"if (i == 5)",
        two:" if i = 5 then",
        three:" if i == 5 then",
        four:" if i = 5"
},
    correctAns:"one"
},
{
    id:10,
        title: "JavaScript",
    question:"10. How to write an IF statement for executing some code if is NOT equal to 5?",
    answers:{
    one:"if (i != 5)",
        two:" if (i <> 5)",
        three:" if i =! 5 then",
        four:" if i <> 5"
},
    correctAns:"one"
},




];


exports.questions_info = question_info;
},{}],2:[function(require,module,exports){
/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    // var PizzaMenu = require('./pizza/PizzaMenu');
    // var PizzaCart = require('./pizza/PizzaCart');
    // var Pizza_List = require('./Pizza_List');
    // var OrderValidation = require('./pizza/PizzaValidationForm');
    // //var GoogleCart=require('./pizza/GoogleMap');
    //
    // PizzaCart.initialiseCart();
    // PizzaMenu.initialiseMenu();


    var AllQuestions=require('./Questions');
    var Question=require('./pizza/Question');
    var TestDefine=require('./pizza/TestDefine');
    var Results=require('./pizza/Results');
    function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        console.log("Max loh");
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    if(window.location.href=='http://localhost:5050/Naruto/Frontend/www/questionRender.html'){
        Question.showQuestions;

    }
});
},{"./Questions":1,"./pizza/Question":3,"./pizza/Results":4,"./pizza/TestDefine":5}],3:[function(require,module,exports){

$(document).ready(function() {
   var naruto=require('../Questions');
   var howManyCorrectAns=0;
    var whichQuestion=1;
    var $pole=$('.inserQuestion');
    var ONE_ROW_HTML=$(".wrapperForQuestion").html();
    var list=naruto.questions_info;
    var testLength=localStorage.getItem('testLength');
    var test=localStorage.getItem('test');
    function showQuestions() {
        var counter=1;
        list.forEach(function (t) {
            if(t.id.toString()==whichQuestion&&test==t.title){


                showOneQuestion(t);
            }

            counter++;

        })
    }


    function showOneQuestion(question) {
        var $node=$(ONE_ROW_HTML);
        var prbar = document.getElementById("progbar");
        $node.find(".question").text(question.question);
        $node.find('.progress').text(question.id+"/"+testLength);
        $node.find('#progbar').text((question.id *100)/testLength+"%");
        //prbar.style.width = (question.id *100)/testLength+'%';
        $node.find('.opt1').text(question.answers.one);
        $node.find('.opt2').text(question.answers.two);
        $node.find('.opt3').text(question.answers.three);
        $node.find('.opt4').text(question.answers.four);

        $node.find('.next').click(function () {
            whichQuestion++;
            $("input[name='radioName']:checked").val();
            var ans=$node.find("input[name='exampleRadios']:checked").val();
            if(ans==question.correctAns){
                howManyCorrectAns++;
            }
            $node.hide();
            if(testLength==question.id){
                localStorage.setItem('rightAns',howManyCorrectAns);
                window.location='http://localhost:5050/Naruto/Frontend/www/results.html';
            }
            showQuestions();
            // $node.find('.prev').enable();

        });
        $node.find('.prev').click(function () {
            if (whichQuestion > 1) {
                whichQuestion--;
            }
            if(whichQuestion===1){

            }
            $node.hide();

            showQuestions();


        });
        if(question.answers.one==undefined){
            $node.find('.input1').hide();
            $node.find('.opt1').hide();
        }
        else{
            $node.find('.opt1').show();
            $node.find('.input1').show();
        }
        if(question.answers.two==undefined){
            $node.find('.opt2').hide();
            $node.find('.input2').hide();
        }
        else {
            $node.find('.opt2').show();
            $node.find('.input2').show();
        }
        if(question.answers.three==undefined){
            $node.find('.input3').hide();
            $node.find('.opt3').hide();
        }
        else {
            $node.find('.opt3').show();
            $node.find('.input3').show();
        }
        if(question.answers.four==undefined){
            alert("opt4 hidden");
            $node.find('.opt4').hide();
            $node.find('.input4').hide();
        }
        else{
            $node.find('.input4').show();
            $node.find('.opt4').show();
        }
        $node.show();
        $node.appendTo($pole);


    }

    exports.showQuestions=showQuestions();
});


},{"../Questions":1}],4:[function(require,module,exports){

    var Question=require('./Question');
    var correct=localStorage.getItem('rightAns');
    var length=localStorage.getItem('testLength');

    if(window.location.href=='http://localhost:5050/Naruto/Frontend/www/results.html'){
        showRes();
    }
    
    function showRes() {

        $('#colored').text(correct+" out of "+length);
        if(correct > 7){
            document.getElementById("colored").style.color = "green";
        }else if(correct >4 && correct<7){
            document.getElementById("colored").style.color = "yellow";
        }else if(correct <4){
            document.getElementById("colored").style.color = "red";
        }
    }


},{"./Question":3}],5:[function(require,module,exports){

var quest=require('../Questions');

$('.naruto').click(function () {
    localStorage.setItem('test',"Naruto");
    window.location='http://localhost:5050/Naruto/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
})

$('.psycho').click(function () {
   localStorage.setItem('test',"History");
    window.location='http://localhost:5050/Naruto/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
});


$('.prots').click(function () {

    localStorage.setItem('test',"JavaScript");
    window.location='http://localhost:5050/Naruto/Frontend/www/questionRender.html';
    countHowManyQuestionsInTest();
});


function countHowManyQuestionsInTest() {
    var list=quest.questions_info;
    var test=localStorage.getItem('test');
    var counter=0
    list.forEach(function (t) {
        if(t.title==test){
            counter++;
        }
    })
    // alert(counter);
     localStorage.setItem('testLength',counter);
}
},{"../Questions":1}]},{},[2]);
