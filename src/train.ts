console.log("This is the train.ts file");
console.log('Bugungi MIT-Task natijasi: ');

/*TASK-ZK:

Shunday function yozing, u har soniyada bir marta consolega 
1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers() */
function printNumbers(): void {
  let i = 1;
  const timer = setInterval(() => {
    console.log(i);
    if (i === 5) {
      clearInterval(timer);
    }
    i++;
  }, 1000);
}

// ishlatish
printNumbers();
// TASK ZJ:

// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

// function reduceNestedArray(arr: (number | (number | number[])[])[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       // agar ichida yana array bo‘lsa rekursiv chaqiramiz
//       sum += reduceNestedArray(item as (number | number[])[]);
//     } else {
//       // oddiy number bo‘lsa qo‘shamiz
//       sum += item;
//     }
//   }

//   return sum;
// }

// // Test
// console.log(reduceNestedArray([1, [1, 2, [4]]])); // 8
// console.log(reduceNestedArray([10, [5, [2, 3]], 1])); // 21



/*Shundan function yozing, bu function 3 soniydan so'ng "Hello World!" 
so'zini qaytarsin. MASALAN: delayHelloWorld("Hello World"); return "Hello World"; */

// function delayHelloWorld(str: string): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(str);
//     }, 3000); // 3 soniya
//   });
// }

// // ishlatish
// delayHelloWorld("Hello World!").then((res) => {
//   console.log(res); // 3 soniyadan keyin "Hello World!" chiqadi
// });

/**TASK-ZH:

Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6] */


// function findDisappearedNumbers(arr: number[]): number[] {
//   if (arr.length === 0) return [];

//   const maxNum = Math.max(...arr); // eng katta raqam
//   const set = new Set(arr);       // tezroq qidirish uchun Set
//   const missing: number[] = [];

//   for (let i = 1; i <= maxNum; i++) {
//     if (!set.has(i)) {
//       missing.push(i);
//     }
//   }

//   return missing;
// }

// // Test
// console.log(findDisappearedNumbers([1, 3, 4, 7])); // [2, 5, 6]
// console.log(findDisappearedNumbers([2, 5, 6]));    // [1, 3, 4]
// console.log(findDisappearedNumbers([]));           // []


// function toSnakeCase(input: string): string {
//   return input
//     .trim() // boshidagi va oxiridagi bo'sh joylarni olib tashlash
//     .toLowerCase() // hamma harflarni kichik qilish
//     .replace(/\s+/g, "_"); // bo'sh joylarni pastki chiziq (_) bilan almashtirish
// }

// // Test
// console.log(toSnakeCase("name should be a string")); 
// // 👉 "name_should_be_a_string"

// console.log(toSnakeCase("   Hello World   ")); 
// // 👉 "hello_world"z z

// TASK-ZF:

// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(str: string): string {
//   return str
//     .split(" ")
//     .map(word => {
//       // agar so'z uzunligi 1 yoki 2 bo'lsa, o'zgartirmay qaytar
//       if (word.length <= 2) {
//         return word;
//       }
//       // bosh harfni katta qilish
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// // Test
// console.log(capitalizeWords("name should be a string")); 
// // Output: "Name Should be a String"

// console.log(capitalizeWords("i am here to go on a trip"));
// // Output: "i Am Here to Go on a Trip"


// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// // Misollar:
// console.log(celsiusToFahrenheit(0));   // 32
// console.log(celsiusToFahrenheit(10));  // 50
// console.log(celsiusToFahrenheit(25));  // 77


/*ASK-ZB: Shunday function yozing, uni 2 ta number
 parametri bolsin va berilgan sonlar orasidan random raqam return qilsin 
 MASALAN: randomBetween(30, 50) return 45. 
*/


// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Misol:
// console.log(randomBetween(30, 50));



// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// function sumEvens(arr: number[]): number {
//   let sum: number = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// // Test
// console.log(sumEvens([1, 2, 3]));      // 2
// console.log(sumEvens([1, 2, 3, 2]));   // 4


/** TASK Y

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.*/

// function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);

//   // Filter elements that are in both sets
//   return [...set1].filter(item => set2.has(item));
// }

// // Example usage:
// console.log(findIntersection([1, 2, 3], [3, 2, 0])); // Output: [2, 3]
// console.log(findIntersection(["apple", "banana"], ["banana", "cherry"])); // Output: ["banana"]




/*TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda*/ 

    // function countOccurrences(obj: any, targetKey: string): number {
    //     let count = 0;

    //     function recursiveCount(current: any) {
    //         if (typeof current === 'object' && current !== null) {
    //             for (const key in current) {
    //                 if (key === targetKey) {
    //                     count++;
    //                 }
    //                 recursiveCount(current[key]);
    //             }
    //         }
    //     }

    //     recursiveCount(obj);
    //     return count;
    // }

    // // Test
    // const data = {
    //     model: 'Bugatti',
    //     steer: {
    //         model: 'HANKOOK',
    //         size: 30
    //     }
    // };

    // console.log(countOccurrences(data, 'model')); // Output: 2

















