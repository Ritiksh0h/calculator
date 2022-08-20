let display = [];
let numDisplay = [];
let opDisplay = [];
let result = [];

$("button").click(function(){
    display.push(this.value);
    $(".cal-display").html(display);
    return display;
})

$(".key--equal").click(function(){
    let finalResult = eval(display.join(""));
    result.push(finalResult);
    $(".cal-display").html(result);
    console.log(result);
    result = [];
    return result;
})

$(".clear").click (function(){
    display = [];
    opDisplay = [];
    numDisplay = [];
    $(".cal-display").html("0");
    return numDisplay + opDisplay + display;   
})

 // footer
 var cpYear = document.getElementById("cp-date");
 var d = new Date();
 var year = d.getFullYear()

 cpYear.innerHTML = year;