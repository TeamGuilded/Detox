#!/bin/bash -e

if [ "$(uname)" == "Darwin" ]; then
  # cd detox/test/ios
  # pod install
  echo "Skipping pod install for test/ios"
fi
