import { combineReducers } from "redux";
import locale from "./localeReducer";
import theme from "./themeReducer";
import products from "./productsReducer";
import cart from "./cartReducer";
import error from "./errorReducer";
import loading from "./loadingReducer";

export default combineReducers({
  locale,
  theme,
  products,
  cart,
  error,
  loading
});
