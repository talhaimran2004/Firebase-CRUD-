// BUTTONS
var insert = document.getElementById('insert');
var read = document.getElementById('read');
var update = document.getElementById('update');
var del = document.getElementById('delete');


var rollV, nameV, genderV, addressV;

function readForm() {
    rollV = document.getElementById('roll').value;
    nameV = document.getElementById('name').value;
    genderV = document.getElementById('gender').value;
    addressV = document.getElementById('address').value;
    // console.log(rollV, nameV, genderV, addressV);
}

//Insert Function
insert.addEventListener('click', () => {
    readForm();

    firebase
        .database()
        .ref('students/' + rollV)
        .set(
            {
                rollNumber: rollV,
                name: nameV,
                gender: genderV,
                address: addressV,
            }
        );
    alert('Data Added!');
    document.getElementById('roll').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('address').value = '';
})


//Read Function
read.addEventListener('click', () => {
    readForm();

    firebase
        .database()
        .ref("students/" + rollV)
        .on('value', function (snap) {
            document.getElementById('roll').value = snap.val().rollNumber;
            document.getElementById('name').value = snap.val().name;
            document.getElementById('gender').value = snap.val().gender;
            document.getElementById('address').value = snap.val().address;
        })
    alert('Data Readed!');
})


//Update Function
update.addEventListener('click', () => {
    readForm();

    firebase
        .database()
        .ref('students/' + rollV)
        .update(
            {
                // rollNumber: rollV,
                name: nameV,
                gender: genderV,
                address: addressV
            }
        );
    alert('Data Updated!');
    document.getElementById('roll').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('address').value = '';
})


//Delete Function
del.addEventListener('click', () => {
    readForm();

    firebase
        .database()
        .ref('students/' + rollV)
        .remove();
    alert('Data Deleted!');
    document.getElementById('roll').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('address').value = '';
})