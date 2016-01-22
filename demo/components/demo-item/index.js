import { PropTypes } from 'react';
import { BEM } from 'rebem';

const block = 'demo-item';

function renderTitle(props) {
    if ('title' in props) {
        return BEM(
            {
                block,
                elem: 'title',
                tag: 'h3'
            },
            props.title
        );
    }

    return null;
}

function renderDescription(props) {
    if ('description' in props) {
        return BEM(
            {
                block,
                elem: 'description'
            },
            props.description
        );
    }

    return null;
}

export default function DemoItem(props) {
    return BEM(
        {
            ...props,
            block
        },
        renderTitle(props),
        renderDescription(props),
        BEM(
            {
                block,
                elem: 'content'
            },
            props.children
        )
    );
}

DemoItem.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ]),
    description: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ])
};
