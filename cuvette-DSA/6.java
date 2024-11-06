package Java.Loop;

public public int[] zeroMax(int[] nums) {
    int lov = Integer.MIN_VALUE;
    for(int i = nums.length - 1; i >= 0; i--) {
      if(nums[i] == 0) {
        if(lov != Integer.MIN_VALUE) {
          nums[i] = lov;
        }
      }
      if(nums[i] % 2 == 1) {
        lov = Math.max(lov,  nums[i]);
      }
    }
    return nums;
  } {
    
}
