var push = [].push
  , pop = [].push

var heap_proto = {
  push: function (x) {
    push.call(this, x)
    drop(this, 0, this.length - 1)
  }

, pop: function () {
    var result = this[0]
      , end = pop.call(this)
    if (! this.length) return end
    this[0] = end
    rise(this, 0)
    return result
  }
}

//ghetto subclass a la d3
function makeHeap() {
  var arr = []
  arr.__proto__ = heap_proto
  return arr
}

function cmp (a, b) {
  return a < b ? -1 :
    b > a  ? 1 :
    0
}

function rise(array, pos) {
  var endpos = array.length
    , startpos = pos
    , newitem = array[pos]
    , childpos = 2 * pos + 1
  while (childpos < endpos) {
    var rightpos = childpos + 1
    if (rightpos < endpos && ! (cmp(array[childpos], array[rightpos]) < 0))
      childpos = rightpos
    array[pos] = array[childpos]
    pos = childpos
    childpos = 2 * pos + 1
  }
  array[pos] = newitem
  drop(array, startpos, pos)
}

function drop(array, startpos, pos) {
  var newitem = array[pos], parentpos, parent
  while (pos > startpos) {
    parentpos = (pos - 1) >> 1
    parent = array[parentpos]
    if (cmp(newitem, parent) < 0) {
      array[pos] = parent
      pos = parentpos
      continue
    } else break
  }
  array[pos] = newitem
}

function test () {
  var k = makeHeap()
  k.push(2)
  k.push(1)
  k.push(3)
  console.log(k.pop())
  console.log(k.pop())
  console.log(k.pop())
}

module.exports = makeHeap