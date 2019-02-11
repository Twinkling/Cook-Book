#!/bin/bash
cd dist
git init
git add .
git commit -m "Update"
# git remote add origin git@github.com:Twinkling/Cook-Book.git
git push -uf git@github.com:Twinkling/Cook-Book.git HEAD:gh-pages
rm -rf .git
