document.addEventListener('DOMContentLoaded', () => {
        document.querySelector("#sw").play();
    })
    //-----------------------------------------------------------
function login() {
    const usu = document.querySelector('#usuario').value;
    const con = document.querySelector('#contra').value;
    if (usu === "Diana" && con === "310821") {
        window.location.href = "index copy.html"
    } else {
        alert('contraseña y/o usuario incorrectos')
    }

}
//-----------------------------------------------

//-------------------------------------------------
function corazonEncantado() {
    document.querySelector("#sw").pause();
    const remover = document.querySelector('#removerlo')
    const carta = document.querySelector('.carta');
    const corazon = document.querySelector('#corazoon');
    const cuerpo = document.querySelector('#cuerpo');
    cuerpo.removeChild(remover)
    cuerpo.classList.add('cuerpofondo')
    cuerpo.removeChild(corazon);
    cuerpo.classList.add('cuerpo-filtro');
    document.querySelector("#gt").play();
    const modal = document.createElement('div');
    const modalheader = document.createElement('div')
    modalheader.classList.add('headermodal')
    modalheader.innerText = "¡Feliz Cumpleaños!"
    const textocumple = document.createElement('p')
    textocumple.classList.add('textocumple')
    textocumple.innerHTML = "<p> Mi amor hoy en verdad solo quiero decirte ante todo que te deseo un muy feliz cumpleaños mi niña y recordarte que cada día que paso contigo es como un regalo en verdad el poder tenerte a mi lado es y será en verdad lo más lindo que me pudo haber pasado en mi vida, no sabría qué estaría haciendo sin ti, aunque a veces puedo parecer distraído, distante o incluso odioso, quiero que sepas que estás siempre en mi mente. Me preocupo por ti más de lo que puedes imaginar y me paso bastante pensando sobre cómo hacerte feliz. No puedo llegar a ser perfecto y sé que no es lo que deseas, pero quiero disculparme por todo el dolor que te he causado y recordarte que no importa lo que pase, mi amor por ti es real. Aunque en verdad sigo sin entender qué viste y ves aún en mí, el porqué me das ese cariño a diario, solo puedo decirte gracias por estar conmigo, gracias por quedarte, gracias por haber aparecido en mi vida, te deseo un feliz cumpleaños y que este es solo uno de muchos de los que estaré a tu lado para felicitarte y recordarte lo importante que eres para mí y lo mucho que amo, admiro y me enorgulleces mi amor. Estaré contigo hasta el final, sin importar lo que pase, sé que eres el amor de mi vida y con quien quiero pasar mis días enteros por el resto de mi vida. Te daré mi 100 * 100 en todo momento y cuidaré de ti como un tesoro porque es lo que eres para mí, mi tesorito, mi coshita más hermosa y quien me da razones para salir adelante y tener aspiraciones, créeme que sin ti, ya te digo que no me veo. Debo estar contigo, es a tu lado donde pertenezco, aquí soy feliz y me siento seguro, mi amor. Solo tú le das felicidad a mi vida y eso no cambiará por mucho que pase el tiempo.<br><br>Atte:Tu perezosito</p>"

    modal.appendChild(modalheader)
    modal.appendChild(textocumple)
    modal.classList.add('modal-corazon');
    carta.appendChild(modal);
    console.log(modal);
};