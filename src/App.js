import Home from '@pages/Home/Home';

function App() {
  if (window.location.hostname !== 'arasmas.ru') return;

  return <Home />;
}

export default App;
