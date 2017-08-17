let node = (type = '', attributes = [], children = []) => {
  return {
    type,
    attributes,
    children
  }
}

function renderTree(tree, parent) {
  tree.map(v => {
    let el = createElement(v)
    setAttributes(v, el)
    renderElement(parent, el)

    if (v.children.length > 0) {
      renderTree(v.children, el)
    }
  })
}

function createElement(node) {
  return document.createElement(node.type)
}

function setAttributes(node, element) {
  node.attributes.map(a => {
    for (let prop in a) {
      switch (prop) {
        case 'text':
          setText(element, a[prop])
          break
        default:
          setAttribute(prop, element, a[prop])
          break
      }
    }
  })
}

function setAttribute(attr, el, val) {
  el.setAttribute(attr, val)
}

function setText(element, text) {
  element.innerText = text
}

function renderElement(parent, element) {
  parent.appendChild(element)
}

function render(view) {
  renderTree(view(), document.body)
}

function toExport() {
  let elements = [
    'div',
    'span',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'br',
    'nav',
    'ul',
    'li',
    'a',
    'form',
    'input',
    'textarea'
  ]

  let toExport = {}

  elements.map((element) => {
    toExport[element] = (attributes, children) => {
      return node(element, attributes, children)
    }
  })

  toExport['render'] = render

  return toExport
}

module.exports = toExport()