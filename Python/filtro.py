from ctypes import c_void_p
import cv2

imagen = cv2.imread('G:\Mi unidad\ESCUELITA\PYTHON\selfie.png',0)
cv2.imwrite('G:\Mi unidad\ESCUELITA\PYTHON\selfiefiltro.png', imagen)
cv2.imshow('Logo OpenCV grises', imagen)
cv2.waitKey(0)
cv2.destroyAllWindows()