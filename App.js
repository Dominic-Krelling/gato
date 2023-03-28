import { Image , StyleSheet, Text, View, ScrollView  } from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{ uri: props.livro.capa}}  />
      <Text style={{ color: 'darkred'}}> {props.livro.titulo}</Text>
      <Text style={{ fontSize: 12 }}>R$ {props.livro.preco}</Text>
    </View>
  );
}

export default function App() {
  const livro = [
    {
      capa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Persialainen.jpg/200px-Persialainen.jpg',
      titulo: 'gato persa',
      preco: 2000.00
    },
    {
      capa: 'https://img.freepik.com/fotos-premium/gato-siames-e-radiador_41236-290.jpg?w=740',
      titulo: 'siamês',
      preco: 100.00
    },{
      capa: 'https://d2i0w0hu6hvxgc.cloudfront.net/B0153SZLXO/ee117502/cover.jpeg',
      titulo: 'livro 3',
      preco: 225.90
    },{
      capa: 'https://d2i0w0hu6hvxgc.cloudfront.net/B0153SZLXO/ee117502/cover.jpeg',
      titulo: 'livro 4',
      preco: 325.90
    },{
      capa: 'https://d2i0w0hu6hvxgc.cloudfront.net/B0153SZLXO/ee117502/cover.jpeg',
      titulo: 'livro 5',
      preco: 425.90
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: 'bold' }}>OlaMundo</Text>
      <ScrollView style={styles.conteudo}>
        { livro.map(livro => <Card livro={livro} />)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  conteudo:{
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '40%'
  },
  card: {
    backgroundColor: 'orange',
    width: '100%',
    height: 240,
    borderRadius: 10,
    margin: 15
  },
  livro: {
    width: '100%',
    height: 200,
  }
});
