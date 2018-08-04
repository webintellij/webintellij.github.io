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

    var sortingByName = (a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
        var cardHtml = '<div class="card profile"> '+
                       '     <div class="profile__img"> '+
                       '         <img src="'+item.pic+'" alt=""> '+
                       '     </div> '+
                       '     <div class="profile__info"> '+
                       '         <h3>'+item.title+' '+item.name+'</h3> '+
                       '         <h4>'+item.type+'</h4> '+
                       '         <p>'+item.description+'</p> '+
                       '         <ul class="icon-list"> '+
                       '             <li><i class="glyphicon glyphicon-phone"></i> '+item.tel+'</li> '+
                       '             <li><i class="glyphicon glyphicon-envelope"></i> '+item.email+'</li> '+
                       '         </ul>'+
                       '     </div>'+
                       ' </div>';
        $("#"+container).append(cardHtml);               
    };

    coloproctologos.sort(sortingByName);
    cirujanos.sort(sortingByName);
    miembros.sort(sortingByName);

    console.log(coloproctologos);
    console.log(cirujanos);
    console.log(miembros);

    coloproctologos.forEach(item => addingItem(item, "miembros1"));
    cirujanos.forEach(item => addingItem(item, "miembros2"));
    miembros.forEach(item => addingItem(item, "miembros3"));
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
    {"type":"COLOPROCTOLOGO","name":"Héctor Enríquez Blanco", "description":"6a. Ave. 3-00 Zona 10 Ciudad, Guatemala", "tel":"2331-2280 ", "email":"colonyrecto@yahoo.com", "pic":"img/members/tab1/img1.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"José Antonio Perdomo Cuyún", "description":"2a. Calle 25-19 Zona 15 Vista Hermosa I Edificio Multimedica Of. 403 Ciudad, Guatemala", "tel":"2385-7863", "email":"antonio50287@yahoo.com ", "pic":"img/members/tab1/img2.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Rabi Mejia", "description":"Edificio Centro Medico San Lucas 13 Ave. 6-20 zona 3, 4 nivel Quetzaltenango", "tel":"7736-8235", "email":"mejiarabi@hotmail.com", "pic":"img/members/tab1/img3.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Gustavo Alvarado Alecio", "description":"6ta. Ave. 9-18, Zona 10 Edifício Sixtino II  ala 2 oficina 702 Ciudad, Guatemala ", "tel":"2278-9846/47", "email":"alvaradoalecio@gmail.com", "pic":"img/members/tab1/img4.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Carlos Eduardo Pineda Molina", "description":"6a. Ave. 3-22 Zona 10 Edificio Centro Medico II Of. 905 Ciudad Guatemala ", "tel":"2332-8998", "email":"drepineda@gmail.com", "pic":"img/members/tab1/img5.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Eduardo García Escobar", "description":"5a. Calle 7-79 Zona 9 TEL. 2334-6997 Ciudad, Guatemala", "tel":"", "email":"", "pic":"img/members/tab1/img6.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Tito José María Gómez Méndez", "description":"10a. calle 2-22 Zona 14 - Edificio Torre de Parqueo Anexo Hospital La Paz. 7o. Nivel Oficina 710. Guatemala.", "tel":"(502) 2368-0401 - (502) 2368-0402", "email":"tjmgomez@gmail.com ", "pic":"img/members/tab1/img7.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Mario Hernández Chávez", "description":"20 Calle 9-26 Zona 13 Aurora II Ciudad, Guatemala", "tel":"2474-0392", "email":"marahecha@gmail.com ", "pic":"img/members/tab1/img8.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Luís Lujan Lorenzana", "description":"4a. Ave. 3-14 Zona 10 Ciudad, Guatemala", "tel":"2331-2971", "email":"dr.llujan@gmail.com", "pic":"img/members/tab1/img9.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Miguel Ángel Martini Lainfiesta", "description":"2a. Calle 25-19 Zona 15 Edificio Multimedica Of. 804 Ciudad, Guatemala", "tel":"2385-7837", "email":"mmartini1962@gmail.com", "pic":"img/members/tab1/img10.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Maxi Alexander Méndez Morán", "description":"6av. 9-18 zona 10 Edificio Sixtino II Oficina 606 ala 1 Sexto nivel", "tel":"2278-9335 y 3650-0841/63", "email":"maxiproctologo@gmail.com", "pic":"img/members/tab1/img11.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Aldo Calderón Contreras", "description":"6a. Calle 13-52, Zona 3 Edificio Los Altos Quetzaltenango", "tel":"7767-4607/46", "email":"aldojcalderon@yahoo.com", "pic":"img/members/tab1/img12.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Raúl Alejandro Morales López", "description":"13 Ave. 6-51, Zona 2 Quetzaltenango", "tel":"7765-5124", "email":"ralemora@gmail.com", "pic":"img/members/tab1/img13.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Carlos Parellada Cuadrado", "description":"6a. Ave. 3-22 Zona 10 Edifício Centro Mèdico II Of. 705 Ciudad Guatemala", "tel":"2339-3615", "email":"carlosparellada@gmail.com", "pic":"img/members/tab1/img14.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Julio Rafael Pineda Sagastume", "description":"7a. Calle 3-57 Zona 1 Ciudad, Guatemala", "tel":"2232-4929", "email":"jrpineda@gmail.com", "pic":"img/members/tab1/img15.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Jorge S.J.Gómez", "description":"", "tel":"3015-0077", "email":"drsanjose@gmail.com", "pic":"img/members/tab1/img16.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Rafael Pivaral Martínez", "description":"Avenida Las Américas 21-69, Zona 10 Edificio Medico Obelisco Nivel 9 Of, Ciudad Guatemala", "tel":"2337-3376", "email":"rafapima@yahoo.com.mx", "pic":"img/members/tab1/img17.jpg", "title":"Dr."},
    //{"type":"COLOPROCTOLOGO","name":"Eduardo Quiñónez Azmitia", "description":"9a. Ave. 2-33, Zona 1 Centro Gastrointestinal Oriente Chiquimula", "tel":"7942-4946", "email":"edy3424@yahoo.com.mx", "pic":"img/members/tab1/img18.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"John A. Poole Trennert", "description":"6a. Ave. 9-18  Zona 10 Sixtino Torre II Of. 706 Ciudad Guatemala", "tel":"2278-3178 / 2278-3181", "email":"poolemd@ufm.edu.gt", "pic":"img/members/tab1/img19.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Marco Alessandro Bocaletti", "description":"6 ave. 9-18 zona 10 Edificio Sixtino II 2 nivel oficina 207", "tel":"2470-2988 / 3171-2012", "email":"docboca@yahoo.com", "pic":"img/members/tab1/img20.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Manuel Alejandro Garcia Giron", "description":"6ta Avenida 9-18 Zona 10, Edificio Sixtino II Ala 1, 5to Nivel Oficina 505", "tel":"2278-3149 / 3196-0706", "email":"drmanuelgarciagiron@gmail.com / info@coloproctogt.com", "pic":"img/members/tab1/img21.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Rodolfo Gonzalez", "description":"6ta avenida 9-18 Zona 10, Edificio Sixtino II Ala 1 Oficina 3 y 4. Interior de Gastrosoluciones.", "tel":"2269-5000 / 30177-203", "email":"colonyrecto@surgical.net", "pic":"img/members/tab1/img22.jpg", "title":"Dr."},
    {"type":"COLOPROCTOLOGO","name":"Hilda Alejandra Tobias Castillo", "description":"6ta ave y 4ta calle zona 1, Barrio la Ermita. San Benito, Peten. 2do nivel de farmacia moderna central.", "tel":"(502) 4132-2057", "email":"colonyrectopeten@gmail.com", "pic":"img/members/tab1/img23.jpg", "title":"Dra."}
];

