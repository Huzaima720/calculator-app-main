let body = document.querySelector('body')

let themes = document.querySelectorAll('.radio-btn input')

themes.forEach(theme => {
    theme.addEventListener('click', function() {
         let themeID = theme.id
         body.setAttribute('data-theme', themeID)
    })
})