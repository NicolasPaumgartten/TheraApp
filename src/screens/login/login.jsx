import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style";
import Button from "../../components/button/button";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth.js";

export function Login(props) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Credenciais fixas para teste
  const mockEmail = "teste@exemplo.com";
  const mockPassword = "123456";

  async function ExecuteLogin() {
    // Simular autenticação local
    if (email === mockEmail && password === mockPassword) {
      // Simula o retorno de dados do usuário
      const mockUserData = {
        token: "mockedToken",
        user: {
          email: mockEmail,
          name: "Usuário de Teste",
        },
      };

      // Configura o token e os dados no contexto
      setUser(mockUserData);
      Alert.alert("Login bem-sucedido!");
      props.navigation.navigate;("home"); // Redireciona para a tela inicial
    } else {
      Alert.alert("Erro no Login", "E-mail ou senha inválidos.");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="E-mail"
              style={styles.input}
              onChangeText={(texto) => setEmail(texto)}
            />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              placeholder="Senha"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(texto) => setPassword(texto)}
            />
          </View>

          <Button text="Acessar" onPress={ExecuteLogin} />
        </View>

        <View style={styles.footer}>
          <Text>Não tenho conta.</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
            <Text style={styles.footerLink}>Criar conta agora.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
