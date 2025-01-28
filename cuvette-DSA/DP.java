class Solution {
    public int fib(int n) {
        int[] dp = new int[n - 0 + 1];
        Arrays.fill(dp, -1);
        return helper(n, dp);
    }
    public int fib(int n, int[] dp) {
        if(n == 0 || n == 1) {
            return n;
        }
        if(dp[n] != -1) {
            return dp[n];
        }
        int ans = fib(n - 1) + fib(n - 2);
        dp[n] = ans;
        return ans;
    }
}


/*

fib(5)


0, 1, 2, 3, 4, 5

6 = 5 - 0 + 1
size = ep - sp + 1; 
*/