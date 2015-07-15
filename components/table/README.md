# Table

Simple Table component

## props

```js
{
    _cols: [
        {
            name: <string>, // unique column name to match with row item
            content: <string> || <ReactElement>
        },
        ...
    ],
    _rows: [
        {
            [name: <string>]: [content: <string> || <ReactElement>]
        }
    ]
}
```

ex:
```js
{
    _cols: [
        {
            name: 'id',
            content: 'ID'
        },
        {
            name: 'title',
            content: 'Title'
        }
    ],
    _rows: [
        {
            id: 1,
            title: 'Foo'
        },
        {
            id: 2,
            title: 'Bar'
        }
    ]
}
```

Result:

| ID | Title |
|----|-------|
| 1  | Foo   |
| 2  | Bar   |
