export default Base => class extends Base {
    // return props excluding propNames
    _propsExclude(propNames) {
        let out = {};

        Object.keys(this.props).forEach(p => {
            if (propNames.indexOf(p) === -1) {
                out[p] = this.props[p];
            }
        });

        return out;
    }

    // return only matched with propNames props
    _propsFrom(propNames) {
        let out = {};

        Object.keys(this.props).forEach(p => {
            if (propNames.indexOf(p) >= 0) {
                out[p] = this.props[p];
            }
        });

        return out;
    }
};
