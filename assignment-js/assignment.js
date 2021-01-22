


// Code for kilometerToMeter
function kilometerToMeter(kilo){
    if(kilo>0){
        var meter = kilo*1000;
    return meter;
    }
    else{
        return "You have put an invalid number.";
    }
}
var result = kilometerToMeter(2);
console.log(result);



// Code for budgeCalculator
function budgetCalculator(watch, phone, laptop){
    if(watch>0 && phone>0 && laptop>0){
        var costForWatch = watch * 50;
    var costForPhone = phone * 100;
    var costForLaptop = laptop * 500;
    var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
    }
    else{
        return "Invalid amount."
    }
}
var totalBudget = budgetCalculator(5, 30, 5);
console.log(totalBudget);


// code for hotelCost
function hotelCost(stayingDays){
    var cost = 0;
    if(stayingDays<=10){
        cost = stayingDays * 100;
    }
    else if(stayingDays<=20){
        var firstStayingDays = 10 * 100;
        var remainingDays = stayingDays - 10;
        var secondStayingDays = remainingDays * 80;
        var cost = firstStayingDays + secondStayingDays;
    }
    else{
        var firstStayingDays = 10 * 100;
        var secondStayingDays = 10 * 80;
        var remainingDays = stayingDays - 20;
        var thirdStayingDays = remainingDays * 50;
        var cost = firstStayingDays + secondStayingDays + thirdStayingDays;
    }
    return cost;
}
var totalCost = hotelCost(21);
console.log(totalCost);


//code for megaFriend
var friends = ["Raihan", "Nuruzzaman", "Keya", "Tanvir"]
function megaFriend(strs) {
    var longest = '';
    for (var i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
    }
    return longest;
    }
   var longestWord = megaFriend(friends);
   console.log(longestWord);





