// Handles response if there's no network.
function handle_network_error(message) {
    document.getElementsByClassName('basic_country_data_content')[0].style.display = 'none';
    document.getElementsByClassName('dark_mode_toggle')[0].style.display = 'none'
    let newTitle = document.createElement('h1')
    newTitle.classList.add('text')
    newTitle.classList.add(localStorage.getItem('theme_mode'))
    newTitle.innerHTML = String(message)
    newTitle.style.textAlign = 'center'
    newTitle.style.marginTop = '5vh'
    newTitle.style.marginLeft = '10%'
    newTitle.style.width = '80%'
    document.body.appendChild(newTitle)

    return
}


// Set the original theme mode.
if (localStorage.getItem('theme_mode') == null) {
    localStorage.setItem('theme_mode', 'light')
}

// If a theme mode has been saved locally, retrieve, that instead.
localStorage.getItem('theme_mode') == 'dark' ? toggle_dark_mode(): ''

// Check whether there's an internet connection (to receieve API data returned).
if (navigator.onLine) {
    $.getJSON('https://restcountries.com/v3.1/all', (data) => {
        display_basic_info(data)
    })
}
else {
    handle_network_error('Failed To Load Data. Please Reconnect Via Wi-Fi or Mobile Data.')
}