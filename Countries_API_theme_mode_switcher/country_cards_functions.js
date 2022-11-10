// Sets up each country card with all the API data passed in as a parameter.
function display_basic_info(country_data) {
    for (let x = 0; x < country_data.length; x++) {
        let section = document.getElementsByClassName('basic_country_data_section')[0]
        let country_card = document.createElement('div')
        country_card.classList.add('country_card')
        country_card.classList.add(localStorage.getItem('theme_mode'))
        country_card.classList.add(String(country_data[x]['region']))
        country_card.innerHTML =
        `
            <div class="country_flag_container">
                <img class="country_flag" src=" ` + String(country_data[x]['flags']['svg']) + ` ">
            </div>
            <br class="mobile_spacing">
            <div class="country_info">
                <h3 class="country_name ` + localStorage.getItem('theme_mode') + ` text">` + country_data[x]['name']['common'] + `</h3><br>
                <span class="population ` + localStorage.getItem('theme_mode') + ` text"><strong>Population:</strong> ` + String(Number(country_data[x]['population']).toLocaleString()) + `</span><br>
                <span class="region ` + localStorage.getItem('theme_mode') + ` text"><strong>Region:</strong> ` + String(country_data[x]['region']) + `</span><br>
                <span class="capital ` + localStorage.getItem('theme_mode') + ` text"><strong>Capital:</strong> ` + String(country_data[x]['capital']) + `</span>
            </div>
        `
        country_card.addEventListener('click', () => {
            display_full_country_data(country_data[x])
        })
        section.appendChild(country_card)
    }

    return
}

// Changes display from full country data -> all country cards.
function display_all_countries() {
    remove_full_country_data()
    alternate_content_displayed()

    return
}

// Changes display between full country data (with one specific country's data) or lsiting all country cards.
function alternate_content_displayed() {
    document.getElementsByClassName('basic_country_data_content')[0].style.display = document.getElementsByClassName('basic_country_data_content')[0].style.display == 'none' ? 'block': 'none'
    document.getElementsByClassName('full_country_data')[0].style.display = document.getElementsByClassName('full_country_data')[0].style.display == '' ? 'block' : ''

    return
}