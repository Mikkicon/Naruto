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
        console.log("Miqa loh");
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    if(window.location.href=='http://localhost:5050/Naruto/Frontend/www/questionRender.html'){
        Question.showQuestions;

    }
});