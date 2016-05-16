#!/bin/bash
npm run build
git add -A
git commit -m "build"
git subtree push --prefix dist origin gh-pages
