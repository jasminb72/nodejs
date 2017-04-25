import {ConfigXml} from './configxml';

export class ConfigFactory{

    creerConfig(){
        return new ConfigXml();
    }

}