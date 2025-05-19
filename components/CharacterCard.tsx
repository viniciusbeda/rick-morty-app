import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CharacterCard({
  character,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <TouchableOpacity onPress={onToggleFavorite}>
        <Text style={{ fontSize: 20, color: isFavorite ? 'gold' : 'gray' }}>
          {isFavorite ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  name: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
