#!/bin/bash

# $ docker build -t viewports-tester contrib

trap "exit 1" SIGINT SIGTERM # break while & exit on Ctrl + C

while read version; do
    echo -n "$version ... "
    docker run --rm \
        -v $(pwd)/_viewports.scss:/app/_viewports.scss:ro \
        -v $(pwd)/test:/app/test:ro \
        -e VIEWPORTS_RUBY=1 \
        viewports-tester \
        "gem install sass -v $version && mocha test" \
        > /dev/null 2>&1
    if [ $? -eq 0 ]; then echo "OK"; else echo "FAILURE"; fi
done
