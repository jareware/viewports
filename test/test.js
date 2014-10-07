var assert = require('assert');
var fs = require('fs');
var child_process = require('child_process');

var SPEC_FILE_PATH = 'test/spec';
var SPEC_FILE_FORMAT = /^([\s\S]*)\/\* it (.+) \*\/([\s\S]*)\/\* should equal \*\/([\s\S]*)$/m;

var specFiles = fs.readdirSync(SPEC_FILE_PATH);
var compilers = [
    {
        name: 'ruby-sass',
        command: function(file) {
            return 'sass --style expanded ' + SPEC_FILE_PATH + '/' + file;
        }
    },
    {
        name: 'node-sass',
        command: function(file) {
            var pre094 = './node_modules/.bin/node-sass --stdout --output=/dev/null ' + SPEC_FILE_PATH + '/' + file +
                '| sed "s/\'/\\"/g" ' + // node-sass isn't consistent with ruby-sass with its quoting, so hack a fix
                '2> /dev/null'; // ignore stderr
            var post093 = 'cat ' + SPEC_FILE_PATH + '/' + file +
                '| sed "s/\\.\\.\\/\\.\\.\\///" ' + // since we're reading from stdin, fix @import "../../viewports"
                '| ./node_modules/.bin/node-sass --stdout ' +
                '| sed "s/\'/\\"/g" ' + // same as above
                '2> /dev/null'; // ignore stderr
            return post093; // pick the version depending on the node-sass version being tested against
        }
    }
    // Enable this to use the sassc binary directly, where available (node-sass usually lags a bit behind upstream libsass)
    /*
    {
        name: 'sassc',
        command: function(file) {
            return 'sassc ' + SPEC_FILE_PATH + '/' + file + ' | sed "s/\'/\\"/g" 2> /dev/null';
        }
    }
    */
];

compilers.forEach(function(compiler) {

    describe('viewports.scss on ' + compiler.name, function() {

        specFiles.forEach(function(file) {

            if (!file.match(/\.scss$/))
                return; // we're only interested in SCSS files

            var contents = fs.readFileSync(SPEC_FILE_PATH + '/' + file, 'utf8');
            var sections = contents.match(SPEC_FILE_FORMAT);

            if (!sections)
                assert.fail(file + ': File does not appear to follow the spec file format');

            var description = sections[2].trim() + ' (' + file + ')';

            it(description, function(done) {

                child_process.exec(compiler.command(file), function(err, output, stdErr) {

                    if (err)
                        assert.fail(file + ': Could not compile: ' + stdErr);

                    var sections = output.match(SPEC_FILE_FORMAT);

                    if (!sections)
                        assert.fail(file + ': Malformed output from compiler: ' + output);

                    var actual = sections[3].trim();
                    var expected = sections[4].trim();

                    assert.equal(expected, actual);

                    done();

                });
            });
        });
    });
});
