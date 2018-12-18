# meCookies
By [Amadeusz Blanik](https://blanik.me)

The only one pure JavaScript Cookies which use same time format as Jira!

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
    time, ~ eg. "1y 2m 7d 8h"
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