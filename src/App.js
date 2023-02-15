import RoutesApp from "./routes";
import GlobalStyle from './global';
import {AuthProvider} from './context/auth';

function App() {
  return (
    
    <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
    </AuthProvider>
    
  );
}



export default App;
