import PropTypes from 'prop-types';
import { NotificationStyle } from "./NotificationStyle"




export const Notification = ({message}) => {
return (
<>
{message && <NotificationStyle>{message}</NotificationStyle>}
</>)
}

Notification.propTypes ={
message: PropTypes.string.isRequired,
}