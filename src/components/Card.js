import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Card(props) {

  return (
    <View style={styles.Card}>
      <Image style={styles.foto} source={{ uri: props.gato.imggato}} />  
      <Text style={{ color: 'darkred'}}> {props.gato.raça} </Text>     
      <TouchableOpacity onPress={props.removerItem} style={styles.botao}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#34B1BF',
    width: '40%',
    height: 215,
    borderRadius: 10,
    margin: 15,
  },
  foto: {
    resizeMode: 'stretch',
    width: '100%',
    height: 180,
  },
  botao: {
    backgroundColor: '#2C2628',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10,
  },
});     