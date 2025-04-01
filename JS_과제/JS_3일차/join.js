const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value


    if(userId.length < 6){
        alert('잛음')
        return
    }

    if(userPw1 !== userPw2){
        alert('비밀번호 일치하지 않슴')
        return
    }

    document.body.innerHTML = ''
    document.write(`<p>${userId}님 환영합니다</p>`)
})
