import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Alert } from '@mui/material';
import './App.css';


function App() {
  return (
    <div className="App">
      <Alert severity="info">This is an info alert — check it out!</Alert>
    </div>
  );
}

export default App;
