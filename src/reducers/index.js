import { combineReducers } from "redux";
import locale from "./localeReducer";
import theme from "./themeReducer";
import products from "./productsReducer";
import cart from "./cartReducer";

export default combineReducers({
  locale,
  theme,
  products,
  cart
});
