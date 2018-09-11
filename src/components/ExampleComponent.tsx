import * as React from "react";
import { connect } from "react-redux";
import { IReduxStore } from "../logic/reducers/IReduxStore";
import * as Actions from "../logic/actions";
import { RemoteStatus, Example, ExampleStore } from "../logic/types";

// stateless component!
const ExampleComponent = (props: any) => {
  let examples = [];
  if (props.examples.Status == RemoteStatus.Success) {
    examples = props.examples.examples.map((y: Example) => {
      return <div key={y.Id}>{y.Id}</div>;
    });
  }

  return (
    <div>
      {examples}
      <button
        onClick={() => {
          // props.addExample();
          props.LoadExamples();
        }}
      >
        Load
      </button>
    </div>
  );
};

export function mapStateToProps(store: IReduxStore) {
  const { examples } = store;
  return { examples: examples };
  // return {...example};
}

export function mapDispatchToProps(dispatch: any) {
  return {
    // addExample: () => dispatch(Actions.AddExample("test")),
    LoadExamples: () => dispatch(Actions.LoadExamples())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);
