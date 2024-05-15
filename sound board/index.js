// const sounds = ['west coast', 'born to die', 'dream', 'salvatore', 'summertime', 'art deco']

// sounds.forEach(sound => {
//     const btn = document.createElement('button')
//     btn.classList.add('btn')

//     btn.innerText = sound

//     btn.addEventListener('click', () => {
//         stopSongs()

//         document.getElementById(sound).play()
//     })

//     document.getElementById('buttons').appendChild(btn)
// })

// function stopSongs() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0
//     })
// }

        const sounds = ['west coast', 'born to die', 'dream', 'salvatore', 'summertime', 'art deco'];

        sounds.forEach(sound => {
            const btn = document.createElement('button')
            btn.classList.add('btn');

            btn.innerText = sound;

            btn.addEventListener('click', () => {

                sounds.forEach(sound =>{
                    const song = document.getElementById(sound);

                    song.pause();
                    song.currentTime = 0;
                });

                document.getElementById(sound).play();
            });

            document.getElementById('buttons').appendChild(btn);

        });
