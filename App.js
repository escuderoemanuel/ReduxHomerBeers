import { ActivityIndicator, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Tavern from "./src/screens/Tavern.jsx";
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    'simpson-font': require('./assets/fonts/Simpsonfont.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <StatusBar backgroundColor='#1465bb' />
      <Provider store={store} >
        <Tavern />
      </Provider >
    </>
  );
}