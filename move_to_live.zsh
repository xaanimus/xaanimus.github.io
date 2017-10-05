#!/bin/zsh
setopt extendedglob
cd ../site_live/
rm -rf ^.git
cp -r ../xaanimus/build/* .
