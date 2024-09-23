from tkinter import image_names
import cv2
import numpy as np


cap = cv2.VideoCapture(0)
leido, frame = cap.read()

if leido == True:
	cv2.imwrite('G:\Mi unidad\ESCUELITA\PYTHON\FOTOSGRUPO', frame)
	print("Foto tomada correctamente")
else:
	print("Error al acceder a la cámara")

cap.release()

cv2.waitKey(0)
cv2.destroyAllWindows ()
