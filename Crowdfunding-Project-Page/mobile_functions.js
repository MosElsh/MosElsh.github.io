function toggle_mobile_nav_display(menu_icon_selected) {
    if (menu_icon_selected.innerHTML == 'menu') {
        document.getElementsByClassName('mobile_nav')[0].style.display = 'block'
        document.getElementsByClassName('mobile_nav')[0].animate(
            [
                {left:'100%'},
                {left: '0%'}
            ], 
                {
                    duration: 500,
                    animationFillMode: 'forwards',
                    easing: 'ease-out',
                }
        )
    }
    else {
        document.getElementsByClassName('mobile_nav')[0].animate(
            [
                {left:'0%'},
                {left: '100%'}
            ], 
                {
                    duration: 500,
                    animationFillMode: 'forwards',
                    easing: 'ease-in',
                }
        )
        setTimeout(() => {document.getElementsByClassName('mobile_nav')[0].style.display = 'none'}, 500)
    }
    menu_icon_selected.innerHTML = menu_icon_selected.innerHTML == 'menu' ? 'close': 'menu'
}