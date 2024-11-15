import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet, Alert } from 'react-native';

const YouTubePlayer = ({ onReward }) => {
  const videoId = 'LzCqs_8PC2mq4w9b';  // Replace with dynamic video ID or input

  // Function to handle video completion
  const handleNavigationStateChange = (navState) => {
    // Check if the user has finished watching the video
    if (navState.url.includes('watch?v=')) {
      // This is a placeholder URL condition. You need to implement a more reliable condition.
      // You may consider using a redirect to a completion URL or an API to handle this.
      if (navState.url.includes('watching_completed')) {
        onReward(); // Call the reward function
        Alert.alert("Congratulations!", "You've earned coins for watching the video!");
      }
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        javaScriptEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1` }}
        onNavigationStateChange={handleNavigationStateChange}
      />
      <Text style={styles.instructionText}>Watch the video to earn coins!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    height: 300,
    width: '100%',
  },
  instructionText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default YouTubePlayer;
