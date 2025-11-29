const button = document.querySelectorAll('.link');

button.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const target=btn.dataset.url;
        window.location.href=target;
    });
});