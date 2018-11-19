const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
var res = utils.add(33, 11);

expect(res).toBe(44).toBeA('number');

// if (res !== 44) {
// 	throw new Error(`Expected 44, but got ${res}.`)
// }
});

it('should square of number', () => {
var res = utils.square(3);

expect(res).toBe(9).toBeA('number');

expect(res).toBe(9).toBeA('number');
});

//should verify first and last name are set
//assert it includes firstname and lastname with proper values

it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  });
});

 //it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });