

var arraymarkes ;
var generalkey;

var idgeneral=0;
var objh;



  var map;
var markers = [];









 var config = {
    apiKey: "AIzaSyA_L67YUVbfzQbgNLFbOylVyuQ6wF4Df_g",
    authDomain: "mototaxi-2b9d7.firebaseapp.com",
    databaseURL: "https://mototaxi-2b9d7.firebaseio.com",
    projectId: "mototaxi-2b9d7",
    storageBucket: "mototaxi-2b9d7.appspot.com",
    messagingSenderId: "424969414739"
  };
  firebase.initializeApp(config);





var general;



unavesmensaje();




var arrnode2=[];




function unavesmensaje2()
{





  firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
   



mi=snapshot.val();
 


var s=mi;

generalkey=snapshot.key;
general=s;




objh=Object.keys(mi);
idgeneral=0;
console.log("general "+genral);
var colocar;
for (var indice in objh) {
   colocar = {idscript: idgeneral, idfirebase:objh[indice]};



arrnode2.push(colocar);



idgeneral=idgeneral+1;


}

  });


}




function  arrayidall(){
var i;
for (i = 0; i < arrnode2.length; i++) { 
console.log( "arrnode2 " + arrnode2[i].idfirebase);


}

}



function  nodepartei(nodh,nodh2){



return general[nodh][nodh2]; 
}


var noregistro=true;
function validadcionuser(cel,ced){
for(var val in general){
    console.log("cel "+general[val].cedula);
   if(general[val].cel==cel&&general[val].cedula==ced){
 alert("encontrado login ");
 noregistro=false;
   } 
}
if(noregistro){
alert("no encontrado login ");
}
}
var idx=0;



function llamarandroid(){




}



function unavesmensaje()
{





  firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';





    mi=snapshot.val();
  
var s=mi;
generalkey=snapshot.key;
general=s;




objh=Object.keys(mi);
idgeneral=0;
for (var indice in objh) {

 colocar = {idscript: idgeneral, idfirebase:objh[indice]};




arrnode2.push(colocar);
console.log("general "+objh[indice] );



}




for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);


}
  });


}




var idx=0;


function myFunction2(){

   unavesmensaje();
   initMap();
   andridmarker(222, map) ;
   eventoonclimaker(markerand);


 document.getElementById("idbtvermap").style.display = "none";
 
}

    function initMap() {
        var uluru = {lat: 4.657883333333333, lng: -74.06214833333334};
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru,
          styles:[

{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#44b8db"
            }
        ]
    }

          ]
        });/*
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
           title: 'Hello World!',
            draggable: true

        });*/
//arraymarkes.push();
  var vidrecore=0;
  var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";
  for (var id in general) {

  if(general[id].activo=="a"){//general[id].activo=="a"&&general[id].cedula==1111){
        
           var marker = new google.maps.Marker({
           position:{lat:general[id].lat, lng:general[id].lng},
           //  icon: icons[feature.type].icon,
            map: map,
            title:objh[id],
            name:arrnode2[idx].idfirebase,
            idnodefirebase:objh[id],
            icon: image,
            taxista:general[id].nombre,
            placas:general[id].placas,

            activom:"b",
               animation: google.maps.Animation.DROP
          });


   idx=idx+1;
//arraymarkes.push(marker);
   console.log("for  "+generalkey[id]);

   markers.push(marker);

   marker.addListener('click', function(e) {
   map.setZoom(13);
   map.setCenter(this.getPosition());
   


    this.activom="a";
vndtaxista=this.name;
   
if(this.name!=null &&  String(this.name)!="undefined"){
firebase.database().ref().child("taxis").child(String(this.name)).child("activo").set(this.activom);
   this.activom="a";
firebase.database().ref().child("taxis").child(String(this.name)).child("latuser").set(parseFloat(vlatuser));
firebase.database().ref().child("taxis").child(String(this.name)).child("lnguser").set(parseFloat(vlnguser));



firebase.database().ref().child("taxis").child(String(this.name)).child("activo").set("b");


firebase.database().ref().child("taxis").child(String(this.name)).child("nduser").set(vndhijo);


showAndroidToast("lngm","st2","st2");



firebase.database().ref().child("taxis").child(String(this.name)).child("usuario").set(vnusuario);

 
//lamada();
document.getElementById("demo").innerHTML = "yo usuario "+vndhijo+" taxi " +this.taxista+" node taxis"+this.name +"placas "+this.placas+" "+ vlatuser+ "lat y lng"+ vlnguser+" vnusuario "+vnusuario ;
 //showAndroidToast("subirtaxista",this.taxista,this.placas);
setTimeout(function(){ firebase.database().ref().child("taxis").child(String(vndtaxista)).child("usuario").set(vnusuario);
 }, 3000);

}else{document.getElementById("demo").innerHTML = "recargue pagina" ;}



for(var  vm in markers){
  if(markers[vm].activom=="b"){
markers[vm].setVisible(false);



}
}

  });



}

       }








     

      }



      function llamada(){
        //alert(7777);
        showAndroidToast("subirtaxista","subirtaxista","subirtaxista");
      }

      function visiblemark(){


      }


function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Azure.png
 var markerand ;
 var imaandroidiconmaker="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/map_marker_base-32.png";
function andridmarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
   markerand = new google.maps.Marker({
    position: {lat: 4.897883333333333, lng: -74.06214833333334},
   map: map,
   icon:imaandroidiconmaker,
   title:"android",
           

  });
}

function eventoonclimaker(mark){
  mark.addListener('click', function(e) {
    map.setZoom(13);
    map.setCenter(this.getPosition());
 


  });

}


function recargaweb(){
firebase.database().ref().child("taxis").child(String(vndtaxista)).child("activo").set("a");

  window.location.reload();
}




function subirusuarioataxis(){
//firebase.database().ref().child("taxis").child(String(vndtaxista)).child("usuario").set(vnusuario);


}
