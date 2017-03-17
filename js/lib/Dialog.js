"use strict";

class Dialog {
    constructor(text) {
        if (!isString(text)) {
            throw new TypeError(`text must be a string (found ${text}).`);
        }
        this.text = text;
    }
}
