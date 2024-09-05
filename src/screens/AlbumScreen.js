import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import MasonryList from 'reanimated-masonry-list';

const images = [
  { id: 1, source: require('../assets/images/1.png') },
  { id: 2, source: require('../assets/images/money.jpg') },
  { id: 3, source: require('../assets/images/1.png') },
];

const GhimScreen = () => (
  <ScrollView style={styles.boardsContainer}>
    <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Tìm Ghim của bạn"
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
    </View>
    <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>↕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterTagText}>Nhóm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterTagText}>Bí mật</Text>
          </TouchableOpacity>
    </View>
    {renderBoard('uhn', 4, '22 giờ', 'https://example.com/path/to/your/image1.jpg')}
    {renderBoard('wtuj', 0, '22 giờ')}
    {renderBoard('ggg', 0, '1 ngày')}
    {renderBoard('kkkee', 0, '2 ngày')}
    {renderBoard('kkkk', 0, '2 ngày')}
  </ScrollView>
);

const BangScreen = () => (
  <ScrollView style={styles.boardsContainer}>
    <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Tìm bảng của bạn"
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
    </View>
    <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>↕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterTagText}>Yêu thích</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTag}>
            <Text style={styles.filterTagText}>Do bạn tạo ra</Text>
          </TouchableOpacity>
    </View>
    <View style={{ flexDirection:"row", height:200, gap: 2, }}>
      <View style={{flex:1}}>
        <Card imageSource={images[0].source}/>  
      </View> 
      <View style={{ flex: 1, gap:2}}>
        <Card imageSource={images[1].source}/>
        <Card imageSource={images[2].source}/>
      </View>  
    </View>
    <View style={styles.board}>
        <Text style={styles.boardTitle}>kai</Text>
        <Text style={styles.boardInfo}>4 ghim 2 ngày</Text>
    </View>
    <View style={{ flexDirection:"row", height:200, gap: 2, }}>
      <View style={{flex:1}}>
        <Card imageSource={images[0].source}/>  
      </View> 
      <View style={{ flex: 1, gap:2}}>
        <Card imageSource={images[1].source}/>
        <Card imageSource={images[2].source}/>
      </View>  
    </View>
    <View style={styles.board}>
        <Text style={styles.boardTitle}>kai</Text>
        <Text style={styles.boardInfo}>4 ghim 2 ngày</Text>
    </View>
  </ScrollView>
);

const Card = ({imageSource}) => {
  return (
    <View 
        style={{
          flex: 1,
          position: "relative",
          overflow:'hidden',
          borderRadius: 10
        }}
      >
        <Image 
          source={imageSource}
          resizeMode="cover"
          style={{
            position: "absolute",
            top:0,
            left:0,
            bottom:0,
            right:0,
          }}
          />
      </View> 
  )
}

const renderBoard = (title, pins, time, imageUrl) => (
  <View style={styles.board}>
    <View style={styles.boardImageContainer}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.boardImage} />}
    </View>
    <Text style={styles.boardTitle}>{title}</Text>
    <Text style={styles.boardInfo}>{pins} ghim {time}</Text>
  </View>
);

const App = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Ghim', title: 'Ghim' },
    { key: 'Bang', title: 'Bảng' },
  ]);

  const renderScene = SceneMap({
    Ghim: GhimScreen,
    Bang: BangScreen,
  });

  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileIcon}>
            <Text style={styles.profileInitial}>N</Text>
          </TouchableOpacity>
          <Icon name="settings" size={28} style={{ marginLeft: 15 }} />
        </View>
        
        
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={styles.tabView}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={styles.indicator}
              style={styles.tabBar}
              labelStyle={styles.tabLabel}
            />
          )}
        />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    justifyContent: 'space-between',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    height:40
  },
  addButton: {
    marginLeft: 16,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10
  },
  filterButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  filterButtonText: {
    fontSize: 18,
  },
  filterTag: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  filterTagText: {
    fontSize: 14,
    color: '#888',
  },
  boardsContainer: {
    flex: 1,
    padding: 16,
  },
  board: {
    marginBottom: 16,
  },
  boardImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  boardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  boardInfo: {
    color: '#888',
  },
  containerBoards: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image1: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  images23: {
    flexDirection: 'row',
    height: 120,
    marginTop: 16,
  },
  image2: {
    width: '50%',
    height: '100%',
    borderRadius: 8,
    marginRight: 8,
  },
  image3: {
    width: '50%',
    height: '100%',
    borderRadius: 8,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  tabLabel: {
    color: '#000',
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: '#000',
  },
});

export default App;
