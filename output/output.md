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