// Available = 'A' Occupied = 'O' Person = 'P';

var coach = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [true, true, true, true, true, true, true],
    [false, false, false]
]

console.log(bookCoach(coach, 0, 0, 1))

function bookCoach(coach, row, col, person) {
    if (person == 8) {
        console.log("true");
        return 1;
    }


    var count = 0;
    for (let i = row; i < coach.length; i++) {
        for (let j = col; j < coach[i].length; j++) {
            if (coach[i][j] && isAround(coach, i, j, person)) {
                console.log(i + " " + j + " " + person)
                coach[i][j] = false;

                count = count + bookCoach(coach, i, j, person + 1);

                coach[i][j] = true;

            }
        }
    }
    return count;
}

function isAround(coach, row, col, person) {
    if (person == 1 && coach[row][col]) {
        return true;
    }


    // if (coach[row][col]) return false;

    if (row == 0) {
        if (col == 0 && (coach[row][col + 1] || coach[row + 1][col])) return true;

        else if (col == coach[row].length - 1 && (coach[row][col - 1] || coach[row + 1][col])) return true;

        else if (coach[row][col + 1] || coach[row][col - 1] || coach[row + 1][col]) return true;
    } else if (row == coach.length - 1) {
        if (col == 0 && (coach[row][col + 1] || coach[row - 1][col])) return true;

        else if (col == coach[row].length - 1 && (coach[row][col - 1] || coach[row - 1][col])) return true;

        else if (coach[row][col + 1] || coach[row][col - 1] || coach[row - 1][col]) return true;
    } else {
        if (col == 0 && (coach[row][col + 1] || coach[row - 1][col])) return true;

        else if (col == coach[row].length - 1 && (coach[row][col - 1] || coach[row - 1][col])) return true;

        else if (coach[row][col + 1] || coach[row][col - 1] || coach[row - 1][col] || coach[row + 1][col]) return true;
    }

    return false;
}