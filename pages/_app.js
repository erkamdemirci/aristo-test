import '../styles/fonts.css';
import '../styles/globals.css';
import GlobalStyles from './../styles/GlobalStyles';

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
