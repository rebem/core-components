import { Component } from 'react';
import { BEM } from 'rebem';

import DemoItem from '#demo-item';
import Attach from '#attach';
import Button from '#button';
import Checkbox from '#checkbox';
import ColorPicker from '#colorpicker';
import Img from '#img';
import Input from '#input';
import FieldGroup from '#field-group';
import Link from '#link';
import Popup from '#popup';
import Radio from '#radio';
import RadioGroup from '#radio-group';
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
    constructor(props, context) {
        super(props, context);

        this.state = {
            checkboxChecked: false,
            colorpickerValue: '#ff0000',
            inputValue: 'text',
            popupVisibility: false,
            radioGroupValue: 'radio2',
            selectValue: 'option2',
            selectedTabIndex: 0,
            textareaValue: 'text'
        };

        this._onCheckboxChange = this._onCheckboxChange.bind(this);
        this._onColorpickerChange = this._onColorpickerChange.bind(this);
        this._onInputChange = this._onInputChange.bind(this);
        this._showPopup = this._showPopup.bind(this);
        this._hidePopup = this._hidePopup.bind(this);
        this._onPopupHide = this._onPopupHide.bind(this);
        this._onRadioGroupChange = this._onRadioGroupChange.bind(this);
        this._onSelectChange = this._onSelectChange.bind(this);
        this._onTextareaChange = this._onTextareaChange.bind(this);
        this._onTabChange = this._onTabChange.bind(this);
    }

    _onCheckboxChange(e) {
        this.setState({
            checkboxChecked: e.target.checked
        });
    }

    _onColorpickerChange(e) {
        this.setState({
            colorpickerValue: e.target.value
        });
    }

    _onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    _onRadioGroupChange(value) {
        this.setState({
            radioGroupValue: value
        });
    }

    _onSelectChange(e) {
        this.setState({
            selectValue: e.target.value
        });
    }

    _onTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        });
    }

    _onTabChange(selectedTabIndex) {
        this.setState({ selectedTabIndex });
    }

    _showPopup() {
        this.setState({
            popupVisibility: true
        });
    }

    _hidePopup() {
        this.setState({
            popupVisibility: false
        });
    }

    _onPopupHide() {
        this.setState({
            popupVisibility: false
        });
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
                    accept: 'image/jpeg,image/png',
                    onChange() {}
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
                    checked: this.state.checkboxChecked,
                    onChange: this._onCheckboxChange
                })
            ),
            DemoItem(
                {
                    title: 'Color picker'
                },
                ColorPicker({
                    value: this.state.colorpickerValue,
                    onChange: this._onColorpickerChange
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
                    value: this.state.inputValue,
                    onChange: this._onInputChange
                })
            ),
            DemoItem(
                {
                    title: 'Field group',
                    key: 'fieldgroup'
                },
                FieldGroup(
                    {
                        label: 'label'
                    },
                    Input({
                        placeholder: 'content1'
                    }),
                    Input({
                        placeholder: 'content2'
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
                Popup(
                    {
                        visible: this.state.popupVisibility,
                        onHide: this._onPopupHide
                    },
                    'popup content'
                ),
                Button({
                    onClick: this._showPopup,
                    value: 'show popup'
                }),
                Button({
                    onClick: this._hidePopup,
                    value: 'hide popup'
                })
            ),
            DemoItem(
                {
                    title: 'Radio Group'
                },
                RadioGroup(
                    {
                        value: this.state.radioGroupValue,
                        onChange: this._onRadioGroupChange
                    },
                    Radio({
                        name: 'radio-test',
                        value: 'radio1'
                    }),
                    Radio({
                        name: 'radio-test',
                        value: 'radio2'
                    })
                )
            ),
            DemoItem(
                {
                    title: 'Select'
                },
                Select({
                    value: this.state.selectValue,
                    options: [
                        {
                            value: 'option1',
                            text: 'option 1'
                        },
                        {
                            value: 'option2',
                            text: 'option 2'
                        }
                    ],
                    onChange: this._onSelectChange
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
                    onTabChange: this._onTabChange
                })
            ),
            DemoItem(
                {
                    title: 'Textarea'
                },
                Textarea({
                    value: this.state.textareaValue,
                    onChange: this._onTextareaChange
                })
            )
        );
    }
}
