### 1. Fibonacci 
```js
    function fibonacciSequence(num) {
        let sequence = [0, 1];

        for (let i = 2; i <= num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }

        return sequence.slice(0, num);
    }

    console.log(fibonacciSequence(5));

```

### 2. Find sum and average of array element.
```js
    public class Average{
        public static void main(String[] args){
            int[] numbers = {1,2,3,4,5,6,7};
            int sum = 0;
            int avg = 0;
            for(int i = 0; i < numbers.length; i++){
                sum += numbers[i];
                }
                avg = sum / numbers.length;
                System.out.println("The average of the numbers is: " + avg);
                System.out.println("Sum of Number is" + sum);
        }
    }
```

### 3. binary to Decimal.
```js
    function binaryToDecimal(n) {
        let ans = 0;
        let i = 0;
        
        while (n > 0) {
            let bit = n % 10;
            ans += bit * Math.pow(2, i);
            n = Math.floor(n / 10);
            i++;
        }
        
        return ans;
    }

    let binaryNumber = 111;
    let decimalNumber = binaryToDecimal(binaryNumber);
    console.log(decimalNumber);
```

### 4. Calculate days between dates.

```js
    const calculateDaysBetweenDates = (d1, d2)=>{
        let date1 = new Date(d1)
        let date2 = new Date(d2)

        let diff = Math.abs(date1 - date2)
        return diff / (24 * 60 * 60 * 1000)
    };

    console.log(
        calculateDaysBetweenDates("2024-01-01", "2024-01-31")
    )
```

### 5. Calculate Age.

```js
    const calculateAge = (year, month, day)=>{
    const today = new Date()
    const birthDate = new Date(year, month - 1, day);


    const age = today.getFullYear() - birthDate.getFullYear();
    const monthdiff = today.getMonth() - birthDate.getMonth();
    const daydiff = today.getDate() - birthDate.getDate();

    if(monthdiff < 0 || (monthdiff === 0 && daydiff <  birthDate.getDate())){
        age--
    }

    return `Your Age is ${age} years ${monthdiff} month ${daydiff}`
}


console.log(calculateAge(1999, 7, 11))
```