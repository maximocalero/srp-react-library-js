import React from 'react';
import PropTypes from 'prop-types';

/** Another simple component to test how react-gen-doc could work with tsx component */
const TestComponent = ({title, content}) =>
<div>
    <h1>{title}</h1>
    <p>{content}</p>
</div>

TestComponent.propTypes = {
    /** TestComponent title */

    title: PropTypes.string,

    /** TestComponent content */
    content: PropTypes.string,
};

export default TestComponent;