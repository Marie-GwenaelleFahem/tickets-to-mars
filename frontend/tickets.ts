let form = document.querySelector('form') as HTMLElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log('Hide the money yall')
})