#!/bin/bash

cd ..

zip -r pghandlebe.zip . -x "node_modules/*" -x "dist/*" -x ".git/*" -x "zip/*"
