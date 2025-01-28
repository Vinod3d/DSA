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

### 40

```js
    class Person{
        constructor(){
            this.name = 'Frontend';
        }
    }

    Person = class AnotherPerson {
        constructor(){
            this.name = 'Master';
        }
    }

    const member = new Person();
    console.log(member.name);
```

This code reassigns the Person class to AnotherPerson after the initial declaration. As a result, when you create an instance of Person, it will actually be an instance of AnotherPerson.

### 41

```js
    let name = 'Dev';

    function getName(){
        console.log(name);
        let name = 'FrontendMaster';
    }
    getName();

    // ReferenceError: Cannot access 'name' before initialization
```

### 42

```js
    const one = false || {} || null;
    const two = null || false || '';
    const three = [] || 0 || true;

    console.log(one, two, three)
```

- const one = false || {} || null;

  The || (logical OR) operator returns the first truthy value it encounters.

  false is falsy, {} (an empty object) is truthy, and null is falsy.

  So, one will be {}.


- const two = null || false || '';

  null is falsy, false is falsy, and '' (an empty string) is also falsy.

  Since all values are falsy, two will be the last value, which is ''.


- const three = [] || 0 || true;

    [] (an empty array) is truthy, 0 is falsy, and true is truthy.

    The first truthy value is [].

    So, three will be [].


### 43

```js
    const animals = {};
    let dog = {emoji: '🐕'};
    let cat = {emoji : '😺'};

    animals[dog] = {...dog, name: "Dug"};
    animals[cat] = {...cat, name: "Bux"};

    console.log(animals[dog]);

    // { emoji: '😺', name: 'Bux' }
```


animals[dog] = {...dog, name: "Dug"}; converts dog to "[object Object]" and sets {emoji: '🐕', name: "Dug"} as the value.

animals[cat] = {...cat, name: "Bux"}; also converts cat to "[object Object]" and sets {emoji: '😺', name: "Bux"} as the value.

Since both dog and cat are converted to the same string key [object Object], the second assignment (animals[cat]) overwrites the first.


### 44

```js
    const user = {
        email: "abc@gmail.com",
        updateEmail: email => {
            this.email = email;
        }
    }

    user.updateEmail("latest@gmail.in");
    console.log(user.email);


    // abc@gmail.com
```

n JavaScript, the this keyword inside the arrow function does not behave as it would in a regular function. Arrow functions do not have their own this context; instead, they inherit this from the enclosing scope at the time they are defined.


### 45

```js
    const fruit = ['🍌', '🍊', '🍎'];

    fruit.slice(0, 1);
    fruit.splice(0, 1);
    fruit.unshift('🍇');

    console.log(fruit);
```

fruit.slice(0, 1);

The slice method returns a shallow copy of a portion of an array. However, it does not modify the original array. In this case, fruit.slice(0, 1) would return ['🍌'], but since the result is not assigned to any variable, it is effectively discarded.

fruit.splice(0, 1);

The splice method changes the contents of the array by removing or replacing existing elements. fruit.splice(0, 1) removes the first element (index 0) from the array. After this line, fruit becomes ['🍊', '🍎'].

fruit.unshift('🍇');

The unshift method adds one or more elements to the beginning of an array. Here, '🍇' is added to the start of the fruit array. After this line, fruit becomes ['🍇', '🍊', '🍎'].


### 46

```js
    let count = 0;

    const nums = [0, 1, 2, 3];

    nums.forEach(num=>{
        if(num){
            count += 1;
        }
    })

    console.log(count)

    // 3
```

For num = 0: The condition if(num) evaluates to false (since 0 is falsy), so count is not incremented.


### 47

```js
    const person = {
    name: 'FrontendMaster',
        address: {
            city: 'MDNDocs',
        }
    };

    Object.freeze(person);

    person.name = null;
    person.address.city = null;

    console.log(person);


    // { name: 'FrontendMaster', address: { city: null } }
```

The Object.freeze method in JavaScript prevents new properties from being added to an object, and it prevents existing properties from being removed or changed. However, it does not apply recursively to nested objects within the frozen object unless you explicitly apply it to them.

### 48

```js
    const pets =  ['😺', '🍇'];
    ({item: pets[2]} = {item:'🍎'});

    console.log(pets);

    // [ '😺', '🍇', '🍎' ]
```

const pets = ['😺', '🍇'];

This creates an array pets with two elements: ['😺', '🍇'].

