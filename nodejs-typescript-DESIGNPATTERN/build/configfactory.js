"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configxml_1 = require("./configxml");
class ConfigFactory {
    creerConfig() {
        return new configxml_1.ConfigXml();
    }
}
exports.ConfigFactory = ConfigFactory;
