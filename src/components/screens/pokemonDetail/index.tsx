import {Image, View} from 'react-native';
import Screen from 'src/components/elements/Screen';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainRootStack} from 'src/components/navigation/mainNav';
import {getPokemonImageUrl} from 'src/utils/pokemonImage';

type Props = NativeStackScreenProps<MainRootStack, 'PokemonDetail'>;
const PokemonDetail = ({navigation, route}: Props) => {
  const {item} = route.params;
  console.log(item);
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: getPokemonImageUrl(item.url)}}
        />
      </View>
    </Screen>
  );
};

export default PokemonDetail;
