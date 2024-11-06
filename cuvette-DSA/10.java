public int[] zeroFront(int[] nums) {
    int idx = 0, p = -1;
    while(idx < nums.length) {
      if(nums[idx] == 0) {
        p++;
        swap(nums, p, idx);
      }
      idx++;
    }
    return nums;
  }
  public void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  /*
  
  
        p
    0 0 0 1 1 1 1 1
                    i
  */