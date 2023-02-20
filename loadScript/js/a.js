console.log('script a.js run');
const a = 5;
console.log('я знаю А =>', a);


loadScript(['js/b.js', 'js/c.js'], () => {

    console.log('я знаю B=>', b);
    console.log('я знаю C=>', c);
    console.log('sum A+B+C = ', a + b + c);
})

