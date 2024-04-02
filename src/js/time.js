const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function fetchAndDisplayTime() {
    fetch("https://worldtimeapi.org/api/timezone/" + userTimeZone)
        .then(response => response.json())
        .then(data => {
            const datetime = data.datetime;
            const userDate = new Date(datetime);
            const formattedTime = userDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
            document.getElementById('user-time').innerText = formattedTime;
        })
        .catch(error => {
            console.error('Error fetching time:', error);
        });
}

fetchAndDisplayTime();

setInterval(fetchAndDisplayTime, 30 * 1000); 
