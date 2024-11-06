public boolean sameEnds(int[] nums, int len) {
    for(int i = 0, j = nums.length - len; j < nums.length; i++, j++) {
      if(nums[i] != nums[j]) {
        return false;
      }
    }
    return true;
  }