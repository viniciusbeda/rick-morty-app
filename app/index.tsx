import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { useFavorites } from '../hooks/useFavorites';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState('');
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const router = useRouter();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [page]);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 20 }}>Página {page}</Text>
      <TextInput
        placeholder="Ir para página"
        value={inputPage}
        onChangeText={setInputPage}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button title="Ir" onPress={() => setPage(Number(inputPage))} />
      <Button title="Ver Favoritos" onPress={() => router.push('/favorites')} />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  );
}
