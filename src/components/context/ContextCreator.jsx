import { createContext } from "react";
import { productFormat } from "../../services/productFormat";

export const contextCreator = createContext([productFormat]);