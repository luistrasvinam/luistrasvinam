from tkinter.tix import InputOnly
import matplotlib.pyplot as plt
import numpy as np
from sympy import symbols
from sympy import lambdify
from sympy import sympify

print ("")
x = symbols ('x') 
fn = sympify(input("ingresa la funcion: ")) 
f = lambdify (x, fn)

a = float(input("ingresa valor inicial de a: ")) 
b = float(input("ingresa valor inicial de b: "))
criterio = float(input("criterio de tolerancia: ")) 
i = 0 
ea = 1 
x_ant = 0 


if f(a) * f(b) < 0:
    print("")
    print("METODO DE BISECCION")
    print("i", "a", "b", "xr", "ea(%)")

    while ea > criterio:
        xr = (a + b) / 2
        ea = abs((xr - x_ant) / xr)

        if f(xr) * f(a) < 0:
            b = xr
        else:
            a = xr
        
        x_ant = xr

        print("{:^10} {:^10f} {:^10f} {:^10f} {:^10}".format (i, a, b, xr, round(ea * 100, 9)))

print(" ")
print("el valor de X es: ", round (xr, 9), "con error de: ", round(ea * 100, 9), "%")



