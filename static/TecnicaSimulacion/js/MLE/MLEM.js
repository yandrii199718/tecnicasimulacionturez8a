/**
 * Created by Develop on 12/09/2017.
 */

            window.onload = function() {
                $('#preloader').fadeOut('slow');
                $('body').css({'overflow':'visible'});
                $('.tap-target').tapTarget('open');
                $('#modal1').modal();
                $('#modal2').modal();
                $('#modal3').modal();
                $('.collapsible').collapsible();
                $('#modalInfo').modal();
                $('#modalTutoria').modal();
                $('#modalFAQ').modal();
                $('.carousel.carousel-slider').carousel({fullWidth: true});
                $('ul.tabs').tabs();
                $(".button-collapse").sideNav();
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
                     $('.dropdown-button-nav').dropdown({
                      inDuration: 300,
                      outDuration: 225,
                      constrainWidth: true, // Does not change width of dropdown to that of the activator
                      hover: false, // Activate on hover
                      gutter: 0, // Spacing from edge
                      belowOrigin: true, // Displays dropdown below the button
                      alignment: 'right', // Displays dropdown with edge aligned to the left of button
                      stopPropagation: false // Stops event propagation
                    });
                    var $toastContent = $('<span><i class="material-icons left">warning</i>Método Version Beta: Pueden presentarse ciertos fallos en la interfaz y varias opciones</span>');
                    Materialize.toast($toastContent, 15000);
            };


        <!--Evento Listener Para Pronostico-->

            document.getElementById("probmanual").addEventListener("click", OnPronostico);
            function OnPronostico () {

                PronD = '';
                PronR = '';
                PronD +="<div id='CajaPronosticoDemanda'></div>";
                PronR +="<div id='CajaPronosticoRetraso'></div>";

                document.getElementById("OnPronosticoD").innerHTML=PronD;
                document.getElementById("OnPronosticoR").innerHTML=PronR;

                //Cambiamos IDS para calculos
                document.getElementById("mca").removeEventListener("click", MetodoMCA);
                document.getElementById("mca").id='mcap';
                document.getElementById("mcap").addEventListener("click", MetodoMCAP);
                    function MetodoMCAP () {
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
                        document.getElementById('formulario').action= "/MLEMCalcularMCAPronostico";
                    }

                document.getElementById("mcmu").removeEventListener("click", MetodoMCMU);
                document.getElementById("mcmu").id = "mcmup";
                document.getElementById("mcmup").addEventListener("click", MetodoMCMUP);
                    function MetodoMCMUP () {
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
                    document.getElementById('formulario').action= "/MLEMCalcularMCMUPronostico";
                }

                document.getElementById("manual").removeEventListener("click", MetodoManual);
                document.getElementById("manual").id = "manualp";
                document.getElementById("manualp").addEventListener("click", MetodoManualP);

                function MetodoManualP () {

                    var contador = document.getElementById("Iteracciones").value;
                    document.getElementById("Iteracciones").addEventListener("keyup",N_Iteracciones);


                    function N_Iteracciones() {

                        var contador = document.getElementById("Iteracciones").value;

                        inputs = "<h5 class='center'>Método Manual</h5><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para LLegada</span>";

                        inputsall = "";
                        inputsserv="";

                        for (i=0;i<contador;i++) {
                            inputsall += "<div class ='input-field col s12 m6'><input id='Ale_Demanda' type='number' step='0.001' name='Ale_Demanda' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                            inputsserv += "<div class ='input-field col s12 m6'><input id='Ale_Retraso' type='number' step='0.001' name='Ale_Retraso' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                        }
                        inputs += ""+inputsall+"</div><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para Servicio</span>"+inputsserv+"</div>";

                        document.getElementById("CajaMetodos").innerHTML=inputs;
                    }

                    inputs = "<h5 class='center'>Método Manual</h5><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para LLegada</span>";

                    inputsall = "";
                    inputsserv="";

                    for (i=0;i<contador;i++) {
                        inputsall += "<div class ='input-field col s12 m6'><input id='Ale_Demanda' type='number' step='0.001' name='Ale_Demanda' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                        inputsserv += "<div class ='input-field col s12 m6'><input id='Ale_Retraso' type='number' step='0.001' name='Ale_Retraso' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                    }
                    inputs += ""+inputsall+"</div><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para Servicio</span>"+inputsserv+"</div>";

                    document.getElementById("CajaMetodos").innerHTML=inputs;


                    document.getElementById('formulario').action= "/MLEMCalcularManualPronostico";
                }

                document.getElementById('formulario').action= "/MLEMCalcularMCAPronostico";
                    Metodo = '';
                        Metodo += "<div class='row'> \
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
                document.getElementById('formulario').action= "/MLEMCalcularMCAPronostico";
            }


        <!--Script Listener Regresar Normalidad-->

            document.getElementById("probauto").addEventListener("click", ModoAutoProbabilidad);

            function ModoAutoProbabilidad () {

                document.getElementById("CajaPronosticoDemanda").innerHTML="";
                document.getElementById("CajaPronosticoRetraso").innerHTML="";

                //Regresamos al modo normal
                //Cambiamos IDS para calculos
                document.getElementById("mcap").removeEventListener("click", MetodoMCA);
                document.getElementById("mcap").id='mca';
                document.getElementById("mca").addEventListener("click", MetodoMCA);


                document.getElementById("mcmup").removeEventListener("click", MetodoMCMU);
                document.getElementById("mcmup").id = "mcmu";
                document.getElementById("mcmu").addEventListener("click", MetodoMCMU);


                document.getElementById("manualp").removeEventListener("click", MetodoManual);
                document.getElementById("manualp").id = "manual";
                document.getElementById("manual").addEventListener("click", MetodoManual);

                document.getElementById('formulario').action= "/MLEMCalcularMCA";
                        Metodo = '';
                        Metodo += "<div class='row'> \
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
                document.getElementById('formulario').action= "/MLEMCalcularMCA";


            }


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
                document.getElementById('formulario').action= "/MLEMCalcularMCA";
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
                document.getElementById('formulario').action= "/MLEMCalcularMCMU";
            }


        <!--Script Listener Metodo Manual-->

            document.getElementById("manual").addEventListener("click", MetodoManual);

            function MetodoManual () {

                var contador = document.getElementById("Iteracciones").value;
                document.getElementById("Iteracciones").addEventListener("keyup",N_Iteracciones);


                function N_Iteracciones() {

                    var contador = document.getElementById("Iteracciones").value;

                    inputs = "<h5 class='center'>Método Manual</h5><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para LLegada</span>";

                    inputsall = "";
                    inputsserv="";

                    for (i=0;i<contador;i++) {
                        inputsall += "<div class ='input-field col s12 m6'><input id='Ale_Demanda' type='number' step='0.001' name='Ale_Demanda' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                        inputsserv += "<div class ='input-field col s12 m6'><input id='Ale_Retraso' type='number' step='0.001' name='Ale_Retraso' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                    }
                    inputs += ""+inputsall+"</div><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para Servicio</span>"+inputsserv+"</div>";

                    document.getElementById("CajaMetodos").innerHTML=inputs;
                }

                inputs = "<h5 class='center'>Método Manual</h5><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para LLegada</span>";

                inputsall = "";
                inputsserv="";

                for (i=0;i<contador;i++) {
                    inputsall += "<div class ='input-field col s12 m6'><input id='Ale_Demanda' type='number' step='0.001' name='Ale_Demanda' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                    inputsserv += "<div class ='input-field col s12 m6'><input id='Ale_Retraso' type='number' step='0.001' name='Ale_Retraso' class='validate' required> <label for ='icon_prefix'>Dato</labell></div>";
                }
                inputs += ""+inputsall+"</div><div class='col s12 m6'><span class='col m12 s6 center'>Aleatorios para Servicio</span>"+inputsserv+"</div>";

                document.getElementById("CajaMetodos").innerHTML=inputs;


                document.getElementById('formulario').action= "/MLEMCalcularManual";
            }


        <!--Script Listener Demanda-->

            document.getElementById("In_Demanda").addEventListener("keyup", InputsForDemanda_c);

            function InputsForDemanda_c () {

                var contador = document.getElementById("In_Demanda").value;

                inputs_demanda = "<div class='col s12 m12'><h6 class='center red-text'>Ingrese Valores de La Demanda</h6>";

                inputd = "";

                for (i=0;i<contador;i++) {
                    inputd += "<div class ='input-field col s12 m6'><input id='In_L_Demanda' onkeyup='Validar_Key();' type='number' step='0.001' name='In_L_Demanda' class='validate In_L_Demanda' required> <label for ='icon_prefix'>Demanda"+(i+1)+"</labell></div>";
                }

                inputs_demanda += ""+inputd+"</div>";

                document.getElementById("CajaInputsDemanda").innerHTML=inputs_demanda;
            }


        <!--Script Listener Retraso-->

            document.getElementById("In_Retraso").addEventListener("keyup", InputsForDemanda);

            function InputsForDemanda () {

                var contador = document.getElementById("In_Retraso").value;

                inputs_retraso = "<div class='col s12 m12'><h6 class='center red-text'>Ingrese Valores de Retrasos</h6>";

                inputd = "";

                for (i=0;i<contador;i++) {
                    inputd += "<div class ='input-field col s12 m6'><input id='In_L_Retraso' type='number' step='0.001' onkeyup='Validar_Key_Retraso();' name='In_L_Retraso' class='validate' required> <label for ='icon_prefix'>Retraso"+(i+1)+"</labell></div>";
                }

                inputs_retraso += ""+inputd+"</div>";

                document.getElementById("CajaInputsRetraso").innerHTML=inputs_retraso;

            }


        <!--Script Listener Demanda/Pronostico-->

            document.getElementById("probmanual").addEventListener("click", InputsForDemandaPronostico);
            document.getElementById("In_Demanda").addEventListener("keyup", InputsForDemandaPronostico);

            function InputsForDemandaPronostico () {

                var contador = document.getElementById("In_Demanda").value;

                inputs_p_demanda = "<div class='col s12 m12'><h6 class='center red-text'>Ingrese Valores de Pronostico Para Demanda</h6>";

                inputpd = "";

                for (i=0;i<contador;i++) {
                    inputpd += "<div class ='input-field col s12 m6'><input id='In_L_P_Demanda' type='number' step='0.001' name='In_L_P_Demanda' class='validate' required> <label for ='icon_prefix'>PronosticoDemanda"+(i+1)+"</labell></div>";
                }

                inputs_p_demanda += ""+inputpd+"</div>";

                document.getElementById("CajaPronosticoDemanda").innerHTML=inputs_p_demanda;

            }


        <!--Script Listener Demanda/Retraso-->

            document.getElementById("probmanual").addEventListener("click", InputsForRetrasoPronostico);
            document.getElementById("In_Retraso").addEventListener("keyup", InputsForRetrasoPronostico);

            function InputsForRetrasoPronostico () {


                var contador = document.getElementById("In_Retraso").value;

                inputs_p_retraso = "<div class='col s12 m12'><h6 class='center red-text'>Ingrese Valores de Pronostico Para Retraso</h6>";

                inputpr = "";

                for (i=0;i<contador;i++) {
                    inputpr += "<div class ='input-field col s12 m6'><input id='In_L_P_Retraso' type='number' step='0.001' name='In_L_P_Retraso' class='validate' required> <label for ='icon_prefix'>PronosticoRetraso"+(i+1)+"</labell></div>";
                }

                inputs_p_retraso += ""+inputpr+"</div>";

                document.getElementById("CajaPronosticoRetraso").innerHTML=inputs_p_retraso;

            }




        <!--Validaciones-->
        <!--Demanda-->

           document.getElementById("In_Demanda").addEventListener("keyup", Validar_Demanda_KeyUp);
           document.getElementById("In_Demanda").addEventListener("change", Validar_Demanda_change);


           function Validar_Key (){
            document.addEventListener("keyup", function(){
                if ($('#In_Demanda').val().length == 0) {
                    document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                    return false;
              }
             else{
                  document.getElementById('Tab_Retraso').className = "tab col s3";
                 }

            var AnswerInput = document.getElementsByName('In_L_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                          }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                      }
                    }
                });
           }

            function Validar_Demanda() {
              if ($('#In_Demanda').val().length == 0) {

                    document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese valor de la Demanda</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }

              else{
                  document.getElementById('Tab_Retraso').className = "tab col s3";
              }

            var AnswerInput = document.getElementsByName('In_L_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia de la Demanda</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                          }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia de Probabilidad</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                      }
                    }

            }

            function Validar_Demanda_KeyUp() {
              if ($('#In_Demanda').val().length == 0) {
                    document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                    return false;
              }
             else{
                  document.getElementById('Tab_Retraso').className = "tab col s3";
              }

            var AnswerInput = document.getElementsByName('In_L_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                      }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                      }
                    }

            }

            function Validar_Demanda_change() {
              if ($('#In_Demanda').val().length == 0) {

                    document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese valor de la Demanda</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
            var AnswerInput = document.getElementsByName('In_L_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia de la Demanda</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                      }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Demanda');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Retraso').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia de Probabilidad</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Retraso').className = "tab col s3";
                      }
                    }

            }



        <!--Retraso-->

           document.getElementById("In_Retraso").addEventListener("keyup", Validar_Retraso_KeyUp);
           document.getElementById("In_Retraso").addEventListener("change", Validar_Retraso_change);

           function Validar_Key_Retraso (){
            document.addEventListener("keyup", function(){
                if ($('#In_Retraso').val().length == 0) {
                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    return false;
              }
             else{
                  document.getElementById('Tab_Itera').className = "tab col s3";
              }

            var AnswerInput = document.getElementsByName('In_L_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";
                      }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";
                      }
                    }
                });
           }

            function Validar_Retraso() {
              if ($('#In_Retraso').val().length == 0) {

                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese valor del Retraso</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }

              else{
                  document.getElementById('Tab_Itera').className = "tab col s3";
              }

            var AnswerInput = document.getElementsByName('In_L_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia del Retraso</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";

                      }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia de Retraso Probabilidad</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";

                      }
                    }

            }

            function Validar_Retraso_KeyUp() {
              if ($('#In_Retraso').val().length == 0) {
                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    return false;
              }
             else{
                  document.getElementById('Tab_Itera').className = "tab col s3";
              }

            var AnswerInput = document.getElementsByName('In_L_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";
                      }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";
                      }
                    }

            }

            function Validar_Retraso_change() {
              if ($('#In_Retraso').val().length == 0) {

                    document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese valor del Retraso</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
            var AnswerInput = document.getElementsByName('In_L_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia del Retraso</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";

                      }

                    }
            var AnswerInput1 = document.getElementsByName('In_L_P_Retraso');
                for (i=0; i<AnswerInput.length; i++)
                    {
                     if (AnswerInput1[i].value == "")
                        {
                         document.getElementById('Tab_Itera').className = "tab col s3 disabled";
                         var $toastContent = $('<span>Ingrese toda la Secuencia de Retraso Probabilidad</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                         Materialize.toast($toastContent, 10000);
                         return false;
                        }

                      else{
                          document.getElementById('Tab_Itera').className = "tab col s3";

                      }
                    }

            }



        <!--Iteracciones-->

           document.getElementById("Iteracciones").addEventListener("keyup", Validar_Iteracciones_KeyUp);
           document.getElementById("Iteracciones").addEventListener("change", Validar_Iteracciones_change);


            function Validar_Iteracciones() {
              if ($('#Iteracciones').val().length == 0) {

                    document.getElementById('Tab_ValAle').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese valor de las Iteracciones</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }

              else{
                  document.getElementById('Tab_ValAle').className = "tab col s3";
                  var $toastContent = $('<span><i class="material-icons">sentiment_very_satisfied</i>Ya puedes Ingresar/Generar Val. Aletorias</span>');
                  Materialize.toast($toastContent, 3500);
              }


            }

            function Validar_Iteracciones_KeyUp() {
              if ($('#Iteracciones').val().length == 0) {
                    document.getElementById('Tab_ValAle').className = "tab col s3 disabled";
                    return false;
              }
             else{
                  document.getElementById('Tab_ValAle').className = "tab col s3";

              }


            }

            function Validar_Iteracciones_change() {
              if ($('#Iteracciones').val().length == 0) {

                    document.getElementById('Tab_ValAle').className = "tab col s3 disabled";
                    var $toastContent = $('<span>Ingrese valor de las Iteracciones</span>').add($('<button class="btn-flat toast-action" onclick="Materialize.Toast.removeAll();">Ok</button>'));
                    Materialize.toast($toastContent, 10000);
                    return false;
              }
              else{
                  document.getElementById('Tab_ValAle').className = "tab col s3";
                  var $toastContent = $('<span><i class="material-icons">sentiment_very_satisfied</i>Ya puedes Ingresar/Generar Val. Aletorias</span>');
                  Materialize.toast($toastContent, 3500);
              }

            }


            // Exportador
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


            function carusel (){

                var h = document.getElementById("h");
                h.setAttribute("style","height: 350px;");
            }