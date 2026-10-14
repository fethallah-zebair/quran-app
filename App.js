import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
return (
<ScrollView style={styles.container}>
<StatusBar style="light" />
<View style={styles.header}>
<Text style={styles.title}>القرآن الكريم</Text>
<Text style={styles.subtitle}>نورٌ وهدى للقلوب</Text>
</View>

  <View style={styles.card}>
    <Text style={styles.heading}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
    <Text style={styles.description}>
      اقرأ القرآن الكريم وتدبّر آياته
    </Text>
  </View>

  <Text style={styles.section}>ابدأ القراءة</Text>

  <View style={styles.surah}>
    <Text style={styles.surahName}>الفاتحة</Text>
    <Text style={styles.details}>السورة 1 • 7 آيات</Text>
  </View>

  <View style={styles.surah}>
    <Text style={styles.surahName}>البقرة</Text>
    <Text style={styles.details}>السورة 2 • 286 آية</Text>
  </View>

  <View style={styles.surah}>
    <Text style={styles.surahName}>آل عمران</Text>
    <Text style={styles.details}>السورة 3 • 200 آية</Text>
  </View>
</ScrollView>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#071B33',
},
header: {
padding: 30,
paddingTop: 65,
alignItems: 'center',
},
title: {
color: '#D9B56D',
fontSize: 32,
fontWeight: 'bold',
},
subtitle: {
color: '#FFFFFF',
fontSize: 16,
marginTop: 10,
},
card: {
margin: 18,
padding: 24,
backgroundColor: '#102D4A',
borderRadius: 18,
alignItems: 'center',
},
heading: {
color: '#E8C982',
fontSize: 21,
textAlign: 'center',
},
description: {
color: '#FFFFFF',
fontSize: 15,
marginTop: 14,
},
section: {
color: '#FFFFFF',
fontSize: 22,
fontWeight: 'bold',
textAlign: 'right',
margin: 20,
},
surah: {
backgroundColor: '#102D4A',
marginHorizontal: 18,
marginBottom: 12,
padding: 20,
borderRadius: 14,
alignItems: 'flex-end',
},
surahName: {
color: '#FFFFFF',
fontSize: 20,
fontWeight: 'bold',
},
details: {
color: '#D9B56D',
fontSize: 14,
marginTop: 8,
},
});
