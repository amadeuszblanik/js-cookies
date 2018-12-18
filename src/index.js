class MeCookies {
    constructor(devmode = false){
        this.devmode = devmode;
    };

    set(name, value, time, path = "/"){
        let date = new Date();
        let now  = Number.parseInt(new Date().getTime())
      	if( time.indexOf("h") == 1 ){
        	date = Number.parseInt(time) * 3600000 + now
        }else if( time.indexOf("d") == 1 ){
        	date = Number.parseInt(time) * 86400000 + now
        }else if( time.indexOf("m") == 1 ){
          	date = now + Number.parseInt(time) * 86400000 * 30
        }else if( time.indexOf("y") == 1 ){
          	date = now + Number.parseInt(time) * 86400000 * 365
        }
        date = new Date(date)
        if( this.devmode == true ){
            console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Value: " + value + "\n🍪 Date:" + date + "\n🍪 Path:" + path)
        }
    	document.cookie = name + "=" + value + ";expires=" + date + ";path=" + path 
    }

    get(name){
        name = name + "="
        let decodedCookie = decodeURIComponent(document.cookie)
        let decodedCookieArray = decodedCookie.split(';')
        for( let index in decodedCookieArray ){
            let tempThis = decodedCookieArray[index]
            while( tempThis.charAt(0) == ' ' ){
                tempThis = tempThis.substring(1)
            }
            if( tempThis.indexOf(name) > -1 ){
                if( this.devmode == true ){
                    console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Value: " + tempThis.substring(name.length, tempThis.length))
                }
                return tempThis.substring(name.length, tempThis.length)
            }
        }
        if( this.devmode == true ){
            console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Not found")
        }
        return null
    }
}