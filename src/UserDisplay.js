import React, {Component} from 'react';

class UserDisplay extends Component {
  render () {
    const {userData} = this.props;
    return (
      <div className="UserDisplay">
        {userData}
      </div>
    );
  }
}

export default UserDisplay;
