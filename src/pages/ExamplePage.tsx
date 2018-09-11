import * as React from "react";

interface ThisProps {}

interface ThisState {}

export class ExamplePage extends React.Component<ThisProps, ThisState> {
  render() {
    return (
      <div>
        This is a test page
        <div>{this.props.children}</div>
      </div>
    );
  }
}
