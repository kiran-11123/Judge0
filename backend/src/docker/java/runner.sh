#!/bin/bash

cd /code || exit 1

javac Main.java
compile_status=$?

if [ $compile_status -ne 0 ]; then
    exit $compile_status
fi

java Main
exit $?