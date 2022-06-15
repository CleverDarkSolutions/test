const students = [
    {
        name: 'Martin',
        lastName: 'Lant',
        marks: [9, 8, null, 7, 5],
    },
    {
        name: 'Francesco',
        lastName: 'Portus',
        marks: [5, 4, 2, 3, 2],
    },
    {
        name: 'Bill',
        lastName: 'Merdoc',
        marks: [10, null, null, null, 10],
    },

    {
        name: 'John',
        lastName: 'Entman',
        marks: [9, 8, 9, 7, 5],
    },
];

function displayStudents(){
    let container = document.querySelector('#container');

    students.forEach( (item) => {
        let card = document.createElement('div');
        card.setAttribute('class','card');
        let name = document.createElement('p');
        name.innerText = item.name;
        let lastName = document.createElement('p');
        lastName.innerText = item.lastName;

        let attendanceFilter = item.marks.filter(mark => {
            return mark > 0;
        });

        let attendance = document.createElement('p');
        attendance.innerText = 'Attendance: '+ attendanceFilter.length;

        let averageFromMarks = item.marks.reduce((a, b) => a + b, 0) / item.marks.length;

        if(averageFromMarks < 5){
            card.style.border = '2px solid red';
        }
        else if(averageFromMarks > 5){
            card.style.border = '2px solid green';
        }

        let average = document.createElement('p');
        average.innerText = 'Average: '+ averageFromMarks;

        card.append(name);
        card.append(lastName);
        card.append(attendance);
        card.append(average);
        console.log(attendanceFilter);
        console.log(averageFromMarks);

        container.append(card);

    })
}

function setCardsWhite(){
    // had to put it in separate function in order to work with forEach
    let cards = document.querySelectorAll('.card');
    cards.forEach( (card) => {card.style.background = 'white'})
}

function addEventListeners(){
    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if(card.style.background === 'gray'){
                card.style.background = 'white';
            }
            else{
                setCardsWhite();
                card.style.background = 'gray';
            }
        })
    })
}

displayStudents();
addEventListeners();
