# meCookies
By [Amadeusz Blanik](https://blanik.me)

### How to use
----
Download one of following package:
* [Build (with Babel)](https://raw.githubusercontent.com/amadeuszblanik/js-cookies/master/build/mecookies.js) 
* [ES6 (IE11 not supported)](https://raw.githubusercontent.com/amadeuszblanik/js-cookies/master/src/index.js)

Then…
~~~~
<script src="mecookies.js"></script> 
<script> 
let meCookie = new MeCookies()
meCookie.set("hello", "world", "7d")
</script>
~~~~

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
    time, ~ eg. "7d"
    path ~ default path = "/"
   )
~~~~

##### Time
~~~~
y - years
m - months
d - days
h - hours
~~~~

#### Get
~~~~
meCookie.get(name)
~~~~