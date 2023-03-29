import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './src/components/Card';
import React from 'react';

export default function App() {

  const [gatos, setgatos] = React.useState([
    {
      id: 1,
      imggato: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Persialainen.jpg/200px-Persialainen.jpg",
      raça: 'Persa', 
    },
    {
      id: 2,
      imggato: "https://midia.gruposinos.com.br/_midias/jpg/2022/07/14/simba-20423995.jpg",
      raça: 'Maine Coon',
    },
    {
      id: 3,
      imggato: "https://www.petz.com.br/gato/racas/angora/img/gatodestaque.webp",
      raça: 'Angorá',
    },
    {
      id: 4,
      imggato: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwebrOJ4JK2u_Xa643DA5Zz1hyR8nw2iSxm2ryHPk2kPpUabWD",
      raça: 'Ragdoll',
    },
    {
      id: 5,
      imggato: "https://amomeugato.blog.br/wp-content/uploads/2021/02/ashera01.jpg",
      raça: 'Ashera',
    },
  ]);
  const removerItem = (id) => {
    const index = gatos.findIndex((filme) => filme.id === id);
    const novaLista = [...gatos];
    novaLista.splice(index, 1);
    setgatos(novaLista);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 25}}>
        Olá Mundo
        </Text>
        <View style={styles.conteudo}>
        { gatos.map(gato => 
          <Card 
          gato={gato}
          removerItem={() => removerItem(gato.id)} 
          key={gatos.id} 
          />
        )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#496773',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#30A5BF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 200,
    width: '100%',
  }

});