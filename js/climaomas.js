$(document).ready(function() {
 
// variables

  var selector_hora = '';
  var selector_hora4 = '';
  var selector_siguiente = '';
  var selector_parametro = '';
  var selector_racha = '';
  var selector_mes1 = '';
  var selector_mes2 = '';
  var selector_mes3 = '';
  var selector_mes5 = '';
  var selector_mes6 = '';
  var selector_mes7 = '';
  var selector_mes8 = '';
  var selector_mes9 = '';
  var selector_mes20 = '';
  var selector_mes51 = '';
  var selector_niebla = '';
  var selector_helada = '';
  var selector_avisoracha = '';
  var selector_visibilidad = '';
  var selector_vmax = '';
  var selector_vmax2 = '';
  var selector_vnormal = '';
  var selector_vnubes = '';
  var selector_mauto = '';
  var selector_tormenta2 = '';
  var selector_vniebla = '';
  var selector_ininiebla = '';
  var selector_disniebla = '';
  var selector_dists = '';
  var selector_presniebla = '';
  var selector_mapacalor = '';
  var selector_cuadrante = '';
  var selector_vislluvia = '';
  var selector_aviso = '';
  
// pad zeros  
  function padZeros(num, size) {
    var s = String(num);
    while (s.length < size) s = "0" + s;
    return s;
  }; 
  
// nombre del fichero de la rosa horaria
  function nombre_rosa_horaria(selector_aeropuerto,selector_mes,selector_hora) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    var hora = selector_hora;
	var enlace = aeropuerto+"_"+mes+"_"+hora+".png";
    return enlace	
  };

  // nombre del fichero dia tipico
  function nombre_dia_tipico(selector_aeropuerto,selector_mes) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    var enlace = aeropuerto+"_"+mes+".png";
    return enlace	
  };
  //nombre rosa mensual
  function nombre_rosa_mensual(selector_aeropuerto,selector_mes) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    var enlace = "rosa_"+aeropuerto+"_"+mes+".png";
    return enlace	
  };
    //nombre rosa temperatura
  function nombre_rosa_temperatura(selector_aeropuerto,selector_mes) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    var enlace = aeropuerto+"_"+mes+".png";
    return enlace	
  };
  //nombre BASENUBES
  function nombre_basenubes(selector_aeropuerto,selector_mes) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    var enlace = aeropuerto+"_"+mes+".png";
    return enlace	
  };
  //nombre vmax----------------------------------------------------------------------
  function nombre_vmax(selector_vmax) {
    var aeropuerto =  selector_vmax;
    var enlace = aeropuerto+".png";
    return enlace	
  };

//nombre racha mensual
  function nombre_racha_mensual(selector_aeropuerto,selector_mes) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    var enlace = aeropuerto+"_"+mes+".png";
    return enlace	
  };
  function nombre_fichero_anim(selector_aeropuerto,selector_mes) {
    var aeropuerto =  selector_aeropuerto;
    var mes = selector_mes;
    return aeropuerto+"_"+mes+".gif" 
  };
  
// encuentra siguiente hora
  function encuentra_siguiente(selector_siguiente,selector_hora) {
    if (selector_siguiente == "anterior") {
      var hora = padZeros(Math.max(parseInt(selector_hora)-1,0),3); }
    else if (selector_siguiente == "siguiente") {
      var hora = padZeros(Math.min(parseInt(selector_hora)+1,23),3); }
    return hora
  };
  
// tabs 
  $('.tabs a').click(function() {
    var $this = $(this);
    $('.panel').hide();
    var panel = $this.attr('href');
    $(panel).fadeIn(10);
    return(false);
  });

//PANEL 01 VIENTO MENSUAL----------------------------------------------------------------------
// aeropuerto
  $('.class_seleccion_aeropuerto5').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto5').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto5 = $this.attr('id');
    var fichero5 = nombre_rosa_mensual(selector_aeropuerto5,selector_mes5);
    $('#panel01zona3imagen').attr("src","meses/"+fichero5);
    return(false);
  });
  $('.class_seleccion_aeropuerto5:first ').click();  
  $('.class_seleccion_aeropuerto5').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto5').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes
  $('.class_seleccion_mes5').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes5').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes5 = $this.attr('id');
    var fichero5 = nombre_rosa_mensual(selector_aeropuerto5,selector_mes5);
    $('#panel01zona3imagen').attr("src","meses/"+fichero5);
    return(false);
  });
  $('.class_seleccion_mes5:first ').mouseover();  
  $('.class_seleccion_mes5').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes5').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });  

// PANEL 2 DIA TIPICO----------------------------------------------------------------------------
// aeropuerto
  $('.class_seleccion_aeropuerto2').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto2').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto2 = $this.attr('id');
    var fichero_diatipico = nombre_dia_tipico(selector_aeropuerto2,selector_mes2);
    $('#panel02zona3imagen').attr("src","diatipico/"+fichero_diatipico);
    return(false);
  });
  $('.class_seleccion_aeropuerto2:first ').click();  
  $('.class_seleccion_aeropuerto2').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto2').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes panel 2
  $('.class_seleccion_mes2').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes2').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes2 = $this.attr('id');
    var fichero_diatipico = nombre_dia_tipico(selector_aeropuerto2,selector_mes2);
	$('#panel02zona3imagen').attr("src","diatipico/"+fichero_diatipico);
    return(false);
  });
  $('.class_seleccion_mes2:first ').mouseover();  
  $('.class_seleccion_mes2').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes2').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
//PANEL 03 VIENTO HORARIO-------------------------------------------------------------------  
// aeropuerto panel
  $('.class_seleccion_aeropuerto1').click(function() {
    var $this = $(this);
    $('.class_seleccion_aeropuerto1').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto1 = $this.attr('id');
    var fichero = nombre_rosa_horaria(selector_aeropuerto1,selector_mes1,selector_hora);
	$('#panel03zona4imagen').attr("src","imagenes/"+fichero);
    return(false);
  });
  $('.class_seleccion_aeropuerto1:first ').click();  
  $('.class_seleccion_aeropuerto1').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto1').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
