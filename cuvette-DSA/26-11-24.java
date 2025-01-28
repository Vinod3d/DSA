class Solution {
    public String longestPalindrome(String s) {
        String ans = "";
        int len = 0;
        for(int i = 0; i < s.length(); i++) {
            for(int j = i; j <= s.length(); j++) {
                String curr = s.substring(i, j);
                if(isPallindrome(curr)) {
                    if(curr.length() > len) {
                        len = curr.length();
                        ans = curr;
                    }
                }
            }
        }
        return ans;
    }
    public boolean isPallindrome(String s) {
        int si = 0, ei = s.length() - 1;
        while(si <= ei) {
            if(s.charAt(si) != s.charAt(ei)) {
                return false;
            }
            si++;
            ei--;
        }
        return true;
    }
}