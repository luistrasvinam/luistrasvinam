import cv2
from deepface import DeepFace

cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Error: No se puede abrir la cámara web")
    exit()

while True:
 
    ret, frame = cap.read()
    
    if not ret:
        print("Error: No se puede recibir frame (Cerrar?). Exiting ...")
        break

   
    try:
        result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)
        print("Resultado del analisis:", result)  

        emotion = result[0]['dominant_emotion']
    except Exception as e:
        print(f"Error en el analisis de emociones: {e}")
        emotion = "Desconocido"

   
    cv2.putText(frame, f'Emocion: {emotion}', (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)


    cv2.imshow('Análisis de Sentimientos', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()