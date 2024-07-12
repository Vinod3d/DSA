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