const API_KEY = "YwzKzEpIst9_a-yvhUu_gu62r_Q";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

// Firstly, it needs to make a  GET request to the API_URL 
// with the API_KEY.

// Then, pass this data to a function that will display it

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }
}

