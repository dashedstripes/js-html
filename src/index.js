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
