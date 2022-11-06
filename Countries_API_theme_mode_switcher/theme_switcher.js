// Toggles light/dark mode.
function toggle_dark_mode() {
    if (document.querySelectorAll('.light').length == 0) {
        document.querySelectorAll('.dark').forEach((dark_element) => {
            dark_element.classList.add('light')
            dark_element.classList.remove('dark')
            localStorage.setItem('theme_mode', 'light')
        })
    }
    else {
        document.querySelectorAll('.light').forEach((light_element) => {
            light_element.classList.add('dark')
            light_element.classList.remove('light')
            localStorage.setItem('theme_mode', 'dark')
        })
    }

    return
}