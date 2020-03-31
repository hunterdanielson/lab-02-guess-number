export default function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        // winner winner chicken dinner
        return 0;
    } else if (guess < correctNumber) {
        // too low
        return -1;
    } else if (guess > correctNumber) {
        // too high
        return 1;
    } else {
        alert('Not a number');
    }
}