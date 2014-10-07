#!/bin/bash

while read version; do
    gem uninstall sass --force --executables > /dev/null
    gem install sass --version "$version" --force > /dev/null
    echo -n "$(sass -v) ... "
    npm test > /dev/null 2>&1
    if [ $? -eq 0 ]; then echo "OK"; else echo "FAILURE"; fi
done
