'use strict';

/**
 * renders an array of strings into an ordered list
 * @param {string[]} arr - the array of strings to render
 * @param {number} startNum - starting index for the list
 * @returns {HTMLOListElement} the rendered list
 */
const renderListLoop = (arr, startNum) => {
  const olEl = document.createElement('ol');
  olEl.start = startNum;

  for (const item of arr) {
    const liEl = document.createElement('li');
    liEl.innerText = item;
    olEl.appendChild(liEl);
  }
  return olEl;
};

describe('renderListLoop: renders a list from an array of strings', () => {
  describe('an ordered list of three items', () => {
    const actual = renderListLoop(['toad', 'frog', 'salamander'], 0);

    it('has tagName: "OL"', () => {
      expect(actual.tagName).toEqual('OL');
    });
    it('has start: 0', () => {
      expect(actual.start).toEqual(0);
    });
    it('has childElementCount: 3', () => {
      expect(actual.childElementCount).toEqual(3);
    });
    console.dir(actual);

    describe(
      `.children[0]`,
      () => {
        const actualChild = actual.children[0];
        it('has tagName: "LI"', () => {
          expect(actualChild.tagName).toEqual('LI');
        });
        it('has text: "toad"', () => {
          expect(actualChild.innerText).toEqual('toad');
        });
        it('has childElementCount: 0', () => {
          expect(actualChild.childElementCount).toEqual(0);
        });
        console.dir(actualChild);
      },
      true
    );
    describe(
      `.children[1]`,
      () => {
        const actualChild = actual.children[1];
        it('has tagName: "LI"', () => {
          expect(actualChild.tagName).toEqual('LI');
        });
        it('has text: "frog"', () => {
          expect(actualChild.innerText).toEqual('frog');
        });
        it('has childElementCount: 0', () => {
          expect(actualChild.childElementCount).toEqual(0);
        });
        console.dir(actualChild);
      },
      true
    );
    describe(
      `.children[2]`,
      () => {
        const actualChild = actual.children[2];
        it('has tagName: "LI"', () => {
          expect(actualChild.tagName).toEqual('LI');
        });
        it('has text: "salamander"', () => {
          expect(actualChild.innerText).toEqual('salamander');
        });
        it('has childElementCount: 0', () => {
          expect(actualChild.childElementCount).toEqual(0);
        });
        console.dir(actualChild);
      },
      true
    );
  });

  describe('an ordered list of two items', () => {
    const actual = renderListLoop(['orange', 'blue'], 3);

    it('has tagName: "OL"', () => {
      expect(actual.tagName).toEqual('OL');
    });
    it('has start: 3', () => {
      expect(actual.start).toEqual(3);
    });
    it('has childElementCount: 2', () => {
      expect(actual.childElementCount).toEqual(2);
    });
    console.dir(actual);

    describe(
      `.children[0]`,
      () => {
        const actualChild = actual.children[0];
        it('has tagName: "LI"', () => {
          expect(actualChild.tagName).toEqual('LI');
        });
        it('has text: "orange"', () => {
          expect(actualChild.innerText).toEqual('orange');
        });
        it('has childElementCount: 0', () => {
          expect(actualChild.childElementCount).toEqual(0);
        });
        console.dir(actualChild);
      },
      true
    );
    describe(
      `.children[1]`,
      () => {
        const actualChild = actual.children[1];
        it('has tagName: "LI"', () => {
          expect(actualChild.tagName).toEqual('LI');
        });
        it('has text: "blue"', () => {
          expect(actualChild.innerText).toEqual('blue');
        });
        it('has childElementCount: 0', () => {
          expect(actualChild.childElementCount).toEqual(0);
        });
        console.dir(actualChild);
      },
      true
    );
  });
});
