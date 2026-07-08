#!/bin/bash

javac Main.java

if [ $? -eq 0 ]; then
    java Main
else
    echo "Compilation failed."
    exit 1
fi