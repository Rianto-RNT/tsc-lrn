var sportOne = ["Golf", "football", "skateboard", "Gun shooting"];
// Traditional loops
// for (let i=0; i<sportOne.length; i++) {
//     console.log(sportOne[i]);
// }
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    if (tempSport == "skateboard") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