/**TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti */


// function chunkArray<T>(array: T[], size: number): T[][] {
//   const result: T[][] = [];

//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }

//   return result;
// }

// // Test qilish
// const test = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(test); // [[1,2,3],[4,5,6],[7,8,9],[10]]




/*
 TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.*/

// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};

//   for (const char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// // Misol
// console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }


// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.    

// function sumOdds(n: number): number {
//   let count = 0;
//   for (let i = 1; i < n; i += 2) {
//     count++;
//   }
//   return count;
// }

// // Testlar
// console.log(sumOdds(9));  // 4 → 1, 3, 5, 7
// console.log(sumOdds(11)); // 5 → 1, 3, 5, 7, 9


/*TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. */


/*TASK-S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2*/


// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((acc, val) => acc + val, 0);
//   return expectedSum - actualSum;
// }
// console.log(missingNumber([3, 0, 1])); // 2

// function calculate(expression: string): number {

//   const parts = expression.split('+').map(part => part.trim());


//   const numbers = parts.map(Number);


//   return numbers[0] + numbers[1];
// }


// console.log(calculate("1 + 3")); // 4
// console.log(calculate("10 + 25")); // 35




/**TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda. */

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }


// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false

// // TASK P:

// // Parametr sifatida yagona object qabul qiladigan function yozing.
// // Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// // MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }
// console.log(objectToArray({ a: 10, b: 20 }));


// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.


// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }
// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); // 45

/*TASK N:

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;*/
// function palindromCheck(str: string): boolean {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false
/**TASK M: 

Shunday function yozing, u raqamlardan tashkil
 topgan array qabul qilsin va array ichidagi har bir raqam
  uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil
   topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1},
 {number: 2, square: 4}, {number: 3, square: 9}]; */



// function getSquareNumbers(arr: number[]) {
//   return arr.map(num => ({
//     number: num,
//     square: num * num
//   }));
// }
// console.log(getSquareNumbers([1, 2, 3, 4, 5]));

/*Project standards:
-Logging standards
-Naming standards:
    function, variable, method => CAMEL
    class                      =>PASCAL
    folder, file               =>KEBAB
    css                        =>SNAKE */

    /*  
    request join
    self-destroy
    */

/*TASK L: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";*/ 


// function reverseSentence(s: string): string {
//   const words: string[] = s.split(' ');
//   const reversedWords: string[] = words.map(word => word.split('').reverse().join(''));
//   return reversedWords.join(' ');
// }

// // Test
// console.log(reverseSentence("we like coding!")); // chiqishi: "ew ekil !gnidoc"




/*TASK K: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;*/
// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU"; 
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }  
//   return count;
// }
// console.log(countVowels("I came from Uzbekistan!")); // => 8



// function findLongestWord(str: string): string {
  
//   let words = str.split(" ");

  
//   let longestWord = "";

 
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("I came from Uzbekistan!")); // => "Uzbekistan!"
/*
TASK-I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.*/
// function majorityElement(arr: number[]): number {
//   const count: { [key: number]: number } = {};

//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   let maxNum = arr[0];
//   let maxCount = 0;

//   for (const num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = Number(num);
//     }
//   }

//   return maxNum;
// }
 
// console.log(majorityElement([2,3,5,23,23,23,1,48,48,75,75,]))




/*TASK HH2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

MASALAN: getDigits("m14i1t") return qiladi "141"*/
// function getDigits(str: string): string {
//     let result = "";
//     for (let char of str) {
//         if (!isNaN(Number(char)) && char !== " ") {
//             result += char;
//         }
//     }
//     return result;
   
// }

// console.log(getDigits("i am 24 years old"));





/*TASK H: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib,
 faqat positive qiymatlarni olib string holatda return qilsin

MASALAN: getPositive([1, -4, 2]) return qiladi "12"*/

//Solution:

// function getPositive(arr: number[]) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         console.error("Iltimos, array kiriting.");
//         return false; 
//     }
//     let positiveValues: number[] = arr.filter(num => num > 0);
//     return positiveValues.join('');
// }
// console.log(getPositive([-9, 25, 2])); 







/*TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.*/

/*function getHighestIndex(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.error("Iltimos, array kiriting.");
        return false; 
    }

    let highestValue = arr[0];
    let highestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highestValue) {
            highestValue = arr[i];
            highestIndex = i;
        }
    }

    return highestIndex;
}

console.log(getHighestIndex([12])); */
