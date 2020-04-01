import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('tests', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 5;
    const guess1 = 2;
    const guess2 = 5;
    const guess3 = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const test1 = compareNumbers(guess1, expected);
    const test2 = compareNumbers(guess2, expected);
    const test3 = compareNumbers(guess3, expected);
    


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(test1, -1);
    assert.equal(test2, 0);
    assert.equal(test3, 1);
    assert.throws(
        compareNumbers(4, 4),
        'Not a number'
    );
});
