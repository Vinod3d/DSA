### 1. Diamond

```java
    import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		printPattern(5);

	}
	
	public static void printPattern(int n){
	    int st = 1, sp = n - 1;
	    for(int i = 1; i<= 2 * n - 1; i++){
	        for(int j = 1; j<= sp; j++){
	            System.out.print(" ");
	        }
	        
	        for(int j = 1; j<= st; j++){
	            System.out.print("*");
	        }
	        System.out.println();
	        if(i<n){
	            st += 2;
	            sp--;
	        }else{
	            st -= 2;
	            sp++;
	        }
	    }
	}
}


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
```

### 2. number diamond

```java
    import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		printPattern(5);

	}
	
	public static void printPattern(int n){
	    int st = 1, sp = n / 1, val = 1;
	    for(int i = 1; i<= n; i++){
	        for(int j = 1; j<= sp; j++){
	            System.out.print(" ");
	        }
	        
	        for(int j = 1; j<= st; j++){
	            System.out.print(val);
	        }
	        System.out.println();
	        val++;
	        if(i<= n/2){
	            st += 2;
	            sp--;
	        }else{
	            st -= 2;
	            sp++;
	        }
	    }
	}
}


//      1
//     222
//    33333
//     444
//      5
```

### 3. diamond fibonacchi

```java
    import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		printPattern(5);

	}
	
	public static void printPattern(int n){
	    int st = 1, sp = n / 1, val = 1;
	    for(int i = 1; i<= n; i++){
	        for(int j = 1; j<= sp; j++){
	            System.out.print(" ");
	        }
	        
	        for(int j = 1; j<= st; j++){
	            System.out.print(val);
	        }
	        System.out.println();

	        if(i<= n/2){
	            st += 2;
	            sp--;
	            val++;
	        }else{
	            st -= 2;
	            sp++;
	            val--;
	        }
	    }
	}
}


//      1
//     222
//    33333
//     222
//      1
```

### 4. Number Centric diamond

```java
    import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		printPattern(5);

	}
	
	public static void printPattern(int n){
	    int st = 1, sp = n / 1;
	    for(int i = 1; i<= n; i++){
	        int val = 1;
	        for(int j = 1; j<= sp; j++){
	            System.out.print(" ");
	        }
	        
	        for(int j = 1; j<= st; j++){
	            System.out.print(val);
	            if(j<= st / 2){
	                val++;
	            } else{
	                val--;
	            }
	        }
	        System.out.println();

	        if(i<= n/2){
	            st += 2;
	            sp--;
	        }else{
	            st -= 2;
	            sp++;
	        }
	    }
	}
}


//      1
//     121
//    12321
//     121
//      1
```