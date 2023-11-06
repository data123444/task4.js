
//1.მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)

let stringVelue = `12345` ;
let stringValueArray = stringVelue.split("");
let sum = 0 ;

stringValueArray.forEach(item => sum += parseInt(item));
console.log(sum);

//2 მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები;
let array1 =["hello1", 14,24, "hello2"];
let newArray1 = array1.filter((item) => typeof item == "number")
console.log(newArray1);
//3მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
//შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray2 = array2.map(item => {
    if ( typeof item == "number") {
        return item * item;
    }
    else if (typeof item == "string") {
        return item.toUpperCase();
    }
    return item;
})
console.log(newArray2);


// 4. მოცემულია სტრინგი: let info= ‘Good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით.
let info= 'Good day';
console.log(info.slice(4));
//5დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.
function getStringLength(str){
    return str.length;
}
let text = ("hello, world");
let length = getStringLength(text)
console.log(length);
//6Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.
let userAnswer = prompt("Capital of Georgia")
let correct = "tbilisi"
let lowerCseAnswer = userAnswer.toLowerCase();
if (lowerCseAnswer == correct){
    console.log("sworia");
}else {
    console.log(arasworia);
}
//7
let link = "https://google.com";
function http(element){
    let item = element.indexOf("https:");
    if (item == -1){
        console.log('araswor');
    }
    else{
        console.log('sworia');
    }
}
http(link)
//8
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(fruits.length - 1, 1, "strawberry");
console.log(fruits);
//9
let myArray = [5, 25, 89, 120, 36];
myArray.unshift("html");
myArray.unshift("css");
console.log(myArray.length);
//10
let myArray4 = ["ფორთოხალი", "ბანანი", "მსხალი"];
console.log("ელემენტების რაოდენობა:", myArray.length);
myArray4.push("ვაშლი", "ანანასი");myArray4.unshift("საზამთრო");
console.log("ელემენტების რაოდენობა:", myArray4.length);
myArray4.splice(2, 0, "მანგო");
myArray4.shift();
myArray4.pop();
console.log("ელემენტების რაოდენობა:", myArray.length);
//11
let array9 = [1, 2, 3, 4, 5];
array9.splice(3, 0, 'a', 'b', 'c');
//12 .. მოცემულია მასივი:

//Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
let arr = [1, 2, 3, 4, 5];
let sum1 = 0 ;
arr.forEach(function(number){
    sum1 += number;
}
);
console.log(sum1);
let array = [2, 15, 10, 24];
let indexToRemove = array.indexOf(10);
//13..... მოცემულია მასივი:
myArray.push("javascript", "python");
//Let  array = [12, 25, 3, 6, 8, 14, 7, 23];
//map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
let numbersArray = [12, 25, 3, 6, 8, 14, 7, 23];
let newnumbersArray = numbersArray.map(function(x){
    return x / 3;
})
console.log(newnumbersArray);
//14
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filteredLanguages = languages.filter(function(language) {
    return language.length > 3;
});

console.log(filteredLanguages);
//15
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let filteredWords = words.filter(function(word) {
    return word.toLowerCase().includes('m');
});

console.log(filteredWords);
//16
let arr2 = [-1, -2, -3, 4];

let isPositive = arr2.some(function(number) {
    return number > 0;
});

console.log(isPositive);
//17
let arrayNew = [2, 15, 10, 24];
let lastResult = arrayNew.splice(2, 1);
console.log(arrayNew);