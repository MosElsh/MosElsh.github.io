// Changes the country data shown.
function change_full_country_data(country_code) {
    remove_full_country_data()
    $.getJSON('https://restcountries.com/v3.1/alpha/' + country_code, (country_data) => {
        alternate_content_displayed()
        display_full_country_data(country_data[0])
    })

    return
}

// Removes the country data within the full country data (used for switching country's data information).
function remove_full_country_data() {
    document.getElementsByClassName('country_data_section')[0].remove()

    return
}

// Sets up content shown for the full country data section with the specific country data being passed in as a parameter.
function display_full_country_data(country_data) {
    alternate_content_displayed()
    let country_data_section = document.createElement('div')
    country_data_section.classList.add('country_data_section')
    country_data_section.classList.add(localStorage.getItem('theme_mode'))

    // Deals with adding all native names of the country in one string.
    let native_names_all = ''
    for (let x = 0; x < Object.values(Object.values(country_data['name']['nativeName'])[0]).length; x++) {
        native_names_all = native_names_all + Object.values(Object.values(country_data['name']['nativeName'])[0])[x]
        if (x != Object.values(Object.values(country_data['name']['nativeName'])[0]).length - 1) {
            native_names_all = native_names_all + ', '
        }
    }

    console.log(country_data['name'])
    console.log(Object.values(Object.values(country_data['name']['nativeName'])[0]))

    // Deals with adding all the top level domains in one string.
    let tld = ''
    for (let x = 0; x < country_data['tld'].length; x++) {
        tld = tld + country_data['tld'][x]
        if (x != country_data['tld'].length - 1) {
            tld = tld + ', '
        }
    }

    // Deals with adding all the currencies in one string.
    let currencies = ''
    for (let x = 0; x < Object.values(Object.values(country_data['currencies'])[0]).length; x++) {
        currencies = currencies + Object.values(Object.values(country_data['currencies'])[0])[x]
        if ( x != Object.values(Object.values(country_data['currencies'])[0]).length - 1) {
            currencies = currencies + ', '
        }
    }

    // Deals with adding all the languages of the country in one string.
    let languages = ''
    for (let x = 0; x < Object.values(country_data['languages']).length; x++) {
        languages = languages + Object.values(country_data['languages'])[x]
        if (x != Object.values(country_data['languages']).length - 1) {
            languages = languages + ', '
        }
    }

    // Deals with adding all the border countries in one string (wrapped in a button tag).
    let buttonHTML = ''
    if (country_data['borders'] != undefined) {
        for (let x = 0; x < country_data['borders'].length; x++) {

            buttonHTML = buttonHTML +  '<button class="border_country ' + localStorage.getItem('theme_mode') +' text" value=' + country_data['borders'][x] + ' onclick="change_full_country_data(this.value)">' + country_data['borders'][x] + '</button>'
        }
    }

    // Adds the data as HTML content.
    country_data_section.innerHTML = `
    <img class="large_country_flag" src="` + String(country_data['flags']['svg']) + `"><br>
    <div class="full_country_info_section ` + localStorage.getItem('theme_mode') +`">
        <div class="top_section_text large_info_section">
            <h2 class="country_name ` + localStorage.getItem('theme_mode') +` text">` + String(country_data['name']['common']) + `</h2>
            <br>
            <div class="country_info_section">
                <div class="info_section info_section_1">
                    <span class="native_name ` + localStorage.getItem('theme_mode') +` text"><strong>Native Names:</strong> ` + native_names_all + `</span><br>
                    <span class="population ` + localStorage.getItem('theme_mode') +` text"><strong>Population:</strong> ` + String(country_data['population'].toLocaleString()) +  `</span><br>
                    <span class="region ` + localStorage.getItem('theme_mode') +` text"><strong>Region:</strong> ` + String(country_data['region']) + `</span><br>
                    <span class="sub_region ` + localStorage.getItem('theme_mode') +` text"><strong>Sub Region:</strong> ` + String(country_data['subregion']) + `</span>
                </div>
                <div class="info_section info_section_2">
                    <span class="top_level_domain ` + localStorage.getItem('theme_mode') +` text"><strong>Top Level Domain:</strong> ` + tld + `</span><br>
                    <span class="currencies ` + localStorage.getItem('theme_mode') +` text"><strong>Currencies:</strong> ` + currencies + `</span><br>
                    <span class="languages ` + localStorage.getItem('theme_mode') +` text"><strong>Languages:</strong> ` + languages + `</span>
                </div>
            </div>
        </div>
        <div class="bottom_section_text large_info_section">
            <span class="border_countries ` + localStorage.getItem('theme_mode') +` text"><strong>Border Countries:</strong></span>
            <div class="border_country_buttons">
                ` + buttonHTML + `
            </div>
        </div>
    </div>
    `

    document.getElementsByClassName('full_country_data')[0].appendChild(country_data_section)

    return
}