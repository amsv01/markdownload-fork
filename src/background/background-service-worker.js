// Combined background script for Manifest V3 service worker
// Chrome compatibility
if (typeof browser === 'undefined') {
  var browser = chrome
}

// Import all required scripts using importScripts (synchronous loading)
importScripts(
  '../chrome-polyfill.min.js',
  'apache-mime-types.js',
  'moment.min.js',
  'turndown.js',
  'turndown-plugin-gfm.js',
  'Readability.js',
  '../shared/context-menus.js',
  '../shared/default-options.js'
)

// Original background script content will be loaded after this
// Load the main background logic
importScripts('background-main.js')
