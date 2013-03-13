var assert = require('assert');
var fs = require('fs');
var child_process = require('child_process');

describe('viewport.scss', function() {

    it('should produce a most basic ranged media query', function(done) {

        fs.readFile('test/fixtures/barebones.css', 'utf8', function(err, expected) {

            if (err)
                assert.fail(err, 'Could not read expected CSS file');

            child_process.exec('sass --style expanded test/fixtures/barebones.scss', function callback(err, actual) {

                if (err)
                    assert.fail(err, 'Could not compile actual SCSS file');

                assert.equal(expected, actual);

                done();

            });
        });
    });
});
