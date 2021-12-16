let sportOne: string[] = ["Golf", "football", "skateboard", "Gun shooting"];

// Traditional loops
// for (let i=0; i<sportOne.length; i++) {
//     console.log(sportOne[i]);
// }

for (let tempSport of sportOne) {

  if (tempSport == "skateboard") {
    console.log(tempSport + " << My Favorite!");
  } 
  else {
    console.log(tempSport);
  }
}
