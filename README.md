# JS-HTML

A library for building HTML layouts with plain Javascript.

## Getting Started

This project uses `yarn` for package management, and `webpack` to build the `bundle.js` file.

```bash
$ yarn install
$ yarn watch # runs webpack --watch
```

Run the server to view the page.

``` bash
$ yarn start
```

## How to use

The following shows the basic use of the library. Notice how key components are split into their own functions.

```javascript
import { div, h1, nav, ul, li, a, p, form, input, textarea, render } from './Html'

function header() {
  return (
    div([{ class: 'header' }],
      [
        h1([{ text: 'js-html' }], []),
        navigation()
      ])
  )
}

function navigation() {

  let links = ['Products', 'About', 'Contact']

  return (
    nav([],
      [
        ul([],
          links.map((link) => {
            return li([],
              [
                a([{ href: '#', text: link }], [])
              ])
          }))
      ])
  )
}

function content() {
  return (
    div([{ class: 'content' }],
      [
        p([{ text: 'Content goes here.' }], []),
        contactForm()
      ])
  )
}

function contactForm() {
  return (
    form([{ id: 'contactForm', action: '/', method: 'POST' }],
      [
        input([{ type: 'text', placeholder: 'Enter your email...' }], []),
        textarea([{ cols: '40', rows: '10' }], []),
        input([{ type: 'submit' }], [])
      ])
  )
}

function view() {
  return [
    div([{ class: 'container' }], [
      header(),
      content()
    ])
  ]
}

render(view)

```

The functions are very simple, you build your view by returning an array, then passing it to the `render` function.

DOM Elements are created with this simple syntax:

```javascript
element(attributes: Array Object, children: Array Element)
```

So as an example, this Javascript:

```javascript
div([{ id: 'myId', class: 'my-class'}], 
  [
    h1 ([class: 'title', text: 'Hello World!'], [])
  ]
  )
```

Generates this HTML:

```html
<div id="myId" class="my-class">
  <h1 class="title">
    Hello World!
  </h1>
</div>
```

## Disclaimer

This project is a bit of a hobby for me. As such, I will be working on it sporadically.