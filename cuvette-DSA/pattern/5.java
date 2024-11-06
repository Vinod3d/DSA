public int sum67(int[] nums) {
    boolean ignore = false;
    int sum = 0;
    for(int i = 0; i < nums.length; i++) {
      if(nums[i] == 6) {
        ignore = true;
      }
      if(ignore == false) {
        sum += nums[i];
      }
      if(nums[i] == 7) {
        ignore = false;
      }
    }
    return sum;
  }