import json
import os.path
from datetime import datetime, timedelta


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


def walk_statistic(data):
    # stat = 'Дата       |Шаги   |Время\n'
    # for k, v in data.items():
    #     date = datetime.strptime(k, '%Y-%m-%d')
    #     stat += f'{date:%d.%m.%Y} |{v[0]}    |{v[1]} мин.\n'
    # return stat
    stat = ''
    for k, v in data.items():
        date = datetime.strptime(k, '%Y-%m-%d')
        stat += f'{date:%d.%m.%Y} {v[0]} {v[1]},'
    return stat


def days_left(data: dict):
    dates = sorted(data.keys())
    target_days = 90
    target_end_date = datetime.strptime(dates[0], "%Y-%m-%d") + timedelta(days=target_days)
    return (target_end_date - datetime.now()).days + 1


# data = open_json('mytrain_log.json')
# print(days_left(data))
