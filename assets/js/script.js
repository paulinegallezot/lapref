function toggleChildren() {
  let children = document.getElementsByClassName('child')
  for (let i = 0; i < children.length; i++) {
    if (children[i].style.display === 'block') {
      children[i].style.display = 'none'
      let grandchildren = children[i].getElementsByClassName('grandchild')
      for (let j = 0; j < grandchildren.length; j++) {
        grandchildren[j].style.display = 'none'
      }
    } else {
      children[i].style.display = 'block'
    }
  }
}

function toggleGrandchildren(child) {
  let grandchildren = child.getElementsByClassName('grandchild')
  for (let i = 0; i < grandchildren.length; i++) {
    if (grandchildren[i].style.display === 'block') {
      grandchildren[i].style.display = 'none'
    } else {
      grandchildren[i].style.display = 'block'
    }
  }
}

document.querySelectorAll('.child').draggable()
