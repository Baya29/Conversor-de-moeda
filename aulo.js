

const input_a = document.getElementById("entrada");
const element = document.querySelector(".paragrafo");


function clicado(){

                    console.log(input_a.value);
                    element.innerHTML = `Comencando nossa jornada para aprender ${input_a.value}` ;

}