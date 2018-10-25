"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    constructor() {
        console.log('constructor util');
    }
    static sayGoodbye() {
        console.log('success is the best');
    }
    /**
     * Escaping user input that is to be treated as a literal string within a regular expression
     * —that would otherwise be mistaken for a special character—can be accomplished by
     * simple replacement:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
     * @param string
     */
    static escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // $& means the whole matched string
    }
    static flatten(source) {
        return source.reduce((a, b) => a.concat(b), []);
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
