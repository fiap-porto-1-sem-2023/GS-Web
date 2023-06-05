const inputNome = document.querySelector("#idNome");
const inputSobrenome = document.querySelector("#idSobrenome");
const inputEmail = document.querySelector("#idEmail");
const inputTelefone = document.querySelector("#idTelefone");
const inputEstado = document.querySelector("#idEstado");
const inputAssunto = document.querySelector("#idAssunto");
const inputMensagem = document.querySelector("#idMensagem");

const erroNome = document.querySelector("#idErrorNome");
const erroSobrenome = document.querySelector("#idErrorSobrenome");
const erroEmail = document.querySelector("#idErrorEmail");
const erroTelefone = document.querySelector("#iErrordTelefone");
const erroEstado = document.querySelector("#iErrordEstado");
const erroAssunto = document.querySelector("#idErrorAssunto");
const erroMensagem = document.querySelector("#idErrorMensagem");


inputNome.addEventListener("keyup", ()=>{
    let textoNome = inputNome.value;
    if (textoNome == "") {
        erroNome.setAttribute("style", "visibility: visible; color: red;");
        erroNome.textContent = "* O nome não pode estar vazio!"
        inputNome.setAttribute("style", "outline-color: red;");
      } else{
        if(textoNome.length < 5){
          erroNome.setAttribute("style", "visibility: visible; color: red;");
          erroNome.textContent = "* O nome precisa ter 5 ou mais caracteres!"  
          inputNome.setAttribute("style", "outline-color: red;");
        }else{
            erroNome.textContent = ""
            erroNome.setAttribute("style", "visibility: hidden; color: green;");
            inputNome.setAttribute("style", "outline-color: green;");
        }
      }
  });


  inputSobrenome.addEventListener("keyup", ()=>{
    let textoSobreNome = inputSobrenome.value;
    if (textoSobreNome == "") {
      erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
      erroSobrenome.textContent = "* O sobrenome não pode estar vazio!"
      inputSobrenome.setAttribute("style", "outline-color: red;");
      } else{
        if(textoSobreNome.length < 5){
          erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
          erroSobrenome.textContent = "* O sobrenome precisa ter 5 ou mais caracteres!"  
          inputSobrenome.setAttribute("style", "outline-color: red;");
        }else{
            erroSobrenome.textContent = ""
            erroSobrenome.setAttribute("style", "visibility: hidden; color: green;");
            inputSobrenome.setAttribute("style", "outline-color: green;");
        }
      }
  });


  inputEmail.addEventListener("keyup", ()=>{
    let textoEmail = inputEmail.value;
    if (textoEmail == "") {
        erroEmail.setAttribute("style", "visibility: visible; color: red;");
        erroEmail.textContent = "* O e-mail não pode estar vazio!"
        inputEmail.setAttribute("style", "outline-color: red;");
      } else{
        if(textoEmail.length < 5){
          erroEmail.setAttribute("style", "visibility: visible; color: red;");
          erroEmail.textContent = "* O e-mail precisa ter 5 ou mais caracteres!";
          inputEmail.setAttribute("style", "outline-color: red;");
        }else{
          if (textoEmail.includes("@")) {
            erroEmail.textContent = ""
            erroEmail.setAttribute("style", "visibility: hidden; color: green;");
            inputEmail.setAttribute("style", "outline-color: green;");
            } else {
              erroEmail.setAttribute("style", "visibility: visible; color: red;");
              erroEmail.textContent = "* O e-mail precisa ser um e-mail válido (Conter @)!" 
              inputEmail.setAttribute("style", "outline-color: red;");
            }
        }   
    }
  });


  inputTelefone.addEventListener("keyup", ()=>{
    let textoTelefone = inputTelefone.value;
    if (textoTelefone == "") {
      erroTelefone.setAttribute("style", "visibility: visible; color: red;");
      erroTelefone.textContent = "* O telefone não pode estar vazio!"
      inputTelefone.setAttribute("style", "outline-color: red;");
      } else{
    if (isNaN(textoTelefone)){
        erroTelefone.setAttribute("style", "visibility: visible; color: red;");
        erroTelefone.textContent = "* O telefone não é valido, use apenas numeros !"
        inputTelefone.setAttribute("style", "outline-color: red;");
      }else{
        if(textoTelefone.length != 9){
            erroTelefone.setAttribute("style", "visibility: visible; color: red;");
            erroTelefone.textContent = "* O telefone precisa ter 9 caracteres!"  
            inputTelefone.setAttribute("style", "outline-color: red;");
        }else{
            erroTelefone.setAttribute("style", "visibility: hidden; color: green;");
            inputTelefone.setAttribute("style", "outline-color: green;");         
        }
      }
    }
  });

  inputEstado.addEventListener("keyup", ()=>{
    let textoEstado = inputEstado.value;
    if (textoEstado == "") {
        erroEstado.setAttribute("style", "visibility: visible; color: red;");
        erroEstado.textContent = "* O estado não pode estar vazio!"
        inputEstado.setAttribute("style", "outline-color: red;");
      } else{
        if(textoEstado.length != 2){
            erroEstado.setAttribute("style", "visibility: visible; color: red;");
            erroEstado.textContent = "* Coloque apenas as siglas do estado"  
            inputEstado.setAttribute("style", "outline-color: red;");
        }else{
            erroEstado.textContent = ""
            erroEstado.setAttribute("style", "visibility: hidden; color: green;");
            inputEstado.setAttribute("style", "outline-color: green;");
        }
      }
  });

  inputAssunto.addEventListener("keyup", ()=>{
    let textoAssunto = inputAssunto.value;
    if (textoAssunto == "") {
        erroAssunto.setAttribute("style", "visibility: visible; color: red;");
        erroAssunto.textContent = "* O assunto não pode estar vazio!"
        inputAssunto.setAttribute("style", "outline-color: red;");
      } else{
        if(textoAssunto.length < 5){
            erroAssunto.setAttribute("style", "visibility: visible; color: red;");
            erroAssunto.textContent = "* O assunto precisa ter 5 ou mais caracteres!"  
          inputAssunto.setAttribute("style", "outline-color: red;");
        }else{
            erroAssunto.textContent = ""
            erroAssunto.setAttribute("style", "visibility: hidden; color: green;");
            inputAssunto.setAttribute("style", "outline-color: green;");
        }
      }
  });

  inputMensagem.addEventListener("keyup", ()=>{
    let textoMensagem = inputMensagem.value;
    if (textoMensagem == "") {
        erroMensagem.setAttribute("style", "visibility: visible; color: red;");
        erroMensagem.textContent = "* A mensagem não pode estar vazio!";
        inputMensagem.setAttribute("style", "outline-color: red;");
      } else{
        erroMensagem.textContent = ""
        erroMensagem.setAttribute("style", "visibility: hidden; color: green;");
        inputMensagem.setAttribute("style", "outline-color: green;");
        }
  });

  btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    let textao = "";

    let textoNome = inputNome.value;
    if (textoNome == "") {
        erroNome.setAttribute("style", "visibility: visible; color: red;");
        erroNome.textContent ="* O nome não pode estar vazio!";
        textao += "* O nome não pode estar vazio!\n";
        inputNome.setAttribute("style", "outline-color: red;");
      } else{
        if(textoNome.length < 5){
          erroNome.setAttribute("style", "visibility: visible; color: red;");
          erroNome.textContent ="* O nome precisa ter 5 ou mais caracteres!";  
          textao += "* O nome precisa ter 5 ou mais caracteres!\n";  
          inputNome.setAttribute("style", "outline-color: red;");
        }else{
            erroNome.textContent = ""
            erroNome.setAttribute("style", "visibility: hidden; color: green;");
            inputNome.setAttribute("style", "outline-color: green;");
        }
      }
