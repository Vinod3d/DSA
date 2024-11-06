### 1

```js
    const data = 100;
    console.log(data.toString());
    // console.log(100.toString()); // Wrong
    console.log(100..toString()); // right

    // output
    // 100
    // 100
```

### 2

```js
    let num = 20;
    console.log(num + "20");
    console.log(++num);

    // output
    // 2020
    // 21
```

### 3

```js
    console.log(parseInt("108"))
    console.log(parseInt("108*200"))
    console.log(parseInt("108Wonders"))

    //output
    // 108
    // 108
    // 108
```

### 4
delete only works on properties of objects, not on variables declared with let, const, or var.

age is assigned without let, const, or var. As a result, it implicitly becomes a property of the global object (window in browsers or global in Node.js), which is configurable and can be deleted.

```js
    const name = 'Lydia';
    age = 21;

    console.log(delete name); // Output: false
    console.log(delete age);  // Output: true
```

### 5

- The for loop runs from i = 0 to i = 9, but because var is used, i is shared across all loop iterations.

- setTimeout is asynchronous, so each console.log(i) runs after the loop finishes. By that time, i has already become 10 (the value that stops the loop).

- When all the setTimeout functions finally run, they all print 10, since that’s the final value of i.

```js
    for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
```

### 6

Reference vs. Value: In JavaScript, objects (including arrays) are stored and passed by reference. When you do const userList = [user];, userList contains a reference to the user object.

```js
    let user = {name: 'Vinod Chandra'};
    const userList = [user];

    user = null;

    console.log(userList);
```

### 7

var a = 3;: This declares a variable a and initializes it with the value 3. Because a is declared with var, it is scoped to the function (the IIFE) and cannot be accessed outside of it.

b = 3;: Here, b is not declared with var, let, or const. In JavaScript, if a variable is assigned a value without a declaration keyword, it implicitly becomes a global variable (if it is not in strict mode). Therefore, b is created in the global scope and assigned the value 3

```js
    (function(){
        var a = b = 3;
    })();

    console.log("a defined?" + (typeof a !== 'undefined'));
    console.log("b defined?" + (typeof b !== 'undefined'));
```

### 8 

```js
    var a = {},
    b = { key: 'b' },
    c = { key: 'c' };
    
    a[b] = 123;
    a[c] = 456;

    console.log(a[b]);
```

The line a[b] = 123; attempts to set a property on the object a using the object b as the key.
However, in JavaScript, object keys must be either strings or symbols. When you use an object as a key, it gets coerced to a string. The default string representation of an object is "[object Object]".

Therefore, a[b] actually sets the property "[object Object]" to 123. The object b is converted to a string when used as a key in the object a.
Second Property Assignment:

Similarly, a[c] = 456; sets the property on a using c as the key. This also gets coerced to a string and results in:
a[c] also sets the property "[object Object]" to 456.

Since a[b] was already set to 123, the second assignment will overwrite this value, so now a["[object Object]"] will be 456.


### 9

```js
    function showData(){
    console.log("variable name is", name);
    console.log("variable name is", age);
    var name = "Noren Red";
    let age = 999;
}

showData();
```

Inside the function, two variables are declared: name using var and age using let.

In JavaScript, variable declarations are hoisted to the top of their scope, meaning that they can be referenced before their actual declaration in the code. However, the initialization (assignment) is not hoisted.

This means that the var name declaration is hoisted to the top of the function, but its assignment to "Noren Red" remains where it is in the code. The let age declaration is also hoisted, but it remains uninitialized until the line let age = 999; is reached.

### 10

Arrow functions do not have their own this context. Instead, they inherit this from their parent scope at the time they are defined.

In yearly, this does not refer to the income object. It refers to the this value in the surrounding context where yearly was defined, which could be undefined or the window object (in non-strict mode).

```js
    const income = {
        skills: 108,
        monthly(){
            return this.skills * 108;
        },
        yearly: ()=> 888 * this.skills,
    };

    console.log(income.monthly());
    console.log(income.yearly());
```

### 11

```js
    console.log(+true);
    console.log(!"JavaScript");
```

The unary + operator attempts to convert its operand to a number.

The ! (logical NOT) operator converts its operand to a boolean and inverts it.


### 12

```js
    let a = 108;
    let b = new Number(108);
    let c = 108;

    console.log(a == b);
    console.log(a === b);
    console.log(b === c);

    true   // a == b
    false  // a === b
    false  // b === c
```

a is assigned the primitive value 108.

