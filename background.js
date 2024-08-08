'use strict'

const themes = {
  "light": {
    "images": {
      "theme_frame": "header.png"
    },
    "colors": {
      "frame": "#ffffff",
      "popup_highlight": "#d6e9f8",
      "popup_highlight_text": "black",
      "tab_line": "rgba(0,0,0,0.3)",
      "tab_background_text": "#000000"
    }
  },

  "dark": {
    "images": {
      "theme_frame": "header-dark.png"
    },
    // blue colors are used because the outline color is cyan
    "colors": {
      "frame": "#000000",
      "popup_highlight": "#204351",
      "popup_highlight_text": "white",
      "tab_line": "rgba(255,255,255,0.2)",
      "tab_background_text": "#ffffff",
      "toolbar": "rgba(255,255,255,0.15)",
      "toolbar_field": "rgba(51, 51, 51, 0.85)",
      "toolbar_field_focus": "#222222",
      "toolbar_field_text": "white",
      "toolbar_field_highlight": "#285866",
      "toolbar_field_border_focus": "#3c8099"
    }
  },
}

let port = browser.runtime.connectNative('system_theme_watcher')

port.onMessage.addListener((msg) => {
  browser.theme.update(themes[msg.theme])
})
