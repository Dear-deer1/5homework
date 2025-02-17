document.addEventListener("DOMContentLoaded", function(){

    let count = 0;
    const but = document.getElementById("but");
    const click = document.getElementById("click");

    but.addEventListener ("click", function(){
 
        count += 1;
        click.textContent = count;

        if(count >= 8){
            but.disabled = true;
        }
});


let co = 0;
const tim = document.getElementById ("timer");
const interval = setInterval( function (){
    co +=1;
    tim.textContent = co;

    if(co >=10){
        clearInterval(interval);
    }

}, 1000);

let ct = 0;
let intervalic; 

const tm = document.getElementById ("tm");

const sb = document.getElementById ("sb");
const st = document.getElementById ("st");
const res = document.getElementById ("res");

sb.addEventListener("click", function(){
if(!intervalic){
    intervalic = setInterval (function(){
        ct++;
        tm.textContent = ct;
    }, 1000);
};
});

st.addEventListener ("click", function(){
    clearInterval (intervalic);
    intervalic = null;
});


res.addEventListener ("click", function(){
clearInterval  (intervalic);
intervalic = null;
ct = 0;
tm.textContent = ct;

});


});