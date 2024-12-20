// массив ObjInf с 20 объектами
var ObjInf = [
  // Служащий - 6 записей
  {
    id: '1',
    description: 'Ввод рабочего времени за май',
    createdAt: new Date('2024-05-01T08:00:00'),
    author: 'Служащий Иванов Иван',
    department: 'Отдел кадров',
    payrollAmount: 50000
  },
  {
    id: '2',
    description: 'Выбор способа начисления зарплаты (банковский перевод)',
    createdAt: new Date('2024-05-03T10:30:00'),
    author: 'Служащий Петров Петр',
    department: 'Бухгалтерия',
    payrollAmount: 48000
  },
  {
    id: '3',
    description: 'Изменение личных данных сотрудника Иванова',
    createdAt: new Date('2024-05-05T09:45:00'),
    author: 'Служащий Сидоров Алексей',
    department: 'IT-отдел',
    payrollAmount: 51000
  },
  {
    id: '4',
    description: 'Запрос отчёта о зарплате за апрель',
    createdAt: new Date('2024-05-07T15:20:00'),
    author: 'Служащий Кузнецов Андрей',
    department: 'Продажи',
    payrollAmount: 52000
  },
  {
    id: '5',
    description: 'Запрос рабочего графика на июнь',
    createdAt: new Date('2024-05-10T12:00:00'),
    author: 'Служащий Смирнов Сергей',
    department: 'Производство',
    payrollAmount: 47000
  },
  {
    id: '6',
    description: 'Запрос истории выплат за текущий год',
    createdAt: new Date('2024-05-15T13:10:00'),
    author: 'Служащий Иванов Иван',
    department: 'Отдел кадров',
    payrollAmount: 50000
  },

  // Бухгалтер - 7 записей
  {
    id: '7',
    description: 'Подсчёт зарплаты сотрудника Петрова за май',
    createdAt: new Date('2024-05-25T11:00:00'),
    author: 'Бухгалтер Орлова Ольга',
    department: 'Бухгалтерия',
    payrollAmount: 48000
  },
  {
    id: '8',
    description: 'Отправление запроса в банк на выплату зарплат',
    createdAt: new Date('2024-05-26T09:00:00'),
    author: 'Бухгалтер Орлова Ольга',
    department: 'Бухгалтерия',
    payrollAmount: 0
  },
  {
    id: '9',
    description: 'Корректировка расчёта зарплаты Иванова',
    createdAt: new Date('2024-05-27T16:45:00'),
    author: 'Бухгалтер Смирнова Елена',
    department: 'Бухгалтерия',
    payrollAmount: 50000
  },
  {
    id: '10',
    description: 'Проверка отчётов о выплатах за май',
    createdAt: new Date('2024-05-28T10:00:00'),
    author: 'Бухгалтер Орлова Ольга',
    department: 'Бухгалтерия',
    payrollAmount: 0
  },
  {
    id: '11',
    description: 'Подтверждение выплат зарплат за май',
    createdAt: new Date('2024-05-28T11:15:00'),
    author: 'Бухгалтер Смирнова Елена',
    department: 'Бухгалтерия',
    payrollAmount: 0
  },
  {
    id: '12',
    description: 'Запрос истории выплат за прошлый год',
    createdAt: new Date('2024-05-29T12:30:00'),
    author: 'Бухгалтер Иванова Мария',
    department: 'Бухгалтерия',
    payrollAmount: 0
  },
  {
    id: '13',
    description: 'Подсчёт зарплаты для всех сотрудников за май',
    createdAt: new Date('2024-05-30T14:00:00'),
    author: 'Бухгалтер Иванова Мария',
    department: 'Бухгалтерия',
    payrollAmount: 0
  },

  // Администратор - 7 записей
  {
    id: '14',
    description: 'Добавление нового сотрудника Сергеев С.С.',
    createdAt: new Date('2024-05-01T10:00:00'),
    author: 'Администратор Васильев Виктор',
    department: 'HR-отдел',
    payrollAmount: 0
  },
  {
    id: '15',
    description: 'Удаление сотрудника Сидоров А.А.',
    createdAt: new Date('2024-05-02T12:00:00'),
    author: 'Администратор Васильев Виктор',
    department: 'HR-отдел',
    payrollAmount: 0
  },
  {
    id: '16',
    description: 'Редактирование данных сотрудника Петрова П.П.',
    createdAt: new Date('2024-05-03T15:00:00'),
    author: 'Администратор Захарова Елена',
    department: 'HR-отдел',
    payrollAmount: 0
  },
  {
    id: '17',
    description: 'Управление должностями сотрудников',
    createdAt: new Date('2024-05-05T09:30:00'),
    author: 'Администратор Захарова Елена',
    department: 'HR-отдел',
    payrollAmount: 0
  },
  {
    id: '18',
    description: 'Формирование отчётов для руководства',
    createdAt: new Date('2024-05-06T11:45:00'),
    author: 'Администратор Васильев Виктор',
    department: 'HR-отдел',
    payrollAmount: 0
  },
  {
    id: '19',
    description: 'Управление доступом сотрудников',
    createdAt: new Date('2024-05-07T13:15:00'),
    author: 'Администратор Захарова Елена',
    department: 'HR-отдел',
    payrollAmount: 0
  },
  {
    id: '20',
    description: 'Просмотр статистики использования системы',
    createdAt: new Date('2024-05-08T14:00:00'),
    author: 'Администратор Васильев Виктор',
    department: 'HR-отдел',
    payrollAmount: 0
  }
];
class ObjManager {
  #_objs;

