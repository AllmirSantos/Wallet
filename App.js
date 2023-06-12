import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoader] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  if (!fontsLoader) {
    return <Text>Carregando fontes</Text>;
  } else {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(73,96,249,1)", "rgba(25,55,254,1)"]}
          style={styles.headerGradient}
        >
          <View style={styles.row1}>
            <Feather name="menu" size={24} color="#fff" />
            <Image
              style={styles.imgProfile}
              source={{
                uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
              }}
            />
          </View>
          <Text style={styles.txtWellcome}>Bem vindo(a),{"\n"}Usuário</Text>
        </LinearGradient>
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={styles.resumoSaldo}>
            <Text
              style={{
                color: "#3A3A3A",
                fontSize: 16,
                fontFamily: "Montserrat_400Regular",
              }}
            >
              Seu saldo total
            </Text>
            <Text
              style={{
                color: "#2d99ff",
                fontSize: 30,
                fontFamily: "Montserrat_700Bold",
              }}
            >
              R$ 8.500,00
            </Text>
          </View>
          <View style={styles.verifAccount}>
            <LinearGradient
              colors={["rgba(73,96,249,1)", "rgba(25,55,254,1)"]}
              style={styles.accountGradient}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 19,
                  fontFamily: "Montserrat_400Regular",
                }}
              >
                Verifique suas contas bancárias
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
  },
  headerGradient: {
    height: "30%",
    width: "100%",
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  imgProfile: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtWellcome: {
    color: "#ffffff",
    fontSize: 28,
    fontFamily: "Montserrat_400Regular",
  },
  resumoSaldo: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: "50%",
    top: -50,
    padding: 20,
    color: "#3A3A3A",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
  verifAccount: {
    width: "80%",
    height: "20%",
  },
  accountGradient: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
  },
});