({item: pets[2]} = {item:'🍎'});

This line uses destructuring assignment. It creates a new property pets[2] and assigns it the value '🍎'.

After this line, pets[2] is set to '🍎'.

console.log(pets);

This logs the pets array to the console.


### 49

```js
    const myFunc = ({x, y, z}) => {
        console.log(x, y, z);
    };

    myFunc(1, 2, 3);

    // undefined undefined undefined
```

The way you are calling the function myFunc(1, 2, 3) is incorrect for the given function definition. The function myFunc expects an object as its argument, which it will destructure into properties x, y, and z.


### 50

```js
    const groceries = ['🍎', '🍇'];

    if(groceries.indexOf('🍎')){
        console.log('We have 🍎!');
    } else {
        console.log('We dont have 🍎!');
    }


    // We dont have 🍎!
```

There's a little issue with your code. The indexOf method returns -1 if the element is not found, and the actual index (starting from 0) if it is found. Since 0 is considered falsy in JavaScript, the condition if(groceries.indexOf('🍎')) will incorrectly evaluate to false when 🍎 is at index 0.


### 51

```js
    const obj = {
        name: "JS"
    }

    obj.ref = obj;

    const str = JSON.stringify(obj);
    console.log(str)

    // ERROR!
    // TypeError: Converting circular structure to JSON
```

When you attempt to stringify an object that contains circular references using JSON.stringify, it will throw a TypeError: Converting circular structure to JSON. This happens because JSON.stringify cannot handle objects that reference themselves

### 52

```js
    const array = [{key: 'J'}, '2', 'x'];
    delete array[0];

    console.log(array.length, array);

    // 3 [ <1 empty item>, '2', 'x' ]
```

When you use the delete operator on an array element, it removes the element but does not affect the array's length. Instead, it leaves an empty slot (undefined) in the array.


### 53

```js
    let z = a = {};
    a.name = 'JS';

    console.log(z.name);
```

let z = a = {};: This creates a new empty object {} and assigns it to both a and z. Now, both a and z reference the same object in memory.

a.name = 'JS';: This adds a property name with the value 'JS' to the object that a (and z) reference.

Since z and a both reference the same object, when you modify a, the changes are also reflected in z.


### 54

```js
    function task(){
        return new Promise((res)=>{
            res("daata");
        })
    }

    const result = task().then();
    console.log(result);

    // Promise { <pending> }
```

The code you provided creates a promise that resolves with the string "daata", but it doesn't do anything with the resolved value. The .then() method is used to handle the resolved value of the promise. Since the .then() method is called without any arguments, it doesn't process the resolved value, and it just returns another promise.


### 55

```js
    console.log(1);

    new Promise(function(res){
        console.log(2);
    })

    console.log(3);
```

new Promise(function(res){ console.log(2); }) - This creates a new promise. The executor function inside the promise is executed immediately, which logs 2 to the console. However, since the promise is not being used or resolved, its result does not affect anything else.


### 56

```js
    const dataMap = new WeakMap();
    let person = {name: 'JS'};

    dataMap.set(person, 'TVA');

    console.log(dataMap.get(person));
    person = null;

    console.log(dataMap.get(person));

    // TVA
    // undefined
```

The first console.log correctly outputs 'TVA' because person is still referencing the original object.

After setting person to null, there are no more references to the original object. In the context of WeakMap, this means the object can be garbage collected.

### 57. 

```js
    var foo = function test(){
        console.log('inside test');
    }

    test();

    // ReferenceError: test is not defined
```

### 58.

```js
    againTest();
    test();

    var test = function(){
        console.log('inside test');
    }

    function againTest(){
        console.log('againTest test')
    }

    // againTest test

    // TypeError: test is not a function
```


**againTest();:**

This function call works because againTest is a function declaration, and function declarations are hoisted to the top of their scope. The againTest function is available before any code executes. So this prints againTest test.

**test();:**

This function call results in an error: TypeError: test is not a function. This happens because var test is only hoisted as a variable declaration (undefined), but the assignment test = function() {} is not hoisted. Therefore, at the time test(); is called, test is undefined.


### 59

```js
    const data1 = ["C", "B", "A"];
    const data2 = ["Z", "Y", "X"];

    data1.toSorted();
    data2.sort();

    console.log({data1});
    console.log({data2}); // ["X", "Y", "Z"].

    // TypeError: data1.toSorted is not a function
```

### 60

```js
    const arr = [,,,];

    console.log(arr.length);

    // 3
```

