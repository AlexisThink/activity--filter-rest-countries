var apiURL = 'https://restcountries.eu/rest/v2/all';
var request = superagent;

/* <div class="pais">
<p class="pais__name"></p>
<p class="pais__lat"></p>
<p class="pais__lon"></p>
<img class="pais__img"/>
</div> */

var buttonAll = document.querySelector('#all');
var buttonEn = document.querySelector('#en');
var buttonEs = document.querySelector('#es');
var buttonFr = document.querySelector('#fr');
var buttonPt = document.querySelector('#pt');

buttonAll.addEventListener('click', function(event){
    request
    .get(apiURL)
    .then(function(response){
        document.querySelector('.container_paises').innerHTML="";
        var paises = response.body;
        paises.forEach(function(pais){
            console.log(pais)

            var div = document.createElement('div');
            div.className = "pais";

            var pNombre = document.createElement('p');
            pNombre.className = 'pais__name';

            var pLat =  document.createElement('p');
            pLat.className = 'pais__lat';

            var pLon = document.createElement('p');
            pLon.className = 'pais__lon';

            var image = document.createElement('img');
            image.className = 'pais__img';

            document.querySelector('.container_paises').appendChild(div);

            pNombre.textContent = pais.name;
            pLat.textContent = pais.latlng[0];
            pLon.textContent = pais.latlng[1];
            image.src = pais.flag;


            div.appendChild(pNombre);
            div.appendChild(pLat);
            div.appendChild(pLon);
            div.appendChild(image);

        })
    });

})

buttonEn.addEventListener('click', function(event){
    request
    .get(apiURL)
    .then(function(response){
        document.querySelector('.container_paises').innerHTML="";
        var paises = response.body;
        paises.forEach(function(pais){
            if(pais.languages[0].name === "English"){

                var div = document.createElement('div');
                div.className = "pais";
    
                var pNombre = document.createElement('p');
                pNombre.className = 'pais__name';
    
                var pLat =  document.createElement('p');
                pLat.className = 'pais__lat';
    
                var pLon = document.createElement('p');
                pLon.className = 'pais__lon';
    
                var image = document.createElement('img');
                image.className = 'pais__img';
    
                document.querySelector('.container_paises').appendChild(div);
    
                pNombre.textContent = pais.name;
                pLat.textContent = pais.latlng[0];
                pLon.textContent = pais.latlng[1];
                image.src = pais.flag;
    
    
                div.appendChild(pNombre);
                div.appendChild(pLat);
                div.appendChild(pLon);
                div.appendChild(image);

            }



        })
    });

})

buttonEs.addEventListener('click', function(event){
    request
    .get(apiURL)
    .then(function(response){
        document.querySelector('.container_paises').innerHTML="";
        var paises = response.body;
        paises.forEach(function(pais){
            if(pais.languages[0].name === "Spanish"){

                var div = document.createElement('div');
                div.className = "pais";
    
                var pNombre = document.createElement('p');
                pNombre.className = 'pais__name';
    
                var pLat =  document.createElement('p');
                pLat.className = 'pais__lat';
    
                var pLon = document.createElement('p');
                pLon.className = 'pais__lon';
    
                var image = document.createElement('img');
                image.className = 'pais__img';
    
                document.querySelector('.container_paises').appendChild(div);
    
                pNombre.textContent = pais.name;
                pLat.textContent = pais.latlng[0];
                pLon.textContent = pais.latlng[1];
                image.src = pais.flag;
    
    
                div.appendChild(pNombre);
                div.appendChild(pLat);
                div.appendChild(pLon);
                div.appendChild(image);

            }
        })
    });

})

buttonFr.addEventListener('click', function(event){
    request
    .get(apiURL)
    .then(function(response){
        document.querySelector('.container_paises').innerHTML="";
        var paises = response.body;
        paises.forEach(function(pais){
            if(pais.languages[0].name === "French"){

                var div = document.createElement('div');
                div.className = "pais";
    
                var pNombre = document.createElement('p');
                pNombre.className = 'pais__name';
    
                var pLat =  document.createElement('p');
                pLat.className = 'pais__lat';
    
                var pLon = document.createElement('p');
                pLon.className = 'pais__lon';
    
                var image = document.createElement('img');
                image.className = 'pais__img';
    
                document.querySelector('.container_paises').appendChild(div);
    
                pNombre.textContent = pais.name;
                pLat.textContent = pais.latlng[0];
                pLon.textContent = pais.latlng[1];
                image.src = pais.flag;
    
    
                div.appendChild(pNombre);
                div.appendChild(pLat);
                div.appendChild(pLon);
                div.appendChild(image);

            }
        })
    });

})

buttonPt.addEventListener('click', function(event){
    request
    .get(apiURL)
    .then(function(response){
        document.querySelector('.container_paises').innerHTML="";
        var paises = response.body;
        paises.forEach(function(pais){
            if(pais.languages[0].name === "Portuguese"){

                var div = document.createElement('div');
                div.className = "pais";
    
                var pNombre = document.createElement('p');
                pNombre.className = 'pais__name';
    
                var pLat =  document.createElement('p');
                pLat.className = 'pais__lat';
    
                var pLon = document.createElement('p');
                pLon.className = 'pais__lon';
    
                var image = document.createElement('img');
                image.className = 'pais__img';
    
                document.querySelector('.container_paises').appendChild(div);
    
                pNombre.textContent = pais.name;
                pLat.textContent = pais.latlng[0];
                pLon.textContent = pais.latlng[1];
                image.src = pais.flag;
    
    
                div.appendChild(pNombre);
                div.appendChild(pLat);
                div.appendChild(pLon);
                div.appendChild(image);

            }
        })
    });

})


