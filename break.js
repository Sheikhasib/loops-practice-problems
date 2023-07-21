/* for(i = 1; i <= 20; i++){
    console.log(i);
    if(i > 9){
        break;
    }
} */

/* var roastGiven = 0;
while(roastGiven < 7){
    console.log('Roast na dile khobor ache!!');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
} */

/* var items = ['glass', 'bottle', 'chair', 'watch', 'cats', 'dogs'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'watch'){
        break;
    }
    console.log(item);
} */

var numbers = [45, 21, 36, 78, 89, 64, 47, 104, 35, 67]; 

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}