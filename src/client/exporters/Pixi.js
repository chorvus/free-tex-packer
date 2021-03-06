import Json from './Json';

class Pixi extends Json {

    constructor() {
        super();
    }

    run(data, options) {
        return super.run(data, options);
    }

    static get type() {
        return "pixi.js";
    }

    static get description() {
        return "pixi.js format";
    }

    static get fileExt() {
        return "json";
    }
}

export default Pixi;