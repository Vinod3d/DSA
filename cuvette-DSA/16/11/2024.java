package 16.11;

public class Solution {
    public String longestPalindrome(String s) {
        String[][] dp = new String[(s.length() - 1) - 0 + 1][(s.length() - 1) - 0 + 1];
        for(int i = 0; i < dp.length; i++) {
            for(int j = 0; j < dp[0].length; j++) {
                dp[i][j] = new String("#");
            }
        }
        return helper(s, 0, s.length() - 1, dp);
    }
 
    public String helper(String s, int si, int ei, String[][] dp) {
        if (si > ei) {
            return "";
        }
        if (si == ei) {
            return "" + s.charAt(si);
        }
        if(!dp[si][ei].equals("#")) {
            return dp[si][ei];
        }
        // Check if the characters at the current indices are the same
        if (s.charAt(si) == s.charAt(ei)) {
            String inner = helper(s, si + 1, ei - 1, dp);
            // Ensure the substring between si and ei is also a palindrome
            if (inner.length() == ei - si - 1) {
                dp[si][ei] = new String(s.charAt(si) + inner + s.charAt(ei));
                return s.charAt(si) + inner + s.charAt(ei);
            }
        }
 
        // Explore other possibilities
        String ans1 = helper(s, si, ei - 1, dp);
        String ans2 = helper(s, si + 1, ei, dp);
 
        // Return the longest of the possible results
        dp[si][ei] = ans1.length() >= ans2.length() ? ans1 : ans2;
        return ans1.length() >= ans2.length() ? ans1 : ans2;
    }
}
  {
    
}
