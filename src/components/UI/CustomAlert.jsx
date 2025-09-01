import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from '@icons/Icons'
import './CustomAlert.css'

const CustomAlert = ({ type, message }) => {
  return (
    <article className = {`custom_alert alert-${type}`}>
      { type === 'info' && <InfoIcon className = 'alert-icon' /> }
      { type === 'error' && <ErrorIcon className = 'alert-icon' /> }
      { type === 'warning' && <WarningIcon className = 'alert-icon' /> }
      { type === 'success' && <SuccessIcon className = 'alert-icon' /> }
      <span>{message}</span>
    </article>
  )
}

export default CustomAlert