var assert = require('assert');
var fs = require('fs');
var child_process = require('child_process');

describe('viewport.scss', function(done2) {

    var files = fs.readdirSync('test/fixtures');

    files.forEach(function(file) {

        var match = file.match(/(.*)\.scss/);

        if (!match)
            return;

        it('should work with fixture file: ' + file, function(done) {

            var expected = fs.readFileSync('test/fixtures/' + match[1] + '.css', 'utf8');

            child_process.exec('sass --style expanded test/fixtures/' + match[1] + '.scss', function callback(err, actual, stdErr) {

                if (err)
                    assert.fail(err, 'Could not compile actual SCSS file: ' + stdErr);

                assert.equal(expected, actual);

                done();

            });
        });
    });
});
