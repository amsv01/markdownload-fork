// Service Worker for Manifest V3
// Import all the required modules

// Import browser polyfill for Chrome compatibility
importScripts('chrome-polyfill.min.js')

// Import all the background scripts in order
importScripts('apache-mime-types.js')
importScripts('moment.min.js')
importScripts('turndown.js')
importScripts('turndown-plugin-gfm.js')
importScripts('Readability.js')
importScripts('../shared/context-menus.js')
importScripts('../shared/default-options.js')
importScripts('background.js')

// Service worker specific code
console.log('MarkDownload service worker started')