  constructor(objs = []) {
      this.#_objs = objs.slice();
  }

  // Метод для получения объектов с пагинацией и фильтрацией
  getObjs(skip = 0, top = this.#_objs.length, filterConfig = {}) { // skip — сколько объектов пропускаем (индекс с которого начинаем), top — сколько объектов нужно вернуть.
      let filteredObjs = [...this.#_objs];

      // Применение фильтров
      if (filterConfig.post) {
          filteredObjs = filteredObjs.filter(obj => obj.post === filterConfig.post);
      }
      if (filterConfig.name) {
          filteredObjs = filteredObjs.filter(obj => obj.name === filterConfig.name);
      }
      if (filterConfig.bithday) {
          filteredObjs = filteredObjs.filter(obj =>
              new Date(obj.bithday).toDateString() === new Date(filterConfig.bithday).toDateString()
          );
      }
      if (filterConfig.createdAt) {
          filteredObjs = filteredObjs.filter(obj =>
              new Date(obj.createdAt).toDateString() === new Date(filterConfig.createdAt).toDateString()
          );
      }

      // Сортировка по id (по возрастанию)
      filteredObjs.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));

      // Пагинация
      return filteredObjs.slice(skip, skip + top);
  }

  // Метод для получения объекта по id
  getObj(id) {
      return this.#_objs.find(obj => obj.id === id) || null;
  }

  // Метод для проверки валидности объекта
  validateObj(obj) {
      return (
          typeof obj.post === 'string' &&
          typeof obj.name === 'string' &&
          obj.bithday instanceof Date &&
          obj.createdAt instanceof Date &&
          obj.description?.length <= 200
      );
  }

  // Метод для добавления объекта в коллекцию
  addObj(obj) {
      if (!this.validateObj(obj)) return false;

      // Генерация нового id
      const maxId = this.#_objs.reduce((max, obj) => Math.max(max, parseInt(obj.id, 10)), 0);
      obj.id = (maxId + 1).toString();

      this.#_objs.push(obj);
      return true;
  }

  // Метод для изменения объекта по id
  editObj(id, updatedFields) {
      const objIndex = this.#_objs.findIndex(obj => obj.id === id);
      if (objIndex === -1) return false;

      const obj = this.#_objs[objIndex];
      const newObj = { ...obj, ...updatedFields };

      // Проверяем только изменяемые поля
      const isValid = this.validateObj({
          ...obj,
          ...updatedFields,
          id: obj.id,
          createdAt: obj.createdAt,
          name: obj.name
      });

      if (!isValid) return false;

      this.#_objs[objIndex] = newObj;
      return true;
  }

  // Метод для добавления массива объектов
  addAll(objs) {
    const invalidObjs = [];
    objs.forEach((obj) => {
        if (!this.addObj(obj)) {
            invalidObjs.push(obj);
        }
    });
    return invalidObjs;
  }

  // Метод для удаления объекта по id
  removeObj(id) {
      const objIndex = this.#_objs.findIndex(obj => obj.id === id);
      if (objIndex === -1) return false;

      this.#_objs.splice(objIndex, 1);
      return true;
  }
}

// Создание экземпляра класса
const manager = new ObjManager(ObjInf);

// Пример вызова методов
console.log('Объекты загружены:', manager.getObjs());
console.log('Объект c id "1":', manager.getObj('1'));

// Пример добавления нового объекта
const newObj = { post: 'Designer', name: 'Alice', bithday: new Date('1995-07-22'), createdAt: new Date(), description: 'Designer description' };
console.log('Добавлен новый объект:', manager.addObj(newObj));

// Пример редактирования объекта
console.log('Редактирование объекта с id "1":', manager.editObj('1', { description: 'Updated description for John' }));

// Пример удаления объекта
console.log('Удаление объекта с id "2":', manager.removeObj('2'));

// Пример добавления нескольких объектов
const invalidObjs = manager.addAll([{ post: 'Tester', name: 'Bob', bithday: new Date('1998-09-10'), createdAt: new Date(), description: 'Tester description' }]);
console.log('Невалидные объекты при добавлении:', invalidObjs);

// Пример получения объектов с фильтрацией и пагинацией
console.log('Объекты с фильтром (name: "Alice") и пагинацией (skip: 0, top: 2):', manager.getObjs(0, 2, { name: 'Alice' }));
