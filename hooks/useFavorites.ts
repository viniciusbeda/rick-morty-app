import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const STORAGE_KEY = '@favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    setFavorites(json ? JSON.parse(json) : []);
  };

  const saveFavorites = async (data: any[]) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const toggleFavorite = async (character: any) => {
    const exists = favorites.find((fav) => fav.id === character.id);
    let updated;
    if (exists) {
      updated = favorites.filter((fav) => fav.id !== character.id);
    } else {
      updated = [...favorites, character];
    }
    setFavorites(updated);
    await saveFavorites(updated);
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id);
  };

  return { favorites, toggleFavorite, isFavorite };
}
