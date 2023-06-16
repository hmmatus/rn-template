import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {PokemonP} from 'src/models/pokemon.model';
import {Text} from 'react-native';

type Props = {
  item: PokemonP;
  index?: number;
};
const PokemonCard: React.FC<Props> = ({item}) => {
  const pokemonIndex = item.url.split('/')[item.url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="cover" source={{uri: imageUrl}} />
      <View style={styles.descriptionC}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;