b is assigned an object created using the Number constructor. This means b is not a primitive value, but an object that wraps the number 108.

c is assigned the primitive value 108.


### 13

```js
    class Lizard{
        static colorChange(newColor){
            this.newColor = newColor;
            return this.newColor;
        }
        
        constructor({newColor = "orange"} = {}){
            this.newColor = newColor;
        }
    }

    const tommy = new Lizard({newColor: "orange"})
    console.log(tommy.colorChange("blue"));
```

it will give error.

because static method cannot be call on instance of class.

### 14

```js
    function getSummary(one, two, three){
        console.log(one);
        console.log(two);
        console.log(three);
    }

    const fName = "Vasuki";
    const age = 878;

    getSummary`${fName} age is ${age}`;


    // [ '', ' age is ', '' ]
    // Vasuki
    // 878

```

An array of string values from the template (excluding the expressions). This array is passed as the first argument (one).

The expression values are passed as subsequent arguments (two, three, etc.).

### 15

```js
    function checkAge(data){
        if(data === {age: 18}){
            console.log("You are an adult!");
        } else if(data == {age: 18}){
            console.log("You are still an adult.")
        } else{
            console.log('hmm... No Age');
        }
    }

    checkAge({age: 18});

    // hmm... No Age

```

In JavaScript, when you compare objects (including objects created using object literals like {age: 18}), you're comparing their references in memory, not their values. Therefore, the code {age: 18} creates a new object each time it's evaluated, and each new object has a different reference.

### 16

```js
    function getType(...args){
        console.log(typeof args)
    }

    getType(108);

```

Array is not a primitive data Type so output will be Object


### 17

```js
    function getAge(){
        "use strict";
        salary = 8212;
        console.log(salary);
    }

    getAge();
```

You've encountered an issue because the "use strict"; directive is in place. This directive helps catch common coding mistakes and "unsafe" actions in JavaScript. In this case, it doesn't allow you to use undeclared variables.

### 18

```js
    var num = 8;
    var num = 10;

    console.log(num)

    // 10 
```

last var override the previous one

### 18 

```js
    const obj = {1:"a", 2:"b", 3:"c"};
    const set = new Set([1, 2, 3, 4, 5]);

    console.log(obj.hasOwnProperty("1"));
    console.log(obj.hasOwnProperty(1));

    console.log(set.has("1"));
    console.log(set.has(1));

    // true
    // true
    // false
    // true
```

In this case, the object keys 1, 2, and 3 are automatically converted to strings. So, "1" and 1 refer to the same property. Both obj.hasOwnProperty("1") and obj.hasOwnProperty(1) return true.

The Set object set contains the numbers 1, 2, 3, 4, and 5 as actual numeric values. When checking if the set contains "1" (a string), set.has("1") returns false because the set does not contain the string "1". However, set.has(1) returns true since 1 (a number) is in the set.

### 19

```js
    const obj = {a: "1", b:"2", a:"3"};
    console.log(obj);

    // { a: "3", b: "2" }

```

In JavaScript, object keys must be unique. If you define the same key multiple times, the last definition will override the previous ones.

### 20

```js
    const a = {};
    const b = {key:"b"};
    const c = {key:"c"};

    a[b] = 222;
    a[c] = 999;

    console.log(a[b]);

    // { "[object Object]": 999 }

```

This might seem tricky at first, but it's because objects used as keys are converted to strings when setting property values. Here's what's happening:

- When you use b and c as keys, they are both converted to the string "[object Object]".

- Therefore, the assignment a[b] = 222 is effectively a["[object Object]"] = 222.

- When you then do a[c] = 999, it overwrites the same property, so it becomes a["[object Object]"] = 999.

### 21

```js
    const lang = {name: "ReactJS"};

    function getLib(ver){
        return `${this.name} version ${ver}`;
    }

    console.log(getLib.call(lang, 18));
    console.log(getLib.bind(lang, 18));

    // ReactJS version 18
    // function () { [native code] }

```

The bind method creates a new function that, when called, has its this value set to lang and 18 as the first argument. However, in your code, you are logging the function itself rather than calling it. So the output will be the function definition,

### 22

```js
    function sayHi(){
    return (()=>0)();
    }

    console.log(typeof sayHi());

    // number
```

### 23

```js
    console.log(typeof typeof 1);
```

typeof 1 evaluates to "number", since the value 1 is a number.

Then, typeof "number" evaluates to "string", since the result of the first typeof operation is a string.

