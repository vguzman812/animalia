#!/bin/sh

export CI=true
npm test database routes controllers ${@}
