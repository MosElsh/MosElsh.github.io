function update_data_displayed(chosen_time_setting_element) {
    for (let x = 0; x < data.length; x++) {
        document.getElementsByClassName('current')[x].innerHTML = String(data[x]['timeframes'][chosen_time_setting_element.id]['current']) + 'hrs'
        document.getElementsByClassName('previous')[x].innerHTML = 'Previous ' + chosen_time_setting_element.getAttribute('sentence_filler') + ' - ' + String(data[x]['timeframes'][chosen_time_setting_element.id]['previous']) + 'hrs'
    }
}

function toggle_time_setting(chosen_time_setting_element) {
    /* Remove the 'clicked' class before setting it to avoid accidental remove of the new 'clicked' element. */
    document.getElementsByClassName('clicked')[0].classList.remove('clicked')
    chosen_time_setting_element.classList.add('clicked')
    update_data_displayed(chosen_time_setting_element)
}

toggle_time_setting(document.getElementById('daily'))