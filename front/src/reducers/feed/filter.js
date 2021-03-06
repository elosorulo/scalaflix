import { MOST_VIEWED, SET_CURRENT_FILTER}  from '../../constants/feed/FilterMenu'
import {setCurrentFilter} from "../../actions/feed/FilterMenu";
const filter = (
    state = MOST_VIEWED,
    action
) => {
    switch (action.type) {
        case SET_CURRENT_FILTER:
            console.log("Setting filter to " + action.filter);
            return action.filter;
        default:
            return state;
    }
};

export default filter;
