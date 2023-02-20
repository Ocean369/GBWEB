console.log('script c.js run');
let c = 0;

loadScript('js/d.js', () => {
    console.log('я знаю D =>', d);
    c = d * 5;
    console.log('теперь я знаю C=(d*5) =>', c);
})