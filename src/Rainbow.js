import React from 'react';

const Rainbow = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <h2>Super Powers +++</h2>
                <WrappedComponent {...props} />
            </div>
        );
    }
};

export default Rainbow;
