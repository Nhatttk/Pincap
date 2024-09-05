import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/styles/ProfileStyles";

const Follow = ({ onHandlerFollow, countFollower, countFollowee }) => {
  return (
    <View style={styles.subtitle}>
      <TouchableOpacity
      onPress={() => {onHandlerFollow('followees')}}
        style={[styles.follow,{
          borderRightWidth: 1,
          paddingRight: 10
        }]}
      >
        <Text style={styles.textFollow}>{countFollower} </Text>
        <Text>Followers</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {onHandlerFollow('followers')}}
        style={[styles.follow,{
          marginLeft: 10
        }]}
      >
        <Text style={styles.textFollow}>{countFollowee}</Text>
        <Text>Followees</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Follow;
