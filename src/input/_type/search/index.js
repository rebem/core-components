import { Component } from 'react';

import Input from '#input';

export default class extends Component {
    static displayName = 'core: input/_type/search';

    val() {
        return this.refs.input.val();
    }

    render() {
        return Input({
            ...this.props,
            type: 'search',
            mods: {
                type: 'search',
                ...this.props.mods
            },
            autoComplete: 'off',
            autoCapitalize: 'off',
            autoCorrect: 'off',
            spellCheck: 'off',
            ref: 'input'
        });
    }
}
