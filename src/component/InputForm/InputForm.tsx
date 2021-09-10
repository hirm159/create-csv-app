import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        return (
          <div>
            <h1>TODOアプリ</h1>
            <ul>
              <li><input type="button" value="☓" /> JavaScript覚える</li>
              <li><input type="button" value="☓"/> jQuery覚える</li>
              <li><input type="button" value="☓"/> ES2015覚える</li>
              <li><input type="button" value="☓"/> React覚える</li>
            </ul>
            <input type="text"/> <input type="button" value="追加"/>
          </div>
        );
    }
    
}

export default InputForm;