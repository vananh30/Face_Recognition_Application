import csv
import json
import os

import cv2
import face_recognition
import numpy as np
from flask import (Flask, render_template, Response, Request, request)
from flask_cors import CORS
import base64
from PIL import Image
import matplotlib.pyplot as plt

app = Flask(__name__)
CORS(app)


def write_face(from_file, to_folder, infront, start, size, rmv=False):
    frame = cv2.imread(from_file)
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame = cv2.resize(frame, (700, 700))
    # plt.imshow(frame)
    # plt.show()
    # print(frame.shape)

    # frame = cv2.imread("Images/Nguyen Minh Long/1.png")
    print(frame.shape)
    locations = face_recognition.face_locations(frame)
    print(locations)

    i = start
    if len(locations) != 0:
        for location in locations:
            x = location[3]
            y = location[0]
            w = location[1] - x
            h = location[2] - y
            result = frame[y:y + h, x:x + w]
            cv2.imwrite(to_folder + str(i) + ".png", cv2.resize(result, (size, size)))
            i += 1
            print("Detect Face!")




def initialize():
    path = 'Images'
    persons = os.listdir(path)

    encodes = []
    face_names = []

    i = 1
    for person in persons:
        files = os.listdir(path + '/' + person)
        for _ in files:
            image = face_recognition.load_image_file(path + '/' + person + '/' + str(i) + '.png')
            encod = face_recognition.face_encodings(image)[0]
            encodes.append(encod)
        face_names.append(person)
    #
    return face_names, encodes


def read_file():
    # csv file name
    filename = "demofile.txt"

    # initializing the titles and rows list
    rows = []

    # reading csv file
    with open(filename, 'r') as csvfile:
        # creating a csv reader object
        csvreader = csv.reader(csvfile)

        # extracting field names through first row
        fields = next(csvreader)

        # extracting each data row one by one
        for row in csvreader:
            rows.append(row)

    return rows


def check(name, rows):
    for row in rows:
        if row[0] == name:
            print(row, row[2])
            return row[2], row
    print(rows)
    return False, rows[-1]


face_names, encod_face = initialize()
print(face_names)

locations = []
encodings = []
rows = read_file()

cap = cv2.VideoCapture(0)


studentImages = {"La Tran Hai Dang": "1.png", "Pham Gia Nguyen": "2.png", "Unknown": "0.png"}


def generate_frames():
    face_names, encod_face = initialize()
    rows = read_file()
    i = 0
    while True:
        _, frame1 = cap.read()
        _, frame2 = cap.read()
        name = 'Unknown'
        locations = face_recognition.face_locations(frame2)
        encodings = face_recognition.face_encodings(frame2, locations)
        if cv2.waitKey(1) & 0xFF == ord('r'):
            face_names, encod_face = initialize()
            rows = read_file()
        if cv2.waitKey(1) & 0xFF == ord('s'):
            # face_names, encod_face = initialize()
            # rows = read_file()
            for location in locations:
                distance = face_recognition.face_distance(encod_face, encodings[i])
                best_matches = np.argmin(distance)
                if distance[best_matches] < 0.5:
                    print(distance)
                    name = face_names[best_matches]
                else:
                    name = 'Unknown'
                top, right, bottom, left = location

                print(name)
                result, data = check(name, rows)
                cv2.rectangle(frame2, (left, top), (right, bottom), (0, 255, 0), 1)
                cv2.rectangle(frame2, (left, bottom - 20), (right, bottom), (0, 255, 0), cv2.FILLED)
                cv2.putText(frame2, "Face", (left + 7, bottom - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)

                if name != 'Unknown':
                    status = "0 Dose"
                    if data[3] != "NULL" and data[4] != "NULL":
                        status = "2 Doses"
                    elif data[3] == "NULL" or data[4] == "NULL":
                        status = "1 Doses"
                    print(result)
                    dictionary = {
                        "Full Name": name,
                        "Student Id": data[1],
                        "Expired Date": data[6],
                        "Campus": data[7],
                        "First Dose": data[3],
                        "Second Dose": data[4],
                        "Vaccine status": status,
                        "Infected": data[5],
                        "Health Declaration Date": data[8],
                        "Health Declaration Status": data[9],
                        "Access Permission": "Allowed" if result == "True" else "Denied",
                    }
                else:
                    dictionary = {
                        "Full Name": "Unknown",
                        "Student Id": "Unknown",
                        "Expired Date": "Unknown",
                        "Campus": "Unknown",
                        "First Dose": "Unknown",
                        "Second Dose": "Unknown",
                        "Vaccine status": "Unknown",
                        "Infected": "Unknown",
                        "Health Declaration Date": "Unknown",
                        "Health Declaration Status ": "Unknown",
                        "Access Permission": "Denied",
                    }

                with open("templates/data.json", "w") as outfile:
                    json.dump(dictionary, outfile)
                i += 1
            i = 0

        # Detec face bang cai frame danh cho Admin! Website chi hien thi mat cho user thoi.
        cv2.imshow("Admin Page", frame2)
        if cv2.waitKey(1) & 0xFF == ord('s'):
            pass

        ret, buffer = cv2.imencode('.jpg', frame1)
        frame1 = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame1 + b'\r\n')


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/video')
def video():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


@app.route('/result')
def result():
    f = open("templates/data.json")
    data = json.load(f)
    return render_template('result.html', jsonfile=json.dumps(data))


@app.route('/add_image', methods = ['POST'])
def add_image():
    data = request.get_json()

    # new_image = Image(base64s=image_data)
    # db.session.add(new_image)
    # db.session.commit()

    image = base64.b64decode(str(data['base64s']))
    print(data['name'])
    print(data['id'])
    print(data['vaccination'])
    print(data['firstDose'])
    print(data['secondDose'])
    print(data['F0'])
    print(data['expired_ID'])
    print(data['campus'])
    print(data['daily_health_declaration'])
    print("REACGH    ", data['health_declaration_status'])
    text = data['name']
    name_cus = data['name']
    id_cus = data['id']
    vacin_cus = data['vaccination']
    firstCus = data['firstDose']
    secCus = data['secondDose']
    F0Cus = data['F0']
    exp_cus = data['expired_ID']
    campus_cus = data['campus']
    declare_cus = data['daily_health_declaration']
    health_cus = data['health_declaration_status']
    with open('demofile.txt', 'a') as fd:
        fd.write(str("\n")+str(name_cus)+str(",")+str(id_cus)+str(",")+str(vacin_cus)+str(",")+str(firstCus)+str(",")+str(secCus)+str(",")+str(F0Cus)+str(",")+str(exp_cus)+str(",")+str(campus_cus)+str(",")+str(declare_cus)+str(",")+str(health_cus))


    directory = os.listdir("Images")

    # os.mkdir("Images/Nguyen Minh Long")
    isExist = False

    for file in directory:
        if text == file:
            print(file)
            isExist = True
    if not isExist:
        os.mkdir("Images/" + text)
        studentImages[text] = "1.png"

    filename = 'Images/' + text + '/1.png'  # I assume you have a way of picking unique filenames
    with open(filename, 'wb') as f:
        f.write(image)
#
#     write_face("Images/Nguyen Minh Long/1.png", "Images/Nguyen Minh Long/", "", 1, 224)
#
    #writeCSV(text)
    return image

if __name__=="__main__":
    app.run(host="0.0.0.0", debug=True)
    