### 61

```js
    let x = [typeof x, typeof y]

    console.log(x);


    // ERROR!

    // ReferenceError: Cannot access 'x' before initialization
```

### 62

```js
    var age = 90;

    console.log(window.age);
```

When you declare var age = 90;, it creates a global variable age and also sets window.age to 90.

Therefore, console.log(window.age); will output 90.


### 63

```js
    let name = "JS";

    name[0] = "R";
    name[1] = "X";

    console.log(name);

    // Outputs: JS
```

In JavaScript, strings are immutable, meaning that once a string is created, its characters cannot be changed.


### 64

```js
    let str = new String("JS");

    console.log(str === "JS");
    console.log(str == "JS");

    // false
    // true
```

### 65

```js
    const obj = {};

    obj[obj["A"] = "B"] = "C";

    console.log(obj);

    // { A: 'B', B: 'C' }
```


### 66. Five ways to create Object in  JS.

```js
    const obj1 = {};

    const obj2 = new Object();

    const obj3 = Object.assign({},{});

    const obj4 = Object.create({});

    function test(){};

    const obj5 = new test();

    console.log({obj1, obj2, obj3, obj4, obj5});


    // { obj1: {}, obj2: {}, obj3: {}, obj4: {}, obj5: test {} }
```


### 67

```js
    function test(){
        var i;
        
        for(i=0; i<5; i++){
            setTimeout(function(){
                console.log(i);
            }, 100);
            console.log('loop end');
        }
    }

    test()
```

The console.log('loop end'); statement is executed 5 times immediately because it is not delayed by setTimeout.

The setTimeout function's callbacks are executed after 100 milliseconds, but by that time, the loop has already completed, and the value of i is 5 for all the callbacks.

### 68

```js
    function init(x, y, z){};

    function end(a, b=0, c){}

    console.log(init.length);
    console.log(end.length);

    // Outputs: 3
    // Outputs: 1
```

In JavaScript, the .length property of a function returns the number of parameters the function expects, but it does not count parameters that have default values unless they are positioned before the last parameter without a default value.

### 69

```js
    const Person = {
        lang: "JS",
        show: function(){
            console.log(`Hi, ${this.lang}`);
        }
    };

    let fn = Person.show;

    fn(); // Hi, undefined

    fn.call(Person); // Hi, JS
```


### 70

```js
    console.log([]===[]);
    console.log({}==={});
    console.log([]==[]);
    console.log({}=={});

    // false
    // false
    // false
    // false
```

In JavaScript, when you compare arrays or objects, you're comparing their references in memory, not their contents. Thus, two different instances are never equal, even if they contain the same elements or properties.


### 71

```js
    if(function fn(){}){
        console.log(fn);
    }

    // ReferenceError: fn is not defined
```

The function fn is declared within the if statement. However, this function declaration is not assigned to any variable, and it is not available in the global or local scope.

### 72

```js
    99["toString"].length + 1;

    // 0 + 1 = 1
```

99["toString"]:

99 is a number, and in JavaScript, numbers have a toString method.

99["toString"] accesses the toString method of the number 99.

99["toString"].length:

The toString method is a function. All functions in JavaScript have a length property, which indicates the number of expected arguments.

The toString method of a number expects no arguments, so its length property is 0.

99["toString"].length + 1:

The expression evaluates to 0 + 1, which is 1.

### 73

```js
    console.log(4 + "4");

    console.log(8 + + "8");

    // 44
    // 16
```

The + "8" part is a unary plus operator that converts the string "8" into the number 8.

### 74

```js
    function sum(){
        return 2+2;
    }

    function sq(){
        return 4*4;
    }

    let a = (sum(), sq());
    console.log(a);

    // 16
```

The code you provided uses the comma operator (,). This operator evaluates each of its operands (from left to right) and returns the value of the last operand.


### 75

```js
    const obj = {name: 'x'};

    delete obj.name;
    obj?.name = "Y";

// SyntaxError: Invalid left-hand side in assignment
```

You Cant use optional chaining for set perpose

### 76

```js
    let lifeSpan = {
        99 : "Impressive"
    };

    lifeSpan.100 = "🚀";
    console.log({lifeSpan});

    // SyntaxError: Unexpected number
```


### 77

```js
    console.log(8888888888999888888);

    // 8888888888999889000
```

it will output the number in a scientific notation due to its large size. JavaScript uses a floating-point arithmetic format, which can only safely represent numbers between -2^53 and 2^53 (approximately ±9,007,199,254,740,992).


