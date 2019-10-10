const url = require ('url');

const myUrl = new URL('http://mywebsite.com:9000/hello.html?id=9007status=active');

console.log(myUrl.href);
console.log(myUrl.hostname);
console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);

myUrl.searchParams.append('mmsk', '48484')
console.log(myUrl.searchParams);


myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));


