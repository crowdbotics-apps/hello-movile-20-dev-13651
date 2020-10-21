import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { CheckBox_3: true, CheckBox_5: true }

  render = () => (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen112921")}
      >
        <CheckBox
          title="Checkbox"
          checked={this.state.CheckBox_3}
          onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen112921")}
      >
        <CheckBox
          title="Radio button"
          checked={this.state.CheckBox_5}
          onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  CheckBox_3: {},
  CheckBox_5: {},
  View_1: {},
  CheckBox_3: {},
  CheckBox_5: {},
  View_1: {},
  CheckBox_3: {},
  CheckBox_5: {}
})
