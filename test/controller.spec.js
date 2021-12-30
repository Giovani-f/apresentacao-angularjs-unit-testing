describe('test Controller', function () {

  beforeEach(module('test'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('IndexController', {
      $scope: scope
    });
  }));

  describe('testing sum', function () {
    it('should enter two number and return correct sum', function () {
      var result = scope.sum(2, 2);

      expect(result).toBe(4);
    });
  });
});