document.getElementById('fetchButton').addEventListener('click', function() {
    const apiUrl; //Add api info here

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            <!-- Add code here --> 
            catDisplay.innerHTML = `<img src="${data[0].url}" alt="Random Cat">`;
        })
        .catch(error => {
            console.error('Error fetching the cat image:', error);
        });
});
