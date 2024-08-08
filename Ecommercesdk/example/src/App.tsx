import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MagentoGraphQL from '../../src';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  useEffect(() => {
    const initializeMagento = async () => {
      try {
        await MagentoGraphQL.setStoreCredentials({
          url: 'mcstaging.bottlestore.com',
          accessToken: 'Bearer j0tkqu1089rnnes7c03982po46eujkjj',
          cacheStore: {},
        });
        // const url = await AsyncStorage.getItem('url');

           await MagentoGraphQL.generate();
          // await MagentoGraphQL.isEmailAvailable('abcd@dckap.com');
      } catch (error) {
        console.error('Error initializing Magento:', error);
      }
    };

    initializeMagento();
  }, []);

  return (
    <View>
      <Text>App Content</Text>
    </View>
  );
};

export default App;
