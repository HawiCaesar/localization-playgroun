import './Footer.css'

const Footer = ({ t }) => (
  <div className='footer'>
    <div>{t('footer.date', { date: new Date() })}</div>
  </div>
);

export default Footer
