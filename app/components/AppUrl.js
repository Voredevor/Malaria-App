import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";

function AppUrl({ url, children }) {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <ListItem text={children} />
        </TouchableOpacity>
        // <Button title={children} onPress={handlePress} />
    );
}

export default AppUrl;