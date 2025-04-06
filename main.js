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
