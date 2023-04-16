import Navigation from './src/navigation';
import config from './src/aws-exports';
import {Amplify} from 'aws-amplify';
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
import colors from './src/theme/colors';

Amplify.configure(config);

const App = () => {
  return <Navigation />;
};

export default App;
