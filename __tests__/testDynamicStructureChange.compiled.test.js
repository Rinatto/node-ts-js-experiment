// Мокирование модуля Animal с использованием jest.fn() и mockImplementation
jest.mock('../dist/Animal', () => {
    return {
      Animal: jest.fn().mockImplementation((name) => {
        return {name, newProperty: undefined};
      })
    };
  });
  
  // Подключение необходимых модулей, предполагаем что они доступны в скомпилированной форме
  const { testDynamicStructureChange } = require('../dist/testDynamicStructureChange');
  const { Animal } = require('../dist/Animal');
  
  // Описание тестового набора
  describe('Dynamic Structure Change', () => {
    let originalLog;
  
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
  