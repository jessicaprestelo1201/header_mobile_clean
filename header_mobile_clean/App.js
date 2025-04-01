import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native-web';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { width } = useWindowDimensions();

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Clean.</Text>
        </View>

        {width > 768 || menuActive ? (
          <View style={styles.nav}>
            <TouchableOpacity><Text style={styles.navText}>Home</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Sobre</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Produtos</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.navText}>Blog</Text></TouchableOpacity>
          </View>
        ) : null}


        {width <= 768 && (
          <TouchableOpacity onPress={handleMenuToggle} style={styles.hamburgerButton}>
            <Text style={styles.hamburger}>☰</Text>
          </TouchableOpacity>
        )}
      </View>

  
      <View style={styles.content}>
        <Text style={styles.contentText}>Bem-vindo ao Clean! Explore nossos produtos.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00DAC7',
    width: '100%',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Caveat',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  navText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    marginRight: 20,
    textDecorationLine: 'none',
  },
  hamburgerButton: {
    display: 'block',
    fontSize: 30,
    color: '#ffffff',
    cursor: 'pointer',
  },
  hamburger: {
    fontSize: 30,
    color: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },


  '@media (max-width: 768px)': {
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    nav: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      display: menuActive ? 'flex' : 'none',
    },
    navText: {
      marginBottom: 10,
    },
    hamburgerButton: {
      display: 'block',
    },
  },
});

export default App;
