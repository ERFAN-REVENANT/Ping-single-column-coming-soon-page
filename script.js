document.querySelector('.send').addEventListener('click', function(event){
    event.preventDefault();

    const input = document.querySelector('.email');
    const button = document.querySelector('notify');
    const error = document.querySelector('.error');
    const email = input.value;


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        input.style.border = '1px solid red'
        error.style.display = 'block';
    }
    else{
        input.style.border = '1px solid rgba(0, 0, 0, 0.214)'
        error.style.display = 'none';
    }

    
})