var cirujanos = [
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Roberto Baldizón", "description":"4a. Calle 3-23 Zona 10 Ciudad Guatemala", "tel":"2361-6090", "email":"dr_baldizon@yahoo.com.mx", "pic":"img/members/tab2/img1.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Carlos Federico Castillo", "description":"6a. Avenida 7-39 Zona 10 Edificio Las Brisas Oficina 403”A” Ciudad Guatemala", "tel":"2361-3426", "email":"cfcastillor@hotmail.com", "pic":"img/members/tab2/img2.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Fernando González Arrechea", "description":"6a. Ave. 9-18, Zona 10 Edificio Sixtino II Ala 1 Of. 507 Ciudad, Guatemala", "tel":"2278-3136/ 2278-3139", "email":"gonzalezarrechea@yahoo.com", "pic":"img/members/tab2/img3.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Erwin Hernández Díaz", "description":"6a. Ave. 9-18,  Zona 10 Edifício Sixtino II Ala 1 Of. 507 Ciudad, Guatemala", "tel":"2278-3136 / 2278-3139", "email":"lucreher@yahoo.com ", "pic":"img/members/tab2/img4.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Edgar Herrera Ríos", "description":"6a. Ave. 7-39 zona 10 Edificio Las Brisas Of. 206 Ciudad, Guatemala", "tel":"2334-7570 ", "email":"drherrerarios@hotmail.com", "pic":"img/members/tab2/img5.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Julio César Morales Linares", "description":"4a. Ave. 15-73 Zona 10 Edifício Clinicas Medicas Of. 404 Ciudad Guatemala", "tel":"2337-1859 ", "email":"labryjcm@gmail.com", "pic":"img/members/tab2/img6.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Guillermo Ponce Figueroa", "description":"6a. Ave. 8-71 Zona 10 Hosp. Herrera Llerandi Ala sur 2do. Nivel Of. 7 Ciudad, Guatemala", "tel":"2362-8635", "email":"drguillermoponce@gmail.com", "pic":"img/members/tab2/img7.jpg", "title":"Dr."},
    {"type":"CIRUJANO CON INTERES EN COLON Y RECTO","name":"Víctor H. Valdez Vásquez", "description":"11 Calle 2-37 Zona 1 3er. Nivel Ciudad Guatemala", "tel":"2232-5004", "email":"hugo_valdez_v@hotmail.com", "pic":"img/members/tab2/img8.jpg", "title":"Dr."}
]

