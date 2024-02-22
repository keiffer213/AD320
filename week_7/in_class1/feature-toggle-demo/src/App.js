import logo from './logo.svg';
import './App.css';
import { FeatureToggle } from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <FeatureToggle isEnabled={true} featureName='Call' />
      <FeatureToggle isEnabled={false} featureName='Mute' />
      <FeatureToggle isEnabled={true} featureName='Copy' />
      <FeatureToggle isEnabled={false} featureName='Paste' />
    </div>
  );
}

export default App;

