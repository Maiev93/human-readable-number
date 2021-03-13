module.exports =  function toReadable (number) {
    let ones = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero',
  }
    let teens = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
  }
    let dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    } 
    let hundreds = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
    }     
    let oneNum;
    let teenNum;
    let dozenNum;
    let hundredNum;

   for (value in teens) {
      if (value == number % 100) {
          teenNum = teens[value];   
      }
  }  
  for (value in ones) {
       if (value == number % 10) {
          oneNum = ones[value];
      } 
    }  
  for (value in dozens) {
       if (value == Math.floor((number % 100) / 10)) {
          dozenNum = dozens[value];
      }
  } 
  for (value in hundreds) {
      if (value == Math.floor(number / 100)) {
         hundredNum = hundreds[value];
      }
  } 
  if (number >= 0 && number < 10) {
    console.log(oneNum);
    return oneNum; 
  } else if (number > 9 && number < 20) {
      console.log(teenNum);
      return teenNum;
  } else if (number > 19 && number < 100) {
      if (number % 10 == 0) {
        return dozenNum;
      } else {
         return dozenNum + ' ' + oneNum; 
      }      
  } else if (number < 1000 && number > 99) {
      if (number % 100 == 0) {
          return hundredNum;
      } else if (number % 100 < 20 && number % 100 > 9) {
          return hundredNum + ' ' + teenNum;  
      } else if (number % 10 == 0) 
      {
        return hundredNum + ' ' + dozenNum;
      } else if (Math.floor((number % 100) / 10) == 0) {
          return hundredNum + ' ' + oneNum;
      } else {
           return hundredNum + ' ' + dozenNum + ' ' + oneNum;
      }         
  }
}