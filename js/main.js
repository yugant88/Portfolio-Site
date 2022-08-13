window.addEventListener('load',() => {

    var hiringRadioBtn = document.getElementById('hiring');
    var questionRadioBtn = document.getElementById('question');
    var commentRadioBtn = document.getElementById('comment');
    var hourlyRateBox = document.getElementById('hourlyRateBox');


    // Dynamically Add/Remove Hourly Rate Input Box
    hiringRadioBtn.addEventListener('change',() => {
        if (hiringRadioBtn.checked) {
            hourlyRateBox.classList.remove('d-none')
        }
    })

    questionRadioBtn.addEventListener('change',() => {
        if (questionRadioBtn.checked) {
            hourlyRateBox.classList.add('d-none')
        }
    })

    commentRadioBtn.addEventListener('change',() => {
        if (hiricommentRadioBtnngRadioBtn.checked) {
            hourlyRateBox.classList.add('d-none')
        }
    })

})