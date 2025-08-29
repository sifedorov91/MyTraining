from flask import Flask, render_template, request
import mytrain
from datetime import datetime

app = Flask(__name__)
PUSHUPS = 'mytrain_log.json'  #Имя файла с отжиманиями
WALKING = 'walking_log.json'  #Имя файла с ходьбой

@app.route('/pushups', methods=["GET", "POST"])
def pushups():
    if request.method == "POST":
        d = mytrain.open_json(PUSHUPS) #распаковываем файл в словарь
        if request.form['count'] == '' or int(request.form['count']) == 0:
            if request.form['date'] in d:
                d.pop(request.form['date'])
        else:
            d[request.form['date']] = int(request.form['count']) #пишем дату и кол-во в словарь
        mytrain.save_json(PUSHUPS, d) #Сохраняем словарь обратно в файл
    train_count = len(mytrain.open_json(PUSHUPS).keys()) # Распаковываем словарь и считаем количество дней тренеровки
    step_count = sum(mytrain.open_json(PUSHUPS).values()) # Распаковываем словарь и считаем количество отжиманий
    progres = mytrain.progress(train_count, 90)  # Для прогрессбара
    datenow = str(datetime.today().date())  # Для автозаполнения на форме
    days_left = mytrain.days_left(mytrain.open_json(PUSHUPS))
    per_day = round((9000 - step_count)/days_left)
    return render_template('pushups.html', train_count=train_count,
                           step_count=step_count, progres=progres,
                           datenow=datenow, daysleft=days_left, perday=per_day)


@app.route('/walking', methods=["GET", "POST"])
def walking():
    if request.method == "POST":
        print(request.form['date'], request.form['count'], request.form['vremya'])
        d = mytrain.open_json(WALKING) #распаковываем файл в словарь
        if request.form['count'] == '' or int(request.form['count']) == 0:
            if request.form['date'] in d:
                d.pop(request.form['date'])
        else:
            d[request.form['date']] = [int(request.form['count']), int(request.form['vremya'])] #пишем дату и кол-во в словарь
        mytrain.save_json(WALKING, d) #Сохраняем словарь обратно в файл
    train_count = len(mytrain.open_json(WALKING).keys()) # Распаковываем словарь и считаем количество дней тренеровки
    step_count = sum([i[0] for i in mytrain.open_json(WALKING).values()]) # Распаковываем словарь и считаем количество отжиманий
    train_time = sum([i[1] for i in mytrain.open_json(WALKING).values()])
    progres = mytrain.progress(train_count, 90)  # Для прогрессбара
    datenow = str(datetime.today().date())  # Для автозаполнения на форме
    walk_data = mytrain.open_json(WALKING)
    walk_stat = mytrain.walk_statistic(walk_data)
    return render_template('walking.html', train_count=train_count,
                           step_count=step_count, progres=progres,
                           datenow=datenow, train_time=train_time, walk_stat=walk_data)

@app.route('/animation', methods=['GET'])
def animation():
    return render_template('animation.html')


@app.route('/grid', methods=['GET'])
def gridtest():
    return render_template('gridtest.html')


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, host='192.168.1.113', port=1234)
