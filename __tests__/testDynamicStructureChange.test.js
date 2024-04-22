jest.mock('../js/Animal', () => {
    return jest.fn().mockImplementation((name) => {
      return {name: name, newProperty: undefined};
    });
  });
  
  const { testDynamicStructureChange } = require('../js/testDynamicStructureChange');
  const Animal = require('../js/Animal');
  
  describe('Dynamic Structure Change', () => {
    let originalLog;
  
    beforeAll(() => {
      originalLog = console.log;
      console.log = jest.fn();
    });
  
    afterAll(() => {
      console.log = originalLog;
    });
  
    test('creates 100000 animals', () => {
      testDynamicStructureChange();
  
      expect(Animal).toHaveBeenCalledTimes(100000);  // Проверка, что конструктор вызван 100000 раз
      expect(Animal).toHaveBeenCalledWith(expect.any(String));  // Дополнительная проверка на аргументы конструктора
  
      jest.clearAllMocks();  // Очистка моков после теста
    });
  });
  