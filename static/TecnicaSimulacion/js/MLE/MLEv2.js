/**
 * Created by Develop on 12/09/2017.
 */

        <!--Script Ejecutar Guia-->

            window.onload = function() {
                $('#preloader').fadeOut('slow');
                $('body').css({'overflow':'visible'});
                $('.tap-target').tapTarget('open');
                $('#modal1').modal();
                $('#modal2').modal();
                $('#modal3').modal();
                $(".button-collapse").sideNav();
                $('.collapsible').collapsible();
                $('#modalInfo').modal();
                $('#modalTutoria').modal();
                $('#modalFAQ').modal();
                $('.carousel.carousel-slider').carousel({fullWidth: true});
                $('ul.tabs').tabs();
                $('.tooltipped').tooltip({delay: 50});
                $('select').material_select();
                $('.dropdown-button').dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrainWidth: false, // Does not change width of dropdown to that of the activator
                    hover: false, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: false, // Displays dropdown below the button
                    alignment: 'left', // Displays dropdown with edge aligned to the left of button
                    stopPropagation: false // Stops event propagation
                });
                        <!--DropDonw para Navegacion-->

                 $('.dropdown-button-nav').dropdown({
                  inDuration: 300,
                  outDuration: 225,
                  constrainWidth: true, // Does not change width of dropdown to that of the activator
                  hover: false, // Activate on hover
                  gutter: 0, // Spacing from edge
                  belowOrigin: true, // Displays dropdown below the button
                  alignment: 'right', // Displays dropdown with edge aligned to the left of button
                  stopPropagation: false // Stops event propagation
                }
              );
              var $toastContent = $('<span><i class="material-icons left">warning</i>Método Version Beta: Pueden presentarse ciertos fallos en la interfaz y varias opciones</span>');
              Materialize.toast($toastContent, 15000);
            };




        <!--Script Listener Metodo MCA-->

            document.getElementById("mca").addEventListener("click", MetodoMCA);
            function MetodoMCA () {
                Metodo = '';
                Metodo +="<div class='row'> \
                            <h5 class='center'>Metodo Congruencial Adictivo</h5>    \
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_1</i>\
                              <input id='MCA_X' name='MCA_X' type='text' class='validate' required>\
                              <label for='icon_prefix'>X</label>\
                            </div>\
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_2</i>\
                              <input id='MCA_M' name='MCA_M' type='number' class='validate'  required>\
                              <label for='icon_telephone'>M</label>\
                            </div>\
                              <div class='input-field col s12 m6' >\
                              <i class='material-icons prefix'>filter_3</i>\
                              <input disabled id='MCA_A' name='MCA_A' type='text' class='validate '  required>\
                              <label for='icon_prefix'> A: Se determina con N Iteracciones</label>\
                            </div>\
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_4</i>\
                              <input id='MCA_C' name='MCA_C' type='number' class='validate'  required>\
                              <label for='icon_telephone'>C</label>\
                            </div>";

                document.getElementById("CajaMetodos").innerHTML=Metodo;
                document.getElementById('formulario').action= "/MLECalcularMCAv2";
            }

        <!--Script Listener Metodo MCMU-->

            document.getElementById("mcmu").addEventListener("click", MetodoMCMU);
            function MetodoMCMU () {
                Metodo = '';
                Metodo +="<div class='row'>\
                            <h5 class='center'>Metodo Congruencial Multiplicativo</h5>    \
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_1</i>\
                              <input id='MCMU_X' name='MCMU_X' type='text' class='validate' required>\
                              <label for='icon_prefix'>X</label>\
                            </div>\
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_2</i>\
                              <input id='MCMU_M' name='MCMU_M' type='number' class='validate'  required>\
                              <label for='icon_telephone'>M</label>\
                            </div>\
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_3</i>\
                              <input id='MCMU_A' name='MCMU_A' type='text' class='validate'  required>\
                              <label for='icon_prefix'>A</label>\
                            </div>\
                            <div class='input-field col s12 m6'>\
                              <i class='material-icons prefix'>filter_4</i>\
                              <input disabled id='MCMU_C' name='MCMU_C' type='number' class='validate' required>\
                              <label for='icon_telephone'>C: Se determina con N Iteracciones\
                              </label>\
                        </div>";
                document.getElementById("CajaMetodos").innerHTML=Metodo;
                document.getElementById('formulario').action= "/MLECalcularMCMUv2";
            }

        <!--Script Listener Metodo Manual-->

            document.getElementById("manual").addEventListener("click", MetodoManual);

            function MetodoManual () {

                var contador = document.getElementById("In_Iteracciones").value;
                document.getElementById("In_Iteracciones").addEventListener("keyup",N_Iteracciones);


                function N_Iteracciones() {

                    var contador = document.getElementById("In_Iteracciones").value;

                    inputs = "<h5 class='center'>Método Manual</h5><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios Para Llegada</span>";

                    inputsall = "";
                    inputsserv="";

                    for (i=0;i<contador;i++) {
                        inputsall += "<div class ='input-field col s12 m6'><input id='Ale_Llegada' type='number' step='0.001' name='Ale_Llegada' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                        inputsserv += "<div class ='input-field col s12 m6'><input id='Ale_Servicio' type='number' step='0.001' name='Ale_Servicio' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                    }
                    inputs += ""+inputsall+"</div><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios Para Servicio</span>"+inputsserv+"</div>";

                    document.getElementById("CajaMetodos").innerHTML=inputs;
                }

                inputs = "<h5 class='center'>Método Manual</h5><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios Para Llegada</span>";

                inputsall = "";
                inputsserv="";

                for (i=0;i<contador;i++) {
                    inputsall += "<div class ='input-field col s12 m6'><input id='Ale_Llegada' type='number' step='0.001' name='Ale_Llegada' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                    inputsserv += "<div class ='input-field col s12 m6'><input id='Ale_Servicio' type='number' step='0.001' name='Ale_Servicio' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                }
                inputs += ""+inputsall+"</div><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios Para Servicio</span>"+inputsserv+"</div>";

                document.getElementById("CajaMetodos").innerHTML=inputs;


                document.getElementById('formulario').action= "/MLECalcularManualv2";
            }


        <!--Validaciones-->
        <!--Landa-->

            document.getElementById("In_Landa").addEventListener("keyup", Valida_Landa_KeyUp);
            document.getElementById("In_Landa").addEventListener("change", Valida_Landa_change);
            function Valida_Landa() {
              if ($('#In_Landa').val().length == 0) {

                    document.getElementById('Tab_Miu').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese el valor para Landa</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
              else{
                  document.getElementById('Tab_Miu').className = "tab col s3"
              }
            }
            function Valida_Landa_KeyUp() {
                  if ($('#In_Landa').val().length == 0) {
                        document.getElementById('Tab_Miu').className = "tab col s3 disabled";
                        return false;
                  }
                  else{
                      document.getElementById('Tab_Miu').className = "tab col s3";
                  }
            }
            function Valida_Landa_change() {
              if ($('#In_Landa').val().length == 0) {

                    document.getElementById('Tab_Miu').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese el valor para Landa</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
              else{
                  document.getElementById('Tab_Miu').className = "tab col s3";
                  var $toastContent = $('<span><i class="material-icons">sentiment_very_satisfied</i>Puedes ingresar Miu</span>');
                  Materialize.toast($toastContent, 5000);
              }
        }


        <!--Miu-->

            document.getElementById("In_Miu").addEventListener("keyup", Valida_Miu_KeyUp);
            document.getElementById("In_Miu").addEventListener("change", Valida_Miu_change);

            function Valida_Miu() {

                if ($('#In_Miu').val().length == 0) {
                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese el valor para Miu</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;


                       }
            if (parseFloat($('#In_Miu').val()) < parseFloat($('#In_Landa').val())) {
                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Miu debe ser mayor que Landa</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;

                        }
                    else{
                      document.getElementById('Tab_Itera').className = "tab col s3"
                        }
              }
            function Valida_Miu_KeyUp() {


                if ($('#In_Miu').val().length == 0) {

                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    return false;


                }
                if (parseFloat($('#In_Miu').val()) < parseFloat($('#In_Landa').val())) {
                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    return false;

                }
              else
                {
                  document.getElementById('Tab_Itera').className = "tab col s3";
                }

        }
            function Valida_Miu_change() {



              if ($('#In_Miu').val().length == 0) {

                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese el valor para Miu</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;

              }

              if (parseFloat($('#In_Miu').val()) < parseFloat($('#In_Landa').val())) {
                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Miu debe ser mayor que Landa</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;

                 }
              else
                    {
                  document.getElementById('Tab_Itera').className = "tab col s3";
                  var $toastContent = $('<span><i class="material-icons">sentiment_very_satisfied</i>Puedes ingresar las Iteracciones</span>');
                  Materialize.toast($toastContent, 5000);
                    }

        }


        <!--Itera-->

           document.getElementById("In_Iteracciones").addEventListener("keyup", Valida_Itera_KeyUp);
           document.getElementById("In_Iteracciones").addEventListener("change", Valida_Itera_change);
            function Valida_Itera() {
              if ($('#In_Iteracciones').val().length == 0) {

                    document.getElementById('Tab_ValAle').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese el valor para las Iteracciones</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
              else{
                  document.getElementById('Tab_ValAle').className = "tab col s3"
              }
              }

            function Valida_Itera_KeyUp() {

              if ($('#In_Iteracciones').val().length == 0) {

                    document.getElementById('Tab_ValAle').className = "tab col s3 disabled";
                    return false;
              }
              else{
                  document.getElementById('Tab_ValAle').className = "tab col s3";
              }

        }

         function Valida_Itera_change() {

              if ($('#In_Iteracciones').val().length == 0) {

                    document.getElementById('Tab_ValAle').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese el valor para las Iteracciones</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
              else{
                  document.getElementById('Tab_ValAle').className = "tab col s3";
                  var $toastContent = $('<span><i class="material-icons">sentiment_very_satisfied</i>Puedes Generar/Ingresar las Variables Aleatorias</span>');
                  Materialize.toast($toastContent, 5000);
              }

        }



            //FUNCION DE EXPORTADOR

            function doExport(selector, params) {
              var options = {
                //ignoreRow: [1,11,12,-2],
                //ignoreColumn: [0,-1],
                tableName: 'Metodo_Cuadrado_Medio',
                worksheetName: 'Metodo_Cuadrado_Medio_Datos'
              };

              $.extend(true, options, params);

              $(selector).tableExport(options);
            }

            function DoOnCellHtmlData(cell, row, col, data) {
              var result = "";
              if (data != "") {
                var html = $.parseHTML( data )

                $.each( html, function() {
                  if ( typeof $(this).html() === 'undefined' )
                    result += $(this).text();
                  else if ( $(this).is("input") )
                    result += $('#'+$(this).attr('id')).val();
                  else if ( ! $(this).hasClass('no_export') )
                    result += $(this).html();
                });
              }
              return result;
            }

            // FIN FUNCION EXPORTADOR


        <!--Activar altura de la presentacion-->

            function carusel (){

                var h = document.getElementById("h");
                h.setAttribute("style","height: 350px;");
            }

