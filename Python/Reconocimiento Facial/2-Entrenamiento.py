import cv2
import os
import numpy as np
dataPath = 'C:/Users/cuate/Documents/Repositorio GIT/Python/Reconocimiento Facial/Carpeta de Rostros Registrados'
peopleList = os.listdir(dataPath)
print('Lista de personas: ', peopleList)

labels = []
facesData = []
label = 0

for nameDir in peopleList:
    personPath = dataPath + '/' + nameDir
    print('Leyendo las imágenes')

    for fileName in os.listdir(personPath):
        print('Rostros: ', nameDir + '/' + fileName)
        labels.append(label)
        facesData.append(cv2.imread(personPath+'/'+fileName,0))
        image = cv2.imread(personPath+'/'+fileName,0)
        #cv2.imshow('image',image)
        #cv2.waitKey(10)
label = label + 1
#print('labels= ',labels)
#print('Número de etiquetas 0: ',np.count_nonzero(np.array(labels)==0))
#print('Número de etiquetas 1: ',np.count_nonzero(np.array(labels)==1))



#Face_recognizer = cv2.face.EigenFaceRecognizer_create()
face_recognizer = cv2.face.EigenFaceRecognizer_create()

# entrenando el reconocedor de rostros



#entrenando el reconocedor de rostros
print("entrenando...")
face_recognizer.train(facesData, np.array(labels))

#almacenando el modelo obtenido
#face_recognizer.write('modeloeigenface.xml')
face_recognizer.write('modeloEigenFace.xml')
print("modelo almacenado...")