// mes panel03
  $('.class_seleccion_mes1').click(function() {
    var $this = $(this); 
    $('.class_seleccion_mes1').css('background-color','white').css('color','black');
    $this.css('background-color','red').css('color','white');
    selector_mes1 = $this.attr('id');
    var fichero = nombre_rosa_horaria(selector_aeropuerto1,selector_mes1,selector_hora);
	$('#panel03zona4imagen').attr("src","imagenes/"+fichero);
	return(false);
	});
  $('.class_seleccion_mes1:first ').click();  
  $('.class_seleccion_mes1').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes1').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
// hora
  $('.class_seleccion_hora').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_hora').css('background-color','white').css('color','black');
    $this.css('background-color','red').css('color','white');
    selector_hora = $this.attr('id');
    var fichero = nombre_rosa_horaria(selector_aeropuerto1,selector_mes1,selector_hora);
	$('#panel03zona4imagen').attr("src","imagenes/"+fichero);    
    return(false);
  });
  $('.class_seleccion_hora:first ').mouseover();  
  $('.class_seleccion_hora').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
  });
  
  // siguiente
  $('.class_seleccion_siguiente').click(function() {
    var $this = $(this); 
    $('.class_seleccion_siguiente').css('background-color','white').css('color','black');
    $this.css('background-color','red').css('color','white');
    selector_siguiente = $this.attr('id');
    selector_hora = encuentra_siguiente(selector_siguiente,selector_hora);
    $('#'+selector_hora).mouseover(); 
    var fichero = nombre_rosa_horaria(selector_aeropuerto1,selector_mes1,selector_hora);
    $('#panel03zona4imagen').attr("src","imagenes/"+fichero);  
    return(false);
  });
  $('.class_seleccion_siguiente:last ').click();  
  $('.class_seleccion_siguiente').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_siguiente').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
//-----------------------------------------------------------------------------------------------  
//panel04 COMPARACION ROSAS
      $('.class_seleccion_mes4').mouseover(function() {
      var $this = $(this); 
      $('.class_seleccion_mes4').css('background-color','white').css('color','black');
      $this.css('background-color','Blue').css('color','white');
      selector_mes4 = $this.attr('id');
	  
	  $("select[name=elegir_aeropuerto1]").bind("change", function() {
      $("#panel04zona4imagen").attr('src',"imagenes/"+ $(this).val()+"_"+selector_mes4+"_"+selector_hora4+".png");
      }).change();
      });

	$('.class_seleccion_mes4').mouseover(function() {
      var $this = $(this); 
      $('.class_seleccion_mes4').css('background-color','white').css('color','black');
      $this.css('background-color','Blue').css('color','white');
      selector_mes4 = $this.attr('id');
	  
	  $("select[name=elegir_aeropuerto2]").bind("change", function() {
      $("#panel04zona5imagen").attr('src',"imagenes/"+ $(this).val()+"_"+selector_mes4+"_"+selector_hora4+".png");
      }).change();
      });
	  
      $('.class_seleccion_mes4:first ').mouseover();  
      $('.class_seleccion_mes4').mouseover(function() {
      $(this).css( 'cursor', 'pointer' );
      });
  
    $('.class_seleccion_hora4').mouseover(function() {
      var $this = $(this); 
      $('.class_seleccion_hora4').css('background-color','white').css('color','black');
      $this.css('background-color','Blue').css('color','white');
      selector_hora4 = $this.attr('id');
	  
	  $("select[name=elegir_aeropuerto1]").bind("change", function() {
      $("#panel04zona4imagen").attr('src',"imagenes/"+ $(this).val()+"_"+selector_mes4+"_"+selector_hora4+".png");
      }).change();
      });
	  
	$('.class_seleccion_hora4').mouseover(function() {
      var $this = $(this); 
      $('.class_seleccion_hora4').css('background-color','white').css('color','black');
      $this.css('background-color','Blue').css('color','white');
      selector_hora4 = $this.attr('id');
	  
	  $("select[name=elegir_aeropuerto2]").bind("change", function() {
      $("#panel04zona5imagen").attr('src',"imagenes/"+ $(this).val()+"_"+selector_mes4+"_"+selector_hora4+".png");
      }).change();
      });

      $('.class_seleccion_hora4:first ').mouseover();  
      $('.class_seleccion_hora4').mouseover(function() {
      $(this).css( 'cursor', 'pointer' );
      });

//PANEL 12 TEMPERATURA----------------------------------------------------------------------

// aeropuerto3
  $('.class_seleccion_aeropuerto3').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto3').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto3 = $this.attr('id');
    var fichero3 = nombre_rosa_temperatura(selector_aeropuerto3,selector_mes3);
    $('#panel12zona3imagen').attr("src","temperatura/"+fichero3);
    return(false);
  });
  $('.class_seleccion_aeropuerto3:first ').click();  
  $('.class_seleccion_aeropuerto3').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto3').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes panel 3
  $('.class_seleccion_mes3').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes3').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes3 = $this.attr('id');
    var fichero3 = nombre_rosa_temperatura(selector_aeropuerto3,selector_mes3);
    $('#panel12zona3imagen').attr("src","temperatura/"+fichero3);
    return(false);
  });
  $('.class_seleccion_mes3:first ').mouseover();  
  $('.class_seleccion_mes3').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes3').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
    //PANEL 16----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto16').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto16').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aviso = $this.attr('id');
    var fichero16 = nombre_vmax(selector_aviso);
    $('#panel16zona2imagen').attr("src","aviso/"+fichero16);
    return(false);
  });
  $('.class_seleccion_aeropuerto16:first ').click();  
  $('.class_seleccion_aeropuerto16').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto16').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  //PANEL 52----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto52').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto52').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_vniebla = $this.attr('id');
    var fichero52 = nombre_vmax(selector_vniebla);
    $('#panel52zona2imagen').attr("src","niebla/"+fichero52);
    return(false);
  });
  $('.class_seleccion_aeropuerto52:first ').click();  
  $('.class_seleccion_aeropuerto52').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto52').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
      //PANEL 50 ----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto50').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto50').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_disniebla = $this.attr('id');
    var fichero50 = nombre_vmax(selector_disniebla);
    $('#panel50zona2imagen').attr("src","disniebla/"+fichero50);
    return(false);
  });
  $('.class_seleccion_aeropuerto50:first ').click();  
  $('.class_seleccion_aeropuerto50').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto50').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
    //PANEL 43 ----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto43').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto43').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_tniebla = $this.attr('id');
    var fichero43 = nombre_vmax(selector_tniebla);
    $('#panel43zona2imagen').attr("src","temniebla/"+fichero43);
    return(false);
  });
  $('.class_seleccion_aeropuerto43:first ').click();  
  $('.class_seleccion_aeropuerto43').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto43').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
      //PANEL 14 ----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto14').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto14').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_ininiebla = $this.attr('id');
    var fichero14 = nombre_vmax(selector_ininiebla);
    $('#panel14zona2imagen').attr("src","ininiebla/"+fichero14);
    return(false);
  });
  $('.class_seleccion_aeropuerto14:first ').click();  
  $('.class_seleccion_aeropuerto14').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto14').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
        //PANEL 15 ----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto15').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto15').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_presniebla = $this.attr('id');
    var fichero15 = nombre_vmax(selector_presniebla);
    $('#panel15zona2imagen').attr("src","presniebla/"+fichero15);
    return(false);
  });
  $('.class_seleccion_aeropuerto15:first ').click();  
  $('.class_seleccion_aeropuerto15').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto15').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  //PANEL 7----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto7').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto7').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_vnubes = $this.attr('id');
    var fichero7 = nombre_vmax(selector_vnubes);
    $('#panel7zona2imagen').attr("src","vnubosidad/"+fichero7);
    return(false);
  });
  $('.class_seleccion_aeropuerto7:first ').click();  
  $('.class_seleccion_aeropuerto7').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto7').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });

