import { Component } from 'react';
import { BEM } from '@yummies/bem';

import DemoItem from '#demo-item';
import Attach from '#attach';
import Button from '#button';
import Checkbox from '#checkbox';
import ColorPicker from '#colorpicker';
import Img from '#img';
import Input from '#input';
import InputSearch from '#input/_type/search';
// import LabelGroup from '#label-group';
import Link from '#link';
// import Popup from '#popup';
// import Radio from '#radio';
// import Select from '#select';
// import Tabs from '#tabs';
// import Textarea from '#textarea';

export default class extends Component {
    static displayName = 'demo: demo';

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedTabIndex: 0
        };
    }

    // onTabChange(selectedTabIndex) {
    //     this.setState({ selectedTabIndex });
    // }
    //
    // _showPopup() {
    //     this.refs.popup.show();
    // }

    render() {
        return BEM(
            {
                ...this.props,
                block: 'demo'
            },
            DemoItem(
                {
                    title: 'Attach input'
                },
                Attach({
                    accept: 'image/jpeg,image/png'
                }),
            ),
            DemoItem(
                {
                    title: 'Button'
                },
                Button({
                    value: 'Hit me!'
                })
            ),
            DemoItem(
                {
                    title: 'Checkbox'
                },
                Checkbox({
                    checked: false
                })
            ),
            DemoItem(
                {
                    title: 'Color picker'
                },
                ColorPicker({
                    value: '#ff0000'
                })
            ),
            DemoItem(
                {
                    title: 'Image'
                },
                Img({
                    src: 'http://funkyimg.com/i/26sLr.gif'
                })
            ),
            DemoItem(
                {
                    title: 'Text input'
                },
                Input({
                    placeholder: 'placeholder',
                    value: 'text'
                })
            ),
            DemoItem(
                {
                    title: 'Search input'
                },
                InputSearch({
                    placeholder: 'search'
                })
            ),
                // DemoItem(
                //     {
                //         title: 'Label group',
                //         key: 'labelgroup'
                //     },
                //     LabelGroup(
                //         {
                //             _labelText: 'field title'
                //         },
                //         Input({
                //             placeholder: 'field control',
                //             value: ''
                //         })
                //     )
                // ),
            DemoItem(
                {
                    title: 'Link',
                    key: 'link'
                },
                Link(
                    {
                        target: '_blank',
                        href: '#'
                    },
                    'link'
                )
            ),
                // DemoItem(
                //     {
                //         title: 'Popup',
                //         key: 'popup'
                //     },
                //     Popup({
                //         ref: 'popup',
                //         key: 'popup'
                //     }, 'holy shit!'),
                //     Button({
                //         onClick: ::this._showPopup,
                //         value: 'show popup!'
                //     })
                // ),
                // DemoItem(
                //     {
                //         title: 'Radio input',
                //         key: 'radio'
                //     },
                //     Radio({
                //         name: 'radio-test',
                //         value: 'radio1',
                //         checked: false,
                //         key: 'radio1'
                //     }),
                //     Radio({
                //         name: 'radio-test',
                //         value: 'radio2',
                //         checked: true,
                //         key: 'radio2'
                //     })
                // ),
                // DemoItem(
                //     {
                //         title: 'Select',
                //         key: 'select'
                //     },
                //     Select({
                //         options: [
                //             {
                //                 value: 'be',
                //                 text: 'To be?'
                //             },
                //             {
                //                 value: 'not-be',
                //                 text: 'Not to be?'
                //             }
                //         ],
                //         value: 'be'
                //     }),
                // ),
                // DemoItem(
                //     {
                //         title: 'Tabs',
                //         key: 'tabs'
                //     },
                //     Tabs({
                //         tabs: [
                //             {
                //                 id: 1,
                //                 title: 'tab 1',
                //                 content: 'tab 1 content'
                //             },
                //             {
                //                 id: 2,
                //                 title: 'tab 2',
                //                 content: 'tab 2 content'
                //             },
                //             {
                //                 id: 3,
                //                 title: 'tab 3',
                //                 content: 'tab 3 content'
                //             }
                //         ],
                //         selected: this.state.selectedTabIndex,
                //         onTabChange: ::this.onTabChange
                //     })
                // ),
                // DemoItem(
                //     {
                //         title: 'Textarea',
                //         key: 'textarea'
                //     },
                //     Textarea({
                //         value: 'tell me a story'
                //     })
                // )
            // ]
        );
    }
}
