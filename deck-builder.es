import React from 'react'
import ReactDOM from 'react-dom'

const DeckBuilder = () =>
  <div>
    The plugin only supports poi 7.3.0 and later.
    插件仅支持 poi 7.3.0 及之后版本。
  </div>

ReactDOM.render(<DeckBuilder />, document.querySelector('deck-builder'))
