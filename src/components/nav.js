import React from 'react'

import write from "../assets/imgs/write.svg"
import speak from "../assets/imgs/speak.svg"
import code from "../assets/imgs/code.svg"

// import speakColor from "../assets/imgs/speak-color.svg"
// import writeColor from "../assets/imgs/write-color.svg"
// import codeColor from "../assets/imgs/code-color.svg"

const Nav = () => (
  <nav>
    <a href="/">
      <img src={write} className="lines" alt="write" title="write" />
      <span>Write</span>
    </a>
    <a href="/">
      <img src={speak} className="lines" alt="speak" title="speak" />
      <span>Speak</span>
    </a>
    <a href="/">
      <img src={code} className="lines" alt="code" title="code" />
      <span>Code</span>
    </a>
  </nav>
)

export default Nav
