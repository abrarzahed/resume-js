const form = document.querySelector('.form');
const date = document.querySelector('.date');
const nam = document.querySelector('.name');
const email = document.querySelector('.email')
const number = document.querySelector('.number');
const photo = document.querySelector('.photo');
const createResume = document.querySelector('.submit');
const message = document.querySelector('.message')

const resume = document.querySelector('.resumed');


const resumeDate = document.querySelector('.resume-date')
const resumeName = document.querySelector('.resume-name')
const resumeEmail = document.querySelector('.resume-email')
const resumeNumber = document.querySelector('.resume-number')
const resumeMessage = document.querySelector('.resume-message')
// const resumeImage = document.querySelector('.rimg')
const sign = document.querySelector('.sign');

createResume.addEventListener('click', function () {
    form.classList.add('hidden');
    resume.classList.remove('hidden');
    resumeDate.textContent = date.value;
    resumeName.textContent = nam.value;
    resumeEmail.textContent = email.value;
    resumeNumber.textContent = number.value;
    sign.textContent = nam.value;
    resumeMessage.textContent = message.value;
    // resumeImage.src = photo.value;

})