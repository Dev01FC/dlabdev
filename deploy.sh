#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
 echo 'www.dlab.nl' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 #git push -f git@github.com:frankleafy/dl58.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 #git push -f git@github.com:Dev01FC/dlabdev.git master:gh-pages
 git push -f https://Dev01FC@github.com/Dev01FC/dlabdev.git master:gh-pages



cd -
