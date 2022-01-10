describe('test Controller', () => {

  beforeEach(module('test'));

  beforeEach(inject(($rootScope, $controller) => {
    scope = $rootScope.$new();
    vm = $controller('IndexController', {
      $scope: scope
    });
  }));

  describe('sum', () => {
    it('2 + 2 should = 4', () => {
      const value1 = 2;
      const value2 = 2;
      const sumResult = 4

      const result = vm.sum(value1, value2);

      expect(result).toBe(sumResult);
    });

    it('2 + 2 shouldn\'t = 5', () => {
      const value1 = 2;
      const value2 = 2;
      const sumResult = 5

      const result = vm.sum(value1, value2);

      expect(result).not.toEqual(sumResult);
    });
  });
});