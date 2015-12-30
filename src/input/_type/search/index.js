import { Component } from '@yummies/yummies';

import Input from '#input';

export default class extends Component {
    static displayName = 'core: input/_type/search';

    render() {
        return Input({
            type: 'search',
            autoComplete: 'off',
            autoCapitalize: 'off',
            autoCorrect: 'off',
            spellCheck: 'off',
            mods: {
                type: 'search'
            },
            ...this.props
        });
    }
}
