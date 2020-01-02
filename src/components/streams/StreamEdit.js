import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm';


class StreamEdit extends React.Component{


  componentDidMount() {
      this.props.fetchStream(this.props.match.params.id);
  }

  onFormSubmit = (formValues) => {
      this.props.editStream(this.props.match.params.id, formValues);
  }

  getRequiredFields({title, description}) {
      return {
        title,
        description
      }
  }

  render() {
   
    if(!this.props.stream) {
      return(<div>Loading...</div>)
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm  initialValues={ this.getRequiredFields(this.props.stream) } onSubmit={this.onFormSubmit} />
      </div>);
  }
};

const mapStateToprops = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(mapStateToprops, { fetchStream, editStream })(StreamEdit);