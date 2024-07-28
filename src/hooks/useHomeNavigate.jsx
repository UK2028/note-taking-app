import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNotesFromState } from "../utils/utils";
import { setPage, setSearchTerm } from "../redux/slice/noteSlice";

export const useHomeNavigate = () => {
  const navigate = useNavigate();
  const { page, searchTerm } = useSelector(getNotesFromState);
  const dispatch = useDispatch();

  const handleNavigate = () => {
    if (searchTerm !== "") dispatch(setSearchTerm(""));
    if(page!==1) dispatch(setPage(1));
    navigate("/?page=1&query=");
  };

  return handleNavigate;
};
