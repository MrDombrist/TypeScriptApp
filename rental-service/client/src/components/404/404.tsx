function NotFoundPage() {
    return (
        <div className="page page--not-found">
            <main className="page__main page__main--center">
                <div className="container">
                    <section className="error-section">
                        <div className="error-section__wrapper">
                            <h1 className="error-section__code">404</h1>
                            <div className="error-section__details">
                                <div className="error-section__text">
                                    <h2 className="error-section__title">Oops! Page not found</h2>
                                    <p className="error-section__subtitle">
                                        Sorry, we couldn't find the page you're looking for. 
                                        It might have been moved or deleted.
                                    </p>
                                </div>
                                <div className="error-section__actions">
                                    <a className="btn btn--primary error-section__button" href="/">
                                        Back to Home
                                        <svg className="btn__icon" width="16" height="16" viewBox="0 0 16 16">
                                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                    <button 
                                        className="btn btn--secondary error-section__button" 
                                        onClick={() => window.history.back()}
                                    >
                                        Go Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export { NotFoundPage };