//PANEL 17----------------------------------------------------------------------
  $('.class_seleccion_aeropuerto17').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto17').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_deprocio = $this.attr('id');
    var fichero17 = nombre_vmax(selector_deprocio);
    $('#panel17zona2imagen').attr("src","deprocio/"+fichero17);
    return(false);
  });
  $('.class_seleccion_aeropuerto17:first ').click();  
  $('.class_seleccion_aeropuerto17').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto17').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
    //PANEL 36 TORMENTA HORA DEL DIA----------------------------------------------------------------------

  $('.class_seleccion_tormenta2').click(function() {
    var $this = $(this); 
    $('.class_seleccion_tormenta2').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_tormenta2 = $this.attr('id');
    var fichero36 = nombre_vmax(selector_tormenta2);
    $('#panel36zona2imagen').attr("src","tormenta/"+fichero36);
    return(false);
  });
  $('.class_seleccion_tormenta2:first ').click();  
  $('.class_seleccion_tormenta2').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_tormenta2').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
//PANEL 8 BASE DE NUBES----------------------------------------------------------------------

// aeropuerto8
  $('.class_seleccion_aeropuerto8').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto8').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto8 = $this.attr('id');
    var fichero8 = nombre_basenubes(selector_aeropuerto8,selector_mes8);
    $('#panel8zona3imagen').attr("src","basenubes/"+fichero8);
    return(false);
  });
  $('.class_seleccion_aeropuerto8:first ').click();  
  $('.class_seleccion_aeropuerto8').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto8').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes panel 8
  $('.class_seleccion_mes8').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes8').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes8 = $this.attr('id');
    var fichero8 = nombre_basenubes(selector_aeropuerto8,selector_mes8);
    $('#panel8zona3imagen').attr("src","basenubes/"+fichero8);
    return(false);
  });
  $('.class_seleccion_mes8:first ').mouseover();  
  $('.class_seleccion_mes8').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes8').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
//PANEL 9 BKN015----------------------------------------------------------------------

// aeropuerto9
  $('.class_seleccion_aeropuerto9').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto9').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto9 = $this.attr('id');
    var fichero9 = nombre_basenubes(selector_aeropuerto9,selector_mes9);
    $('#panel9zona3imagen').attr("src","basenubes015/"+fichero9);
    return(false);
  });
  $('.class_seleccion_aeropuerto9:first ').click();  
  $('.class_seleccion_aeropuerto9').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto9').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes panel 9
  $('.class_seleccion_mes9').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes9').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes9 = $this.attr('id');
    var fichero9 = nombre_basenubes(selector_aeropuerto9,selector_mes9);
    $('#panel9zona3imagen').attr("src","basenubes015/"+fichero9);
    return(false);
  });
  $('.class_seleccion_mes9:first ').mouseover();  
  $('.class_seleccion_mes9').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes9').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });  



  
 //PANEL 10 valores normales----------------------------------------------------------------------
 // valores normales
  $('.class_seleccion_vnormal').click(function() {
    var $this = $(this); 
    $('.class_seleccion_vnormal').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_vnormal = $this.attr('id');
    var fichero10 = nombre_vmax(selector_vnormal);
    $('#panel10zona2imagen').attr("src","vnormales/"+fichero10);
    return(false);
  });
  $('.class_seleccion_vnormal:first ').click();  
  $('.class_seleccion_vnormal').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_vnormal').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
   //PANEL 13 ---------------------------------------------------------------------
 // 
  $('.class_seleccion_aeropuerto13').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto13').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mapacalor = $this.attr('id');
    var fichero13 = nombre_vmax(selector_mapacalor);
    $('#panel13zona2imagen').attr("src","mapacalor/"+fichero13);
    return(false);
  });
  $('.class_seleccion_aeropuerto13:first ').click();  
  $('.class_seleccion_aeropuerto13').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto13').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // PANEL 20 RACHAS
  $('.class_seleccion_aeropuerto20').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto20').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto20 = $this.attr('id');
    var fichero20 = nombre_racha_mensual(selector_aeropuerto20,selector_mes20);
    $('#panel20zona3imagen').attr("src","rachas/"+fichero20);
    return(false);
  });
  $('.class_seleccion_aeropuerto20:first ').click();  
  $('.class_seleccion_aeropuerto20').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto20').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes panel 20
  $('.class_seleccion_mes20').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes20').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes20 = $this.attr('id');
	var fichero20 = nombre_racha_mensual(selector_aeropuerto20,selector_mes20);
    $('#panel20zona3imagen').attr("src","rachas/"+fichero20);
    return(false);
  });
  $('.class_seleccion_mes20:first ').mouseover();  
  $('.class_seleccion_mes20').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes20').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });


//PANEL 21 vmax2----------------------------------------------------------------------
// racha
  $('.class_seleccion_vmax2').click(function() {
    var $this = $(this); 
    $('.class_seleccion_vmax2').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_vmax2 = $this.attr('id');
    var fichero21 = nombre_vmax(selector_vmax2);
    $('#panel21zona2imagen').attr("src","vmax2/"+fichero21);
    return(false);
  });
  $('.class_seleccion_vmax2:first ').click();  
  $('.class_seleccion_vmax2').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_vmax2').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });  


