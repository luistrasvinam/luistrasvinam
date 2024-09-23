import cv2

cam = cv2.VideoCapture(0)
img_counter = 0

while True:
    ret,frame = cam.read() 
    cv2.imshow("video", frame)
    if not ret:
        break 
    k = cv2.waitKey(1) 
    if k%256 == 97: #a
     img_name = "imagen_{}.png".format(img_counter) 
     cv2.imwrite(img_name, frame)
     print("{} written!".format(img_name)) 
     img_counter += 1

cam.release() 
cv2.destroyAllWindows()
