const m = require('./../index')

var chai = require("chai")
var sinon = require("sinon")
var sinonChai = require("sinon-chai")
var expect = chai.expect

chai.use(sinonChai)

let cat, s

beforeEach(function() {
  s = sinon.sandbox.create()
})

afterEach(function() {
  s.restore()
  if(cat) {
    cat.meow()
  }
})

describe('module', function() {
  describe('.constant', function() {
    it('equals 1', function() {
      expect(m.constant).to.equal(1)
    })
  })

  describe('.waitOneSecond', function() {
    it('calls the callback with our argument', async function() {
      let arg = await m.waitOneSecond(5)
      expect(arg).to.equal(5)
    })
  })

  describe('.Cat', function() {
    beforeEach(function() {
      cat = new m.Cat({name: 'Dee'})
    })

    it('has a name', function() {
      expect(cat.name).to.equal('Dee')
    })

    it('has some functions', function() {
      expect(cat.meow).to.be.a('function')
      expect(cat.routine).to.be.a('function')
    })

    describe('.routine', function() {
      it('calls .meow', function() {
        s.spy(cat, 'meow')
        cat.routine()
        expect(cat.meow).to.have.been.called
      })

      it('stubbing', function() {
        s.stub(cat, 'meow').callsFake(function() {
          console.log('bark')
        })

        cat.routine()
        expect(cat.meow).to.have.been.called
      })
    })
  })
})