var miembros = [
    {"type":"MIEMBRO ADHERENTE","name":"Brenda Escobar Ulloa", "description":"6a Ave. 7-66 Zona 10 Condominio Medico Oficina E-1 Ciudad, Guatemala", "tel":"2331-5633 / 2362-9753", "email":"cleoescobarulloa@gmail.com", "pic":"img/members/tab3/img1.jpg", "title":"Dra."},
    {"type":"MIEMBRO ADHERENTE","name":"Gladys Monroy Escobar", "description":"14 Ave. 7-12 Zona 14 Edificio Empresarial La Villa Of. 18 Ciudad, Guatemala", "tel":"24160-6500", "email":"monroygime@hotmail.com", "pic":"", "title":"Dra."},
    {"type":"MIEMBRO ADHERENTE","name":"Miguel Ángel Ortega", "description":"3a. Calle 10-71 Zona 15 Interior Hospital El Pilar Clínica de Radioterapia La Asunción Ciudad, Guatemala", "tel":"2420-0000 Ext. 8320", "email":"info@rla.com.gt", "pic":"img/members/tab3/img2.jpg", "title":"Dr."},
    {"type":"MIEMBRO ADHERENTE","name":"Jaime Álvarez", "description":"", "tel":"41502131", "email":"jaimealv@hotmail.es", "pic":"img/members/tab3/img3.jpg", "title":"Dr."}
]