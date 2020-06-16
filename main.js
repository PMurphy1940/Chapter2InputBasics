// Some starter code
const container = document.querySelector("#wishlist")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const favoriteThings = document.querySelector("#favoriteThings").value
    const location = document.querySelector("#location").value
    if ( favoriteThings === "" | location === "") {
        window.alert("Sorry, all fields must be filled out")
    }
    else {
    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <li>
        I can purchase ${favoriteThings} at ${location}.
        </li>
    `
    }
})