### 78

```js
    console.log(false == []);
    console.log(false == ![]);

    // true
    // true
```

Type Coercion with ==: In false == [], JavaScript will attempt to convert both sides to a common type before comparing them.
Conversion of false: The false value remains false.
Conversion of [] (Empty Array): An empty array [] is coerced to an empty string "" in a comparison with ==.
Comparison with false: Now, the comparison is false == "".
Conversion of "" (Empty String): JavaScript will coerce an empty string "" to false in a Boolean context.
Final Comparison: Since false == false, the result is true.


[] is an empty array, which is a truthy value in JavaScript.
Using the ! (logical NOT) operator on a truthy value ([]) converts it to false.
So, ![] evaluates to false.


### 79

```js
    let a = 10;
    let b = 20;

    let c = 30 - (a = b + 10);
    console.log(`c = ${c}`)

    // c = 0
```


### 80

```js
    function Superhero(){
        this.hero = "SilverSurfer";
        
        return {hero:"NorenRed"};
    }

    const hero = new Superhero();
    console.log(hero)

    // { hero: 'NorenRed' }
```

### 81

```js
    const obj = {};

    Object.defineProperty(obj,
    "lang", {
        value: "JS",
        enumerable:true
    });

    console.log(obj);
    console.log(obj.lang);


    // { lang: 'JS' }
    // JS
```

Object.defineProperty does not list properties in enumeration by default, you might not see the lang property in the output directly, depending on the environment.

```js
    {}
    JS
```

### 82

```js
    const a = 10;
    const b = 20;

    const add = new Function('a', 'b', 'console.log(a + b)')

    add(10, 20) // 30
```

This creates a new function using the Function constructor. The parameters 'a' and 'b' are the function's arguments, and 'console.log(a + b)' is the function body.


### 83

```js
    const key = "constructor";

    const obj = {};

    if(obj.hasOwnProperty(key)){
        console.log("Hello Admin");
    } else{
        console.log("Hello Guest");
    }

    if(key in obj){
        console.log("Hello Admin");
    } else{
        console.log("Hello Guest");
    }

    // Hello Guest
    // Hello Admin
```

The hasOwnProperty method checks if the object has the specified property as its own (not inherited) property.

The in operator checks if the property exists in the object, either as its own property or inherited from its prototype chain.

### 84

```js
    // Input : a.b.c.d.e
    /*
        Output : {
            a : {
                b : {
                    c : {
                        d : e
                    }
                }
            }
        }
    */

    const str = 'a.b.c.d.e';

    const result = str.split(".").reduceRight(function(acc, next)
    {
        return {[next] : acc};
    });

    console.log(result)


    // { a: { b: { c: [Object] } } }
```

### 85

```js
    const str = 'hare krishna hare krishna krishna krishna hare hare';

    const obj = {};

    for(let x of str){
        if(obj[x]){
            obj[x] += 1;
        } else {
            obj[x] = 1;
        }
    }

    console.log(obj)

    // { h: 8, a: 8, r: 8, e: 4, ' ': 7, k: 4, i: 4, s: 4, n: 4 }
```

### 86

```js
    // How to make passing argument mandatory?

    function check(){
        throw new Error("Param required");
    }

    function show(name = check()){
        console.log(name)
    }

    show();

        // throw new Error("Param required");
```


### 87

```js
    const num1 = Number();
    const num2 = Number(undefined);

    console.log(`num1 = ${num1}`);
    console.log(`num2 = ${num2}`);

    // num1 = 0
    // num2 = NaN
```

### 88

```js
    // Find the time taken by while loop

    let i=0;

    const beforeTime = new Date().getTime();
    console.log('before')

    while(i<1000000){
        i++;
    }

    const afterTime = new Date().getTime();
    console.log('after', afterTime - beforeTime);

    // before
    // after 13
```

### 89

```js
    let age = '51';
    let validAge = '51';

    age = age+1;
    validAge++;

    console.log(age);
    console.log(validAge);

    // 511
    // 52
```

### 90

```js
    console.log(+true);
    console.log(!'str')

    // 1
    // false
```

### 91

```js
    function test(){
        try{
            return 1;
        } finally {
            return 2;
        }
    }

    const result = test();
    console.log(result);

    2
```

Before the function can complete and return 1, the finally block is executed.

The finally block contains return 2;, which overrides the previous return statement in the try block.


