import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppHeader extends Component {
    render() {
        return <div>Hello from library</div>;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

// export default AppHeader;
export default connect(mapStateToProps)(AppHeader);