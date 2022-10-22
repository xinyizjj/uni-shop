(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/web-view/web-view"],{

/***/ 270:
/*!*************************************************************************************!*\
  !*** D:/weixin/uni-shop/main.js?{"page":"pages%2Fcomponent%2Fweb-view%2Fweb-view"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);

__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 6);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _webView = _interopRequireDefault(__webpack_require__(/*! ./pages/component/web-view/web-view.vue */ 271));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_webView.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 271:
/*!****************************************************************!*\
  !*** D:/weixin/uni-shop/pages/component/web-view/web-view.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-view.vue?vue&type=template&id=1de195f4& */ 272);
/* harmony import */ var _web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-view.vue?vue&type=script&lang=js& */ 274);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 23);

var renderjs




/* normalize component */

var component = Object(_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/component/web-view/web-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 272:
/*!***********************************************************************************************!*\
  !*** D:/weixin/uni-shop/pages/component/web-view/web-view.vue?vue&type=template&id=1de195f4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./web-view.vue?vue&type=template&id=1de195f4& */ 273);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_template_id_1de195f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 273:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/weixin/uni-shop/pages/component/web-view/web-view.vue?vue&type=template&id=1de195f4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 274:
/*!*****************************************************************************************!*\
  !*** D:/weixin/uni-shop/pages/component/web-view/web-view.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../JAVA/tools/HBuilder/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./web-view.vue?vue&type=script&lang=js& */ 275);
/* harmony import */ var _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JAVA_tools_HBuilder_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_web_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 275:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/weixin/uni-shop/pages/component/web-view/web-view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      url: 'https://uniapp.dcloud.io/static/web-view.html' };

  },
  onLoad: function onLoad(options) {
    if (options && options.url) {
      this.url = options.url;
    }
  },
  methods: {
    getMessage: function getMessage(event) {
      uni.showModal({
        content: JSON.stringify(event.detail),
        showCancel: false });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[270,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/component/web-view/web-view.js.map