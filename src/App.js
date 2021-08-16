import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  sw: { nativeName: 'Kiswahili ' },
};

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
              type='submit'
              onClick={() => {
                i18n.changeLanguage(lng)
                setCounter(count + 1)
              }}
              id={`change-lang-${lng}`}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p className="counter-for-language-changed">
          <i>{t('counter', { count })}</i>
        </p>
        <p>
          <Trans i18nKey='description.part1'>
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('description.part2')}
        </a>
      </header>
      <Footer t={t} />
    </div>
  );
}

export default App;
