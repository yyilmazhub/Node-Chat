const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      username: 'Mike',
      room: '01'
    }, {
      id: '2',
      username: 'Trevor',
      room: '02'
    }, {
      id: '3',
      username: 'Manila',
      room: '04'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      username: 'John',
      room: 'Doe'
    };

    const resUser = users.addUser(user.id, user.username, user.room);
    
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '42';
    const user = users.removeUser(userId);

    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    user = users.getUser(userId);

    expect(userId).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '42';
    user = users.getUser(userId);

    expect(userId).toBe(userId);
  });

  it('should return names for 01', () => {
    const userList = users.getUserList('01');
    expect(userList).toEqual(['Mike', 'Trevor']);
  });

  it('should return names for 02', () => {
    const userList = users.getUserList('02');
    expect(userList).toEqual(['Manila']);
  });
});
