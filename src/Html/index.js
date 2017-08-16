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
        case 'id':
          setId(element, a[prop])
          break
        case 'class':
          setClass(element, a[prop])
          break
        case 'text':
          setText(element, a[prop])
          break
        case 'href':
          setHref(element, a[prop])
          break
      }
    }
  })
}

function setText(element, text) {
  element.innerText = text
}

function setId(element, val) {
  element.setAttribute('id', val)
}

function setHref(element, val) {
  element.setAttribute('href', val)
}

function setClass(element, val) {
  element.setAttribute('class', val)
}

function renderElement(parent, element) {
  parent.appendChild(element)
}

function render(view) {
  renderTree(view(), document.body)
}

function toExport() {
  let elements = [
    { type: 'div' },
    { type: 'span' },
    { type: 'h1' },
    { type: 'h2' },
    { type: 'h3' },
    { type: 'h4' },
    { type: 'h5' },
    { type: 'h6' },
    { type: 'p' },
    { type: 'nav' },
    { type: 'ul' },
    { type: 'li' },
    { type: 'a' }
  ]

  let toExport = {}

  elements.map((v) => {
    toExport[v.type] = (attributes, children) => {
      return node(v.type, attributes, children)
    }
  })

  toExport['render'] = render

  return toExport
}

module.exports = toExport()