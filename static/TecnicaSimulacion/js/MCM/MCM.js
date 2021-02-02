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
                });

              var $toastContent = $('<span><i class="material-icons left">warning</i>Método Version Beta: Pueden presentarse ciertos fallos en la interfaz y varias opciones</span>');
              Materialize.toast($toastContent, 15000);

               // Evento on load para cargar grafico
                var container = document.querySelector('.container-g');
                [
                    // Estilo de grafico
                    'rectRot'

                ].forEach(function(pointStyle) {
                    var div = document.createElement('div');
                    div.classList.add('chart-container');

                    var canvas = document.createElement('canvas');
                    div.appendChild(canvas);
                    container.appendChild(div);

                    var ctx = canvas.getContext('2d');
                    var config = createConfig(pointStyle);
                    new Chart(ctx, config);
                });


            };


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
                var html = $.parseHTML( data );

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