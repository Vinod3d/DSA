public boolean nestParen(String str) {//   f{ ( ( ( ) ) ) }
                                      //    f { ( ( ) ) }
  if(str.length() == 0) {
    return true;
  }                          
  if(str.charAt(0) == '(' && str.charAt(str.length() - 1) == ')') {
    return nestParen(str.substring(1, str.length() - 1));
  }else {
    return false;
  }
}