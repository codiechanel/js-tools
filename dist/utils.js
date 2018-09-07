"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    constructor() {
        console.log('constructor util');
    }
    static sayGoodbye() {
        console.log('goodbye');
    }
    static extractHostname(url) {
        var hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname
        if (url.indexOf("//") > -1) {
            hostname = url.split("/")[2];
        }
        else {
            hostname = url.split("/")[0];
        }
        //find & remove port number
        hostname = hostname.split(":")[0];
        //find & remove "?"
        hostname = hostname.split("?")[0];
        return hostname;
    }
}
exports.Util = Util;
// export Util
// export const util = new Util()
// export { util }
