import DemoItem from '#demo-item';
import Attach from '#attach';
import Button from '#button';
import Checkbox from '#checkbox';
import ColorPicker from '#colorpicker';
import Input from '#input';
import InputSearch from '#input?_type=search';
import LabelGroup from '#label-group';
import Link from '#link';
import Popup from '#popup';
import Radio from '#radio';
import Select from '#select';
import Tabs from '#tabs';
import TabsDynamic from '#tabs?_type=dynamic';
import Textarea from '#textarea';

export default Base => class extends Base {
    static displayName = 'Demo';

    constructor(props) {
        super(props);

        this.state = {
            dynamicTabs: [
                {
                    id: 1,
                    title: 'tab 1',
                    content: 'tab 1 content'
                },
                {
                    id: 2,
                    title: 'tab 2',
                    content: 'tab 2 content'
                }
            ]
        };
    }

    _onNewTab() {
        const tabs = this.state.dynamicTabs;
        const id = tabs[tabs.length - 1].id + 1;

        this.setState({
            dynamicTabs: tabs.concat({
                id,
                title: `tab ${id}`,
                content: `tab ${id} content`
            })
        });
    }

    _onDeleteTab(index) {
        const tabs = this.state.dynamicTabs;

        tabs.splice(index, 1);

        this.setState({
            dynamicTabs: tabs
        });
    }

    _showPopup() {
        this.refs.popup.show();
    }

    render() {
        return {
            block: 'demo',
            content: [
                DemoItem(
                    {
                        _title: 'Attach input',
                        key: 'attach'
                    },
                    Attach({
                        accept: 'image/jpeg,image/png'
                    }),
                ),
                DemoItem(
                    {
                        _title: 'Button',
                        key: 'button'
                    },
                    Button({
                        value: 'Hit me!'
                    })
                ),
                DemoItem(
                    {
                        _title: 'Checkbox',
                        key: 'checkbox'
                    },
                    Checkbox({
                        checked: false
                    })
                ),
                DemoItem(
                    {
                        _title: 'Color picker',
                        key: 'colorpicker'
                    },
                    ColorPicker({
                        value: '#000000'
                    })
                ),
                DemoItem(
                    {
                        _title: 'Text input',
                        key: 'input'
                    },
                    Input({
                        placeholder: 'put in your name',
                        value: 'Dick Johnson'
                    })
                ),
                DemoItem(
                    {
                        _title: 'Search input',
                        key: 'input-search'
                    },
                    InputSearch({
                        value: ''
                    })
                ),
                DemoItem(
                    {
                        _title: 'Label group',
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
                        _title: 'Link',
                        key: 'link'
                    },
                    Link({
                        target: '_blank',
                        href: 'https://www.google.com/#q=hell'
                    }, 'go to hell')
                ),
                DemoItem(
                    {
                        _title: 'Popup',
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
                        _title: 'Radio input',
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
                        _title: 'Select',
                        key: 'select'
                    },
                    Select({
                        _options: [
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
                        _title: 'Tabs',
                        key: 'tabs'
                    },
                    Tabs({
                        _tabs: [
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
                        ]
                    })
                ),
                DemoItem(
                    {
                        _title: 'Dynamic tabs',
                        key: 'tabs-dynamic'
                    },
                    TabsDynamic({
                        _tabs: this.state.dynamicTabs.map(
                            ({ id, title, content }) => ({ id, title, content })
                        ),
                        _onNewTab: ::this._onNewTab,
                        _onDeleteTab: ::this._onDeleteTab
                    })
                ),
                DemoItem(
                    {
                        _title: 'Textarea',
                        key: 'textarea'
                    },
                    Textarea({
                        value: 'tell me a story'
                    })
                )
            ]
        };
    }
};
