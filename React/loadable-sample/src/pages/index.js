import withSplitting from "../withSplitting";
import Loadable from "react-loadable";

const Loading = () => {
  return <div>로딩중...</div>;
};

// export const Home = withSplitting(() => import("./Home"));
export const Home = Loadable({
  loader: () => import("./Home"),
  loading: Loading,
});
// export const About = withSplitting(() => import("./About"));
export const About = Loadable({
  loader: () => import("./About"),
  loading: Loading,
});
