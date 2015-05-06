# TODO

```css
.popup__switcher {
    display: none;
}

.popup__switcher:checked + .popup__wrapper {
    display: block;
}

.popup__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
}

.popup__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.popup__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 666;
}

.popup__content {
    position: relative;
    z-index: 667;
}
```
