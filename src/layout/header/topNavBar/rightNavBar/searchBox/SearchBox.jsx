import { propTypes, string } from "prop-types";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import {Search,SearchIconWrapper,StyledInputBase} from "./SearchComponents";
import SearchIcon from '@mui/icons-material/Search';
import ROUTES from "../../../../../routes/routesModel";

export default function SearchBox({pathName}) {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleChange = ({target}) => {

    navigate({pathname: pathName,search: createSearchParams({t: target.value}).toString()},{replace: true});
    
  }

return    (<Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchParams.get("t") || ""}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>);
}

SearchBox.propTypes = {
  pathName: string.isRequired,
}