describe('test Users service', () => {
  let Users = '';
  const userList = [
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

  beforeEach(module('api.users'));

  beforeEach(inject((_Users_) => {
    Users = _Users_;
  }));

  it('should exist', () => {
    expect(Users).toBeDefined();
  });

  describe('.all()', () => {
    it('should exist', () => {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', () => {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', () => {
    it('should exist', () => {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', () => {
      expect(Users.findById('2')).toEqual({
        id: '2',
        name: 'Luiz',
        role: 'Mestre',
        location: 'Rio Pretão'
      });
    });

    it('should return undefined if the user cannot be found', () => {
      expect(Users.findById('ABC')).not.toBeDefined();
    });

    it('should return user with lcoation Rio Pretão', () => {
      expect(Users.findByLocation('Rio Pretão')).toEqual([
        {
          id: '1',
          name: 'Giovani',
          role: 'Developer',
          location: 'Rio Pretão'
        },
        {
          id: '2',
          name: 'Luiz',
          role: 'Mestre',
          location: 'Rio Pretão'
        }
      ])
    })
  });
});
