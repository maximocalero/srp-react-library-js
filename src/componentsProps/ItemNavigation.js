import PropTypes from 'prop-types';

const NavigationItem = {
    title:"",
    description: "",
    url:"",
    target: "",
    className: "",
}

NavigationItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    target: PropTypes.string,
    className: PropTypes.string,
}



export default NavigationItem;