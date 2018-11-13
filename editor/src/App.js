import React, { Component } from 'react';
// import brace from 'brace';
import AceEditor from 'react-ace';
import Terminal from 'terminal-in-react';
import { Container, Row, Col, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

const options = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
}

class App extends Component {
  state = {
    code: '',
    console: ''
  }

  handleChange = code => this.setState({ code });

  handleRunJS = () => {
    try {
      const result = eval(this.state.code);
      const c = `${this.state.console}\n${result}`;
      this.setState({ console: c });
    } catch (error) {
      const c = `${this.state.console}\n${error}`;
      this.setState({ console: c });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="6">
            <AceEditor
              mode="javascript"
              theme="tomorrow"
              onChange={this.handleChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.code}
              setOptions={options}
              width="100%"
            />
          </Col>
          <Col sm="6">
            <Button onClick={this.handleRunJS} color="primary">Run JS</Button>
            <div className="console">
              {this.state.console}
            </div>
            {/*<Terminal
              watchConsoleLogging
              hideTopBar
              color='green'
              backgroundColor='black'
              barColor='black'
              style={{ fontWeight: "bold", fontSize: "12px", height: "200px" }}
            />*/}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
