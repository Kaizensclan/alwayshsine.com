$('#outletstate').change(function()
{

    //alert ('gopal');
    //die();

   var result=[];
   var stateId = $('#outletstate').val();
     if(stateId != '')
     {
       $.ajax({
           url:""+base_url+"Common/getoutletbyState",
           method:"POST",
           dataType: 'json',
           data:{stateId:stateId},
           success:function(result)
           {
               $('#outlettype').html("");
                $('.filter').show();
                 if(result!='')
                 {
                    var searcaData="";
                     searcaData=JSON.parse(JSON.stringify(result));
                     $.each(searcaData, function( index,item) 
                     {
                       
                           slug = item.slug;
                           name = item.name;
                           cityName = item.cityName;
                           stateName = item.stateName;
                           
                           if(item.address!="" )
                           {
                                address ='<li><strong><i class="fa fa-map-marker"></i>&nbsp;&nbsp;</strong> '+item.address+' - '+item.zipcode+'<br/>'+item.cityName+','+item.stateName+'</li>';
                             }else{
                                address="";
                           }
                           if(item.contactPerson!="")
                           {
                               if(item.alternetContactPerson!="")
                               {
                                   contactPerson = '<li><strong><i class="fa fa-user"></i>&nbsp;&nbsp;</strong> '+item.contactPerson+''+item.alternetContactPerson+'</li>';
                               }else{
                                   contactPerson="";
                               }
                           }else{
                                contactPerson="";
                           }
                           if(item.contact!="" )
                           {
                               if(item.alternetContact!="")
                               {
                                   contact = '<li><strong><i class="fa fa-phone"></i>&nbsp;&nbsp;</strong> '+item.contact+''+item.alternetContact+'</li>';
                               }else{
                                   contact="";
                               }
                           }else{
                                contact="";
                           }
                           if(item.timings!="" )
                           {
                               timings = '<li><strong><i class="fa fa-clock"></i>&nbsp;&nbsp;</strong> '+item.timings+'</li>';
                             }else{
                                timings="";
                           }
                           
                         var htmlBody='<div class="display-data" style="border-bottom: 1px solid #FF0000;";><h4><a href="'+base_url+'locate-our-outlets/'+slug+'"><strong style="color:#FF0000;">The Detailing Mafia '+name+'</strong></a></h4><ul class="geo-data">'+address+''+contactPerson+''+contact+'<li><strong><i class="fa fa-envelope"> </i>&nbsp;&nbsp;</strong> Info@thedetailingmafia.com</li>'+timings+'</ul></div>'; 
                         $('#outlettype').append(htmlBody);
                   });
                       
                 }else{
                     $('#outlettype').append('<div style="border-bottom: 1px solid #FF0000;";><h4><strong style="color:#FF0000;">No Data Found</strong></h4></div>');
                 }
                   generateMap(result,result);
           }
       });
     }
     else
     {
        $('#outlettype').html('<option value="">Select Outlet</option>');
        $('.filter').hide();
     }
});

