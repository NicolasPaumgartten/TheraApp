import {COLORS, FONT_SIZE} from "../../constants/theme.js";

export const styles = {
   container:{
        backgroundColor: COLORS.brown,
        flex: 1,
        padding: 40,
        justifyContent: "flex-start" // Alterado para alinhar no topo
   },
   text:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 20,
        marginBottom: 20, // Adicionado espaçamento inferior
        textAlign: 'center' // Centralizado o texto
   },
   // Adicionando um estilo para a FlatList
   listContainer: {
        paddingBottom: 20 // Adiciona um padding na parte inferior da lista
   },
   // Estilo para lidar com o caso de lista vazia
   emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
   },
   emptyListText: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray1,
        textAlign: 'center'
   }
};