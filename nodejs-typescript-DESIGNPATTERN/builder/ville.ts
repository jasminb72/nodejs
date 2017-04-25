export class Ville {
    name: string;
    position: string;

    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }

    getPosition() {
        return this.position;
    }
    setPosition(position: string) {
        this.position = position;
    }

    toString() {
        return "Nom: " + this.getName() + ", position: " + this.getPosition();
    }
}