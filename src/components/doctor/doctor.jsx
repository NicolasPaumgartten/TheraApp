import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./doctor.style";
import icon from "../../constants/icon";

export default function Doctor({ id_doctor, name, specialty, icon: doctorIcon, onPress }) {
  return (
    <TouchableOpacity
      style={styles.doctor}
      onPress={() => onPress(id_doctor, name, specialty, doctorIcon)}
    >
      <Image
        source={doctorIcon === "M" ? icon.male : icon.female}
        style={styles.icon}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
}