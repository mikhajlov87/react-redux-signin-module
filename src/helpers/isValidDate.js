import moment from 'moment';

const isValidDate = ({ date, format }) => moment(date, format).isValid();

export default isValidDate;
