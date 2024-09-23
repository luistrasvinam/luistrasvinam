import numpy as np
import scipy.optimize as optimize

def f(x):
    return np.sin(5*x*2-7*x+2)

def fp(x):
    return 2*np.cos(2*x+1)-3/5

def NR(f,x,fp,N=100):
    for k in range(N):
        x=x-f(x)/fp(x)
        print(k,x,f(x))
NR (f,0,fp)

