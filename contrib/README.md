# contrib

**NOTE:** These tests require Docker to isolate their environment & not mess with your globally installed packages.

## ruby-sass tests

Testing against a bunch of available versions of the `sass` gem.

Version list available at https://rubygems.org/gems/sass/versions (alphas etc omitted).

```
$ cat contrib/sass-gem-versions.txt | ./contrib/test-ruby-sass-versions.sh
3.4.15 ... OK
3.4.14 ... OK
3.4.13 ... OK
3.4.12 ... OK
3.4.11 ... OK
3.4.10 ... OK
3.4.9 ... OK
3.4.8 ... OK
3.4.7 ... OK
3.4.6 ... OK
3.4.5 ... OK
3.4.4 ... OK
3.4.3 ... OK
3.4.2 ... OK
3.4.1 ... OK
3.4.0 ... OK
3.3.14 ... OK
3.3.13 ... OK
3.3.12 ... OK
3.3.11 ... OK
3.3.10 ... OK
3.3.9 ... OK
3.3.8 ... OK
3.3.7 ... OK
3.3.6 ... OK
3.3.5 ... OK
3.3.4 ... OK
3.3.3 ... OK
3.3.2 ... OK
3.3.1 ... OK
3.3.0 ... OK
3.2.19 ... OK
3.2.18 ... OK
3.2.17 ... OK
3.2.16 ... OK
3.2.15 ... OK
3.2.14 ... OK
3.2.13 ... OK
3.2.12 ... OK
3.2.11 ... OK
3.2.10 ... OK
3.2.9 ... OK
3.2.8 ... OK
3.2.7 ... OK
3.2.6 ... OK
3.2.5 ... OK
3.2.4 ... FAILURE
3.2.3 ... FAILURE
3.2.2 ... FAILURE
3.2.1 ... FAILURE
3.2.0 ... FAILURE
3.1.21 ... FAILURE
3.1.20 ... FAILURE
3.1.19 ... FAILURE
3.1.18 ... FAILURE
3.1.17 ... FAILURE
3.1.16 ... FAILURE
^C
```

## node-sass tests

Testing against a bunch of available versions of the `node-sass` module.

Version list available with `$ npm view node-sass versions` (alphas etc omitted).

```
$ cat contrib/node-sass-versions.txt | ./contrib/test-node-sass-versions.sh
3.2.0 ... OK
3.1.2 ... OK
3.1.1 ... OK
3.1.0 ... OK
3.0.0 ... OK
2.1.1 ... OK
2.1.0 ... FAILURE
2.0.1 ... OK
2.0.0 ... OK
1.2.3 ... OK
1.2.2 ... OK
1.2.1 ... OK
1.2.0 ... OK
1.1.4 ... FAILURE
1.1.3 ... FAILURE
1.1.2 ... FAILURE
1.1.1 ... FAILURE
1.1.0 ... FAILURE
1.0.3 ... OK
1.0.2 ... OK
1.0.1 ... OK
1.0.0 ... OK
0.9.6 ... OK
0.9.5 ... OK
0.9.4 ... OK
^C
# resume with "pre094" mode in test.js
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
