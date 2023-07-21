var numbers = [45, 21, 36, 78, 89, 64, 47, 104, 35, 67]; 

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}