import { COLORS, FONT_SIZE } from "../../constants/theme.js";

COLORS.brown = "#A88A5D";

export const styles = {

  btn: {
    width: "100%",
    borderRadius: 6,
    padding: 12,
    marginTop: 18
  },

  primary:{
    backgroundColor: COLORS.brown
  },

  danger: {
    backgroundColor: COLORS.red
  },

  text: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
};
