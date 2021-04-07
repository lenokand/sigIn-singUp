const className = 'sign-up-mode';
const container = document.querySelector('.container')
const signInBtn = document.querySelector('#sign-in-btn')
const signUpBtn = document.querySelector('#sign-up-btn')

const passInputUp = document.querySelector('#password-singup')
const eyeUp = document.querySelector('#eye-singup')

const passInputIn = document.querySelector('#password-singin')
const eyeIn = document.querySelector('#eye-singin')

signInBtn.addEventListener('click', () => {
    container.classList.remove(className)
})
signUpBtn.addEventListener('click', () => {
    container.classList.add(className)
})




console.log(passInputUp.getAttribute('type') == 'password');


// eyeUp.addEventListener('click', function () {
//     if (passInputUp.getAttribute('type') == 'password') {
//         showUpPass()
//     } else {
//         HideUpPass()
//     }
   
// })
// eyeIn.addEventListener('click', function () {
//     if (passInputIn.getAttribute('type') == 'password') {
//         showInPass()
//     } else {
//         HideInPass()
//     }
   
// })


function showInPass() {
    passInputIn.setAttribute('type','text')
    eyeIn.classList.remove('fa-eye-slash')
    eyeIn.classList.add('fa-eye')
}
function HideInPass() {
    passInputIn.setAttribute('type','password')
        eyeIn.classList.remove('fa-eye')
        eyeIn.classList.add('fa-eye-slash')
}
function showUpPass() {
    passInputUp.setAttribute('type','text')
    eyeUp.classList.remove('fa-eye-slash')
    eyeUp.classList.add('fa-eye')
}
function HideUpPass() {
        passInputUp.setAttribute('type','password')
        eyeUp.classList.remove('fa-eye')
        eyeUp.classList.add('fa-eye-slash')
}






eyeUp.addEventListener('mousedown', () => {
   
        showUpPass()
        console.log('mousedown')
   
})

eyeUp.addEventListener('mouseup', ()=> {
    console.log('mouseup')
    HideUpPass()

})
eyeIn.addEventListener('mousedown', () => {
    showInPass()
        
        console.log('mousedown');
   
})

eyeIn.addEventListener('mouseup', ()=> {
    console.log('mouseup');
    HideInPass()

})

