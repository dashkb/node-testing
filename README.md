yarn init
yarn add mocha

create index.js
create test/test.js

tdd constant

go to mocha docs

yarn add chai
rewrite test with chai

tdd function
tdd function with param

tdd async function calls callback with arg (waitOneSecond)
  show test passes with bad value
  use done()
  convert fn to promise
  convert test to async/await

go to chai docs

create class and instantiate in beforeEach
test cat name
test cat has functions meow and routine
yarn add sinon sinon-chai
explain spying
expect meowSpy to have been called during routine (called is a prop!)

stub meow to bark
show called still works

show stub needs restoring,  explain restoring stubs
use sinon.sandbox.create() and .restore() in global hooks; use sanbox

go to sinon docs
