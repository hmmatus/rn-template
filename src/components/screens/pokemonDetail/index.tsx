import {Alert, Image, ScrollView, Text, View} from 'react-native';
import Screen from 'src/components/elements/Screen';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainRootStack} from 'src/components/navigation/mainNav';
import {getPokemonImageUrl} from 'src/utils/pokemonImage';
import {useEffect, useState} from 'react';
import {pokemonService} from 'src/services/pokemon/pokemonService';
import {HStack, Spinner} from 'native-base';

type Props = NativeStackScreenProps<MainRootStack, 'PokemonDetail'>;
const PokemonDetail = ({navigation, route}: Props) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const {item} = route.params;
  const getPokemonDetail = async (name: string) => {
    setLoading(true);
    try {
      const result = await pokemonService.getPokemon(name);
      console.log(
        '🚀 ~ file: index.tsx:20 ~ getPokemonDetail ~ result:',
        result,
      );
      setPokemon(result);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error fetching pokemon');
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetail(item.name);
  }, []);

  if (loading) {
    return <Spinner size="lg" accessibilityLabel="Loading" />;
  }
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{uri: getPokemonImageUrl(item.url)}}
          />
          <HStack style={styles.descriptionHeaderContainer}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.textHeader}>Abilities</Text>
              {pokemon.abilities.map(ability => (
                <Text style={styles.textDescription}>
                  {ability.ability.name}
                </Text>
              ))}
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.textHeader}>Forms</Text>
              {pokemon.forms.map(form => (
                <Text style={styles.textDescription}>{form.name}</Text>
              ))}
            </View>
          </HStack>

          <Text style={styles.textHeader}>Moves</Text>
          {pokemon.moves.map(move => (
            <Text style={styles.textDescription}>{move.move.name}</Text>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default PokemonDetail;
