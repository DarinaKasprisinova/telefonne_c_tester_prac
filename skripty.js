function phoneNrsAreEqual(nr1, nr2) {
  nr1 = nr1.replace(/ /g, "");
  nr2 = nr2.replace(/ /g, "");
  nr1 = nr1.replace(/-/g, "");
  nr2 = nr2.replace(/-/g, "");
  nr1 = nr1.replace(/\//g, "");
  nr2 = nr2.replace(/\//g, "");

  function cutNum(num) {
    if (num[0] === "+") {
      return num.slice(4, num.length)
    } else if (num[0] === "0" && num[1] === "0" && num.length > 12) {
      return num.slice(5, num.length)
    } else {
      return num.slice(1, num.length)
    }
  }

  nr1 = cutNum(nr1)
  nr2 = cutNum(nr2)

 // reg = /^\d{9}$/

 /* if (reg.test(nr1) && reg.test(nr2) !== true) {
    return "Jedno z telefónnych čísel nespadá do definície slovenského telefónneho čísla. Prosím skontrolujete obe vstupy!"
  } else */ if (nr1 === nr2) {
    return true
  } else {
    return false
  }

}


// console.log(phoneNrsAreEqual(window.prompt("prve test cislo"), window.prompt("druhe test cislo"))) 
// ^  ^  ^ možnosť vložiť ľubovoľné 2 čísla odkomentujte ak máte záujem ^ ^ ^ 
console.log(phoneNrsAreEqual("+421 940 188 706", "0940 188 706"))
console.log(phoneNrsAreEqual("+421 940 188 706", "0940/188/706"))
console.log(phoneNrsAreEqual("+421 940 188 706", "0940-188-706"))
console.log(phoneNrsAreEqual("+421 940 188 706", "0940 188 777"))
console.log(phoneNrsAreEqual("+421 940 188 777", "00421 940 188 777"))
console.log(phoneNrsAreEqual("+421 940 188 706", "0940 aaa 706"))
console.log(phoneNrsAreEqual("+421 940 aaa 706", "0940 aaa 706"))
console.log(phoneNrsAreEqual("+421 517 752 686", "051/7752686"))