let textoSobreNome = inputSobrenome.value;
    if (textoSobreNome == "") {
      erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
      erroSobrenome.textContent = "* O sobrenome não pode estar vazio!";
      textao +="* O sobrenome não pode estar vazio!\n";
      inputSobrenome.setAttribute("style", "outline-color: red;");
      } else{
        if(textoSobreNome.length < 5){
          erroSobrenome.setAttribute("style", "visibility: visible; color: red;");
          erroSobrenome.textContent = "* O sobrenome precisa ter 5 ou mais caracteres!";
          textao +="* O sobrenome precisa ter 5 ou mais caracteres!\n";
          inputSobrenome.setAttribute("style", "outline-color: red;");
        }else{
            erroSobrenome.textContent = ""
            erroSobrenome.setAttribute("style", "visibility: hidden; color: green;");
            inputSobrenome.setAttribute("style", "outline-color: green;");
        }
      }

      let textoEmail = inputEmail.value;
      if (textoEmail == "") {
          erroEmail.setAttribute("style", "visibility: visible; color: red;");
          erroEmail.textContent = "* O e-mail não pode estar vazio!"
          textao +="* O e-mail não pode estar vazio!\n";
          inputEmail.setAttribute("style", "outline-color: red;");
        } else{
          if(textoEmail.length < 5){
            erroEmail.setAttribute("style", "visibility: visible; color: red;");
            erroEmail.textContent = "* O e-mail precisa ter 5 ou mais caracteres!";
            textao +="* O e-mail precisa ter 5 ou mais caracteres!\n";
            inputEmail.setAttribute("style", "outline-color: red;");
          }else{
            if (textoEmail.includes("@")) {
              erroEmail.textContent = ""
              erroEmail.setAttribute("style", "visibility: hidden; color: green;");
              inputEmail.setAttribute("style", "outline-color: green;");
              } else {
                erroEmail.setAttribute("style", "visibility: visible; color: red;");
                erroEmail.textContent = "* O e-mail precisa ser um e-mail válido (Conter @)!" 
                textao +="* O e-mail precisa ser um e-mail válido (Conter @)!\n" 
                inputEmail.setAttribute("style", "outline-color: red;");
              }
          }   
      }

      let textoTelefone = inputTelefone.value;
    if (textoTelefone == "") {
      erroTelefone.setAttribute("style", "visibility: visible; color: red;");
      erroTelefone.textContent = "* O telefone não pode estar vazio!"
      textao +="* O telefone não pode estar vazio!\n"
      inputTelefone.setAttribute("style", "outline-color: red;");
      } else{
    if (isNaN(textoTelefone)){
        erroTelefone.setAttribute("style", "visibility: visible; color: red;");
        erroTelefone.textContent = "* O telefone não é valido, use apenas numeros !"
        textao +="* O telefone não é valido, use apenas numeros !\n"
        inputTelefone.setAttribute("style", "outline-color: red;");
      }else{
        if(textoTelefone.length != 9){
            erroTelefone.setAttribute("style", "visibility: visible; color: red;");
            erroTelefone.textContent = "* O telefone precisa ter 9 caracteres!"  
            textao +="* O telefone precisa ter 9 caracteres!\n" 
            inputTelefone.setAttribute("style", "outline-color: red;");
        }else{
            erroTelefone.setAttribute("style", "visibility: hidden; color: green;");
            inputTelefone.setAttribute("style", "outline-color: green;");         
        }
      }
    }

    let textoEstado = inputEstado.value;
    if (textoEstado == "") {
        erroEstado.setAttribute("style", "visibility: visible; color: red;");
        erroEstado.textContent = "* O estado não pode estar vazio!"
        textao +="* O estado não pode estar vazio!\n"
        inputEstado.setAttribute("style", "outline-color: red;");
      } else{
        if(textoEstado.length != 2){
            erroEstado.setAttribute("style", "visibility: visible; color: red;");
            erroEstado.textContent = "* Coloque apenas as siglas do estado"  
            textao +="* Coloque apenas as siglas do estado\n"  
            inputEstado.setAttribute("style", "outline-color: red;");
        }else{
            erroEstado.textContent = ""
            erroEstado.setAttribute("style", "visibility: hidden; color: green;");
            inputEstado.setAttribute("style", "outline-color: green;");
        }
      }

      let textoAssunto = inputAssunto.value;
      if (textoAssunto == "") {
          erroAssunto.setAttribute("style", "visibility: visible; color: red;");
          erroAssunto.textContent = "* O assunto não pode estar vazio!"
          textao +="* O assunto não pode estar vazio!\n"
          inputAssunto.setAttribute("style", "outline-color: red;");
        } else{
          if(textoAssunto.length < 5){
              erroAssunto.setAttribute("style", "visibility: visible; color: red;");
              erroAssunto.textContent = "* O assunto precisa ter 5 ou mais caracteres!"  
              textao +="* O assunto precisa ter 5 ou mais caracteres!\n"  
            inputAssunto.setAttribute("style", "outline-color: red;");
          }else{
              erroAssunto.textContent = ""
              erroAssunto.setAttribute("style", "visibility: hidden; color: green;");
              inputAssunto.setAttribute("style", "outline-color: green;");
          }
        }

        let textoMensagem = inputMensagem.value;
    if (textoMensagem == "") {
        erroMensagem.setAttribute("style", "visibility: visible; color: red;");
        erroMensagem.textContent = "* A mensagem não pode estar vazio!";
        textao +="* A mensagem não pode estar vazio!\n"
        inputMensagem.setAttribute("style", "outline-color: red;");
      } else{
        erroMensagem.textContent = ""
        erroMensagem.setAttribute("style", "visibility: hidden; color: green;");
        inputMensagem.setAttribute("style", "outline-color: green;");
        }
        if (textao == ""){
            alert("Mensagem enviada com sucesso")
                }else{
                  alert(textao);
                }
  });