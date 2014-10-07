#!/bin/bash

while read version; do
    npm uninstall node-sass > /dev/null 2>&1
    npm install "node-sass@$version" > /dev/null 2>&1
    echo -n "$(node --eval "console.log(JSON.parse(require('fs').readFileSync('./node_modules/node-sass/package.json')).version)") ... " # the node-sass binary doesn't have a --version switch :(
    npm test > /dev/null 2>&1
    if [ $? -eq 0 ]; then echo "OK"; else echo "FAILURE"; fi
done
