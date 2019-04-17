class MeCookies {
	constructor(devmode = false) {
		this.devmode = devmode;
	}

	set(name, value, time, path = "/") {
		let date = new Date();

		if (!(time instanceof Date)) {
			time = time.split(" ");
			for (let currTime of time) {
				if (currTime.includes("Y")) {
					date.setFullYear(date.getFullYear() + parseInt(currTime));
				} else if (currTime.includes("M")) {
					date.setMonth(date.getMonth() + parseInt(currTime));
				} else if (currTime.includes("D")) {
					date.setHours(date.getHours() + parseInt(currTime * 24));
				} else if (currTime.includes("h")) {
					date.setHours(date.getHours() + parseInt(currTime));
				} else if (currTime.includes("m")) {
					date.setMinutes(date.getMinutes() + parseInt(currTime));
				} else if (currTime.includes("s")) {
					date.setSeconds(date.getSeconds() + parseInt(currTime));
				}
			}
		} else {
			date = time;
		}

		if (this.devmode == true) {
			console.log(
				"🍪 meCookies\n🍪 Cookie name: " +
					name +
					"\n🍪 Value: " +
					value +
					"\n🍪 Date:" +
					date +
					"\n🍪 Path:" +
					path
			);
		}
		document.cookie = name + "=" + value + ";expires=" + date + ";path=" + path;
	}

	get(name) {
		name = name + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let decodedCookieArray = decodedCookie.split(";");
		for (let index in decodedCookieArray) {
			let tempThis = decodedCookieArray[index];
			while (tempThis.charAt(0) == " ") {
				tempThis = tempThis.substring(1);
			}
			if (tempThis.indexOf(name) > -1) {
				if (this.devmode == true) {
					console.log(
						"🍪 meCookies\n🍪 Cookie name: " +
							name +
							"\n🍪 Value: " +
							tempThis.substring(name.length, tempThis.length)
					);
				}
				return tempThis.substring(name.length, tempThis.length);
			}
		}
		if (this.devmode == true) {
			console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Not found");
		}
		return null;
	}
}
