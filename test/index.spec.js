import { expect } from 'chai';

import { validateMessage, validateMessageFromBuffer } from '../dist';

describe('#validateMessage', function() {
  it('should return false if no message is provided', function() {
    expect(validateMessage()).to.be.false;
    expect(validateMessage('')).to.be.false;
  });

  it('should throw an error if no preset is provided', function() {
    var f = function() {
      validateMessage('chore(package): foo', {
        preset: 'notapreset'
      });
    };

    expect(f).to.throw(Error);
  });
});

describe('#validateMessageFromBuffer', function() {
  it('should accept a valid message', function() {
    expect(validateMessageFromBuffer(`${__dirname}/examples/valid.txt`)).to.be.true;
  });

  it('should reject an invalid message', function() {
    expect(validateMessageFromBuffer(`${__dirname}/examples/invalid.txt`)).to.be.false;
  });
});
