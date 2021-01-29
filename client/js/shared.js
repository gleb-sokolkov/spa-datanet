import "bootstrap.native/dist/bootstrap-native";

function importAll(r) {
    return r.keys().map(r);
}
  
  const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

import "../styles/site.scss";