import { div, h1, h3, p, render } from './Html'

function header() {
  return (
    div([{ class: 'header' }],
      [
        h1([{ text: 'Header' }], [])
      ])
  )
}

function mainSection() {
  return (
    div([{ class: 'main-section' }],
      [
        h3([{ text: 'Main Section' }], []),
        div([{ class: 'intro' }],
          [
            p([{ text: 'Some stuff goes here.' }], [])
          ])
      ])
  )
}

function view() {
  return [
    div([{ id: 'app', class: 'container' }],
      [
        header(),
        mainSection()
      ])
  ]
}

render(view)