### 92

```js
    const arr = [1, 2];

    arr.reduce(function(acc, next){
        console.log(acc);
        console.log(next);
    },9);

    // 9
    // 1
    // undefined
    // 2
```
**First Call:**

- acc (accumulator): 9 (initial value)

- next (current value): 1


**Second Call:**

- acc (accumulator): The return value of the previous call, but since there is no return statement in your function, acc remains the initial value.

- next (current value): 2


### 93

```js
    const show = (b, b)=>{
    
    }

    function test(a, a){
        
    }


    // const show = (b, b)=>{
    //              ^

    // SyntaxError: Duplicate parameter name not allowed in this context
```


### 93

```js
    function test(a,a){
        console.log(a);
    }

    test(3);

    // undefined
```

### 94

```js
    console.log("" == []);

    // true
```

### 95

```js
    function test(){
        console.log(typeof this);
    }

    test.call("");

    // object
```

Primitive to Object: When you pass a primitive value to .call(), JavaScript wraps it in an object. For example, an empty string "" gets wrapped in a String object.

Inside the Function: Inside the test function, this refers to the wrapped object, not the primitive string. Hence, typeof this returns "object" because this is now a String object.

### 96

```js
    let str = "JS";

    console.log(JSON.stringify(str) === str)

    // false
```

JSON.stringify(str) converts "JS" to "\"JS\"" (a string with additional double quotes).


### 97. check if args are number are not.

```js
    function check(...args){
        for(let x of args){
            if(typeof x !== 'number'){
                throw new Error();
            }
        }
    }

    function add(n1, n2){
        check(n1, n2);
        return n1 + n2;
    }

    console.log(add(23, 'g'));
```

### 98

```js
    const a = {fn:function(){}};
    const b = [function(){}];

    const strA = JSON.stringify(a);
    const strB = JSON.stringify(b);

    console.log(strA);
    console.log(strB);

    // {}
    // [null]
```

In strA:

The object a has a property fn which is a function. Since JSON.stringify ignores functions, fn is omitted, resulting in an empty object ({}).
In strB:

The array b contains a single function element. When JSON.stringify encounters a function in an array, it converts it to null, resulting in "[null]".


### 99

```js
    const list = "apple,samsung;vivo";

    const devices = list.split(/[,;]/);

    console.log(devices);

    // [ 'apple', 'samsung', 'vivo' ]
```

### 100

```js
    setTimeout(()=>{
        console.log(1);
    }, 0);

    Promise.resolve().then(()=>{
        console.log(2);
    })

    queueMicrotask(()=>{
        console.log(3);
    })

    console.log(4);

    // 4
    // 3
    // 2
    // 1
```

console.log(4): This line is executed first because it is a synchronous operation and will run immediately.

Promise.resolve().then(() => { console.log(2); }): This line schedules a microtask to log 2. Microtasks have higher priority than macrotasks (like setTimeout).

queueMicrotask(() => { console.log(3); }): This line also schedules a microtask to log 3. Microtasks are processed after the current script execution completes, but before any macrotasks.

setTimeout(() => { console.log(1); }, 0): This schedules a macrotask to log 1. Even with a delay of 0, it will run after all microtasks have been processed.


### 101

```js
    console.log([ ...['.', '.', '.'] ].length)

    // 3
```


### 102

```js
    var a = 1

    function func() {
        a = 2
        console.log(a)
        var a
    }

    func()

    console.log(a)
        if (!('b' in window)) {
        var b = 1
    }

    console.log(b)


// 2
// 1
// 1
```

### 103

```js
    console.log(1) //
    const promise = new Promise((resolve) => {
    console.log(2)
    resolve()
    console.log(3)
    })

    console.log(4)//

    promise.then(() => {
    console.log(5)
    }).then(() => {
    console.log(6)
    })

    console.log(7) //

    setTimeout(() => {
    console.log(8)
    }, 10)

    setTimeout(() => {
    console.log(9)
    }, 0)


// 1
// 2
// 3
// 4
// 7
// 5
// 6
// 9
// 8
```

Synchronous Code:

All synchronous code is executed first, in the order it appears.
Promises:

.then() callbacks are microtasks, which run after the current synchronous code finishes but before setTimeout (macrotasks).
setTimeout Callbacks:

setTimeout is a macrotask and is executed after all microtasks are completed. Among multiple setTimeout callbacks, the one with the shortest delay executes first.


### 104

```js

```