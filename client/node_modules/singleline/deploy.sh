#!/bin/bash

# Check if there are uncommited changes. Exit with an error if there are.
if [[ `git diff-index HEAD` != "" ]];
then echo "ERROR! You have uncommited changes..." && exit 1;
else echo "Deploy in progress...";
fi

# eslint and test
npm run test

# git add new dist/ assets
git add .

# Tag release with package.json version
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

git tag $PACKAGE_VERSION

# Push commited changes to master
git push origin master --tags

# Publish to npm
# npm publish
