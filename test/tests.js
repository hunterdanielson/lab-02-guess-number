import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('test', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const a = 1;
    const b = 2;
    const c = 3;
    const d = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const test1 = compareNumbers(a, b);
    const test2 = compareNumbers(c, d);
    const test3 = compareNumbers(c, b);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(test1, -1);
    assert.equal(test2, 0);
    assert.equal(test3, 1);

});
