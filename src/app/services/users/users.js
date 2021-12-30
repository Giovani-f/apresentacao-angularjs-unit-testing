(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('Users', function() {
    var Users = {};
    var userList = [
      {
        id: '1',
        name: 'Giovani',
        role: 'Developer',
        location: 'Rio Pretão',
      },
      {
        id: '2',
        name: 'Luiz',
        role: 'Mestre',
        location: 'Rio Pretão',
      },
      {
        id: '3',
        name: 'Caio',
        role: 'Developer',
        location: 'Mirassol',
      },
      {
        id: '4',
        name: 'Lucas',
        role: 'Designer',
        location: 'Marte',
      }
    ];

    Users.all = () => userList;

    Users.findById = (id) => {
      return userList.find(user => user.id === id)
    };

    Users.findByLocation = (location) => {
      return userList.filter(user => user.location === location)
    }

    return Users;
  });
})();
