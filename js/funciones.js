ObtenerDatos=(url)=>{//Espero el parametro que contendra el link de la api.
    fetch(url)//Metodo Get para obtener los datos
    // Si es exitosa se convierte a json
    .then(response => response.json())  // convertir a json
    .then((data) => mostrarData(data))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

}


mostrarData=(data) => {
    //Verifico que haya recibido los datos.
    console.log((data['results'][0]));

    inf=data['results'][0];//Guardo en una variable para mayor comodidad
    nombre=inf['name']['title']+' '+inf['name']['first']+' '+inf['name']['last'];//Guardo el nombre completo
    foto=inf['picture']['large'];//Guardo el link de la imagen
    document.getElementById('nombre').innerHTML=`<img src="${foto}" alt="Foto de perfil"><h1> ${nombre}</h1>`;//Muestro nombre e imagen
    if (inf['gender']=='male') {//Estructura de seleccion para traducir el genero de la persona
        genero='Hombre';
    }else{
        genero='Mujer'
    }
    fechaNac=inf['dob']['date'];//Guardo solamente lo necesario de la fecha de nacimiento
   fechaNac=fechaNac.split('T');//Separo en un array 
   fechaNac.pop();//Elimino la ultima parte del array
 
    //Muestro datos personales
    document.getElementById('personal').innerHTML=`<p>Genero:${genero}</p><p>Edad:${inf['dob']['age']}</p><p>Fecha de nacimiento:${fechaNac}</p>`;

    //Muestro Datos de contacto
    document.getElementById('contacto').innerHTML=`<p>Email:${inf['email']}</p><p>Celular:${inf['cell']}</p><p>Telefono:${inf['phone']}</p>`;

    //Muestro datos de ubicacion
    document.getElementById('localizacion').innerHTML=`<p>Pais:${inf['location']['country']}</p><p>Ciudad:${inf['location']['city']}</p><p>Estado:${inf['location']['state']}</p><p>Calle:${inf['location']['street']['name']} ${inf['location']['street']['number']}</p><p>Codigo Postal:${inf['location']['postcode']}</p>`;
}

url='https://randomuser.me/api/';//Declaro e inicializo el link de la api
ObtenerDatos(url);//Obtengo los datos de la api

efectoMouseOver=(recibo,cambio,span)=>{
    elemento1=document.getElementById(recibo);

    elemento1.addEventListener('mouseover',function(){
        console.log(elemento1);
        //Efectos de cuando el mouse se ponga encima del elemento.
        document.getElementById(span).style.transitionDuration='0.5s';//Tiempo de transicion
        document.getElementById(span).style.transitionProperty='font-size';//Modifica el tamaño de la fuente
        document.getElementById(span).style.transitionProperty='backgroudColor';//Modifica el color
        document.getElementById(span).style.transitionProperty='border';//Modifica borde
        document.getElementById(span).style.transitionProperty='color';//Modifica color de la fuente
        document.getElementById(span).style.color='white';//Nuevo color de la fuente
        document.getElementById(span).style.transitionTimingFunction='ease-in-out';//Forma de la transicion
        document.getElementById(span).style.fontSize='5.0rem';//Tamaño de la fuente
        document.getElementById(span).style.border='solid white 0.1rem';//Props del nuevo borde
        document.getElementById(span).style.backgroundColor='rgb(151, 151, 151)';//Color del nuevo fondo

        //Desaparece el elemento

        document.getElementById(cambio).style.display='block';
    })
        
}
efectoMouseOut=(recibo,cambio,span)=>{
    elemento1=document.getElementById(recibo);

    elemento1.addEventListener('mouseout',function(){

        //Al retirar el mouse del elemento, vuelve a su forma normal.
        document.getElementById(span).style.transitionDuration='0.5s';//Tiempo de transicion
        document.getElementById(span).style.transitionProperty='font-size';//Modifica el tamaño de la fuente
        document.getElementById(span).style.transitionProperty='backgroudColor';//Modifica el color
        document.getElementById(span).style.transitionProperty='border';//Modifica borde
        document.getElementById(span).style.transitionProperty='color';//Modifica color de la fuente
        document.getElementById(span).style.transitionTimingFunction='ease-in-out';//Forma de la transicion
        document.getElementById(span).style.color='black';//Nuevo color de la fuente
        document.getElementById(span).style.fontSize='6rem';
        document.getElementById(span).style.backgroundColor='rgb(109, 108, 108)';//Color del nuevo fondo
        document.getElementById(span).style.border='solid black 0.16rem';//Props del nuevo borde

        //Aparece el elemento
        document.getElementById(cambio).style.display='none';
    })
        
}

//Menu dinamico
efectoMouseOver('li_personal','personal','span1');
efectoMouseOut('li_personal','personal','span1');

efectoMouseOver('li_contacto','contacto','span2');
efectoMouseOut('li_contacto','contacto','span2');

efectoMouseOver('li_localizacion','localizacion','span3');
efectoMouseOut('li_localizacion','localizacion','span3');

//No hago la pagina responsive, por el hecho de que ya lo es. funciona en varias plataformas.