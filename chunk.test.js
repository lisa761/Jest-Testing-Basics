const chunkArray = require('./chunk');

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with a lenght of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const length = 2;
    const chunkedArr = chunkArray(numbers, length);

    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Chunk an array of 3 values with a lenght of 1', () => {
    const numbers = [1, 2, 3];
    const length = 1;
    const chunkedArr = chunkArray(numbers, length);
    
    expect(chunkedArr).toEqual([[1], [2], [3]]);
});