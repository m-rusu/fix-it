import { LinearGradient } from 'expo-linear-gradient';

export default (props) => {
    return (
        <LinearGradient colors={['#43428b', '#0a0a77', '#43428b']} style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {props.children}
        </LinearGradient>
    )
}