class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        int n = mat.length, m = mat[0].length, i = 0, j = 0, idx = 0;
        int[] ans = new int[n * m];
        String s = "b";
        while(idx < ans.length) {
            ans[idx] = mat[i][j];
            idx++;
            if(s.equals("b")) {

            }else {
                
            }
        }
        return ans;
    }
}