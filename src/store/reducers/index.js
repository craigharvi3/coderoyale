import { combineReducers } from "redux";
import podcasts from "./podcasts";
import snippets from "./snippets";
import user from "./user";
import ui from "./ui";
import collections from "./collections";

export default combineReducers({ podcasts, snippets, user, ui, collections });
