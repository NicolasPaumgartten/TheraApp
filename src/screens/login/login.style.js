import {COLORS, FONT_SIZE} from "../../constants/theme.js";

export const styles = {

   container:{
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 40,
        justifyContent: "space-between"
   },

   containerLogo: {
        alignItems: "center"
   },

   logo: {
     width: '100%', 
     height: undefined, 
     aspectRatio: 1, 
     marginTop: 40, 
     resizeMode: 'contain', 
 },
 
   containerInput: {
       marginTop: 15
   },

   input: {
        backgroundColor: COLORS.gray5,
        padding: 15,
        borderRadius: 6,    
   },

   footer:{
     alignItems:"center",
     justifyContent: "center",
     flexDirection:"row",     
     marginBottom: 100
   },

   footerLink:{
     color: COLORS.brown,
   }

};
