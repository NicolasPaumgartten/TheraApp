import React from 'react';
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./home.style";
import Doctor from "../../components/doctor/doctor";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const doctors = [
    {
      id_doctor: '1',
      name: ' Viviane Bastos',
      specialty: 'Psicologa',
      icon: 'F'
    },
    {
      id_doctor: '2',
      name: 'João Silva',
      specialty: 'Psicologo',
      icon: 'M'
    },
    {
      id_doctor: '3',
      name: 'Pedro Oliveira',
      specialty: 'Psicologo',
      icon: 'M'
    },
    {
      id_doctor: '4',
      name: 'Ana Costa',
      specialty: 'Psicologa',
      icon: 'F'
    }
  ];

  const ClickDoctor = (id_doctor, name, specialty, icon) => {
    navigation.navigate("services", { id_doctor, name, specialty, icon });
  };

  const renderDoctor = ({ item }) => (
    <Doctor
      id_doctor={item.id_doctor}
      name={item.name}
      icon={item.icon}
      specialty={item.specialty}
      onPress={() => ClickDoctor(item.id_doctor, item.name, item.specialty, item.icon)}
    />
  );
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Escolha um Psicologo</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={doctors}
          renderItem={renderDoctor}
          keyExtractor={(item) => item.id_doctor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}
// 