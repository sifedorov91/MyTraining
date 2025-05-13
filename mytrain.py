import json
import os.path
from datetime import datetime


def open_json(train_name: str):
    if not os.path.isfile(train_name):
        data = {str(datetime.today().date()): 0}  # .strftime('%d.%m.%Y') преобразовать в дд.мм.гггг
        with open(train_name, mode='w') as file:
            json.dump(data, file)
        with open(train_name, mode='r') as file:
            d = json.load(file)
            return d
    with open(train_name, mode='r') as file:
        d = json.load(file)
        return d


def save_json(train_name: str, data: dict):
    with open(train_name, mode='w') as file:
        json.dump(data, file)


def progress(fact, target):
    res = round((fact / target) * 100)
    return res if res > 3 else 3


