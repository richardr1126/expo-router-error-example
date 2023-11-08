import { StyleSheet, Platform } from 'react-native';
import { useEffect, useState } from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link } from '@gluestack-ui/themed';
import SigninActionSheet from '../../components/SigninActionSheet';
import SigninModal from '../../components/SigninModal';

export default function TabOneScreen() {
  const [showActionsheet, setShowActionsheet] = useState(false)
  const [modalShownOnce, setModalShownOnce] = useState(false)
  const handleClose = () => setShowActionsheet(!showActionsheet)

  useEffect(() => {
    if (!modalShownOnce) {
      setShowActionsheet(true);
      setModalShownOnce(true);
    }
  }, []);

  return (
    <>
      {Platform.OS !== 'web' && <SigninActionSheet showActionSheet={showActionsheet} handleClose={handleClose} />}
      {Platform.OS === 'web' && <SigninModal showActionSheet={showActionsheet} handleClose={handleClose} />}
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/one.jsx" />
        <Link onPress={handleClose} style={styles.link}>
          <Text style={styles.linkText}>Show sign in modal</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
