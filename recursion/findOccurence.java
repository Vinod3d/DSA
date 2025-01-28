public class FindOccurrences {

    public static void findOccurrences(int[] arr, int target, int index) {
        if (index == arr.length) {
            return;
        }

        if (arr[index] == target) {
            System.out.print(index + " ");
        }

        findOccurrences(arr, target, index + 1);
    }

    public static void main(String[] args) {
        int[] arr = {3, 2, 4, 5, 6, 2, 7, 2, 2};
        int target = 2;
        System.out.println("The occurrences of " + target + " are at indices:");
        findOccurrences(arr, target, 0);
    }
}