//PANEL 24 vmax----------------------------------------------------------------------
//PANEL 24 ----------------------------------------------------------------------
// aeropuerto
  $('.class_seleccion_aeropuerto24').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto24').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto24 = $this.attr('id');
    var fichero24 = nombre_basenubes(selector_aeropuerto24,selector_cuadrante);
    $('#panel24zona3imagen').attr("src","vmax/"+fichero24);
    return(false);
  });
  $('.class_seleccion_aeropuerto24:first ').click();  
  $('.class_seleccion_aeropuerto24').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto24').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes
  $('.class_seleccion_cuadrante').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_cuadrante').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_cuadrante = $this.attr('id');
    var fichero24 = nombre_basenubes(selector_aeropuerto24,selector_cuadrante);
    $('#panel24zona3imagen').attr("src","vmax/"+fichero24);
    return(false);
  });
  $('.class_seleccion_cuadrante:first ').mouseover();  
  $('.class_seleccion_cuadrante').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_cuadrante').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  }); 


//PANEL 31 DISTRIBUCION TEMPORAL DE TS ----------------------------------------------------------------------

  $('.class_seleccion_aeropuerto31').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto31').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_dists = $this.attr('id');
    var fichero31 = nombre_vmax(selector_dists);
    $('#panel31zona2imagen').attr("src","dists/"+fichero31);
    return(false);
  });
  $('.class_seleccion_aeropuerto31:first ').click();  
  $('.class_seleccion_aeropuerto31').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto31').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
    //PANEL 36 TORMENTA HORA DEL DIA----------------------------------------------------------------------

  $('.class_seleccion_tormenta2').click(function() {
    var $this = $(this); 
    $('.class_seleccion_tormenta2').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_tormenta2 = $this.attr('id');
    var fichero36 = nombre_vmax(selector_tormenta2);
    $('#panel36zona2imagen').attr("src","tormenta/"+fichero36);
    return(false);
  });
  $('.class_seleccion_tormenta2:first ').click();  
  $('.class_seleccion_tormenta2').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_tormenta2').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  //PANEL 40 ----------------------------------------------------------------------

// precipitacion
  $('.class_seleccion_mauto').click(function() {
    var $this = $(this); 
    $('.class_seleccion_mauto').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mauto = $this.attr('id');
    var fichero40 = nombre_vmax(selector_mauto);
    $('#panel40zona2imagen').attr("src","lluvia/"+fichero40);
    return(false);
  });
  $('.class_seleccion_mauto:first ').click();  
  $('.class_seleccion_mauto').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mauto').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
   //PANEL 41 ----------------------------------------------------------------------

// precipitacion
  $('.class_seleccion_aeropuerto41').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto41').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_vislluvia = $this.attr('id');
    var fichero41 = nombre_vmax(selector_vislluvia);
    $('#panel41zona2imagen').attr("src","vislluvia/"+fichero41);
    return(false);
  });
  $('.class_seleccion_aeropuerto41:first ').click();  
  $('.class_seleccion_aeropuerto41').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto41').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  }); 
  // PANEL 51 DIA TIPICO----------------------------------------------------------------------------
// aeropuerto
  $('.class_seleccion_aeropuerto51').click(function() {
    var $this = $(this); 
    $('.class_seleccion_aeropuerto51').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_aeropuerto51 = $this.attr('id');
    var fichero_diatipico2 = nombre_dia_tipico(selector_aeropuerto51,selector_mes51);
    $('#panel51zona3imagen').attr("src","diatipico2/"+fichero_diatipico2);
    return(false);
  });
  $('.class_seleccion_aeropuerto51:first ').click();  
  $('.class_seleccion_aeropuerto51').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_aeropuerto51').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
  // mes 
  $('.class_seleccion_mes51').mouseover(function() {
    var $this = $(this); 
    $('.class_seleccion_mes51').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
    selector_mes51 = $this.attr('id');
    var fichero_diatipico2 = nombre_dia_tipico(selector_aeropuerto51,selector_mes51);
	$('#panel51zona3imagen').attr("src","diatipico2/"+fichero_diatipico2);
    return(false);
  });
  $('.class_seleccion_mes51:first ').mouseover();  
  $('.class_seleccion_mes51').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_mes51').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
