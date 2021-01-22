function kilometerToMeter(kilometer){
    if(kilometer>0){
        var meter = kilometer * 1000;
        return meter ;
    }
    else{
        return "Kilometer will be positive number value";
    }
}
    var totalMeter = kilometerToMeter(50);
    console.log(totalMeter);


function budgetCalculator(ghori,phone,laptop){
    if(ghori%1==0 && phone%1==0 && laptop%1==0 && ghori>0 && phone>0 && laptop>0){
        var ghori = ghori*50;
        var phone = phone*100;
        var laptop = laptop*500;
        var total = ghori + phone + laptop;
        return total;
    }
    else{
        return 'its a positive integer number';
    }
}    
    var totalPrize = budgetCalculator(5,10,10);
    console.log(totalPrize);


function hotelCost(day){
    if(day>0){
        var hotel = 0;
    if(day<=10){
        hotel = day * 100;
    }
    else if(day<=20){
        var firstpart = 10*100;
        var remaining = day - 10;
        var secondpart = remaining*80;
        hotel = firstpart + secondpart;
    }
    else{
        var firstpart = 10*100;
        var secondpart = 10*80;
        var remaining = day - 20;
        var thirdpart = remaining*50;
        hotel = firstpart+secondpart+thirdpart;
    }
    return hotel;
    }
    else{
        return 'its error';
    }
}
    var total = hotelCost(30);
    console.log(total);


function megeFriend(friends){
    var max = friends[0];
    for(var i=0; i<friends.length; i++){
        var element = friends[i];
        if(element.length > max.length){
            max = element;
            return max;
        }
        
    }
}
    var friends = ['Afzal','Mia Khalifa','Hridoy','sany'];
    var highestLength = megeFriend(friends)
    console.log(highestLength);
    