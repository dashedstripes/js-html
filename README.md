# JS-HTML

A library for building HTML layouts with plain Javascript.

## Getting Started

This project uses `yarn` for package management, and `webpack` to build the `bundle.js` file.

```
$ yarn install
$ webpack --watch
```

Once webpack is watching for changes, you will need to run a web server to view the page. I like using `SimpleHTTPServer` which is built into python.

```
$ python -m SimpleHTTPServer
```

## How to use

The following shows the basic use of the library. Notice how key components are split into their own functions.

```javascript
import { div, h1, h3, p, nav, ul, li, a, render } from './Html'

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
        p([{ text: 'Content goes here.' }], [])
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