// PANEL 30 DIAS DE NIEBLA
  $('.class_seleccion_niebla').click(function() {
    var $this = $(this);
    $('.class_seleccion_niebla').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
	selector_niebla = $this.attr('id');
	
	var options_niebla = {
	                chart: {
						defaultSeriesType: 'column',
						backgroundColor: {
                          linearGradient: [0, 0, 500, 500],
                          stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(240, 240, 255)']
                          ]
                        },
						borderWidth: 2,
                        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
                        plotShadow: true,
                        plotBorderWidth: 1
					},
					// Pongo los datos en el eje de las 'X'
					xAxis: {
						categories: ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE','AÑO'],
						// Pongo el título para el eje de las 'X'
						title: {
							text: 'MESES'
						}
					},
					  subtitle: {
					    text: 'NÚMERO MEDIO DE DÍAS AL MES CON NIEBLA (1988-2017)'
					  },
					  yAxis: {
						title: {
							text: 'Número de días de niebla'
						},
						tickInterval: 2,
						max: 22,
					  },
					  // Doy formato al la "cajita" que sale al pasar el ratón por encima de la gráfica
					tooltip: {
						enabled: true,
						formatter: function() {
							return '<b>'+ this.series.name +'</b><br/>'+
								this.x +': '+ this.y +' '+this.series.name;
						}
					},
					// Doy opciones a la gráfica
					plotOptions: {
						line: {
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: true
						},
						series: {
                             borderWidth: 0,
                             dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                             }
					    },
				        },
				    };	
	if (selector_niebla == "LEBZ") {		  
		var data_niebla_lebz = {
		            title: {
						text: 'LEBZ'
					},
  		            series: [{
				                name: 'Media',
				                data: [10.1,6.1,2.7,1.1,0.8,0.2,0.1,0.1,0.6,2.8,6.5,9]
				            },
							{
				                name: 'Máximo',
				                data: [21,16,11,5,4,3,1,1,5,10,16,17]
				            },					
							],
				};
	    $('#container').highcharts($.extend(options_niebla, data_niebla_lebz));
		
	} else if (selector_niebla == "LEZL") {
	    var data_niebla_lezl = {
			        title: {
						text: 'LEZL'
					},
					series: [{
				                name: 'Media',
				                data: [2.9,2.9,2.2,1,0.4,0.2,0,0.1,0.6,2.4,2,3.1]
				            },
							{
				                name: 'Máximo',
				                data: [8,8,5,3,2,2,1,1,3,5,6,9]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_lezl));
		
	} else if (selector_niebla == "LEBA") {
	    var data_niebla_leba = {
			        title: {
						text: 'LEBA'
					},
					series: [{
				                name: 'Media',
				                data: [3.3,2.2,0.5,0.5,0.5,0,0,0,0.3,1,2.3,3.9]
				            },
							{
				                name: 'Máximo',
				                data: [7,6,3,2,3,1,1,0,4,6,7,9]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_leba));	
	} else if (selector_niebla == "LEMO") {
	    var data_niebla_lemo = {
			        title: {
						text: 'LEMO'
					},
					series: [{
				                name: 'Media',
				                data: [3.1,2.9,1.5,0.9,0.3,0.1,0.4,0.1,0.3,1,1.9,3.1]
				            },
							{
				                name: 'Máximo',
				                data: [8,8,4,6,1,1,6,1,2,4,8,8]
				            },					
							],
				};
		$('#container').highcharts($.extend(options_niebla, data_niebla_lemo));		
	} else if (selector_niebla == "LEJR") {
	    var data_niebla_lejr = {
			        title: {
						text: 'LEJR'
					},
					series: [{
				                name: 'Media',
				                data: [4.6,4.4,3,1.7,1.1,0.7,0.7,0.9,1.6,2.6,2.8,4.3]
				            },
							{
				                name: 'Máximo',
				                data: [14,11,7,5,3,3,5,2,7,6,7,12]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_lejr));				
	} else if (selector_niebla == "LERT") {
	    var data_niebla_lert = {
			        title: {
						text: 'LERT'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [3.5,2.4,2.3,1,0.8,0.3,0.4,0.5,0.8,2,1.8,2.6]
				            },
							{
				                name: 'Máximo',
				                data: [11,8,5,4,3,2,4,3,3,7,7,10]
				            },					
							],
				};	
        $('#container').highcharts($.extend(options_niebla, data_niebla_lert));				
	} else if (selector_niebla == "LEMG") {
	    var data_niebla_lemg = {
			        title: {
						text: 'LEMG'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.6,0.8,0.8,0.3,0.5,0.7,0.8,0.8,0.5,1.5,0.6,0.9]
				            },
							{
				                name: 'Máximo',
				                data: [3,5,3,2,4,4,3,5,4,5,3,5]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_lemg));				
	} else if (selector_niebla == "LEGR") {
	    var data_niebla_legr = {
			        title: {
						text: 'LEGR'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [4.1,2.2,1.3,0.8,0.5,0.1,0,0.1,0.4,1.5,3.2,5.3]
				            },
							{
				                name: 'Máximo',
				                data: [9,7,4,3,3,2,1,1,2,6,7,12]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_legr));				
	} else if (selector_niebla == "LEGA") {
	    var data_niebla_lega = {
			        title: {
						text: 'LEGA'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [3,1.7,0.9,0.6,0.3,0.1,0,0,0.3,0.7,1.9,2.6]
				            },
							{
				                name: 'Máximo',
				                data: [9,6,3,4,2,2,0,1,2,3,7,9]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_lega));				
	} else if (selector_niebla == "LEAM") {
	    var data_niebla_leam = {
			        title: {
						text: 'LEAM'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.7,1.3,1.2,0.5,0.9,0.4,0.4,0.3,0.4,0.8,0.4,0.5]
				            },
							{
				                name: 'Máximo',
				                data: [5,7,4,3,5,2,4,3,2,3,5,3]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_leam));				
	} else if (selector_niebla == "LELC") {
	    var data_niebla_lelc = {
			        title: {
						text: 'LELC'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [2.3,2.6,1.5,0.9,0.2,0.2,0,0.1,0.4,1.6,1.7,2]
				            },
							{
				                name: 'Máximo',
				                data: [8,11,6,3,1,3,1,1,3,5,6,8]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_lelc));				
	} else if (selector_niebla == "LERI") {
	    var data_niebla_leri = {
			        title: {
						text: 'LERI'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [2.3,2.6,1.5,0.9,0.2,0.2,0,0.1,0.4,1.6,1.7,2]
				            },
							{
				                name: 'Máximo',
				                data: [8,11,6,3,1,3,1,1,3,5,6,8]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_leri));				
	} else if (selector_niebla == "GEML") {
	    var data_niebla_geml = {
			        title: {
						text: 'GEML'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.2,0.5,0.9,0.4,0.2,0.2,0.2,0.2,0.3,0.5,0.3,0.3]
				            },
							{
				                name: 'Máximo',
				                data: [1,2,3,3,2,1,2,1,3,2,1,2]
				            },					
							],
				};
        $('#container').highcharts($.extend(options_niebla, data_niebla_geml));				
	}
    return(false);
  });
  
  $('.class_seleccion_niebla:first ').click();  
  $('.class_seleccion_niebla').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_niebla').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
