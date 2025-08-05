// Service Worker for MarkDownload Manifest V3
// Chrome compatibility
if (typeof browser === 'undefined') {
  self.browser = chrome
}

// Import all required scripts
importScripts(
  '../browser-polyfill.min.js',
  'compatibility.js',
  'apache-mime-types.js',
  'moment.min.js',
  'turndown.js',
  'turndown-plugin-gfm.js',
  'Readability.js',
  '../shared/context-menus.js',
  '../shared/default-options.js',
  'background.js'
)
