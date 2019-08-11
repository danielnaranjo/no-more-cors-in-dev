
# NO MORE CORS IN DEV

## How to use

Download or [clone the repo](https://github.com/danielnaranjo/no-more-cors-in-dev):

```bash
curl http://fuckcors.now.sh/endpoint={URL}
```

## Usage

GET
```
GET http://127.0.0.1/api?url=https://example.com/app/v1/information
```

POST
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

Install it and run:

```bash
npm i
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Should I explain my motivation? I work with Angular or React I have to deal with CORS policy, configuration, etc. I tried to do it, So, this service fix all this crap.. Made a request to this service passing to data... No more configuration, testing, etc.

## Feel free to say Hello!
Twitter: [@naranjodaniel](https://twitter.com/naranjodaniel)

## Licence
MIT
