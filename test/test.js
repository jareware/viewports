var assert = require('assert');
var fs = require('fs');
var child_process = require('child_process');

var SPEC_FILE_PATH = 'test/spec';
var SPEC_FILE_FORMAT = /^([\s\S]*)\/\* it (.+) \*\/([\s\S]*)\/\* should equal \*\/([\s\S]*)$/m;

describe('viewports.scss', function() {

    var files = fs.readdirSync(SPEC_FILE_PATH);

    files.forEach(function(file) {

        if (!file.match(/\.scss$/))
            return; // we're only interested in SCSS files

        var contents = fs.readFileSync(SPEC_FILE_PATH + '/' + file, 'utf8');
        var sections = contents.match(SPEC_FILE_FORMAT);

        if (!sections)
            assert.fail(file + ': File does not appear to follow the spec file format');

        var description = sections[2].trim() + ' (' + file + ')';
        var cmd = 'sass --style expanded ' + SPEC_FILE_PATH + '/' + file;

        it(description, function(done) {

            child_process.exec(cmd, function(err, output, stdErr) {

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
