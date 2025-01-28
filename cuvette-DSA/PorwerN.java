public int powerN(int base, int n) {//3^5
    if(n == 0) {
      return 1;
    }
    int sp = powerN(base, n / 2);//3^2
    if(n % 2 == 0) {
      return sp * sp;
    }else {
      return sp * sp * base;
    }
  }
  /*
  3^5 = 3^2 * 3^2 * 3
  time complexity = Total function calls * time taken in one function
                  = (n + 1) * K
                  = O(Kn + k)
                  = O(KN) 
                  = O(KN)
                  = O(N)
  
  3^100 -> 3^50 -> 3^25 -> 3^12 -> 3^6 -> 3^3 -> 3^1 -> 3^0
                  
  n -> n / 2 -> n / 2^2 -> n / 2^3...... n / 2^k
  
  T(N) = T(N / 2) + K
  T(N / 2) = T(N / 2^2) + K
  T(N / 2^2) = T(N / 2^3) + K
  ...
  
  T(1) = T(0) + K
  
  1 = N / 2^k
  2^k = N
  log(2^k) = LogN
  Klog2 = logN
  K = logN / log2 = logNbase2
  
  Time Complexity = O(Log(N))
                       
  */
  