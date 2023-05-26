let content = document.querySelector('.quote');
let btn = document.querySelector('button');
let author = document.querySelector('.author');
btn.addEventListener('click', () => {
    btn.innerHTML = "Loading Quote";
    btn.classList.add('load');
    fetch('https://api.quotable.io/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            btn.classList.remove('load')
            btn.innerHTML = "Add New Quote";
            content.innerHTML = `${data.content}`;
            author.innerHTML = `By ${data.author}`;
        })
        .catch((reject) => {
            console.log(reject)
        })
});
let volume = document.querySelector('.volume');
volume.addEventListener('click',()=>{
    let voice = new SpeechSynthesisUtterance(`${content.innerHTML} ${author.innerHTML}`);
    speechSynthesis.speak(voice);
});
let clipboard = document.querySelector('.clipboard');
clipboard.addEventListener('click', ()=>{
    navigator.clipboard.writeText(`${content.innerHTML} ${author.innerHTML}`);
});
let twitter = document.querySelector('.twitter');
twitter.addEventListener('click',()=>{
    let url = `https://twitter.com/intent/tweet?url=${content.innerHTML} ${author.innerHTML}`;
    window.open(url,'_blank');
})