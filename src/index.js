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
