"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Login = Login;
var react_router_1 = require("react-router");
var react_1 = require("react");
var axios_1 = require("axios");
var Login_module_css_1 = require("./Login.module.css");
var react_2 = require("@phosphor-icons/react");
var sweetalert2_1 = require("sweetalert2");
var google_icon_png_1 = require("/imgs/google-icon.png");
var brasao_ufpa_personalizado_png_1 = require("/imgs/brasao-ufpa-personalizado.png");
var nexus_logo_white_svg_1 = require("/logo-nexus/nexus-logo-white.svg");
var nexus_ilustracao_letra_n_svg_1 = require("/ilustracoes/nexus-ilustracao-letra-n.svg");
//import logo from '/logo-nexus/nexus-logo.svg';
var nexus_logotipo_svg_1 = require("/logo-nexus/nexus-logotipo.svg");
function Login() {
    var _this = this;
    var navigate = (0, react_router_1.useNavigate)();
    var _a = (0, react_1.useState)(true), changeForm = _a[0], setChangeForm = _a[1];
    var _b = (0, react_1.useState)(false), acceptedTerms = _b[0], setAcceptedTerms = _b[1];
    var _c = (0, react_1.useState)({
        name: "",
        email: "",
        password: "",
    }), formDataRegister = _c[0], setFormDataRegister = _c[1];
    var _d = (0, react_1.useState)({
        email: "",
        password: "",
    }), formDataLogin = _d[0], setFormDataLogin = _d[1];
    var _e = (0, react_1.useState)({}), validationErrors = _e[0], setValidationErrors = _e[1];
    var handleChange = function (e) {
        var _a, _b;
        if (changeForm) {
            setFormDataLogin(__assign(__assign({}, formDataRegister), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        }
        else {
            setFormDataRegister(__assign(__assign({}, formDataRegister), (_b = {}, _b[e.target.name] = e.target.value, _b)));
        }
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, token, error_1, responseData, response, responseData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!changeForm) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post("http://127.0.0.1:8000/api/login", formDataLogin)];
                case 2:
                    response = _a.sent();
                    token = response.data.authorisation.token;
                    localStorage.setItem("token", token);
                    sweetalert2_1.default.fire({
                        icon: "success",
                        title: "Login Successful",
                        text: "Welcome back!",
                    }).then(function () {
                        navigate("/dashboard");
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (error_1.response && error_1.response.status === 401) {
                        sweetalert2_1.default.fire({
                            icon: "error",
                            title: "Login Failed",
                            text: "Invalid email or password. Please try again.",
                        });
                    }
                    else {
                        responseData = error_1.response.data;
                        setValidationErrors(responseData);
                        if (responseData) {
                            setValidationErrors(responseData);
                        }
                        else {
                            sweetalert2_1.default.fire({
                                icon: "error",
                                title: "Error",
                                text: responseData || "Registration failed.",
                            });
                        }
                    }
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 11];
                case 5:
                    e.preventDefault();
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 9, , 10]);
                    return [4 /*yield*/, fetch("http://127.0.0.1:8000/api/signup", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formDataRegister),
                        })];
                case 7:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 8:
                    responseData = _a.sent();
                    if (response.ok) {
                        setValidationErrors({});
                        sweetalert2_1.default.fire({
                            icon: "success",
                            title: "Success",
                            text: responseData.message,
                        }).then(function () {
                            window.location.href = "/login";
                        });
                    }
                    else {
                        setValidationErrors(responseData);
                        if (responseData) {
                            setValidationErrors(responseData);
                        }
                        else {
                            sweetalert2_1.default.fire({
                                icon: "error",
                                title: "Error",
                                text: responseData || "Registration failed.",
                            });
                        }
                    }
                    return [3 /*break*/, 10];
                case 9:
                    error_2 = _a.sent();
                    sweetalert2_1.default.fire({
                        icon: "error",
                        title: "Error",
                        text: "An error occurred during registration.",
                    });
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
                case 11: return [2 /*return*/];
            }
        });
    }); };
    return (<div className={Login_module_css_1.default.container}>
      <section className={Login_module_css_1.default.illustration_wrapper}>
        <img className={Login_module_css_1.default.logo} src={nexus_logo_white_svg_1.default} alt="Logo da plataforma"/>
        <span className={Login_module_css_1.default.title}>
          Encontre todos os projetos desenvolvidos <br /> na FACOMP,{" "}
          <b>incluindo os seus!</b>
        </span>
        <a className={Login_module_css_1.default.link_ufpa} href="https://ufpa.br/" target="_blank">
          <img src={brasao_ufpa_personalizado_png_1.default} alt="Brasão da UFPA. Link para o site oficial da universidade"/>
        </a>
        <img className={Login_module_css_1.default.ilustracao1} src={nexus_ilustracao_letra_n_svg_1.default} alt="Ilustração"/>
        <img className={Login_module_css_1.default.ilustracao2} src={nexus_ilustracao_letra_n_svg_1.default} alt="Ilustração"/>
      </section>
      <section className={Login_module_css_1.default.form_wrapper}>
        <hr />
        <form className={Login_module_css_1.default.form} onSubmit={function (e) { return handleSubmit(e); }}>
          <img className={Login_module_css_1.default.form_logo} src={nexus_logotipo_svg_1.default} alt="Logo da plataforma"/>
          {changeForm && (<>
              <div className={Login_module_css_1.default.input}>
                <input type="text" placeholder="Email da conta" required/>
                <react_2.AtIcon />
              </div>
              <div className={Login_module_css_1.default.input}>
                <input type="password" placeholder="Senha" required/>
                <react_2.PasswordIcon />
                <button type="button">
                  <react_2.EyeIcon />
                </button>
              </div>
            </>)}
          {!changeForm && (<>
              <div className={Login_module_css_1.default.input}>
                <input type="text" onChange={function (e) { return handleChange(e); }} placeholder="Nome de usuário" required/>
                <react_2.UserIcon />
              </div>
              <div className={Login_module_css_1.default.input}>
                <input type="text" onChange={function (e) { return handleChange(e); }} placeholder="Email institucional" required/>
                <react_2.AtIcon />
              </div>
              <div className={Login_module_css_1.default.input}>
                <input type="password" onChange={function (e) { return handleChange(e); }} placeholder="Senha" required/>
                <react_2.PasswordIcon />
                <button type="button">
                  <react_2.EyeIcon />
                </button>
              </div>
              <div className={Login_module_css_1.default.input}>
                <input type="password" onChange={function (e) { return handleChange(e); }} placeholder="Confirmar senha" required/>
                <react_2.PasswordIcon />
                <button type="button">
                  <react_2.EyeIcon />
                </button>
              </div>

              <div className={Login_module_css_1.default.agree_terms}>
                <button className={"".concat(Login_module_css_1.default.agree_bttn, " ").concat(acceptedTerms ? Login_module_css_1.default.active : "")} type="button" onClick={function () { return setAcceptedTerms(!acceptedTerms); }}></button>
                <span className={Login_module_css_1.default.agree_text}>
                  Ao criar sua conta, você concorda com nossos{" "}
                  <button type="button">termos de uso</button> e{" "}
                  <button type="button">política de privacidade</button>
                </span>
              </div>
            </>)}
          <hr className={Login_module_css_1.default.line}/>
          {changeForm && (<>
              <button className={Login_module_css_1.default.login_social} type="button">
                <img src={google_icon_png_1.default} alt="Ícone do Google"/>
                Login com Google
              </button>
              <button className={Login_module_css_1.default.sign_in_bttn} type="button" onClick={function () { return navigate("/inicio"); }}>
                Fazer login
              </button>
            </>)}
          {!changeForm && (<button className={"".concat(Login_module_css_1.default.create_account_bttn, " ").concat(acceptedTerms ? Login_module_css_1.default.active : "")} type="button" disabled={!acceptedTerms} onClick={function () { return navigate("/inicio"); }}>
              Criar conta
            </button>)}
        </form>
        <div className={Login_module_css_1.default.change_form}>
          <span>
            {changeForm ? "Ainda não possui conta?" : "Já possui uma conta?"}
          </span>
          <button type="button" onClick={function () { return setChangeForm(!changeForm); }}>
            {changeForm ? "Crie agora de forma fácil" : "Faça o seu login"}
          </button>
        </div>
      </section>
    </div>);
}
