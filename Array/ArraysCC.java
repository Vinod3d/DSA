package Java.Array;

public class ArraysCC {
    public static void update(int arr[]){
        for(int i=0;i<arr.length;i++){
            arr[i]=arr[i]*2;
        }
    }

    public static int linearSearch(int arr[], int key){
        for(int i=0;i<arr.length;i++){
            if(arr[i]==key){
                return i;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5}; // Dynamic size Array
        int[] marks = new int[50]; //Fixed Size Array
        int key = 5;
        // update(arr);

        // Print out marks
        for (int i = 0; i < arr.length; i++) {
            // System.out.println(arr[i]);
        }

        int index = linearSearch(arr, key);
        if (index == -1) {
            System.out.println("Element not found");
        } 
        else {
            System.out.println("Element found at index " + index);
        }
    }
}
