               
    function showServiceModal(formname)
    {
        if(formname=='BookforCarService')
        {
            $("#packageslist").hide();
            $('#form_name2').remove();
            $('#formnameField0').append('<input type="hidden" class="form-control"  name="form_name" id="form_name1" value="Book A Car Service" >');
        }
        if(formname=='BookforMafia')
        {                                             
            $("#packageslist").show();
            $('#form_name1').remove();
            $('#formnameField0').append('<input type="hidden" class="form-control"  name="form_name" id="form_name2" value="Book A Mafia Service" >');
        }
            $("#form").modal('show');
    }
   
   function showModal(formname)
    {
       
        if(formname=='LadiesOffer')
        {
            $("#referoffer").hide();
            $('#form_name2').remove();
            $('#form_name3').remove();
            $('#formnameField').append('<input type="hidden" class="form-control"  name="form_name" id="form_name1" value="LadiesOffer" >');
            
        }
        if(formname=='FestiveOffer')
        {
            $("#referoffer").hide();
            $('#form_name1').remove();
            $('#form_name3').remove();
            $('#formnameField').append('<input type="hidden" class="form-control"  name="form_name" id="form_name2" value="FestiveOffer" >');
           
        }
        if(formname=='ReferralOffer' && formname!='LadiesOffer' && formname!='FestiveOffer' )
        {
            $("#referoffer").show();
            $('#form_name1').remove();
            $('#form_name2').remove();
            $('#formnameField').append('<input type="hidden" class="form-control"  name="form_name" id="form_name3" value="ReferralOffer" >');
        } 
          $("#form2").modal('show');
    
    }
    

$(document).ready(function()
{
    var base_url = window.location.origin+'/';
     $('#state').change(function()
     {
      var stateId = $('#state').val();
          if(stateId != '')
          {
            $.ajax
            ({
                url:""+base_url+"Common/getcitybyID",
                method:"POST",
                data:{stateId:stateId},
                success:function(data)
                {
                 $('#city').html(data);
                }
            });
          }
          else
          {
             $('#city').html('<option value="">Select City</option>');
          }
     });
     

    $('#brands').change(function()
     {
          $(".hiddenForm").show();
        //   var optionSelected = $("option:selected", this);
          var valueSelected = $(this).val();
          
          if(valueSelected=='1' || valueSelected=='2' || valueSelected=='3'){
              
              $("#adr").hide();
              $("#soci").hide();
              $("#booth").hide();
              $("#insu").hide();
              $("#expe").hide();
              $("#cutbus").hide();
              $("#swpic").hide();
              
              $("#businessAdr").show();
              $("#faxN").show();
              $("#web").show();
              $("#dataEsta").show();
              $("#priorHistory").show();
          }
          if(valueSelected=='4'){
              $("#businessAdr").hide();
              $("#faxN").hide();
              $("#dataEsta").hide();
              $("#priorHistory").hide();
              
              $("#adr").show();
              $("#web").show();
              $("#soci").show();
              $("#booth").show();
              $("#insu").show();
              $("#expe").show();
              $("#cutbus").show();
              $("#swpic").show();
          }
           //  $('#formnameField').append('<input type="hidden" class="form-control"  name="form_name" id="form_name3" value="ReferralOffer" >');
     });

$(document).on("click touchstart touchend", function () {
    $('.box').removeClass('touched');
  });

  $("#homeSearch").keyup(function()
  {
      $(".search-box #homeSearch").css('display', 'inline-block');
      
    var homeSearch = $('#homeSearch').val();
    // alert(homeSearch);
    if(homeSearch)
    {
        $.ajax
        ({
           type: "post",
           url: ""+base_url+"Home/filterData",
           cache: false,    
            dataType:"JSON",
           data:'search='+homeSearch,
           success: function(result)
           {
             $('#displaySearch').html("");
             $('#displaySearch').css('display','inline-block');
             $(".search-box #homeSearch").css('display', 'inline-block');
               var obj = JSON.parse(JSON.stringify(result));
               if(obj.length>0)
               { 
                    var items=[];  
                      $('#displaySearch').html('<i class="fa fa-times" id="removesearch" onClick="clickme()"></i>');
                      $.each(obj, function(i,val)
                      {    
                          items.push($('<p/>').html('<a id="resltu" href="'+base_url+''+val.slug+'">'+val.title+'</a>'));
                      }); 
                      
                    $('#displaySearch').append.apply($('#displaySearch'), items);
               }else{
                   $('#displaySearch').html('<i class="fa fa-times" id="removesearch" onClick="clickme()"></i>');
                   $('#displaySearch').html($('<p/>').text("No Data Found"));  
               } 
           },
           error: function(){      
             alert('Error while request..');
           }
        });
    }
      return false;
  });
     
});    
    
    
   function clickme()
     {
        //  alert("heer");
         $('#displaySearch').remove();
     }
    
    
