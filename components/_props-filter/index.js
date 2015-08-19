export default Base => class extends Base {
    // return props excluding propNames
    _propsExclude(propNames) {
        const out = {};

        Object.keys(this.props).forEach(propName => {
            if (propNames.indexOf(propName) === -1) {
                out[propName] = this.props[propName];
            }
        });

        return out;
    }

    // return only matched with propNames props
    _propsFrom(propNames) {
        const out = {};

        Object.keys(this.props).forEach(propName => {
            if (propNames.indexOf(propName) >= 0) {
                out[propName] = this.props[propName];
            }
        });

        return out;
    }
};
