export declare class Util {
    constructor();
    static sayGoodbye(): void;
    /**
     * Escaping user input that is to be treated as a literal string within a regular expression
     * —that would otherwise be mistaken for a special character—can be accomplished by
     * simple replacement:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
     * @param string
     */
    static escapeRegExp(string: any): any;
    static flatten(source: any): any;
    static extractHostname(url: any): any;
}
