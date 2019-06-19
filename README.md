
# Bug demonstration for https://github.com/palantir/blueprint/issues/3604

## Installation

    yarn install
    yarn run start

## What is included

This app was created this way:

    create-react-app bug3604 --typescript
    cd bug3604
    yarn install @blueprintjs/core

and the I just added "experimentalDecorators": true to compilerOptions and added a simple hotkey.
