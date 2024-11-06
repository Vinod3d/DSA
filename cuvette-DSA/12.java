public int maxMirror(int[] nums) {
    int max = 0;
    for(int i = 0; i < nums.length; i++) {
      int k = 0;
      for(int j = nums.length - 1; j >= 0 && i + k < nums.length; j--) {
        if(nums[i + k] == nums[j]) {
          k++;
        }else {
          max = Math.max(max, k);
          k = 0;
        }
      }
      max = Math.max(max, k);
    }
    return max;
  }
  /*
  max = 3
  0 1 2 3 4 5 6 7 -> idx
  
           k
  i
  1 2 3 8 8 3 2 1 9 3 2 1 -> val
        j
                
  
  
  */