package jsDSA.recursion;

public class sumOfN {
    public static int sumOfN(int n){
        if(n == 0){
            return 0;
        }
        return n += sumOfN(n-1);
    }
    public static void main(String[] args) {
        int n = 5;
        int sum = sumOfN(n);
        System.out.println(sum);
    }
}
