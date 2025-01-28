if(n == 0) {
    return 0;
  }
//somehow automatically done 881
  int sp = count8(n / 10);//881
  if(n % 10 == 8) {
    return sp + 1;
  }else {
    return sp;
  }