import '@testing-library/jest-dom'

// Polyfill untuk Request/Response API
if (typeof Request === 'undefined') {
  global.Request = require('node-fetch').Request
}

if (typeof Response === 'undefined') {
  global.Response = require('node-fetch').Response
}