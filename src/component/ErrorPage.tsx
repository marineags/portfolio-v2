// src/component/ErrorPage.tsx

function ErrorPage() {
  return (
    <main className="error-page">
      <h1>Oups...</h1>
      <p>La page que tu recherches n’existe pas.</p>
      <a href="/">Retour à l’accueil</a>
    </main>
  );
}

export default ErrorPage;