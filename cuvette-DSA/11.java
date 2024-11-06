public int maxMirror(int[] nums) {
    for(int i = 0; i < nums.length; i++) {
      for(int j = i; j < nums.length; j++) {
        for(int k = i; k <= j; k++) {
          System.out.print(arr[k] + " ");
        }
        System.out.println();
      }
    }
  }
  i = 1, j = 3