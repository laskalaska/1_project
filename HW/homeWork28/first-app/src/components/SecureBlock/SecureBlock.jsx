import React from 'react';
import { bool } from "prop-types";

function SecureBlock({isAuthenticated}) {
    if (!isAuthenticated) {
        return null;
    }
    return (
        <div>Secret Info</div>
    );
}

SecureBlock.propTypes = {
    isAuthenticated:  bool.isRequired,
}

export default SecureBlock;