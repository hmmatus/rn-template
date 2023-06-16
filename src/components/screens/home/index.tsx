import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Screen from 'src/components/elements/Screen';

import {useAppDispatch} from 'src/redux/hooks';
import {setLoggedOut} from 'src/redux/auth/slice';
import {FlatList} from 'native-base';
import {BottomRootTab} from 'src/components/navigation/tabNav';
import {service} from 'src/services/service';
import {pokemonService} from 'src/services/pokemon/pokemonService';
import {FlatListProps} from 'react-native';
import PokemonCard from 'src/components/elements/Card/PokemonCard';
import {API_URL} from '@env';
import {styles} from './styles';

type Props = NativeStackScreenProps<BottomRootTab, 'Home'>;
const Home = ({}: Props) => {
  const [data, setData] = useState([]);
  const getAllPokemons = async (limit: number) => {
    try {
      const result = await pokemonService.getAllPokemons(limit);
      setData(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokemons(10);
  }, []);

  return (
    <Screen>
      <>
        <FlatList
          columnWrapperStyle={styles.contentFlatlist}
          data={data}
          numColumns={3}
          renderItem={({item, index}) => (
            <PokemonCard index={index} item={item} />
          )}
        />
      </>
    </Screen>
  );
};

export default Home;
