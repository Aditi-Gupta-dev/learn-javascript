let nam = "   meranamhaikuchbhi   ";
// console.log(nam[nam.length - 1]);

/*
-trim()=> return a new string with no extra space

-toUpperCase()=> changes aphabets to upper case and gives a new string
-toLowerCase()

-slice(start idx,end idx) =>returns the new string from start to end (end not included)
*/

// === trim() ====
// console.log(nam);
// console.log(nam.trim());

// change_nam = nam.trim();
// console.log(change_nam);

//======= toUpperCase()====

// let upperstr = nam.toUpperCase();
// console.log(upperstr);
// let lowerstr = upperstr.toLowerCase();
// console.log(lowerstr);

// ==== slice() =====

// let substr = nam.slice(0, -8);
// console.log(substr);

// *************** String to Number *************************

// let age = "22";
// console.log(typeof age);
// console.log(typeof +age);
// console.log(typeof Number(age));

// ********************* stirng concatination ************

//sting ke baad kuch bhi add kro to sting me automatic convert hoga or normal adition nahi hoga
// console.log("1" + "2");
// console.log("1" + 2);
// console.log("1" + 1 + 2);

// string ke pehle agar number ho to addition hoga sara number ka fir wo sum string me automatic convert hoga or string concatination hoga

// console.log(1 + 1 + 4 + "2");
// console.log(1 + 1 + "2");
// console.log(1 + "2");

// string ke aage + laga do to number ho jaega or interger valu dega
// console.log(+"2" + +"3");

/*  TEMPLATE STIRNG  */
// let fname = "aadhya";
// let age = 5;

// let about_me = `my name is ${fname} and age is ${age}`;
// console.log(about_me);

// *************************** COMAPRISON OF != && !==****************
//if an number and string are eqaul in theie value then usinh != gives true
console.log(1 != "1");
console.log(1 !== "1");
