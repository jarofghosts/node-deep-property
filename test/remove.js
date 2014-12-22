
var test = require('tap').test
  , prop = require('../index.js');


test('invalid input', function (t) {
  var a = undefined
    , b = { }
    , c = { path: { to:'value' }}
    , d = { }
    , e = { };

  t.equal(prop.remove(a, 'sample'), false);
  t.equal(prop.remove(b, undefined), false);
  t.equal(prop.remove(c, 'path.to'), true);
  t.equal(prop.remove(d, 'undefined'), false);
  t.equal(prop.remove(e, 'path.to..error'), false);

  t.equivalent(a, undefined);
  t.equivalent(b, { });
  t.equivalent(c, { path: { }});
  t.equivalent(d, { });
  t.equivalent(e, { });
  t.end();
});


test('removing existing values', function (t) {
  var a = {
    name: {
      first:  'John',
      middle: 'C',
      last:   'McCloy'
    }
  };

  t.equal(prop.remove(a, 'name.last'), true);

  t.equivalent(a.name, {first: 'John', middle: 'C'});
  t.end();
});
