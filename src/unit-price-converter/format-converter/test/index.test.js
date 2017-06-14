'use strict';

const expect = require('chai').expect;
const fs = require('fs');

const formatConverter = require('../index');


describe('format-converter', () => {

  it('should always be true', () => {
    expect(true).to.be.true;
  });

  it('should getTypeOfMesurement("K")', () => {
    expect(formatConverter.getTypeOfMesurement("L")).to.be.equal("volume");
    expect(formatConverter.getTypeOfMesurement("G")).to.be.equal("weight");
    expect(formatConverter.getTypeOfMesurement("UN")).to.be.equal("unity");
  });


  it('should getMultiplicator("K")', () => {
    expect(formatConverter.getMultiplicator("K")).to.be.equal(1000);
    expect(formatConverter.getMultiplicator("M")).to.be.equal(1/1000);
  });

  it('should getStandardFormat().quantity', () => {

    let formatObj = {
      packet: "3",
      format: "2",
      quantity : "50",
      prefixSymblol: "K",
      unitSymbol : "G"
    }

    let standardFormat = formatConverter.getStandardFormat(formatObj);
    expect(standardFormat.quantity).to.be.equal(3 * 2 * 50 * 1000);
  });

  it('should getStandardFormat().quantity', () => {

    let formatObj = {
      packet: "3",
      format: "2",
      quantity : "50",
      prefixSymblol: "K",
      unitSymbol : "G"
    }

    let standardFormat = formatConverter.getStandardFormat(formatObj);
    expect(standardFormat.quantity).to.be.equal(3 * 2 * 50 * 1000);
  });

});
