$(document).ready(function () {
    $("#calculator").append('<div class="container"></div>');
    $(".container").append('<div class="item_input"></div>');
    $(".item_input").append('<form name="form" class="forma"></form>');
    $(".forma").append('<input type="text" name="textview" readonly>');
    $(".container").append('<div class="item clean" onclick="clean()">C</div>');
    $(".container").append('<div class="item back" onclick="back()"><</div>');
    $(".container").append('<div class="item" onclick="insert(`^`)">^</div>');
    $(".container").append('<div class="item" onclick="insert(`+`)">+</div>');
    $(".container").append('<div class="item" onclick="insert(`-`)">-</div>');
    $(".container").append('<div class="item" onclick="insert(`*`)">&times;</div>');
    $(".container").append('<div class="item" onclick="insert(`/`)">&divide;</div>');
    $(".container").append('<div class="item" onclick="insert(`7`)">7</div>');
    $(".container").append('<div class="item" onclick="insert(`8`)">8</div>');
    $(".container").append('<div class="item" onclick="insert(`9`)">9</div>');
    $(".container").append('<div class="item" onclick="insert(`√`)">√</div>');
    $(".container").append('<div class="item" onclick="insert(`4`)">4</div>');
    $(".container").append('<div class="item" onclick="insert(`5`)">5</div');
    $(".container").append('<div class="item" onclick="insert(`6`)">6</div>');
    $(".container").append('<div class="item" onclick="insert(`%`)">%</div>');
    $(".container").append('<div class="item" onclick="insert(`1`)">1</div>');
    $(".container").append('<div class="item" onclick="insert(`2`)">2</div>');
    $(".container").append('<div class="item" onclick="insert(`3`)">3</div>');
    $(".container").append('<div class="item equal" onclick="equal()">=</div>');
    $(".container").append('<div class="item zero" onclick="insert(`0`)">0</div>');
    $(".container").append('<div class="item" onclick="insert(`.`)">.</div>');
});
function insert(num) {
    if ( num== "1" || num== "2" || num== "3"|| num== "4" || num== "5"  || num== "6"  || num== "7" || num== "8" || num== "9" || num== "." || num== "0"){
        document.form.textview.value += num;
    }
    else
        document.form.textview.value += " " + num + " ";
 }
 function clean() {
    document.form.textview.value = "";
 }
 function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
 }

 function equal() {
     var num = document.form.textview.value;
     if(num){
         var nume = num.split(" ");
         let tum;
         if (nume[1] == "+"){
            tum = Number(nume[0])+Number(nume[2]);
            document.form.textview.value = tum;
         }
         if (nume[1] == "-"){
            tum = Number(nume[0])-Number(nume[2]);
            document.form.textview.value = tum;
         }
         if (nume[1] == "*"){
            tum = Number(nume[0])*Number(nume[2]);
            document.form.textview.value = tum;
         }
         if (nume[1] == "/"){
            tum = Number(nume[0])/Number(nume[2]);
            document.form.textview.value = tum;
         }
         if (nume[1] == "%"){
            tum = Number(nume[0])%Number(nume[2]);
            document.form.textview.value = tum;
         }
         if (nume[1] == "^"){
            tum = Number(nume[0])**Number(nume[2]);
            document.form.textview.value = tum;
         }
         if (nume[1] == "√"){
            tum = Number(nume[2])**(1/Number(nume[0]));
            document.form.textview.value = tum;
         }
     }
 }
