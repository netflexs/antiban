

function validateUID() {
    // Get the value of the input field
    var uid = document.getElementById('uid').value;

    // Check if the length of the input value is between 9 and 11
    if (uid.length >= 9 && uid.length <= 11) {
        // If it's valid, display the valid result textarea and hide the not valid result textarea
        document.getElementById('validResult').style.display = 'block';
        document.getElementById('notValidResult').style.display = 'none';
        myPopup.show();
    } else {
        // If it's not valid, display the not valid result textarea and hide the valid result textarea
        document.getElementById('validResult').style.display = 'none';
        document.getElementById('notValidResult').style.display = 'block';
    }
}

function checkEnter(event) {
    if (event.keyCode === 13) {
        // If "Enter" key is pressed, trigger the click event of the button
        document.getElementById("submit").click();
        // Prevent the default action of the "Enter" key
        event.preventDefault();
    }
}

const myPopup = new Popup({
    id: "Alert",
    title: "Done..",
    content: `
        It going to bypass cheat
        somehow it didn't go long.
        so please do this again every 8h`,
});