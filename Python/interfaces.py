import PySimpleGUI as sg

layout = [
    [sg.Text("ROSTRO:")],
    [sg.Button("Cerrar")]
]
window = sg.Window("ASISTENCIA CON RECONOCIMIENTO FACIAL", layout)
while True:
    event, values = window.read()
    if event == "Cerrar" or event == sg.WIN_CLOSED:
        break
window.close()
