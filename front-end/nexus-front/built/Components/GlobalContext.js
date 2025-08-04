"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalContext = exports.GlobalContextProvider = void 0;
exports.GlobalContext = GlobalContext;
var react_1 = require("react");
var react_router_1 = require("react-router");
;
exports.GlobalContextProvider = (0, react_1.createContext)({});
function GlobalContext() {
    return (<exports.GlobalContextProvider.Provider value={{}}>
      <react_router_1.Outlet />
    </exports.GlobalContextProvider.Provider>);
}
;
var useGlobalContext = function () { return (0, react_1.useContext)(exports.GlobalContextProvider); };
exports.useGlobalContext = useGlobalContext;
