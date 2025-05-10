import json
import os.path
from datetime import datetime


def open_json():
    if not os.path.isfile("mytrain_log.json"):
        data = {str(datetime.today().date()):0}  #.strftime('%d.%m.%Y') преобразовать в дд.мм.гггг
        with open('mytrain_log.json', mode='w')  as file:
            json.dump(data, file)
        with open('mytrain_log.json', mode='r') as file:
            d = json.load(file)
            return d
    with open('mytrain_log.json', mode='r') as file:
        d = json.load(file)
        return d


def save_json(data):
    with open('mytrain_log.json', mode='w') as file:
        json.dump(data, file)

