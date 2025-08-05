// Compatibility layer for Manifest V3
// This file provides compatibility for browser APIs between Manifest V2 and V3

// Chrome compatibility
if (typeof browser === 'undefined') {
  self.browser = chrome
}

// Polyfill for tabs.executeScript -> scripting.executeScript
if (browser.scripting) {
  const originalExecuteScript = browser.tabs.executeScript

  browser.tabs.executeScript = async function (tabId, details) {
    try {
      if (details.file) {
        const results = await browser.scripting.executeScript({
          target: { tabId: tabId },
          files: [details.file],
        })
        return results.map((result) => result.result)
      } else if (details.code) {
        const results = await browser.scripting.executeScript({
          target: { tabId: tabId },
          func: function (code) {
            return eval(code)
          },
          args: [details.code],
        })
        return results.map((result) => result.result)
      }
    } catch (error) {
      console.error('Script execution failed:', error)
      throw error
    }
  }
}
