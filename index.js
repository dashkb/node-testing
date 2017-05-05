module.exports = {
  constant: 1,
  waitOneSecond(val) {
    return new Promise(function(resolve) {
      process.nextTick(function() { resolve(val) })
    })
  },
  Cat: class {
    get name() {
      return this._name
    }

    constructor({name}) {
      this._name = name
    }

    routine() {
      this.meow()
      console.log('did my routine')
    }

    meow() {
      console.log('said meow')
    }
  }
}
