import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const Dashboard = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      
      {/* Purple Open Menu Button */}
      <TouchableOpacity style={styles.button} onPress={toggleMenu}>
        <Text style={styles.buttonText}>Open Menu</Text>
      </TouchableOpacity>

      {/* Modal for the Menu */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity style={styles.overlay} onPress={toggleMenu}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Menu</Text>

            {/* Menu Links */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate('Share Location');
              }}
            >
              <Text style={styles.menuText}>Share Location</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate('Watch Video');
              }}
            >
              <Text style={styles.menuText}>Watch Video</Text>
            </TouchableOpacity>

            {/* Purple Close Menu Button */}
            <TouchableOpacity style={styles.button} onPress={toggleMenu}>
              <Text style={styles.buttonText}>Close Menu</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'purple', // Set the button background color to purple
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Set the text color to white for contrast
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Dashboard;
