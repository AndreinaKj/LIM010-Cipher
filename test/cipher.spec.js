describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería dar indicar un espacio con offset de 33', () => {
      assert.equal(cipher.encode(33, " "), " ");
    });  

});

    it("Debe retornar H cuando ingrese A con offet 33", () => {
      assert.equal(cipher.encode(33, "A"), "H")
    });
    
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");  
    });

    it('debería retornar un espacio con offset 33', () => {
      assert.equal(cipher.decode(33, " "), " ");  
    });

  });

});
