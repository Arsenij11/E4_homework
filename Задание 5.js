class Connect {
    constructor (){
        this.is_active = false;
        this.to_connect = function () {
            this.is_active = true;
        };
        this.to_disconnect = function () {
            this.is_active = false;
        };
    }
    to_connect() {
        this.connection.to_connect();
        alert(`Устройство ${this.name} успешно включено в розетку.`);
    }
    to_disconnect() {
        this.connection.to_disconnect();
        alert(`Устройство ${this.name} успешно отключено из розетки.`);
    }
}
class Equipment{
    constructor (name, color, weight, power, owncharacteristics) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.power = power;
        this.owncharacteristics = owncharacteristics;
        this.connection = new Connect();
    }
    show_info() {
        let text = `Название устройства: ${this.name}, цвет: ${this.color}, вес: ${this.weight} кг, мощность: ${this.power} Вт\n`;
        let ch = '\nСобственные характеристики:\n';
        for (let o in this.owncharacteristics) {
            ch += `${o} : ${this.owncharacteristics[o]}\n`;
        }
        alert(text + ch + `\n${this.connection.is_active ? 
            'Устройство включено в розетку' : 'Устройство выключено из розетки'}`);
    }
}
const power_unit = new Equipment('Блок питания Aerocool', 'Чёрный', 1.43, 750, {
    formfactor: 'ATX',
    main_power_connector: '20 + 4 pin',
});

const lamp = new Equipment('Настольный светильник Xiaomi Mi Smart', 'Белый', 0.8, 9, {
    base_type: 'LED',
});


let equipment = [power_unit, lamp];

while (true) {
    let num = Number(
        prompt(
            'Введите номер из списка:\n1 - Посмотреть характеристики объектов\n2 - Включить устройство в розетку\n3 - Выключить устройство из розетки\n4 - Выйти из программы'
        )
    );

    if (num === 1) {
        for (let e of equipment) {
            e.show_info();
        }
    } else if (num === 2) {
        let active_eq = equipment.filter(e => !e.connection.is_active);
        if (active_eq.length > 0) {
            let equip = prompt(
                `Введите устройство для подключения.\nСписок доступных устройств для подключения:\n${active_eq
                    .map(e => e.name)
                    .join('\n')}`
            );
            let device = active_eq.find(e => e.name === equip);
            if (device) {
                device.connection.to_connect();
                alert(`Устройство ${device.name} успешно включено в розетку`)
            } else {
                alert('Данного устройства не существует!');
            }
        } else {
            alert('В данный момент все устройства подключены');
        }
    } else if (num === 3) {
        let not_active_eq = equipment.filter(e => e.connection.is_active);
        if (not_active_eq.length > 0) {
            let equip = prompt(
                `Введите устройство для отключения.\nСписок доступных устройств для отключения:\n${not_active_eq
                    .map(e => e.name)
                    .join('\n')}`
            );
            let device = not_active_eq.find(e => e.name === equip);
            if (device) {
                device.connection.to_disconnect();
                alert(`Устройство ${device.name} успешно отключено из розетки`)
            } else {
                alert('Данного устройства не существует!');
            }
        } else {
            alert('В данный момент все устройства отключены');
        }
    } else if (num === 4) {
        break;
    } else {
        alert('Ошибка! Введите корректный номер');
    }
}