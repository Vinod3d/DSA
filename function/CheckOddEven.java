public class CheckOddEven {
    public static boolean isEven(int num){
        if(num%2==0){
            return true;
        }
        else
        return false;
    }
    public static void main(String[] args) {
        int num = 10;
        boolean result = isEven(num);

        if(result){
            System.out.println("Even");
        } else{
            System.out.println("Odd");
        }

    }
}
