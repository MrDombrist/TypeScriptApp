import { Link } from 'react-router-dom';

function NotFound(){
  return (
    <div className="page page--gray page--not-found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <div className="not-found__message">
              <p>Страница не найдена</p>
              <p>Запрашиваемая вами страница не существует.</p>
            </div>
            <Link to="/" className="not-found__back-link">Вернуться на главную</Link>
          </section>
        </div>
      </main>

      <footer className="footer">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export { NotFound};