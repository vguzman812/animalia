#!/bin/sh

export CI=true
export MONGOMS_VERSION=4.4.6

npm test database routes controllers ${@}
