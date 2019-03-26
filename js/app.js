(() => {

  var questions = document.getElementsByClassName('inline-code-quiz');

  var buttonSubmit = document.getElementsByClassName('btn-submit')[0];

  buttonSubmit.addEventListener('click', checkAnswer);

  var correctAnswers = 0;


  console.log('questions is ', questions.length)

  function checkAnswer() {


    for (var i = 0; i < questions.length; i++) {

      if ((questions[i].dataset.quiz == 1 && questions[i].parentNode.previousElementSibling.checked) && questions[i].dataset.answered == 0) {
        correctAnswers++
        console.log('correct')
        questions[i].dataset.answered = 1
        // questions[i].parentNode.parentNode.classList.add('correct')
      } else if ((questions[i].dataset.quiz == 1 && !questions[i].parentNode.previousElementSibling.checked) && questions[i].dataset.answered == 1) {
        console.log('it was correct, now its back to normal')
        questions[i].dataset.answered = 0;
        correctAnswers--
      }
    }

      console.log('correct answers: ', correctAnswers)

      switch (correctAnswers) {
        case 4:
            displayDialog('Bien', 'Genial!', 'success')
            break
        case 3:
            displayDialog('Ok', `vas bien, aun quedan ${4 - correctAnswers} opciones validas.`, 'info')
            break
        case 2:
            displayDialog('Ok', `vas bien, aun quedan ${4 - correctAnswers} opciones validas.`, 'info')
            break
        case 1:
            displayDialog('Ok', `vas bien, aun quedan ${4 - correctAnswers} opciones validas.`, 'info')
            break
        case 0:
            displayDialog('Tenes que seleccionar algo', 'Daleee', 'info')
        default:
            displayDialog('Nop', 'Daleee', 'error')
      }
  }


  function displayDialog(message, bla, icon) {
    swal(message, bla, icon)
  }

})()