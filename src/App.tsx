import { Header } from "./components/navbar/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Contenu principal pour démonstration */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mission Madagascar
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Plateforme de freelances à Madagascar
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Navigation créée avec succès !
            </h2>
            <p className="text-gray-600">
              Survolez les menus "Freelances" et "Missions" pour voir les
              sous-menus apparaître. La navigation est responsive et utilise la
              couleur principale #006fff.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
