# meCookies ES6
**MIT** LICENSED
By [Amadeusz Blanik (Blanik.me)](https://blanik.me)

The only one JS-Cookie that use JIRA time format!

## Download
----
Download one of following package:
* [Build (Transpiled)](https://raw.githubusercontent.com/amadeuszblanik/js-cookies/master/dist/mecookies.js) 
* [Source ES6](https://raw.githubusercontent.com/amadeuszblanik/js-cookies/master/src/index.js)

## Browser-Supports
----
| Browser        | Build          | Source        |
| -------------: |:---------------| --------------|
| Safaro         | Supported      | Supported     |
| Chrome         | Supported      | Supported     |
| Firefox        | Supported      | Supported     |
| MSEdge         | ??             | ??            |
| IE-11          | ??             | Not supported |


#### Devmode
~~~~
let meCookie = new MeCookies(true)
~~~~

### Options
----

#### Set
~~~~
meCookie.set(
    name, 
    value, 
    time, ~ eg. "1Y 2M 7D 8h" or new Date("27 june 2019")
    path ~ default path = "/"
   )
~~~~

##### Cheatsheet (time format)
~~~~
Y*- years
M*- months
D*- days
h - hours
m - minutes
s - seconds

* - uppercase
~~~~

#### Get
~~~~
meCookie.get(name)
~~~~