function keys (obj) {
    for (let o in obj) {
        console.log(`Ключ ${o}, значение ${obj[o]}`)
    }
}

keys({name: 'Арсений', age: 22, city: 'Санкт-Петербург'})