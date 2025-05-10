from flask import Flask, render_template, request
import mytrain
from datetime import datetime

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        d = mytrain.open_json() #распаковываем файл в словарь
        if int(request.form['count']) == 0:
            if request.form['date'] in d:
                d.pop(request.form['date'])
        else:
            d[request.form['date']] = int(request.form['count']) #пишем дату и кол-во в словарь
        mytrain.save_json(d) #Сохраняем словарь обратно в файл
    train_count = len(mytrain.open_json().keys()) # Распаковываем словарь и считаем количество дней тренеровки
    step_count = sum(mytrain.open_json().values()) # Распаковываем словарь и считаем количество отжиманий
    progres = round((train_count / 90) * 100)  # Для прогрессбара
    datenow = str(datetime.today().date())  # Для автозаполнения на форме
    return render_template('index.html', train_count=train_count,
                           step_count=step_count, progres=progres,
                           datenow=datenow)


if __name__ == '__main__':
    app.run(debug=True, host='192.168.1.113', port=1234)
