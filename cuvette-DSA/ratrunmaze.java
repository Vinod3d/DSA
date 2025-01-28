class Solution {
    public ArrayList<String> findPath(int[][] mat) {
        // Your code here
        ArrayList<String> ans = new ArrayList<>();
        helper(mat, 0, 0, mat.length - 1, mat[0].length - 1, ans, "");
        return ans;
    }
    public void helper(int[][] mat, int sr, int sc, int er, int ec, ArrayList<String> ans, String asf) {
        if(sr < 0 || sc < 0 || sr > er || sc > ec || mat[sr][sc] == 0) {
            return;
        }
        if(sr == er && sc == ec) {
            ans.add(asf);
            return;
        }
        mat[sr][sc] = 0;//marking
        helper(mat, sr + 1, sc, er, ec, ans, asf + "D");
        helper(mat, sr - 1, sc, er, ec, ans, asf + "U");
        helper(mat, sr, sc + 1, er, ec, ans, asf + "R");
        helper(mat, sr, sc - 1, er, ec, ans, asf + "L");
        mat[sr][sc] = 1; //unmarking
    }
}