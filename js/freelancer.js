/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('data-to')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $("ul.nav-pills a").click(function (e) {
        e.preventDefault();  
        $(this).tab('show');
    });

      
    var sortingByName = (a, b) => {
        var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    };

    var addingItem = (item, container) => {
        let $container = $("#"+container);
        if($container.length > 0) {
            var cardHtml =  `<div class="card profile"> 
                                 <div class="profile__img">
                                    ${item.pic !== '' ? `<img src="${item.pic}" alt="${item.name} ${item.lastName}">`: ''}                                     
                                 </div>
                                 <div class="profile__info">
                                     <h3>${item.title} ${item.name} ${item.lastName}</h3>
                                     ${item.type !== '' ?                                    
                                     `<h4>${item.type}</h4>` : ''}
                                     <p>${item.description}</p>
                                    ${item.tel && item.email ? 
                                    `<ul class="icon-list">
                                         <li><i class="glyphicon glyphicon-phone"></i> ${item.tel}</li>
                                         <li><i class="glyphicon glyphicon-envelope"></i> ${item.email}</li>
                                     </ul>` : ''
                                    }
                                </div>
                            </div>`;
            $container.append(cardHtml);               
        }
    };

    var addingMultimedia = () => {
        var $container;
        for(var i = 0; i < multimedia.length; i++) {
            var item = multimedia[i];

            var picture = `<div class="col-sm-4 portfolio-item">
                                <a href="#portfolioModal${item.id}" class="portfolio-link" data-toggle="modal">
                                    <div class="caption">
                                        <div class="caption-content">
                                            <i class="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <div class="gallery-image" style="background-image: url('${item.src}'); "></div>
                                </a>
                            </div>`;

            var modal = `<div class="portfolio-modal modal fade" id="portfolioModal${item.id}" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-content">
                                <div class="close-modal" data-dismiss="modal">
                                    <div class="lr">
                                        <div class="rl">
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-8 col-lg-offset-2">
                                            <div class="modal-body">                            
                                                <img src="${item.src}" class="img-responsive img-centered" alt="">
                                                <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            $(".modal-container").append(modal);

            if((i%3)===0){
                $container = $("<div class='item'>");
                if(i === 0) {
                    $container.addClass("active");
                }
            }
            $container.append(picture);

            if((i%3)===2){
                $("#multimedia-container").append($container);
            }
        }                        
    };

    coloproctologos.sort(sortingByName);
    cirujanos.sort(sortingByName);
    miembros.sort(sortingByName);
    miemborsHonorarios.sort(sortingByName);


    coloproctologos.forEach(item => addingItem(item, "miembros1"));
    cirujanos.forEach(item => addingItem(item, "miembros2"));
    miembros.forEach(item => addingItem(item, "miembros3"));
    miemborsHonorarios.forEach(item => addingItem(item, "miembros4"));
    memoriam.forEach(item => addingItem(item, "miembros5"));
    expresidentes.forEach(item => addingItem(item, "expresidentes"));

    addingMultimedia();
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });           
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li:not(.dropdown) a').click(function() {
    $('.navbar-toggle:visible').click();
});

var coloproctologos = [
    {"type":"COLOPROCTOLOGO","name":"Héctor", "lastName": "Enríquez Blanco","description":"6a. Ave. 3-00 Zona 10 Ciudad, Guatemala", "tel":"2331-2280 ", "email":"colonyrecto@yahoo.com", "pic":"img/members/tab1/Dr. Héctor Enriquez.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"José Antonio", "lastName": "Perdomo Cuyún", "description":"2a. Calle 25-19 Zona 15 Vista Hermosa I Edificio Multimedica Of. 403 Ciudad, Guatemala", "tel":"2385-7863", "email":"antonio50287@yahoo.com ", "pic":"img/members/tab1/Dr. José Antonio Perdomo.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Rabi", "lastName": "Mejia", "description":"Edificio Centro Medico San Lucas 13 Ave. 6-20 zona 3, 4 nivel Quetzaltenango", "tel":"7736-8235", "email":"mejiarabi@hotmail.com", "pic":"img/members/tab1/img3.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Gustavo", "lastName": "Alvarado Alecio", "description":"6ta. Ave. 9-18, Zona 10 Edifício Sixtino II  ala 2 oficina 702 Ciudad, Guatemala ", "tel":"2278-9846/47", "email":"alvaradoalecio@gmail.com", "pic":"img/members/tab1/img4.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Carlos Eduardo", "lastName": "Pineda Molina", "description":"6a. Ave. 3-22 Zona 10 Edificio Centro Medico II Of. 905 Ciudad Guatemala ", "tel":"2332-8998", "email":"drepineda@gmail.com", "pic":"img/members/tab1/img5.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Eduardo", "lastName": "García Escobar", "description":"5a. Calle 7-79 Zona 9 Ciudad, Guatemala", "tel":" 2334-6997", "email":"", "pic":"img/members/tab1/Dr. Eduardo García Escobar.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Tito José María", "lastName": "Gómez Méndez", "description":"10a. calle 2-22 Zona 14 - Edificio Torre de Parqueo Anexo Hospital La Paz. 7o. Nivel Oficina 710. Guatemala.", "tel":"(502) 2368-0401 - (502) 2368-0402", "email":"tjmgomez@gmail.com ", "pic":"img/members/tab1/Dr. Tito Gomez.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Mario", "lastName": "Hernández Chávez", "description":"20 Calle 9-26 Zona 13 Aurora II Ciudad, Guatemala", "tel":"2474-0392", "email":"marahecha@gmail.com ", "pic":"img/members/tab1/img8.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Luís", "lastName": "Lujan Lorenzana", "description":"4a. Ave. 3-14 Zona 10 Ciudad, Guatemala", "tel":"2331-2971", "email":"dr.llujan@gmail.com", "pic":"img/members/tab1/Dr. Luis Lujan.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Miguel Ángel", "lastName": "Martini Lainfiesta", "description":"2a. Calle 25-19 Zona 15 Edificio Multimedica Of. 804 Ciudad, Guatemala", "tel":"2385-7837", "email":"mmartini1962@gmail.com", "pic":"img/members/tab1/img10.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Maxi Alexander", "lastName": "Méndez Morán", "description":"6av. 9-18 zona 10 Edificio Sixtino II Oficina 606 ala 1 Sexto nivel", "tel":"2278-9335 y 3650-0841/63", "email":"maxiproctologo@gmail.com", "pic":"img/members/tab1/Dr. Maxi Méndez.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Aldo", "lastName": "Calderón Contreras", "description":"6a. Calle 13-52, Zona 3 Edificio Los Altos Quetzaltenango", "tel":"7767-4607/46", "email":"aldojcalderon@yahoo.com", "pic":"img/members/tab1/img12.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Raúl Alejandro", "lastName": "Morales López", "description":"13 Ave. 6-51, Zona 2 Quetzaltenango", "tel":"7765-5124", "email":"ralemora@gmail.com", "pic":"img/members/tab1/img13.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Carlos", "lastName": "Parellada Cuadrado", "description":"6a. Ave. 3-22 Zona 10 Edifício Centro Mèdico II Of. 705 Ciudad Guatemala", "tel":"2331-7673 / 2331-7686", "email":"carlosparellada@gmail.com", "pic":"img/members/tab1/Dr. Carlos Parellada.jpg", "title":"Dr."},
    //{"type":"COLOPROCTOLOGO","name":"Julio Rafael", "lastName": "Pineda Sagastume", "description":"7a. Calle 3-57 Zona 1 Ciudad, Guatemala", "tel":"2232-4929", "email":"jrpineda@gmail.com", "pic":"img/members/tab1/img15.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Jorge S.J.", "lastName": "Gómez", "description":"", "tel":"3015-0077", "email":"drsanjose@gmail.com", "pic":"img/members/tab1/Dr. Jorge San José.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Rafael", "lastName": "Pivaral Martínez", "description":"Avenida Las Américas 21-69, Zona 10 Edificio Medico Obelisco Nivel 9 Of, Ciudad Guatemala", "tel":"2337-3376", "email":"rafapima@yahoo.com.mx", "pic":"img/members/tab1/img17.jpg", "title":"Dr."},
    //{"type":"COLOPROCTOLOGO","name":"Eduardo Quiñónez Azmitia", "lastName": "", "description":"9a. Ave. 2-33, Zona 1 Centro Gastrointestinal Oriente Chiquimula", "tel":"7942-4946", "email":"edy3424@yahoo.com.mx", "pic":"img/members/tab1/img18.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"John A.", "lastName": "Poole Trennert", "description":"6a. Ave. 9-18  Zona 10 Sixtino Torre II Of. 706 Ciudad Guatemala", "tel":"2278-3178 / 2278-3181", "email":"poolemd@ufm.edu.gt", "pic":"img/members/tab1/Dr. John Anthony Poole Trennert.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Marco Alessandro", "lastName": "Bocaletti", "description":"6 ave. 9-18 zona 10 Edificio Sixtino II 2 nivel oficina 207", "tel":"2470-2988 / 3171-2012", "email":"docboca@yahoo.com", "pic":"img/members/tab1/img20.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Manuel Alejandro", "lastName": "Garcia Giron", "description":"7ma avenida 9-64 zona 9. Edificio Zona Médica. 2ndo Nivel, Torre 1, Oficina 210", "tel":"2508-7846 / 4462-4923", "email":"drmanuelgarciagiron@gmail.com / info@coloproctogt.com", "pic":"img/members/tab1/img21.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Rodolfo", "lastName": "Gonzalez", "description":"6ta avenida 9-18 Zona 10, Edificio Sixtino II Ala 1 Oficina 3 y 4. Interior de Gastrosoluciones.", "tel":"2269-5000 / 30177-203", "email":"colonyrecto@surgical.net", "pic":"img/members/tab1/img22.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Hilda Alejandra", "lastName": "Tobias Castillo", "description":"6ta ave y 4ta calle zona 1, Barrio la Ermita. San Benito, Peten. 2do nivel de farmacia moderna central.", "tel":"(502) 4132-2057", "email":"colonyrectopeten@gmail.com", "pic":"img/members/tab1/img23.jpg", "title":"Dra."}
];

var cirujanos = [
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Roberto", "lastName": "Baldizón", "description":"4a. Calle 3-23 Zona 10 Ciudad Guatemala", "tel":"2361-6090", "email":"dr_baldizon@yahoo.com.mx", "pic":"img/members/tab1/Dr. Roberto Baldizon Mendez.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Carlos", "lastName": "Federico Castillo", "description":"6a. Avenida 7-39 Zona 10 Edificio Las Brisas Oficina 403”A” Ciudad Guatemala", "tel":"2361-3426", "email":"cfcastillor@hotmail.com", "pic":"img/members/tab2/img2.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Fernando", "lastName": "González Arrechea", "description":"6a. Ave. 9-18, Zona 10 Edificio Sixtino II Ala 1 Of. 507 Ciudad, Guatemala", "tel":"2278-3136/ 2278-3139", "email":"gonzalezarrechea@yahoo.com", "pic":"img/members/tab2/img3.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Erwin", "lastName": "Hernández Díaz", "description":"6a. Ave. 9-18,  Zona 10 Edifício Sixtino II Ala 1 Of. 507 Ciudad, Guatemala", "tel":"2278-3136 / 2278-3139", "email":"lucreher@yahoo.com ", "pic":"img/members/tab2/img4.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Edgar", "lastName": "Herrera Ríos", "description":"6a. Ave. 7-39 zona 10 Edificio Las Brisas Of. 206 Ciudad, Guatemala", "tel":"2334-7570 ", "email":"drherrerarios@hotmail.com", "pic":"img/members/tab2/img5.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Julio César", "lastName": "Morales Linares", "description":"4ta. avenida 15-73 zona 10 Oficina # 105 Edificio Clínicas Médicas zona 10. Ciudad de Guatemala.", "tel":"(502)  23373460 y 23373461 ", "email":"labryjcm@gmail.com", "pic":"img/members/tab1/Dr. Julio Morales.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Guillermo", "lastName": "Ponce Figueroa", "description":"6a. Ave. 8-71 Zona 10 Hosp. Herrera Llerandi Ala sur 2do. Nivel Of. 7 Ciudad, Guatemala", "tel":"2362-8635", "email":"drguillermoponce@gmail.com", "pic":"img/members/tab2/img7.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Víctor H.", "lastName": "Valdez Vásquez", "description":"11 Calle 2-37 Zona 1 3er. Nivel Ciudad Guatemala", "tel":"2232-5004", "email":"hugo_valdez_v@hotmail.com", "pic":"img/members/tab1/Dr. Víctor Valdez.jpg", "title":"Dr."}
];

var miembros = [
    //{"type":"MIEMBRO ADHERENTE","name":"Brenda", "lastName": "Escobar Ulloa", "description":"6a Ave. 7-66 Zona 10 Condominio Medico Oficina E-1 Ciudad, Guatemala", "tel":"2331-5633 / 2362-9753", "email":"cleoescobarulloa@gmail.com", "pic":"img/members/tab3/img1.jpg", "title":"Dra."},
    {"type":"MIEMBRO ADHERENTE","name":"Gladys", "lastName": "Monroy Escobar", "description":"14 Ave. 7-12 Zona 14 Edificio Empresarial La Villa Of. 18 Ciudad, Guatemala", "tel":"24160-6500", "email":"monroygime@hotmail.com", "pic":"img/members/tab1/Dra. Gladys Monroy.jpg", "title":"Dra."},
    {"type":"MIEMBRO ADHERENTE","name":"Miguel Ángel", "lastName": "Ortega", "description":"3a. Calle 10-71 Zona 15 Interior Hospital El Pilar Clínica de Radioterapia La Asunción Ciudad, Guatemala", "tel":"2420-0000 Ext. 8320", "email":"info@rla.com.gt", "pic":"img/members/tab3/img2.jpg", "title":"Dr."},
    {"type":"MIEMBRO ADHERENTE","name":"Jaime", "lastName": "Álvarez", "description":"", "tel":"41502131", "email":"jaimealv@hotmail.es", "pic":"img/members/tab3/img3.jpg", "title":"Dr."}
];

var expresidentes = [
    {"type":"Per&iacute;odo 2016-2018","name":"José Antonio", "lastName": "Perdomo Cuyún", "description":"2a. Calle 25-19 Zona 15 Vista Hermosa I Edificio Multimedica Of. 403 Ciudad, Guatemala", "tel":"2385-7863", "email":"antonio50287@yahoo.com ", "pic":"img/members/tab1/Dr. José Antonio Perdomo.jpg", "title":"Dr."},   
];

var memoriam = [
    {"type":"","name":"Fernando ", "lastName": "Leiva", "description":"", "pic":"img/members/memoriam/dr_fernando_leiva.jpg", "title":"Dr."},
    {"type":"","name":"Carlos ", "lastName": "Escobar", "description":"", "pic":"img/members/memoriam/dr_carlos_escobar.jpg", "title":"Dr."},
    {"type":"","name":"Rigoberto ", "lastName": "Pellecer", "description":"", "pic":"img/members/memoriam/dr_rigoberto_pellecer.jpg", "title":"Dr."},
    {"type":"","name":"Eduardo ", "lastName": "Qui&ntilde;onez", "description":"", "pic":"img/members/memoriam/dr_eduardo_quinonez.jpeg", "title":"Dr."},
    {"type":"","name":"Brenda ", "lastName": "Escobar", "description":"", "pic":"img/members/memoriam/dra_brenda_escobar_ulloa.jpg", "title":"Dra."},
    {"type":"","name":"Julio", "lastName": "Pineda", "description":"", "pic":"img/members/honorarios/dr_julio_pineda.jpg", "title":"Dr."},
]

var miemborsHonorarios = [
    {"type":"MIEMBRO HONORARIO","name":"Peter", "lastName": "Sagar (UK)", "description":"", "pic":"img/members/honorarios/dr_peter_sagar.jpg", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Julio", "lastName": "Garc&iacute;a-Aguilar (USA)", "description":"", "pic":"img/members/honorarios/dr_julio_garcia-aguilar.jpg", "title":"Dr."},
    //{"type":"MIEMBRO HONORARIO","name":"Julio", "lastName": "Pineda", "description":"", "pic":"img/members/honorarios/dr_julio_pineda.jpg", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Mario", "lastName": "Hernandez", "description":"", "pic":"img/members/tab1/Dr. Mario Ramiro Hernández Chavez.jpg", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Eduardo", "lastName": "García Escobar", "description":"", "pic":"img/members/tab1/Dr. Eduardo García Escobar.jpg", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Víctor H.", "lastName": "Valdez Vásquez", "description":"", "pic":"img/members/tab1/Dr. Víctor Valdez.jpg", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Antonio", "lastName": " Lacy Fortuny", "description":"", "pic":"img/conferencistas2019/dr_antonio_lacy.png", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Jose", "lastName": "Guillem", "description":"", "pic":"img/conferencistas2019/dr_jose_guillem.png", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Jorge Latif", "lastName": "Valdez Vásquez", "description":"", "pic":"img/conferencistas2019/dr_jorge_latif.jpg", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Rogelio", "lastName": "Morales Cattani", "description":"", "pic":"img/conferencistas2019/dr_regelio_morales.png", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Miguel Angel", "lastName": "Mercado", "description":"", "pic":"img/conferencistas2019/dr_miguel_mercado.png'", "title":"Dr."},
    {"type":"MIEMBRO HONORARIO","name":"Feza", "lastName": "Remsi", "description":"", "pic":"img/conferencistas2019/dr_feza_remsi.png", "title":"Dr."}
];

var multimedia = [ 
    {"id":"1", "src" : "img/pic/1.jpg"},
    {"id":"2", "src" : "img/pic/2.jpg"},
    {"id":"3", "src" : "img/pic/3.jpg"},
    {"id":"4", "src" : "img/pic/4.jpg"},
    {"id":"5", "src" : "img/pic/5.jpg"},
    {"id":"6", "src" : "img/pic/6.jpg"}
    /*{"id":"7", "src" : "img/pic/7.jpg"},
    {"id":"8", "src" : "img/pic/8.jpg"},
    {"id":"9", "src" : "img/pic/9.jpg"},
    {"id":"10", "src" : "img/pic/10.jpg"},
    {"id":"11", "src" : "img/pic/11.jpg"},
    {"id":"12", "src" : "img/pic/12.jpg"},
    {"id":"13", "src" : "img/pic/13.jpg"},
    {"id":"14", "src" : "img/pic/14.jpg"},
    {"id":"15", "src" : "img/pic/15.jpg"},
    {"id":"16", "src" : "img/pic/16.jpg"},
    {"id":"17", "src" : "img/pic/17.jpg"},
    {"id":"18", "src" : "img/pic/18.jpg"},
    {"id":"19", "src" : "img/pic/19.jpg"},
    {"id":"20", "src" : "img/pic/20.jpg"},
    {"id":"21", "src" : "img/pic/21.jpg"},
    {"id":"22", "src" : "img/pic/22.jpg"},
    {"id":"23", "src" : "img/pic/23.jpg"},
    {"id":"24", "src" : "img/pic/24.jpg"},
    {"id":"25", "src" : "img/pic/25.jpg"},
    {"id":"26", "src" : "img/pic/26.jpg"},
    {"id":"27", "src" : "img/pic/27.jpg"},
    {"id":"28", "src" : "img/pic/28.jpg"},
    {"id":"29", "src" : "img/pic/29.jpg"},
    {"id":"30", "src" : "img/pic/30.jpg"},
    {"id":"31", "src" : "img/pic/31.jpg"},
    {"id":"32", "src" : "img/pic/32.jpg"}*/
];