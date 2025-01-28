import java.util.Arrays;

public class Solution {
    public int fib(int n) {
        int[] dp = new int[n - 0 + 1];
        Arrays.fill(dp, -1);
        return helper(n, dp);
    }
    public int helper(int N, int[] dp) {
        for(int n = 0; n <= N; n++) {
            if(n == 0 || n == 1) {
                dp[n] = n;
                continue;
            }
           
            int ans = dp[n - 1] + dp[n - 2];
            dp[n] = ans;
        }
        return dp[N];
    }
} {
    
}
