const temperatyra = "3";
if (temperatyra < 0) {
    console.log("ПИздец как холодно");
}
    else if (temperatyra >= 0 && temperatyra <=5) {
        console.log("Прохладно так плюс минус");
}
     else if  (temperatyra >= 5 && temperatyra <= 20) {
        console.log("Тепло братка");
    }
    else (
        console.log("Тепло")
    )

    const chek = "5000";
    if (chek<1000){
        console.log("1000")
    }
    else if (chek=>1000){
        console.log(chek - (chek*5/100));
    }
    else if (chek=>5000){
        console.log(chek-(chek*10/100));
    }
const vozrast = "70";
if (vozrast < 0) {
   console.log("Укажите верный возраст"); 
}
else if (vozrast >=0 && vozrast <= 18 ) {
    console.log("Подросток");
}
else if (vozrast >= 18 && vozrast <=65 ) {
    console.log("Взрослый");
}
else if (vozrast > 65){
    console.log("Пенсионер");
}

const time = 1;
const opening  = 9;
const closing = 18;
if (time >= opening && time < closing ){
    console.log("Магазин открыт");
} else {
    console.log ("Магазин закрыт");
}

