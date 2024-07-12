public class Palindrome {
    public static boolean isPalindrome(int num){
        int reverse = 0, temp = num;
        while(num > 0){
            reverse = reverse * 10 + num % 10;
            num = num / 10;
            }
            return reverse == temp;

    }
    public static void main(String[] args) {
        int num = 121;
        boolean result = isPalindrome(num);
        if(result){
            System.out.println("The number is a palindrome");
        } else {
            System.out.println("The number is not a palindrome");
        }
    }
}