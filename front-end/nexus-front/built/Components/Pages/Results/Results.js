"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = Results;
var react_1 = require("react");
var react_router_1 = require("react-router");
var Results_module_css_1 = require("./Results.module.css");
var react_2 = require("@phosphor-icons/react");
var user_img_png_1 = require("/imgs/user-img.png");
var project_image_1_png_1 = require("/imgs/project-image-1.png");
var project_image_2_png_1 = require("/imgs/project-image-2.png");
function Results() {
    var navigate = (0, react_router_1.useNavigate)();
    var _a = (0, react_1.useState)([
        {
            img: project_image_1_png_1.default,
            title: 'Nome completo do projeto 1',
            tags: [
                'Palavra-chave 1',
                'Palavra-chave 2',
                'Palavra-chave 3'
            ],
            authors: [user_img_png_1.default],
        },
        {
            img: project_image_2_png_1.default,
            title: 'Nome completo do projeto 2',
            tags: [
                'Palavra-chave 1',
                'Palavra-chave 2',
                'Palavra-chave 3',
                'Palavra-chave 4',
            ],
            authors: [user_img_png_1.default, user_img_png_1.default, user_img_png_1.default],
        },
    ]), resultsArr = _a[0], _ = _a[1];
    function handleProject() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                navigate('/inicio/projeto');
                return [2 /*return*/];
            });
        });
    }
    ;
    return (<div className={Results_module_css_1.default.container}>
      <div className={Results_module_css_1.default.wrapper}>
        <button className={Results_module_css_1.default.filter_bttn} type="button">
          <react_2.FunnelIcon /> Filtros
        </button>
        <div className={Results_module_css_1.default.search_input}>
          <react_2.MagnifyingGlassIcon />
          <input type="text" placeholder='Digite o nome ou tema relacionado ao projeto'/>
        </div>
      </div>
      <h4 className={Results_module_css_1.default.results_text}>
        2 resultados encontrados para “Projeto”
      </h4>
      <ul className={Results_module_css_1.default.results_table}>
        {resultsArr.map(function (result, i) { return (<li>
            <button className={Results_module_css_1.default.card} type="button" onClick={function () { return handleProject(); }}>
              <div className={Results_module_css_1.default.card_image} style={{ 'backgroundImage': "url(".concat(result.img, ")") }}></div>
              <div className={Results_module_css_1.default.card_description}>
                <span className={Results_module_css_1.default.card_title}>{result.title}</span>
                <div className={Results_module_css_1.default.card_tags}>
                  {result.tags.map(function (tag, j) { return (<span className={Results_module_css_1.default.tag} key={"tag-".concat(i, "-").concat(j)}>{tag}</span>); })}
                </div>
              </div>
              <div className={Results_module_css_1.default.card_autor}>
                {result.authors.map(function (author, k) { return (<img src={author} alt="Imagem de perfil do autor ou autores" key={"author-".concat(i, "-").concat(k)}/>); })}
              </div>
            </button>
          </li>); })}
      </ul>
    </div>);
}
;
