import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const WelcomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>SpotiFake</Text>
            <Pressable style={styles.login_button}><Text>Login</Text></Pressable>
            <Pressable style={styles.login_button}><Text>Sign Up</Text></Pressable>
        </View>
    )
}

export default WelcomeScreen