$('#inputsearch').keypress(function()
{
   var result=[];
   var searchInput = $('#inputsearch').val();
   if(searchInput!="")
     {
       $.ajax
       ({
           url:""+base_url+"Common/getoutletbyInput",
           method:"POST",
           dataType: 'json',
           data:{searchInput:searchInput},
           success:function(result)
           {
           //   alert(JSON.stringify(result));
               $('#outlettype').html("");
                $('.filter').show();
                 if(result!='')
                 {
                     var searcaData="";
                      searcaData=JSON.parse(JSON.stringify(result)); 
                     $.each(searcaData, function( index,item) 
                     {
                          
                           slug = item.slug;
                           name = item.name; 
                           outletStatus = item.outletStatus;
                           cityName = item.cityName;
                           stateName = item.stateName;
                           
                           if(item.address!="" )
                           {
                               address ='<li><strong><i class="fa fa-map-marker"></i>&nbsp;&nbsp;</strong> '+item.address+' - '+item.zipcode+'<br/>'+item.cityName+','+item.stateName+'</li>';
                              }else{
                                address="";
                           }
                           if(item.contactPerson!="")
                           {
                               if(item.alternetContactPerson!="")
                               {
                                   contactPerson = '<li><strong><i class="fa fa-user"></i>&nbsp;&nbsp;</strong> '+item.contactPerson+''+item.alternetContactPerson+'</li>';
                               }else{
                                   contactPerson="";
                               }
                           }else{
                                contactPerson="";
                           }
                           if(item.contact!="" )
                           {
                               if(item.alternetContact!="")
                               {
                                   contact = '<li><strong><i class="fa fa-phone"></i>&nbsp;&nbsp;</strong> '+item.contact+''+item.alternetContact+'</li>';
                               }else{
                                   contact="";
                               }
                           }else{
                                contact="";
                           }
                           if(item.timings!="" )
                           {
                               timings = '<li><strong><i class="fa fa-clock"></i>&nbsp;&nbsp;</strong> '+item.timings+'</li>';
                             }else{
                                timings="";
                           }
                           
                           
                         var htmlBody='<div class="display-data" style="border-bottom: 1px solid #FF0000;";><h4><a href="'+base_url+'/locate-our-outlets/'+slug+'"><strong style="color:#FF0000;">The Detailing Mafia '+name+'</strong></a></h4><ul class="geo-data">'+address+''+contactPerson+''+contact+'<li><strong><i class="fa fa-envelope"> </i>&nbsp;&nbsp;</strong> Info@thedetailingmafia.com</li>'+timings+'</ul></div>'; 
                         $('#outlettype').append(htmlBody);
                   });
                       
                 }else{
                     $('#outlettype').append('<div style="border-bottom: 1px solid #FF0000;";><h4><strong style="color:#FF0000;">No Data Found</strong></h4></div>');
                 }
                 generateMap(result,result);
           }
       });
     }
     else
     {
         $('.display-data').last().remove();
        $('.filter').hide();
     }
});


function generateMap(markers,infoWindowContent)
{
  var map;
   var bounds = new google.maps.LatLngBounds();
   
   var mapOptions = {
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.ROADMAP
   };
                
   // Display a map on the page
   map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
   map.setTilt(45);

   // Display multiple markers on a map
   var infoWindow = new google.maps.InfoWindow(), marker, i;
    
   // Loop through our array of markers &amp; place each one on the map  
   for( i = 0; i < markers.length; i++ ) {
       
       var lat = parseFloat(markers[i]['latitude']);
       var lng = parseFloat(markers[i]['longitude']);
       
       var position = new google.maps.LatLng(lat, lng);
       bounds.extend(position);
       marker = new google.maps.Marker({
           position: position,
           map: map,
           // title: markers[i]['name']
       });
        
       // Each marker to have an info window    
       google.maps.event.addListener(marker, 'click', (function(marker, i) {
           return function() {
                  
                if(infoWindowContent[i]['outletStatus']!='Coming Soon')
                {
                    var path='outlets';
                }else{
                    var path='outlets/comingsoon';
                }

               infoWindow.setContent('<div class="mapDeatils" id="container" align="center">' +
                                         '<div class="title"><h3><a href="'+base_url+'locate-our-outlets/'+infoWindowContent[i]['slug']+'">The Detailing Mafia '+infoWindowContent[i]['name']+'</a></h3></div>' +
                                         '<div class="content">' +
                                              '<img src="'+base_url+'assets/images/'+path+'/'+infoWindowContent[i]['slug']+'.webp" alt="'+infoWindowContent[i]['name']+'" height="130" width="200">' +
                                           '<div class="address" >'+infoWindowContent[i]['address']+' - '+infoWindowContent[i]['zipcode']+'</div>' +
                                           '<p>'+infoWindowContent[i]['cityName']+','+infoWindowContent[i]['stateName']+'</p>' +
                                           '<div class="subTitle"><h4>Contacts</h4></div>' +
                                           '<p>'+infoWindowContent[i]['contactPerson']+'<br/>'+infoWindowContent[i]['contact']+'</p>' +
                                         '</div>' +
                                         '<div class="bottom-gradient"><a target="_blank" href="'+infoWindowContent[i]['mapLink']+'"><h3>View on Google map</h3></a></div>'+
                                       '</div>');
               infoWindow.open(map, marker);
           }
       })(marker, i));
    
       // Automatically center the map fitting all markers on the screen
       map.fitBounds(bounds);
   }
    
   // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
   var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
       this.setZoom(5);
       google.maps.event.removeListener(boundsListener);
   });
}
