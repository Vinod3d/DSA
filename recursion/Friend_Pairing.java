package jsDSA.recursion;

public class Friend_Pairing {
    public static int friendParing(int n){
        if(n==1 || n==2){
            return n;
        }

        return friendParing(n-1) + (n-1) * friendParing(n-2);
    }
    public static void main(String[] args){
        System.out.println(friendParing(3));
    }
}