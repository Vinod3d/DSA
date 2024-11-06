package Java.cuvette-DSA.pattern;

public class 2 {
    
}
import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		printPattern(5);

	}
	public static void printPattern(int n) {//n = 5
	    int st = 1, sp = n / 2, val = 1;
	    for(int i = 1; i <= n; i++) {
	        for(int j = 1; j <= sp; j++) {
	            System.out.print(" ");
	        }
	        for(int j = 1; j <= st; j++) {
	            System.out.print(val);
	        }
	        System.out.println();
	        if(i <= n / 2) {
	            st += 2;
	            sp--;
	            val++;
	        }else {
	            st -= 2;
	            sp++;
	            val--;
	        }
	    }
	}
}
/*
n = 5

  1 => i = 1, st = 1, sp = 2, val = 1
 222 => i = 2, st = 3, sp = 1, val = 2
33333 => i = 3, st = 5, sp = 0, val = 3
 222 => i = 4, st = 3, sp = 1, val = 2
  1 => i = 5, st = 1, sp = 2, val = 1


i = 3, 
st = 3
sp = 1

  *
 ***
***** 












*/
