#!/bin/sh

g++ /code/Main.cpp -o main

if [ $? -eq 0 ]; then
    ./main
else
    exit 1
fi