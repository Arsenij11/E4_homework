function has_prop (key, obj) {
    for (let o in obj) {
        if (o === key) {
            return true
        }
    }
    return false
}

const obj = {
    name : 'Арсений',
    city: 'Санкт-Петербург',
    age: 22,
    owncity: 'Архангельск'
}

const key = prompt('Введите искомый ключ', 'name')
alert(has_prop(key, obj) ? `Ключ ${key} существует в объекте 'obj'. Его значением является ${obj[key]}` : `Ключа ${key} в объекте 'obj' не существует`)