### 24

```js
    const numbers = [1, 2, 3];
    numbers[10] = 11;
    console.log(numbers);

    // [ 1, 2, 3, <7 empty items>, 11 ]
```

### 25

```js
    (()=>{
        let x, y;
        try{
            throw new Error();
        } catch (x){
            (x = 1), (y = 2);
            console.log(x);
        }
        
        console.log(x);
        console.log(y);
    })();


    // 1
    // undefined
    // 2
```

### 26

```js
    const data = [..."Apple"];
    console.log(data);

    // [ 'A', 'p', 'p', 'l', 'e' ]
```

### 27

```js
    associative rules, 
// 5010
```

### 28

```js
    function getMessage(){
        throw 'Hello World';
    }

    function sayHello(){
        try{
            const data = getMessage();
            console.log('worked!', data);
        } catch(e){
            console.log('an error:', e);
        }
    }

    sayHello();

    // ERROR!
    // an error: Hello World
```

### 29

```js
    console.log(parseInt('10+2'));
    console.log(parseInt('7FM'))

    // 10
    // 7
```

### 30

```js
    function getInfo(member, year){
        member.name = 'FrontendMaster';
        year = '1947';
    }

    const person = {name: 'Dev'};
    const birthYear = '2097';

    getInfo(person, birthYear);

    console.log(person, birthYear);


    // { name: 'FrontendMaster' } 2097
```

### 31

```js
    (()=>{
        let x = (y = 10);
    })();

    console.log(typeof x);
    console.log(typeof y);

    // undefined
    // number
```

### 32

```js
    const obj = { };

    Object.defineProperty(obj, 'a', {
        value: "char"
    });

    console.log(obj.a);
    console.log(Object.keys(obj));

    // char
    // []
```

You define a property a on obj with the value "char" using Object.defineProperty.

console.log(obj.a); will output: char. This is because you've defined a property a with the value "char".

console.log(Object.keys(obj)); will output: []. because By default, properties created with Object.defineProperty are not enumerable, which means they won't appear in the array returned by Object.keys() unless you explicitly set the enumerable attribute to true.


```js
    Object.defineProperty(obj, 'a', {
        value: "char",
        enumerable: true
    });
```


### 33

```js
    function addItem(item, list){
        return list.push(item);
    }

    const result = addItem('🐯', ['🐕']);

    console.log(result);

    // 2
```

push() method return length of array after pushing elements.


### 33

```js
    const name = 'Mr.X';
    age = 20;

    console.log(delete name);
    console.log(delete age);
```

console.log(delete name); will output: false. This is because const variables cannot be deleted.

console.log(delete age); will output: true. This is because age was created as a global variable, and global variables can be deleted.


### 34

```js
    function* generatorFn(i){
        console.log('A');
        yield i;
        console.log('B');
        yield i*2;
    }

    const gen = generatorFn(10);

    console.log(gen.next().value);
    console.log(gen.next().value);


    // A
    // 10
    // B
    // 20
```

### 35

```js
    async function getData(){
        return await Promise.resolve('🙎');
    }

    const data = getData();
    console.log(data)
    data.then(res =>console.log({res}))

    // Promise { <pending> }
    // { res: '🙎' }
```
### 36

```js
    const {fName:feDEV} = {fName:"Mr.X"};
    console.log(fName);
```

You are using object destructuring to extract a property fName from an object and assigning it to a new variable feDEV. However, when you try to log fName with console.log(fName);, fName is not defined in the scope.

The destructuring assignment creates a variable feDEV which holds the value of fName. Hence, the correct variable to log is feDEV.


```js
    const { fName: feDEV } = { fName: "Mr.X" };
    console.log(feDEV);
```


### 37

```js
    function sum(n1, n2= n1){
        console.log(n1 + n2);
    }

    sum(10);

    // 20
```


### 38

```js
    let newList = [2, 3].push(4);
    console.log(newList.push(5));

    // ERROR!
```

The push method adds one or more elements to the end of an array and returns the new length of the array.

Therefore, newList will be assigned the value 3 (the length of the array after 4 is pushed to [2, 3]), not an array.

### 39

```js
    function getItems(list, ...args, moreItem){
        return [...list, ...args, moreItem]
    }

    console.log(getItems(["berry", "apple", "pear", "kiwi"]))

    ERROR!
```

The code you've written will result in a syntax error because the rest parameter (...args) must be the last parameter in the function definition. Therefore, having another parameter (moreItem) after ...args is not allowed.