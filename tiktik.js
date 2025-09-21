// const sec=document.querySelector('.sec-container');
// const min=document.querySelector('.min-container');
// const hour = document.querySelector('.hours-container');
function time() {
    setInterval(() => {
        let date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        console.log(seconds, minutes, hours);
        document.querySelector('.sec-container').style.top = `-${seconds * 50}px`;
        document.querySelector('.min-container').style.top = `-${minutes * 50}px`;
        document.querySelector('.hours-container').style.top = `-${hours * 50}px`;
    }, 1000);
}
time()