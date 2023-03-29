import { Image , StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Gatosmagros from './components/Gatosmagros';
import Gatosgordos from './components/Gatosgordos';

export default function App() {
  
  function Card(props) {
    function excluirgatos() {
      setGatosgordos(Gatosgordos.filter(gato => gato.id !== props.gato.id));
    }
    return (
      <View style={styles.card}>
      <Image style={styles.gato} source={{ uri: props.gato.capa}}  />
      <Text style={{ color: 'darkred'}}> {props.gato.titulo}</Text>
      <Text style={{ fontSize: 12 }}>R$ {props.gato.preco}</Text>
    </View>
  )
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: 'bold' }}>OlaMundo</Text>
        <ScrollView style={styles.conteudo}>
          { gatos.map(gato => <Card gato={gato} />)}
        </ScrollView>
      </View>
    )
  };
}

export default function App() {
  const gatos = [
    {
      capa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Persialainen.jpg/200px-Persialainen.jpg',
      titulo: 'gato persa',
      id: 1,
      genero: 'fluffy',
      preco: 2000.00
    },
    {
      capa: 'https://img.freepik.com/fotos-premium/gato-siames-e-radiador_41236-290.jpg?w=740',
      titulo: 'siamês',
      id: 1,
      genero: 'goblin',
      preco: 100.00
    },{
      capa: 'https://mega.ibxk.com.br/2016/08/23/23184544424447.jpg?ims=610x',
      titulo: 'manie coon',
      id: 1,
      genero: 'big',
      preco: 225.90
    },{
      capa: 'https://www.petz.com.br/gato/racas/angora/img/gatodestaque.webp',
      titulo: 'angorá',
      id: 1,
      genero: 'well groomed',
      preco: 325.90
    },{
      capa: 'https://img.freepik.com/fotos-premium/fundo-vertical-cinza-claro-com-gato-donsphinx-na-coleira-com-diamantes_636670-254.jpg?w=2000',
      titulo: 'sphynx',
      id: 1,
      genero: 'bald',
      preco: 425.90
    },
  ]
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
    width: '100%',    



  },
  card: {
    backgroundColor: 'orange',
    width: '100%',
    height: 300,
    borderRadius: 10,
    margin: 15
  },
  gato: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
