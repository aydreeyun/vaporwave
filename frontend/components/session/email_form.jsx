import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" onChange={this.update} placeholder="Your email address or profile URL" />
          </label>
        </form>
      </>
    );
  }
};

export default EmailForm;
