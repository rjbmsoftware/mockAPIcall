# mockAPIcall

## Goal
Figure out mocks with selenium

## What to do
1. npm install
2. npm start
3. npm run mocks
4. npm run e2e
5. npm run int

## start
Starts express js app.

## mocks
Starts mocks server.

## e2e - end to end test
Starts a web browser where a call is made to another service and the text is replaced with hello world, test run checks for this.

## int - integration test
Starts a web browser and traffic is routed though the mocks server as a proxy within firefox, the separate service call is mocked and the test checks for the mocked text.

## notes
Firefox option of network.proxy.allow_hijacking_localhost has to be set to true to allow routing through local proxy.