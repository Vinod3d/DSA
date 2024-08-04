
function TrappingRainWater(){
    var height = [4, 2, 0, 6, 3, 2, 5]
    var maxWater = 0;
    var length = height.length - 1;
    var left = 0;
    var right = length;
    var leftMax = 0;
    var rightMax = 0;

    while(left< right){

        if(height[left] < height[right]){
            if(height[left] >= leftMax){
                leftMax = height[left];
            } else if(height[left]<leftMax){
                maxWater += leftMax - height[left];
            }
            left++;
        } 
        
        else if(height[left]>height[right]){
            if(height[right] >= rightMax){
                rightMax = height[right];
            } else if(height[right]<rightMax){
                maxWater += rightMax - height[right];

            }
            right--
        }
    }
    console.log(maxWater);
        
    
}

TrappingRainWater()