// PANEL 11 HELADAS
  $('.class_seleccion_helada').click(function() {
    var $this = $(this);
    $('.class_seleccion_helada').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
	selector_helada = $this.attr('id');
	
		var options_helada = {
	                chart: {
						defaultSeriesType: 'column',
						backgroundColor: {
                          linearGradient: [0, 0, 500, 500],
                          stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(240, 240, 255)']
                          ]
                        },
						borderWidth: 2,
                        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
                        plotShadow: true,
                        plotBorderWidth: 1
					},
					// Pongo los datos en el eje de las 'X'
					xAxis: {
						categories: ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE','AÑO'],
						// Pongo el título para el eje de las 'X'
						title: {
							text: 'MESES'
						}
					},
					  subtitle: {
					    text: 'NÚMERO MEDIO DE DÍAS AL MES CON HELADA 1988-2017'
					  },
					  yAxis: {
						title: {
							text: 'Número de días de helada'
						},
						tickInterval: 2,
						max: 30,
					  },
					  // Doy formato al la "cajita" que sale al pasar el ratón por encima de la gráfica
					tooltip: {
						enabled: true,
						formatter: function() {
							return '<b>'+ this.series.name +'</b><br/>'+
								this.x +': '+ this.y +' '+this.series.name;
						}
					},
					// Doy opciones a la gráfica
					plotOptions: {
						line: {
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: true
						},
						series: {
                             borderWidth: 0,
                             dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                             }
					    },
				        },
				    };

	if (selector_helada == "LEBZ") {		
		var data_helada_lebz = {
			        title: {
						text: 'LEBZ'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de dias con helada',
				                data: [7.4,4,0.5,0,0,0,0,0,0,0,0.9,5.3]
				            },
							{
				                name: 'Nº máximo de dias con helada',
				                data: [24,23,7,0,0,0,0,0,0,0,6,18]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-7.2,-5.6,-2.8,-2,4.6,9.2,10.8,11,6.4,1.6,-4.4,-6]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lebz));
	} else if (selector_helada == "LEZL") {
	    var data_helada_lezl = {
			        title: {
						text: 'LEZL'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0.8,0.4,0,0,0,0,0,0,0,0,0,0.3]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [6,8,1,0,0,0,0,0,0,0,0,5]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-4,-2,-2,2.8,6.8,11.6,14.2,14,10,6.6,0.5,-2.5]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lezl));		
	} else if (selector_helada == "LEBA") {
	    var data_helada_leba = {
			        title: {
						text: 'LEBA'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [5.5,2.9,0.4,0,0,0,0,0,0,0,0.6,3.1]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [22,20,3,0,0,0,0,0,0,0,5,15]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-8.2,-4.9,-4.2,1.2,2.4,9.2,11.6,11.8,7.4,3.3,-2,-5.2]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_leba));		
	} else if (selector_helada == "LEMO") {
	    var data_helada_lemo = {
			        title: {
						text: 'LEMO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [3.8,1.8,0.4,0,0,0,0,0,0,0,0.2,1.5]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [20,11,2,0,0,0,0,0,0,0,1,11]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-7.9,-4.5,-4.2,1.1,3.5,8.2,11,11.2,8.3,3.2,-2.4,-5.4]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lemo));		
	} else if (selector_helada == "LEJR") {
	    var data_helada_lejr = {
			        title: {
						text: 'LEJR'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [2.1,0.8,0.1,0,0,0,0,0,0,0,0.1,1]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [8,8,2,0,0,0,0,0,0,0,3,8]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-5.4,-4.9,-2.4,1.6,5.5,9.8,11.5,12,7.2,2.8,-0.8,-3.7]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lejr));		
	} else if (selector_helada == "LERT") {
	    var data_helada_lert = {
			        title: {
						text: 'LERT'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0.6,0.4,0,0,0,0,0,0,0,0,0,0.3]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [5,8,0,0,0,0,0,0,0,0,1,3]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-4.7,-2.3,0.4,3.6,6.8,10.8,11.5,13.3,10.3,6.2,0,-1.6]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lert));		
	} else if (selector_helada == "LEMG") {
	    var data_helada_lemg = {
			        title: {
						text: 'LEMG'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0.1,0,0,0,0,0,0,0,0,0,0,0]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [1,1,1,0,0,0,0,0,0,0,0,0]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-0.2,0,-1.2,4.4,7.6,12.8,14.6,14.6,10.2,6,1.6,1.4]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lemg));		
	} else if (selector_helada == "LEGR") {
	    var data_helada_legr = {
			        title: {
						text: 'LEGR'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [16,10.1,3.4,0.7,0.1,0,0,0,0,0.2,5,13.2]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [30,28,11,3,4,0,0,0,0,3,14,25]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-10.9,-10,-7.6,-1.8,-0.2,6,6.4,8,3.6,-1.8,-6.4,-8.4]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_legr));		
	} else if (selector_helada == "LEGA") {
	    var data_helada_lega = {
			        title: {
						text: 'LEGA'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [12.8,6.9,2,0.2,0,0,0,0,0,0,2.4,9.4]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [27,23,7,2,0,0,0,0,0,0,11,19]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-10,-9.6,-6.4,-1.9,0.6,6.5,9,9.4,5.2,1.2,-4.5,-7.2]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lega));		
	} else if (selector_helada == "LEAM") {
	    var data_helada_leam = {
			        title: {
						text: 'LEAM'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0,0,0,0,0,0,0,0,0,0,0,0]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [0,0,0,0,0,0,0,0,0,0,0,0]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [0.1,1.8,1,7.2,9.5,13.2,15,15.2,10.1,9.3,3.1,3.5]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_leam));		
	} else if (selector_helada == "LELC") {
	    var data_helada_lelc = {
			        title: {
						text: 'LELC'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0.9,0.4,0.2,0,0,0,0,0,0,0,0.1,0.7]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [6,3,2,0,0,0,0,0,0,0,1,5]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-2.2,-1.6,-2.5,3,5.4,10,14,14,9.5,5.5,-0.5,-2.5]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lelc));		
	} else if (selector_helada == "LERI") {
	    var data_helada_leri = {
			        title: {
						text: 'LERI'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [3.3,1.5,0.2,0,0,0,0,0,0,0,0.4,2.7]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [17,11,2,0,0,0,0,0,0,0,3,8]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-5,-4.6,-3,1.4,4.4,9,13,14.6,8.2,2.8,-2.2,-4.4]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_leri));		
	} else if (selector_helada == "LEMI") {
	    var data_helada_lemi = {
			        title: {
						text: 'CORVERA IMIDA'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0.4,0.3,0,0,0,0,0,0,0,0,0,0.2]
				            },
							{
				                name: 'Nº máximo de heladas en un mes',
				                data: [4,4,0,0,0,0,0,0,0,0,0,2]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [-2.7,-0.8,0.4,4,5.3,10.8,15.2,15.8,11.4,6.2,1.5,-0.6]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_lemi));		
	} else if (selector_helada == "GEML") {
	    var data_helada_geml = {
			        title: {
						text: 'GEML'// Titulo (Opcional)
					},
					series: [{
				                name: 'Nº medio de heladas',
				                data: [0,0,0,0,0,0,0,0,0,0,0,0]
				            },
							{
				                name: 'Nº máximo de heladas',
				                data: [0,0,0,0,0,0,0,0,0,0,0,0]
				            },
                            {
				                name: 'Temperatura mínima absoluta',
								visible: false,
                                showInLegend: false,
				                data: [0.4,2.8,3.4,7,9.8,14.4,16.4,18,14.4,10.2,5,3.9]
				            },							
							],
				};
		$('#container_heladas').highcharts($.extend(options_helada, data_helada_geml));		
	} 
    return(false);
  });
  
  $('.class_seleccion_helada:first ').click();  
  $('.class_seleccion_helada').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_helada').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
