let name =  document.querySelector("#name");
let email =  document.querySelector("#email");
let subject =  document.querySelector("#subject");
let button =  document.querySelector("button");
let error = document.querySelector("#error");
let message = document.querySelector("#msg");
let showCounter = document.querySelector("#show-counter");
let pattern = /\S+@\S+\.\S+/;
let count = 300;

message.addEventListener('keyup', check);

function check(e) {
    var characters = this.value.length;
    var remaining = count - characters;
    if (remaining < 1) {
        this.value = this.value.slice(0, count);
        return showCounter.innerHTML = 0;
    }
    showCounter.innerHTML = remaining;
}


button.addEventListener("click", (e) => {
    let count = [];
    if(name.value == "" || name.value == null || name.value.length > 50 ) {
        count.push(1) 
        name.classList.add("invalid");
        name.nextElementSibling.innerHTML = "Por favor, me diga seu nome! No máximo 50 caracteres";
        name.nextElementSibling.style.opacity = "1";
    } else {
        name.classList.remove("invalid");
        name.nextElementSibling.style.opacity = "0";
    };

    if(!pattern.test(email.value)) {
        count.push(2)
        email.classList.add("invalid")
        email.nextElementSibling.innerHTML = "Preencha com um email válido! nome@dominio.com";
        email.nextElementSibling.style.opacity = "1";
    } else {
        email.classList.remove("invalid");
        email.nextElementSibling.style.opacity = "0";
    };

    if(subject.value == "" || subject.value == null || subject.value.length > 50) {
        count.push(3)
        subject.classList.add("invalid")
        subject.nextElementSibling.innerHTML = "Me diga qual assunto com no máximo 50 caracteres"
        subject.nextElementSibling.style.opacity = "1";
    } else {
        subject.classList.remove("invalid")
        subject.nextElementSibling.style.opacity = "0";
    };
      if(message.value == "" || message.value == null) {
        count.push(4)
        message.classList.add("invalid")
        message.nextElementSibling.innerHTML = "Me diga algo, qual a sua mensagem!"
        message.nextElementSibling.style.opacity = "1";
    } else if ( message.value.length > 300) {
    	subject.classList.add("invalid")
    	message.nextElementSibling.innerHTML = "Até 300 caracteres"
    }
    else {
        message.classList.remove("invalid")
        message.nextElementSibling.style.opacity = "0";
    };

    if(count.length > 0) {
        e.preventDefault();
    };
    
});
