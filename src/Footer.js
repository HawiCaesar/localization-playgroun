import { DateTime } from 'luxon'
import './Footer.css'

const getGreetingTime = (dateValue = DateTime.now()) => {
  const split_afternoon = 12
  const split_evening = 17

  const currentHour = parseFloat(dateValue.hour)

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return 'afternoon'
  } else if (currentHour >= split_evening) {
    return 'evening'
  }
  return 'morning'
}

const Footer = ({ t }) => (
  <div className='footer'>
    <div>{t('footer.date', { date: new Date(), context: getGreetingTime() })}</div>
  </div>
);

export default Footer
