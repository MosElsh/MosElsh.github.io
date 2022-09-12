function toggle_header_links_display(chosen_element) {
    if (document.getElementsByClassName(chosen_element.getAttribute('heading_for') + '_header_section_links_container')[0].style.display == '') {
        document.getElementsByClassName(chosen_element.getAttribute('heading_for') + '_header_section_links_container')[0].style.display = 'block'
        document.getElementsByClassName(chosen_element.getAttribute('heading_for') + '_header_section_links_container')[0].style.maxHeight = String(document.getElementsByClassName(chosen_element.getAttribute('heading_for') + '_header_section_links')[0].offsetHeight) + 'px'
        chosen_element.parentElement.getElementsByClassName('icon_arrow')[0].style.transform = 'rotate(180deg)'
        chosen_element.style.color = window.outerWidth >= 800 ? 'rgb(255, 206, 197)' : 'hsl(207, 13%, 34%)'
    }
    else {
        document.getElementsByClassName(chosen_element.getAttribute('heading_for') + '_header_section_links_container')[0].style.display = ''
        document.getElementsByClassName(chosen_element.getAttribute('heading_for') + '_header_section_links_container')[0].style.maxHeight = 0
        chosen_element.parentElement.getElementsByClassName('icon_arrow')[0].style.transform = 'rotate(0deg)'
        chosen_element.style.color = window.outerWidth >= 800 ? 'rgb(255, 206, 197)' : 'hsl(240, 10%, 16%)'
    }
}