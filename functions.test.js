const functions = require('./functions');

// this does the correspoding functions for every test in the file
// beforeEach(() => initDatabase());
// afterEach(() => closedDatabase());

// this does the correspoding tasks before all the tests and at the end of all tests
// beforeAll(() => initDatabase());
// afterAll(() => closedDatabase());

// target some tests and do it before and after only those
const nameCheck = () => console.log('Checking names...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

const initDatabase = () => console.log('Database Initialized.');
const closedDatabase = () => console.log('Database Closed.');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefines
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toBeTruthy can be done using .not.toBeFalsy()

test('User should be Lisa Chandra object', () => {
    // fails: as toBe() is only for primitive data types and objects and arrays cannot be compared using this
    // expect(functions.createUser()).toBe({ // same });
    expect(functions.createUser()).toStrictEqual({
        // toStrictEqual was recommended in the terminal whereas the video uses toEqual
        firstName: 'Lisa',
        lastName: 'Chandra'
    });
});

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
    // there's also toBeLessThanOrEqual(something)
});

// Regular Expressions (Regex)
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/); // is case sensitive
    // expect('teami').not.toMatch(/I/i); // to make it case insensitive
});

// Arrays
test('Admin should be in username', () => {
    usernames = ['John', 'Karen', 'Admin'];
    expect(usernames).toContain('Admin');
});

// working with async data

// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    // number of assertions, which here would be 1. 
    // It verifies that a certain number of assertions are called.

    // we also gotta return the promise
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });

    // if we remove both expected assertions and the return keyword before the fetchUser function is called,
    // there seems to be no error which means it would pass no matter the username returned and therefore
    // it is important to make sure that both of them are present to get correct results
});

// Async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
});