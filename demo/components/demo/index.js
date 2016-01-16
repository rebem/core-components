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
import LabelGroup from '#label-group';
import Link from '#link';
import Popup from '#popup';
import Radio from '#radio';
import Select from '#select';
import Table from '#table';
import TableHead from '#table/head';
import TableHeaderCell from '#table/header-cell';
import TableBody from '#table/body';
import TableRow from '#table/row';
import TableCell from '#table/cell';
import TableFoot from '#table/foot';
import Tabs from '#tabs';
import Textarea from '#textarea';

export default class extends Component {
    static displayName = 'demo: demo';

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedTabIndex: 0
        };

        this._showPopup = this._showPopup.bind(this);
        this._onTabChange = this._onTabChange.bind(this);
    }

    _onTabChange(selectedTabIndex) {
        this.setState({ selectedTabIndex });
    }

    _showPopup() {
        this.refs.popup.show();
    }

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
            DemoItem(
                {
                    title: 'Label group',
                    key: 'labelgroup'
                },
                LabelGroup(
                    {
                        labelText: 'field title'
                    },
                    Input({
                        placeholder: 'field control'
                    })
                )
            ),
            DemoItem(
                {
                    title: 'Link'
                },
                Link(
                    {
                        target: '_blank',
                        href: '#'
                    },
                    'link'
                )
            ),
            DemoItem(
                {
                    title: 'Popup'
                },
                Popup({
                    ref: 'popup',
                    key: 'popup'
                }, 'holy shit!'),
                Button({
                    onClick: this._showPopup,
                    value: 'show popup!'
                })
            ),
            DemoItem(
                {
                    title: 'Radio input'
                },
                BEM(
                    {
                        tag: 'form'
                    },
                    Radio({
                        name: 'radio-test',
                        value: 'radio1',
                        checked: false
                    }),
                    Radio({
                        name: 'radio-test',
                        value: 'radio2',
                        checked: true
                    })
                )
            ),
            DemoItem(
                {
                    title: 'Select'
                },
                Select({
                    options: [
                        {
                            value: 'option-1',
                            text: 'option 1'
                        },
                        {
                            value: 'option-2',
                            text: 'option 2'
                        }
                    ],
                    value: 'option-2'
                }),
            ),
            DemoItem(
                {
                    title: 'Table'
                },
                Table(
                    null,
                    TableHead(
                        null,
                        TableRow(
                            null,
                            TableHeaderCell(null, 'header cell 1'),
                            TableHeaderCell(null, 'header cell 2')
                        )
                    ),
                    TableBody(
                        null,
                        TableRow(
                            null,
                            TableCell(null, 'body cell 1'),
                            TableCell(null, 'body cell 2')
                        )
                    ),
                    TableFoot(
                        null,
                        TableRow(
                            null,
                            TableCell(null, 'footer cell 1'),
                            TableCell(null, 'footer cell 2')
                        )
                    )
                )
            ),
            DemoItem(
                {
                    title: 'Tabs'
                },
                Tabs({
                    selected: this.state.selectedTabIndex,
                    onTabChange: this._onTabChange
                })
            ),
            DemoItem(
                {
                    title: 'Textarea'
                },
                Textarea({
                    value: 'text'
                })
            )
        );
    }
}
