import { Component, PropTypes } from 'react';
import Yummies from '@yummies/yummies';

import DemoItem from '#demo-item';
import Attach from '#attach';
import Button from '#button';
import Checkbox from '#checkbox';
import ColorPicker from '#colorpicker';
import Input from '#input';
import InputSearch from '#input/_type/search';
import LabelGroup from '#label-group';
import Link from '#link';
import Popup from '#popup';
import Radio from '#radio';
import Select from '#select';
import Tabs from '#tabs';
import Textarea from '#textarea';

export default class extends Component {
    static displayName = 'Demo';

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedTabIndex: 0
        };
    }

    onTabChange(selectedTabIndex) {
        this.setState({ selectedTabIndex });
    }

    _showPopup() {
        this.refs.popup.show();
    }

    render() {
        return Yummies({
            block: 'demo',
            mods: this.props.mods,
            mix: this.props.mix,
            props: this.props,
            content: [
                DemoItem(
                    {
                        title: 'Attach input',
                        key: 'attach'
                    },
                    Attach({
                        accept: 'image/jpeg,image/png'
                    }),
                ),
                DemoItem(
                    {
                        title: 'Button',
                        key: 'button'
                    },
                    Button({
                        value: 'Hit me!'
                    })
                ),
                DemoItem(
                    {
                        title: 'Checkbox',
                        key: 'checkbox'
                    },
                    Checkbox({
                        checked: false
                    })
                ),
                DemoItem(
                    {
                        title: 'Color picker',
                        key: 'colorpicker'
                    },
                    ColorPicker({
                        value: '#ff0000'
                    })
                ),
                DemoItem(
                    {
                        title: 'Text input',
                        key: 'input'
                    },
                    Input({
                        placeholder: 'put in your name',
                        value: 'Dick Johnson'
                    })
                ),
                DemoItem(
                    {
                        title: 'Search input',
                        key: 'input-search'
                    },
                    InputSearch({
                        value: ''
                    })
                ),
                DemoItem(
                    {
                        title: 'Label group',
                        key: 'labelgroup'
                    },
                    LabelGroup(
                        {
                            _labelText: 'field title'
                        },
                        Input({
                            placeholder: 'field control',
                            value: ''
                        })
                    )
                ),
                DemoItem(
                    {
                        title: 'Link',
                        key: 'link'
                    },
                    Link({
                        target: '_blank',
                        href: 'https://www.google.com/#q=hell'
                    }, 'go to hell')
                ),
                DemoItem(
                    {
                        title: 'Popup',
                        key: 'popup'
                    },
                    Popup({
                        ref: 'popup',
                        key: 'popup'
                    }, 'holy shit!'),
                    Button({
                        onClick: ::this._showPopup,
                        value: 'show popup!'
                    })
                ),
                DemoItem(
                    {
                        title: 'Radio input',
                        key: 'radio'
                    },
                    Radio({
                        name: 'radio-test',
                        value: 'radio1',
                        checked: false,
                        key: 'radio1'
                    }),
                    Radio({
                        name: 'radio-test',
                        value: 'radio2',
                        checked: true,
                        key: 'radio2'
                    })
                ),
                DemoItem(
                    {
                        title: 'Select',
                        key: 'select'
                    },
                    Select({
                        options: [
                            {
                                value: 'be',
                                text: 'To be?'
                            },
                            {
                                value: 'not-be',
                                text: 'Not to be?'
                            }
                        ],
                        value: 'be'
                    }),
                ),
                DemoItem(
                    {
                        title: 'Tabs',
                        key: 'tabs'
                    },
                    Tabs({
                        tabs: [
                            {
                                id: 1,
                                title: 'tab 1',
                                content: 'tab 1 content'
                            },
                            {
                                id: 2,
                                title: 'tab 2',
                                content: 'tab 2 content'
                            },
                            {
                                id: 3,
                                title: 'tab 3',
                                content: 'tab 3 content'
                            }
                        ],
                        selected: this.state.selectedTabIndex,
                        onTabChange: ::this.onTabChange
                    })
                ),
                DemoItem(
                    {
                        title: 'Textarea',
                        key: 'textarea'
                    },
                    Textarea({
                        value: 'tell me a story'
                    })
                )
            ]
        });
    }
}
