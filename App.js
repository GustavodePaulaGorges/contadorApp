// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Counter from './src/components/counter';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter min="0" />
      <Counter min="-10"/>
      <Counter />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