// PANEL 23
  $('.class_seleccion_avisoracha').click(function() {
    var $this = $(this);
    $('.class_seleccion_avisoracha').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
	selector_avisoracha = $this.attr('id');
	
	var options_avisoracha = {
	                chart: {
						defaultSeriesType: 'column',
						backgroundColor: {
                          linearGradient: [0, 0, 500, 500],
                          stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(240, 240, 255)']
                          ]
                        },
						borderWidth: 2,
                        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
                        plotShadow: true,
                        plotBorderWidth: 1
					},
					// Pongo los datos en el eje de las 'X'
					xAxis: {
						categories: ['LEBZ','LEZL','LEBA','LEMO','LEJR','LERT','LEMG','LEGR','LEGA','LEAM','LELC','CORVERA','LERI','GEML'],
						// Pongo el título para el eje de las 'X'
						title: {
							text: 'Aeropuertos/Bases'
						}
					},
					  subtitle: {
					    text: 'NÚMERO TOTAL DE DÍAS CON RACHA MÁXIMA IGUAL O SUPERIOR A 43 KT (1997-2017)'
					  },
					  yAxis: {
						title: {
							text: 'Número de dias'
						},
						tickInterval: 1,
						max: 34,
					  },
					  // Doy formato al la "cajita" que sale al pasar el ratón por encima de la gráfica
					tooltip: {
						enabled: true,
						formatter: function() {
							return '<b>'+ this.series.name +'</b><br/>'+
								this.x +': '+ this.y +' '+this.series.name;
						}
					},
					// Doy opciones a la gráfica
					plotOptions: {
						line: {
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: true
						},
						series: {
                             borderWidth: 0,
                             dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                             }
					    },
				        },
				    };
	if (selector_avisoracha == "ene") {		
		var data_avisoracha_ene = {
			        title: {
						text: 'ENERO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
				                data: [4,4,3,5,3,4,6,1,0,33,8,9,4,15]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_ene));
	} else if (selector_avisoracha == "feb") {		
		var data_avisoracha_feb = {
			        title: {
						text: 'FEBRERO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
				                data: [6,4,2,6,5,7,1,2,0,33,4,11,2,19]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_feb));
	} else if (selector_avisoracha == "mar") {		
		var data_avisoracha_mar = {
			        title: {
						text: 'MARZO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
				                data: [3,2,1,2,4,13,9,3,0,28,15,7,5,17]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_mar));
	} else if (selector_avisoracha == "abr") {		
		var data_avisoracha_abr = {
			        title: {
						text: 'ABRIL'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
				                data: [2,4,2,5,1,6,4,1,0,27,4,1,0,9]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_abr));
	} else if (selector_avisoracha == "may") {		
		var data_avisoracha_may = {
			        title: {
						text: 'MAYO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
				                data: [0,0,2,1,0,1,1,1,0,16,3,0,0,1]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_may));
	} else if (selector_avisoracha == "jun") {		
		var data_avisoracha_jun = {
			        title: {
						text: 'JUNIO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [1,0,0,0,0,0,0,1,0,14,1,0,0,0]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_jun));
	} else if (selector_avisoracha == "jul") {		
		var data_avisoracha_jul = {
			        title: {
						text: 'JULIO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [0,0,0,0,1,1,0,2,1,3,1,0,0,0]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_jul));
	} else if (selector_avisoracha == "ago") {		
		var data_avisoracha_ago = {
			        title: {
						text: 'AGOSTO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [1,0,0,0,0,0,0,0,0,2,1,1,0,1]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_ago));
	} else if (selector_avisoracha == "sep") {		
		var data_avisoracha_sep = {
			        title: {
						text: 'SEPTIEMBRE'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [0,0,0,1,1,0,0,1,0,1,4,0,2,0]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_sep));
	} else if (selector_avisoracha == "oct") {		
		var data_avisoracha_oct = {
			        title: {
						text: 'OCTUBRE'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [4,1,0,7,5,2,3,1,2,14,1,2,0,0]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_oct));
	} else if (selector_avisoracha == "nov") {		
		var data_avisoracha_nov = {
			        title: {
						text: 'NOVIEMBRE'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [2,3,4,4,5,10,0,3,3,13,6,6,0,11]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_nov));
	} else if (selector_avisoracha == "dic") {		
		var data_avisoracha_dic = {
			        title: {
						text: 'DICIEMBRE'// Titulo (Opcional)
					},
					series: [{
				                name: 'Número total de días con racha máxima diaria mayor o igual a 43 kt',
								data: [5,6,5,11,8,8,9,2,2,23,8,2,0,14]
				            },					
							],
				};
		$('#container_avisoracha').highcharts($.extend(options_avisoracha, data_avisoracha_dic));
	}
    return(false);
  });
  
  $('.class_seleccion_avisoracha:first ').click();  
  $('.class_seleccion_avisoracha').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_avisoracha').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });
    // PANEL 32
  $('.class_seleccion_tormenta').click(function() {
    var $this = $(this);
    $('.class_seleccion_tormenta').css('background-color','white').css('color','black');
    $this.css('background-color','Blue').css('color','white');
	selector_tormenta = $this.attr('id');
	
	var options_tormenta = {
	                chart: {
						defaultSeriesType: 'column',
						backgroundColor: {
                          linearGradient: [0, 0, 500, 500],
                          stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(240, 240, 255)']
                          ]
                        },
						borderWidth: 2,
                        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
                        plotShadow: true,
                        plotBorderWidth: 1
					},
					// Pongo los datos en el eje de las 'X'
					xAxis: {
						categories: ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE','AÑO'],
						// Pongo el título para el eje de las 'X'
						title: {
							text: 'MESES'
						}
					},
					  subtitle: {
					    text: 'NÚMERO MEDIO DE DÍAS AL MES CON TORMENTA (1988-2017)'
					  },
					  yAxis: {
						title: {
							text: 'Número de días de tormenta'
						},
						tickInterval: 1,
						max: 10,
					  },
					  // Doy formato al la "cajita" que sale al pasar el ratón por encima de la gráfica
					tooltip: {
						enabled: true,
						formatter: function() {
							return '<b>'+ this.series.name +'</b><br/>'+
								this.x +': '+ this.y +' '+this.series.name;
						}
					},
					// Doy opciones a la gráfica
					plotOptions: {
						line: {
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: true
						},
						series: {
                             borderWidth: 0,
                             dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}'
                             }
					    },
				        },
				    };
	if (selector_tormenta == "LEBZ") {		
		var data_tormenta_lebz = {
			        title: {
						text: 'LEBZ'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.1,0.4,0.6,1.7,2.5,1.5,0.7,1,1.7,1.3,0.7,0.6]
				            },
							{
				                name: 'Máximo',
				                data: [2,3,2,5,9,6,4,4,5,4,5,4]
				            },					
							],
				};
		$('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lebz));
	} else if (selector_tormenta == "LEZL") {
	    var data_tormenta_lezl = {
			        title: {
						text: 'LEZL'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.4,0.5,0.7,1.4,1.3,0.4,0.2,0.3,0.9,1.3,0.9,0.7]
				            },
							{
				                name: 'Máximo',
				                data: [3,3,3,4,5,3,2,3,5,4,3,5]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lezl));				
	} else if (selector_tormenta == "LEBA") {
	    var data_tormenta_leba = {
			        title: {
						text: 'LEBA'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.3,0.5,0.9,1.7,2,1,0.3,0.4,1.4,1.4,0.7,0.5]
				            },
							{
				                name: 'Máximo',
				                data: [3,3,4,6,9,7,1,2,5,4,4,5]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_leba));				
	} else if (selector_tormenta == "LEMO") {
	    var data_tormenta_lemo = {
			        title: {
						text: 'LEMO'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.5,0.5,0.7,1.7,1.7,0.4,0.4,0.6,1.4,1.1,1,1]
				            },
							{
				                name: 'Máximo',
				                data: [6,3,3,6,9,2,3,2,6,4,7,8]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lemo));				
	} else if (selector_tormenta == "LEJR") {
	    var data_tormenta_lejr = {
			        title: {
						text: 'LEJR'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [1,0.8,0.9,1.6,0.9,0.4,0.2,0.5,1.1,1.5,1.5,1.4]
				            },
							{
				                name: 'Máximo',
				                data: [5,4,4,6,4,1,1,3,6,5,4,8]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lejr));				
	} else if (selector_tormenta == "LERT") {
	    var data_tormenta_lert = {
			        title: {
						text: 'LERT'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [1.1,1,1.1,1.3,0.7,0.3,0.2,0.3,1,1.4,1.8,2.1]
				            },
							{
				                name: 'Máximo',
				                data: [9,4,6,3,3,2,1,2,7,4,6,9]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lert));				
	} else if (selector_tormenta == "LEMG") {
	    var data_tormenta_lemg = {
			        title: {
						text: 'LEMG'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [1.3,1.3,0.8,1.1,1.1,0.7,0.2,0.6,1.5,1.5,1.4,1.4]
				            },
							{
				                name: 'Máximo',
				                data: [7,4,3,4,5,4,1,3,6,6,4,5]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lemg));				
	} else if (selector_tormenta == "LEGR") {
	    var data_tormenta_legr = {
			        title: {
						text: 'LEGR'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.2,0.3,0.5,0.8,1.6,1.8,0.6,1,1.5,1,0.6,0.2]
				            },
							{
				                name: 'Máximo',
				                data: [2,2,3,3,5,4,3,5,5,5,2,2]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_legr));				
	} else if (selector_tormenta == "LEGA") {
	    var data_tormenta_lega = {
			        title: {
						text: 'LEGA'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.3,0.4,0.6,0.9,1.5,1.8,0.5,1.1,1.8,1,0.9,0.3]
				            },
							{
				                name: 'Máximo',
				                data: [2,2,3,4,4,5,3,5,6,4,3,2]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lega));				
	} else if (selector_tormenta == "LEAM") {
	    var data_tormenta_leam = {
			        title: {
						text: 'LEAM'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.4,0.5,0.3,0.7,0.4,0.7,0.4,0.6,1.1,0.8,0.8,0.5]
				            },
							{
				                name: 'Máximo',
				                data: [2,4,2,4,3,3,2,3,5,4,4,2]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_leam));				
	} else if (selector_tormenta == "LELC") {
	    var data_tormenta_lelc = {
			        title: {
						text: 'LELC'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.7,0.5,0.3,0.8,1.2,0.8,0.5,0.8,2.1,1.2,0.7,0.8]
				            },
							{
				                name: 'Máximo',
				                data: [5,5,2,4,3,4,3,3,6,5,3,5]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_lelc));				
	} else if (selector_tormenta == "LERI") {
	    var data_tormenta_leri = {
			        title: {
						text: 'LERI'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [0.2,0.4,0.5,1.2,1.9,1.4,0.5,1.1,2.5,1.3,0.4,0.3]
				            },
							{
				                name: 'Máximo',
				                data: [1,3,2,3,6,10,2,4,7,4,2,2]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_leri));				
	} else if (selector_tormenta == "GEML") {
	    var data_tormenta_geml = {
			        title: {
						text: 'GEML'// Titulo (Opcional)
					},
					series: [{
				                name: 'Media',
				                data: [1.6,1,1,1,0.8,1.1,0.7,0.8,1.5,1.2,1.2,0.9]
				            },
							{
				                name: 'Máximo',
				                data: [5,5,3,4,5,5,3,3,6,5,5,3]
				            },					
							],
				};
        $('#container_tormentas').highcharts($.extend(options_tormenta, data_tormenta_geml));				
	}  
    return(false);
  });
  
  $('.class_seleccion_tormenta:first ').click();  
  $('.class_seleccion_tormenta').mouseover(function() {
    $(this).css( 'cursor', 'pointer' );
    color = $(this).css('background-color');
    if (color == 'rgb(255, 255, 255)') { $(this).css('background-color','rgb(230, 230, 230)'); };
  });
  $('.class_seleccion_tormenta').mouseout(function() {
    color = $(this).css('background-color');
    if (color == 'rgb(230, 230, 230)') { $(this).css('background-color','rgb(255, 255, 255)'); };
  });


}); // end ready