import moment from 'moment';

const formatDate = ({ date, format, toFormat }) => moment(date, format).format(toFormat);

export default formatDate;
