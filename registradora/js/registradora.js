
let personajes = [
    {
        nombre:"messi",
        correo:"messi@gmail.com",
        password: "password",
        sexo:"masculino"
    },
    {
        nombre:"Diana",
        correo:"diana@gmail.com",
        password: "password",
        sexo: "femenino"
    }
]
function login (){
    let correo = document.getElementById("correo");
    let password = document.getElementById("password");
    if(correo.value !=""){
        correo.classList.add("is-valid")
    }else{
        correo.classList.add("is-invalid")
    }

    if(password.value !=""){
        password.classList.add("is-valid")
    }else {
        password.classList.add("is-invalid")
    }
    
    personajes.forEach(function(person){
        if(correo.value==person.correo && password.value ==person.password){
            if(person.sexo == "masculino"){
            sessionStorage.setItem('nombre',person.nombre);
            location.href="./iniciore.html";
            }  else{
               sessionStorage.setItem('nombre',person.nombre);
               location.href="./iniciormu.html";
            }
         } else{
            console.log("el correo es incorrecto")
        }}
    )

    let validacion = document.getElementById('error');
    personajes.forEach(function(personaspam){
        if (personajes.correo!= personaspam.correo ){
            validacion.style.display='block'
            validacion.innerHTML='Su correo o contraseña estan incorrectas'
        }
    })
}

