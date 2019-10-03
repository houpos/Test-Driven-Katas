const {expect, assert} = require('chai')

const wordWrap = (str, num) => {
  return str
}

//describe high-level
describe('Word Wrap Problem', () => {
  describe('wordWrap', () => {
    it('is a function', () => {
      expect(typeof wordWrap() === 'function')
    })
    it('returns a string', () => {
      expect(typeof wordWrap('hello world', 1) === 'string')
    })
    it('returns a string with new line chars at each index', () => {
      const str = 'hello world'
      const num = 5
      expect(wordWrap(str, num)).to.equal('hello' + "\n" + 'world')
    })
  })
})

  //wrap should equal function

  //return type of wrap should be a typeof string

  //wrap should take in two arguments

    //
