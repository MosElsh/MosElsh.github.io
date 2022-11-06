// Displays all country cards matching the region selected.
function display_filtered_regions(region_selected) {
    document.querySelectorAll('.' + String(region_selected)).forEach((card) => {
        card.style.display = 'flex'
    })

    return
}

// Hides/Shows region filters depending on its current state.
function toggle_region_filters_display() {
    document.getElementsByClassName('available_options')[0].style.display = document.getElementsByClassName('available_options')[0].style.display == '' ? 'flex': ''

    return
}

// Updates region selected.
function update_region_filter(new_region_filter) {
    /* reset input filter */

    document.getElementsByTagName('input')[0].value = ''

    document.getElementsByClassName('selected_value')[0].innerHTML = new_region_filter
    toggle_region_filters_display()
    reset_country_card_display()
    display_filtered_regions(new_region_filter)

    return
}

// Filters country cards by name.
function filter_by_name() {
    /* reset region filters */

    document.getElementsByClassName('selected_value')[0].innerHTML = 'Filter by Region'

    let entered_name = String(document.getElementsByTagName('input')[0].value)
    reset_country_card_display()
    document.querySelectorAll('.country_name').forEach((name) => {
        if (name.innerHTML.replace(entered_name, '').length != name.innerHTML.length) {
            name.parentElement.parentElement.style.display = 'flex'
        }
    })

    return
}

// Removes all country cards from display (used when filtering by name or region).
function reset_country_card_display() {
    document.querySelectorAll('.country_card').forEach((card) => {
        card.style.display = 'none'
    })

    return
}