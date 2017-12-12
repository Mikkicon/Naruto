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
    if(window.location.href=='http://localhost/mysite.local/www/Naruto/Frontend/www/questionRender.html'){
        Question.showQuestions;

    }
});