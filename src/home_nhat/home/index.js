import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import { hp } from "../../helpers/common";
import { ScrollView, Dimensions } from "react-native";
import ImageGrid from "../../components/imageGrid";
import { apiCall } from "../../api";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getAllListMediaHome } from "../../api/Profile/GetAllListMediaHome";
import { useSelector } from "react-redux";
const Home = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [networkTest, setNetworkTest] = useState(null);
  const Tab = createBottomTabNavigator();
  
  // useEffect(()=> {
  //     fetchImages();
  //     testNetwork();
  // }, []);

  // const fetchImages = async (params={page: 1}, append=true) => {
  //     let res = await apiCall(params);
  //     console.log('got result: ');
  //     // console.log("got result: ", res?.data?.data.hits[0]);
  //     if (res?.success && res?.data?.data.hits) {
  //         if (append)
  //             setImages([...images,...res?.data?.data.hits]);
  //         else
  //             setImages([...res?.data?.data.hits]);
  //     }
  //     // console.log("imagey: ",images);
  //     console.log("image.lenght: ",images.length);
  // }
  // const testNetwork = async () => {
  //   try {
  //     let response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos/1"
  //     );
  //     let json = await response.json();
  //     setNetworkTest(json);
  //     console.log("Network test success: ", json);
  //   } catch (error) {
  //     console.error("Network test failed: ", error);
  //   }
  // };
  // Function to load more images
  

  // Detect when the user has scrolled to the bottom
  const handleScroll = (event) => {
    const windowHeight = Dimensions.get("window").height,
      height = event.nativeEvent.contentSize.height,
      offset = event.nativeEvent.contentOffset.y;
    if (windowHeight + offset >= height && images.length >= page * 10) {
      // Load more images
      const nextPage = Number(page + 1);
      setPage(Number(page + 1));
      console.log("page_num: ", page);
      fetchListMedia(nextPage);
    }
  };

  useEffect(() => {
    fetchListMedia(page);
  }, []);

  const fetchListMedia = async (page, append = true) => {
    await getAllListMediaHome(page)
      .then((data) => {
        
        if (append) {
          setImages((prevImages) => [...prevImages, ...data.listMedia.data]);
        } else setImages([...data.listMedia.data]);
        console.log("data-image: ", images);
      })
      .catch((error) => {
        // console.error("hello" + error);
      });
  };

  

  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.startButton}>
          <Text style={styles.startText}>Dành cho bạn</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ gap: 15 }} onScroll={handleScroll}>
        {/* image masonry grid */}
        <View>{<ImageGrid images={images} />}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  startButton: {
    marginBottom: 15,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 35,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(2),
    fontWeight: theme.frontWeights.medium,
    // letterSpacing: 1,
  },
  bottomTab: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Home;
