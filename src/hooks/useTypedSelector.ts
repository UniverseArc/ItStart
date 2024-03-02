import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from 'react-redux';
import { RootState } from "../store/Reducers/rootReducer";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector