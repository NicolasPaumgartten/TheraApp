import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';

export const styles = StyleSheet.create({
  doctor: {
    backgroundColor: COLORS.white,
    padding: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    fontWeight: '600',
    marginBottom: 4,
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
  }
});