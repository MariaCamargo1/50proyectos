/*         const insert = document.getElementById('insert')

        window.addEventListener('keydown', (event) => {
        insert.innerHTML = `
        <div class="key">
        ${event.key === ' ' ? 'Space' : event.key} 
        <small>event.key</small>
        </div>

        <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
        </div>

        <div class="key">
        ${event.code}
        <small>event.code</small>
        </div>
        `
        }) */

        const insert = document.getElementById('insert')
        
        window.addEventListener('keydown', (event) => {
            insert.innerHTML = '';

            const key = event.key === ' ' ? 'Space' : event.key;
            /**funcion ternaria */
            function createDiv(info, tag) {
                const div = document.createElement('div');
                div.className = 'key';
                div.innerHTML = `${info} <small>${tag}</small>`;
                
                insert.appendChild(div);
            }

            createDiv(key, 'event.key');
            createDiv(event.keyCode, 'event.keyCode');
            createDiv(event.code, 'event.code');
        })
        
        