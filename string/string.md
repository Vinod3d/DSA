### 1. Find Longest word in string.

```js
const findLongestword = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  let strArr = str.split(" ");

  // FIRST

  // strArr = strArr.sort((a, b)=> a.length - b.length);
  // return strArr.at(-1);

  // SECOND
  return strArr.reduce((accum, current) =>
    current.length > accum.length ? current : accum
  );
};

console.log(findLongestword("watch Video Hoolywood series on YouTube"));
```

### 2. hastagGenerator

```js
const hasTagGenerator = (str) => {
  const string = str.trim();
  if (string.length === 0) {
    return false;
  }

  const strArr = string.split(" ");
  const hasStr = strArr.reduce((acc, curr) => {
    const capitalizer = curr.at(0).toUpperCase() + curr.slice(1);
    return acc + capitalizer;
  }, "#");
  return hasStr;
};

console.log(hasTagGenerator("my heart is pure"));
```

### 3. Count Charecter

```js
const countCharecter = (str, char) => {
  let count = 0;
  const strArr = str.split("");
  // strArr.map((item, i)=>{
  //     if(item === char){
  //         count ++
  //     }
  // })

  const countChar = strArr.reduce((accu, curr) => {
    if (curr === char) {
      accu++;
    }
    return accu;
  }, 0);

  return countChar;
  // return `${char}` + " is " +  count + " times";
};

console.log(countCharecter("Missisippi", "i"));

console.log(countCharecter("Missisippi", "i"));
```

### 4 check isPalindrom

```js
const isPalindrome = (str) => {
  let strChar = str.toLowerCase().replace(/\W/g, "");
  let reversed = strChar.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("racecar"));
```

### 5. count vovel in string

**Count Vovel**

```js
function countVovel() {
  let str = "Hello, World!";
  str.toLowerCase;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVovel());
```

**Return Vovel**

```js
function returnVovel() {
  let str = "Hello, World!";
  let varr = ["a", "e", "i", "o", "u"];
  str.toLowerCase;
  let vovel = str.split("").filter((value) => varr.includes(value));
  return vovel;
}

console.log(returnVovel());

// [ 'e', 'o', 'o' ]
```

** How many times vovel appears**

```js
function returnVovel() {
  let str = "Hello, World!";
  let varr = ["a", "e", "i", "o", "u"];
  let vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  str.toLowerCase;
  let vovel = str.split("").filter((value) => varr.includes(value));

  for (v of vovel) {
    vowelCount[v] += 1;
  }

  return vowelCount;
}

console.log(returnVovel());
```
### 6. check is Power of two.

```js
  const isPowerOfTwo = (num) =>{
      if(num <= 0){
          return false;
      }
      while(num % 2 === 0){
          num = num / 2;
      }
      return num === 1;

  }

  console.log(
      isPowerOfTwo(8)
  )
```

### 7. Change string into camel Case.

```js
  function toCamelCase(){
    let str = 'hello my friend';
    let arr = str.split(' ');
    let result = arr[0];
    for(let i = 1; i<arr.length; i++){
       result += arr[i].charAt(0).toUpperCase().padStart(2, "_") + arr[i].slice(1);
    }
    return result
  }


  console.log(
      toCamelCase()
  )
  // hello_My_Friend
```

### 8. Check char is UpperCase.

```js
  function isUpperCase(chr){
    let upper = ''
    if(chr.charCodeAt(0) >=65 && chr.charCodeAt(0) <= 90){
        return upper = 'uppercase'
    }else if (chr.charCodeAt(0) >=97 && chr.charCodeAt(0) <= 122){
        return upper = 'lowercase'
    } 
  }

  console.log(
      isUpperCase('C')
  )
```

### 9. match startwith char.

```js
  const startsWith = (str, substr) =>{
    return str.slice(0, substr.length) === substr;
}

console.log(
    startsWith('Hello world', 'Hello')
)
```

### 10. Revers the string.

```js
  function reverseStr(){
    let str = 'Vinod';
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
         reversedStr += str[i]
    }
    return reversedStr
  }

  console.log(
      reverseStr()
  )
```

### 11. reapeat String.
```js
  function repeatString(str, num){
    let result = "";
      for(let i = 0; i<num; i++){
          result +=str
      }
      return result
  }


  console.log(
      
      repeatString('abc', 5)
  )
```

### 12. truncate string.
```js
  function truncateString(str, num){
    return str.slice(0, num) + '...';
  }

  console.log(
    truncateString('Once upon a time, there was a dog who walked the streets looking for food at all hours of the day and night', 8)
  )
```

### 13. random color hex code.

```js
  const randomHexColor = ()=>{
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    }

    console.log(
        randomHexColor()
    )
```

### 14. generate bar chart.

```js
  // const generateBarChart = (arr) =>{
//     let bar = ''
//     const newArr = arr.map((currElem, index)=>{
//         console.log(`${index + 1}:  ${bar.padEnd(currElem, '*')}`)
//     })
// }

// console.log(
//     generateBarChart([5, 3, 9, 2])
// )


const generateBarChart = (arr) =>{
    const newArr = arr.map((curEle, index)=>{
        let star = "";
        let number = 0;
        while(number< curEle){
             star = star + "*";
             number++
        }
        return `${index + 1}: ${star}`;
    })

    return newArr.join("\n")
  }

  console.log(
      generateBarChart([5, 3, 9, 2])
  )
```

### 15. Shortest path.

```js
  function getShortestPath(path){
    let x = 0, y = 0;
    for(let i = 0; i<path.length; i++){
        let dir = path.charAt(i);
        if(dir == 'S'){
            y--;
        }
        else if(dir == 'N'){
            y++;
        }
        else if(dir == 'E'){
            x++;
        }
        else if(dir == 'W'){
            x--;
        }
    }

    let x2 = x*x;
    let y2 = y*y;
    let dist = Math.sqrt(x2 + y2);
    return dist;
}

const path = "WNEENESENNN";
console.log(getShortestPath(path))
```

### 16. Substring.

```js
  function getSubString(str, s, e){
      let subStr = "";
      for(let i =s; i<e; i++ ){
          subStr += str.charAt(i);
      }
      return subStr;
  }

  console.log(getSubString('HelloWorld', 2, 6));
```

### 17. get Largest Lexicographical String.

```js
  function getLargestLexicographicalString(strings) {
      strings.sort((a, b) => b.localeCompare(a));
      return strings[0];
  }

  const strings = ["apple", "banana", "orange", "mango"];
  const largestString = getLargestLexicographicalString(strings);
  console.log("Largest Lexicographical String:", largestString);
```

### 18. String builder.

```js
  class StringBuilder {
    constructor() {
        this.strings = [];
    }

    append(value) {
        this.strings.push(value);
        return this; // Allows method chaining
    }

    toString() {
        return this.strings.join('');
    }

    clear() {
        this.strings = [];
    }
}

// Example usage:
const sb = new StringBuilder();
sb.append('Hello, ')
  .append('World!')
  .append(' How are you?');

console.log(sb.toString()); // Output: "Hello, World! How are you?"

```

### 19. String Compression.

```js
  function stringCompression(str){
    let newStr = "";
      for(let i = 0; i<str.length; i++){
          let count = 1;
          while(i<str.length - 1 && str.charAt(i) == str.charAt(i + 1)){
              count++;
              i++
          }
          newStr += str.charAt(i);
          if(count > 1){
              newStr += count.toString();
          }

      }
      return newStr;

  }

  const str = "aaabbccccddd"
  console.log(stringCompression(str))
```