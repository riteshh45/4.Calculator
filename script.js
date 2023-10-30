var num = "";
let buttons = document.querySelectorAll('.grid');

Array.from(buttons).forEach((grid) => {
    grid.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            num = eval(num);
            document.querySelector('input').value = num;
        }
        else if (e.target.innerHTML == 'C') {
            num = ""
            document.querySelector('input').value = num;
        }
        else if (e.target.innerHTML == 'DEL') {
            console.log(num)
            num = num.substring(0, num.length - 1);
            document.querySelector('input').value = num;
        }
        else {
            console.log(e.target)
            num = num + e.target.innerHTML;
            document.querySelector('input').value = num;
        }
    })
})
