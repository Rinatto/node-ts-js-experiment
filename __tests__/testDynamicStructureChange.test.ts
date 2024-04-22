// Мокирование модуля Animal с использованием jest.fn() и mockImplementation
jest.mock('../ts/Animal', () => {
    return {
      Animal: jest.fn().mockImplementation((name: string) => {
        return {name, newProperty: undefined};
      })
    };
  });
  
  // Подключение необходимых модулей, здесь предполагается, что они импортированы в начале файла
   const { testDynamicStructureChange } = require('../ts/testDynamicStructureChange');
   const { Animal } = require('../ts/Animal');
  
  // Описание тестового набора
  describe('Dynamic Structure Change', () => {
    let originalLog: typeof console.log;
  
    // Перед началом всех тестов сохраняем оригинальный console.log и заменяем его моком
    beforeAll(() => {
      originalLog = console.log;
      console.log = jest.fn();
    });
  
    // После завершения всех тестов восстанавливаем console.log
    afterAll(() => {
      console.log = originalLog;
    });
  
    // Тест на создание 100000 экземпляров класса Animal
    test('creates 100000 animals', () => {
      testDynamicStructureChange();
  
      // Проверка, что мок конструктора Animal был вызван 100000 раз
      expect(Animal).toHaveBeenCalledTimes(100000);
      // Проверка, что каждый вызов конструктора Animal содержал строку как аргумент
      expect(Animal).toHaveBeenCalledWith(expect.any(String));
  
      // Очистка всех моков после выполнения теста
      jest.clearAllMocks();
    });
  });
  