import { combineReducers } from "@reduxjs/toolkit";
import getAllProducts from "./getAllProducts";
import getJewelery from "./getJewelery";
import getElectronics from "./getElectronics";
import getMenProducts from "./getMenProducts";
import getWomenProducts from "./getWomenProducts";
const rootReducers = combineReducers({
    getAllProducts,
    getJewelery,
    getElectronics,
    getMenProducts,
    getWomenProducts
})

export default rootReducers