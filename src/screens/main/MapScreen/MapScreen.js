import MainView from "../../../module/MainView/MainView";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import {
  selectPosts,
  selectCurrentPostId,
} from "../../../redux/posts/postsSelectors";

const MapScreen = ({ route, navigation }) => {
  const currentPostId = useSelector(selectCurrentPostId);
  const { posts } = useSelector(selectPosts);
  const {
    image: { coordinates },
  } = posts.find((post) => post.id === currentPostId);

  return (
    <MainView route={route} navigation={navigation}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            ...coordinates,
          }}
        />
      </MapView>
    </MainView>
  );
};

export default MapScreen;
