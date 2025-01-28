### 1. half triangle

```js
    import java.util.*;
    import java.lang.*;
    import java.io.*;

    class Codechef
    {
        public static void main (String[] args) throws java.lang.Exception
        {
            Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            printPattern(n);
        }
        
        public static void printPattern(int n){
            for(int i = 1; i<= n; i++){
                for(int k = 1; k<= i; k++){
                    System.out.print("*");
                }
                System.out.println();
            }
        }
    }


    // *
    // **
    // ***
    // ****
    // *****
```

### 2. left side half triangle

```java
    import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner scn = new Scanner(System.in);
		int n = scn.nextInt();
		printPattern(n);
	}
	
	public static void printPattern(int n){
	    int st = 1, sp = n - 1;
	    for(int i = 1; i<= n; i++){
	        for(int k = 1; k<=sp; k++){
	            System.out.print(" ");
	        }
	        for(int k = 1; k<= st; k++){
	            System.out.print("*");
	        }
	        System.out.println();
	        st++;
	        sp--;
	    }
	}
}


//     *
//    **
//   ***
//  ****
// *****
```


### 3. left half of diamond

```js
    import java.util.*;
    import java.lang.*;
    import java.io.*;

    class Codechef
    {
        public static void main (String[] args) throws java.lang.Exception
        {
            Scanner scn = new Scanner(System.in);
            int n = scn.nextInt();
            printPattern(n);
        }
        
        public static void printPattern(int n){
            int st = 1, sp = n - 1;
            for(int i = 1; i<= 2 * n - 1; i++){
                for(int k = 1; k<=sp; k++){
                    System.out.print(" ");
                }
                for(int k = 1; k<= st; k++){
                    System.out.print("*");
                }
                System.out.println();
                
                if(i< n){
                    st++;
                    sp--;
                } else{
                    st--;
                    sp++;
                }
            }
        }
    }


    //     *
    //    **
    //   ***
    //  ****
    // *****
    //  ****
    //   ***
    //    **
    //     *
```