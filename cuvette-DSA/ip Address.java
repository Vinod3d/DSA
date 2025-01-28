class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> ans = new ArrayList<>();
        helper(s, 0, 0, ans, "");
        return ans;
    }
    public void helper(String s, int idx, int dots, List<String> ans, String asf) {
        if(idx == s.length() || dots > 3) {
            if(isValid(asf)) {
                ans.add(asf);
            }
            return;
        }
        helper(s, idx + 1, dots, ans, asf + s.charAt(idx));
        helper(s, idx + 1, dots + 1, ans, asf + s.charAt(idx) + ".");
    }
    public boolean isValid(String s) {
        if(s.length() == 0) return false;
        if(s.charAt(s.length() - 1) == '.') return false;
        int count = 0;
        String temp = "";
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == '.') {
                count++;
                if(temp.length() > 3 || temp.length() == 0) {
                    return false;
                }
                if(temp.length() != 1 && temp.charAt(0) == '0') {
                    return false;
                }
                if(Integer.valueOf(temp) < 0 || Integer.valueOf(temp) > 255) {
                    return false;
                }
                temp = "";
            }else {
                temp += s.charAt(i);
            }
        }
        if(temp.length() > 3 || temp.length() == 0) {
            return false;
        }
        if(temp.length() != 1 && temp.charAt(0) == '0') {
            return false;
        }
        if(Integer.valueOf(temp) < 0 || Integer.valueOf(temp) > 255) {
            return false;
        }
        if(count != 3) {
            return false;
        }
        return true;
    }
}
/*


                       f(25525511135, "")

        f(25525511135, "2")                 f(25525511135, "2.")

                        f(25525511135, "2")
        f(25525511135, "25")               f(25525511135, "25.")
*/