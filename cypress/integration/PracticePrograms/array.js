

// forEach() Method : Iterate through all the elements of an array
let array = [1,3,4,5,6,89,9]
array.forEach(function(Element)
{
    console.log(Element)
})

// map method: executes on every element of an array and returns  new array
let array1 = [1,23,4,56,78,9,0]
let doubledArray = array1.map(item1 => item1*2)
console.log(doubledArray)


// map() function with array of objects
const products = [{name:'Iphone',price:1000, count:'2'},
                  {name: 'samsung',price:2000, count:3},
                  { name:'poco', price: 500, count: 2}];
const totalProductvalue = products.map(prod => prod.price * prod.count)
console.log(totalProductvalue)


let totalProductsValue =0
totalProductvalue.forEach(productValue => totalProductsValue += productValue)
console.log(totalProductsValue)

//FilterMethod: Creates a new array with all elements which satisfies the condition
// finding an array of even numbers in an array
let strinArray =['1','2','3','4']
let evenArray = strinArray.filter(eachItem => eachItem%2===0)
console.log(evenArray)

//remove duplicates in a string
let Myname = 'chetanachar'
let arrayName = Myname.split('')
console.log(arrayName)
let removeDupChar = arrayName.filter((ele,index,arr) =>{
    return arr.indexOf(ele)=== index;
})
console.log(removeDupChar.join(''))

//products price more than 500
const mobileProducts = [{name:'Iphone',price:1000, count:'2'},
                  {name: 'samsung',price:2000, count:3},
                  { name:'poco', price: 500, count: 2}];
                  let morethan500 = mobileProducts.filter(eachMobile => eachMobile.price > 500)
                  console.log(morethan500)

//count of accurance of an element in an array

const inputString = "hello world";
const targetString = inputString.split('')
console.log(targetString)
const targetEle ='l'
let count =0;
for(each in targetString){
    if(targetEle === each){
        count ++;
    }
    console.log(count)
}

// Create an object to store the count of each character
const charCount = {};

// Iterate through each character in the string
for (const char of inputString) {
  // Increment the count for each character in the object
  charCount[char] = (charCount[char] || 0) + 1;
}

// Output the character count object
console.log(charCount);

                