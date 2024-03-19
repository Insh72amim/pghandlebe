#!/bin/bash

cd ..

zip -r zip/pghandlebe.zip . -x "node_modules/*" -x "dist/*" -x ".git/*" -x "zip/*" -x "./.env" -x "./.env.local"
