document.addEventListener('DOMContentLoaded', () =>{

    const div_color = document.getElementById('container_color');
    const button = document.getElementById('button');

    function random_color() {
        const hexa = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += hexa[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    function change_color(){
        let color = random_color();
        div_color.style.backgroundColor = color;
        button.style.backgroundColor = color;
    }

    button.addEventListener('click', change_color);

});