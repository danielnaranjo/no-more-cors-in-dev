
# NO MORE CORS IN DEV

[![CircleCI](https://circleci.com/gh/danielnaranjo/no-more-cors-in-dev/tree/master.svg?style=svg)](https://circleci.com/gh/danielnaranjo/no-more-cors-in-dev/tree/master)

### How to use

Download or [clone the repo](https://github.com/danielnaranjo/no-more-cors-in-dev):

```bash
git clone https://github.com/danielnaranjo/no-more-cors-in-dev
```

Install it and run:

```bash
cd no-more-cors-in-dev  
npm i 
npm run dev
```

### Under the hood

[micro](https://github.com/zeit/micro)
[micro-fork](https://github.com/amio/micro-fork)
[micro-cors](https://github.com/possibilities/micro-cors)
[node-fetch](https://www.npmjs.com/package/node-fetch)

### Usage

```
GET http://127.0.0.1/api?url=https://example.com/app/v1/information
```

```
POST http://127.0.0.1/api HTTP/1.1
Content-Type: application/json

{
    "url": "https://example.com/app/v1/doLogin",
    "data" : {
        "email": "demo@gmail.com",
        "password" : "123456"
    }
}
```

``` 
OPTIONS http://127.0.0.1/api HTTP/1.1
``` 


```
PUT
PATCH
DELETE
```


Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

### The idea behind the example

Every day I work with Angular or React in Frontend and I have to deal with CORS policy, configuration, etc. I tired to do it, So, this service fix all this crap, this script make a request to this service passing to data... No more configuration, testing, etc. 

Easy plug-and-play!

### Feel free to say Hello!
Twitter: [@naranjodaniel](https://twitter.com/naranjodaniel)

### Licence
MIT
