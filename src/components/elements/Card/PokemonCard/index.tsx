import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {PokemonP} from 'src/models/pokemon.model';
import {Text} from 'react-native';
import {getPokemonImageUrl} from 'src/utils/pokemonImage';

type Props = {
  item: PokemonP;
  index?: number;
  onPress(): void;
};
const PokemonCard: React.FC<Props> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: getPokemonImageUrl(item.url)}}
        />
        <View style={styles.descriptionC}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;
