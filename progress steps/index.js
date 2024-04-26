
            const prev = document.getElementById('prev');
            const next = document.getElementById('next');
            const circles = document.querySelectorAll('.circle');
            const progress = document.getElementById('progress');


            let currentActive = 0;

            next.addEventListener('click', () => update(++currentActive)); /** '.' adjunta el evento a next */

            prev.addEventListener('click', () => update(--currentActive));
            /*update actualiza el estado */ 



            /*funcion que actualizara el estado*/ 
            function update(index) { /**index es un paramtreo que  representa el valor que se espera que se pase a la funcion  */

            /**currentActive este dentro de un rango valido */
                currentActive = Math.min(Math.max(index, 0), circles.length - 1);
                

                /**circle: representa el circulo actual el cual se este iterando */
                /**idx: ala posicion de el en la matriz de los elememntos (de los circulos) */
                circles.forEach((circle, idx) => {

                    if (idx <= currentActive) {
                        circle.classList.add('active');
                    } else {
                        circle.classList.remove('active');
                    }
                });
                


            /** el ancho del progreso */
                progress.style.width = (currentActive / (circles.length - 1)) * 100 + '%';
                

                
            /**botones deshabilitado  */
                prev.disabled = currentActive === 0;
                next.disabled = currentActive === circles.length - 1;
            }

            /**cuando sew cumplen todas esas funciones se actualiza todo  */
            update(currentActive); /**se pasa como parámetro, se utiliza dentro de la función para determinar el estado actual del progreso  */
