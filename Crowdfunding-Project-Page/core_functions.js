function toggle_modal_display() {
    document.getElementsByClassName('modal')[0].style.display = document.getElementsByClassName('modal')[0].style.display == 'flex' ? 'none': 'flex'
    document.getElementsByClassName('modal')[0].style.minHeight = String(document.body.offsetHeight) + 'px'
    document.getElementsByClassName('product_selection')[0].style.display = document.getElementsByClassName('product_selection')[0].style.display == 'flex' ? 'none': 'flex'
    document.getElementsByClassName('modal')[0].focus()
    window.addEventListener('resize', () => {setTimeout(() => {document.getElementsByClassName('modal')[0].style.minHeight = String(document.body.offsetHeight) + 'px'}, 500)})
    return
}

function display_form(pledge_element, min_pledge_amount) {
    if (document.getElementsByClassName('form_section')[0] != undefined) {
        document.getElementsByClassName('form_section')[0].remove()
        document.getElementsByClassName('new_line_separator')[0].remove()
    }
    pledge_element.style.borderColor = 'hsl(176, 50%, 47%)'
    let new_line = document.createElement('hr')
    new_line.classList.add('new_line_separator')
    new_line.style.width = 'calc(max(2rem, 1vw) * 2 + 100%)'
    new_line.style.position = 'relative'
    new_line.style.left = 'calc(max(2rem, 1vw) * -1)'
    new_line.style.border = 'max(1px, 0.1vw) solid hsla(0, 0%, 48%, 0.2)'
    let new_section = document.createElement('div')
    new_section.classList.add('form_section')
    new_section.innerHTML = `
    <span class='enter_pledge_description section_description'>
        Enter your pledge
    </span>
    <div class='enter_pledge_section'>
        <div class='input_container'>
            ` + (min_pledge_amount != 0 ? `<span class='currency_sign section_description'>
                $
            </span>
            <input type='number' name='pledge_amount' min_number='` + String(min_pledge_amount) + `'>` : '') + `
        </div>
        <button class='green_button continue_button' onclick="validate_input(this.parentElement.getElementsByTagName('input')[0])">
            Continue
        </button>
    </div>
    `
    pledge_element.appendChild(new_line)
    pledge_element.appendChild(new_section)
    return
}

function validate_input(input_element) {
    if (input_element == undefined) {
        return thank_you_modal_display()
    }
    else if (input_element.value.length == 0) {
        return window.alert('Please enter a valid input')
    }
    else if (Number(input_element.value) < Number(input_element.getAttribute('min_number'))) {
        return window.alert('This input only accepts values over $' + String(input_element.getAttribute('min_number')) + '.')
    }
    let pledge_element_class = input_element.parentElement.parentElement.parentElement.parentElement.classList[1]
    return thank_you_modal_display(input_element.value, pledge_element_class)
}

function thank_you_modal_display(value_pledged = undefined, pledge_element_class = undefined) {
    if (value_pledged != undefined) {
        process_entries(value_pledged, pledge_element_class)
    }
    document.getElementsByClassName('modal')[0].children[0].remove()
    let thank_you_section = document.createElement('div')
    thank_you_section.classList.add('thank_you_section')
    thank_you_section.innerHTML = `
        <img src='` + document.getElementsByClassName('green_tick')[0].src + `' alt='Green Tick'>
        <h3 class='section_title thank_you_title'>
            Thanks for your support!
        </h3>
        <span class='section_description thank_you_description'>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.
        </span>
        <button class='green_button got_it_button' onclick = 'toggle_modal_display()'>
            Got it!
        </button>
    `

    document.getElementsByClassName('modal')[0].appendChild(thank_you_section)
}

function process_entries(value_pledged, pledge_element_class) {
    document.getElementsByTagName('progress')[0].value = Number(document.getElementsByTagName('progress')[0].value) + Number(value_pledged)
    document.getElementsByClassName('current_total')[0].innerHTML = '$' + String(Number(document.getElementsByClassName('current_total')[0].innerHTML.replace('$', '').replace(',', '')) + Number(value_pledged))
    document.getElementsByClassName(pledge_element_class)[0].getElementsByClassName('numbers_left')[0].innerHTML = Number(document.getElementsByClassName(pledge_element_class)[0].getElementsByClassName('numbers_left')[0].innerHTML) - 1
}

function toggle_bookmark(bookmark_element) {
    if (bookmark_element.getAttribute('bookmarked') == 'false') {
        bookmark_element.setAttribute('bookmarked', 'true')
        bookmark_element.src = String(bookmark_element.src).replace('bookmark', 'bookmarked')
        document.getElementsByClassName('bookmark_text')[0].innerHTML = 'Bookmarked'
    }
    else {
        bookmark_element.setAttribute('bookmarked', 'false')
        bookmark_element.src = String(bookmark_element.src).replace('bookmarked', 'bookmark')
        document.getElementsByClassName('bookmark_text')[0].innerHTML = 'Bookmark'
    }
}