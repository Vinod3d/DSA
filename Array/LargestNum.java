package Java.Array;

public class LargestNum {
    public static void main(String[] args) {
        int[] arr = {10, 2, 3, 4, 5};
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println(max);
    }
}
