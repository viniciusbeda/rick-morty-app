import { FlatList, Text, View } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { useFavorites } from '../hooks/useFavorites';

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 20 }}>Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  );
}
