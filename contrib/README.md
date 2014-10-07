# contrib

**NOTE:** These scripts WILL mess up your local/global SASS binaries.

## ruby-sass tests

Testing against a bunch of available versions of the `sass` gem.

Version list available at https://rubygems.org/gems/sass/versions (alphas etc omitted).

```
$ cat contrib/sass-gem-versions.txt | ./contrib/test-ruby-sass-versions.sh
Sass 3.4.5 (Selective Steve) ... OK
Sass 3.4.4 (Selective Steve) ... OK
Sass 3.4.3 (Selective Steve) ... OK
Sass 3.4.2 (Selective Steve) ... OK
Sass 3.4.1 (Selective Steve) ... OK
Sass 3.4.0 (Selective Steve) ... OK
Sass 3.3.14 (Maptastic Maple) ... OK
Sass 3.3.13 (Maptastic Maple) ... OK
Sass 3.3.12 (Maptastic Maple) ... OK
Sass 3.3.11 (Maptastic Maple) ... OK
Sass 3.3.10 (Maptastic Maple) ... OK
Sass 3.3.9 (Maptastic Maple) ... OK
Sass 3.3.8 (Maptastic Maple) ... OK
Sass 3.3.7 (Maptastic Maple) ... OK
Sass 3.3.6 (Maptastic Maple) ... OK
Sass 3.3.5 (Maptastic Maple) ... OK
Sass 3.3.4 (Maptastic Maple) ... OK
Sass 3.3.3 (Maptastic Maple) ... OK
Sass 3.3.2 (Maptastic Maple) ... OK
Sass 3.3.1 (Maptastic Maple) ... OK
Sass 3.3.0 (Maptastic Maple) ... OK
Sass 3.2.19 (Media Mark) ... OK
Sass 3.2.18 (Media Mark) ... OK
Sass 3.2.17 (Media Mark) ... OK
Sass 3.2.16 (Media Mark) ... OK
Sass 3.2.15 (Media Mark) ... OK
Sass 3.2.14 (Media Mark) ... OK
Sass 3.2.13 (Media Mark) ... OK
Sass 3.2.12 (Media Mark) ... OK
Sass 3.2.11 (Media Mark) ... OK
Sass 3.2.10 (Media Mark) ... OK
Sass 3.2.9 (Media Mark) ... OK
Sass 3.2.8 (Media Mark) ... OK
Sass 3.2.7 (Media Mark) ... OK
Sass 3.2.6 (Media Mark) ... OK
Sass 3.2.5 (Media Mark) ... OK
Sass 3.2.4 (Media Mark) ... FAILURE
Sass 3.2.3 (Media Mark) ... FAILURE
Sass 3.2.2 (Media Mark) ... FAILURE
Sass 3.2.1 (Media Mark) ... FAILURE
Sass 3.2.0 (Media Mark) ... FAILURE
Sass 3.1.21 (Brainy Betty) ... FAILURE
Sass 3.1.20 (Brainy Betty) ... FAILURE
Sass 3.1.19 (Brainy Betty) ... FAILURE
Sass 3.1.18 (Brainy Betty) ... FAILURE
Sass 3.1.17 (Brainy Betty) ... FAILURE
Sass 3.1.16 (Brainy Betty) ... FAILURE
Sass 3.1.15 (Brainy Betty) ... FAILURE
Sass 3.1.14 (Brainy Betty) ... FAILURE
Sass 3.1.13 (Brainy Betty) ... FAILURE
Sass 3.1.12 (Brainy Betty) ... FAILURE
Sass 3.1.11 (Brainy Betty) ... FAILURE
Sass 3.1.10 (Brainy Betty) ... FAILURE
Sass 3.1.9 (Brainy Betty) ... FAILURE
Sass 3.1.8 (Brainy Betty) ... FAILURE
Sass 3.1.7 (Brainy Betty) ... FAILURE
Sass 3.1.6 (Brainy Betty) ... FAILURE
Sass 3.1.5 (Brainy Betty) ... FAILURE
Sass 3.1.4 (Brainy Betty) ... FAILURE
Sass 3.1.3 (Brainy Betty) ... FAILURE
Sass 3.1.2 (Brainy Betty) ... FAILURE
Sass 3.1.1 (Brainy Betty) ... FAILURE
Sass 3.1.0 (Brainy Betty) ... FAILURE
```

## node-sass tests

Testing against a bunch of available versions of the `node-sass` module.

Version list available with `$ npm view node-sass versions` (alphas etc omitted).

```
$ cat contrib/node-sass-versions.txt | ./contrib/test-node-sass-versions.sh
0.9.6 ... FAILURE
0.9.5 ... FAILURE
0.9.4 ... FAILURE
0.9.3 ... OK
0.9.2 ... OK
0.9.1 ... OK
0.9.0 ... OK
0.8.6 ... OK
0.8.5 ... OK
0.8.4 ... OK
0.8.3 ... OK
0.8.2 ... OK
0.8.1 ... OK
0.8.0 ... OK
0.7.0 ... OK
0.6.7 ... OK
0.6.6 ... OK
0.6.5 ... OK
0.6.4 ... FAILURE
0.6.3 ... FAILURE
0.6.2 ... FAILURE
^C
```
