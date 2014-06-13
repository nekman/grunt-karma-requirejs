define(function(require) {
	'use strict';

	var sut = require('../src/Calculator');

	describe('Calculator', function() {

		it('can add numbers', function() {			
			var result = sut.add(1, 2);

			expect(result).toBe(3);
		});
	});
});