from lib2to3.pgen2.token import LEFTSHIFT
import tkinter as tk
from turtle import left


ventana=tk.Tk()
ventana.title("Datos Alumno")
ventana.geometry('580x500')
ventana.configure(background="lavender")
etiqueta1=tk.Label(ventana, text="Ingresa Nombre del Alumno: ")
etiqueta1.pack(side= tk.LEFT)

ventana.mainloop()
