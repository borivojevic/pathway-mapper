module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("autobind-decorator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cytoscape");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ACC-2016-TP53-RB-pathway\":[\"ACC-2016-TP53-RB-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDK4\\twyMGXBw8cUj6\\tGENE\\t-1\\t262\\t231\\t\",\"RB1\\tLrJe2ktmcVzK\\tGENE\\t-1\\t262\\t340\\t\",\"CDKN2A\\tN18olkvEcUJu\\tGENE\\t-1\\t387\\t127\\t\",\"TP53\\t-VLZ5keBcXa3\\tGENE\\t-1\\t488\\t340\\t\",\"MDM2\\t79evo3OUcVFA\\tGENE\\t-1\\t488\\t231\\t\",\"CCNE1\\t-le5m2j6cWa2\\tGENE\\t-1\\t80\\t340\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"d3auWK_1cit5\\t79evo3OUcVFA\\t-VLZ5keBcXa3\\tINHIBITS\",\"w4Yp60k9chhi\\tN18olkvEcUJu\\t79evo3OUcVFA\\tINHIBITS\",\"XhRgnqAscgwV\\tN18olkvEcUJu\\twyMGXBw8cUj6\\tINHIBITS\",\"0E_Xe1cUckq-\\twyMGXBw8cUj6\\tLrJe2ktmcVzK\\tINHIBITS\",\"K9h1lRMzclc1\\t-le5m2j6cWa2\\tLrJe2ktmcVzK\\tINHIBITS\"],\"ACC-2016-WNT-signaling-pathway\":[\"ACC-2016-WNT-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CTNNB1\\taS-MtgKvdBTI\\tGENE\\t-1\\t396\\t371\\t\",\"MEN1\\tWoDJQ15LdCGw\\tGENE\\t-1\\t615\\t371\\t\",\"APC\\tquRewaVqdAAg\\tGENE\\t-1\\t396\\t277\\t\",\"WNT\\tg2oPjTN1c_MF\\tFAMILY\\t-1\\t396\\t183\\t\",\"ZNRF3\\tD1VT3C7Tc9uz\\tGENE\\t-1\\t396\\t87\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"mcDc9E8ddKPh\\tWoDJQ15LdCGw\\taS-MtgKvdBTI\\tINHIBITS\",\"xhr-qCdhdMnS\\tg2oPjTN1c_MF\\tquRewaVqdAAg\\tINHIBITS\",\"MRNaHfmqdLIB\\tquRewaVqdAAg\\taS-MtgKvdBTI\\tINHIBITS\",\"V58DLRlddN04\\tD1VT3C7Tc9uz\\tg2oPjTN1c_MF\\tINHIBITS\"],\"BLCA-2014-Histone-modification-pathway\":[\"BLCA-2014-Histone-modification-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KDM1A\\tibAwJma20izY\\tGENE\\t-1\\t330\\t280\\t\",\"K9 (Ac, me1-3)\\tUdMq7kedz9FO\\tPROCESS\\t-1\\t441\\t185\\t\",\"K4 (me1-3)\\t6Itl25k-0F3S\\tPROCESS\\t-1\\t214\\t185\\t\",\"KDM6B\\tKGmluEtPHXqp\\tGENE\\t_aOp5kW01GfD\\t685\\t332\\t\",\"KDM4B\\t5_51HfxoHY9n\\tGENE\\tWWAQi_-h1FbJ\\t500\\t329\\t\",\"H3\\t_L15u0RJ0Eq5\\tPROCESS\\t-1\\t1128\\t185\\t\",\"K36 (me1-3)\\tyE8mFlUU0AcJ\\tPROCESS\\t-1\\t785\\t185\\t\",\"KDM1B\\tf-uYX8eW0o-j\\tGENE\\t-1\\t330\\t338\\t\",\"K27 (Ac, me1-3)\\tqU2DuUfoz_fU\\tPROCESS\\t-1\\t612\\t185\\t\",\"K79 (me1-3)\\tsGOXj0dB0CoY\\tPROCESS\\t-1\\t945\\t185\\t\",\"KDM4A\\tZN4FWAEl0yGP\\tGENE\\t-1\\t859\\t280\\t\",\"KDM5B\\t2NfOJGRNHYQB\\tGENE\\tNnEeq-Df1E_j\\t151\\t333\\t\",\"KDM4A\\tw2_Nlv2xHY9d\\tGENE\\tWWAQi_-h1FbJ\\t500\\t280\\t\",\"Demethylases\\tHX269Het1CgI\\tPROCESS\\t-1\\t1107\\t280\\t\",\"KDM4A-KDM4B\\tWWAQi_-h1FbJ\\tCOMPARTMENT\\t-1\\t500\\t304\\t\",\"KDM5A-KDM5B\\tNnEeq-Df1E_j\\tCOMPARTMENT\\t-1\\t151\\t306\\t\",\"KDM6A\\ttsbexFtHHXqU\\tGENE\\t_aOp5kW01GfD\\t685\\t280\\t\",\"KDM5A\\tZGtryZF-HYPy\\tGENE\\tNnEeq-Df1E_j\\t151\\t280\\t\",\"KDM6A-KDM6B\\t_aOp5kW01GfD\\tCOMPARTMENT\\t-1\\t685\\t306\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"QFzccFLP1rXn\\tUdMq7kedz9FO\\tqU2DuUfoz_fU\\tBINDS\",\"1iLfbX2611ie\\tsGOXj0dB0CoY\\t_L15u0RJ0Eq5\\tBINDS\",\"KtQPDuFH2B4M\\tNnEeq-Df1E_j\\t6Itl25k-0F3S\\tACTIVATES\",\"1ufB4tsp2MbY\\tZN4FWAEl0yGP\\tyE8mFlUU0AcJ\\tACTIVATES\",\"F6Hoq3VR2Fbi\\tibAwJma20izY\\t6Itl25k-0F3S\\tACTIVATES\",\"c5Dw1pvh2GJ7\\tibAwJma20izY\\tUdMq7kedz9FO\\tACTIVATES\",\"B85D8ro61xLn\\tyE8mFlUU0AcJ\\tsGOXj0dB0CoY\\tBINDS\",\"e_aGaIGw1pWA\\t6Itl25k-0F3S\\tUdMq7kedz9FO\\tBINDS\",\"EVjpyavJ2DfI\\tf-uYX8eW0o-j\\t6Itl25k-0F3S\\tACTIVATES\",\"f0P9R0dZ2J5O\\t_aOp5kW01GfD\\tqU2DuUfoz_fU\\tACTIVATES\",\"g_eFQ6zG2Hu-\\tWWAQi_-h1FbJ\\tUdMq7kedz9FO\\tACTIVATES\",\"T1GuzceK1uZK\\tqU2DuUfoz_fU\\tyE8mFlUU0AcJ\\tBINDS\"],\"BLCA-2014-RTK-RAS-PI(3)K-pathway\":[\"BLCA-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"ERBB2\\taqgx5yiY4na1\\tGENE\\tG_Vyif7SpoW2\\t584\\t98\\t\",\"NRAS\\tAbEoLGCY4sp9\\tGENE\\tydhBmSAbpTKc\\t476\\t183\\t\",\"TSC2\\tUD1lE2yO48n8\\tGENE\\t2_7tyoaRphSY\\t503\\t496\\t\",\"PIK3CA\\ts5486n5gpU_K\\tGENE\\t-1\\t658\\t184\\t\",\"PTEN\\ttiSgM3o0pX_z\\tGENE\\t-1\\t860\\t184\\t\",\"FGFR3\\t5yUJdgCL4naU\\tGENE\\tG_Vyif7SpoW2\\t272\\t98\\t\",\"Survival\\tt8b0oOIypis0\\tPROCESS\\t-1\\t791\\t584\\t\",\"HRAS\\tLtxngbVT4spa\\tGENE\\tydhBmSAbpTKc\\t322\\t183\\t\",\"RAS\\tG_Vyif7SpoW2\\tFAMILY\\t-1\\t506\\t98\\t\",\"STK11\\t8wk4zb43pfsu\\tGENE\\t-1\\t317\\t469\\t\",\"INPP4B\\tlGy7ILYwpZag\\tGENE\\t-1\\t804\\t266\\t\",\"MTOR\\tVyT8z_EcpexB\\tGENE\\t-1\\t722\\t470\\t\",\"TSC\\t2_7tyoaRphSY\\tFAMILY\\t-1\\t503\\t470\\t\",\"Proliferation\\t1PYLl_CZpjUH\\tPROCESS\\t-1\\t665\\t584\\t\",\"EGFR\\tMO1TWgRb4nbC\\tGENE\\tG_Vyif7SpoW2\\t429\\t98\\t\",\"RAS\\tydhBmSAbpTKc\\tFAMILY\\t-1\\t399\\t183\\t\",\"AKT\\tEuvUiqD6pbqL\\tGENE\\t-1\\t659\\t349\\t\",\"TSC1\\tlj3YtBzu48oT\\tGENE\\t2_7tyoaRphSY\\t503\\t444\\t\",\"ERBB3\\tSUuAzaJ-4nar\\tGENE\\tG_Vyif7SpoW2\\t739\\t98\\t\",\"NF1\\tevdrZPc3pW-g\\tGENE\\t-1\\t399\\t270\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"arJi2bQrqEdS\\tevdrZPc3pW-g\\tydhBmSAbpTKc\\tINHIBITS\",\"F1IgAgZPppxS\\tG_Vyif7SpoW2\\tydhBmSAbpTKc\\tACTIVATES\",\"OqD_HmKHqQIw\\tEuvUiqD6pbqL\\t2_7tyoaRphSY\\tINHIBITS\",\"PY7KfKiCqL9D\\tlGy7ILYwpZag\\ts5486n5gpU_K\\tINHIBITS\",\"0PkuH29SqKeN\\ttiSgM3o0pX_z\\ts5486n5gpU_K\\tINHIBITS\",\"zNMzC5CMqORJ\\ts5486n5gpU_K\\tEuvUiqD6pbqL\\tACTIVATES\",\"UB7BIf_SqRqo\\t2_7tyoaRphSY\\tVyT8z_EcpexB\\tINHIBITS\",\"OQI-iqX2qTLl\\t8wk4zb43pfsu\\t2_7tyoaRphSY\\tACTIVATES\",\"9Vm-zOAgqGbc\\tydhBmSAbpTKc\\ts5486n5gpU_K\\tACTIVATES\",\"uN421vA1qaeA\\tVyT8z_EcpexB\\tt8b0oOIypis0\\tACTIVATES\",\"ZTgU7FgfqZmN\\tVyT8z_EcpexB\\t1PYLl_CZpjUH\\tACTIVATES\"],\"BLCA-2014-TP53-RB-pathway\":[\"BLCA-2014-TP53-RB-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Cell cycle progression\\tok7nDiB9oQJI\\tPROCESS\\t-1\\t414\\t436\\t\",\"CCNE1\\thm8HJrbqoWfo\\tGENE\\t-1\\t414\\t353\\t\",\"TP53\\tJYRUofjRoSmI\\tGENE\\t-1\\t605\\t179\\t\",\"MDM2\\t2XKi6b0joGD_\\tGENE\\t-1\\t413\\t179\\t\",\"E2F3\\tmz71J5tHoOtX\\tGENE\\t-1\\t219\\t436\\t\",\"Apoptosis\\t4-9gyc8LoX1s\\tPROCESS\\t-1\\t689\\t264\\t\",\"CDKN2A\\t9A-DhP0-oFUi\\tGENE\\t-1\\t219\\t179\\t\",\"CCND1\\tCsMIDjOQoHLw\\tGENE\\t-1\\t219\\t264\\t\",\"FBXW7\\tmULNbFKfoZFg\\tGENE\\t-1\\t625\\t353\\t\",\"ATM\\tjsI1OPG9oTvl\\tGENE\\t-1\\t605\\t85\\t\",\"CDKN1A\\tmBClqwIZoU7d\\tGENE\\t-1\\t526\\t264\\t\",\"RB1\\t-ACCNJRfoNBI\\tFAMILY\\t-1\\t219\\t353\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"B1RLlLrEo4cn\\tmz71J5tHoOtX\\tok7nDiB9oQJI\\tACTIVATES\",\"As7hIoBSo17y\\tCsMIDjOQoHLw\\t-ACCNJRfoNBI\\tINHIBITS\",\"mjgKjVX6ow0m\\t2XKi6b0joGD_\\tJYRUofjRoSmI\\tINHIBITS\",\"5BaXTZDuo7H8\\tmULNbFKfoZFg\\thm8HJrbqoWfo\\tINHIBITS\",\"PMdhVppIoyDR\\tJYRUofjRoSmI\\tmBClqwIZoU7d\\tACTIVATES\",\"w2p9WUJxo22X\\t-ACCNJRfoNBI\\tmz71J5tHoOtX\\tINHIBITS\",\"0hmD92TIo0ux\\t9A-DhP0-oFUi\\tCsMIDjOQoHLw\\tINHIBITS\",\"RfMPHF4FouzT\\tjsI1OPG9oTvl\\tJYRUofjRoSmI\\tACTIVATES\",\"toSMm4K7owET\\tJYRUofjRoSmI\\t2XKi6b0joGD_\\tACTIVATES\",\"LPb5J4Quo8EC\\tmBClqwIZoU7d\\thm8HJrbqoWfo\\tINHIBITS\",\"_PGdKZ50o5vL\\thm8HJrbqoWfo\\t-ACCNJRfoNBI\\tINHIBITS\",\"Vcmxazyaoz8N\\t9A-DhP0-oFUi\\t2XKi6b0joGD_\\tINHIBITS\",\"sABkuA1_oywi\\tJYRUofjRoSmI\\t4-9gyc8LoX1s\\tACTIVATES\"],\"BRCA-2012-Cell-cycle-signaling-pathway\":[\"BRCA-2012-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"BRCA2\\tVHmofL2iBtHB\\tGENE\\t9ZypvHQTebqG\\t302\\t521\\t\",\"p53/p21\\tK8vhHZlJewmz\\tPROCESS\\t-1\\t16\\t368\\t\",\"Cell-cycle arrest\\trsfgLtPJBro0\\tPROCESS\\tPve6lcOCerP2\\t518\\t505\\t\",\"BRCA1\\tPqa6yIQ4BtGs\\tGENE\\t9ZypvHQTebqG\\t145\\t521\\t\",\"ATM\\tTQqdq6ZHdybO\\tGENE\\t-1\\t-54\\t427\\t\",\"S/G2/M checkpoints\\teokFGf8gBroW\\tPROCESS\\tPve6lcOCerP2\\t518\\t452\\t\",\"S-phase entry\\tplt5oIp7Broo\\tPROCESS\\tPve6lcOCerP2\\t518\\t401\\t\",\"Cell cycle\\tPve6lcOCerP2\\tFAMILY\\t-1\\t518\\t453\\t\",\"RB1\\tCequZQzRd8SZ\\tGENE\\t-1\\t321\\t329\\t\",\"BRCA\\t9ZypvHQTebqG\\tFAMILY\\t-1\\t223\\t521\\t\",\"CCNE1\\tglg_i-QQdz9z\\tGENE\\t-1\\t133\\t329\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"GjwkZT93eu2S\\tCequZQzRd8SZ\\tPve6lcOCerP2\\tACTIVATES\",\"vbkfiLK9etui\\t9ZypvHQTebqG\\tPve6lcOCerP2\\tACTIVATES\",\"dQvMCZFxeWIc\\tglg_i-QQdz9z\\tCequZQzRd8SZ\\tINHIBITS\",\"OyM7Rh_ueTR2\\tTQqdq6ZHdybO\\tglg_i-QQdz9z\\tINHIBITS\",\"fcvz9ztueiRb\\tTQqdq6ZHdybO\\t9ZypvHQTebqG\\tACTIVATES\"],\"BRCA-2012-RTK-RAS-PI(3)K-pathway\":[\"BRCA-2012-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PIK3R1\\tLTI-_zA12M8_\\tGENE\\tQl_rV6PWbR4f\\t561\\t293\\t\",\"MAP3K1\\tV2U7rAinbMri\\tGENE\\t-1\\t803\\t220\\t\",\"IKBKB\\tv5be8J7cbT7P\\tGENE\\t-1\\t812\\t416\\t\",\"AKT1\\t2eyyNjOs2P7t\\tGENE\\tb8_iWiV3bSnI\\t738\\t293\\t\",\"PI3K\\tQl_rV6PWbR4f\\tFAMILY\\t-1\\t481\\t293\\t\",\"NF-kB\\tf-dza7Cyd34R\\tPROCESS\\t-1\\t940\\t406\\t\",\"PTEN\\tvmp2PR9WbESK\\tGENE\\t-1\\t480\\t218\\t\",\"Proliferation\\tQgBC5rX5baS9\\tPROCESS\\t-1\\t1277\\t416\\t\",\"MAP2K4\\thDh8Gi4cbOJg\\tGENE\\t-1\\t1075\\t220\\t\",\"ERBB2\\tkuccSffw2Nzs\\tGENE\\tTi_1UFukcA6d\\t205\\t220\\t\",\"PIK3CA\\tj3qYklwW2M9a\\tGENE\\tQl_rV6PWbR4f\\t402\\t293\\t\",\"AKT3\\tpH6LKha-2P8C\\tGENE\\tb8_iWiV3bSnI\\t897\\t293\\t\",\"PAK1\\tVjIN5hOKbQmQ\\tGENE\\t-1\\t480\\t416\\t\",\"AKT\\tb8_iWiV3bSnI\\tFAMILY\\t-1\\t818\\t293\\t\",\"CCND1\\tPKgbIo4AbVyY\\tGENE\\t-1\\t1084\\t416\\t\",\"RTK\\tTi_1UFukcA6d\\tFAMILY\\t-1\\t205\\t292\\t\",\"JNK/JUN Mediated Apoptosis\\t-MmWzJ2DbXrO\\tPROCESS\\t-1\\t1300\\t211\\t\",\"IGF1R\\tL4qe8zf82Nz8\\tGENE\\tTi_1UFukcA6d\\t205\\t293\\t\",\"EGFR\\tq9k-_XR32Nze\\tGENE\\tTi_1UFukcA6d\\t205\\t364\\t\",\"Evading apoptosis\\tg1G4oW6RbY6F\\tPROCESS\\t-1\\t1274\\t293\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"fhs_9IT6cUqw\\tb8_iWiV3bSnI\\tg1G4oW6RbY6F\\tACTIVATES\",\"teIhB-fucGLJ\\tVjIN5hOKbQmQ\\tb8_iWiV3bSnI\\tACTIVATES\",\"huxShVp3cIQO\\tQl_rV6PWbR4f\\tb8_iWiV3bSnI\\tACTIVATES\",\"WtHX5Q0hcXDM\\tPKgbIo4AbVyY\\tQgBC5rX5baS9\\tACTIVATES\",\"wAq3PQHjcaoH\\tb8_iWiV3bSnI\\tv5be8J7cbT7P\\tACTIVATES\",\"HE2KQFFscPqE\\thDh8Gi4cbOJg\\tPKgbIo4AbVyY\\tACTIVATES\",\"kzZuvBjdcQut\\tPKgbIo4AbVyY\\thDh8Gi4cbOJg\\tINHIBITS\",\"R6qp66fdcDsp\\tTi_1UFukcA6d\\tQl_rV6PWbR4f\\tACTIVATES\",\"8xgflgJ1cSju\\tv5be8J7cbT7P\\tPKgbIo4AbVyY\\tACTIVATES\",\"i-Pphq4BcWBa\\tb8_iWiV3bSnI\\tQgBC5rX5baS9\\tACTIVATES\",\"4s_OHeX4cTjW\\thDh8Gi4cbOJg\\t-MmWzJ2DbXrO\\tACTIVATES\",\"fegnTqNPcJpy\\tV2U7rAinbMri\\thDh8Gi4cbOJg\\tACTIVATES\",\"tj1nKgy9cExZ\\tvmp2PR9WbESK\\tQl_rV6PWbR4f\\tINHIBITS\"],\"BRCA-2012-TP53-pathway\":[\"BRCA-2012-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP53\\tAtC08ZQJc2KU\\tGENE\\t-1\\t491\\t349\\t\",\"Apoptosis\\toHj1iu9Nc3_k\\tPROCESS\\t-1\\t491\\t453\\t\",\"MDM4\\teUAyFKEv_rSt\\tGENE\\tY4IgKFahc81t\\t690\\t375\\t\",\"MDM2\\tEDekyeJO_rSa\\tGENE\\tY4IgKFahc81t\\t690\\t319\\t\",\"AKT1\\tnWtQqBkt_evA\\tGENE\\t-1\\t491\\t245\\t\",\"CHEK2\\tEZw1mFjYc0Pb\\tGENE\\t-1\\t300\\t350\\t\",\"MDM\\tY4IgKFahc81t\\tFAMILY\\t-1\\t690\\t347\\t\",\"ATM\\tDEtr5Wpj_eup\\tGENE\\t-1\\t300\\t245\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"EQR_Azwj_evL\\tDEtr5Wpj_eup\\tEZw1mFjYc0Pb\\tACTIVATES\",\"sV9ZEeJ9dMg3\\tY4IgKFahc81t\\tAtC08ZQJc2KU\\tINHIBITS\",\"kudrU-U-_evP\\tnWtQqBkt_evA\\tAtC08ZQJc2KU\\tINHIBITS\",\"hxwMi4kydOBT\\tAtC08ZQJc2KU\\toHj1iu9Nc3_k\\tACTIVATES\",\"uh5qfjUjdKB7\\tEZw1mFjYc0Pb\\tAtC08ZQJc2KU\\tACTIVATES\"],\"Cell Cycle\":[\"Cell Cycle\",\"\",\"Regulation of mitotic cell cycle progression involving a signaling cascade of cyclins and cyclin-dependent kinases as well as a number of regulatory checkpoints.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MDM2\\txPwjUPwi3Y86\\tGENE\\t-1\\t413\\t179\",\"CDKN1A\\tFQbPaPlV3Y9Q\\tGENE\\t-1\\t526\\t264\",\"FBXW7\\t_Honmyd33Y9K\\tGENE\\t-1\\t625\\t353\",\"CCND1\\tKf3hsGsT3Y9F\\tGENE\\t-1\\t219\\t264\",\"Cell cycle progression\\tyazwmMvz3Y8y\\tPROCESS\\t-1\\t414\\t436\",\"CCNE1\\t4-ZVTw8b3Y81\\tGENE\\t-1\\t414\\t353\",\"Apoptosis\\tSwnDUEnB3Y8_\\tPROCESS\\t-1\\t689\\t264\",\"RB1\\tAFGazwPj3Y9U\\tFAMILY\\t-1\\t219\\t353\",\"E2F3\\tb7YoPaEx3Y88\\tGENE\\t-1\\t219\\t436\",\"CDKN2A\\tE6EgzvEy3Y9C\\tGENE\\t-1\\t219\\t179\",\"TP53\\tmIL53nP63Y83\\tGENE\\t-1\\t605\\t179\",\"ATM\\t4fc8CUod3Y9N\\tGENE\\t-1\\t605\\t85\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"3H557euy3Y9b\\t_Honmyd33Y9K\\t4-ZVTw8b3Y81\\tINHIBITS\\t\",\"rC-lNx0W3Y9d\\tAFGazwPj3Y9U\\tb7YoPaEx3Y88\\tINHIBITS\\t\",\"Qm2ZEnCl3Y9Z\\tKf3hsGsT3Y9F\\tAFGazwPj3Y9U\\tINHIBITS\\t\",\"pPO3_YVM3Y9e\\tE6EgzvEy3Y9C\\tKf3hsGsT3Y9F\\tINHIBITS\\t\",\"pGNnucwd3Y9g\\tmIL53nP63Y83\\txPwjUPwi3Y86\\tACTIVATES\\t\",\"ygTYWu2k3Y9k\\tE6EgzvEy3Y9C\\txPwjUPwi3Y86\\tINHIBITS\\t\",\"tq-BTuks3Y9i\\tFQbPaPlV3Y9Q\\t4-ZVTw8b3Y81\\tINHIBITS\\t\",\"HPSR11Er3Y9b\\tmIL53nP63Y83\\tFQbPaPlV3Y9Q\\tACTIVATES\\t\",\"h7AyF28j3Y9n\\tmIL53nP63Y83\\tSwnDUEnB3Y8_\\tACTIVATES\\t\",\"vYHEvpqL3Y9f\\t4fc8CUod3Y9N\\tmIL53nP63Y83\\tACTIVATES\\t\",\"4ELiZPT23Y9j\\t4-ZVTw8b3Y81\\tAFGazwPj3Y9U\\tINHIBITS\\t\",\"jDEpTZhK3Y9X\\tb7YoPaEx3Y88\\tyazwmMvz3Y8y\\tACTIVATES\\t\",\"_gVnliZV3Y9a\\txPwjUPwi3Y86\\tmIL53nP63Y83\\tINHIBITS\\t\"],\"COADREAD-2012-RTK-RAS-PI(3)K-pathway\":[\"COADREAD-2012-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"IRS2\\tZvdL-fZM3WuZ\\tGENE\\t-1\\t189\\t452\\t\",\"PIK3CA\\tMBUXnNN2z5Dt\\tGENE\\taDGGPsUl3doC\\t189\\t525\\t\",\"KRAS\\trKR_2SY2z0N3\\tGENE\\tD6EmJIZx6Gzg\\t555\\t462\\t\",\"ERBB2\\tStF--npjzyS_\\tGENE\\tjs1qiakd6GP4\\t404\\t298\\t\",\"IGF2\\tWv-EmNFT15yN\\tGENE\\t-1\\t189\\t298\\t\",\"PI3K\\taDGGPsUl3doC\\tFAMILY\\t-1\\t110\\t526\\t\",\"BRAF\\tPUJ8AKki53pG\\tGENE\\t-1\\t479\\t549\\t\",\"NRAS\\t8s1jKwvjz0Nm\\tGENE\\tD6EmJIZx6Gzg\\t406\\t462\\t\",\"Cell survival\\t1UmcnGh24P6f\\tPROCESS\\t-1\\t323\\t697\\t\",\"ERBB3\\tdg3Vl9qGzyTZ\\tGENE\\tjs1qiakd6GP4\\t556\\t300\\t\",\"IGF1R\\tcYzz8jlS2HaK\\tGENE\\t-1\\t189\\t380\\t\",\"RAS\\tD6EmJIZx6Gzg\\tFAMILY\\t-1\\t480\\t462\\t\",\"PIK3R1\\to9hOOpRM0I1T\\tGENE\\taDGGPsUl3doC\\t32\\t527\\t\",\"RTK\\tjs1qiakd6GP4\\tFAMILY\\t-1\\t480\\t299\\t\",\"Translation\\tRmlBMHs64SgD\\tPROCESS\\t-1\\t478\\t696\\t\",\"Proliferation\\trlRx40Am4Oyw\\tPROCESS\\t-1\\t164\\t697\\t\",\"PTEN\\ttSZugv-P3gVw\\tGENE\\t-1\\t29\\t452\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"6Shu_O4w4GqO\\tcYzz8jlS2HaK\\tZvdL-fZM3WuZ\\tACTIVATES\",\"kgTzvfUL0djR\\tMBUXnNN2z5Dt\\tRmlBMHs64SgD\\tNONE\",\"LrWZyqWL6OUk\\tD6EmJIZx6Gzg\\tPUJ8AKki53pG\\tACTIVATES\",\"MIyPv49C6PmS\\tPUJ8AKki53pG\\trlRx40Am4Oyw\\tACTIVATES\",\"6nSDsRMc6QPJ\\tPUJ8AKki53pG\\t1UmcnGh24P6f\\tACTIVATES\",\"AQSQDQcZ0XWo\\tZvdL-fZM3WuZ\\tMBUXnNN2z5Dt\\tACTIVATES\",\"ZfrWje290c1T\\tMBUXnNN2z5Dt\\t1UmcnGh24P6f\\tACTIVATES\",\"_hzFGzTL6RE2\\tPUJ8AKki53pG\\tRmlBMHs64SgD\\tACTIVATES\",\"bp_I0EHv0cD4\\tMBUXnNN2z5Dt\\trlRx40Am4Oyw\\tACTIVATES\",\"PQG4E-ga6Mza\\tjs1qiakd6GP4\\tD6EmJIZx6Gzg\\tACTIVATES\",\"NKPl8Kdr0I1e\\to9hOOpRM0I1T\\tMBUXnNN2z5Dt\\tINHIBITS\",\"OoqtDBRI0V5J\\ttSZugv-P3gVw\\tMBUXnNN2z5Dt\\tINHIBITS\",\"Vqm7Wl0M4AE0\\tWv-EmNFT15yN\\tcYzz8jlS2HaK\\tACTIVATES\",\"09Csuz540e3h\\tMBUXnNN2z5Dt\\tRmlBMHs64SgD\\tACTIVATES\"],\"COADREAD-2012-TGF-B-signaling-pathway\":[\"COADREAD-2012-TGF-B-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TGF-B\\tnTPdmpNKy_zW\\tGENE\\t-1\\t-38\\t-358\\t\",\"ACVR2A\\t4qJ5NXmkEupe\\tGENE\\tRckLIrYUzEOc\\t278\\t-262\\t\",\"TGFBR2\\t7GmKbJadEtyf\\tGENE\\t5i_MJPAPzCI1\\t44\\t-262\\t\",\"ACTIVIN\\tZc2sWHBVzArX\\tGENE\\t-1\\t360\\t-358\\t\",\"ACVR2A-ACVR1B\\tRckLIrYUzEOc\\tCOMPARTMENT\\t-1\\t360\\t-262\\t\",\"SMAD\\t7j1T7wlqzcoy\\tFAMILY\\t-1\\t158\\t-86\\t\",\"SMAD2\\tEgBC5uQzE1qC\\tGENE\\t7j1T7wlqzcoy\\t82\\t-117\\t\",\"SMAD4\\tQuKCy3EaE1pk\\tGENE\\t7j1T7wlqzcoy\\t160\\t-55\\t\",\"MYC\\tBIYl4Hkdzdoj\\tGENE\\t-1\\t-65\\t74\\t\",\"TGFBR1-TGFBR2\\t5i_MJPAPzCI1\\tCOMPARTMENT\\t-1\\t-38\\t-262\\t\",\"TGFBR1\\tjQFRXXNIEtyK\\tGENE\\t5i_MJPAPzCI1\\t-121\\t-262\\t\",\"ACVR1B\\tRSw1VMOMEupS\\tGENE\\tRckLIrYUzEOc\\t443\\t-262\\t\",\"SMAD3\\tx-JW3Hq6E1qN\\tGENE\\t7j1T7wlqzcoy\\t235\\t-117\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"2jvzewjJ0UDH\\t5i_MJPAPzCI1\\t7j1T7wlqzcoy\\tACTIVATES\",\"X5m06a6REtyq\\tjQFRXXNIEtyK\\t7GmKbJadEtyf\\tBINDS\",\"76dv_Epi0O5A\\tnTPdmpNKy_zW\\t5i_MJPAPzCI1\\tACTIVATES\",\"RBUTTCdV0RK3\\tZc2sWHBVzArX\\tRckLIrYUzEOc\\tACTIVATES\",\"4m5j1DYC0VIG\\tRckLIrYUzEOc\\t7j1T7wlqzcoy\\tACTIVATES\",\"aVez8qmz0X7C\\t7j1T7wlqzcoy\\tBIYl4Hkdzdoj\\tINHIBITS\",\"dMNeGuPcEupl\\t4qJ5NXmkEupe\\tRSw1VMOMEupS\\tBINDS\"],\"COADREAD-2012-TP53-pathway\":[\"COADREAD-2012-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Proliferation\\tFD2DCZc_8Eck\\tPROCESS\\t-1\\t569\\t199\\t\",\"TP53\\t2LzUgOci77hf\\tGENE\\t-1\\t386\\t239\\t\",\"DNA replication stress\\teArivqeT78y7\\tPROCESS\\t-1\\t204\\t145\\t\",\"ATM\\tB4xPctkP764L\\tGENE\\t-1\\t386\\t145\\t\",\"Oncogenic stress\\tR-scgH-q793l\\tPROCESS\\t-1\\t204\\t239\\t\",\"Cell survival\\tltgdAJkI8Hs-\\tPROCESS\\t-1\\t569\\t266\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"igOuMrr-QXvV\\tR-scgH-q793l\\t2LzUgOci77hf\\tACTIVATES\",\"WlE3wQIvQdms\\t2LzUgOci77hf\\tltgdAJkI8Hs-\\tINHIBITS\",\"nfX2BMaKQcgf\\t2LzUgOci77hf\\tFD2DCZc_8Eck\\tINHIBITS\",\"gVpKeF6ZQW1o\\teArivqeT78y7\\tB4xPctkP764L\\tACTIVATES\",\"KXWREHzWQaXR\\tB4xPctkP764L\\t2LzUgOci77hf\\tACTIVATES\"],\"COADREAD-2012-WNT-signaling-pathway\":[\"COADREAD-2012-WNT-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Proliferation, stem/progenitor phenotype\\tbl6HjsSUV6cV\\tPROCESS\\t-1\\t1030\\t629\\t\",\"DKK3\\tGFrq4NgHEGRM\\tGENE\\tg331vTgZWK6e\\t255\\t154\\t\",\"TCF7L2\\tfah7MVZYUjS9\\tGENE\\t-1\\t462\\t456\\t\",\"DKK\\tg331vTgZWK6e\\tFAMILY\\t-1\\t333\\t125\\t\",\"TCF7\\t6tzFiifNEEEJ\\tGENE\\t61GfHXD5WEXh\\t682\\t571\\t\",\"DKK4\\tRAXuusnwEGQo\\tGENE\\tg331vTgZWK6e\\t411\\t154\\t\",\"CTNNB1\\tEmU8OBXdUMCO\\tGENE\\t-1\\t682\\t392\\t\",\"DKK1\\tUE5vCnmWEGQ6\\tGENE\\tg331vTgZWK6e\\t255\\t96\\t\",\"CTNNB1-TCF7\\t61GfHXD5WEXh\\tCOMPARTMENT\\t-1\\t682\\t539\\t\",\"AXIN2\\tH8L_66uLUHPT\\tGENE\\t-1\\t682\\t312\\t\",\"FAM123B\\tXwg-_Y4_UGRt\\tGENE\\t-1\\t525\\t312\\t\",\"APC\\txIqHk3KBUIjc\\tGENE\\t-1\\t838\\t312\\t\",\"ARID1A\\th0U_424iUWu5\\tGENE\\t-1\\t1030\\t456\\t\",\"CTNNB1\\tKZpYtS9vEEEm\\tGENE\\t61GfHXD5WEXh\\t682\\t507\\t\",\"FZD10\\tP1FIiIlqEFL_\\tGENE\\tT5QZmrnYWA-N\\t762\\t199\\t\",\"LRP5\\twGjsVLW4EFLn\\tGENE\\tT5QZmrnYWA-N\\t600\\t199\\t\",\"WNT\\tcFdN3nQcTwwO\\tGENE\\t-1\\t682\\t47\\t\",\"MYC\\t4hScAPjlUSym\\tGENE\\t-1\\t1030\\t535\\t\",\"DKK2\\tzOVzq_6jEGRb\\tGENE\\tg331vTgZWK6e\\t411\\t96\\t\",\"LRP5-FZD10\\tT5QZmrnYWA-N\\tCOMPARTMENT\\t-1\\t681\\t199\\t\",\"FBXW7\\tbXlgw4GKUVh3\\tGENE\\t-1\\t862\\t456\\t\",\"SOX9\\tPOzVx5kyURM7\\tGENE\\t-1\\t459\\t550\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"j9mmGRLjHKlo\\tEmU8OBXdUMCO\\t61GfHXD5WEXh\\tACTIVATES\",\"f_sY8_lUHUPL\\t61GfHXD5WEXh\\t4hScAPjlUSym\\tINDUCES\",\"esOZ1gJeWfDK\\tT5QZmrnYWA-N\\txIqHk3KBUIjc\\tINHIBITS\",\"ADfnqwAaHX4H\\t4hScAPjlUSym\\tbl6HjsSUV6cV\\tACTIVATES\",\"42Liap6TWjUw\\txIqHk3KBUIjc\\tEmU8OBXdUMCO\\tINHIBITS\",\"Gi2m7VhSWdIe\\tT5QZmrnYWA-N\\tXwg-_Y4_UGRt\\tINHIBITS\",\"hDuqU9RREFMQ\\twGjsVLW4EFLn\\tP1FIiIlqEFL_\\tBINDS\",\"6Rn05rJaWhts\\tXwg-_Y4_UGRt\\tEmU8OBXdUMCO\\tINHIBITS\",\"Rmg0swQ7HQ4z\\t61GfHXD5WEXh\\tPOzVx5kyURM7\\tREPRESSES\",\"dYBVjbKCWM3N\\tg331vTgZWK6e\\tT5QZmrnYWA-N\\tINHIBITS\",\"Z4VdiqohHMM_\\tfah7MVZYUjS9\\t61GfHXD5WEXh\\tINHIBITS\",\"p11d6T2rHOIN\\tbXlgw4GKUVh3\\t61GfHXD5WEXh\\tINHIBITS\",\"l1NcyeMdWigH\\tH8L_66uLUHPT\\tEmU8OBXdUMCO\\tINHIBITS\",\"cdUCacfNHR1f\\tPOzVx5kyURM7\\t61GfHXD5WEXh\\tINHIBITS\",\"IlOH9qIEHVc_\\tbXlgw4GKUVh3\\t4hScAPjlUSym\\tINHIBITS\",\"kvbDlRZ2EEEx\\tKZpYtS9vEEEm\\t6tzFiifNEEEJ\\tBINDS\",\"MUhUjbP3Wa2w\\tg331vTgZWK6e\\tcFdN3nQcTwwO\\tINHIBITS\",\"2OZGWP_oWeBV\\tT5QZmrnYWA-N\\tH8L_66uLUHPT\\tINHIBITS\",\"_xkBTQ9sHWYw\\th0U_424iUWu5\\t4hScAPjlUSym\\tREPRESSES\",\"Af3sU0_EWJva\\tcFdN3nQcTwwO\\tT5QZmrnYWA-N\\tACTIVATES\"],\"ESAD-2017-Cell-cycle-pathway\":[\"ESAD-2017-Cell-cycle-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\t0b0592b4-4330-47c9-9a88-7d8c7940a680\\tGENE\\t-1\\t219\\t205\\t\",\"CYCLINS\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\tFAMILY\\t-1\\t612\\t205\\t\",\"RB1\\t362e59dd-fb26-4d70-8a5e-357b38ed5e4b\\tGENE\\t-1\\t986\\t205\\t\",\"CCNE1\\t65337ed5-11c6-4a91-a177-14c9c0fb42df\\tGENE\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t454\\t205\\t\",\"CCND1\\ta3661efd-abce-474e-ab02-f2eb355d2487\\tGENE\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t613\\t205\\t\",\"CDK6\\t4ad57397-dfc1-4efc-91fa-be799f5b885d\\tGENE\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t770\\t205\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"2c47aaf9-8ddc-4097-bc51-716d7dce4cb9\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t362e59dd-fb26-4d70-8a5e-357b38ed5e4b\\tINHIBITS\",\"67638113-dece-48c9-8982-3e420e681508\\t0b0592b4-4330-47c9-9a88-7d8c7940a680\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\tINHIBITS\"],\"ESAD-2017-RTK-RAS-PI(3)K-pathway\":[\"ESAD-2017-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PIK3R1\\t51f0d970-2e2b-47e2-90bd-0d0d881d70ed\\tGENE\\t-1\\t1056\\t335\\t\",\"PTEN\\t8214d1b9-75ba-4fbb-86d2-fe45dd392767\\tGENE\\t-1\\t778\\t335\\t\",\"PIK3CA\\t49a250be-042c-4910-9774-802dfb0e08f3\\tGENE\\t-1\\t918\\t227\\t\",\"KRAS\\tbea46283-55f2-4650-acee-58d23d8c11fc\\tGENE\\t-1\\t358\\t227\\t\",\"MYC\\tb33f6617-57e5-4e3a-bd28-6ff114d96321\\tGENE\\t-1\\t1256\\t227\\t\",\"RTK\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\tFAMILY\\t-1\\t673\\t130\\t\",\"MET\\t82180331-e6f8-4487-9c6c-1c898cb05cf1\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t595\\t130\\t\",\"IGF1R\\te7741571-a281-4b1d-ab5f-1e6d22cd3cf7\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t754\\t130\\t\",\"RTK\\t230ace17-b770-4cc8-8d00-55c2a2075c3e\\tFAMILY\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t1075\\t130\\t\",\"FGFR1\\tfb4252b0-5bfd-495d-99bc-c7143789403c\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t914\\t130\\t\",\"ERBB2\\t0c2d7f5d-9da8-4a3c-bf55-53976781fa86\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t271\\t130\\t\",\"EGFR\\t34b79c41-bc49-4c8e-b5f7-ddad188915bb\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t434\\t130\\t\",\"FGFR2\\t91dd9bca-e153-4016-8c4a-0dbb7e12d024\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t1075\\t130\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"0738d86a-d46d-4a8f-b3f4-b96baba1bfa1\\t49a250be-042c-4910-9774-802dfb0e08f3\\tb33f6617-57e5-4e3a-bd28-6ff114d96321\\tACTIVATES\",\"625b533f-ac20-4dbf-abdc-2c9fe3cafe97\\t51f0d970-2e2b-47e2-90bd-0d0d881d70ed\\t49a250be-042c-4910-9774-802dfb0e08f3\\tINHIBITS\",\"f687da01-5f2a-4168-b41f-04f0014ab954\\t8214d1b9-75ba-4fbb-86d2-fe45dd392767\\t49a250be-042c-4910-9774-802dfb0e08f3\\tINHIBITS\",\"49ee44ff-b6ff-47f0-81bf-effa2cf34191\\t49a250be-042c-4910-9774-802dfb0e08f3\\tbea46283-55f2-4650-acee-58d23d8c11fc\\tACTIVATES\",\"d1a956b7-db6a-4653-9da4-d0b26357fb5a\\tbea46283-55f2-4650-acee-58d23d8c11fc\\t49a250be-042c-4910-9774-802dfb0e08f3\\tACTIVATES\",\"73b63049-5e6c-4793-8536-86b4ec006b2d\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t49a250be-042c-4910-9774-802dfb0e08f3\\tACTIVATES\",\"49655771-0e8d-42ce-a71e-76d3bc8c742c\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\tbea46283-55f2-4650-acee-58d23d8c11fc\\tACTIVATES\"],\"ESAD-2017-WNT-CTNNB1-pathway\":[\"ESAD-2017-WNT-CTNNB1-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PTCH1\\t623d9d6b-6d32-4a0a-a826-df9b880ca03a\\tGENE\\t-1\\t212\\t126\\t\",\"APC\\t792b8fd9-ae87-4972-8da4-1140378b63e5\\tGENE\\t-1\\t382\\t126\\t\",\"FBXW7\\tfaa556d4-6e8d-456d-b9d0-a4c35873f9a8\\tGENE\\t-1\\t553\\t126\\t\",\"ARID1A\\t1cdc0d84-e27f-44ed-981e-12994fed8711\\tGENE\\t-1\\t731\\t126\\t\",\"CTNNB1\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tGENE\\t-1\\t446\\t214\\t\",\"MYC\\tdd894023-67b6-4bcc-baad-a441556f4168\\tGENE\\t-1\\t793\\t214\\t\",\"PIK3CA\\t8009d529-453b-4c3e-b694-7e0070b7f0a5\\tGENE\\t-1\\t793\\t303\\t\",\"Cell proliferation\\td80f3360-7aa0-442a-ae2a-59f0e8379f86\\tPROCESS\\t-1\\t999\\t214\\t\",\"Embryonic development\\t2e65076c-a0ae-47d9-8860-4ba6c1c89e1c\\tPROCESS\\t-1\\t210\\t214\\t\",\"SMAD\\t08936961-1fad-4b39-ada5-839a1864de96\\tFAMILY\\t-1\\t985\\t126\\t\",\"SMAD2\\t0235338c-0433-48b9-87e3-e50923aed67c\\tGENE\\t08936961-1fad-4b39-ada5-839a1864de96\\t901\\t126\\t\",\"SMAD4\\t1b3e587e-ec76-417a-92ef-34976b0f46bd\\tGENE\\t08936961-1fad-4b39-ada5-839a1864de96\\t1070\\t126\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"a1155daf-ac03-4bbd-9ae0-0a738ec73d95\\t8009d529-453b-4c3e-b694-7e0070b7f0a5\\tdd894023-67b6-4bcc-baad-a441556f4168\\tACTIVATES\",\"0562cbe7-7462-45c1-bd49-109e7ef97f74\\tdd894023-67b6-4bcc-baad-a441556f4168\\td80f3360-7aa0-442a-ae2a-59f0e8379f86\\tACTIVATES\",\"b7fe88fe-76f0-4f45-b80c-eb9937d3fed0\\t623d9d6b-6d32-4a0a-a826-df9b880ca03a\\t2e65076c-a0ae-47d9-8860-4ba6c1c89e1c\\tINHIBITS\",\"d1682a0d-a521-4f33-8097-a57b695d6fe4\\t792b8fd9-ae87-4972-8da4-1140378b63e5\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tINHIBITS\",\"0e07ea0f-7144-42b7-831d-11a660f45ddb\\tfaa556d4-6e8d-456d-b9d0-a4c35873f9a8\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tINHIBITS\",\"91b66dea-a6b4-4991-8ac2-184904f361b0\\tfaa556d4-6e8d-456d-b9d0-a4c35873f9a8\\tdd894023-67b6-4bcc-baad-a441556f4168\\tINHIBITS\",\"ba347f10-d89d-47ed-97fc-8eed4454b4ba\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tdd894023-67b6-4bcc-baad-a441556f4168\\tACTIVATES\",\"b8423ddf-8f5c-4718-81b4-132ae25ed3e5\\t1cdc0d84-e27f-44ed-981e-12994fed8711\\tdd894023-67b6-4bcc-baad-a441556f4168\\tINHIBITS\",\"a7180fc6-8113-47eb-b090-39d1cc8c5825\\t08936961-1fad-4b39-ada5-839a1864de96\\tdd894023-67b6-4bcc-baad-a441556f4168\\tINHIBITS\"],\"GBM-2008-Cell-cycle-signaling-pathway\":[\"GBM-2008-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"RB1\\t0cQitpJLOoEG\\tFAMILY\\t-1\\t472\\t279\\t\",\"CYCLINS\\tSBGkYw2NOhMr\\tFAMILY\\t-1\\t472\\t168\\t\",\"G1/S Progression\\t0kD7D3DGOtD1\\tPROCESS\\t-1\\t472\\t374\\t\",\"CCND2\\tGrNFDrs1AoNL\\tGENE\\tSBGkYw2NOhMr\\t472\\t168\\t\",\"CDKN2B\\tTbTnj_R5ONS9\\tGENE\\t-1\\t444\\t87\\t\",\"CDK4\\tPs45UaX4AoNo\\tGENE\\tSBGkYw2NOhMr\\t317\\t168\\t\",\"CDK6\\tVnEu6OlPAoNe\\tGENE\\tSBGkYw2NOhMr\\t627\\t168\\t\",\"CDKN2C\\tr8WJLoQLOONy\\tGENE\\t-1\\t625\\t87\\t\",\"CDKN2A\\tcnleYFDsOMzx\\tGENE\\t-1\\t294\\t87\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"Rpso-cKyOzoj\\tTbTnj_R5ONS9\\tSBGkYw2NOhMr\\tINHIBITS\",\"3InwuSCoO0br\\tr8WJLoQLOONy\\tSBGkYw2NOhMr\\tINHIBITS\",\"-zXgQSv4Oy04\\tcnleYFDsOMzx\\tSBGkYw2NOhMr\\tINHIBITS\",\"6NO_fL3nO3r4\\tSBGkYw2NOhMr\\t0cQitpJLOoEG\\tINHIBITS\",\"1pimX-ZiO6F6\\t0cQitpJLOoEG\\t0kD7D3DGOtD1\\tINHIBITS\"],\"GBM-2008-RTK-RAS-PI(3)K-pathway\":[\"GBM-2008-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PDGFRA\\tiD415efHLG3J\\tGENE\\tIdrkrh8-K31j\\t441\\t-61\\t\",\"RAS\\t8XXLbCwXLtrQ\\tFAMILY\\t-1\\t246\\t53\\t\",\"NF1\\tKe7_FRmuLw42\\tGENE\\t-1\\t21\\t54\\t\",\"RTK\\tIdrkrh8-K31j\\tFAMILY\\t-1\\t365\\t-61\\t\",\"PI(3)K\\tuWMSz1XlL2nL\\tFAMILY\\t-1\\t529\\t50\\t\",\"PTEN\\tLOErZTMUL6hc\\tGENE\\t-1\\t721\\t50\\t\",\"AKT\\tsgb8KI1XMIrn\\tFAMILY\\t-1\\t529\\t129\\t\",\"EGFR\\t7T8gHIR6LG2s\\tGENE\\tIdrkrh8-K31j\\t134\\t-61\\t\",\"FOXO\\t1cIfqNkTMN--\\tGENE\\t-1\\t529\\t205\\t\",\"MET\\tXcKqo6xILG3V\\tGENE\\tIdrkrh8-K31j\\t597\\t-61\\t\",\"ERBB2\\tvJOD-MZOLG2-\\tGENE\\tIdrkrh8-K31j\\t287\\t-61\\t\",\"Proliferation, survival, translation\\tk9I_xTrbMS6S\\tPROCESS\\t-1\\t247\\t206\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"ApGQ0rEtL1TV\\tKe7_FRmuLw42\\t8XXLbCwXLtrQ\\tINHIBITS\",\"s5CFkxUKL0kl\\tIdrkrh8-K31j\\t8XXLbCwXLtrQ\\tACTIVATES\",\"jrs5QL8rMbv3\\t8XXLbCwXLtrQ\\tk9I_xTrbMS6S\\tACTIVATES\",\"WEpyeQmyMeC8\\tsgb8KI1XMIrn\\t1cIfqNkTMN--\\tINHIBITS\",\"ytXepIulMGGL\\tIdrkrh8-K31j\\tuWMSz1XlL2nL\\tACTIVATES\",\"_g47pqc4MGwz\\tLOErZTMUL6hc\\tuWMSz1XlL2nL\\tINHIBITS\",\"u1UwLh90MdLo\\tuWMSz1XlL2nL\\tsgb8KI1XMIrn\\tACTIVATES\"],\"GBM-2008-TP53-pathway\":[\"GBM-2008-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Activated oncogenes\\tx-laQtq0NSZI\\tPROCESS\\t-1\\t724\\t57\\t\",\"MDM2\\tVIrh6R4jNYOQ\\tGENE\\t-1\\t724\\t208\\t\",\"Apoptosis\\tLxZckK4_NmKp\\tPROCESS\\t-1\\t886\\t297\\t\",\"MDM4\\t0z81KeWTNfOj\\tGENE\\t-1\\t886\\t234\\t\",\"Senescence\\tX0XgoUzfNjH-\\tPROCESS\\t-1\\t546\\t297\\t\",\"CDKN2A\\tIXX8d7kuNVHa\\tGENE\\t-1\\t724\\t135\\t\",\"TP53\\t6RLrPg8rNa4o\\tGENE\\t-1\\t724\\t297\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"4PNvvSvKNtxu\\tIXX8d7kuNVHa\\tVIrh6R4jNYOQ\\tINHIBITS\",\"gX_WY_rANxtC\\tVIrh6R4jNYOQ\\t6RLrPg8rNa4o\\tINHIBITS\",\"EznJNkeAN1al\\t6RLrPg8rNa4o\\tX0XgoUzfNjH-\\tACTIVATES\",\"kaHvTklZNzas\\t0z81KeWTNfOj\\t6RLrPg8rNa4o\\tINHIBITS\",\"wTOjoJHdNq6N\\tx-laQtq0NSZI\\tIXX8d7kuNVHa\\tACTIVATES\",\"5-9bxAL_N0gO\\t6RLrPg8rNa4o\\tLxZckK4_NmKp\\tACTIVATES\"],\"GBM-2013-Cell-cycle-signaling-pathway\":[\"GBM-2013-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2C\\tnFMLgWuEmv0Q\\tGENE\\t-1\\t667\\t136\\t\",\"CDK4\\tszeVZ7Elmxvu\\tGENE\\t-1\\t386\\t249\\t\",\"CDK6\\tWvJWw5HPm0Ab\\tGENE\\t-1\\t694\\t249\\t\",\"Cyclins\\tAvEeR8GgnDvF\\tFAMILY\\t-1\\t541\\t249\\t\",\"CDKN2A\\tWHDg2nj1B2yR\\tGENE\\t-1\\t320\\t136\\t\",\"Cell cycle control\\tKJEq6EA_m3Cj\\tPROCESS\\t-1\\t793\\t383\\t\",\"CDKN2B\\tv1zGJhukB2ym\\tGENE\\t-1\\t470\\t136\\t\",\"RB1\\tNc0stK1rm13Y\\tFAMILY\\t-1\\t541\\t383\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"4yIGldfunbSO\\tNc0stK1rm13Y\\tKJEq6EA_m3Cj\\tACTIVATES\",\"aqdBLSknB2zK\\tv1zGJhukB2ym\\tszeVZ7Elmxvu\\tINHIBITS\",\"bxdBRxkfnYu4\\tszeVZ7Elmxvu\\tNc0stK1rm13Y\\tINHIBITS\",\"AQXakgefnZf1\\tAvEeR8GgnDvF\\tNc0stK1rm13Y\\tINHIBITS\",\"bdgYHwINnW4B\\tnFMLgWuEmv0Q\\tAvEeR8GgnDvF\\tINHIBITS\",\"Xslj1XfeB2yz\\tWHDg2nj1B2yR\\tszeVZ7Elmxvu\\tINHIBITS\",\"ve_EiwTjnXrI\\tnFMLgWuEmv0Q\\tWvJWw5HPm0Ab\\tINHIBITS\",\"Q7Uq8jBIB2y5\\tWHDg2nj1B2yR\\tAvEeR8GgnDvF\\tINHIBITS\",\"IL38zL5VB2yv\\tWHDg2nj1B2yR\\tWvJWw5HPm0Ab\\tINHIBITS\",\"6jn1TNkoB2zN\\tv1zGJhukB2ym\\tAvEeR8GgnDvF\\tINHIBITS\",\"BSaYCBi7naes\\tWvJWw5HPm0Ab\\tNc0stK1rm13Y\\tINHIBITS\",\"JZERPNMdnWL9\\tnFMLgWuEmv0Q\\tszeVZ7Elmxvu\\tINHIBITS\",\"n7Nithx-B2zB\\tv1zGJhukB2ym\\tWvJWw5HPm0Ab\\tINHIBITS\"],\"GBM-2013-RTK-RAS-PI(3)K-pathway\":[\"GBM-2013-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NF1\\tpQ2sq0Chk7o8\\tGENE\\t-1\\t843\\t223\\t\",\"RAS\\tXfDonLT2k9rr\\tFAMILY\\t-1\\t674\\t223\\t\",\"BRAF\\tJKmqofwVk_cd\\tGENE\\t-1\\t674\\t334\\t\",\"EGFR\\tHG7A5p2q4D3f\\tGENE\\tZvpmFM7llCzi\\t331\\t113\\t\",\"PI3K(3)K\\tE0625yTsk46l\\tGENE\\t-1\\t428\\t225\\t\",\"AKT Pathway\\tTTwvf1BelBTM\\tPROCESS\\t-1\\t428\\t338\\t\",\"MET\\tsZJ7Kmrg4D35\\tGENE\\tZvpmFM7llCzi\\t643\\t113\\t\",\"MAPK Pathway\\tdAkBkKN-lAKT\\tPROCESS\\t-1\\t862\\t335\\t\",\"PTEN\\t8kyYeHGHk4NK\\tGENE\\t-1\\t255\\t225\\t\",\"RTK\\tZvpmFM7llCzi\\tFAMILY\\t-1\\t565\\t113\\t\",\"FGFR\\t8z2n3qaU4D3L\\tGENE\\tZvpmFM7llCzi\\t800\\t113\\t\",\"PDGFRA\\t-jXEzRew4D3r\\tGENE\\tZvpmFM7llCzi\\t487\\t113\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"f9EmKbzjlk77\\tJKmqofwVk_cd\\tdAkBkKN-lAKT\\tACTIVATES\",\"qj0ZCvR8le5E\\t8kyYeHGHk4NK\\tE0625yTsk46l\\tINHIBITS\",\"4DrueUbLljf-\\tE0625yTsk46l\\tTTwvf1BelBTM\\tACTIVATES\",\"c4Kpa4R5lgcQ\\tZvpmFM7llCzi\\tXfDonLT2k9rr\\tACTIVATES\",\"CEeo6oGYlifg\\tXfDonLT2k9rr\\tJKmqofwVk_cd\\tACTIVATES\",\"zingzci6lhXA\\tpQ2sq0Chk7o8\\tXfDonLT2k9rr\\tINHIBITS\",\"LTVgdZNOld9G\\tZvpmFM7llCzi\\tE0625yTsk46l\\tACTIVATES\"],\"GBM-2013-TP53-pathway\":[\"GBM-2013-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP53\\tux4NOBO4mBSe\\tGENE\\t-1\\t416\\t243\\t\",\"MDM4\\tO3CQIh-OmCOD\\tGENE\\t-1\\t222\\t243\\t\",\"Senescence/Apoptosis\\tTIZhBhfymDVV\\tPROCESS\\t-1\\t416\\t355\\t\",\"MDM2\\tdNRsoLpZmAuu\\tGENE\\t-1\\t416\\t133\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"BrX7DMKemS8w\\tdNRsoLpZmAuu\\tux4NOBO4mBSe\\tINHIBITS\",\"jHRb2o3YmTqF\\tO3CQIh-OmCOD\\tux4NOBO4mBSe\\tINHIBITS\",\"MnYnmX_dmV0E\\tux4NOBO4mBSe\\tTIZhBhfymDVV\\tACTIVATES\"],\"HIPPO\":[\"HIPPO\",\"\",\"Involved in the control of organ size. Central to this pathway is the regulation of the transcription co-activators YAP/TAZ that promote the transcription of genes involved in cell proliferation.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"HRAS\\t7o723KjtxLw3\\tGENE\\tm8n8vtNexLwr\\t322\\t183\",\"NF1\\tCoRREfZLxLxE\\tGENE\\t-1\\t399\\t270\",\"Survival\\tPwPgvbNpxLvq\\tPROCESS\\t-1\\t791\\t584\",\"RAS\\tzoIJL9SXxLvs\\tFAMILY\\t-1\\t505\\t98\",\"FGFR3\\txdJHuZOJxLvx\\tGENE\\tzoIJL9SXxLvs\\t272\\t98\",\"ERBB2\\t2TufgUnDxLvu\\tGENE\\tzoIJL9SXxLvs\\t584\\t98\",\"TSC2\\tPrCzkSRAxLwV\\tGENE\\tNIuPl9Z4xLwO\\t503\\t496\",\"PTEN\\tsYk-4hLPxLvn\\tGENE\\t-1\\t860\\t184\",\"STK11\\tlFDvCMmBxLv9\\tGENE\\t-1\\t317\\t469\",\"INPP4B\\tGLEvKwzFxLwB\\tGENE\\t-1\\t804\\t266\",\"MTOR\\tICScCD_7xLwH\\tGENE\\t-1\\t722\\t470\",\"Proliferation\\tuwFqE9I9xLwk\\tPROCESS\\t-1\\t665\\t584\",\"RAS\\tm8n8vtNexLwr\\tFAMILY\\t-1\\t399\\t183\",\"NRAS\\tgJxmCdGKxLwx\\tGENE\\tm8n8vtNexLwr\\t476\\t183\",\"ERBB3\\tMzpcdmxYxLv6\\tGENE\\tzoIJL9SXxLvs\\t739\\t98\",\"TSC1\\tRWyL5pe9xLwd\\tGENE\\tNIuPl9Z4xLwO\\t503\\t444\",\"TSC\\tNIuPl9Z4xLwO\\tFAMILY\\t-1\\t503\\t470\",\"PIK3CA\\tiq8nE1OMxLvj\\tGENE\\t-1\\t658\\t184\",\"AKT\\tTiUbnalZxLw_\\tGENE\\t-1\\t659\\t349\",\"EGFR\\t5XuhH2Y3xLv2\\tGENE\\tzoIJL9SXxLvs\\t429\\t98\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"sFy4CeNZxLxT\\tsYk-4hLPxLvn\\tiq8nE1OMxLvj\\tINHIBITS\\t\",\"YpeP_yDkxLxQ\\tTiUbnalZxLw_\\tNIuPl9Z4xLwO\\tINHIBITS\\t\",\"t2QHaOQlxLxX\\tNIuPl9Z4xLwO\\tICScCD_7xLwH\\tINHIBITS\\t\",\"--0Bl7NmxLxb\\tm8n8vtNexLwr\\tiq8nE1OMxLvj\\tACTIVATES\\t\",\"TihuxwDexLxR\\tGLEvKwzFxLwB\\tiq8nE1OMxLvj\\tINHIBITS\\t\",\"M4uM8zkMxLxZ\\tlFDvCMmBxLv9\\tNIuPl9Z4xLwO\\tACTIVATES\\t\",\"JGhy8m8UxLxN\\tzoIJL9SXxLvs\\tm8n8vtNexLwr\\tACTIVATES\\t\",\"rQyUZobSxLxf\\tICScCD_7xLwH\\tuwFqE9I9xLwk\\tACTIVATES\\t\",\"t_83aGiOxLxc\\tICScCD_7xLwH\\tPwPgvbNpxLvq\\tACTIVATES\\t\",\"1Jm9fDfkxLxV\\tiq8nE1OMxLvj\\tTiUbnalZxLw_\\tACTIVATES\\t\",\"J7C0UYeQxLxK\\tCoRREfZLxLxE\\tm8n8vtNexLwr\\tINHIBITS\\t\"],\"HNSC-2015-Apoptosis-pathway\":[\"HNSC-2015-Apoptosis-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Cell cycle and survival\\temPjU9d6DgGP\\tPROCESS\\t-1\\t348\\t484\\t\",\"TRAF3\\tIBsoHlQJDZF8\\tGENE\\t-1\\t530\\t285\\t\",\"FADD\\tDLlGnDdfDTRw\\tGENE\\t-1\\t373\\t199\\t\",\"TNFR-LTBR\\ts0lGLs3rDXus\\tCOMPARTMENT\\t-1\\t452\\t106\\t\",\"LTBR\\tM8fueNVgIWYI\\tGENE\\ts0lGLs3rDXus\\t530\\t106\\t\",\"Inflammation angiogenesis migration\\tyeoJnxV0DfTf\\tPROCESS\\t-1\\t581\\t484\\t\",\"BIRC2\\t54AiNjv7DUd9\\tGENE\\t-1\\t530\\t199\\t\",\"NF-kB\\tVeOlULKnDabs\\tGENE\\t-1\\t455\\t382\\t\",\"CASP8\\tkpwET4bNDYMG\\tGENE\\t-1\\t373\\t285\\t\",\"TNFR\\t1f2UD5ctIWYb\\tGENE\\ts0lGLs3rDXus\\t373\\t106\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"lvrnvkjrD9P-\\ts0lGLs3rDXus\\t54AiNjv7DUd9\\tACTIVATES\",\"N_skSg-mECnc\\tkpwET4bNDYMG\\tVeOlULKnDabs\\tINHIBITS\",\"OMDbwzxED_x2\\t54AiNjv7DUd9\\tkpwET4bNDYMG\\tINHIBITS\",\"HH4ug7YuD7Fv\\ts0lGLs3rDXus\\tDLlGnDdfDTRw\\tACTIVATES\",\"f-O5DenwEBjr\\t54AiNjv7DUd9\\tIBsoHlQJDZF8\\tINHIBITS\",\"U1LEKmYqIWYs\\t1f2UD5ctIWYb\\tM8fueNVgIWYI\\tBINDS\",\"hhJPfTk9EHgb\\tVeOlULKnDabs\\temPjU9d6DgGP\\tACTIVATES\",\"h3Fekoz9EAiL\\tDLlGnDdfDTRw\\tkpwET4bNDYMG\\tACTIVATES\",\"Acyl78aaEDXf\\tIBsoHlQJDZF8\\tVeOlULKnDabs\\tINHIBITS\",\"O9oIu8SeEIN_\\tVeOlULKnDabs\\tyeoJnxV0DfTf\\tACTIVATES\"],\"HNSC-2015-Cell-cycle-signaling-pathway\":[\"HNSC-2015-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\tprbNZ7N4F2yz\\tGENE\\t-1\\t346\\t201\\t\",\"Cell cycle and survival\\tUF0yWD0cGVp6\\tPROCESS\\t-1\\t859\\t466\\t\",\"let-7c\\t1Fbfq0EnF4FD\\tGENE\\t-1\\t761\\t201\\t\",\"HRAS\\ttR7G7jSMFyKn\\tGENE\\t-1\\t456\\t71\\t\",\"HPVE\\tOUtOuzrFGWsp\\tFAMILY\\t-1\\t347\\t333\\t\",\"RB1\\tKkBOpjMSGBEp\\tFAMILY\\t-1\\t570\\t334\\t\",\"TP53\\tm6QJybSmGSEj\\tGENE\\t-1\\t531\\t466\\t\",\"MYC\\tPu1nPMkoGUcO\\tGENE\\t-1\\t931\\t334\\t\",\"PIK3CA\\tz2FkIMy8FypC\\tGENE\\t-1\\t678\\t71\\t\",\"CCND1\\tS0n0th2eCfb9\\tGENE\\t-swYow3RF5GO\\t570\\t171\\t\",\"CYCLINS\\t-swYow3RF5GO\\tFAMILY\\t-1\\t570\\t197\\t\",\"E2F1\\tBNAC4UcvF_fD\\tGENE\\t-1\\t764\\t334\\t\",\"HPVE7\\t6jlQIfmICrjy\\tGENE\\tOUtOuzrFGWsp\\t347\\t360\\t\",\"CDK6\\tPPI7pGMpCfcQ\\tGENE\\t-swYow3RF5GO\\t570\\t224\\t\",\"HPVE6\\t4bkc06NyCrjd\\tGENE\\tOUtOuzrFGWsp\\t347\\t307\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"idn2SG2QHMC0\\tBNAC4UcvF_fD\\tUF0yWD0cGVp6\\tACTIVATES\",\"njhnQe9vCfci\\tz2FkIMy8FypC\\tS0n0th2eCfb9\\tACTIVATES\",\"5CzfV-h-HQkB\\tOUtOuzrFGWsp\\tm6QJybSmGSEj\\tINHIBITS\",\"UpECTCkVHGkl\\t1Fbfq0EnF4FD\\t-swYow3RF5GO\\tINHIBITS\",\"wnpqGTZ4HNFG\\tPu1nPMkoGUcO\\tUF0yWD0cGVp6\\tACTIVATES\",\"WfTDsR48HJ8K\\t-swYow3RF5GO\\tKkBOpjMSGBEp\\tINHIBITS\",\"mHie46k1HIGn\\tprbNZ7N4F2yz\\t-swYow3RF5GO\\tINHIBITS\",\"EJXQGmWDCfcZ\\ttR7G7jSMFyKn\\tS0n0th2eCfb9\\tACTIVATES\",\"naU-KiGLHOkS\\tOUtOuzrFGWsp\\tKkBOpjMSGBEp\\tINHIBITS\",\"lU11XAdWHRyG\\tm6QJybSmGSEj\\tUF0yWD0cGVp6\\tINHIBITS\",\"hgYpZiWwHLEw\\tKkBOpjMSGBEp\\tBNAC4UcvF_fD\\tINHIBITS\"],\"HNSC-2015-Notch-signaling-pathway\":[\"HNSC-2015-Notch-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP63\\t0_tmgKZGEdGo\\tGENE\\t-1\\t290\\t306\\t\",\"Differentiation\\teeVhg40NEiK2\\tPROCESS\\t-1\\t553\\t481\\t\",\"CTNNB1\\tB311fstqEcj1\\tGENE\\t-1\\t485\\t306\\t\",\"FAT1\\tKm28lPDkEe1-\\tGENE\\t-1\\t676\\t253\\t\",\"AJUBA\\txmIHMSMOEfhM\\tGENE\\t-1\\t676\\t350\\t\",\"NFE2L2\\tuBK84iGaEx2k\\tGENE\\t-1\\t835\\t108\\t\",\"Inflammation angiogenesis migration\\tcVmq2gc7EhfK\\tPROCESS\\t-1\\t290\\t480\\t\",\"NOTCH\\tM36IzzXCEbYd\\tFAMILY\\t-1\\t485\\t108\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"ICbcotEzE6EA\\tKm28lPDkEe1-\\tB311fstqEcj1\\tINHIBITS\",\"wuF8plb4E1Me\\tuBK84iGaEx2k\\tM36IzzXCEbYd\\tACTIVATES\",\"aGzvs7zSE3y2\\t0_tmgKZGEdGo\\tM36IzzXCEbYd\\tINHIBITS\",\"3EBZZzaxE5Fm\\tM36IzzXCEbYd\\tB311fstqEcj1\\tINHIBITS\",\"_u545Mo9E_ul\\t0_tmgKZGEdGo\\teeVhg40NEiK2\\tINHIBITS\",\"n1ZzhYJJE6z0\\txmIHMSMOEfhM\\tB311fstqEcj1\\tINHIBITS\",\"qJsbtzEME7xA\\tB311fstqEcj1\\teeVhg40NEiK2\\tINHIBITS\",\"qbufdsXRFBiJ\\t0_tmgKZGEdGo\\tcVmq2gc7EhfK\\tACTIVATES\",\"XfMK86WqE21I\\tM36IzzXCEbYd\\t0_tmgKZGEdGo\\tINHIBITS\"],\"HNSC-2015-Oxidative-stress-response-pathway\":[\"HNSC-2015-Oxidative-stress-response-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NFE2L2\\tgt4I0Om0FTv6\\tGENE\\t-1\\t436\\t285\\t\",\"KEAP1\\tZsX3OXk3FSsm\\tGENE\\t-1\\t529\\t167\\t\",\"NOTCH\\tBvJxfxK3FnBO\\tGENE\\t-1\\t169\\t285\\t\",\"CUL3\\tIcPGDcXRFSKm\\tGENE\\t-1\\t339\\t167\\t\",\"Oxidative damage\\tfVzq-7uHFVEN\\tPROCESS\\t-1\\t436\\t413\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"EnpWtdTqFdCy\\tIcPGDcXRFSKm\\tgt4I0Om0FTv6\\tINHIBITS\",\"evdmv52VFpzm\\tgt4I0Om0FTv6\\tBvJxfxK3FnBO\\tACTIVATES\",\"cPEAdB0SFfMR\\tgt4I0Om0FTv6\\tfVzq-7uHFVEN\\tACTIVATES\",\"H-KG07b7Fd8r\\tZsX3OXk3FSsm\\tgt4I0Om0FTv6\\tINHIBITS\"],\"HNSC-2015-RTK-RAS-PI(3)K-pathway\":[\"HNSC-2015-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PIK3CA\\txi9Q36e2CS_G\\tGENE\\t-1\\t540\\t244\\t\",\"NF-kB\\tOOiOvVaWCyaI\\tGENE\\t-1\\t878\\t459\\t\",\"HRAS\\tCh4RV-nlCR-8\\tGENE\\t-1\\t320\\t244\\t\",\"IGF1R\\tYDvyAEat8pkt\\tGENE\\tYgFgrMTKCakc\\t850\\t145\\t\",\"ERBB2\\to8fELaID8pjp\\tGENE\\tYgFgrMTKCakc\\t385\\t145\\t\",\"EGFR\\tmYeWqovL8pkK\\tGENE\\tYgFgrMTKCakc\\t227\\t145\\t\",\"RTK\\tYgFgrMTKCakc\\tFAMILY\\t-1\\t538\\t145\\t\",\"FGFR1\\ts8sttQyx8pj-\\tGENE\\tYgFgrMTKCakc\\t541\\t145\\t\",\"PTEN\\tWh8DCYlCCT_j\\tGENE\\t-1\\t722\\t244\\t\",\"CCND1\\ts_2ubRksCYIg\\tGENE\\t-1\\t403\\t337\\t\",\"MYC\\tM33a4yWMGH-j\\tGENE\\t-1\\t540\\t459\\t\",\"FGFR3\\t-jbsv2rK8pkb\\tGENE\\tYgFgrMTKCakc\\t696\\t145\\t\",\"Cell cycle and survival\\tNZQP-jwUGJDJ\\tPROCESS\\t-1\\t540\\t568\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"Vp8BMTADCsgK\\tYgFgrMTKCakc\\txi9Q36e2CS_G\\tACTIVATES\",\"zMOtnYBFCu5s\\txi9Q36e2CS_G\\ts_2ubRksCYIg\\tACTIVATES\",\"P2bwQGViCuNZ\\tCh4RV-nlCR-8\\ts_2ubRksCYIg\\tACTIVATES\",\"9-cqR59DCtQQ\\tWh8DCYlCCT_j\\txi9Q36e2CS_G\\tINHIBITS\",\"kFlNIRpWC2i-\\txi9Q36e2CS_G\\tOOiOvVaWCyaI\\tACTIVATES\",\"S3jvgVzsGPMY\\txi9Q36e2CS_G\\tM33a4yWMGH-j\\tACTIVATES\",\"GnyxNL7aCqke\\tYgFgrMTKCakc\\tCh4RV-nlCR-8\\tACTIVATES\",\"rrzkeHNUGQDo\\tM33a4yWMGH-j\\tNZQP-jwUGJDJ\\tACTIVATES\"],\"KIRC-2013-RTK-RAS-PI(3)K-pathway\":[\"KIRC-2013-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TSC1\\tuggsxb8--Aro\\tGENE\\txqEGjsx0iLFB\\t702\\t215\\t\",\"RHEB\\tB86G1W3Bjaf-\\tGENE\\t-1\\t653\\t670\\t\",\"TSC2\\tYkjc8ADw-rzF\\tGENE\\tkKqxit2Aj0o5\\t727\\t575\\t\",\"4E-BP1\\tunH_CS0VjeEN\\tGENE\\t-1\\t755\\t833\\t\",\"TSC\\tkKqxit2Aj0o5\\tFAMILY\\t-1\\t647\\t575\\t\",\"RHEB\\t2laMuTAjiL1w\\tGENE\\t-1\\t891\\t255\\t\",\"HIF1a\\taDLkX3Z9j92r\\tGENE\\t-1\\t755\\t918\\t\",\"GRB10\\tx5Guo0spjf2e\\tGENE\\t-1\\t839\\t414\\t\",\"MTOR\\tMC8l6rXMiOdd\\tGENE\\t-1\\t1074\\t255\\t\",\"TSC\\txqEGjsx0iLFB\\tFAMILY\\t-1\\t702\\t249\\t\",\"SQSTM1\\txQtLvkz9iNc7\\tGENE\\t-1\\t943\\t153\\t\",\"TSC1\\tJ-ydcJGW-rzg\\tGENE\\tkKqxit2Aj0o5\\t568\\t575\\t\",\"EGFR\\tQFhgkr8diB8z\\tGENE\\t-1\\t164\\t312\\t\",\"PI3K\\tbHiksp77jREY\\tFAMILY\\t-1\\t560\\t414\\t\",\"AKT\\t-Wom9AxOiG4E\\tGENE\\t-1\\t528\\t255\\t\",\"mTORC2\\tdbgxtYHIjWfx\\tGENE\\t-1\\t478\\t493\\t\",\"MiR21\\tGmrxvGcKjTyz\\tGENE\\t-1\\t332\\t533\\t\",\"PIK3CA\\tGBWHCv3viEa6\\tGENE\\t-1\\t354\\t255\\t\",\"IGF1R\\tozct1VALiSY1\\tGENE\\t-1\\t165\\t216\\t\",\"VHL\\t0_wT5Rrrj_Rx\\tGENE\\t-1\\t935\\t919\\t\",\"mTORC1\\tcYFqGJE4jcVJ\\tGENE\\t-1\\t653\\t750\\t\",\"TSC2\\tj9ld37Vz-AsM\\tGENE\\txqEGjsx0iLFB\\t702\\t283\\t\",\"PTEN\\tW2_xSgDziDku\\tGENE\\t-1\\t354\\t174\\t\",\"AKT\\t7HbV79PdjsOU\\tFAMILY\\t-1\\t653\\t494\\t\",\"GNB2L1\\tSfiCTcbNiA5M\\tGENE\\t-1\\t88\\t112\\t\",\"PTEN\\twRO7VWWjjSA-\\tGENE\\t-1\\t332\\t414\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"OpzjVyUGkJHV\\tGmrxvGcKjTyz\\twRO7VWWjjSA-\\tINHIBITS\",\"18MKxE0wiw13\\txqEGjsx0iLFB\\t2laMuTAjiL1w\\tINHIBITS\",\"G-HTkvEckQ4C\\tB86G1W3Bjaf-\\tcYFqGJE4jcVJ\\tACTIVATES\",\"04k9T_t2itkQ\\tW2_xSgDziDku\\tGBWHCv3viEa6\\tINHIBITS\",\"TqPzh3WykXc5\\tunH_CS0VjeEN\\tx5Guo0spjf2e\\tACTIVATES\",\"S7T11oBFisjk\\tQFhgkr8diB8z\\tGBWHCv3viEa6\\tACTIVATES\",\"ahebq1NykUH5\\tunH_CS0VjeEN\\taDLkX3Z9j92r\\tACTIVATES\",\"6najj9ABkSVJ\\tcYFqGJE4jcVJ\\tunH_CS0VjeEN\\tACTIVATES\",\"qPyUZvk3kMq-\\tdbgxtYHIjWfx\\t7HbV79PdjsOU\\tACTIVATES\",\"qHd1pkOTiy5k\\t2laMuTAjiL1w\\tMC8l6rXMiOdd\\tACTIVATES\",\"aPTPKe-XkVXQ\\t0_wT5Rrrj_Rx\\taDLkX3Z9j92r\\tINHIBITS\",\"8vMP0eF_kPj5\\tkKqxit2Aj0o5\\tB86G1W3Bjaf-\\tINHIBITS\",\"NZt5xBGSkYb0\\tx5Guo0spjf2e\\tbHiksp77jREY\\tINHIBITS\",\"3fJZoOEQkKNq\\tbHiksp77jREY\\tdbgxtYHIjWfx\\tACTIVATES\",\"rAhe36tpix6d\\txQtLvkz9iNc7\\tMC8l6rXMiOdd\\tINDUCES\",\"CAu1f-WdkHx4\\twRO7VWWjjSA-\\tbHiksp77jREY\\tINHIBITS\",\"4vMHKnyOkLIf\\tbHiksp77jREY\\t7HbV79PdjsOU\\tACTIVATES\",\"J7kaij8Aivlh\\t-Wom9AxOiG4E\\txqEGjsx0iLFB\\tINHIBITS\",\"fT5lfcHziqX2\\tSfiCTcbNiA5M\\tozct1VALiSY1\\tINDUCES\",\"_2k1_2B-iri2\\tozct1VALiSY1\\tGBWHCv3viEa6\\tACTIVATES\",\"kxVoCQxViupL\\tGBWHCv3viEa6\\t-Wom9AxOiG4E\\tACTIVATES\",\"7jMvZJMZkN4v\\t7HbV79PdjsOU\\tkKqxit2Aj0o5\\tINHIBITS\"],\"LUAD-2014-Cell-cycle-signaling-pathway\":[\"LUAD-2014-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CCND1\\tYWcsnrJvCMfJ\\tGENE\\tEaAZ2J517xuW\\t365\\t177\\t\",\"RB1\\t-65hVCUu7wNj\\tGENE\\t-1\\t521\\t303\\t\",\"CDKN2A\\tyiKTF0xl7qs-\\tGENE\\t-1\\t521\\t88\\t\",\"CYCLINS\\tEaAZ2J517xuW\\tFAMILY\\t-1\\t521\\t177\\t\",\"CDK4\\tpYVVzOz7CMfp\\tGENE\\tEaAZ2J517xuW\\t521\\t177\\t\",\"Cell cycle progression\\tSBA7nphX7zI1\\tPROCESS\\t-1\\t521\\t400\\t\",\"CCNE1\\t0FQDESQiCMfb\\tGENE\\tEaAZ2J517xuW\\t676\\t177\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"EbOzzWJa8KyF\\tEaAZ2J517xuW\\t-65hVCUu7wNj\\tINHIBITS\",\"eB12pAOW8MCi\\t-65hVCUu7wNj\\tSBA7nphX7zI1\\tACTIVATES\",\"u6mSj8wD8Jp9\\tyiKTF0xl7qs-\\tEaAZ2J517xuW\\tINHIBITS\"],\"LUAD-2014-Histone-modification-pathway\":[\"LUAD-2014-Histone-modification-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"SETD2\\tTEmP07vg8mqu\\tGENE\\t-1\\t678\\t182\\t\",\"ARID1B\\tZC3AHrzf8h-f\\tGENE\\t-1\\t379\\t168\\t\",\"Histone methylation\\toQNlmw1I8ng2\\tPROCESS\\t-1\\t678\\t333\\t\",\"ARID2\\tUWhx7SxC8jmN\\tGENE\\t-1\\t226\\t244\\t\",\"ARID1A\\t0ddAggf58hhA\\tGENE\\t-1\\t226\\t168\\t\",\"Nucleosome remodeling\\tkv9VBnuH8l5E\\tPROCESS\\t-1\\t306\\t341\\t\",\"SMARCA4\\t6xqXYMOE8kSp\\tGENE\\t-1\\t379\\t244\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"7D5lYDIi83WM\\tZC3AHrzf8h-f\\tkv9VBnuH8l5E\\tACTIVATES\",\"C0gJJbpq84Fz\\t6xqXYMOE8kSp\\tkv9VBnuH8l5E\\tACTIVATES\",\"_MCNndis82m-\\tUWhx7SxC8jmN\\tkv9VBnuH8l5E\\tACTIVATES\",\"fc6_K-lT85Yv\\tTEmP07vg8mqu\\toQNlmw1I8ng2\\tACTIVATES\",\"PkwUIXyU81xJ\\t0ddAggf58hhA\\tkv9VBnuH8l5E\\tACTIVATES\"],\"LUAD-2014-Oxidative-stress-response-pathway\":[\"LUAD-2014-Oxidative-stress-response-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KEAP1\\tx6qal2M_6fp6\\tGENE\\t-1\\t292\\t147\\t\",\"NFE2L2\\t3OAnmFLj6kBV\\tGENE\\t-1\\t381\\t244\\t\",\"CUL3\\tax7M8UNp6gH0\\tGENE\\t-1\\t460\\t147\\t\",\"Oxidative stress response\\tqQRuLibB6k26\\tPROCESS\\t-1\\t381\\t345\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"puzswCQS65LP\\tx6qal2M_6fp6\\t3OAnmFLj6kBV\\tINHIBITS\",\"ASasYVxW65_T\\tax7M8UNp6gH0\\t3OAnmFLj6kBV\\tINHIBITS\",\"5XC9ZlAR67EJ\\t3OAnmFLj6kBV\\tqQRuLibB6k26\\tINHIBITS\"],\"LUAD-2014-RTK-RAS-PI(3)K-pathway\":[\"LUAD-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KRAS\\thCWC-xR96DqX\\tGENE\\t0aa7a88C5GOW\\t612\\t170\\t\",\"EGFR\\tR5V3H_6E6eEo\\tGENE\\tmFXQLvHD4isJ\\t304\\t68\\t\",\"RAS\\t0aa7a88C5GOW\\tFAMILY\\t-1\\t690\\t202\\t\",\"MAP2K1\\tcwgYdqrk4hBA\\tGENE\\t-1\\t690\\t439\\t\",\"PIK3R1\\tbqBJhHco4YrE\\tGENE\\t-1\\t149\\t251\\t\",\"TSC2\\tY9HFp8YO-n8e\\tGENE\\tEXtYcXdy4Qsz\\t470\\t384\\t\",\"Translation\\t9M7XTM_-4WR7\\tPROCESS\\t-1\\t781\\t637\\t\",\"AKT1\\t25v4OB1H4IlR\\tGENE\\t-1\\t393\\t279\\t\",\"STK11\\ts7zEz-oY4ag8\\tGENE\\t-1\\t149\\t322\\t\",\"ALK\\tpjtEjnD36eE_\\tGENE\\tmFXQLvHD4isJ\\t773\\t68\\t\",\"AMPK\\tFyui5tkl4cr5\\tGENE\\t-1\\t149\\t390\\t\",\"NRAS\\tnKsKU-PQ6DrJ\\tGENE\\t0aa7a88C5GOW\\t768\\t170\\t\",\"Proliferation\\tecQpjv9Q4Urm\\tPROCESS\\t-1\\t465\\t637\\t\",\"HRAS\\tup6fI0q16Dq0\\tGENE\\t0aa7a88C5GOW\\t612\\t233\\t\",\"NF1\\tQkA8DtgZ4Feb\\tGENE\\t-1\\t988\\t207\\t\",\"ERBB2\\tEXN40CQ46eDV\\tGENE\\tmFXQLvHD4isJ\\t458\\t68\\t\",\"ROS1\\twLhuE7H66eEA\\tGENE\\tmFXQLvHD4isJ\\t1076\\t68\\t\",\"TSC1\\tj4o-n6HA-n8F\\tGENE\\tEXtYcXdy4Qsz\\t316\\t384\\t\",\"RIT1\\ttYpKvL066Dru\\tGENE\\t0aa7a88C5GOW\\t768\\t233\\t\",\"RET\\tds40mB756eC4\\tGENE\\tmFXQLvHD4isJ\\t925\\t68\\t\",\"PTEN\\tua2-F70X4XuC\\tGENE\\t-1\\t149\\t178\\t\",\"Cell survival\\tNmj0_LZZ4VXj\\tPROCESS\\t-1\\t622\\t637\\t\",\"MTOR\\tNCFq_dYD4Py9\\tGENE\\t-1\\t393\\t542\\t\",\"TSC\\tEXtYcXdy4Qsz\\tFAMILY\\t-1\\t393\\t384\\t\",\"MET\\tTXeWKOZB6eDs\\tGENE\\tmFXQLvHD4isJ\\t609\\t68\\t\",\"BRAF\\t8-YqWx2X4f5G\\tGENE\\t-1\\t690\\t365\\t\",\"PIK3CA\\t8Qu-Lwni4HZ-\\tGENE\\t-1\\t393\\t178\\t\",\"RTK\\tmFXQLvHD4isJ\\tFAMILY\\t-1\\t690\\t68\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"IBP-n3fS5SVk\\tcwgYdqrk4hBA\\t9M7XTM_-4WR7\\tACTIVATES\",\"gUN_eI4KYtT7\\tNCFq_dYD4Py9\\tecQpjv9Q4Urm\\tACTIVATES\",\"m9Gf2Xzf5WX3\\tEXtYcXdy4Qsz\\tNCFq_dYD4Py9\\tACTIVATES\",\"yqPnLI4M5aT7\\tFyui5tkl4cr5\\tNCFq_dYD4Py9\\tACTIVATES\",\"lIoLBw5O5RdC\\tcwgYdqrk4hBA\\tNmj0_LZZ4VXj\\tACTIVATES\",\"qg8iuvID5Mhz\\t0aa7a88C5GOW\\t8-YqWx2X4f5G\\tACTIVATES\",\"o72iUn2l5c3a\\tua2-F70X4XuC\\t8Qu-Lwni4HZ-\\tINHIBITS\",\"j1x2CWxh5Iy4\\tmFXQLvHD4isJ\\t0aa7a88C5GOW\\tACTIVATES\",\"EuuexlE5Y05b\\tNCFq_dYD4Py9\\t9M7XTM_-4WR7\\tACTIVATES\",\"8Uu5IYEq5KQg\\tQkA8DtgZ4Feb\\t0aa7a88C5GOW\\tINHIBITS\",\"2pXFnqhL5OzR\\tcwgYdqrk4hBA\\tecQpjv9Q4Urm\\tACTIVATES\",\"gE5bPX0c5VDK\\t25v4OB1H4IlR\\tEXtYcXdy4Qsz\\tINHIBITS\",\"HshnmzcdYu-I\\tNCFq_dYD4Py9\\tNmj0_LZZ4VXj\\tACTIVATES\",\"UuK2Sd1m5T5a\\t8Qu-Lwni4HZ-\\t25v4OB1H4IlR\\tACTIVATES\",\"pSaMDCCD5eRf\\tbqBJhHco4YrE\\t8Qu-Lwni4HZ-\\tINHIBITS\",\"6eV4lZbQYv3r\\tNCFq_dYD4Py9\\tNmj0_LZZ4VXj\\tACTIVATES\",\"VFskMcwI5bY7\\ts7zEz-oY4ag8\\tFyui5tkl4cr5\\tACTIVATES\",\"zPkLVdf35NoU\\t8-YqWx2X4f5G\\tcwgYdqrk4hBA\\tACTIVATES\"],\"LUAD-2014-TP53-pathway\":[\"LUAD-2014-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP53\\tCQjbRdgs7ItD\\tGENE\\t-1\\t436\\t249\\t\",\"Cell survival\\tSVkWhzV37N80\\tPROCESS\\t-1\\t510\\t348\\t\",\"Proliferation\\tfz0X8H7D7J7L\\tPROCESS\\t-1\\t342\\t347\\t\",\"ATM\\tgjYBW9Ea7HZc\\tGENE\\t-1\\t510\\t151\\t\",\"MDM2\\tSdbPatXY7HDu\\tGENE\\t-1\\t342\\t151\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"npAcARys7a_k\\tCQjbRdgs7ItD\\tSVkWhzV37N80\\tINHIBITS\",\"VGJAIfU07X_O\\tSdbPatXY7HDu\\tCQjbRdgs7ItD\\tINHIBITS\",\"yaRRpgbw7aKj\\tCQjbRdgs7ItD\\tfz0X8H7D7J7L\\tINHIBITS\",\"6yEDoser7Y_S\\tgjYBW9Ea7HZc\\tCQjbRdgs7ItD\\tACTIVATES\"],\"LUSC-2012-Notch-signaling-pathway\":[\"LUSC-2012-Notch-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP63\\tjwpnNGJWSGmo\\tGENE\\t-1\\t665\\t118\\t\",\"NOTCH1\\tuCLr0FZ-DVjI\\tGENE\\tqDU9qUkVWgQy\\t307\\t245\\t\",\"NOTCH\\tqDU9qUkVWgQy\\tFAMILY\\t-1\\t385\\t245\\t\",\"FOXP1\\tOQXnexCbWaQC\\tGENE\\t-1\\t781\\t245\\t\",\"NOTCH2\\t8xqf1lEoDVjf\\tGENE\\tqDU9qUkVWgQy\\t462\\t245\\t\",\"SOX2\\tz9OhKjOpSGPy\\tGENE\\t-1\\t392\\t118\\t\",\"ASCL4\\tB7vcA7ATWYcn\\tGENE\\t-1\\t624\\t245\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"PLEAy9rIWrEw\\tz9OhKjOpSGPy\\tqDU9qUkVWgQy\\tINHIBITS\",\"JC1sUBM-WtKp\\tz9OhKjOpSGPy\\tB7vcA7ATWYcn\\tINHIBITS\",\"lP_hmn57Wt5k\\tz9OhKjOpSGPy\\tOQXnexCbWaQC\\tINHIBITS\",\"NJbf1vyhWr_5\\tjwpnNGJWSGmo\\tqDU9qUkVWgQy\\tINHIBITS\"],\"LUSC-2012-Oxidative-stress-response-pathway\":[\"LUSC-2012-Oxidative-stress-response-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CUL3\\tlReeCCfNRhiB\\tGENE\\t-1\\t567\\t154\\t\",\"NFE2L2\\tb31Gx6nxRij2\\tGENE\\t-1\\t480\\t256\\t\",\"KEAP1\\t74W2ldwARhHq\\tGENE\\t-1\\t381\\t154\\t\",\"Oxidative stress response\\tHZ9RxRrPRkFz\\tPROCESS\\t-1\\t480\\t363\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"RQOk_9p-Rv2F\\tb31Gx6nxRij2\\tHZ9RxRrPRkFz\\tACTIVATES\",\"CT9Gtmm5Rqtm\\t74W2ldwARhHq\\tb31Gx6nxRij2\\tINHIBITS\",\"HHBAbZS1Rto5\\tlReeCCfNRhiB\\tb31Gx6nxRij2\\tINHIBITS\"],\"LUSC-2012-RTK-RAS-PI(3)K-pathway\":[\"LUSC-2012-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"FGFR1\\tMvptxoO61bRr\\tGENE\\tyiHWlSi0ZceY\\t1097\\t185\\t\",\"KRAS\\tsWfNqwir1dxE\\tGENE\\twfQD-GssZd01\\t894\\t292\\t\",\"PTEN\\tZymRaEU8XIRY\\tGENE\\t-1\\t188\\t185\\t\",\"ERBB3\\tRm4wq0_z1bQa\\tGENE\\tyiHWlSi0ZceY\\t936\\t185\\t\",\"Proliferation\\tP8EboRv6ZME9\\tPROCESS\\t-1\\t494\\t543\\t\",\"AMPK\\t02umJdNsXOpl\\tGENE\\t-1\\t42\\t405\\t\",\"RTK\\tyiHWlSi0ZceY\\tFAMILY\\t-1\\t1023\\t185\\t\",\"AKT\\toxyofYva1T05\\tFAMILY\\t-1\\t389\\t292\\t\",\"AKT2\\tlarrnE_S1WJv\\tGENE\\toxyofYva1T05\\t389\\t292\\t\",\"RAS\\twfQD-GssZd01\\tFAMILY\\t-1\\t894\\t292\\t\",\"Translation\\tHR4vBeq2ZNsn\\tPROCESS\\t-1\\t798\\t543\\t\",\"NF1\\tiabVj2PwYZp2\\tGENE\\t-1\\t1250\\t339\\t\",\"FGFR3\\t2C2nCxu91bRd\\tGENE\\tyiHWlSi0ZceY\\t1424\\t185\\t\",\"STK11\\tO4y17G4EXLUD\\tGENE\\t-1\\t-49\\t300\\t\",\"EGFR\\tAx89UA0r1bQ9\\tGENE\\tyiHWlSi0ZceY\\t622\\t185\\t\",\"TSC2\\tzY7tgwSJ1XbR\\tGENE\\tqLC0RZ4XXsZX\\t403\\t380\\t\",\"TSC\\tqLC0RZ4XXsZX\\tFAMILY\\t-1\\t324\\t380\\t\",\"MTOR\\t9xgTtYW2XQeX\\tGENE\\t-1\\t147\\t480\\t\",\"RASA1\\tDvdwOn2xYWd3\\tGENE\\t-1\\t1250\\t270\\t\",\"AKT3\\tzzXDUqB91WKC\\tGENE\\toxyofYva1T05\\t546\\t292\\t\",\"FGFR2\\tXUUZCJbJ1bRO\\tGENE\\tyiHWlSi0ZceY\\t1259\\t185\\t\",\"PI3K\\tFq9ew-K6XKj-\\tFAMILY\\t-1\\t383\\t185\\t\",\"NRAS\\tW0krGYlI1dxY\\tGENE\\twfQD-GssZd01\\t1054\\t292\\t\",\"ERBB2\\ttKS__G_N1bQt\\tGENE\\tyiHWlSi0ZceY\\t780\\t185\\t\",\"AKT1\\tO_LJqz4I1WJd\\tGENE\\toxyofYva1T05\\t232\\t292\\t\",\"HRAS\\tXIj4ze_l1dxl\\tGENE\\twfQD-GssZd01\\t734\\t292\\t\",\"Cell survival\\tnNugUqXiZNB6\\tPROCESS\\t-1\\t644\\t543\\t\",\"BRAF\\tT1CL0I79YgGR\\tGENE\\t-1\\t894\\t405\\t\",\"PIK3CA\\tcykG-Tsv1fu4\\tGENE\\tFq9ew-K6XKj-\\t383\\t185\\t\",\"TSC1\\t1paUtI_G1Xbd\\tGENE\\tqLC0RZ4XXsZX\\t245\\t380\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"QLi86o6iaTAU\\tT1CL0I79YgGR\\tnNugUqXiZNB6\\tACTIVATES\",\"gB5T8yfp3IU3\\t9xgTtYW2XQeX\\tHR4vBeq2ZNsn\\tACTIVATES\",\"sXH_uS-e1T1m\\toxyofYva1T05\\tHR4vBeq2ZNsn\\tACTIVATES\",\"WUv8Ij4AaR-n\\tT1CL0I79YgGR\\tP8EboRv6ZME9\\tACTIVATES\",\"RCM2k2xJ1T1r\\toxyofYva1T05\\tqLC0RZ4XXsZX\\tINHIBITS\",\"4bGJbkzlaO_3\\tDvdwOn2xYWd3\\twfQD-GssZd01\\tINHIBITS\",\"awuopxpi1T1c\\toxyofYva1T05\\tP8EboRv6ZME9\\tACTIVATES\",\"WURhbp8YX5ol\\tO4y17G4EXLUD\\t02umJdNsXOpl\\tACTIVATES\",\"fTcRATeQaEYa\\twfQD-GssZd01\\tT1CL0I79YgGR\\tACTIVATES\",\"-RCFsGxvaQmo\\tiabVj2PwYZp2\\twfQD-GssZd01\\tINHIBITS\",\"9dW1i3sN3Gtu\\t9xgTtYW2XQeX\\tP8EboRv6ZME9\\tACTIVATES\",\"Uc5AjjxV3HcN\\t9xgTtYW2XQeX\\tnNugUqXiZNB6\\tACTIVATES\",\"vYmJjY8pX14b\\tZymRaEU8XIRY\\tFq9ew-K6XKj-\\tINHIBITS\",\"pzSfIS3bX6g_\\t02umJdNsXOpl\\t9xgTtYW2XQeX\\tACTIVATES\",\"3eElg70UaNdN\\tyiHWlSi0ZceY\\twfQD-GssZd01\\tACTIVATES\",\"-GLnxzAk1T1w\\toxyofYva1T05\\tnNugUqXiZNB6\\tACTIVATES\",\"eDF8oz7ZaT8J\\tT1CL0I79YgGR\\tHR4vBeq2ZNsn\\tACTIVATES\",\"vecmsBiI1T1S\\tFq9ew-K6XKj-\\toxyofYva1T05\\tACTIVATES\"],\"MYC\":[\"MYC\",\"\",\"Involves a number of transcription regulation complexes: MYC-MAX, MAX-MXD, MAX-MGA, and the energy sensing, MondoA-Mlx complex in the regulation of apoptotic response and cell differentiation.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MXD1\\tYd6m7-sCeh37\\tGENE\\tTrTubnzSeh3h\\t151\\t436\",\"MXD4\\tplDFXS0peh30\\tGENE\\tTrTubnzSeh3h\\t488\\t436\",\"MXI1\\tdNmw_8oVeh3k\\tGENE\\tTrTubnzSeh3h\\t651\\t436\",\"MGA\\tGt92f6Iyeh3a\\tGENE\\tLwRHv9NUeh3R\\t580\\t310\",\"MYC/MAX Complex\\tOCJ3wBBPeh4J\\tCOMPLEX\\t-1\\t479\\t172\",\"MYC\\tKDr5caJdeh4X\\tGENE\\tOCJ3wBBPeh4J\\t313\\t172\",\"MYCL\\tm1nG2P8zeh4p\\tGENE\\tOCJ3wBBPeh4J\\t645\\t173\",\"MLXIPL\\t6ZvsmDKBeh3H\\tGENE\\tIuhA7dyleh3B\\t571\\t658\",\"MAX/MXD Complex\\tTrTubnzSeh3h\\tCOMPLEX\\t-1\\t483\\t436\",\"MAX\\tyGKkO3Ajeh3V\\tGENE\\tLwRHv9NUeh3R\\t344\\t310\",\"MXD3\\ta19O0LiCeh3p\\tGENE\\tTrTubnzSeh3h\\t323\\t436\",\"MLXIP\\tO9V1RuKxeh3K\\tGENE\\tIuhA7dyleh3B\\t395\\t656\",\"MLX\\teH1TNcCVeh3F\\tGENE\\tIuhA7dyleh3B\\t490\\t550\",\"MYCN\\tMn3yUjZveh4v\\tGENE\\tOCJ3wBBPeh4J\\t478\\t173\",\"MLX/MONDO Complex\\tIuhA7dyleh3B\\tCOMPLEX\\t-1\\t483\\t604\",\"MNT\\tmfvZ3Tqreh3u\\tGENE\\tTrTubnzSeh3h\\t815\\t436\",\"MAX/MGA Complex\\tLwRHv9NUeh3R\\tCOMPLEX\\t-1\\t462\\t310\",\"Cell growth, proliferation, apoptosis\\trU4TiKfKeh43\\tPROCESS\\t-1\\t-237\\t433\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"w4MBdulYeh48\\tOCJ3wBBPeh4J\\tyGKkO3Ajeh3V\\tBINDS\\t\",\"kmXInTa9eh5O\\t6ZvsmDKBeh3H\\teH1TNcCVeh3F\\tBINDS\\t\",\"Hv8GfgZPeh5T\\tyGKkO3Ajeh3V\\tGt92f6Iyeh3a\\tNONE\\t\",\"9h-taWpfeh5Z\\tLwRHv9NUeh3R\\trU4TiKfKeh43\\tINHIBITS\\t\",\"eTpDGcg6eh5B\\tOCJ3wBBPeh4J\\trU4TiKfKeh43\\tACTIVATES\\t\",\"mfpvepQNeh5c\\tTrTubnzSeh3h\\tIuhA7dyleh3B\\tBINDS\\t\",\"QJOD8bddeh5I\\tIuhA7dyleh3B\\trU4TiKfKeh43\\tACTIVATES\\t\",\"9ShDYkfTeh5Q\\tO9V1RuKxeh3K\\teH1TNcCVeh3F\\tBINDS\\t\",\"Vfrm_1Ezeh5E\\tTrTubnzSeh3h\\trU4TiKfKeh43\\tINHIBITS\\t\",\"nrV2aZn8eh5L\\tyGKkO3Ajeh3V\\tTrTubnzSeh3h\\tBINDS\\t\"],\"NOTCH\":[\"NOTCH\",\"\",\"Pathway involved in cell-cell communication, cell fate. Cleavage of Notch receptors leads to the displacement of a transcription repressor complex on RBPJ (a transcription factor also known as CSL) accompanied by recruitment of an activation complex (including MAMLs) leads to transcription of Notch target genes.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NRARP\\tIyt-kiQdVYR4\\tGENE\\t-1\\t1392\\t357\",\"CUL1\\tORzx_8_5UAjR\\tGENE\\t-1\\t861\\t171\",\"CREBBP\\thrOQVgOCWtHH\\tGENE\\tamGWWOzfWrg1\\t1006\\t344\",\"NCOR2\\ttRKlqV2HWQET\\tGENE\\t1WQdsd0RVSHH\\t919\\t500\",\"SPEN\\tt3mLgYfBWQD4\\tGENE\\t1WQdsd0RVSHH\\t1078\\t439\",\"NOTCH3\\t2YXLvEuJWVnS\\tGENE\\tfLn2ytnZVU-1\\t386\\t344\",\" \\tamGWWOzfWrg1\\tCOMPLEX\\t-1\\t1089\\t309\",\"CNTN6\\t8xDiqqMtUlgK\\tGENE\\t-1\\t153\\t344\",\"HES-X\\tCCp9TqYNVWpA\\tGENE\\t-1\\t1392\\t221\",\"KAT2B\\tW6JlNq1wWtHA\\tGENE\\tamGWWOzfWrg1\\t1171\\t274\",\"KDM5A\\tTHgZUx73WQED\\tGENE\\t1WQdsd0RVSHH\\t1240\\t439\",\"DNER\\t8lwlJT8zUt7J\\tGENE\\t-1\\t386\\t439\",\"NCOR1\\tVh9n-uUkWQDu\\tGENE\\t1WQdsd0RVSHH\\t917\\t440\",\"CLEAVED NOTCH\\tH-nBa6GpUrhI\\tCOMPLEX\\t-1\\t781\\t316\",\"FBXW7\\t5nfQJAxjT_z9\\tGENE\\t-1\\t630\\t171\",\" \\t1WQdsd0RVSHH\\tFAMILY\\t-1\\t1079\\t469\",\"NOTCH1\\tVG_45lkLWVm6\\tGENE\\tfLn2ytnZVU-1\\t386\\t274\",\"MALM3\\tdAIql3LLWtG5\\tGENE\\tamGWWOzfWrg1\\t1007\\t274\",\"NOV\\tfhalsWFrUkbl\\tGENE\\t-1\\t153\\t274\",\"JAG2\\tEjlh1U2VT-P2\\tGENE\\t-1\\t285\\t171\",\" \\tfLn2ytnZVU-1\\tCOMPLEX\\t-1\\t472\\t309\",\"HEY-X\\t0mJB_ECxVXFr\\tGENE\\t-1\\t1392\\t288\",\"PSEN2\\tXzuk75kgUufI\\tGENE\\t-1\\t558\\t439\",\"EP300\\tq34LVe78WtHT\\tGENE\\tamGWWOzfWrg1\\t1170\\t344\",\"NOTCH2\\tYBZcjlo4WVnH\\tGENE\\tfLn2ytnZVU-1\\t558\\t274\",\"ARRDC1\\tQj8O9GJNT_AD\\tGENE\\t-1\\t454\\t171\",\"NOTCH4\\tQf89YkiEWVne\\tGENE\\tfLn2ytnZVU-1\\t558\\t344\",\"Cell growth, apoptosis\\tNvu3J1djU_IC\\tPROCESS\\t-1\\t1562\\t439\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"3ZGBwutXWvCf\\t1WQdsd0RVSHH\\tamGWWOzfWrg1\\tINHIBITS\\t\",\"ojk1D4nOWbct\\tEjlh1U2VT-P2\\tfLn2ytnZVU-1\\tACTIVATES\\t\",\"U40tVKQcWjcm\\tXzuk75kgUufI\\tfLn2ytnZVU-1\\tACTIVATES\\t\",\"qgZ5w26hWm8v\\t8xDiqqMtUlgK\\tfLn2ytnZVU-1\\tINHIBITS\\t\",\"xzRJacuuWiP-\\t5nfQJAxjT_z9\\tH-nBa6GpUrhI\\tINHIBITS\\t\",\"_RaZlGxreARX\\tIyt-kiQdVYR4\\tNvu3J1djU_IC\\tINHIBITS\\t\",\"6YudlCKlWygq\\tamGWWOzfWrg1\\tCCp9TqYNVWpA\\tACTIVATES\\t\",\"6YYOMrO7W1Lu\\tamGWWOzfWrg1\\tIyt-kiQdVYR4\\tACTIVATES\\t\",\"y9nj-EHqWlEU\\tfhalsWFrUkbl\\tfLn2ytnZVU-1\\tINHIBITS\\t\",\"QgTnL-0zWfX-\\t8lwlJT8zUt7J\\tfLn2ytnZVU-1\\tACTIVATES\\t\",\"YvuJzpCJWoS3\\tORzx_8_5UAjR\\t5nfQJAxjT_z9\\tACTIVATES\\t\",\"QWoJOCVzW3SR\\t0mJB_ECxVXFr\\tNvu3J1djU_IC\\tACTIVATES\\t\",\"9I6RH1JoWwwW\\tH-nBa6GpUrhI\\tamGWWOzfWrg1\\tACTIVATES\\t\",\"4oG8A9OTWz_Z\\tamGWWOzfWrg1\\t0mJB_ECxVXFr\\tACTIVATES\\t\",\"WZmI2ceJWg0e\\tQj8O9GJNT_AD\\tfLn2ytnZVU-1\\tINHIBITS\\t\",\"U1KCxbf0W2Wy\\tCCp9TqYNVWpA\\tNvu3J1djU_IC\\tACTIVATES\\t\"],\"NRF2\":[\"NRF2\",\"\",\"Involves the regulation of the transcription factor NFE2L2 by KEAP1. NFE2L2 regulates genes with the antioxidant response elements (ARE) that aid in cellular response against oxidative stress thought to aid in cancer chemoresistance.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KEAP1\\tOkLgTv_3eszi\\tGENE\\t-1\\t294\\t147\",\"CUL3\\tpxCvh_ojeszm\\tGENE\\t-1\\t469\\t147\",\"Oxidative Stress Response\\tE9bpVpoWeszr\\tPROCESS\\t-1\\t598\\t240\",\"NFE2L2\\tsKw8nuDgeszp\\tGENE\\t-1\\t385\\t240\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"wIxLZx13eszt\\tOkLgTv_3eszi\\tsKw8nuDgeszp\\tINHIBITS\\t\",\"aWKwI8rJesz1\\tsKw8nuDgeszp\\tE9bpVpoWeszr\\tACTIVATES\\t\",\"Ng79Bysjeszx\\tpxCvh_ojeszm\\tsKw8nuDgeszp\\tINHIBITS\\t\"],\"OV-2011-Cell-cycle-signaling-pathway\":[\"OV-2011-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\toN50crvCRjmK\\tGENE\\t-1\\t635\\t68\\t\",\"RB1\\ttJj5RrqJRq1h\\tGENE\\t-1\\t635\\t299\\t\",\"CCNE1\\tSx3IX8ExBTXu\\tGENE\\tFY8bF0WdRsru\\t639\\t148\\t\",\"CCND1\\tBIDGlk8LBTX9\\tGENE\\tFY8bF0WdRsru\\t550\\t207\\t\",\"CYCLINS\\tFY8bF0WdRsru\\tFAMILY\\t-1\\t634\\t177\\t\",\"Cell cycle progression\\tnnswnmMyRv3y\\tPROCESS\\t-1\\t635\\t373\\t\",\"CCND2\\tIxg8lLJLBTXd\\tGENE\\tFY8bF0WdRsru\\t719\\t207\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"duEMY1UXR86v\\tFY8bF0WdRsru\\ttJj5RrqJRq1h\\tINHIBITS\",\"__OC9xbiR-Fr\\ttJj5RrqJRq1h\\tnnswnmMyRv3y\\tACTIVATES\",\"VqDZTZnER7cZ\\toN50crvCRjmK\\tFY8bF0WdRsru\\tINHIBITS\"],\"OV-2011-Notch-signaling-pathway\":[\"OV-2011-Notch-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MAML3\\twTL7UE_SDIWe\\tGENE\\tZ64sAxBCSrsH\\t800\\t380\\t\",\"JAG1\\tEy82kzAQDKzS\\tGENE\\tHPXERf3USgjx\\t462\\t280\\t\",\"MAML1\\tICfP9aB2DIWS\\tGENE\\tZ64sAxBCSrsH\\t800\\t247\\t\",\"JAG2\\tFvIadI1RDKzA\\tGENE\\tHPXERf3USgjx\\t462\\t351\\t\",\"JAG\\tHPXERf3USgjx\\tFAMILY\\t-1\\t462\\t315\\t\",\"NOTCH3\\txiGB_3VdSfd3\\tGENE\\t-1\\t632\\t316\\t\",\"MAML2\\t9xWqi9JKDIWF\\tGENE\\tZ64sAxBCSrsH\\t800\\t314\\t\",\"MAML\\tZ64sAxBCSrsH\\tFAMILY\\t-1\\t800\\t314\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"osh5OcaxTA2q\\tHPXERf3USgjx\\txiGB_3VdSfd3\\tINHIBITS\",\"AivX6u8YTCYD\\tZ64sAxBCSrsH\\txiGB_3VdSfd3\\tINHIBITS\"],\"OV-2011-RTK-RAS-PI(3)K-pathway\":[\"OV-2011-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KRAS\\t4SZmwk65Q2AX\\tGENE\\t-1\\t529\\t119\\t\",\"AKT\\tJXx22AmtmHua\\tFAMILY\\t-1\\t263\\t234\\t\",\"AKT2\\t1QP6Io9jmSsb\\tGENE\\tJXx22AmtmHua\\t263\\t203\\t\",\"NF1\\tbKlDARX_QzeJ\\tGENE\\t-1\\t529\\t41\\t\",\"Proliferation/survival\\teyOUahBEQth7\\tPROCESS\\t-1\\t413\\t402\\t\",\"AKT1\\tpw2OFJfHmSsq\\tGENE\\tJXx22AmtmHua\\t263\\t265\\t\",\"PTEN\\tqx1xPdYgQgUA\\tGENE\\t-1\\t263\\t41\\t\",\"BRAF\\tXLdjd_rNQ5TF\\tGENE\\t-1\\t529\\t239\\t\",\"PIK3CA\\t9WGkKXm-QhuR\\tGENE\\t-1\\t263\\t119\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"lwcl1MvdmPEO\\tJXx22AmtmHua\\teyOUahBEQth7\\tACTIVATES\",\"6CO_N8liRIA4\\tbKlDARX_QzeJ\\t4SZmwk65Q2AX\\tINHIBITS\",\"TDBL0RUZRJb3\\t4SZmwk65Q2AX\\tXLdjd_rNQ5TF\\tACTIVATES\",\"uXgITAznRMO2\\tXLdjd_rNQ5TF\\teyOUahBEQth7\\tACTIVATES\",\"vkkqRMcgQ90m\\t4SZmwk65Q2AX\\t9WGkKXm-QhuR\\tACTIVATES\",\"oxMyRc9ImLT_\\t9WGkKXm-QhuR\\tJXx22AmtmHua\\tACTIVATES\",\"_9kjQAkpdEP0\\tqx1xPdYgQgUA\\t9WGkKXm-QhuR\\tINHIBITS\"],\"PI3K\":[\"PI3K\",\"\",\"A signaling cascade involving PI3K phosphorylation of AKT leading to the activation of the mTORC1 complex. The mTORC1 functions as a metabolic sensor and controls protein abundance by affecting processes involved in protein production and RNA translation leading to changes in cell growth and survival.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"AKT3\\teWz9lexke0kY\\tGENE\\tyEOAK96Ye0j-\\t752\\t327\",\"RPTOR\\tKHzd_YdNe0jd\\tGENE\\tJKE-mm1le0jZ\\t759\\t730\",\"PIK3CA\\tBpH76ff7e0iw\\tGENE\\t-1\\t595\\t176\",\"PIK3R2\\t5lBs8QfFe0i_\\tGENE\\tiK4blWyDe0i1\\t804\\t167\",\"RHEB\\t8eeCwYTqe0jC\\tGENE\\t-1\\t599\\t619\",\"PIK3R\\tiK4blWyDe0i1\\tFAMILY\\t-1\\t804\\t166\",\"AKT\\tyEOAK96Ye0j-\\tFAMILY\\t-1\\t594\\t327\",\"mTORC2\\tMMeMHe4ze0kj\\tFAMILY\\t-1\\t421\\t730\",\"TSC\\t3b8rKMrke0jF\\tFAMILY\\t-1\\t596\\t486\",\"AKT2\\t9o76blkNe0kR\\tGENE\\tyEOAK96Ye0j-\\t594\\t327\",\"mTORC1\\tJKE-mm1le0jZ\\tFAMILY\\t-1\\t678\\t730\",\"PPP2R1A\\tHY1OO1uEe0jv\\tGENE\\t-1\\t971\\t326\",\"PIK3R3\\tGy1IflZce0i5\\tGENE\\tiK4blWyDe0i1\\t804\\t227\",\"PTEN\\tHL_nLOSce0jV\\tGENE\\t-1\\t594\\t91\",\"MTOR\\t_WbyV7oYe0jj\\tGENE\\tJKE-mm1le0jZ\\t597\\t730\",\"PIK3R1\\tj_DI0z3Xe0i8\\tGENE\\tiK4blWyDe0i1\\t804\\t106\",\"Cell growth\\t_wytH85He0jQ\\tPROCESS\\t-1\\t601\\t860\",\"INPP4B\\t2ZOWMzsce0j4\\tGENE\\t-1\\t372\\t178\",\"TSC1\\tx2juQzTie0jM\\tGENE\\t3b8rKMrke0jF\\t596\\t459\",\"TSC2\\tzs4f_I93e0jJ\\tGENE\\t3b8rKMrke0jF\\t596\\t513\",\"RICTOR\\tDg3B9H1Me0ks\\tGENE\\tMMeMHe4ze0kj\\t421\\t730\",\"AKT1\\tTDuOMRUee0kH\\tGENE\\tyEOAK96Ye0j-\\t437\\t327\",\"STK11\\tURGrIXe2e0kd\\tGENE\\t-1\\t336\\t483\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"an7n5soQe0k8\\tyEOAK96Ye0j-\\t3b8rKMrke0jF\\tINHIBITS\\t\",\"YeQpbZw0e0lG\\t3b8rKMrke0jF\\t8eeCwYTqe0jC\\tINHIBITS\\t\",\"wjtVfwEee0lB\\tJKE-mm1le0jZ\\t_wytH85He0jQ\\tACTIVATES\\t\",\"6Mr0F0gAe0lD\\tURGrIXe2e0kd\\t3b8rKMrke0jF\\tACTIVATES\\t\",\"EigHAJh7e0lI\\tHL_nLOSce0jV\\tBpH76ff7e0iw\\tINHIBITS\\t\",\"s7B8LZsde0k-\\tBpH76ff7e0iw\\tyEOAK96Ye0j-\\tACTIVATES\\t\",\"1T4VmG08e0lL\\tiK4blWyDe0i1\\tBpH76ff7e0iw\\tINHIBITS\\t\",\"3yNlj0Tge0k2\\t8eeCwYTqe0jC\\tJKE-mm1le0jZ\\tACTIVATES\\t\",\"NuGuIugXe0k6\\t2ZOWMzsce0j4\\tBpH76ff7e0iw\\tINHIBITS\\t\",\"pYhyONrDe0lP\\tDg3B9H1Me0ks\\tURGrIXe2e0kd\\tACTIVATES\\t\",\"h-JnEMgBe0lN\\tHY1OO1uEe0jv\\tyEOAK96Ye0j-\\tINHIBITS\\t\"],\"RTK-RAS\":[\"RTK-RAS\",\"\",\"A signaling cascade pathway initiated by activation of RTKs followed signal transduction through Ras then Raf and then MEK family members. This cascade leads to the activation of several transcription factors that regulate processes involving cell proliferation and survival.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NRAS\\tQHZo7kkDfrMO\\tGENE\\tb8V1sXZDfrL1\\t1142\\t348\",\"ROS1\\ttNj2tohofrKR\\tGENE\\t8tMooF5vfrKJ\\t664\\t166\",\"KIT\\tgWlRUSfzfrKt\\tGENE\\t8tMooF5vfrKJ\\t1142\\t104\",\"Translation\\t7CK2REgNfrKF\\tPROCESS\\t-1\\t881\\t625\",\"PTPN11\\tjTtQAhJrfrJx\\tGENE\\t-1\\t504\\t348\",\"RAS\\tb8V1sXZDfrL1\\tFAMILY\\t-1\\t1063\\t348\",\"RET\\tyjRzsMVifrKy\\tGENE\\t8tMooF5vfrKJ\\t504\\t166\",\"CBL\\t0a_o8sXafrJh\\tGENE\\t-1\\t504\\t262\",\"Proliferation\\t3VFXQGLzfrJ-\\tPROCESS\\t-1\\t559\\t626\",\"FLT3\\tIpmlW5vMfrLc\\tGENE\\t8tMooF5vfrKJ\\t982\\t166\",\"NF1\\t59lXGxKMfrJn\\tGENE\\t-1\\t1142\\t262\",\"NTRK2\\t5SlBGbo1frLr\\tGENE\\t8tMooF5vfrKJ\\t1302\\t166\",\"ERRFI1\\t-V-9_6fAfrJj\\tGENE\\t-1\\t664\\t262\",\"ARAF\\tcBahXkGvfrMn\\tGENE\\tsApg3-IVfrMe\\t982\\t429\",\"FGFR3\\t1EucZO9pfrLJ\\tGENE\\t8tMooF5vfrKJ\\t824\\t104\",\"HRAS\\tBB8hBTZ4frME\\tGENE\\tb8V1sXZDfrL1\\t982\\t348\",\"MET\\t_yKldPkzfrKZ\\tGENE\\t8tMooF5vfrKJ\\t1142\\t41\",\"RAF1\\tLk9sb9wzfrM5\\tGENE\\tsApg3-IVfrMe\\t1302\\t429\",\"RAC1\\tzDRSUmjffrJ7\\tGENE\\t-1\\t614\\t511\",\"FGFR1\\tRFZ2wD4YfrKf\\tGENE\\t8tMooF5vfrKJ\\t504\\t104\",\"MEK\\t3psJQJmGfrJV\\tFAMILY\\t-1\\t1062\\t511\",\"FGFR2\\tnTecsKLYfrKj\\tGENE\\t8tMooF5vfrKJ\\t664\\t104\",\"KRAS\\te8tWMLoVfrL9\\tGENE\\tb8V1sXZDfrL1\\t824\\t348\",\"BRAF\\tNM12nD_nfrMx\\tGENE\\tsApg3-IVfrMe\\t1142\\t429\",\"ERBB2\\tC45Adl13frKV\\tGENE\\t8tMooF5vfrKJ\\t664\\t41\",\"ERBB4\\tZ-e0kCBwfrKN\\tGENE\\t8tMooF5vfrKJ\\t982\\t41\",\"MAPK1\\tR9ZNAxVRfrJ3\\tGENE\\t-1\\t783\\t511\",\"RAF\\tsApg3-IVfrMe\\tFAMILY\\t-1\\t1142\\t429\",\"EGFR\\t9Psi8emvfrK3\\tGENE\\t8tMooF5vfrKJ\\t504\\t41\",\"RASA1\\tZSZjKexZfrJ0\\tGENE\\t-1\\t1301\\t262\",\"FGFR4\\tMfs6mvKHfrKo\\tGENE\\t8tMooF5vfrKJ\\t982\\t104\",\"IGF1R\\tCvsyhyzdfrLQ\\tGENE\\t8tMooF5vfrKJ\\t1302\\t104\",\"ERBB3\\trORV55VHfrK9\\tGENE\\t8tMooF5vfrKJ\\t824\\t41\",\"Cell survival\\tvmWLLGP3frKC\\tPROCESS\\t-1\\t718\\t626\",\"SOS1\\tbdPjTyaDfrJu\\tGENE\\t-1\\t982\\t262\",\"RIT1\\tpTVg5xU2frMW\\tGENE\\tb8V1sXZDfrL1\\t1302\\t348\",\"MAP2K2\\tgqrpYTM0frJa\\tGENE\\t3psJQJmGfrJV\\t1142\\t511\",\"ALK\\t1o_9LYSFfrLV\\tGENE\\t8tMooF5vfrKJ\\t824\\t166\",\"NTRK1\\tT6ceghhpfrLj\\tGENE\\t8tMooF5vfrKJ\\t1142\\t166\",\"RTKs\\t8tMooF5vfrKJ\\tFAMILY\\t-1\\t903\\t103\",\"PDGFRA\\ty8PZ8iiyfrLD\\tGENE\\t8tMooF5vfrKJ\\t1302\\t41\",\"MAP2K1\\tQ2i0HY0HfrJe\\tGENE\\t3psJQJmGfrJV\\t982\\t511\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"Rokn-zgqfrNN\\t-V-9_6fAfrJj\\t8tMooF5vfrKJ\\tINHIBITS\\t\",\"BvZejKrrfrNX\\t59lXGxKMfrJn\\tb8V1sXZDfrL1\\tINHIBITS\\t\",\"CEWkH2kYfrNa\\tZSZjKexZfrJ0\\tb8V1sXZDfrL1\\tINHIBITS\\t\",\"In_EmpIgfrNv\\tR9ZNAxVRfrJ3\\t7CK2REgNfrKF\\tACTIVATES\\t\",\"NYpLslu-frNh\\tsApg3-IVfrMe\\t3psJQJmGfrJV\\tACTIVATES\\t\",\"8OWp0SRTfrNm\\tzDRSUmjffrJ7\\tR9ZNAxVRfrJ3\\tACTIVATES\\t\",\"OnjXx-jmfrNk\\t3psJQJmGfrJV\\tR9ZNAxVRfrJ3\\tACTIVATES\\t\",\"HPbM8huafrNU\\tbdPjTyaDfrJu\\tb8V1sXZDfrL1\\tACTIVATES\\t\",\"qtmobl6_frNF\\t0a_o8sXafrJh\\t8tMooF5vfrKJ\\tINHIBITS\\t\",\"8EmU4xtSfrNo\\tR9ZNAxVRfrJ3\\t3VFXQGLzfrJ-\\tACTIVATES\\t\",\"n_C1QGZ2frNr\\tR9ZNAxVRfrJ3\\tvmWLLGP3frKC\\tACTIVATES\\t\",\"vQrHXLexfrNR\\t8tMooF5vfrKJ\\tbdPjTyaDfrJu\\tACTIVATES\\t\",\"gs6EgVUcfrNd\\tb8V1sXZDfrL1\\tsApg3-IVfrMe\\tACTIVATES\\t\"],\"SKCM-2015-Cell-cycle-signaling-pathway\":[\"SKCM-2015-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\tnpKTJggFJS4I\\tGENE\\t-1\\t442\\t89\\t\",\"CYCLINS\\tIba11JzIJVxh\\tFAMILY\\t-1\\t520\\t175\\t\",\"CDK4\\tWcN_CcOrC9iS\\tGENE\\tIba11JzIJVxh\\t442\\t175\\t\",\"E2F\\tXI_rBXYxJXPk\\tGENE\\t-1\\t520\\t372\\t\",\"CCND1\\tv_gEFTZBC9il\\tGENE\\tIba11JzIJVxh\\t599\\t175\\t\",\"Cell cycle progression\\te_ZEQUYtJz1B\\tPROCESS\\t-1\\t520\\t484\\t\",\"RB1\\t4vxRSXTEJWO8\\tGENE\\t-1\\t520\\t276\\t\",\"CDKN2B\\tuK5CVzIeJayA\\tGENE\\t-1\\t599\\t89\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"vJf6xitbJwIp\\tnpKTJggFJS4I\\tIba11JzIJVxh\\tINHIBITS\",\"MrgZ3psqKpK7\\tXI_rBXYxJXPk\\te_ZEQUYtJz1B\\tACTIVATES\",\"fQLLdtj0JzEP\\t4vxRSXTEJWO8\\tXI_rBXYxJXPk\\tINHIBITS\",\"Msdh3q6kJxC4\\tuK5CVzIeJayA\\tIba11JzIJVxh\\tINHIBITS\",\"vjchZOt9JyOV\\tIba11JzIJVxh\\t4vxRSXTEJWO8\\tINHIBITS\"],\"SKCM-2015-Histone-modification-pathway\":[\"SKCM-2015-Histone-modification-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"AURKA\\tUUHLK2LeLlq4\\tGENE\\t-1\\t425\\t166\\t\",\"PPP6C\\tyZeIXzgALlHL\\tGENE\\t-1\\t231\\t166\\t\",\"ARID2\\t4dCj0PbWLn10\\tGENE\\t-1\\t425\\t308\\t\",\"Genetic stability\\txWY6P0idNRza\\tPROCESS\\t-1\\t624\\t195\\t\",\"Chromatin remodeling\\t-c29Xam0NfMu\\tPROCESS\\t-1\\t231\\t263\\t\",\"Chromatid segregation\\tCl7g3xLYLmwQ\\tPROCESS\\t-1\\t624\\t133\\t\",\"Transcriptional control\\tX7mpJiW8Lodu\\tPROCESS\\t-1\\t231\\t342\\t\",\"Epigenetic regulation\\t8D0fnb8SLrSQ\\tPROCESS\\t-1\\t231\\t437\\t\",\"IDH1\\tuHqIeo66Lqq9\\tGENE\\t-1\\t425\\t435\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"9WzDoyMZNXKq\\tUUHLK2LeLlq4\\tCl7g3xLYLmwQ\\tACTIVATES\",\"nh2AMryLNpj_\\tuHqIeo66Lqq9\\t8D0fnb8SLrSQ\\tACTIVATES\",\"3ixp2EynNWMa\\tyZeIXzgALlHL\\tUUHLK2LeLlq4\\tACTIVATES\",\"-scKWlPDNX6-\\tUUHLK2LeLlq4\\txWY6P0idNRza\\tACTIVATES\",\"8YJTZK-INn2c\\t4dCj0PbWLn10\\t-c29Xam0NfMu\\tACTIVATES\",\"MdvHv-NFNoui\\t4dCj0PbWLn10\\tX7mpJiW8Lodu\\tACTIVATES\"],\"SKCM-2015-RTK-RAS-PI(3)K-pathway\":[\"SKCM-2015-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Proliferation\\tOpbQ5N5BIR7T\\tPROCESS\\t-1\\t528\\t524\\t\",\"NF1\\tz9P8VET8IH-v\\tGENE\\t-1\\t256\\t147\\t\",\"NRAS\\tstZUUqWp9HOb\\tGENE\\tdQrC9TeNIX-m\\t374\\t236\\t\",\"Survival\\tDXOfiysJIUYY\\tPROCESS\\t-1\\t1107\\t329\\t\",\"RAS\\tdQrC9TeNIX-m\\tFAMILY\\t-1\\t529\\t236\\t\",\"RAC1\\t8CZU3OY7IlD5\\tGENE\\t-1\\t880\\t364\\t\",\"KIT\\tyhNL3UBnIL-5\\tGENE\\t-1\\t880\\t120\\t\",\"AKT Pathway\\t5m3zxs1KINf7\\tPROCESS\\t-1\\t880\\t241\\t\",\"MAP2K1\\teNN9GlQaIQwL\\tGENE\\t-1\\t528\\t435\\t\",\"PTEN\\tRtyOk-X-ITE3\\tGENE\\t-1\\t1106\\t241\\t\",\"BRAF\\t4dRiJZfvIPWm\\tGENE\\t-1\\t528\\t338\\t\",\"KRAS\\thksSbzGD9HOJ\\tGENE\\tdQrC9TeNIX-m\\t685\\t236\\t\",\"HRAS\\tNNEMBzDV9HNw\\tGENE\\tdQrC9TeNIX-m\\t530\\t236\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"soPzg51UIxxj\\t8CZU3OY7IlD5\\t5m3zxs1KINf7\\tACTIVATES\",\"Cf02-ifyItuD\\tdQrC9TeNIX-m\\t4dRiJZfvIPWm\\tACTIVATES\",\"BqXWl69hI1zW\\tyhNL3UBnIL-5\\t5m3zxs1KINf7\\tACTIVATES\",\"1Aepvid-IqoA\\tz9P8VET8IH-v\\tdQrC9TeNIX-m\\tINHIBITS\",\"J01_493NIzbP\\t4dRiJZfvIPWm\\t5m3zxs1KINf7\\tACTIVATES\",\"PCKlXBgfIu2g\\t4dRiJZfvIPWm\\teNN9GlQaIQwL\\tACTIVATES\",\"q7PHpnTgIwuD\\t8CZU3OY7IlD5\\teNN9GlQaIQwL\\tACTIVATES\",\"FxAnigvrI2_i\\t5m3zxs1KINf7\\tDXOfiysJIUYY\\tACTIVATES\",\"uglecyI1IsGD\\tyhNL3UBnIL-5\\tdQrC9TeNIX-m\\tACTIVATES\",\"iCnUjDjmIvi5\\teNN9GlQaIQwL\\tOpbQ5N5BIR7T\\tACTIVATES\",\"HEzFrHkCI0l-\\tRtyOk-X-ITE3\\t5m3zxs1KINf7\\tINHIBITS\"],\"SKCM-2015-TP53-pathway\":[\"SKCM-2015-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Apoptosis\\tTc8UdIhSLCIT\\tPROCESS\\t-1\\t289\\t372\\t\",\"TP53\\tGBRktWHeLBFQ\\tGENE\\t-1\\t381\\t273\\t\",\"MDM2\\t-VggHhz9K-1w\\tGENE\\t-1\\t381\\t193\\t\",\"CDKN2B\\tB3XBHs3yK9o7\\tGENE\\t-1\\t456\\t108\\t\",\"Senescence\\tcLoUlZOZLD0x\\tPROCESS\\t-1\\t456\\t372\\t\",\"CDKN2A\\thml0YQ9_K8tc\\tGENE\\t-1\\t289\\t108\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"gBzu2KRcLSuV\\tB3XBHs3yK9o7\\t-VggHhz9K-1w\\tINHIBITS\",\"XenUWWntLTzX\\t-VggHhz9K-1w\\tGBRktWHeLBFQ\\tINHIBITS\",\"WNkolmuaLVxV\\tGBRktWHeLBFQ\\tcLoUlZOZLD0x\\tACTIVATES\",\"N3sY9gBuLVHA\\tGBRktWHeLBFQ\\tTc8UdIhSLCIT\\tACTIVATES\",\"2r21RRvbLR21\\thml0YQ9_K8tc\\t-VggHhz9K-1w\\tINHIBITS\"],\"STAD-2014-RTK-RAS-PI(3)K-pathway\":[\"STAD-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PTEN\\t6OFxgP6h9_xG\\tGENE\\t-1\\t341\\t496\\t\",\"RASA1\\tY6PU3f3t93HB\\tGENE\\t-1\\t419\\t172\\t\",\"KRAS\\txCs5lqYG7Z1Z\\tGENE\\t7oEmRnmC-RqY\\t341\\t265\\t\",\"JAK2\\tL1LDTgi27i0r\\tGENE\\tuCiynVqo-CBg\\t167\\t366\\t\",\"PIK3R1\\tij4dXcH1-Ah1\\tGENE\\t-1\\t516\\t496\\t\",\"RAS\\t7oEmRnmC-RqY\\tFAMILY\\t-1\\t420\\t265\\t\",\"NRAS\\tdwqmccUP7Z1E\\tGENE\\t7oEmRnmC-RqY\\t499\\t265\\t\",\"ERBB2\\tL6F3ltyJ7i1T\\tGENE\\tuCiynVqo-CBg\\t167\\t233\\t\",\"EGFR\\tOrbXhKLA7i1D\\tGENE\\tuCiynVqo-CBg\\t167\\t164\\t\",\"FGFR2\\tGc4Ktrgt7i1M\\tGENE\\tuCiynVqo-CBg\\t167\\t430\\t\",\"PIK3CA\\tWBOfcnh9993x\\tGENE\\t-1\\t419\\t394\\t\",\"MET\\tgbmLOkrS7i1x\\tGENE\\tuCiynVqo-CBg\\t167\\t496\\t\",\"RTK\\tuCiynVqo-CBg\\tFAMILY\\t-1\\t167\\t330\\t\",\"ERBB3\\t6Uq7nWdq7i1f\\tGENE\\tuCiynVqo-CBg\\t167\\t299\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"20X5Aj7K-bWX\\t6OFxgP6h9_xG\\tWBOfcnh9993x\\tINHIBITS\",\"VZzlIbfS-edr\\tuCiynVqo-CBg\\t7oEmRnmC-RqY\\tACTIVATES\",\"KrNMU6gX-f84\\tuCiynVqo-CBg\\tWBOfcnh9993x\\tACTIVATES\",\"1JHahVpJ-cGV\\tij4dXcH1-Ah1\\tWBOfcnh9993x\\tINHIBITS\",\"IyUACdpr-YSa\\t7oEmRnmC-RqY\\tWBOfcnh9993x\\tACTIVATES\",\"OPPikJRZ-XUc\\tY6PU3f3t93HB\\t7oEmRnmC-RqY\\tINHIBITS\",\"vbNOH609-aVf\\tWBOfcnh9993x\\t7oEmRnmC-RqY\\tACTIVATES\"],\"TGF-Beta\":[\"TGF-Beta\",\"\",\"A signaling network involved in growth, proliferation, apoptosis, and differentiation involving the activation of TGFβ receptors by the cytokine TGFβ that leads to the activation of gene transcription by SMADs.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"SMAD2\\t0qBZliXOfmft\\tGENE\\tXkk8SKlafmfn\\t335\\t410\",\"SMAD\\tXkk8SKlafmfn\\tFAMILY\\t-1\\t424\\t446\",\"Activin ligands\\tt_Q1Nr-BfmfR\\tGENE\\t-1\\t509\\t146\",\"ACVR2B\\t9Ev1i-2HfmfX\\tGENE\\tboabbY81fmfT\\t508\\t307\",\"TGFBR\\tfXKkJObYfmfb\\tFAMILY\\t-1\\t329\\t277\",\"ACVR2A\\t_sm7432ofmfV\\tGENE\\tboabbY81fmfT\\t509\\t244\",\"SMAD3\\tgepyfePvfmfz\\tGENE\\tXkk8SKlafmfn\\t514\\t410\",\"TGFBR2\\tDOJnFoHNfmfi\\tGENE\\tfXKkJObYfmfb\\t329\\t311\",\"TGFB ligands\\tgOOpkueqfmfM\\tGENE\\t-1\\t329\\t146\",\"ACVR2\\tboabbY81fmfT\\tFAMILY\\t-1\\t508\\t275\",\"TGFBR1\\tSb4zGrL3fmfe\\tGENE\\tfXKkJObYfmfb\\t329\\t244\",\"Proliferation, stem/progenitor phenotype\\tA7jMDR2Mfmf-\\tPROCESS\\t-1\\t427\\t588\",\"SMAD4\\tOKApI7Qwfmf4\\tGENE\\tXkk8SKlafmfn\\t428\\t483\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"7FzJ455ZfmgP\\tboabbY81fmfT\\tXkk8SKlafmfn\\tACTIVATES\\t\",\"WEH0_CRqfmgL\\tfXKkJObYfmfb\\tXkk8SKlafmfn\\tACTIVATES\\t\",\"hnOBi-Z1fmgI\\tt_Q1Nr-BfmfR\\tboabbY81fmfT\\tACTIVATES\\t\",\"Ax3S1Kd8fmgE\\tgOOpkueqfmfM\\tfXKkJObYfmfb\\tACTIVATES\\t\"],\"THCA-2014-RTK-RAS-PI(3)K-pathway\":[\"THCA-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MTOR\\tG9y6ZBee_nmX\\tGENE\\t-1\\t649\\t417\\t\",\"NRAS\\tOjQjq-cc7_5M\\tGENE\\tEOfQTOkE_iLF\\t646\\t25\\t\",\"AKT\\tfi2ldWMn_lnk\\tGENE\\t-1\\t647\\t265\\t\",\"BCL2\\tjwugB2iP_y0Y\\tGENE\\t-1\\t841\\t559\\t\",\"NTR1\\turLIUCXQ70w-\\tGENE\\tKen9wGw8AKU3\\t293\\t-7\\t\",\"RAS\\t1TJ8hV1I_ZR5\\tFAMILY\\t-1\\t374\\t186\\t\",\"RAF\\txSi1Do6v_sYj\\tGENE\\t-1\\t841\\t186\\t\",\"DUSPs\\t7C2rFt7t_fdn\\tGENE\\t-1\\t298\\t524\\t\",\"BRAF\\tpq87LogY_1LI\\tGENE\\t-1\\t1024\\t186\\t\",\"pERK\\tF4o-nfWI_urx\\tGENE\\t-1\\t841\\t344\\t\",\"Apoptosis\\tAoCFeVPVAu6s\\tPROCESS\\t-1\\t841\\t636\\t\",\"BRAF\\tPAsWh9Rz_dco\\tGENE\\t-1\\t167\\t276\\t\",\"HRAS\\tLPvNA7nc7_57\\tGENE\\tEOfQTOkE_iLF\\t804\\t25\\t\",\"NTR\\tKen9wGw8AKU3\\tFAMILY\\t-1\\t371\\t22\\t\",\"BAD\\tUiVUw9Es_x5s\\tGENE\\t-1\\t841\\t489\\t\",\"Cell proliferation/Growth\\ttGen8Qvz_qez\\tPROCESS\\t-1\\t298\\t628\\t\",\"KRAS\\tr0hPxhCH7_5n\\tGENE\\tEOfQTOkE_iLF\\t961\\t25\\t\",\"PI3K\\tK3RfoHn2_kQ2\\tGENE\\t-1\\t647\\t186\\t\",\"pMEK\\tlMJhnvzk_tYZ\\tGENE\\t-1\\t841\\t264\\t\",\"pMEK\\teM1eNr4K_cOi\\tGENE\\t-1\\t298\\t346\\t\",\"p90\\t-6lLHt7R_v9K\\tGENE\\t-1\\t841\\t419\\t\",\"NTR3\\tJtRMUb9N70xa\\tGENE\\tKen9wGw8AKU3\\t378\\t51\\t\",\"Protein synthesis\\tWQ8orp6Y_ouv\\tPROCESS\\t-1\\t649\\t627\\t\",\"RAS\\tEOfQTOkE_iLF\\tFAMILY\\t-1\\t804\\t25\\t\",\"NTR2\\tWK-XNi2970xq\\tGENE\\tKen9wGw8AKU3\\t450\\t-7\\t\",\"RET\\tCDUJn7rL_YRR\\tGENE\\t-1\\t167\\t186\\t\",\"pERK\\tGyr_vYK7_eUm\\tGENE\\t-1\\t298\\t434\\t\",\"RAF\\tEJdSJtPH_amI\\tGENE\\t-1\\t374\\t276\\t\",\"TSC2\\tEhaBKk9-_mvL\\tGENE\\t-1\\t647\\t345\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"HComBP3QBFSr\\txSi1Do6v_sYj\\tlMJhnvzk_tYZ\\tACTIVATES\",\"5ow_H43KBLyc\\tjwugB2iP_y0Y\\tAoCFeVPVAu6s\\tINHIBITS\",\"lafIlqasBaaQ\\tEJdSJtPH_amI\\teM1eNr4K_cOi\\tACTIVATES\",\"pCtfuSydBdaS\\t7C2rFt7t_fdn\\tGyr_vYK7_eUm\\tINHIBITS\",\"YyPlgJXcA__s\\tEhaBKk9-_mvL\\tG9y6ZBee_nmX\\tINHIBITS\",\"iA_J_DZbBefG\\t7C2rFt7t_fdn\\ttGen8Qvz_qez\\tACTIVATES\",\"sJ4XKEpFA6LY\\tKen9wGw8AKU3\\tEOfQTOkE_iLF\\tACTIVATES\",\"8BieawZKA3u7\\tCDUJn7rL_YRR\\t1TJ8hV1I_ZR5\\tACTIVATES\",\"r79uM2_gBZKl\\t1TJ8hV1I_ZR5\\tEJdSJtPH_amI\\tACTIVATES\",\"ACvH-CYzA8yR\\tEOfQTOkE_iLF\\tK3RfoHn2_kQ2\\tACTIVATES\",\"TmRxcbx_Bbb7\\teM1eNr4K_cOi\\tGyr_vYK7_eUm\\tACTIVATES\",\"teHhboSJBVGJ\\tpq87LogY_1LI\\txSi1Do6v_sYj\\tINHIBITS\",\"XmrMteXSBBt-\\tG9y6ZBee_nmX\\tWQ8orp6Y_ouv\\tACTIVATES\",\"hU00JaNWBYJR\\tPAsWh9Rz_dco\\teM1eNr4K_cOi\\tACTIVATES\",\"FXb60wuvBcMi\\tGyr_vYK7_eUm\\t7C2rFt7t_fdn\\tACTIVATES\",\"-iHJfCCVA_Hh\\tfi2ldWMn_lnk\\tEhaBKk9-_mvL\\tACTIVATES\",\"aW6elpjvBKyK\\tUiVUw9Es_x5s\\tjwugB2iP_y0Y\\tINHIBITS\",\"LlJV17wNBHMh\\tlMJhnvzk_tYZ\\tF4o-nfWI_urx\\tACTIVATES\",\"z-CbE5XoBJ5o\\t-6lLHt7R_v9K\\tUiVUw9Es_x5s\\tINHIBITS\",\"F9EcWkHvBUJ2\\tpq87LogY_1LI\\txSi1Do6v_sYj\\tACTIVATES\",\"GqN5v_YIBEbi\\tEOfQTOkE_iLF\\txSi1Do6v_sYj\\tACTIVATES\",\"FWnfRc3YBC44\\t-6lLHt7R_v9K\\tG9y6ZBee_nmX\\tINHIBITS\",\"AV9s-fteA9y7\\tK3RfoHn2_kQ2\\tfi2ldWMn_lnk\\tACTIVATES\",\"3BgREqkhA22-\\tKen9wGw8AKU3\\t1TJ8hV1I_ZR5\\tACTIVATES\",\"r31OK-oJBIby\\tF4o-nfWI_urx\\t-6lLHt7R_v9K\\tACTIVATES\"],\"TP53\":[\"TP53\",\"\",\"Pathway centered around the regulation of the tumor suppressor TP53, a gene that regulates apoptosis, cell cycle arrest, senescence, and DNA repair.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Cell survival, proliferation\\txDGjGXGMfyG3\\tPROCESS\\t-1\\t133\\t449\",\"CDKN2A\\tgx_YWb90fyGp\\tGENE\\t-1\\t-23\\t235\",\"MDM4\\tsT2W03HDfyGe\\tGENE\\tlK7pvMYZfyGU\\t319\\t127\",\"DNA replication stress\\tYvaYsZcufyHH\\tPROCESS\\t-1\\t597\\t51\",\"RPS6KA3\\tIu0kJKKGfyGM\\tGENE\\t-1\\t597\\t328\",\"MDM2\\tqv-3H9tXfyGZ\\tGENE\\tlK7pvMYZfyGU\\t149\\t127\",\"Senescence, apoptosis\\tIkv91AlOfyG-\\tPROCESS\\t-1\\t325\\t448\",\"\\tlK7pvMYZfyGU\\tFAMILY\\t-1\\t234\\t127\",\"TP53\\tES5FXiJLfyGu\\tGENE\\t-1\\t233\\t328\",\"Oncogenic stress\\tHZxSxJBmfyHE\\tPROCESS\\t-1\\t333\\t222\",\"ATM\\tc4Ad6ZYBfyGx\\tGENE\\t-1\\t597\\t130\",\"CHEK2\\tJvx4WzdtfyGk\\tGENE\\t-1\\t597\\t225\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"8KZq5XsifyHL\\tES5FXiJLfyGu\\txDGjGXGMfyG3\\tINHIBITS\\t\",\"5e5CkdqDfyHg\\tgx_YWb90fyGp\\tES5FXiJLfyGu\\tINHIBITS\\t\",\"WAvkWWubfyHO\\tJvx4WzdtfyGk\\tIu0kJKKGfyGM\\tACTIVATES\\t\",\"wMOYIFFAfyHS\\tgx_YWb90fyGp\\tlK7pvMYZfyGU\\tINHIBITS\\t\",\"Zd519CgjfyHd\\tHZxSxJBmfyHE\\tES5FXiJLfyGu\\tACTIVATES\\t\",\"lFKJrXsmfyHb\\tES5FXiJLfyGu\\tIkv91AlOfyG-\\tACTIVATES\\t\",\"geyskuwAfyHV\\tlK7pvMYZfyGU\\tES5FXiJLfyGu\\tINHIBITS\\t\",\"t-G0U6EJfyHR\\tIu0kJKKGfyGM\\tES5FXiJLfyGu\\tACTIVATES\\t\",\"vNvONKmFfyHj\\tYvaYsZcufyHH\\tc4Ad6ZYBfyGx\\tACTIVATES\\t\",\"25K5WaLwfyHX\\tc4Ad6ZYBfyGx\\tJvx4WzdtfyGk\\tACTIVATES\\t\"],\"UCEC-2013-RTK-RAS-PI(3)K-pathway\":[\"UCEC-2013-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"RTK\\tZAPqdjSDgCgU\\tFAMILY\\t-1\\t391\\t148\\t\",\"SOX17\\tBXxulVFjgHIs\\tGENE\\t-1\\t227\\t344\\t\",\"KRAS\\t76Wg78V_gDdz\\tGENE\\t-1\\t391\\t260\\t\",\"Proliferation\\tsoh0TxsPgq1P\\tPROCESS\\t-1\\t803\\t409\\t\",\"PTEN\\tQha2pMPigm3R\\tGENE\\t-1\\t1085\\t215\\t\",\"Translation\\t0L6ulMimgteS\\tPROCESS\\t-1\\t1056\\t409\\t\",\"Proliferation\\tMsHCffb6gNY_\\tPROCESS\\t-1\\t391\\t515\\t\",\"CTNNB1\\ti1tsajIagMAh\\tGENE\\t-1\\t391\\t430\\t\",\"PIK3R1\\tOJ-s2c_vgnZa\\tGENE\\t-1\\t1085\\t295\\t\",\"GSK3B\\twXwgUTNkgFnQ\\tGENE\\t-1\\t391\\t344\\t\",\"FBXW7\\t57SvZmLzgKXg\\tGENE\\t-1\\t557\\t344\\t\",\"Cell survival\\tNI-5QJa7gr4W\\tPROCESS\\t-1\\t935\\t409\\t\",\"ERBB2\\tY1idRwsY3N1k\\tGENE\\tZAPqdjSDgCgU\\t469\\t148\\t\",\"PIK3CA\\tsJDwUf9sgpI_\\tGENE\\t-1\\t915\\t256\\t\",\"FGFR2\\tM56YC0J03N1R\\tGENE\\tZAPqdjSDgCgU\\t313\\t148\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"pauS7C64g9TO\\tOJ-s2c_vgnZa\\tsJDwUf9sgpI_\\tINHIBITS\",\"9ZMCIs5Ygf4j\\twXwgUTNkgFnQ\\ti1tsajIagMAh\\tINHIBITS\",\"BXhEIXgdhBkV\\tsJDwUf9sgpI_\\t0L6ulMimgteS\\tACTIVATES\",\"DLrHfIVSgegJ\\t76Wg78V_gDdz\\twXwgUTNkgFnQ\\tINHIBITS\",\"y_ifcFbCgcdH\\tZAPqdjSDgCgU\\t76Wg78V_gDdz\\tACTIVATES\",\"F5LjanELggnD\\tBXxulVFjgHIs\\ti1tsajIagMAh\\tINHIBITS\",\"2-tF8Ncmgiab\\ti1tsajIagMAh\\tMsHCffb6gNY_\\tACTIVATES\",\"tJv0DWt8g-nF\\tsJDwUf9sgpI_\\tsoh0TxsPgq1P\\tACTIVATES\",\"rps45EGCg_aW\\tsJDwUf9sgpI_\\tNI-5QJa7gr4W\\tACTIVATES\",\"w8Id1r73g8Xz\\tQha2pMPigm3R\\tsJDwUf9sgpI_\\tINHIBITS\",\"daN2ajyqghSz\\t57SvZmLzgKXg\\ti1tsajIagMAh\\tINHIBITS\"],\"WNT\":[\"WNT\",\"\",\"Involved in both development and tissue homeostasis. The canonical Wnt pathway involves signal transduction initiated by Wnt ligand binding to Frizzled family receptors leading to the dysregulation of beta-catenin degradation and ultimately, the induction of transcription via TCF/LEF transcription factors by beta-catenin.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"SFRP3\\tEiQGCkYbf2Ue\\tGENE\\taqCo94T-f2UY\\t214\\t113\",\"DKK\\tRpK5JOBLf2U5\\tFAMILY\\t-1\\t819\\t306\",\"TLE1\\toLjLH1mCf2T6\\tGENE\\tz1BS71lif2T2\\t702\\t625\",\"TLE4\\tUjSaC5Phf2T3\\tGENE\\tz1BS71lif2T2\\t858\\t685\",\"SFRP1\\tLgjBpjM-f2Ux\\tGENE\\taqCo94T-f2UY\\t63\\t147\",\"Groucho\\tz1BS71lif2T2\\tFAMILY\\t-1\\t780\\t655\",\"APC\\tKzWeNNlbf2UJ\\tGENE\\t-1\\t228\\t521\",\"TCF7L1\\tletl9duUf2WR\\tGENE\\tabIO9oDkf2WA\\t341\\t691\",\"WIF1\\t5iL99X9Jf2Tw\\tGENE\\t-1\\t452\\t61\",\"TLE2\\tR0vKN1sif2T9\\tGENE\\tz1BS71lif2T2\\t858\\t625\",\"DKK1\\tDRSXFgEQf2U9\\tGENE\\tRpK5JOBLf2U5\\t739\\t275\",\"TCF7L2\\tRPLZ4osLf2Wb\\tGENE\\tabIO9oDkf2WA\\t499\\t690\",\"AXIN1\\tKq4oChNGf2Vz\\tGENE\\tkoQkppv4f2Vq\\t599\\t443\",\"WNT Dual Receptor Complex\\tqRabkjW8f2VS\\tCOMPLEX\\t-1\\t458\\t304\",\"SFRP2\\thqXcbX1yf2U1\\tGENE\\taqCo94T-f2UY\\t63\\t203\",\"LRP5\\tDK7CkEYCf2Vi\\tGENE\\tqRabkjW8f2VS\\t536\\t276\",\"TCF7\\tpK9uMdhUf2WH\\tGENE\\tabIO9oDkf2WA\\t422\\t632\",\"TLE3\\tmA6zfzOUf2UA\\tGENE\\tz1BS71lif2T2\\t702\\t685\",\"Cell proliferation\\thFWwt8jrf2UV\\tPROCESS\\t-1\\t135\\t667\",\"TCF/LEF\\tabIO9oDkf2WA\\tCOMPLEX\\t-1\\t420\\t661\",\"AXIN\\tkoQkppv4f2Vq\\tFAMILY\\t-1\\t678\\t443\",\"RNF43\\telbyeD9tf2UD\\tGENE\\t-1\\t144\\t303\",\"CTNNB1\\t3GRyWPj8f2UM\\tGENE\\t-1\\t417\\t485\",\"DKK2\\tyYuxYP9Qf2VC\\tGENE\\tRpK5JOBLf2U5\\t899\\t275\",\"FZDs\\tjR_K-66Df2VX\\tGENE\\tqRabkjW8f2VS\\t381\\t301\",\"DKK4\\tlRy7Jj0Nf2VN\\tGENE\\tRpK5JOBLf2U5\\t899\\t337\",\"SFRP\\taqCo94T-f2UY\\tFAMILY\\t-1\\t138\\t169\",\"WNT ligands\\twCThVVjSf2Tz\\tGENE\\t-1\\t452\\t168\",\"LRP6\\tnr8aMEmUf2Vd\\tGENE\\tqRabkjW8f2VS\\t536\\t332\",\"GSK3B\\tmuxig_C-f2UG\\tGENE\\t-1\\t228\\t446\",\"SFRP5\\tB0f2GOAff2Us\\tGENE\\taqCo94T-f2UY\\t214\\t226\",\"AMER1\\tpAChF0thf2US\\tGENE\\t-1\\t599\\t519\",\"SFRP4\\tQMwh9gC-f2Ul\\tGENE\\taqCo94T-f2UY\\t214\\t170\",\"AXIN2\\tpD0TMIi_f2V5\\tGENE\\tkoQkppv4f2Vq\\t758\\t443\",\"DKK3\\twStErGAEf2VH\\tGENE\\tRpK5JOBLf2U5\\t739\\t337\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"XWIzsv56f2Wm\\taqCo94T-f2UY\\twCThVVjSf2Tz\\tINHIBITS\\t\",\"Bps0rTlOf2W1\\tpAChF0thf2US\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"Bt39Pfi9f2W-\\tqRabkjW8f2VS\\tmuxig_C-f2UG\\tACTIVATES\\t\",\"x3LsoTaTf2Ww\\telbyeD9tf2UD\\tqRabkjW8f2VS\\tINHIBITS\\t\",\"PgNv7XZif2XA\\tmuxig_C-f2UG\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"-u2h2V6ef2XK\\tabIO9oDkf2WA\\thFWwt8jrf2UV\\tACTIVATES\\t\",\"an6n-VWDf2Wt\\twCThVVjSf2Tz\\tqRabkjW8f2VS\\tACTIVATES\\t\",\"h4-_HrCRf2W4\\tqRabkjW8f2VS\\tkoQkppv4f2Vq\\tACTIVATES\\t\",\"3NL_goRgf2W6\\tkoQkppv4f2Vq\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"-q76c9PDf2Wy\\tRpK5JOBLf2U5\\tqRabkjW8f2VS\\tINHIBITS\\t\",\"h9BN2IKjf2Wr\\t5iL99X9Jf2Tw\\twCThVVjSf2Tz\\tINHIBITS\\t\",\"rRLoK5NMf2XD\\tKzWeNNlbf2UJ\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"l7-kESH_f2XH\\tz1BS71lif2T2\\tabIO9oDkf2WA\\tINHIBITS\\t\"]}");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3IDQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzFfMTEwXyI+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNy41NjcsMTUuOTM4bC0yLjg1OS0yLjcwMmMwLjMzMy0wLjYwNSwwLjUzOS0xLjI5LDAuNTM5LTIuMDI5YzAtMi4zNDItMS44OTctNC4yMzktNC4yNC00LjIzOQoJCQkJYy0yLjM0MywwLTQuMjQzLDEuODk2LTQuMjQzLDQuMjM5YzAsMi4zNDMsMS45LDQuMjQxLDQuMjQzLDQuMjQxYzAuODI2LDAsMS41OS0wLjI0NiwyLjI0Mi0wLjY1NGwyLjg1NSwyLjY5OQoJCQkJQzE2LjUzNiwxNi45MjIsMTcuMDIzLDE2LjM5OSwxNy41NjcsMTUuOTM4eiIvPgoJCQk8cGF0aCBkPSJNMjkuNjYsMTUuNmwzLjc5OS02LjM5M2MwLjM3NCwwLjEwNywwLjc2MiwwLjE4NCwxLjE2OSwwLjE4NGMyLjM0NywwLDQuMjQ0LTEuODk4LDQuMjQ0LTQuMjQxCgkJCQljMC0yLjM0Mi0xLjg5Ny00LjIzOS00LjI0NC00LjIzOWMtMi4zNDMsMC00LjIzOSwxLjg5Ni00LjIzOSw0LjIzOWMwLDEuMTYzLDAuNDY5LDIuMjE0LDEuMjI3LDIuOTgxbC0zLjc4Nyw2LjM3NQoJCQkJQzI4LjQ4LDE0LjgwMSwyOS4wOTQsMTUuMTY5LDI5LjY2LDE1LjZ6Ii8+CgkJCTxwYXRoIGQ9Ik00Mi43NjIsMjAuOTUyYy0xLjgyNCwwLTMuMzY5LDEuMTU5LTMuOTY4LDIuNzc1bC01LjI3OC0wLjUyMWMwLDAuMDQsMC4wMDYsMC4wNzgsMC4wMDYsMC4xMTcKCQkJCWMwLDAuNjg4LTAuMDc2LDEuMzYtMC4yMTMsMi4wMDlsNS4yNzYsMC41MjFjMC4zMTksMi4wMjQsMi4wNjIsMy41NzYsNC4xNzcsMy41NzZjMi4zNDIsMCw0LjIzOC0xLjg5Niw0LjIzOC00LjIzOAoJCQkJQzQ3LDIyLjg1LDQ1LjEwNCwyMC45NTIsNDIuNzYyLDIwLjk1MnoiLz4KCQkJPHBhdGggZD0iTTI4LjE5NywzNy42MjRsLTEuMTgtNS4xNTZjLTAuNjY2LDAuMjMyLTEuMzU5LDAuMzk4LTIuMDgyLDAuNDgxbDEuMTgyLDUuMTU3Yy0xLjM1NSwwLjcwOS0yLjI5LDIuMTEtMi4yOSwzLjc0NgoJCQkJYzAsMi4zNDIsMS44OTYsNC4yMzcsNC4yNDMsNC4yMzdjMi4zNDIsMCw0LjIzOC0xLjg5Niw0LjIzOC00LjIzN0MzMi4zMTEsMzkuNTUzLDMwLjQ3OSwzNy42OTIsMjguMTk3LDM3LjYyNHoiLz4KCQkJPHBhdGggZD0iTTE0LjM1NywyNS4zN2wtNi41NywyLjIwMWMtMC43NTgtMS4xNTgtMi4wNjMtMS45MjYtMy41NDgtMS45MjZDMS44OTYsMjUuNjQ1LDAsMjcuNTQyLDAsMjkuODg0CgkJCQljMCwyLjM0NSwxLjg5Niw0LjI0Miw0LjIzOSw0LjI0MmMyLjM0MSwwLDQuMjQyLTEuODk3LDQuMjQyLTQuMjQyYzAtMC4wOTgtMC4wMjEtMC4xODgtMC4wMjktMC4yODRsNi41OTEtMi4yMDcKCQkJCUMxNC43NDYsMjYuNzUyLDE0LjUxLDI2LjA3NywxNC4zNTcsMjUuMzd6Ii8+CgkJCTxjaXJjbGUgY3g9IjIzLjgzIiBjeT0iMjMuMzIzIiByPSI3LjI3MSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("oncoprintjs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTUwLjgwMXB4IiBoZWlnaHQ9IjU1MC44MDFweCIgdmlld0JveD0iMCAwIDU1MC44MDEgNTUwLjgwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUwLjgwMSA1NTAuODAxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTQ2Ljc0NywyNzYuNzA4YzAtMTMuOTk4LTkuNzExLTIyLjM1Mi0yNi44ODctMjIuMzUyYy02Ljk5LDAtMTEuNzI2LDAuNjc1LTE0LjIwNCwxLjM1NXY0NC45MjcKCQljMi45MzIsMC42NzYsNi41MzksMC44OTYsMTEuNTIsMC44OTZDMTM1LjQ0OSwzMDEuNTQ2LDE0Ni43NDcsMjkyLjI4LDE0Ni43NDcsMjc2LjcwOHoiLz4KCTxwYXRoIGQ9Ik00ODguNDI2LDE5Ny4wMTlINDc1LjJ2LTYzLjgxNmMwLTAuMzk4LTAuMDYzLTAuNzk5LTAuMTE2LTEuMjAyYy0wLjAyMS0yLjUzNC0wLjgyNy01LjAyMy0yLjU2Mi02Ljk5NUwzNjYuMzI1LDMuNjk0CgkJYy0wLjAzMi0wLjAzMS0wLjA2My0wLjA0Mi0wLjA4NS0wLjA3NmMtMC42MzMtMC43MDctMS4zNzEtMS4yOTUtMi4xNTEtMS44MDRjLTAuMjMxLTAuMTU1LTAuNDY0LTAuMjg1LTAuNzA2LTAuNDE5CgkJYy0wLjY3Ni0wLjM2OS0xLjM5My0wLjY3NS0yLjEzMS0wLjg5NmMtMC4yLTAuMDU2LTAuMzgtMC4xMzgtMC41OC0wLjE5QzM1OS44NywwLjExOSwzNTkuMDM3LDAsMzU4LjE5MywwSDk3LjIKCQljLTExLjkxOCwwLTIxLjYsOS42OTMtMjEuNiwyMS42MDF2MTc1LjQxM0g2Mi4zNzdjLTE3LjA0OSwwLTMwLjg3MywxMy44MTgtMzAuODczLDMwLjg3M3YxNjAuNTQ1CgkJYzAsMTcuMDQzLDEzLjgyNCwzMC44NywzMC44NzMsMzAuODdoMTMuMjI0VjUyOS4yYzAsMTEuOTA3LDkuNjgyLDIxLjYwMSwyMS42LDIxLjYwMWgzNTYuNGMxMS45MDcsMCwyMS42LTkuNjkzLDIxLjYtMjEuNjAxCgkJVjQxOS4zMDJoMTMuMjI2YzE3LjA0NCwwLDMwLjg3MS0xMy44MjcsMzAuODcxLTMwLjg3di0xNjAuNTRDNTE5LjI5NywyMTAuODM4LDUwNS40NywxOTcuMDE5LDQ4OC40MjYsMTk3LjAxOXogTTk3LjIsMjEuNjA1CgkJaDI1MC4xOTN2MTEwLjUxM2MwLDUuOTY3LDQuODQxLDEwLjgsMTAuOCwxMC44aDk1LjQwN3Y1NC4xMDhIOTcuMlYyMS42MDV6IE0yMzQuMzQ0LDMzNS44NnY0NS44MzFoLTMxLjYwMVYyMjkuNTI0aDQwLjE4NAoJCWwzMS42MTEsNTUuNzU5YzkuMDI1LDE2LjAzMSwxOC4wNjQsMzQuOTgzLDI0LjgyNSw1Mi4xNTRoMC42NzVjLTIuMjU3LTIwLjEwMy0yLjkzMy00MC42NDMtMi45MzMtNjMuNDR2LTQ0LjQ3M2gzMS42MTR2MTUyLjE2NwoJCWgtMzYuMTE3bC0zMi41MTYtNTguNzAzYy05LjA0OS0xNi4yNTMtMTguOTcxLTM1Ljg5Mi0yNi40MzgtNTMuNzI3bC0wLjY2NSwwLjIyMkMyMzMuOTA2LDI4OS41OCwyMzQuMzQ0LDMxMS4wMjcsMjM0LjM0NCwzMzUuODZ6CgkJIE03MS41NTYsMzgxLjY5MVYyMzEuNTZjMTAuNjEzLTEuODA0LDI1LjUxNi0zLjE1OSw0Ni41MDYtMy4xNTljMjEuMjE1LDAsMzYuMzUzLDQuMDYxLDQ2LjUwOSwxMi4xOTIKCQljOS42OTgsNy42NzMsMTYuMjU1LDIwLjMxMywxNi4yNTUsMzUuMjE5YzAsMTQuODk3LTQuOTU5LDI3LjU0OS0xMy45OTksMzYuMTIzYy0xMS43MzgsMTEuMDYzLTI5LjEyMywxNi4wMzEtNDkuNDQxLDE2LjAzMQoJCWMtNC41MjIsMC04LjU5My0wLjIzMS0xMS43MzYtMC42NzV2NTQuNDExSDcxLjU1NlYzODEuNjkxeiBNNDUzLjYwMSw1MjMuMzUzSDk3LjJWNDE5LjMwMmgzNTYuNFY1MjMuMzUzeiBNNDg1LjY1MiwzNzQuNjg4CgkJYy0xMC42MSwzLjYwNy0zMC43MTMsOC41ODUtNTAuODA1LDguNTg1Yy0yNy43NTksMC00Ny44NzItNy4wMDMtNjEuODU3LTIwLjU0NWMtMTMuOTk1LTEzLjEtMjEuNjg0LTMyLjk3LTIxLjQ1Mi01NS4zMTgKCQljMC4yMjItNTAuNTY5LDM3LjAzLTc5LjQ2Myw4Ni45MTctNzkuNDYzYzE5LjY0NCwwLDM0Ljc4MywzLjgyOSw0Mi4yMTksNy40NDZsLTcuMjE0LDI3LjU0M2MtOC4zNjktMy42MTctMTguNzUyLTYuNTUtMzUuNDU4LTYuNTUKCQljLTI4LjY1NiwwLTUwLjM0MSwxNi4yNTYtNTAuMzQxLDQ5LjIyYzAsMzEuMzgyLDE5LjY0OSw0OS44OTIsNDcuODcyLDQ5Ljg5MmM3Ljg5NSwwLDE0LjIxOC0wLjkwMSwxNi45MzQtMi4yNTd2LTMxLjgzNWgtMjMuNDkzCgkJdi0yNi44NjloNTYuNjc5VjM3NC42ODh6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTUwLjgwMXB4IiBoZWlnaHQ9IjU1MC44MDFweCIgdmlld0JveD0iMCAwIDU1MC44MDEgNTUwLjgwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUwLjgwMSA1NTAuODAxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDg4LjQyNiwxOTcuMDE5SDQ3NS4ydi02My44MTZjMC0wLjM5OC0wLjA2My0wLjc5OS0wLjExNi0xLjIwMmMtMC4wMjEtMi41MzQtMC44MjctNS4wMjMtMi41NjItNi45OTVMMzY2LjMyNSwzLjY5NAoJCWMtMC4wMzItMC4wMzEtMC4wNjMtMC4wNDItMC4wODUtMC4wNzZjLTAuNjMzLTAuNzA3LTEuMzcxLTEuMjk1LTIuMTUxLTEuODA0Yy0wLjIzMS0wLjE1NS0wLjQ2NC0wLjI4NS0wLjcwNi0wLjQxOQoJCWMtMC42NzYtMC4zNjktMS4zOTMtMC42NzUtMi4xMzEtMC44OTZjLTAuMi0wLjA1Ni0wLjM4LTAuMTM4LTAuNTgtMC4xOUMzNTkuODcsMC4xMTksMzU5LjAzNywwLDM1OC4xOTMsMEg5Ny4yCgkJYy0xMS45MTgsMC0yMS42LDkuNjkzLTIxLjYsMjEuNjAxdjE3NS40MTNINjIuMzc3Yy0xNy4wNDksMC0zMC44NzMsMTMuODE4LTMwLjg3MywzMC44NzN2MTYwLjU0NQoJCWMwLDE3LjA0MywxMy44MjQsMzAuODcsMzAuODczLDMwLjg3aDEzLjIyNFY1MjkuMmMwLDExLjkwNyw5LjY4MiwyMS42MDEsMjEuNiwyMS42MDFoMzU2LjRjMTEuOTA3LDAsMjEuNi05LjY5MywyMS42LTIxLjYwMQoJCVY0MTkuMzAyaDEzLjIyNmMxNy4wNDQsMCwzMC44NzEtMTMuODI3LDMwLjg3MS0zMC44N3YtMTYwLjU0QzUxOS4yOTcsMjEwLjgzOCw1MDUuNDcsMTk3LjAxOSw0ODguNDI2LDE5Ny4wMTl6IE05Ny4yLDIxLjYwNQoJCWgyNTAuMTkzdjExMC41MTNjMCw1Ljk2Nyw0Ljg0MSwxMC44LDEwLjgsMTAuOGg5NS40MDd2NTQuMTA4SDk3LjJWMjEuNjA1eiBNMzM4Ljg3MSwyMjUuNjcyTDI4NC41NDUsMzg2Ljk2aC00Mi41OTEKCQlsLTUxLjY5LTE2MS4yODhoMzkuOTY3bDE5LjYxNyw2OC4xOTZjNS41MDgsMTkuMTQzLDEwLjUzMSwzNy41NjcsMTQuMzYsNTcuNjdoMC43MTdjNC4wNjEtMTkuMzg1LDkuMDg5LTM4LjUyNywxNC41OTItNTYuOTUzCgkJbDIwLjU4NS02OC45MThoMzguNzdWMjI1LjY3MnogTTY4LjQ1OCwzNzkuNTRsNy40MTUtMzAuMTUzYzkuODExLDUuMDIxLDI0Ljg4OCwxMC4wNTEsNDAuNDM5LDEwLjA1MQoJCWMxNi43NTEsMCwyNS42MDctNi45MzUsMjUuNjA3LTE3LjQ2NWMwLTEwLjA1Mi03LjY2Mi0xNS43OTUtMjcuMDUtMjIuNzM0Yy0yNi44LTkuMzI4LTQ0LjI2My0yNC4xNjgtNDQuMjYzLTQ3LjYxMQoJCWMwLTI3LjUyNCwyMi45NzEtNDguNTc5LDYxLjAxNC00OC41NzljMTguMTg4LDAsMzEuNTkxLDMuODIzLDQxLjE1OSw4LjEzMWwtOC4xMjYsMjkuNDM3Yy02LjQ2NS0zLjExNi0xNy45NDUtNy42NTctMzMuNzQ1LTcuNjU3CgkJYy0xNS43OTEsMC0yMy40NTQsNy4xODMtMjMuNDU0LDE1LjU1MmMwLDEwLjI5Niw5LjA4OSwxNC44NDIsMjkuOTE3LDIyLjczMWMyOC40NjgsMTAuNTM2LDQxLjg3MSwyNS4zNjUsNDEuODcxLDQ4LjA5NAoJCWMwLDI3LjA0Mi0yMC44MTIsNTAuMDEzLTY1LjA5LDUwLjAxM0M5NS43MzEsMzg5LjM0OSw3Ny41MzgsMzg0LjU3MSw2OC40NTgsMzc5LjU0eiBNNDUzLjYwMSw1MjMuMzUzSDk3LjJWNDE5LjMwMmgzNTYuNFY1MjMuMzUzegoJCSBNNDg4LjkxMSwzNzkuNTRjLTExLjI0MywzLjgyMy0zMi41MzcsOS4xMDMtNTMuODMxLDkuMTAzYy0yOS40MzcsMC01MC43My03LjQyNi02NS41Ny0yMS43NzkKCQljLTE0LjgzOS0xMy44NzUtMjIuOTcxLTM0Ljk0Mi0yMi43MzgtNTguNjI1YzAuMjUzLTUzLjYwNCwzOS4yNTUtODQuMjM1LDkyLjEzNy04NC4yMzVjMjAuODEsMCwzNi44NTIsNC4wNzMsNDQuNzQsNy44OTYKCQlsLTcuNjU3LDI5LjIwMmMtOC44NTktMy44MjktMTkuODQ5LTYuOTUtMzcuNTY3LTYuOTVjLTMwLjM5NiwwLTUzLjM1NywxNy4yMzMtNTMuMzU3LDUyLjE3M2MwLDMzLjI2NSwyMC44MSw1Mi44ODIsNTAuNzMsNTIuODgyCgkJYzguMzc1LDAsMTUuMDcyLTAuOTYsMTcuOTQtMi4zOTV2LTMzLjc0NWgtMjQuODc1di0yOC40NzFoNjAuMDQ5VjM3OS41NEw0ODguOTExLDM3OS41NHoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZWRpdCI+PHBhdGggZD0iTTExIDRINGEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMnYtNyI+PC9wYXRoPjxwYXRoIGQ9Ik0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXoiPjwvcGF0aD48L3N2Zz4="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjMuNjI1IDIzLjYyNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjMuNjI1IDIzLjYyNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAzMDEwNDsiIGQ9Ik0xMS44MTIsMEM1LjI4OSwwLDAsNS4yODksMCwxMS44MTJzNS4yODksMTEuODEzLDExLjgxMiwxMS44MTNzMTEuODEzLTUuMjksMTEuODEzLTExLjgxMw0KCQlTMTguMzM1LDAsMTEuODEyLDB6IE0xNC4yNzEsMTguMzA3Yy0wLjYwOCwwLjI0LTEuMDkyLDAuNDIyLTEuNDU1LDAuNTQ4Yy0wLjM2MiwwLjEyNi0wLjc4MywwLjE4OS0xLjI2MiwwLjE4OQ0KCQljLTAuNzM2LDAtMS4zMDktMC4xOC0xLjcxNy0wLjUzOXMtMC42MTEtMC44MTQtMC42MTEtMS4zNjdjMC0wLjIxNSwwLjAxNS0wLjQzNSwwLjA0NS0wLjY1OWMwLjAzMS0wLjIyNCwwLjA4LTAuNDc2LDAuMTQ3LTAuNzU5DQoJCWwwLjc2MS0yLjY4OGMwLjA2Ny0wLjI1OCwwLjEyNS0wLjUwMywwLjE3MS0wLjczMWMwLjA0Ni0wLjIzLDAuMDY4LTAuNDQxLDAuMDY4LTAuNjMzYzAtMC4zNDItMC4wNzEtMC41ODItMC4yMTItMC43MTcNCgkJYy0wLjE0My0wLjEzNS0wLjQxMi0wLjIwMS0wLjgxMy0wLjIwMWMtMC4xOTYsMC0wLjM5OCwwLjAyOS0wLjYwNSwwLjA5Yy0wLjIwNSwwLjA2My0wLjM4MywwLjEyLTAuNTI5LDAuMTc2bDAuMjAxLTAuODI4DQoJCWMwLjQ5OC0wLjIwMywwLjk3NS0wLjM3NywxLjQzLTAuNTIxYzAuNDU1LTAuMTQ2LDAuODg1LTAuMjE4LDEuMjktMC4yMThjMC43MzEsMCwxLjI5NSwwLjE3OCwxLjY5MiwwLjUzDQoJCWMwLjM5NSwwLjM1MywwLjU5NCwwLjgxMiwwLjU5NCwxLjM3NmMwLDAuMTE3LTAuMDE0LDAuMzIzLTAuMDQxLDAuNjE3Yy0wLjAyNywwLjI5NS0wLjA3OCwwLjU2NC0wLjE1MiwwLjgxMWwtMC43NTcsMi42OA0KCQljLTAuMDYyLDAuMjE1LTAuMTE3LDAuNDYxLTAuMTY3LDAuNzM2Yy0wLjA0OSwwLjI3NS0wLjA3MywwLjQ4NS0wLjA3MywwLjYyNmMwLDAuMzU2LDAuMDc5LDAuNTk5LDAuMjM5LDAuNzI4DQoJCWMwLjE1OCwwLjEyOSwwLjQzNSwwLjE5NCwwLjgyNywwLjE5NGMwLjE4NSwwLDAuMzkyLTAuMDMzLDAuNjI2LTAuMDk3YzAuMjMyLTAuMDY0LDAuNC0wLjEyMSwwLjUwNi0wLjE3TDE0LjI3MSwxOC4zMDd6DQoJCSBNMTQuMTM3LDcuNDI5Yy0wLjM1MywwLjMyOC0wLjc3OCwwLjQ5Mi0xLjI3NSwwLjQ5MmMtMC40OTYsMC0wLjkyNC0wLjE2NC0xLjI4LTAuNDkyYy0wLjM1NC0wLjMyOC0wLjUzMy0wLjcyNy0wLjUzMy0xLjE5Mw0KCQljMC0wLjQ2NSwwLjE4LTAuODY1LDAuNTMzLTEuMTk2YzAuMzU2LTAuMzMyLDAuNzg0LTAuNDk3LDEuMjgtMC40OTdjMC40OTcsMCwwLjkyMywwLjE2NSwxLjI3NSwwLjQ5Nw0KCQljMC4zNTMsMC4zMzEsMC41MywwLjczMSwwLjUzLDEuMTk2QzE0LjY2Nyw2LjcwMywxNC40OSw3LjEwMSwxNC4xMzcsNy40Mjl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDU3IDU3IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NyA1NzsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFkZC1zZWxlY3RlZC1uZXcuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhNDciPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnM0NSI+CgkKCQoJCgkKPC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTA5NyIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzE5IgogICBpZD0ibmFtZWR2aWV3NDMiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNC4xNDAzNTA5IgogICBpbmtzY2FwZTpjeD0iLTEwLjc0Nzg4MSIKICAgaW5rc2NhcGU6Y3k9IjI4LjUiCiAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPgo8cGF0aAogICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICBpZD0icGF0aDIiCiAgIGQ9Ik0gMjguNjYsNiBIIDkuMzQgQyA3LjQ5OCw2IDYsNy40OTggNiw5LjM0IFYgMjguNjYgQyA2LDMwLjUwMiA3LjQ5OCwzMiA5LjM0LDMyIEggMjguNjYgQyAzMC41MDIsMzIgMzIsMzAuNTAyIDMyLDI4LjY2IFYgOS4zNCBDIDMyLDcuNDk4IDMwLjUwMiw2IDI4LjY2LDYgWiIgLz48cGF0aAogICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICBpZD0icGF0aDgiCiAgIGQ9Ik0gNTEsMzcgSCA0MSBWIDI3IGMgMCwtMS4xMDQgLTAuODk2LC0yIC0yLC0yIC0xLjEwNCwwIC0yLDAuODk2IC0yLDIgViAzNyBIIDI3IGMgLTEuMTA0LDAgLTIsMC44OTYgLTIsMiAwLDEuMTA0IDAuODk2LDIgMiwyIGggMTAgdiAxMCBjIDAsMS4xMDQgMC44OTYsMiAyLDIgMS4xMDQsMCAyLC0wLjg5NiAyLC0yIFYgNDEgaCAxMCBjIDEuMTA0LDAgMiwtMC44OTYgMiwtMiAwLC0xLjEwNCAtMC44OTYsLTIgLTIsLTIgeiIgLz4KPGcKICAgaWQ9ImcxMiI+CjwvZz4KPGcKICAgaWQ9ImcxNCI+CjwvZz4KPGcKICAgaWQ9ImcxNiI+CjwvZz4KPGcKICAgaWQ9ImcxOCI+CjwvZz4KPGcKICAgaWQ9ImcyMCI+CjwvZz4KPGcKICAgaWQ9ImcyMiI+CjwvZz4KPGcKICAgaWQ9ImcyNCI+CjwvZz4KPGcKICAgaWQ9ImcyNiI+CjwvZz4KPGcKICAgaWQ9ImcyOCI+CjwvZz4KPGcKICAgaWQ9ImczMCI+CjwvZz4KPGcKICAgaWQ9ImczMiI+CjwvZz4KPGcKICAgaWQ9ImczNCI+CjwvZz4KPGcKICAgaWQ9ImczNiI+CjwvZz4KPGcKICAgaWQ9ImczOCI+CjwvZz4KPGcKICAgaWQ9Imc0MCI+CjwvZz4KPC9zdmc+"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTcgNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3IDU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjIuNjYsMEgzLjM0QzEuNDk4LDAsMCwxLjQ5OCwwLDMuMzR2MTkuMzJDMCwyNC41MDIsMS40OTgsMjYsMy4zNCwyNmgxOS4zMmMxLjg0MiwwLDMuMzQtMS40OTgsMy4zNC0zLjM0VjMuMzQNCgkJQzI2LDEuNDk4LDI0LjUwMiwwLDIyLjY2LDB6Ii8+DQoJPHBhdGggZD0iTTMzLjM0LDI2aDE5LjMyYzEuODQyLDAsMy4zNC0xLjQ5OCwzLjM0LTMuMzRWMy4zNEM1NiwxLjQ5OCw1NC41MDIsMCw1Mi42NiwwSDMzLjM0QzMxLjQ5OCwwLDMwLDEuNDk4LDMwLDMuMzR2MTkuMzINCgkJQzMwLDI0LjUwMiwzMS40OTgsMjYsMzMuMzQsMjZ6Ii8+DQoJPHBhdGggZD0iTTIyLjY2LDMwSDMuMzRDMS40OTgsMzAsMCwzMS40OTgsMCwzMy4zNHYxOS4zMkMwLDU0LjUwMiwxLjQ5OCw1NiwzLjM0LDU2aDE5LjMyYzEuODQyLDAsMy4zNC0xLjQ5OCwzLjM0LTMuMzRWMzMuMzQNCgkJQzI2LDMxLjQ5OCwyNC41MDIsMzAsMjIuNjYsMzB6Ii8+DQoJPHBhdGggZD0iTTU1LDQxSDQ1VjMxYzAtMS4xMDQtMC44OTYtMi0yLTJzLTIsMC44OTYtMiwydjEwSDMxYy0xLjEwNCwwLTIsMC44OTYtMiwyczAuODk2LDIsMiwyaDEwdjEwYzAsMS4xMDQsMC44OTYsMiwyLDINCgkJczItMC44OTYsMi0yVjQ1aDEwYzEuMTA0LDAsMi0wLjg5NiwyLTJTNTYuMTA0LDQxLDU1LDQxeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzUuNDM2LDBINy43NTV2NjMuOTUyaDI3LjY4MkwzNS40MzYsMEwzNS40MzYsMHogTTMyLjU3Myw2MS4wODlIMTAuNjE4VjIuODYzaDIxLjk1NVY2MS4wODl6IE03MC4yNzQsMjYuNDg4aC0yNy42OAoJCXYzNy40NjRoMjcuNjgyVjI2LjQ4OEg3MC4yNzR6IE02Ny40MTIsNjEuMDg5SDQ1LjQ1N1YyOS4zNTFoMjEuOTU1VjYxLjA4OXogTTc0LjU3MSw3MC4zOTV2NS4wMTJIMC44MzV2LTUuMDEySDc0LjU3MXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iOTAuOTU2cHgiIGhlaWdodD0iOTAuOTU3cHgiIHZpZXdCb3g9IjAgMCA5MC45NTYgOTAuOTU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MC45NTYgOTAuOTU3OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDEuNjYxLDEzLjUwMUgxMy45Nzl2NjMuOTUzaDI3LjY4MlYxMy41MDF6IE0zOC43OTcsNzQuNTkxSDE2Ljg0MlYxNi4zNjZoMjEuOTU1Vjc0LjU5MXogTTc2LjQ5OSwyNi43NDdINDguODE4djM3LjQ2NQoJCUg3Ni41TDc2LjQ5OSwyNi43NDdMNzYuNDk5LDI2Ljc0N3ogTTczLjYzNyw2MS4zNDdINTEuNjgyVjI5LjYwOWgyMS45NTVWNjEuMzQ3eiBNMTAuOTc4LDQyLjk3M3Y1LjAxMUgwdi01LjAxMUgxMC45Nzh6CgkJIE05MC45NTYsNDIuOTczdjUuMDExSDc5Ljk3OXYtNS4wMTFIOTAuOTU2eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzUuNDM2LDExLjQ1NEg3Ljc1NXY2My45NTJoMjcuNjgyTDM1LjQzNiwxMS40NTRMMzUuNDM2LDExLjQ1NHogTTMyLjU3Myw3Mi41NDNIMTAuNjE4VjE0LjMxN2gyMS45NTVWNzIuNTQzegoJCSBNNzAuMjc0LDExLjQ1NGgtMjcuNjh2MzcuNDY0aDI3LjY4MlYxMS40NTRINzAuMjc0eiBNNjcuNDEyLDQ2LjA1NUg0NS40NTdWMTQuMzE3aDIxLjk1NVY0Ni4wNTV6IE0wLjgzNSw1LjAxMVYwaDczLjczNnY1LjAxMQoJCUgwLjgzNXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iOTAuOTU2cHgiIGhlaWdodD0iOTAuOTU2cHgiIHZpZXdCb3g9IjAgMCA5MC45NTYgOTAuOTU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MC45NTYgOTAuOTU2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNzcuNDU0LDQxLjY2MVYxMy45NzlIMTMuNTAydjI3LjY4Mkg3Ny40NTR6IE0xNi4zNjUsMzguNzk3VjE2Ljg0Mmg1OC4yMjZ2MjEuOTU1SDE2LjM2NXogTTY0LjIxLDc2LjQ5OVY0OC44MThIMjYuNzQ2CgkJVjc2LjVMNjQuMjEsNzYuNDk5TDY0LjIxLDc2LjQ5OXogTTI5LjYwOSw3My42MzdWNTEuNjgyaDMxLjczN3YyMS45NTVIMjkuNjA5eiBNNDcuOTgyLDEwLjk3OGgtNS4wMVYwaDUuMDFWMTAuOTc4egoJCSBNNDcuOTgyLDkwLjk1NmgtNS4wMVY3OS45NzloNS4wMVY5MC45NTZ6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNzUuNDA2LDM1LjQzNlY3Ljc1NUgxMS40NTR2MjcuNjgyTDc1LjQwNiwzNS40MzZMNzUuNDA2LDM1LjQzNnogTTE0LjMxNywzMi41NzNWMTAuNjE4aDU4LjIyNnYyMS45NTVIMTQuMzE3egoJCSBNNDguOTE4LDcwLjI3NVY0Mi41OTVIMTEuNDU0djI3LjY4Mkw0OC45MTgsNzAuMjc1TDQ4LjkxOCw3MC4yNzV6IE0xNC4zMTcsNjcuNDEyVjQ1LjQ1N2gzMS43Mzh2MjEuOTU1SDE0LjMxN3ogTTUuMDExLDc0LjU3MUgwCgkJVjAuODM1aDUuMDExVjc0LjU3MXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNjMuOTUyLDM1LjQzNlY3Ljc1NUgwdjI3LjY4Mkw2My45NTIsMzUuNDM2TDYzLjk1MiwzNS40MzZ6IE0yLjg2MywzMi41NzNWMTAuNjE4SDYxLjA5djIxLjk1NUgyLjg2M3ogTTYzLjk1Miw3MC4yNzUKCQlWNDIuNTk1SDI2LjQ4OHYyNy42ODJMNjMuOTUyLDcwLjI3NUw2My45NTIsNzAuMjc1eiBNMjkuMzUxLDY3LjQxMlY0NS40NTdoMzEuNzM3djIxLjk1NUgyOS4zNTF6IE03MC4zOTUsMC44MzVoNS4wMTJ2NzMuNzM2CgkJaC01LjAxMlYwLjgzNXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDYxMiA2MTIiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZGVsZXRlLXNpbXBsZS5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQzIj48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNDEiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaWQ9Im5hbWVkdmlldzM5IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIxLjA5MDcwMDciCiAgICAgaW5rc2NhcGU6Y3g9IjI5NS4wMzQwOCIKICAgICBpbmtzY2FwZTpjeT0iMzMwLjg1NDQ4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJDYXBhXzEiIC8+PGcKICAgICBpZD0iZzUiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTc4ODEzNSwwLDAsMC45OTc4ODEzNSwxLjczMDQwMTIsMC45MjM3Mjg0NykiPjxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg3IgogICAgICAgZD0iTSA1ODcuODI2LDE4Ni45NjYgQyA1NzEuNzEsMTQ5LjYzNCA1NDkuODgyLDExNy4xOTggNTIyLjM0Miw4OS42NTggNDk0LjgwMiw2Mi4xMTggNDYyLjM2Niw0MC4yOSA0MjUuMDM0LDI0LjE3NCAzODcuNzAyLDguMDU4IDM0OC4wMjQsMCAzMDYsMCAyNzcuODQ4LDAgMjUwLjcxNiwzLjY3MiAyMjQuNjA0LDExLjAxNiAxOTguNDkyLDE4LjM2IDE3NC4xMTQsMjguNjYyIDE1MS40Nyw0MS45MjIgMTI4LjgyNiw1NS4xODIgMTA4LjIyMiw3MS4wOTQgODkuNjU4LDg5LjY1OCA3MS4wOTQsMTA4LjIyMiA1NS4xODIsMTI4LjgyNiA0MS45MjIsMTUxLjQ3IDI4LjY2MiwxNzQuMTE2IDE4LjM2LDE5OC40OTIgMTEuMDE2LDIyNC42MDQgMy42NzIsMjUwLjcxNiAwLDI3Ny44NDggMCwzMDYgYyAwLDI4LjE1MiAzLjY3Miw1NS4yODQgMTEuMDE2LDgxLjM5NiA3LjM0NCwyNi4xMSAxNy42NDYsNTAuNDg3IDMwLjkwNiw3My4xMzQgMTMuMjYsMjIuNjQ0IDI5LjE3Miw0My4yNDkgNDcuNzM2LDYxLjgxMiAxOC41NjQsMTguNTY0IDM5LjE2OCwzNC40NzggNjEuODEyLDQ3LjczNiAyMi42NDQsMTMuMjYgNDcuMDIyLDIzLjU2MSA3My4xMzQsMzAuOTA2IEMgMjUwLjcxNiw2MDguMzI4IDI3Ny44NDgsNjEyIDMwNiw2MTIgYyAyOC4xNTIsMCA1NS4yODQsLTMuNjcyIDgxLjM5NiwtMTEuMDE2IDI2LjExMSwtNy4zNDYgNTAuNDg4LC0xNy42NDYgNzMuMTM1LC0zMC45MDYgMjIuNjQ0LC0xMy4yNTkgNDMuMjQ5LC0yOS4xNzIgNjEuODEyLC00Ny43MzYgMTguNTY0LC0xOC41NjMgMzQuNDc4LC0zOS4xNjggNDcuNzM2LC02MS44MTIgMTMuMjYsLTIyLjY0NiAyMy41NjEsLTQ3LjAyMyAzMC45MDYsLTczLjEzNSBDIDYwOC4zMjgsMzYxLjI4NCA2MTIsMzM0LjE1MiA2MTIsMzA2IDYxMiwyNjMuOTc2IDYwMy45NDIsMjI0LjI5OCA1ODcuODI2LDE4Ni45NjYgWiBNIDQ2OC4xOCwzOTEuNjggYyAyLjA0LDIuMDQgMy4wNjMsNC4yODQgMy4wNjMsNi43MzIgMCwyLjQ0OCAtMS4wMjEsNC40ODggLTMuMDYzLDYuMTIgbCAtNTkuOTc2LDYwLjU4OCBjIC0xLjYzMSwxLjYzMiAtMy44NzYsMi40NDggLTYuNzMyLDIuNDQ4IC0yLjg1NCwwIC00Ljg5NSwtMC44MTYgLTYuMTIsLTIuNDQ4IEwgMzA5LjA2LDM3OC44MjggMjIzLjM4LDQ2NS4xMiBjIC0yLjQ0OCwxLjYzMiAtNC42OTIsMi40NDggLTYuNzMyLDIuNDQ4IC0xLjYzMiwwIC0zLjY3MiwtMC44MTYgLTYuMTIsLTIuNDQ4IGwgLTU5Ljk3NiwtNjAuNTg4IGMgLTIuMDQsLTEuMjI2IC0zLjA2LC0zLjI2NyAtMy4wNiwtNi4xMiAwLC0yLjQ0OCAxLjAyLC00LjY5MiAzLjA2LC02LjczMiBsIDg1LjY4LC04NS42OCAtODUuNjgsLTg1LjY4IGMgLTIuMDQsLTIuMDQgLTMuMDYsLTQuMjg0IC0zLjA2LC02LjczMiAwLC0yLjg1NiAxLjAyLC00Ljg5NiAzLjA2LC02LjEyIGwgNTkuOTc2LC02MC41ODggYyAxLjYzMiwtMS42MzIgMy42NzIsLTIuNDQ4IDYuMTIsLTIuNDQ4IDIuNDQ4LDAgNC42OTIsMC44MTYgNi43MzIsMi40NDggbCA4NS42OCw4Ni4yOTIgODYuMjkyLC04Ni4yOTIgYyAxLjYzNSwtMS42MzIgMy42NzUsLTIuNDQ4IDYuMTIsLTIuNDQ4IDIuNDQ4LDAgNC42OTIsMC44MTYgNi43MzIsMi40NDggbCA1OS45NzYsNjAuNTg4IGMgMi4wNCwxLjYzMiAzLjA2MywzLjY3MiAzLjA2Myw2LjEyIDAsMi40NDggLTEuMDIxLDQuNjkyIC0zLjA2Myw2LjczMiBMIDM4Mi41LDMwNiBsIDg1LjY4LDg1LjY4IHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDEwMDAyIiAvPjwvZz48ZwogICAgIGlkPSJnOSIgLz48ZwogICAgIGlkPSJnMTEiIC8+PGcKICAgICBpZD0iZzEzIiAvPjxnCiAgICAgaWQ9ImcxNSIgLz48ZwogICAgIGlkPSJnMTciIC8+PGcKICAgICBpZD0iZzE5IiAvPjxnCiAgICAgaWQ9ImcyMSIgLz48ZwogICAgIGlkPSJnMjMiIC8+PGcKICAgICBpZD0iZzI1IiAvPjxnCiAgICAgaWQ9ImcyNyIgLz48ZwogICAgIGlkPSJnMjkiIC8+PGcKICAgICBpZD0iZzMxIiAvPjxnCiAgICAgaWQ9ImczMyIgLz48ZwogICAgIGlkPSJnMzUiIC8+PGcKICAgICBpZD0iZzM3IiAvPjwvc3ZnPg=="

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTQxLjkxMXB4IiBoZWlnaHQ9IjU0MS45MTFweCIgdmlld0JveD0iMCAwIDU0MS45MTEgNTQxLjkxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTQxLjkxMSA1NDEuOTExOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDY3LjgyNiw4Ljc4MXY0Ny40NTFINzQuMDkxVjguNzgxYzAtNC42MDgtMy43MjktOC4zMzQtOC4zMzQtOC4zMzRjLTQuNjA3LDAtOC4zMzQsMy43MjctOC4zMzQsOC4zMzR2NDkuMDY4SDguMzM0CgkJQzMuNzMsNTcuODQ5LDAsNjEuNTg0LDAsNjYuMTgzYzAsNC42MDcsMy43Myw4LjMzNCw4LjMzNCw4LjMzNGg0OS4wODN2MzkyLjg2OEg4LjMzNGMtNC42MDQsMC04LjMzNCwzLjcyOS04LjMzNCw4LjMzNAoJCWMwLDQuNjEsMy43Myw4LjMzNCw4LjMzNCw4LjMzNGg0OS4wODN2NDkuMDc3YzAsNC42MDQsMy43MjcsOC4zMzQsOC4zMzQsOC4zMzRjNC42MDQsMCw4LjMzNC0zLjcyOSw4LjMzNC04LjMzNHYtNDkuMDc3aDM5My43NAoJCXY0OS4wNzdjMCw0LjYwNCwzLjcyOSw4LjMzNCw4LjMzNCw4LjMzNGM0LjYxLDAsOC4zMzQtMy43MjksOC4zMzQtOC4zMzR2LTQ5LjA3N2g0OS4wODNjNC42MDQsMCw4LjMzNC0zLjcyNCw4LjMzNC04LjMzNAoJCWMwLTQuNjA0LTMuNzI5LTguMzM0LTguMzM0LTguMzM0aC00OC4zMzJWNzQuNTE3aDQ4LjMzMmM0LjYwNCwwLDguMzM0LTMuNzI3LDguMzM0LTguMzM0YzAtNC41OTktMy43MjktOC4zMzQtOC4zMzQtOC4zMzRoLTQ5LjA4MwoJCVY4Ljc4MWMwLTQuNjA4LTMuNzI0LTguMzM0LTguMzM0LTguMzM0QzQ3MS41NTUsMC40NDYsNDY3LjgyNiw0LjE3Myw0NjcuODI2LDguNzgxeiBNNDY4LjIwNCwzNDAuNTI4djEyNi44NTdIMzQwLjQxM1YzNDAuNTI4CgkJSDQ2OC4yMDR6IE0zMzQuODU3LDM0MC41Mjh2MTI2Ljg1N0gyMDcuNDM2VjM0MC41MjhIMzM0Ljg1N3ogTTIwMS41MDQsMzQwLjUyOHYxMjYuODU3SDc0LjA5MVYzNDAuNTI4SDIwMS41MDR6IE00NjguMjA0LDIwNy4xNzIKCQl2MTI3LjhIMzQwLjQxM3YtMTI3LjhINDY4LjIwNHogTTMzNC44NTcsMjA3LjE3MnYxMjcuOEgyMDcuNDM2di0xMjcuOEgzMzQuODU3eiBNMjAxLjUwNCwyMDcuMTcydjEyNy44SDc0LjA5MXYtMTI3LjhIMjAxLjUwNHoKCQkgTTQ2OC4yMDQsNzMuODI5djEyNy43ODhIMzQwLjQxM1Y3My44MjlINDY4LjIwNHogTTMzNC44NTcsNzMuODI5djEyNy43ODhIMjA3LjQzNlY3My44MjlIMzM0Ljg1N3ogTTIwMS41MDQsNzMuODI5djEyNy43ODgKCQlINzQuMDkxVjczLjgyOUgyMDEuNTA0eiBNMzIzLjQxNCw4My44ODVWMTg4Ljc5SDIxOC41MDZWODMuODg1SDMyMy40MTR6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDE4cHgiIGhlaWdodD0iNDE4cHgiIHZpZXdCb3g9IjAgMCA0MTggNDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTggNDE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik05MS42MDYsMTQzLjcwM2MtMy4xNDYtMy4xNDYtNy44NzctNC4wODctMTEuOTg4LTIuMzg1Yy00LjExLDEuNzAzLTYuNzksNS43MTQtNi43OSwxMC4xNjN2MTE1LjAzNwoJCQkJYzAsNC40NDksMi42OCw4LjQ2MSw2Ljc5LDEwLjE2NGMxLjM2MSwwLjU2MywyLjc5LDAuODM2LDQuMjA4LDAuODM2YzIuODYyLDAsNS42NzYtMS4xMTYsNy43OC0zLjIyMmw1Ny41Mi01Ny41MTkKCQkJCWMyLjA2My0yLjA2MywzLjIyMi00Ljg2MSwzLjIyMi03Ljc3OHMtMS4xNTktNS43MTYtMy4yMjItNy43NzhMOTEuNjA2LDE0My43MDN6Ii8+CgkJCTxwYXRoIGQ9Ik0zMzguMzgyLDE0MS4zMThjLTQuMTA3LTEuNy04Ljg0MS0wLjc2My0xMS45ODcsMi4zODVsLTU3LjUyMSw1Ny41MTljLTIuMDYyLDIuMDYzLTMuMjIyLDQuODYxLTMuMjIyLDcuNzc4CgkJCQlzMS4xNTgsNS43MTYsMy4yMjIsNy43NzdsNTcuNTIxLDU3LjUyYzIuMTA0LDIuMTA0LDQuOTE4LDMuMjIzLDcuNzc5LDMuMjIzYzEuNDE3LDAsMi44NDgtMC4yNzIsNC4yMDgtMC44MzgKCQkJCWM0LjExLTEuNzAzLDYuNzktNS43MTQsNi43OS0xMC4xNjJWMTUxLjQ4MUMzNDUuMTcyLDE0Ny4wMzIsMzQyLjQ5MiwxNDMuMDIxLDMzOC4zODIsMTQxLjMxOHoiLz4KCQkJPHBhdGggZD0iTTIxMiwwaC02Yy02LjA3NSwwLTExLDQuOTI1LTExLDExdjM1YzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExVjExQzIyMyw0LjkyNSwyMTguMDc1LDAsMjEyLDB6IgoJCQkJLz4KCQkJPHBhdGggZD0iTTIxMiw5NS4zNTJoLTZjLTYuMDc1LDAtMTEsNC45MjUtMTEsMTF2NzIuNDczYzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExdi03Mi40NzMKCQkJCUMyMjMsMTAwLjI3NiwyMTguMDc1LDk1LjM1MiwyMTIsOTUuMzUyeiIvPgoJCQk8cGF0aCBkPSJNMjEyLDIyOC4xNzZoLTZjLTYuMDc1LDAtMTEsNC45MjYtMTEsMTF2NzIuNDc0YzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExdi03Mi40NzQKCQkJCUMyMjMsMjMzLjEwMiwyMTguMDc1LDIyOC4xNzYsMjEyLDIyOC4xNzZ6Ii8+CgkJCTxwYXRoIGQ9Ik0yMTIsMzYxaC02Yy02LjA3NSwwLTExLDQuOTI1LTExLDExdjM1YzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExdi0zNQoJCQkJQzIyMywzNjUuOTI1LDIxOC4wNzUsMzYxLDIxMiwzNjF6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDk3LjE5OXB4IiBoZWlnaHQ9IjQ5Ny4xOTlweCIgdmlld0JveD0iMCAwIDQ5Ny4xOTkgNDk3LjE5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk3LjE5OSA0OTcuMTk5OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTkxLjIsMjQ4LjZjMC0xNS4zLDUuNy0yOC43LDE3LjItNDAuMnMyNC45LTE3LjIsNDAuMi0xNy4yTDE5MS4yLDI0OC42eiBNMTc0LDI2NS44Yy0xLjktNS43LTEuOS0xMS41LTEuOS0xNy4yCgkJYzAtNDIuMSwzNC40LTc2LjUsNzYuNS03Ni41YzUuNzAxLDAsMTEuNSwwLDE3LjIwMSwxLjlsNTEuNi01MS42Yy0yMS01LjctNDQtNy43LTY4LjktNy43Qzc2LjUsMTE0LjcsMCwyNDguNiwwLDI0OC42CgkJczMwLjYsNTMuNSw5Ny41LDkzLjdMMTc0LDI2NS44eiBNMzA2LDI0OC42TDI0OC42LDMwNmMxNS4zLDAsMjguNzAxLTUuNyw0MC4yMDEtMTcuMkMzMDAuMTk5LDI3Ny4zLDMwNiwyNjMuODk5LDMwNiwyNDguNnoKCQkgTTM5OS42OTksMTU0Ljg5OWwtNzYuNSw3Ni41YzEuOSw1LjcsMS45LDExLjUsMS45LDE3LjJjMCw0Mi4xLTM0LjQsNzYuNS03Ni41LDc2LjVjLTUuNywwLTExLjUsMC0xNy4yLTEuOUwxNzkuOCwzNzQuOAoJCWMyMSw1LjcsNDQsNy42LDY4LjgsNy42YzE3Mi4wOTksMCwyNDguNTk5LTEzMy45LDI0OC41OTktMTMzLjlTNDY2LjYsMTk1LjEsMzk5LjY5OSwxNTQuODk5eiBNNDAxLjQsNzYuODk5bC0zMjQuNSwzMjQuNQoJCWwxOC45LDE4LjlMNDIwLjQsOTUuN0w0MDEuNCw3Ni44OTl6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ4NS4yMTVweCIKICAgaGVpZ2h0PSI0ODUuMjE1cHgiCiAgIHZpZXdCb3g9IjAgMCA0ODUuMjE1IDQ4NS4yMTUiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4NS4yMTUgNDg1LjIxNTsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJfbGF5b3V0LXByb3BlcnRpZXMuc3ZnIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGUgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTA4OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2NjYiCiAgICAgaWQ9Im5hbWVkdmlldzM3IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjQ4NjM4MjMzIgogICAgIGlua3NjYXBlOmN4PSItNzYuMzQ1OTcyIgogICAgIGlua3NjYXBlOmN5PSI0MDcuMDg3MTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY0OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iNTAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJDYXBhXzEiIC8+PGcKICAgICBpZD0iZzEwMzQ5IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwzMy42MTk5MTksMjAuMDQ5NjkzKSI+PGcKICAgICAgIGlkPSJMYXllcl8xXzExMF8iPjxnCiAgICAgICAgIGlkPSJnMTAzNTIiPjxwYXRoCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBkPSJtIDE3LjU2NywxNS45MzggLTIuODU5LC0yLjcwMiBjIDAuMzMzLC0wLjYwNSAwLjUzOSwtMS4yOSAwLjUzOSwtMi4wMjkgMCwtMi4zNDIgLTEuODk3LC00LjIzOSAtNC4yNCwtNC4yMzkgLTIuMzQzLDAgLTQuMjQzLDEuODk2IC00LjI0Myw0LjIzOSAwLDIuMzQzIDEuOSw0LjI0MSA0LjI0Myw0LjI0MSAwLjgyNiwwIDEuNTksLTAuMjQ2IDIuMjQyLC0wLjY1NCBsIDIuODU1LDIuNjk5IGMgMC40MzIsLTAuNTcxIDAuOTE5LC0xLjA5NCAxLjQ2MywtMS41NTUgeiIKICAgICAgICAgICBpZD0icGF0aDEwMzU0IiAvPjxwYXRoCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBkPSJtIDI5LjY2LDE1LjYgMy43OTksLTYuMzkzIGMgMC4zNzQsMC4xMDcgMC43NjIsMC4xODQgMS4xNjksMC4xODQgMi4zNDcsMCA0LjI0NCwtMS44OTggNC4yNDQsLTQuMjQxIDAsLTIuMzQyIC0xLjg5NywtNC4yMzkgLTQuMjQ0LC00LjIzOSAtMi4zNDMsMCAtNC4yMzksMS44OTYgLTQuMjM5LDQuMjM5IDAsMS4xNjMgMC40NjksMi4yMTQgMS4yMjcsMi45ODEgbCAtMy43ODcsNi4zNzUgYyAwLjY1MSwwLjI5NSAxLjI2NSwwLjY2MyAxLjgzMSwxLjA5NCB6IgogICAgICAgICAgIGlkPSJwYXRoMTAzNTYiIC8+PHBhdGgKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIGQ9Im0gNDIuNzYyLDIwLjk1MiBjIC0xLjgyNCwwIC0zLjM2OSwxLjE1OSAtMy45NjgsMi43NzUgbCAtNS4yNzgsLTAuNTIxIGMgMCwwLjA0IDAuMDA2LDAuMDc4IDAuMDA2LDAuMTE3IDAsMC42ODggLTAuMDc2LDEuMzYgLTAuMjEzLDIuMDA5IGwgNS4yNzYsMC41MjEgYyAwLjMxOSwyLjAyNCAyLjA2MiwzLjU3NiA0LjE3NywzLjU3NiAyLjM0MiwwIDQuMjM4LC0xLjg5NiA0LjIzOCwtNC4yMzggMCwtMi4zNDEgLTEuODk2LC00LjIzOSAtNC4yMzgsLTQuMjM5IHoiCiAgICAgICAgICAgaWQ9InBhdGgxMDM1OCIgLz48cGF0aAogICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgZD0ibSAyOC4xOTcsMzcuNjI0IC0xLjE4LC01LjE1NiBjIC0wLjY2NiwwLjIzMiAtMS4zNTksMC4zOTggLTIuMDgyLDAuNDgxIGwgMS4xODIsNS4xNTcgYyAtMS4zNTUsMC43MDkgLTIuMjksMi4xMSAtMi4yOSwzLjc0NiAwLDIuMzQyIDEuODk2LDQuMjM3IDQuMjQzLDQuMjM3IDIuMzQyLDAgNC4yMzgsLTEuODk2IDQuMjM4LC00LjIzNyAwLjAwMywtMi4yOTkgLTEuODI5LC00LjE2IC00LjExMSwtNC4yMjggeiIKICAgICAgICAgICBpZD0icGF0aDEwMzYwIiAvPjxjaXJjbGUKICAgICAgICAgICBjeD0iMjMuODMiCiAgICAgICAgICAgY3k9IjIzLjMyMyIKICAgICAgICAgICByPSI3LjI3MDk5OTkiCiAgICAgICAgICAgaWQ9ImNpcmNsZTEwMzY0IiAvPjwvZz48L2c+PC9nPjxnCiAgICAgaWQ9ImcxMDM2NiIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzY4IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzNzAiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM3MiIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzc0IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzNzYiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM3OCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzgwIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzODIiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM4NCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzg2IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzODgiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM5MCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzkyIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzOTQiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9Imc0MzIwIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDQuNzU0NDI3MSwwLDAsNC43NTQ0MjcxLDcuODM5OTM2MSwyNjAuNzI3NDEpIj48ZwogICAgICAgaWQ9Imc0MjgwIj48cGF0aAogICAgICAgICBpZD0icGF0aDQyODIiCiAgICAgICAgIGQ9Im0gNDEuNTM0LDI4LjY2IDEuOTU3LDAgQyA0NC44NzcsMjguNjYgNDYsMjcuNTM2IDQ2LDI2LjE1IGwgMCwtNi4zIGMgMCwtMS4zODUgLTEuMTI0LC0yLjUwOSAtMi41MDksLTIuNTA5IGwgLTEuOTUxLDAgMCwwLjAwNiBDIDQxLjE0OCwxNi4xNCA0MC42ODcsMTQuOTgzIDQwLjEwMywxMy44ODkgbCAxLjM4MSwtMS4zODEgYyAwLjk3OSwtMC45OCAwLjk3OSwtMi41NjkgMCwtMy41NDkgTCAzNy4wNCw0LjUxNyBjIC0wLjk3OSwtMC45NzkgLTIuNTY3LC0wLjk3OSAtMy41NDcsMCBsIC0xLjM4MiwxLjM4IEMgMzEuMDE3LDUuMzEzIDI5Ljg2MSw0Ljg1MiAyOC42NTQsNC40NjEgbCAwLjAwNiwwIDAsLTEuOTUxIEMgMjguNjYsMS4xMjQgMjcuNTM3LDAgMjYuMTUsMCBsIC02LjMsMCBjIC0xLjM4NiwwIC0yLjUwOSwxLjEyNCAtMi41MDksMi41MSBsIDAsMS45NTUgMC4wMTQsLTEwZS00IGMgLTEuMjA3LDAuMzY3IC0yLjM2MywwLjg1IC0zLjQ1OCwxLjQzNSBMIDEyLjUxNiw0LjUxOCBjIC0wLjk4LC0wLjk3OSAtMi41NjgsLTAuOTc5IC0zLjU0OCwwIEwgNC41MjUsOC45NjEgQyAzLjU0Niw5Ljk0IDMuNTQ1LDExLjUyNyA0LjUyMywxMi41MDcgTCA1LjksMTMuODg5IEMgNS4zMTYsMTQuOTgzIDQuODUxLDE2LjE0IDQuNDYsMTcuMzQ2IGwgMCwtMC4wMDUgLTEuOTUxLDAgQyAxLjEyNCwxNy4zNDEgMCwxOC40NjUgMCwxOS44NSBsIDAsNi4zMDEgYyAwLDEuMzg3IDEuMTI0LDIuNTExIDIuNTA5LDIuNTExIGwgMS45NjQsMCAtMC4wMDYsLTAuMDE1IGMgMC4zNjcsMS4yMDcgMC44NTMsMi4zNjIgMS40MzYsMy40NTcgbCAtMS4zOCwxLjM4MSBjIC0wLjk4LDAuOTc5IC0wLjk3OSwyLjU2NyAwLDMuNTQ3IGwgNC40NDMsNC40NDIgYyAwLjk3OSwwLjk3OSAyLjU2OCwwLjk3OSAzLjU0OCwwIGwgMS4zODEsLTEuMzgxIGMgMS4wOTQsMC41ODQgMi4yNTEsMS4wNzIgMy40NTgsMS40MzggbCAtMC4wMTQsLTAuMDA2IDAsMS45NjUgYyAwLDEuMzg3IDEuMTIzLDIuNTEgMi41MDksMi41MSBsIDYuMywwIGMgMS4zODcsMCAyLjUxLC0xLjEyMyAyLjUxLC0yLjUxIGwgMCwtMS45NSAtMC4wMDYsMCBjIDEuMjA3LC0wLjM5MiAyLjM2MywtMC44NTYgMy40NTcsLTEuNDQgbCAxLjM4MSwxLjM3OSBjIDAuOTgsMC45NzkgMi41NjgsMC45NzkgMy41NDcsMCBsIDQuNDQzLC00LjQ0NSBjIDAuOTc5LC0wLjk3OSAwLjk3OSwtMi41NjYgMCwtMy41NDcgbCAtMS4zODMsLTEuMzgzIGMgMC41ODQsLTEuMDk0IDEuMDY4LC0yLjI1IDEuNDM2LC0zLjQ1NyBsIDEwZS00LDAuMDEzIHogTSAyMy4wMjEsMzYuNzE0IEMgMTUuNDQ0LDM2LjcyMyA5LjI3OCwzMC41NTcgOS4yODcsMjIuOTggOS4yOTYsMTUuNDQxIDE1LjQ1LDkuMjg3IDIyLjk4OSw5LjI3OCBjIDcuNTc4LC0wLjAwOSAxMy43NDQsNi4xNTcgMTMuNzM0LDEzLjczNCAtMC4wMSw3LjUzOSAtNi4xNjIsMTMuNjkzIC0xMy43MDIsMTMuNzAyIHoiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9nPjxnCiAgICAgICBpZD0iZzQyODQiIC8+PGcKICAgICAgIGlkPSJnNDI4NiIgLz48ZwogICAgICAgaWQ9Imc0Mjg4IiAvPjxnCiAgICAgICBpZD0iZzQyOTAiIC8+PGcKICAgICAgIGlkPSJnNDI5MiIgLz48ZwogICAgICAgaWQ9Imc0Mjk0IiAvPjxnCiAgICAgICBpZD0iZzQyOTYiIC8+PGcKICAgICAgIGlkPSJnNDI5OCIgLz48ZwogICAgICAgaWQ9Imc0MzAwIiAvPjxnCiAgICAgICBpZD0iZzQzMDIiIC8+PGcKICAgICAgIGlkPSJnNDMwNCIgLz48ZwogICAgICAgaWQ9Imc0MzA2IiAvPjxnCiAgICAgICBpZD0iZzQzMDgiIC8+PGcKICAgICAgIGlkPSJnNDMxMCIgLz48ZwogICAgICAgaWQ9Imc0MzEyIiAvPjwvZz48L3N2Zz4="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ4OC43OHB4IiBoZWlnaHQ9IjQ4OC43OHB4IiB2aWV3Qm94PSIwIDAgNDg4Ljc4IDQ4OC43OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg4Ljc4IDQ4OC43ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNDEuNDA4LDExOS44NzJjMTIuMjkzLTEzLjExMiwyOS42NTMtMjAuNzcsNDcuNjI0LTIwLjc3aDI0Ny40MDVWNDcuODI4YzAtMTIuNTY5LTEwLjQ2OC0yMi42NTItMjMuMDM2LTIyLjY1Mkg3NS4zOTcNCgkJCWMtMTIuNTc1LDAtMjIuNDkxLDEwLjA4My0yMi40OTEsMjIuNjUydjEwMS4wNDZoNjEuNDQ1TDE0MS40MDgsMTE5Ljg3MnoiLz4NCgkJPHBhdGggZD0iTTQ4My4wMTksMTQ5LjI1M2MtMS43MDktMS45MjQtMy43MTctMy41NS01LjkyMy00Ljc4Yy0zLjM1Mi0xLjg2MS03LjE1MS0yLjkyLTExLjA3MS0yLjkySDE4OS4wMzJsMCwwDQoJCQljLTYsMC0xMS43MzUsMi40MDktMTUuOTgzLDYuNjAxYy0wLjIxNCwwLjIwOC0wLjQyMywwLjQzOC0wLjYyNiwwLjY1MWwtOS4yNzUsOS45MTFsLTIzLjYyMiwyNS4yMDcNCgkJCWMtMC41NDIsMC41NzMtMS4xMDUsMS4yMTktMS42OTQsMS43MzZjLTQuMTEzLDMuNTcyLTkuNDEsNS42NjctMTQuOTE1LDUuNjY3aC0wLjAwNUgyMi43NjhsMCwwDQoJCQljLTUuNjg0LDAtMTEuMTExLDIuMDIyLTE1LjI3MSw1Ljc5MWMtMC42NjcsMC41ODktMS4yOTMsMS4xNzktMS44ODgsMS44NTdjLTAuNDE3LDAuNDc5LTAuODAzLDAuOTQ4LTEuMTgzLDEuNDU5DQoJCQljLTMuNDgyLDQuNzQ0LTUuMDIsMTAuNjYxLTQuMjE3LDE2LjU0MmwyNi40NzksMTk0LjE4MmMzLjU2NSwyNi4xNCwyMy41NTMsNDYuNjEyLDQ4LjY5Miw1MS4yODQNCgkJCWMzLjU5MiwwLjY2Nyw3LjI4OCwxLjE2MywxMS4wNTgsMS4xNjNoMzE0LjI2MWMyNy43NjEsMCw1MS41MjItMTkuMDAzLDU4LjM1NC00NS4xOTRjMC43MDQtMi43MDYsMS4yMjYtNS41NjcsMS41NTUtOC40Mg0KCQkJbDE1LjI2NS0xMzIuMjg5bDEyLjc3Mi0xMTAuNjc0YzAuMDY3LTAuNjQ3LDAuMTA4LTEuMjkzLDAuMTI1LTEuOTI5QzQ4OC45NDcsMTU5LjI5OSw0ODYuOTA5LDE1My42MjMsNDgzLjAxOSwxNDkuMjUzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ4OXB4IgogICBoZWlnaHQ9IjQ4OS4wMDFweCIKICAgdmlld0JveD0iMCAwIDQ4OSA0ODkuMDAxIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODkgNDg5LjAwMTsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJuZXcuc3ZnIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNjkwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjQ4MCIKICAgICBpZD0ibmFtZWR2aWV3MzciCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjAuNDgyNjE2NTkiCiAgICAgaW5rc2NhcGU6Y3g9IjI0NC41IgogICAgIGlua3NjYXBlOmN5PSIyNDQuNTAwNSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkNhcGFfMSIgLz48ZwogICAgIGlkPSJnMyIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjk2MTk2NzY5LDAsMCwwLjk2MTk2NzY5LDkuMDEwNzg0OCwxMCkiPjxwYXRoCiAgICAgICBkPSJNIDM1NS43NjgsMCA4Ni4yMTgsMCBDIDUzLjMzLDAgMjYuNTc3LDI2Ljc1MyAyNi41NzcsNTkuNjM2IGwgMCwzNjkuNzI5IGMgMCwzMi44ODMgMjYuNzUyLDU5LjYzNiA1OS42NDEsNTkuNjM2IGwgMzE2LjU2NiwwIGMgMzIuODg5LC0xMGUtNCA1OS42NDEsLTI2Ljc1NCA1OS42NDEsLTU5LjYzNyBsIDAsLTMyMC4yMDQgTCAzNTUuNzY4LDAgWiBtIDQ3LjAxNiw0NDYuNDc5IC0zMTYuNTY2LDAgYyAtOS40MzcsMCAtMTcuMTE5LC03LjY3OCAtMTcuMTE5LC0xNy4xMTMgbCAwLC0zNjkuNzMgYyAwLC05LjQzNyA3LjY4MywtMTcuMTE0IDE3LjExOSwtMTcuMTE0IGwgMjQ4LjY0MiwwIDAsNDcuNjA0IGMgMCwyMS4wNDMgMTcuMTA5LDM4LjE2MiAzOC4xNTIsMzguMzc1IGwgNDYuODkxLDAuNDc3IDAsMzAwLjM4OCBjIDAsOS40MzUgLTcuNjg0LDE3LjExMyAtMTcuMTE5LDE3LjExMyB6IgogICAgICAgaWQ9InBhdGg1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48L2c+PGcKICAgICBpZD0iZzciIC8+PGcKICAgICBpZD0iZzkiIC8+PGcKICAgICBpZD0iZzExIiAvPjxnCiAgICAgaWQ9ImcxMyIgLz48ZwogICAgIGlkPSJnMTUiIC8+PGcKICAgICBpZD0iZzE3IiAvPjxnCiAgICAgaWQ9ImcxOSIgLz48ZwogICAgIGlkPSJnMjEiIC8+PGcKICAgICBpZD0iZzIzIiAvPjxnCiAgICAgaWQ9ImcyNSIgLz48ZwogICAgIGlkPSJnMjciIC8+PGcKICAgICBpZD0iZzI5IiAvPjxnCiAgICAgaWQ9ImczMSIgLz48ZwogICAgIGlkPSJnMzMiIC8+PGcKICAgICBpZD0iZzM1IiAvPjwvc3ZnPg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjYuNjMzOTQybW0iCiAgIGhlaWdodD0iMjYuNjIyNzY1bW0iCiAgIHZpZXdCb3g9IjAgMCAyNi42MzM5NDIgMjYuNjIyNzY1IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJwb3J0YWwuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDUwMDgiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNTAwNiIKICAgICAgICAgZD0iTSAwLDAgSCAzMTIuMDQzIFYgNzQuNDQ4MiBIIDAgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDUwMTYiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNTAxNCIKICAgICAgICAgZD0iTSAwLDc0LjQ0OCBIIDMxMi4wNDMgViAwIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTExMiIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MTEwIgogICAgICAgICBkPSJNIDAsMCBIIDMxMi4wNDMgViA3NC40NDgyIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTEyMCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MTE4IgogICAgICAgICBkPSJNIDAsNzQuNDQ4IEggMzEyLjA0MyBWIDAgSCAwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg1MzMyIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icGF0aDUzMzAiCiAgICAgICAgIGQ9Ik0gMCw3NC40NDggSCAzMTIuMDQzIFYgMCBIIDAgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjk3OTg5OSIKICAgICBpbmtzY2FwZTpjeD0iNTUuNTM1Njg4IgogICAgIGlua3NjYXBlOmN5PSItNTEuMDYwODE5IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNDExNjExLC04OS4yODgwNCkiPgogICAgPHJlY3QKICAgICAgIHJ5PSIwIgogICAgICAgeT0iOTYuMTU3Mzc5IgogICAgICAgeD0iNjEuMTYxNDcyIgogICAgICAgaGVpZ2h0PSI1Ljk5OTk5OTUiCiAgICAgICB3aWR0aD0iNS45OTk5OTk1IgogICAgICAgaWQ9InJlY3Q1NTA0IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDU7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU0MDg2MzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMCIKICAgICAgIHk9IjEwMy4wMjY3MyIKICAgICAgIHg9IjU0LjI5MjEyMiIKICAgICAgIGhlaWdodD0iNS45OTk5OTk1IgogICAgICAgd2lkdGg9IjUuOTk5OTk5NSIKICAgICAgIGlkPSJyZWN0NTUwNC0zIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDU7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU0MDg2MzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMCIKICAgICAgIHk9Ijg5LjI4ODA0IgogICAgICAgeD0iNjguMDMwODIzIgogICAgICAgaGVpZ2h0PSI1Ljk5OTk5OTUiCiAgICAgICB3aWR0aD0iNS45OTk5OTk1IgogICAgICAgaWQ9InJlY3Q1NTA0LTMtNSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU4ODIzNTMyO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NDA4NjMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIC8+CiAgICA8cmVjdAogICAgICAgcnk9IjAiCiAgICAgICB5PSIxMDkuODk2MDciCiAgICAgICB4PSI0Ny40MjI3NzkiCiAgICAgICBoZWlnaHQ9IjUuOTk5OTk5NSIKICAgICAgIHdpZHRoPSI1Ljk5OTk5OTUiCiAgICAgICBpZD0icmVjdDU1MDQtMy01LTkiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41ODgyMzUzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTQwODYzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNyIKICAgICAgIGQ9Im0gNjguMzg0OTY3LDEwMi4xMjA4OSBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgNS42MDkzNTQsLTUuNzIxOTI4IDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgLTAuMDA5OSwtMC4yMDUwODcgaCAtNS45MTcwNTMgdiA1LjkxMDcwNSBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgMC4zMTc2MzQsMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41ODgyMzUzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU2NjMiCiAgICAgICBkPSJtIDQ4LjI3MzAxMSwxMDEuMTk2NDggdiAtNy41ODIwNTMgYyAwLC0xLjkxNDE0NCAxLjQxOTUxMSwtMy40NTUxMzQgMy4xODI3NjEsLTMuNDU1MTM0IHYgMCBoIDE0Ljc2NzI3MSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojOTg5NDk0O3N0cm9rZS13aWR0aDoxLjcyMjc5OTY2O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJyZWN0NTYxNyIKICAgICAgIGQ9Im0gNzMuMjM3ODEzLDEwMi44MzA0MyA0ZS02LDkuMTU0OTggYyAwLDEuNzI3MTggLTEuMzgzMjYzLDMuMTE3NjYgLTMuMTAxNDg1LDMuMTE3NjYgSCA1NS44NDYwNzciCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6Izk4OTQ5NDtzdHJva2Utd2lkdGg6MS42MTU0NzExMjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNy00IgogICAgICAgZD0ibSA2MS41MTU2MTgsMTA4Ljk5MDIzIGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCA1LjYwOTM1NCwtNS43MjE5MiA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC0wLjAwOTksLTAuMjA1MDkgSCA2MS4xOTc5NyB2IDUuOTEwNzEgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIDAuMzE3NjM0LDAuMDE2MyB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDU7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODA4NjE1NTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NTUxLTctNC0zIgogICAgICAgZD0ibSA1OS45Mzc5NzUsOTYuMTkzODc0IGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtNS42MDkzNTQsNS43MjE5MjYgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAwLjAwOTksMC4yMDUwOSBoIDUuOTE3MDUzIHYgLTUuOTEwNzExIGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtMC4zMTc2MzQsLTAuMDE2MyB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODA4NjE1NTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NTUxLTctNC0zLTAiCiAgICAgICBkPSJtIDUzLjA2ODYzMywxMDMuMDYzMjIgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC01LjYwOTM1Myw1LjcyMTkzIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgMC4wMDk5LDAuMjA1MDggaCA1LjkxNzA1MyB2IC01LjkxMDcxIGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtMC4zMTc2MzQsLTAuMDE2MyB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTg4MjM1MzI7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODA4NjE1NTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1LjY3OHB4IiBoZWlnaHQ9IjQ1LjY3OHB4IiB2aWV3Qm94PSIwIDAgNDUuNjc4IDQ1LjY3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuNjc4IDQ1LjY3ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zOC45ODgsNi42ODljLTguOTE5LTguOTE4LTIzLjM4LTguOTE5LTMyLjMsMGMtOC45MTgsOC45MTktOC45MTcsMjMuMzgsMCwzMi4yOTljOC45Miw4LjkxOSwyMy4zODEsOC45MTksMzIuMywwDQoJCQlDNDcuOTA4LDMwLjA2OSw0Ny45MDYsMTUuNjA4LDM4Ljk4OCw2LjY4OXogTTIxLjg5MywzNi4wMTZjLTEuNzMsMC0yLjkwNi0xLjI3Mi0yLjkwNi0yLjk3MWMwLTEuNzMsMS4yMDktMi45NzIsMi45MDYtMi45NzINCgkJCWMxLjc2NCwwLDIuOTA2LDEuMjQxLDIuOTM4LDIuOTcyQzI0LjgzMSwzNC43NDIsMjMuNjU2LDM2LjAxNiwyMS44OTMsMzYuMDE2eiBNMjYuMjE1LDIxLjk4MWMtMS4zMiwxLjQ2Ni0xLjg1NiwyLjg2MS0xLjgyLDQuNDY4DQoJCQljMCwxLjE5My0wLjk2OSwyLjE2Mi0yLjE2MywyLjE2MkgyMS43N2MtMS4xODIsMC0yLjE0NS0wLjk0OS0yLjE2MS0yLjEzMWwtMC4wMDUtMC4zMTdjLTAuMTA3LTEuODIzLDAuNTAxLTMuNjgxLDIuMTA5LTUuNjExDQoJCQljMS4xNDUtMS4zNTksMi4wNzItMi41MDIsMi4wNzItMy43MThjMC0xLjI1LTAuODIyLTIuMDczLTIuNjA3LTIuMTQ2Yy0wLjU0OSwwLTEuMTUsMC4wOTMtMS43MzEsMC4yNTYNCgkJCWMtMS4wNTYsMC4yOTctMi4xNTYtMC4yOTgtMi40ODItMS4zNDVsLTAuMDA2LTAuMDJjLTAuMzI5LTEuMDU0LDAuMjQ3LTIuMTc1LDEuMjk0LTIuNTIzYzEuMTU3LTAuMzg1LDIuNTc0LTAuNjU3LDQuMTQtMC42NTcNCgkJCWM0LjcyLDAsNi44NjQsMi42MDksNi44NjQsNS41NzZDMjkuMjU2LDE4LjY5MiwyNy41NzUsMjAuNDc5LDI2LjIxNSwyMS45ODF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ3MS42MDhweCIKICAgaGVpZ2h0PSI0NzEuNjA4cHgiCiAgIHZpZXdCb3g9IjAgMCA0NzEuNjA4IDQ3MS42MDgiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS42MDggNDcxLjYwODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJyZWRvLnN2ZyI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzOSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyMjkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODE2IgogICAgIGlkPSJuYW1lZHZpZXczNyIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC41MDA0MTU2IgogICAgIGlua3NjYXBlOmN4PSIyMzUuODA0IgogICAgIGlua3NjYXBlOmN5PSIyMzUuODA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPjxnCiAgICAgaWQ9ImczIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDQ3My42MDYyMSwwKSI+PHBhdGgKICAgICAgIGQ9Im0gMzg0LjUzNTE5LDkxLjA2Nzc0NCBjIC04MS40NTk1NCwtODEuNDU2ODc5MSAtMjE0LjAwODA3LC04MS40NTY4NzkxIC0yOTUuNDY1ODI4LDAgLTgxLjQ1Nzc2NDEsODEuNDU2ODc2IC04MS40NTY4NzgxLDIxNC4wMTE2MDYgMCwyOTUuNDY1ODI2IDgxLjQ1Njg2OCw4MS40NTk1MyAyMTQuMDA1NDA4LDgxLjQ1OTUzIDI5NS40NjU4MjgsMCA4MS40NTk1MywtODEuNDUzMzQgODEuNDU5NTMsLTIxNC4wMDI3NSAwLC0yOTUuNDY1ODI2IHogTSAzNjguMzI4ODMsMzcwLjMzODcyIGMgLTcyLjUxODU5LDcyLjUxODU5IC0xOTAuNTM2Myw3Mi41MTg1OSAtMjYzLjA2NjM5LDAgLTcyLjUxNjgxNywtNzIuNTMwMDkgLTcyLjUxNjgxNywtMTkwLjU0MjUgMCwtMjYzLjA2NzI3IDcyLjUyOTIsLTcyLjUyNjU1OSAxOTAuNTM2MjksLTcyLjUyNjU1OSAyNjMuMDY2MzksMCA3Mi41MjU2Nyw3Mi41MjQ3NyA3Mi41MjU2NywxOTAuNTM3MTggMCwyNjMuMDY3MjcgeiBtIDEyLjQ0MzQ3LC0xOTguMTI3NiAtMTEuNjIwNzYsNTIuMzI5NzEgYyAtMC4zMTM1LDEuNDQ3MDYgLTEuNzQzNzMsMi4zNDY4MiAtMy4xODI4MiwyLjAzNTk4IC0wLjQ0MDE0LC0wLjA5MzkgLTEwLjk1MDM2LC0yLjM1ODM0IC0yNi4yOTg1OCwtMi4zNTgzNCAtMjUuODg5NDQsMCAtNzEuNjI0MTMsNi44NTE4NCAtMTAxLjgzMTcyLDQ5LjU1MzM4IGwgNi4yOTY1Niw2LjI5NjU3IDcwLjUwMzg2LDMwLjU1OTE3IGMgMi4zNjU0MiwxLjAzNzAzIDMuNzU3NTgsMy41MDY5NSAzLjM5MTgzLDYuMDY3MiAtMC4zNTA3LDIuNTQ5NjIgLTIuMzYxLDQuNTU0NjEgLTQuOTMwOTksNC44NzM0MiBsIC0xNzUuNjA1MTksMjIuOTU5MDEgYyAtMS43NTg3OSwwLjIzMDI1IC0zLjUzODgzLC0wLjM3NzI2IC00Ljc5NzI2LC0xLjYyNzcyIC0xLjI2NjQsLTEuMjYxOTcgLTEuODU1MzIsLTMuMDM2NyAtMS42MzU2OSwtNC44MDYxMiBsIDIyLjk1OSwtMTc1LjYwNzg1IGMgMC4xNjQ3MywtMS4yODUgMC43NTM2NCwtMi40MzYyNyAxLjYyMzMsLTMuMzA1MDMgMC44NTgxNCwtMC44NTkwMyAxLjk4OTA0LC0xLjQ0Nzk1IDMuMjYzNDEsLTEuNjMxMjcgMi41NDY5NywtMC4zNTc3OCA1LjAxNzc3LDEuMDM3MDMgNi4wNTM5MiwzLjM5NDQ4IGwgMzAuNTY3MTQsNzAuNTA2NTIgMC4xNTc2MywwLjE1NzYzIGMgNDcuMTQxOTEsLTU5LjQwMTE3IDExNS40MTU4NCwtNjYuNDg5NDYgMTQ1LjAyODMxLC02Ni40ODk0NiAxMy41NDY5MywwIDI2LjY5NjIyLDEuMzQ1MjIgMzguMDIzODQsMy44ODY4NyAxLjQ1MzI2LDAuMzMyMSAyLjM2MzY1LDEuNzYzMjIgMi4wMzQyMSwzLjIwNTg1IHoiCiAgICAgICBpZD0icGF0aDUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgIGlkPSJnNyIgLz48ZwogICAgIGlkPSJnOSIgLz48ZwogICAgIGlkPSJnMTEiIC8+PGcKICAgICBpZD0iZzEzIiAvPjxnCiAgICAgaWQ9ImcxNSIgLz48ZwogICAgIGlkPSJnMTciIC8+PGcKICAgICBpZD0iZzE5IiAvPjxnCiAgICAgaWQ9ImcyMSIgLz48ZwogICAgIGlkPSJnMjMiIC8+PGcKICAgICBpZD0iZzI1IiAvPjxnCiAgICAgaWQ9ImcyNyIgLz48ZwogICAgIGlkPSJnMjkiIC8+PGcKICAgICBpZD0iZzMxIiAvPjxnCiAgICAgaWQ9ImczMyIgLz48ZwogICAgIGlkPSJnMzUiIC8+PC9zdmc+"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5Mi42MiAzOTIuNjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM5Mi42MiAzOTIuNjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjE0NC44NjYiIHk9IjMyMC44OTciIHdpZHRoPSIyMy41MDUiIGhlaWdodD0iMjUiLz4NCgk8cGF0aCBkPSJNMzA5Ljc5NSwwSDI2Ni40OUgxMjYuMTMxSDgyLjgyNUMzNy42NjcsMCwwLjkyOSwzNi43MzgsMC45MjksODEuODk2djIyOC44MjhjMCw0NS4xNTgsMzYuNzM4LDgxLjg5Niw4MS44OTYsODEuODk2aDU4LjMyDQoJCWgxMTMuNDQzaDU1LjIwNmM0NS4xNTcsMCw4MS44OTYtMzYuNzM4LDgxLjg5Ni04MS44OTZWODEuODk2QzM5MS42OTEsMzYuNzM4LDM1NC45NTIsMCwzMDkuNzk1LDB6IE0yNjYuNDksMzANCgkJYzE0LjM1NCwwLDI2LjAzLDkuNTQyLDI2LjAzLDIxLjI3VjE3NC4zM2MwLDExLjcyOS0xMS42NzcsMjEuMjcxLTI2LjAzLDIxLjI3MUgxMjYuMTMxYy0xNC4zNTQsMC0yNi4wMzEtOS41NDItMjYuMDMxLTIxLjI3MQ0KCQlWNTEuMjdjMC0xMS43MjgsMTEuNjc4LTIxLjI3LDI2LjAzMS0yMS4yN0gyNjYuNDl6IE0xNDEuMTQ2LDM2Mi42MmMtNi4yNTksMC0xMS4zNTItNS4wOTItMTEuMzUyLTExLjM1MXYtMzAuMDY2DQoJCWMwLTYuMjU5LDUuMDkzLTExLjM1MSwxMS4zNTItMTEuMzUxaDExMy40NDNjNi4yNTksMCwxMS4zNTEsNS4wOTIsMTEuMzUxLDExLjM1MXYzMC4wNjZjMCw2LjI1OS01LjA5MiwxMS4zNTEtMTEuMzUxLDExLjM1MQ0KCQlIMTQxLjE0NnogTTM2MS42OTEsMzEwLjcyNGMwLDI4LjYxNi0yMy4yOCw1MS44OTYtNTEuODk2LDUxLjg5NmgtMTUuNDUyYzEuMDMyLTMuNjEsMS41OTctNy40MTQsMS41OTctMTEuMzUxdi0zMC4wNjYNCgkJYzAtMjIuODAxLTE4LjU1LTQxLjM1MS00MS4zNTEtNDEuMzUxSDE0MS4xNDZjLTIyLjgwMiwwLTQxLjM1MiwxOC41NS00MS4zNTIsNDEuMzUxdjMwLjA2NmMwLDMuOTM3LDAuNTY1LDcuNzQyLDEuNTk3LDExLjM1MQ0KCQlIODIuODI1Yy0yOC42MTYsMC01MS44OTYtMjMuMjgtNTEuODk2LTUxLjg5NlY4MS44OTZjMC0yNS45MSwxOS4wODctNDcuNDQ0LDQzLjkzOC01MS4yODVDNzEuODExLDM2LjkzNSw3MC4xLDQzLjkyMSw3MC4xLDUxLjI3DQoJCVYxNzQuMzNjMCwyOC4yNzEsMjUuMTM2LDUxLjI3MSw1Ni4wMzEsNTEuMjcxSDI2Ni40OWMzMC44OTYsMCw1Ni4wMy0yMyw1Ni4wMy01MS4yNzFWNTEuMjdjMC03LjM0OC0xLjcxMS0xNC4zMzQtNC43NjctMjAuNjU5DQoJCWMyNC44NTEsMy44NDEsNDMuOTM4LDI1LjM3NSw0My45MzgsNTEuMjg1VjMxMC43MjR6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjYuNjMzOTQybW0iCiAgIGhlaWdodD0iMjYuNjIyNzY1bW0iCiAgIHZpZXdCb3g9IjAgMCAyNi42MzM5NDIgMjYuNjIyNzY1IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJzZXR0aW5ncy5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIj4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTAwOCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MDA2IgogICAgICAgICBkPSJNIDAsMCBIIDMxMi4wNDMgViA3NC40NDgyIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTAxNiIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MDE0IgogICAgICAgICBkPSJNIDAsNzQuNDQ4IEggMzEyLjA0MyBWIDAgSCAwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg1MTEyIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icGF0aDUxMTAiCiAgICAgICAgIGQ9Ik0gMCwwIEggMzEyLjA0MyBWIDc0LjQ0ODIgSCAwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg1MTIwIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icGF0aDUxMTgiCiAgICAgICAgIGQ9Ik0gMCw3NC40NDggSCAzMTIuMDQzIFYgMCBIIDAgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDUzMzIiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNTMzMCIKICAgICAgICAgZD0iTSAwLDc0LjQ0OCBIIDMxMi4wNDMgViAwIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuOTc5ODk5IgogICAgIGlua3NjYXBlOmN4PSI1NS41MzU2ODgiCiAgICAgaW5rc2NhcGU6Y3k9Ii01MS4wNjA4MTkiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny40MTE2MTEsLTg5LjI4ODA0KSI+CiAgICA8cmVjdAogICAgICAgcnk9IjAiCiAgICAgICB5PSI5Ni4xNTczNzkiCiAgICAgICB4PSI2MS4xNjE0NzIiCiAgICAgICBoZWlnaHQ9IjUuOTk5OTk5NSIKICAgICAgIHdpZHRoPSI1Ljk5OTk5OTUiCiAgICAgICBpZD0icmVjdDU1MDQiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTQwODYzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwIgogICAgICAgeT0iMTAzLjAyNjczIgogICAgICAgeD0iNTQuMjkyMTIyIgogICAgICAgaGVpZ2h0PSI1Ljk5OTk5OTUiCiAgICAgICB3aWR0aD0iNS45OTk5OTk1IgogICAgICAgaWQ9InJlY3Q1NTA0LTMiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTQwODYzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwIgogICAgICAgeT0iODkuMjg4MDQiCiAgICAgICB4PSI2OC4wMzA4MjMiCiAgICAgICBoZWlnaHQ9IjUuOTk5OTk5NSIKICAgICAgIHdpZHRoPSI1Ljk5OTk5OTUiCiAgICAgICBpZD0icmVjdDU1MDQtMy01IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTg4MjM1MzI7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU0MDg2MzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMCIKICAgICAgIHk9IjEwOS44OTYwNyIKICAgICAgIHg9IjQ3LjQyMjc3OSIKICAgICAgIGhlaWdodD0iNS45OTk5OTk1IgogICAgICAgd2lkdGg9IjUuOTk5OTk5NSIKICAgICAgIGlkPSJyZWN0NTUwNC0zLTUtOSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU4ODIzNTMyO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NDA4NjMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTU1MS03IgogICAgICAgZD0ibSA2OC4zODQ5NjcsMTAyLjEyMDg5IGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCA1LjYwOTM1NCwtNS43MjE5MjggNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtMC4wMDk5LC0wLjIwNTA4NyBoIC01LjkxNzA1MyB2IDUuOTEwNzA1IGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAwLjMxNzYzNCwwLjAxNjMgeiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU4ODIzNTMyO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjgwODYxNTU3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTY2MyIKICAgICAgIGQ9Im0gNDguMjczMDExLDEwMS4xOTY0OCB2IC03LjU4MjA1MyBjIDAsLTEuOTE0MTQ0IDEuNDE5NTExLC0zLjQ1NTEzNCAzLjE4Mjc2MSwtMy40NTUxMzQgdiAwIGggMTQuNzY3MjcxIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM5ODk0OTQ7c3Ryb2tlLXdpZHRoOjEuNzIyNzk5NjY7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InJlY3Q1NjE3IgogICAgICAgZD0ibSA3My4yMzc4MTMsMTAyLjgzMDQzIDRlLTYsOS4xNTQ5OCBjIDAsMS43MjcxOCAtMS4zODMyNjMsMy4xMTc2NiAtMy4xMDE0ODUsMy4xMTc2NiBIIDU1Ljg0NjA3NyIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojOTg5NDk0O3N0cm9rZS13aWR0aDoxLjYxNTQ3MTEyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTU1MS03LTQiCiAgICAgICBkPSJtIDYxLjUxNTYxOCwxMDguOTkwMjMgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIDUuNjA5MzU0LC01LjcyMTkyIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgLTAuMDA5OSwtMC4yMDUwOSBIIDYxLjE5Nzk3IHYgNS45MTA3MSBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgMC4zMTc2MzQsMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNy00LTMiCiAgICAgICBkPSJtIDU5LjkzNzk3NSw5Ni4xOTM4NzQgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC01LjYwOTM1NCw1LjcyMTkyNiA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIDAuMDA5OSwwLjIwNTA5IGggNS45MTcwNTMgdiAtNS45MTA3MTEgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC0wLjMxNzYzNCwtMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNy00LTMtMCIKICAgICAgIGQ9Im0gNTMuMDY4NjMzLDEwMy4wNjMyMiBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgLTUuNjA5MzUzLDUuNzIxOTMgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAwLjAwOTksMC4yMDUwOCBoIDUuOTE3MDUzIHYgLTUuOTEwNzEgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC0wLjMxNzYzNCwtMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41ODgyMzUzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjkzMzQyMzksMCwwLDAuMjkzMzQyMzksNjAuNTUxODAzLDEwMi40MTcwNSkiCiAgICAgICBpZD0iZzU0ODYiPgogICAgICA8ZwogICAgICAgICBpZD0iZzMiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBkPSJtIDQxLjUzNCwyOC42NiBoIDEuOTU3IEMgNDQuODc3LDI4LjY2IDQ2LDI3LjUzNiA0NiwyNi4xNSB2IC02LjMgYyAwLC0xLjM4NSAtMS4xMjQsLTIuNTA5IC0yLjUwOSwtMi41MDkgSCA0MS41NCB2IDAuMDA2IEMgNDEuMTQ4LDE2LjE0IDQwLjY4NywxNC45ODMgNDAuMTAzLDEzLjg4OSBsIDEuMzgxLC0xLjM4MSBjIDAuOTc5LC0wLjk4IDAuOTc5LC0yLjU2OSAwLC0zLjU0OSBMIDM3LjA0LDQuNTE3IGMgLTAuOTc5LC0wLjk3OSAtMi41NjcsLTAuOTc5IC0zLjU0NywwIGwgLTEuMzgyLDEuMzggQyAzMS4wMTcsNS4zMTMgMjkuODYxLDQuODUyIDI4LjY1NCw0LjQ2MSBIIDI4LjY2IFYgMi41MSBDIDI4LjY2LDEuMTI0IDI3LjUzNywwIDI2LjE1LDAgaCAtNi4zIGMgLTEuMzg2LDAgLTIuNTA5LDEuMTI0IC0yLjUwOSwyLjUxIHYgMS45NTUgbCAwLjAxNCwtMTBlLTQgYyAtMS4yMDcsMC4zNjcgLTIuMzYzLDAuODUgLTMuNDU4LDEuNDM1IEwgMTIuNTE2LDQuNTE4IGMgLTAuOTgsLTAuOTc5IC0yLjU2OCwtMC45NzkgLTMuNTQ4LDAgTCA0LjUyNSw4Ljk2MSBDIDMuNTQ2LDkuOTQgMy41NDUsMTEuNTI3IDQuNTIzLDEyLjUwNyBMIDUuOSwxMy44ODkgQyA1LjMxNiwxNC45ODMgNC44NTEsMTYuMTQgNC40NiwxNy4zNDYgViAxNy4zNDEgSCAyLjUwOSBDIDEuMTI0LDE3LjM0MSAwLDE4LjQ2NSAwLDE5Ljg1IHYgNi4zMDEgYyAwLDEuMzg3IDEuMTI0LDIuNTExIDIuNTA5LDIuNTExIEggNC40NzMgTCA0LjQ2NywyOC42NDcgYyAwLjM2NywxLjIwNyAwLjg1MywyLjM2MiAxLjQzNiwzLjQ1NyBsIC0xLjM4LDEuMzgxIGMgLTAuOTgsMC45NzkgLTAuOTc5LDIuNTY3IDAsMy41NDcgbCA0LjQ0Myw0LjQ0MiBjIDAuOTc5LDAuOTc5IDIuNTY4LDAuOTc5IDMuNTQ4LDAgbCAxLjM4MSwtMS4zODEgYyAxLjA5NCwwLjU4NCAyLjI1MSwxLjA3MiAzLjQ1OCwxLjQzOCBsIC0wLjAxNCwtMC4wMDYgdiAxLjk2NSBjIDAsMS4zODcgMS4xMjMsMi41MSAyLjUwOSwyLjUxIGggNi4zIGMgMS4zODcsMCAyLjUxLC0xLjEyMyAyLjUxLC0yLjUxIHYgLTEuOTUgaCAtMC4wMDYgYyAxLjIwNywtMC4zOTIgMi4zNjMsLTAuODU2IDMuNDU3LC0xLjQ0IGwgMS4zODEsMS4zNzkgYyAwLjk4LDAuOTc5IDIuNTY4LDAuOTc5IDMuNTQ3LDAgbCA0LjQ0MywtNC40NDUgYyAwLjk3OSwtMC45NzkgMC45NzksLTIuNTY2IDAsLTMuNTQ3IGwgLTEuMzgzLC0xLjM4MyBjIDAuNTg0LC0xLjA5NCAxLjA2OCwtMi4yNSAxLjQzNiwtMy40NTcgeiBNIDIzLjAyMSwzNi43MTQgQyAxNS40NDQsMzYuNzIzIDkuMjc4LDMwLjU1NyA5LjI4NywyMi45OCA5LjI5NiwxNS40NDEgMTUuNDUsOS4yODcgMjIuOTg5LDkuMjc4IGMgNy41NzgsLTAuMDA5IDEzLjc0NCw2LjE1NyAxMy43MzQsMTMuNzM0IC0wLjAxLDcuNTM5IC02LjE2MiwxMy42OTMgLTEzLjcwMiwxMy43MDIgeiIKICAgICAgICAgICBpZD0icGF0aDUiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9Imc3IiAvPgogICAgICA8ZwogICAgICAgICBpZD0iZzkiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTEiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTMiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTUiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTciIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTkiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjEiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjMiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjUiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjciIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjkiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzEiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzMiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzUiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzMuMDU4cHgiIGhlaWdodD0iNzMuMDU4cHgiIHZpZXdCb3g9IjAgMCA3My4wNTggNzMuMDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3My4wNTggNzMuMDU4OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iRXllIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTcyLjg5MywzNS45NjVjLTAuNTgtMC45MjUtMTQuNDMyLTIyLjU0MS0zNS4xNi0yMi41NDFoLTIuNDA2Yy0yMC43MjksMC0zNC41OCwyMS42MTYtMzUuMTU5LDIyLjU0MQoJCQkJYy0wLjIyMywwLjM0Ny0wLjIyMywwLjc5LDAsMS4xMzdjMC41NzksMC45MTcsMTQuNDMyLDIyLjUzMiwzNS4xNTksMjIuNTMyaDIuNDA2YzIwLjcyOSwwLDM0LjU4LTIxLjYxNSwzNS4xNTktMjIuNTMyCgkJCQlDNzMuMTEzLDM2Ljc1NSw3My4xMTMsMzYuMzEyLDcyLjg5MywzNS45NjV6IE00NS4yNjcsMzYuNTI5YzAsNC42OS0zLjkyLDguNTA2LTguNzM2LDguNTA2Yy00LjgxNywwLTguNzM1LTMuODEyLTguNzM1LTguNTA2CgkJCQljMC00LjY4NywzLjkxOC04LjUwOCw4LjczNS04LjUwOEM0MS4zNDcsMjguMDIyLDQ1LjI2NywzMS44NDQsNDUuMjY3LDM2LjUyOXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ3MS42MDhweCIKICAgaGVpZ2h0PSI0NzEuNjA4cHgiCiAgIHZpZXdCb3g9IjAgMCA0NzEuNjA4IDQ3MS42MDgiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS42MDggNDcxLjYwODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJ1bmRvLnN2ZyI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzOSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyMjkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODE2IgogICAgIGlkPSJuYW1lZHZpZXczNyIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC41MDA0MTU2IgogICAgIGlua3NjYXBlOmN4PSIyMzUuODA0IgogICAgIGlua3NjYXBlOmN5PSIyMzUuODA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPjxnCiAgICAgaWQ9ImczIj48cGF0aAogICAgICAgZD0ibSAzODQuNTM1MTksOTEuMDY3NzQ0IGMgLTgxLjQ1OTU0LC04MS40NTY4NzkxIC0yMTQuMDA4MDcsLTgxLjQ1Njg3OTEgLTI5NS40NjU4MjgsMCAtODEuNDU3NzY0MSw4MS40NTY4NzYgLTgxLjQ1Njg3ODEsMjE0LjAxMTYwNiAwLDI5NS40NjU4MjYgODEuNDU2ODY4LDgxLjQ1OTUzIDIxNC4wMDU0MDgsODEuNDU5NTMgMjk1LjQ2NTgyOCwwIDgxLjQ1OTUzLC04MS40NTMzNCA4MS40NTk1MywtMjE0LjAwMjc1IDAsLTI5NS40NjU4MjYgeiBNIDM2OC4zMjg4MywzNzAuMzM4NzIgYyAtNzIuNTE4NTksNzIuNTE4NTkgLTE5MC41MzYzLDcyLjUxODU5IC0yNjMuMDY2MzksMCAtNzIuNTE2ODE3LC03Mi41MzAwOSAtNzIuNTE2ODE3LC0xOTAuNTQyNSAwLC0yNjMuMDY3MjcgNzIuNTI5MiwtNzIuNTI2NTU5IDE5MC41MzYyOSwtNzIuNTI2NTU5IDI2My4wNjYzOSwwIDcyLjUyNTY3LDcyLjUyNDc3IDcyLjUyNTY3LDE5MC41MzcxOCAwLDI2My4wNjcyNyB6IG0gMTIuNDQzNDcsLTE5OC4xMjc2IC0xMS42MjA3Niw1Mi4zMjk3MSBjIC0wLjMxMzUsMS40NDcwNiAtMS43NDM3MywyLjM0NjgyIC0zLjE4MjgyLDIuMDM1OTggLTAuNDQwMTQsLTAuMDkzOSAtMTAuOTUwMzYsLTIuMzU4MzQgLTI2LjI5ODU4LC0yLjM1ODM0IC0yNS44ODk0NCwwIC03MS42MjQxMyw2Ljg1MTg0IC0xMDEuODMxNzIsNDkuNTUzMzggbCA2LjI5NjU2LDYuMjk2NTcgNzAuNTAzODYsMzAuNTU5MTcgYyAyLjM2NTQyLDEuMDM3MDMgMy43NTc1OCwzLjUwNjk1IDMuMzkxODMsNi4wNjcyIC0wLjM1MDcsMi41NDk2MiAtMi4zNjEsNC41NTQ2MSAtNC45MzA5OSw0Ljg3MzQyIGwgLTE3NS42MDUxOSwyMi45NTkwMSBjIC0xLjc1ODc5LDAuMjMwMjUgLTMuNTM4ODMsLTAuMzc3MjYgLTQuNzk3MjYsLTEuNjI3NzIgLTEuMjY2NCwtMS4yNjE5NyAtMS44NTUzMiwtMy4wMzY3IC0xLjYzNTY5LC00LjgwNjEyIGwgMjIuOTU5LC0xNzUuNjA3ODUgYyAwLjE2NDczLC0xLjI4NSAwLjc1MzY0LC0yLjQzNjI3IDEuNjIzMywtMy4zMDUwMyAwLjg1ODE0LC0wLjg1OTAzIDEuOTg5MDQsLTEuNDQ3OTUgMy4yNjM0MSwtMS42MzEyNyAyLjU0Njk3LC0wLjM1Nzc4IDUuMDE3NzcsMS4wMzcwMyA2LjA1MzkyLDMuMzk0NDggbCAzMC41NjcxNCw3MC41MDY1MiAwLjE1NzYzLDAuMTU3NjMgYyA0Ny4xNDE5MSwtNTkuNDAxMTcgMTE1LjQxNTg0LC02Ni40ODk0NiAxNDUuMDI4MzEsLTY2LjQ4OTQ2IDEzLjU0NjkzLDAgMjYuNjk2MjIsMS4zNDUyMiAzOC4wMjM4NCwzLjg4Njg3IDEuNDUzMjYsMC4zMzIxIDIuMzYzNjUsMS43NjMyMiAyLjAzNDIxLDMuMjA1ODUgeiIKICAgICAgIGlkPSJwYXRoNSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9nPjxnCiAgICAgaWQ9Imc3IiAvPjxnCiAgICAgaWQ9Imc5IiAvPjxnCiAgICAgaWQ9ImcxMSIgLz48ZwogICAgIGlkPSJnMTMiIC8+PGcKICAgICBpZD0iZzE1IiAvPjxnCiAgICAgaWQ9ImcxNyIgLz48ZwogICAgIGlkPSJnMTkiIC8+PGcKICAgICBpZD0iZzIxIiAvPjxnCiAgICAgaWQ9ImcyMyIgLz48ZwogICAgIGlkPSJnMjUiIC8+PGcKICAgICBpZD0iZzI3IiAvPjxnCiAgICAgaWQ9ImcyOSIgLz48ZwogICAgIGlkPSJnMzEiIC8+PGcKICAgICBpZD0iZzMzIiAvPjxnCiAgICAgaWQ9ImczNSIgLz48L3N2Zz4="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ3Ljg4NzMxIgogICB2aWV3Qm94PSIwIDAgMTYzLjEyNSA0NC44OTQzNTQiCiAgIGlkPSJzdmc0Mzk5IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhcnRtZW50LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iNTcuNTQ1NjA4IgogICAgIGlua3NjYXBlOmN5PSI5NS4yMzMzOTkiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIHVuaXRzPSJweCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDA0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc0LjQ1MDM1LC0zMTYuMDU0MzYpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo2LjgyOTY5OTA0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0Mjk4NSIKICAgICAgIHdpZHRoPSIxNTYuMjk1MyIKICAgICAgIGhlaWdodD0iMzguMDY0NjU1IgogICAgICAgeD0iMjc3Ljg2NTIiCiAgICAgICB5PSIzMTkuNDY5MjEiCiAgICAgICByeT0iOS44MjMxMjExIgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjUzLjk1OTk5OSIKICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI1My45NTk5OTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXHVndXJcR29vZ2xlIERyaXZlXHRvb2xiYXJcbWFjcm9tb2xlY3VsZS5wbmciIC8+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI4LjEyNXB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzMDMuODM1MTEiCiAgICAgICB5PSIzNDIuNTQ0NDkiCiAgICAgICBpZD0idGV4dDgxOCI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjgxNiIKICAgICAgICAgeD0iMzAzLjgzNTExIgogICAgICAgICB5PSIzNDIuNTQ0NDkiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTVweDtzdHJva2Utd2lkdGg6MC45Mzc1cHgiPkNvbXBhcnRtZW50PC90c3Bhbj48L3RleHQ+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ0LjQ0MjgyMiIKICAgdmlld0JveD0iMCAwIDE2My4xMjUgNDEuNjY1MTQ2IgogICBpZD0ic3ZnNDM5OSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJjb21wbGV4LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iNTUuODIzMzUzIgogICAgIGlua3NjYXBlOmN5PSI5My41MTExNjYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIHVuaXRzPSJweCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDA0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2LjA2NDk3LC0zMTcuNjY4OTcpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjIzMTI2OTg0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0Mjk4NSIKICAgICAgIHdpZHRoPSIxNTkuODkzNzQiCiAgICAgICBoZWlnaHQ9IjM4LjQzMzg3NiIKICAgICAgIHg9IjI3Ny42ODA2IgogICAgICAgeT0iMzE5LjI4NDYxIgogICAgICAgcnk9IjAiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteGRwaT0iNTMuOTU5OTk5IgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjUzLjk1OTk5OSIKICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcdWd1clxHb29nbGUgRHJpdmVcdG9vbGJhclxtYWNyb21vbGVjdWxlLnBuZyIgLz4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjguMTI1cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45Mzc1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHg9IjMyNC43MTYwOSIKICAgICAgIHk9IjM0Mi42OTEwMSIKICAgICAgIGlkPSJ0ZXh0ODE4Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuODE2IgogICAgICAgICB4PSIzMjQuNzE2MDkiCiAgICAgICAgIHk9IjM0Mi42OTEwMSIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxNXB4O3N0cm9rZS13aWR0aDowLjkzNzVweCI+Q29tcGxleDwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTczLjk5OTM3IgogICBoZWlnaHQ9IjQ1LjA4MjAwMSIKICAgdmlld0JveD0iMCAwIDE2My4xMjQ0MiA0Mi4yNjQzNzYiCiAgIGlkPSJzdmc0Mzk5IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImZhbWlseS5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0NDAxIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjQiCiAgICAgaW5rc2NhcGU6Y3g9IjE3MS44OTQ3NyIKICAgICBpbmtzY2FwZTpjeT0iOTMuNTExMTkyIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0icHgiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDQwNCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ni4wNjQ5OCwtMzE3LjA2OTc3KSI+CiAgICA8cmVjdAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzkzOTM5MztzdHJva2Utd2lkdGg6My4yNTUxMTgzNztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icmVjdDI5ODUiCiAgICAgICB3aWR0aD0iMTU5Ljg2OTI5IgogICAgICAgaGVpZ2h0PSIzOS4wMDkyNTgiCiAgICAgICB4PSIyNzcuNjkyNTQiCiAgICAgICB5PSIzMTguNjk3MzMiCiAgICAgICByeT0iMCIKICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI1My45NTk5OTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iNTMuOTU5OTk5IgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1x1Z3VyXEdvb2dsZSBEcml2ZVx0b29sYmFyXG1hY3JvbW9sZWN1bGUucG5nIiAvPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyOC4xMjVweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjkzNzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzMyLjg2MDMyIgogICAgICAgeT0iMzQyLjM5MTQyIgogICAgICAgaWQ9InRleHQ4MTgiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW44MTYiCiAgICAgICAgIHg9IjMzMi44NjAzMiIKICAgICAgICAgeT0iMzQyLjM5MTQyIgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjE1cHg7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4Ij5GYW1pbHk8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ0LjQ0MjgyMiIKICAgdmlld0JveD0iMCAwIDE2My4xMjUgNDEuNjY1MTQ2IgogICBpZD0ic3ZnNDM5OSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJnZW5lLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iNTUuODIzMzUzIgogICAgIGlua3NjYXBlOmN5PSI5My41MTExNjYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIHVuaXRzPSJweCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDA0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2LjA2NDk3LC0zMTcuNjY4OTcpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjIzMTI2OTg0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0Mjk4NSIKICAgICAgIHdpZHRoPSIxNTkuODkzNzQiCiAgICAgICBoZWlnaHQ9IjM4LjQzMzg3NiIKICAgICAgIHg9IjI3Ny42ODA2IgogICAgICAgeT0iMzE5LjI4NDYxIgogICAgICAgcnk9IjkuOTE4NDAzNiIKICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI1My45NTk5OTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iNTMuOTU5OTk5IgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1x1Z3VyXEdvb2dsZSBEcml2ZVx0b29sYmFyXG1hY3JvbW9sZWN1bGUucG5nIiAvPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyOC4xMjVweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjkzNzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzM4LjA3NTQ3IgogICAgICAgeT0iMzQzLjk0NzExIgogICAgICAgaWQ9InRleHQ4MTgiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW44MTYiCiAgICAgICAgIHg9IjMzOC4wNzU0NyIKICAgICAgICAgeT0iMzQzLjk0NzExIgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjE1cHg7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4Ij5HZW5lPC90c3Bhbj48L3RleHQ+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ0LjQ0MjgyMiIKICAgdmlld0JveD0iMCAwIDE2My4xMjUgNDEuNjY1MTQ2IgogICBpZD0ic3ZnNDM5OSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJwcm9jZXNzLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iLTYwLjI0ODA3NiIKICAgICBpbmtzY2FwZTpjeT0iOTMuNTExMTY2IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0icHgiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDQwNCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ni4wNjQ5NywtMzE3LjY2ODk3KSI+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI4LjEyNXB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzMjguNzE1MTIiCiAgICAgICB5PSIzNDMuODQwOTEiCiAgICAgICBpZD0idGV4dDgxOCI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjgxNiIKICAgICAgICAgeD0iMzI4LjcxNTEyIgogICAgICAgICB5PSIzNDMuODQwOTEiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTVweDtzdHJva2Utd2lkdGg6MC45Mzc1cHgiPlByb2Nlc3M8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0gIjQ0IiBoZWlnaHQ9ICI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDQgNDQiPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjIyIiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0ibTIyLDBjLTEyLjIsMC0yMiw5LjgtMjIsMjJzOS44LDIyIDIyLDIyIDIyLTkuOCAyMi0yMi05LjgtMjItMjItMjJ6bS0xLjMsMTkuM2wtMS40LDEuNGMtMC40LDAuNC0xLDAuNC0xLjQsMGwtNC00Yy0wLjMtMC4zLTAuOS0wLjEtMC45LDAuNHYxYzAsMC42LTAuNCwxLTEsMWgtMmMtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42IDAuNC0xIDEtMWg4YzAuNiwwIDEsMC40IDEsMXYyYzAsMC42LTAuNCwxLTEsMWgtMWMtMC40LDAtMC43LDAuNS0wLjQsMC45bDQsNGMwLjUsMC4zIDAuNSwwLjkgMC4xLDEuM3ptMTQuMywxNC43YzAsMC42LTAuNCwxLTEsMWgtOGMtMC42LDAtMS0wLjQtMS0xdi0yYzAtMC42IDAuNC0xIDEtMWgxYzAuNCwwIDAuNy0wLjUgMC40LTAuOWwtNC00Yy0wLjQtMC40LTAuNC0xIDAtMS40bDEuNC0xLjRjMC40LTAuNCAxLTAuNCAxLjQsMGw0LDRjMC4zLDAuMyAwLjksMC4xIDAuOS0wLjR2LTFjMC0wLjYgMC40LTEgMS0xaDJjMC42LDAgMSwwLjQgMSwxdjguMWgtMC4xeiIvPgo8L3N2Zz4K"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJhY3RpdmF0ZXMuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXHVndXJcRGVza3RvcFxpbnRlcmFjdGlvbi1sZWdlbmQuMjAxNi4wNC4wMS5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIzMDAiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIzMDAiCiAgIHZpZXdCb3g9IjAgMCA2MC45Mzc1MDEgMTguNTUwNTE2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJtYXJrZXIxMjAyIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMjAwIgogICAgICAgICBkPSJNIDUuNzcsMCAtMi44OCw1IFYgLTUgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44KSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlcgogICAgICAgaW5rc2NhcGU6c3RvY2tpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMCIKICAgICAgIHJlZlg9IjAiCiAgICAgICBpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg5NTkiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiCiAgICAgaW5rc2NhcGU6Y3g9Ii00LjgxMTAzNTciCiAgICAgaW5rc2NhcGU6Y3k9IjE4LjQ2ODYyMSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NS42NDI0NywtMjgxLjI5NjQ5KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6My43NDk5OTk5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI3NS42NDI0NywyOTAuNTcxNzUgaCA0Ny4zNTA4OSIKICAgICAgIGlkPSJwYXRoNDk0OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOnR5cGU9InN0YXIiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6My43NTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InBhdGg0OTUzIgogICAgICAgc29kaXBvZGk6c2lkZXM9IjMiCiAgICAgICBzb2RpcG9kaTpjeD0iMjEyLjQyOTAyIgogICAgICAgc29kaXBvZGk6Y3k9IjI1My43OTgyNiIKICAgICAgIHNvZGlwb2RpOnIxPSIxMS4wNTczNDciCiAgICAgICBzb2RpcG9kaTpyMj0iNS41Mjg2NzM2IgogICAgICAgc29kaXBvZGk6YXJnMT0iMC45MTQ0NDc5NiIKICAgICAgIHNvZGlwb2RpOmFyZzI9IjEuOTYxNjQ1NSIKICAgICAgIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIKICAgICAgIGlua3NjYXBlOnJvdW5kZWQ9IjAiCiAgICAgICBpbmtzY2FwZTpyYW5kb21pemVkPSIwIgogICAgICAgZD0ibSAyMTkuMTc2NTIsMjYyLjU1ODE4IC0xNy43MDc1NywtNy4yOTYzNyAxNS4xNzI2MiwtMTEuNjg3MDEgeiIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTIuNjk0NjIxOSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMC4wNzg0ODk2NTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM5NDM0MDk4LDAuODk5Nzc1MDQsLTAuOTE4OTY0MTksMC4zODYxMDY2Myw0NzQuOTg1ODMsMS4zNjE3MzI5KSIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJiaW5kcy5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcdWd1clxEZXNrdG9wXGludGVyYWN0aW9uLWxlZ2VuZC4yMDE2LjA0LjAxLnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjMwMCIKICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjMwMCIKICAgdmlld0JveD0iMCAwIDYwLjkzNzUwMSAxOC41NTA1MTYiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAiCiAgICAgICByZWZYPSIwIgogICAgICAgaWQ9Im1hcmtlcjEyMDIiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDEyMDAiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJUcmlhbmdsZU91dEwiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDk1OSIKICAgICAgICAgZD0iTSA1Ljc3LDAgLTIuODgsNSBWIC01IFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L21hcmtlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIKICAgICBpbmtzY2FwZTpjeD0iLTQuODExMDM1NyIKICAgICBpbmtzY2FwZTpjeT0iMTguNDY4NjIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc1LjY0MjQ3LC0yODEuMjk2NDkpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjc1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMjc1LjY0MjQ3LDI5MC41NzE3NSBoIDYwLjkzNzUiCiAgICAgICBpZD0icGF0aDQ5NDkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpbmR1Y2VzLnN2ZyIKICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1x1Z3VyXERlc2t0b3BcaW50ZXJhY3Rpb24tbGVnZW5kLjIwMTYuMDQuMDEucG5nIgogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMzAwIgogICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMzAwIgogICB2aWV3Qm94PSIwIDAgNjAuOTM3NTAxIDE4LjU1MDUxNiI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiPgogICAgPG1hcmtlcgogICAgICAgaW5rc2NhcGU6c3RvY2tpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMCIKICAgICAgIHJlZlg9IjAiCiAgICAgICBpZD0ibWFya2VyMTIwMiIKICAgICAgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIgogICAgICAgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTIwMCIKICAgICAgICAgZD0iTSA1Ljc3LDAgLTIuODgsNSBWIC01IFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAiCiAgICAgICByZWZYPSIwIgogICAgICAgaWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIgogICAgICAgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoOTU5IgogICAgICAgICBkPSJNIDUuNzcsMCAtMi44OCw1IFYgLTUgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44KSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvbWFya2VyPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IgogICAgIGlua3NjYXBlOmN4PSItNC44MTEwMzU3IgogICAgIGlua3NjYXBlOmN5PSIxOC40Njg2MjEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzUuNjQyNDcsLTI4MS4yOTY0OSkiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjMuNzQ5OTk5OTM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjcuNDk5OTk5ODcsNy40OTk5OTk4NztzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgICAgICBkPSJtIDI3NS42NDI0NywyOTAuNTcxNzUgaCA0Ny4zNTA4OSIKICAgICAgIGlkPSJwYXRoNDk0OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOnR5cGU9InN0YXIiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6My43NTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InBhdGg0OTUzIgogICAgICAgc29kaXBvZGk6c2lkZXM9IjMiCiAgICAgICBzb2RpcG9kaTpjeD0iMjEyLjQyOTAyIgogICAgICAgc29kaXBvZGk6Y3k9IjI1My43OTgyNiIKICAgICAgIHNvZGlwb2RpOnIxPSIxMS4wNTczNDciCiAgICAgICBzb2RpcG9kaTpyMj0iNS41Mjg2NzM2IgogICAgICAgc29kaXBvZGk6YXJnMT0iMC45MTQ0NDc5NiIKICAgICAgIHNvZGlwb2RpOmFyZzI9IjEuOTYxNjQ1NSIKICAgICAgIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIKICAgICAgIGlua3NjYXBlOnJvdW5kZWQ9IjAiCiAgICAgICBpbmtzY2FwZTpyYW5kb21pemVkPSIwIgogICAgICAgZD0ibSAyMTkuMTc2NTIsMjYyLjU1ODE4IC0xNy43MDc1NywtNy4yOTYzNyAxNS4xNzI2MiwtMTEuNjg3MDEgeiIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTIuNjk0NjIxOSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMC4wNzg0ODk2NTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM5NDM0MDk4LDAuODk5Nzc1MDQsLTAuOTE4OTY0MTksMC4zODYxMDY2Myw0NzQuOTg1ODMsMS4zNjE3MzI5KSIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpbmhpYml0cy5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcdWd1clxEZXNrdG9wXGludGVyYWN0aW9uLWxlZ2VuZC4yMDE2LjA0LjAxLnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjMwMCIKICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjMwMCIKICAgdmlld0JveD0iMCAwIDYwLjkzNzUwMSAxOC41NTA1MTYiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlN0b3BMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMC4wIgogICAgICAgcmVmWD0iMC4wIgogICAgICAgaWQ9IlN0b3BMIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg5ODYiCiAgICAgICAgIGQ9Ik0gMC4wLDUuNjUgTCAwLjAsLTUuNjUiCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjAuNzU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAiCiAgICAgICByZWZYPSIwIgogICAgICAgaWQ9Im1hcmtlcjEyMDIiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDEyMDAiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJUcmlhbmdsZU91dEwiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDk1OSIKICAgICAgICAgZD0iTSA1Ljc3LDAgLTIuODgsNSBWIC01IFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L21hcmtlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIKICAgICBpbmtzY2FwZTpjeD0iLTQuODExMDM1NyIKICAgICBpbmtzY2FwZTpjeT0iMTMuOTIyOTM0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc1LjY0MjQ3LC0yODEuMjk2NDkpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjc0OTk5OTkzO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMjc1LjY0MjQ3LDI5MC41NzE3NSBoIDU5Ljc4MDUiCiAgICAgICBpZD0icGF0aDQ5NDkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi43NzU5Mzc1NjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo4LjMyNzgxMjQ2LCAyLjc3NTkzNzQ5O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InJlY3Q0OTgxIgogICAgICAgd2lkdGg9IjAuOTc0MTY5NTUiCiAgICAgICBoZWlnaHQ9IjE1Ljg4OTcwMyIKICAgICAgIHg9IjMzNC4yMTc4MyIKICAgICAgIHk9IjI4Mi42MjY4OSIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJyZXByZXNzZXMuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXHVndXJcRGVza3RvcFxpbnRlcmFjdGlvbi1sZWdlbmQuMjAxNi4wNC4wMS5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIzMDAiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIzMDAiCiAgIHZpZXdCb3g9IjAgMCA2MC45Mzc1MDEgMTguNTUwNTE2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJTdG9wTCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAuMCIKICAgICAgIHJlZlg9IjAuMCIKICAgICAgIGlkPSJTdG9wTCIKICAgICAgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIgogICAgICAgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoOTg2IgogICAgICAgICBkPSJNIDAuMCw1LjY1IEwgMC4wLC01LjY1IgogICAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eTowLjc1O2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJtYXJrZXIxMjAyIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMjAwIgogICAgICAgICBkPSJNIDUuNzcsMCAtMi44OCw1IFYgLTUgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44KSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlcgogICAgICAgaW5rc2NhcGU6c3RvY2tpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMCIKICAgICAgIHJlZlg9IjAiCiAgICAgICBpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg5NTkiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiCiAgICAgaW5rc2NhcGU6Y3g9Ii0yNS4zMjk3NTkiCiAgICAgaW5rc2NhcGU6Y3k9IjEzLjkyMjkzNCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NS42NDI0NywtMjgxLjI5NjQ5KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6My43NTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6Ny40OTk5OTk4NywgNy40OTk5OTk4NztzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI3NS42NDI0NywyOTAuNTcxNzUgaCA1OS43ODA1IgogICAgICAgaWQ9InBhdGg0OTQ5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cmVjdAogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuNzc1OTM3NTY7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6OC4zMjc4MTIzNSwgMi43NzU5Mzc0NTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIKICAgICAgIGlkPSJyZWN0NDk4MSIKICAgICAgIHdpZHRoPSIwLjk3NDE2OTU1IgogICAgICAgaGVpZ2h0PSIxNS44ODk3MDMiCiAgICAgICB4PSIzMzIuMzQyODMiCiAgICAgICB5PSIyODIuNjI2ODkiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAh0AAABxCAYAAABxyRHvAAAABGdBTUEAALGPC/xhBQAAQABJREFUeAHt3QeYLEdxAOBBPBtjbIxlA8YEP4GMyME2CAS2HgIEmCSRjEWQSCKDyAgEepgghIgig0GPnDMyGR6YnHMGCRBRIGOwwXlcf0Mtc3Oze7t3t3v33nV93+7szvR0V1dXV1VXV3efrQ1oNin88Ic/bPLzpS99qfnyl7/cfOtb32rOOOOM5sc//nHz05/+tPnlL3/ZZBXOdrazNec85zmb85znPM15z3ve5k//9E+b7du3NwcccEBzyUtesjn/+c/fnO985yvXffbZZ5PWuqJVKVApUClQKVApsFdSYOfZNovR8ZOf/KT5+te/3nz6059uPvKRjxQD4wc/+EExOn7xi1+sC/UZJIyOP/mTP2kufvGLN1e+8pWbK17xis3+++9fDJF1KaRmUilQKVApUClQKVApMESBjTU6vvrVrzbvf//7m7e97W3F2GB0/N///d8QonO9d9GLXrS57GUv2xx66KHNjh07mktd6lJzLa9mXilQKVApUClQKbAFKbB4o+P73/9+8/a3v7155Stf2Xz4wx9uzjrrrE1Fd1MzV7rSlZrDDz+8ud71rlemZzYVghWZSoFKgUqBSoFKgT2TAoszOr7whS80u3btal796lc3p59++qYnl/iQC17wgs0NbnCD5sgjj2yucpWrbHqcK4KVApUClQKVApUCm5gC8zc6Pve5zzUnn3xyMTYEfq4FxGSc+9znbn73d3+3+Z3f+Z3mt37rt5pt27Y1DATwv//7v83//M//NP/xH/9RAkx//vOfNz/72c/WUmR5V3m8Hve4xz3K9MuaM6wZVApUClQKVApUCmw9CszP6Pje977XPOEJT2ie//znl1Ums9D2j//4j5s/+7M/a8RaXPrSl24udrGLNRe5yEWaP/iDPxgZHec4xzma3/7t315idDA40uhgeKTR8aMf/ag57bTTGitgvvKVrzTf+c53yioYaWcBRs/Nbnaz5gEPeECJAZnl3Zq2UqBSoFKgUqBSYItTYP2NDt6GF77whc0//MM/TD2N8nu/93vN5S53ueav//qvm4MPPrisJrHUlSdjHsAIsfT2U5/6VPOud72r+cQnPtF84xvfmKooXhXLce95z3uWD0OoQqVApUClQKVApUClwIoUWF+j49vf/nbzoAc9qHn5y1++Ysm8FAceeGDxHBxyyCFlxchG7Z1x5plnNp/85Ceb17/+9c1b3vKWYpCsVIGzn/3szdWudrXmhBNOaA466KCVktfnlQKVApUClQKVAludAutndFj2KubBstdJwEtgiuI2t7lNMTo2ytAYh+N3v/vd5tRTT21e9KIXNR/4wAdGG4+NS68+xx9/fHOXu9ylYYhUqBSoFKgUqBSoFKgUGKTA+hgdT33qU5tjjz22+fd///fBUtwUp3G7292uufOd71xiNMYm3CQPxIS89a1vbdTt3e9+90SsTAPd8Y53bB772MeWmJOJievDSoFKgUqBSoFKga1JgbUZHQIxH/rQhzYnnXTSWI+A1SVHHHFE8+AHP7hsRb6n0Znx8ZrXvKY58cQTGytxxoF6Xv/612+e8YxnlO3Xx6Wr9ysFKgUqBSoFKgW2KAVWb3T853/+Z3PMMcc0z3rWs8bS7hKXuESJeTjssMPGptkTHjjbRfDpk570pObpT39682//9m+DaJteEQz7ghe8oKy2GUxUb1YKVApUClQKVApsTQqszuj47//+7+Ze97rXRIPjtre9bfEOOOdkbwErc+ym+sAHPrD5/Oc/P1itNDys4LnwhS88mKberBSoFKgUqBSoFNiCFNg581GrPBz3v//9Bw0Oy0n33XffEgdxyimnlIPV9iaiMiiue93rNm9+85vLlJG9QvrAMPnnf/7nEr9iP5AKlQKVApUClQKVApUCv6LATEaHGI4nP/nJzdOe9rRl9GNwOEqesWEVy2ZblbIM4VXeUE8bl4ndsFeHnVH7wPB473vf29zvfvdr/vVf/7X/uP6vFKgUqBSoFKgU2JIUOPvOgGlq7vTXN73pTUXRml7pAkVsKsGUAk/AVgDGxt/8zd8U4+pjH/tY06cJelk+/F//9V9l6/S6nHYrcEWtY6VApUClQKXABArsntro+PKXv9yI0/jxj3+8LD8eDvtaXOMa11j2bG++YcVKHgTnxNz+tuo8Hla8bI/dVS9zmcuMzojZm2lS61YpUClQKVApUCkwhgK7p5pesf+G80ZOHzgd9g//8A+b5zznORt6EBr8NmoaQ1yHGJe73/3ug9u2W+nyiEc8onHKboVKgUqBSoFKgUqBrUyBFY0O0wTPfe5zyy6dfUJRuI9+9KPL/hT9Z4v6z+Cw9fod7nCHQS/MIvBwCu1xxx3X3OQmN1kWy2K5LWPNWTSTNk9bBJ61jEqBSoFKgUqBSoGNpMCKRodplcc97nHLcBQoStHbYXSjgBK3OZm9M2zgZSvyoemfReDn4LfHPOYxzV/8xV8sK860yz/90z81r3jFK8ZuorbspXqjUqBSoFKgUqBSYC+jwNliJN6OqxNledRRRzUveclLliW58pWvXLwftjffCEiD4ylPecqS4m9605uW5bwbgZcYDlum/93f/V3zL//yL0vwEmx7qUtdqtDM6pcKlQLzogA+FMCM58Qd+cwDyAflgL4YEWi9qOBp3lh19fHbsn749HFyXIGDJitUCuypFMDT+p2PgT+e3sNWik7eHMxGWDe84Q1HgiUbylH0b3zjGzcscHScwZH4baThQeA96lGPKjuxEv5dMB113/vetzzfCEYhkH0mAcG9WmWhvn1B3y9LvTei7n089tb/+M9BhXnSs8MVr3nNa666TcfRibFhWbjl89rcfx+ruHj9HvnIRzZXvOIVx70+1X154SkCVr38Puc5z1mMKDzKmHJMwWmnnVb2Bzrf+c7XfOUrXylnIP30pz8dved9RtCtb33rctDkVIVvoUTTyIUkB/mg/7omoO8kyLSrlSuT8t5qz+z9ZBXpRz/60caO34cffnhz8YtffEl7bHKa7Bw7BNKZH//4xy8zODDQ0UcfvWkNDgQ31UIQPvvZzy4HzS2yERgWpnkYbBijC4Tyi1/84uZWt7pVc+lLX7r7aO6/CexPfOITzZlnnjm2LG0rMNiKnBQUYxP3HhA8VvBMCuiVpx1qh6agetnVv6uggDb+0pe+VPjva1/7WmlDnrdXvepVazYA+ugo6wc/+EExPPA1oyANWsqf0l8tyM806fve977iOfziF7/Y/OxnPyvZnetc52r222+/5qCDDmouf/nLFwPr+c9/ftkhWb+TjtEFN/mkQjz3uc/dHHzwwatFaa9975e//GWDV6bdyBD9KTv9GA98//vfLyv0su3HEeo85zlPaS8D1gqrowDe3rVrV9kr66yzzmroGvR3rtkFLnCB1WW6EW+Fch6E8GS0MZIw9bLks//++7dnnHHG4DvzvhkrQdp73/veS/Dp49f9Hx6PNpTsvNFaln+M0NpXv/rVbYyuluEa7t32Pve5Txsddtl787yBdte5znXaYNTSrmEALMPNvYte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"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("sharedb/lib/client");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("jquery-ui-dist/jquery-ui");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-edgehandles");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-edge-editing");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-cose-bilkent");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-node-resize");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-undo-redo");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-panzoom");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function () {
  var styleSheet = [{
    selector: 'node',
    style: {
      'text-valign': 'center',
      'text-halign': 'center',
      'color': '#1e2829',
      'width': function (ele) {
        return nodeWFunc(ele);
      },
      'height': function (ele) {
        return nodeHFunc(ele);
      },
      // 'background-image-opacity': 1,
      // 'background-image': function (ele)
      // {
      //   return backgroundImageHandler(ele);
      // },
      'background-color': 'white',
      'shape': function (ele) {
        return parentNodeShapeFunc(ele);
      },
      'border-width': function (ele) {
        return borderWidthFunction(ele);
      },
      'border-color': function (ele) {
        return nodeBorderColorFunction(ele);
      },
      'font-size': 14
    }
  }, {
    selector: 'node[name]',
    style: {
      'label': 'data(name)'
    }
  }, {
    selector: 'node:parent',
    style: {
      'shape': function (ele) {
        return parentNodeShapeFunc(ele);
      },
      'text-valign': function (ele) {
        return 'bottom';
      },
      'text-margin-y': 2,
      'padding-left': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'padding-right': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'padding-bottom': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'padding-top': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'background-opacity': 0.5,
      'border-width': function (ele) {
        return parentBorderWidthFunction(ele);
      },
      'border-color': function (ele) {
        return nodeBorderColorFunction(ele);
      },
      'background-color': function (ele) {
        return nodeBackgroundColorFunction(ele);
      }
    }
  }, {
    selector: 'edge',
    style: {
      'arrow-scale': 1.7,
      'curve-style': 'bezier',
      'text-background-color': '#EEEEEE',
      'text-background-opacity': 0,
      'target-arrow-shape': function (ele) {
        return edgeTargetArrowTypeHandler(ele);
      },
      'width': 1,
      'line-color': function (ele) {
        return edgeColorHandler(ele);
      },
      'target-arrow-color': function (ele) {
        return edgeColorHandler(ele);
      },
      'line-style': function (ele) {
        return edgeLineTypeHandler(ele);
      },
      'opacity': 1
    }
  }, {
    selector: 'edge[name]',
    style: {
      'label': 'data(name)'
    }
  }, // {
  //     selector: 'edge.segments',
  //     style:
  //     {
  //       'curve-style': 'segments',
  //       'segment-distances': '0 100',
  //       'segment-weights': '0 1'
  //     }
  // },
  // some style for the Edge Handles !!!
  {
    selector: '.eh-handle',
    style: {
      'background-color': '#1abc9c',
      'width': 12,
      'height': 12,
      'shape': 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12,
      'border-opacity': 0
    }
  }, {
    selector: '.eh-hover',
    css: {
      'background-color': '#1abc9c'
    }
  }, {
    selector: '.eh-source',
    css: {
      'border-width': 2,
      'border-color': '#1abc9c'
    }
  }, {
    selector: '.eh-target',
    css: {
      'border-width': 2,
      'background-color': '#1abc9c',
      'border-color': '#1abc9c'
    }
  }, {
    selector: '.eh-preview, .eh-ghost-edge',
    css: {
      'line-color': '#1abc9c',
      'target-arrow-color': '#1abc9c',
      'source-arrow-color': '#1abc9c'
    }
  }, {
    selector: '.highlightedEdge',
    style: {
      'width': 3.5,
      'border-width': 4,
      'line-color': '#1abc9c',
      'target-arrow-color': '#1abc9c',
      'arrow-scale': 2
    }
  }, {
    selector: '.highlightedNode',
    style: {
      'border-width': function (ele) {
        return highlightedBorderWidthFunction(ele);
      },
      'border-color': '#1abc9c',
      'background-color': '#fff'
    }
  }, {
    selector: '.invalidGene',
    style: {
      'border-width': 2,
      'border-color': '#e94332',
      'color': '#e94332'
    }
  }, {
    // The css properties when a node is highlighted and an invalid gene
    selector: '.invalidGeneHighlight',
    style: {
      'border-width': 3,
      'font-weight': 'bold',
      // 'shadow-color' : '#e94332',
      // 'background-color': '#e94332',
      'border-color': '#e94332',
      'color': '#e94332'
    }
  }, {
    selector: 'node:selected',
    style: {
      'border-width': function (ele) {
        return selectedBorderWidthFunction(ele);
      },
      'border-color': '#ffc90e'
    }
  }, {
    selector: '.highlightedNode:selected, .invalidGeneHighlight:selected',
    style: {
      'border-width': function (ele) {
        return selectedHighlightedBorderWidthFunction(ele);
      }
    }
  }, {
    selector: 'edge:selected',
    style: {
      'width': 3,
      'line-color': '#ffc90e',
      'target-arrow-color': '#ffc90e'
    }
  }];

  var compoundPaddingFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "FAMILY":
        return 5;
        break;

      case "COMPLEX":
        return '5';
        break;

      case "COMPARTMENT":
        return 10;
        break;

      case "PROCESS":
        return 10;
        break;

      default:
        return 5;
        break;
    }
  };

  var contentFunction = function (ele) {
    if (ele._private.data.name) {
      return ele._private.data.name;
    }

    return 'newNode';
  };

  var vTextPositionFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 'center';
        break;

      case "FAMILY":
        return 'top';
        break;

      case "COMPLEX":
        return 'top';
        break;

      case "COMPARTMENT":
        return 'top';
        break;

      default:
        return 'center';
        break;
    }
  };

  var borderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 1;
        break;

      case "PROCESS":
        return 0;
        break;

      case "FAMILY":
        return 2;
        break;

      case "COMPARTMENT":
        return 4;
        break;

      default:
        return 1;
        break;
    }
  };

  var parentBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 1;
        break;

      case "PROCESS":
        return 0;
        break;

      case "FAMILY":
        return 2;
        break;

      case "COMPLEX":
        return 1;
        break;

      case "COMPARTMENT":
        return 4;
        break;

      default:
        return 1;
        break;
    }
  };

  var highlightedBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 3;
        break;

      case "PROCESS":
        return 0;
        break;

      case "FAMILY":
        return 4;
        break;

      case "COMPARTMENT":
        return 6;
        break;

      default:
        return 3;
        break;
    }
  };

  var selectedBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 2;
        break;

      case "PROCESS":
        return 0;
        break;

      case "FAMILY":
        return 3;
        break;

      case "COMPARTMENT":
        return 5;
        break;

      default:
        return 2;
        break;
    }
  };

  var selectedHighlightedBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 3;
        break;

      case "PROCESS":
        return 0;
        break;

      case "FAMILY":
        return 4;
        break;

      case "COMPARTMENT":
        return 6;
        break;

      default:
        return 3;
        break;
    }
  };

  var parentNodeShapeFunc = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return "roundrectangle";
        break;

      case "PROCESS":
        return "roundrectangle";
        break;

      case "FAMILY":
        return "rectangle";
        break;

      case "COMPARTMENT":
        return "roundrectangle";
        break;

      case "COMPLEX":
        return "rectangle";
        break;

      default:
        return "roundrectangle";
        break;
    }
  };

  var nodeBackgroundColorFunction = function (ele) {
    // switch (ele._private.data['type'])
    // {
    //   case "GENE": return "#fff"; break;
    //   case "FAMILY": return "#CCCCCC"; break;
    //   case "COMPARTMENT": return "#fff"; break;
    //   default: return "#fff"; break;
    // }
    return "#fff";
  };

  var nodeBorderColorFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return "#00000a";
        break;

      case "FAMILY":
        return "#a3a3a3";
        break;

      case "COMPLEX":
        return "#000000";
        break;

      case "COMPARTMENT":
        return "#000000";
        break;

      default:
        return "#000000";
        break;
    }
  };

  var edgeColorHandler = function (ele) {
    // switch (ele._private.data['type']){
    //   case "ACTIVATES": return "#904930"; break;
    //   case "INHIBITS": return "#7B7EF7"; break;
    //   case "INDUCES": return "#ad47c2"; break;
    //   case "REPRESSES": return "#67C1A9"; break;
    //   case "BINDS": return "#67C1A9"; break;
    //   default: return "#989898"; break;
    // }
    return "#1b1b1b";
  };

  var edgeTargetArrowTypeHandler = function (ele) {
    switch (ele._private.data['type']) {
      case "ACTIVATES":
        return "triangle";
        break;

      case "INHIBITS":
        return "tee";
        break;

      case "INDUCES":
        return "triangle";
        break;

      case "REPRESSES":
        return "tee";
        break;

      case "BINDS":
        return "none";
        break;

      default:
        return "none";
        break;
    }
  };

  var edgeLineTypeHandler = function (ele) {
    switch (ele._private.data['type']) {
      case "ACTIVATES":
        return "solid";
        break;

      case "INHIBITS":
        return "solid";
        break;

      case "INDUCES":
        return "dashed";
        break;

      case "REPRESSES":
        return "dashed";
        break;

      case "BINDS":
        return "solid";
        break;

      default:
        return "solid";
        break;
    }
  };

  var nodeWFunc = function (ele) {
    if (ele._private.data['w']) {
      return ele._private.data['w'];
    } else return 0;
  };

  var nodeHFunc = function (ele) {
    if (ele._private.data['h']) {
      return ele._private.data['h'];
    } else return 0;
  };

  return styleSheet;
}();

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var panzoomOptions = {
  zoomFactor: 0.05,
  zoomDelay: 45,
  minZoom: 0.1,
  maxZoom: 10,
  fitPadding: 50,
  panSpeed: 10,
  panDistance: 10,
  panDragAreaSize: 75,
  panMinPercentSpeed: 0.25,
  panInactiveArea: 8,
  panIndicatorMinOpacity: 0.5,
  zoomOnly: false,
  fitSelector: undefined,
  animateOnFit: function () {
    return false;
  },
  fitAnimationDuration: 1000,
  // icon class names
  sliderHandleIcon: 'fa fa-minus',
  zoomInIcon: 'fa fa-plus',
  zoomOutIcon: 'fa fa-minus',
  resetIcon: 'fa fa-expand'
};
module.exports = panzoomOptions;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-navigator");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-context-menus");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("konva");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-view-utilities");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-grid-guide");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-qtip");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@datastructures-js/max-heap");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EModalType", function() { return /* binding */ EModalType; });
__webpack_require__.d(__webpack_exports__, "PathwayMapper", function() { return /* binding */ react_pathway_mapper_PathwayMapper; });

// EXTERNAL MODULE: external "autobind-decorator"
var external_autobind_decorator_ = __webpack_require__(4);
var external_autobind_decorator_default = /*#__PURE__*/__webpack_require__.n(external_autobind_decorator_);

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(3);

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react-tooltip"
var external_react_tooltip_ = __webpack_require__(19);
var external_react_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_react_tooltip_);

// EXTERNAL MODULE: ../common/css/pmv1.css
var pmv1 = __webpack_require__(51);

// EXTERNAL MODULE: ../common/css/pmv2.css
var pmv2 = __webpack_require__(52);

// EXTERNAL MODULE: ../common/css/qtip.css
var qtip = __webpack_require__(53);

// EXTERNAL MODULE: ./src/data/pathways.json
var pathways = __webpack_require__(8);

// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__(14);

// CONCATENATED MODULE: ./src/utils/SaveLoadUtility.tsx
var SaveLoadUtility =
/** @class */
function () {
  function SaveLoadUtility() {} //Exports given json graph(based on cy.export()) into a string


  Object.defineProperty(SaveLoadUtility, "exportGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathwayDetails, cy, edgeEditing) {
      var returnString = pathwayDetails.pathwayTitle + '\n\n';
      returnString += pathwayDetails.pathwayDetails + '\n\n'; //Get nodes and edges

      var nodes = cy.nodes();
      var edges = cy.edges(); //Prepare Meta Line

      returnString += '--NODE_NAME\tNODE_ID\tNODE_TYPE\tPARENT_ID\tPOSX\tPOSY\tWIDTH\tHEIGHT--' + '\n';

      if (nodes) {
        for (var i = 0; i < nodes.length; i++) {
          returnString += this.exportNode(nodes[i]);
        }
      } //Put a blank line between nodes and edges


      returnString += '\n';
      returnString += '--EDGE_ID\tSOURCE\tTARGET\tEDGE_TYPE\tINTERACTION_PUBMED_ID\tEDGE_NAME\tEDGE_BENDS\n';

      if (edges) {
        //Write edges
        for (var i = 0; i < edges.length; i++) {
          var edgeID = edges[i].data('id');
          var edgeType = edges[i].data('type');
          var source = edges[i].data('source');
          var target = edges[i].data('target');
          var pubmedIDs = edges[i].data('pubmedIDs');
          var pubmedString = "";
          var edgeName = edges[i].data('name') ? edges[i].data('name') : "";
          var numberOfBendPoints = 0;
          if (edgeEditing.getSegmentPoints(edges[i]) !== undefined) numberOfBendPoints = edgeEditing.getSegmentPoints(edges[i]).length / 2;
          var bendPointPositions = "";

          for (var j = 0; j < numberOfBendPoints; j++) {
            bendPointPositions += "(" + edgeEditing.getSegmentPoints(edges[i])[2 * j] + ";" + edgeEditing.getSegmentPoints(edges[i])[2 * j + 1] + ")";
          }

          if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++) {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1) pubmedString += ";";
            }
          }

          returnString += edgeID + '\t' + source + '\t' + target + '\t' + edgeType + '\t' + pubmedString + '\t' + edgeName + '\t' + bendPointPositions + '\n';
        }
      } //Finally return a string that includes whole graph lovely and peacefully :)


      return returnString;
    }
  });
  Object.defineProperty(SaveLoadUtility, "exportAsSIFNX", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cy) {
      var returnString = ""; //Get nodes and edges

      var nodes = cy.nodes();
      var edges = cy.edges();
      var nodeMap = {}; //Put a blank line between nodes and edges

      returnString += '\n';
      returnString += 'PARTICIPANT\tPARTICIPANT_TYPE\tPARENT_ID\tPOSX\tPOSY\tWIDTH\tHEIGHT' + '\n';

      if (nodes) {
        for (var i = 0; i < nodes.length; i++) {
          returnString += this.exportNode(nodes[i]);
          nodeMap[nodes[i].id()] = nodes[i];
        }
      } //Put a blank line between nodes and edges


      returnString += '\n';
      returnString += 'PARTICIPANT_A\tPARTICIPANT_B\tTYPE\tPUBMED_IDS\n';

      if (edges) {
        //Write edges
        for (var i = 0; i < edges.length; i++) {
          var edgeType = edges[i].data("type");
          var source = edges[i].data("source");
          var target = edges[i].data("target");
          var edgeName = edges[i].data("name");
          var pubmedIDs = edges[i].data("pubmedIDs");
          var pubmedString = "";

          if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++) {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1) pubmedString += ";";
            }
          }

          returnString += nodeMap[source].data("name") + '\t' + nodeMap[target].data("name") + '\t' + edgeType + '\t' + pubmedString + '\t' + edgeName + '\n';
        }
      } //Finally return a string that includes whole graph lovely and peacefully :)


      return returnString;
    }
  });
  Object.defineProperty(SaveLoadUtility, "exportNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      //Node specific data fields
      var nodeName = node.data("name");
      var parentID = node.data("parent");
      var nodeID = node.data("id");
      var pos = node.position();
      var nodeType = node.data("type");
      var nodeW = node.data("w");
      var nodeH = node.data("h"); //Check if node has a parent, if not set parent id -1

      if (node.data("parent")) {
        parentID = node.data("parent");
      } else {
        parentID = -1;
      } // Write a line for a node


      return nodeName + '\t' + nodeID + '\t' + nodeType + '\t' + parentID + '\t' + parseInt(pos.x) + '\t' + parseInt(pos.y) + '\t' + nodeW + '\t' + nodeH + '\n';
    }
  });
  Object.defineProperty(SaveLoadUtility, "parseGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (graph, isArray) {
      var allEles = [];
      var nodes = [];
      var edges = []; // By lines
      // Match all new line character representations

      var seperator = /\r?\n|\r/;
      var lines = isArray ? graph : graph.split(seperator);
      var edgesStartIndex = -1;
      var title = lines[0];
      var description = lines[2]; // In old version description used to expand in multiple lines
      // graphDataIndex holds the line index where the first --NODE_NAME occurs and is used later to load nodes

      var graphDataIndex = 3;
      var isFound = false;

      while (graphDataIndex < lines.length) {
        if (lines[graphDataIndex].includes("--NODE_NAME")) {
          isFound = true;
          break;
        }

        description += "\n" + lines[graphDataIndex];
        graphDataIndex++;
      }

      graphDataIndex++; // TODO AMENDMENT

      if (!isFound) {
        graphDataIndex = 2;
      } //TODO Legacy pathways workaround


      if (lines[0].includes("--NODE_NAME")) {
        graphDataIndex = 1;
        title = "New Pathway";
        description = "";
      } // start from first line skip node meta data


      for (var i = graphDataIndex; i < lines.length; i++) {
        // If we encounter a blank line, that means we need to parse edges from now on !
        // so skip blank line and edge meta line
        if (lines[i].length == 0 || lines[i] === "") {
          edgesStartIndex = i + 2;
          break;
        } //Fetch a line for nodes


        var lineData = lines[i].split('\t');
        var nodeName = lineData[0];
        var nodeID = lineData[1];
        var nodeType = lineData[2];
        var parentID = lineData[3];
        var posX = lineData.length > 4 ? lineData[4] : "0";
        var posY = lineData.length > 5 ? lineData[5] : "0";
        var nodeW = lineData.length > 7 ? lineData[6] : nodeType === 'PROCESS' ? nodeName.length * 6 + 24 : "150";
        var nodeH = lineData.length > 7 ? lineData[7] : nodeType === 'PROCESS' ? "24" : "52";

        if (nodeName === " " || nodeName === "") {//nodeName = "No Name " + (i + 1);
        }

        var newNode = {
          group: 'nodes',
          data: {
            id: nodeID,
            name: nodeName,
            type: nodeType,
            w: nodeW,
            h: nodeH,
            parent: -1
          },
          position: {
            x: parseInt(posX),
            y: parseInt(posY)
          }
        };

        if (parentID != '-1') {
          newNode.data.parent = parentID;
        }

        nodes.push(newNode);
      } //Read edges


      for (var i_1 = edgesStartIndex; i_1 < lines.length; i_1++) {
        //If we reach EOF we break loop
        if (lines[i_1].length == 0) {
          break;
        }

        var lineData = lines[i_1].split('\t');
        var edgeID = lineData[0];
        var edgeSource = lineData[1];
        var edgeTarget = lineData[2];
        var edgeType = lineData[3];
        var pubmedIDs = lineData.length > 4 ? lineData[4].split(';') : [];
        var label = lineData.length > 5 ? lineData[5] : '';
        var bendPoints = lineData.length > 6 ? lineData[6] : '';
        var bendPointPositions = [];

        if (bendPoints) {
          var bendPair = bendPoints.split(')'); //The last element of bendPair array is ""

          for (var j = 0; j < bendPair.length - 1; j++) {
            var separatorIndex = bendPair[j].indexOf(";");
            var x = bendPair[j].substring(1, separatorIndex);
            var y = bendPair[j].substring(separatorIndex + 1, bendPair[j].length);
            bendPointPositions.push({
              x: parseFloat(x),
              y: parseFloat(y)
            });
          }
        }

        var newEdge = {
          group: 'edges',
          data: {
            id: edgeID,
            type: edgeType,
            source: edgeSource,
            target: edgeTarget,
            pubmedIDs: pubmedIDs,
            name: label,
            bendPointPositions: bendPointPositions
            /*[{x:100,y:100}]*/

          }
        };
        edges.push(newEdge);
      } // edgeEditing.initBendPoints(cy.edges());


      return {
        title: title,
        description: description,
        nodes: nodes,
        edges: edges
      };
    }
  });
  return SaveLoadUtility;
}();

/* harmony default export */ var utils_SaveLoadUtility = (SaveLoadUtility);
// CONCATENATED MODULE: ./src/managers/FileOperationsManager.tsx
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FileOperationsManager_FileOperationsManager =
/** @class */
function () {
  function FileOperationsManager() {
    Object.defineProperty(this, "pathwayInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(this);
    this.pathwayInfo = {
      pathwayTitle: "New Pathway",
      pathwayDetails: "",
      fileName: "pathway.txt"
    };
  }

  Object.defineProperty(FileOperationsManager.prototype, "getPathwayInfo", {
    get: function () {
      return this.pathwayInfo;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FileOperationsManager.prototype, "setPathwayInfo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (other) {
      this.pathwayInfo = other;
    }
  }); // see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

  Object.defineProperty(FileOperationsManager.prototype, "b64toBlob", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (b64Data, contentType, sliceSize) {
      if (sliceSize === void 0) {
        sliceSize = 512;
      }

      contentType = contentType || '';
      var byteCharacters = atob(b64Data);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      var blob = new Blob(byteArrays, {
        type: contentType
      });
      return blob;
    }
  });
  ;
  Object.defineProperty(FileOperationsManager.prototype, "saveAsJPEG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cy) {
      // var fileName = getFileName();
      var graphData = cy.jpeg(); // this is to remove the beginning of the pngContent: data:img/png;base64,

      var b64data = graphData.substr(graphData.indexOf(",") + 1);
      var imageData = this.b64toBlob(b64data, "image/jpeg");
      var blob = new Blob([imageData]);
      Object(external_file_saver_["saveAs"])(blob, "pathway.jpg");
    }
  });
  ;
  Object.defineProperty(FileOperationsManager.prototype, "saveAsSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor) {
      var returnString = editor.exportSVG();
      var fileName = 'pathway.svg';
      var blob = new Blob([returnString], {
        type: "text/plain;charset=utf-8"
      });
      Object(external_file_saver_["saveAs"])(blob, fileName);
    }
  });
  Object.defineProperty(FileOperationsManager.prototype, "saveAsPNG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cy) {
      // var fileName = getFileName();
      var graphData = cy.png(); // this is to remove the beginning of the pngContent: data:img/png;base64,

      var b64data = graphData.substr(graphData.indexOf(",") + 1);
      var imageData = this.b64toBlob(b64data, "image/png");
      var blob = new Blob([imageData]);
      Object(external_file_saver_["saveAs"])(blob, "pathway.png");
    }
  });
  ;
  Object.defineProperty(FileOperationsManager.prototype, "saveGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isSIFNX, editor) {
      var pathwayData = this.pathwayInfo;
      var returnString = isSIFNX ? utils_SaveLoadUtility.exportAsSIFNX(editor.cy) : utils_SaveLoadUtility.exportGraph(pathwayData, editor.cy, editor.edgeEditing);
      var blob = new Blob([returnString], {
        type: "text/plain;charset=utf-8"
      });
      Object(external_file_saver_["saveAs"])(blob, pathwayData.fileName);
    }
  });
  ;

  __decorate([external_mobx_["observable"]], FileOperationsManager.prototype, "pathwayInfo", void 0);

  __decorate([external_mobx_["computed"]], FileOperationsManager.prototype, "getPathwayInfo", null);

  __decorate([external_mobx_["action"]], FileOperationsManager.prototype, "setPathwayInfo", null);

  return FileOperationsManager;
}();

/* harmony default export */ var managers_FileOperationsManager = (FileOperationsManager_FileOperationsManager);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(7);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/managers/GridOptionsManager.tsx


var GridOptionsManager_GridOptionsManager =
/** @class */
function () {
  function GridOptionsManager(cy) {
    Object.defineProperty(this, "currentProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.currentProperties = {};
    this.changeParameters(GridOptionsManager.defaultGridGuideOptions);
  }

  Object.defineProperty(GridOptionsManager.prototype, "changeParameters", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      this.currentProperties = external_lodash_default.a.clone(params);
      this.refreshGridOptionsExtension();
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "getCurrentOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.currentProperties;
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "getDefaultOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return GridOptionsManager.defaultGridGuideOptions;
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "setSnapToGuidelines", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (state) {
      this.currentProperties.geometricGuideline = state;
      this.currentProperties.snapToAlignmentLocationDuringDrag = state;
      this.currentProperties.distributionGuidelines = state;
      this.refreshGridOptionsExtension(); //this.appManager.gridOptionsView.changeParameters();
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "setShowGrid", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (state) {
      this.currentProperties.drawGrid = state;
      this.currentProperties.snapToGridDuringDrag = state;
      this.refreshGridOptionsExtension(); //window.appManager.gridOptionsView.changeParameters();
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "refreshGridOptionsExtension", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.cy.gridGuide(this.currentProperties);
    }
  });
  Object.defineProperty(GridOptionsManager, "defaultGridGuideOptions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
      // On/Off Modules

      /* From the following four snap options, at most one should be true at a given time */
      snapToGridOnRelease: false,
      snapToGridDuringDrag: false,
      snapToAlignmentLocationOnRelease: false,
      snapToAlignmentLocationDuringDrag: false,
      distributionGuidelines: false,
      geometricGuideline: false,
      initPosAlignment: false,
      centerToEdgeAlignment: false,
      resize: false,
      parentPadding: false,
      drawGrid: false,
      // General
      gridSpacing: 20,
      // Draw Grid
      zoomDash: true,
      panGrid: true,
      gridStackOrder: -1,
      gridColor: '#dedede',
      lineWidth: 1.0,
      // Guidelines
      guidelinesStackOrder: 4,
      guidelinesTolerance: 5.00,
      guidelinesStyle: {
        strokeStyle: "#4286f4",
        geometricGuidelineRange: 750,
        range: 500,
        minDistRange: 10,
        distGuidelineOffset: 10,
        horizontalDistColor: "#4286f4",
        verticalDistColor: "#4286f4",
        initPosAlignmentColor: "#34495E",
        lineDash: [6, 8],
        horizontalDistLine: [0, 0],
        verticalDistLine: [0, 0],
        initPosAlignmentLine: [0, 0]
      },
      // Parent Padding
      parentSpacing: -1 // -1 to set paddings of parents to gridSpacing

    }
  });
  return GridOptionsManager;
}();

/* harmony default export */ var managers_GridOptionsManager = (GridOptionsManager_GridOptionsManager);
// CONCATENATED MODULE: ./src/managers/ViewOperationsManager.tsx
var ViewOperationsManager =
/** @class */
function () {
  function ViewOperationsManager(editor, cy) {
    Object.defineProperty(this, "movedNodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.editor = editor;
    this.movedNodes = [];
  } //TODO use align function from cytoscape.js-grid-guide extension


  Object.defineProperty(ViewOperationsManager.prototype, "handleNodeAlignment", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (param) {
      var tmpNodes = this.editor.selectedNodeStack;
      var nodes = this.cy.collection();
      var nodeMap = {};
      this.movedNodes = [];

      for (var key in tmpNodes) {
        nodes = nodes.add(tmpNodes[key]);
      }

      nodes.forEach(function (node) {
        if (node.isParent()) {
          nodeMap[node.id()] = node;
        }
      });

      if (nodes.length > 0) {
        var firstSelected = nodes[0];
        var firstBbox = firstSelected.boundingBox(); //OuterHeight variable added due to miscalculation of boundingBox function in pathwaymapper

        var firstOuterHeight = firstSelected.outerHeight();
        var self = this;
        nodes.forEach(function (node, index) {
          if (index == 0) {
            return;
          } //If parent of selected node is in selection do nothing !


          if (nodeMap[node.parent().id()] == null) {
            var newPosition = self.calculateNewPosition(param, node, firstBbox, firstOuterHeight); //Recursively traverse leaf nodes

            self.changePosition(node, 0, 0, newPosition);
          }
        });
        this.editor.handleChangePositionByAlignment(self.movedNodes);
      }
    }
  });
  /*
   Determine new position according to the alignment
   node that node.position works on center positions thats why all calculations
   are performed accordingly
   */

  Object.defineProperty(ViewOperationsManager.prototype, "calculateNewPosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (param, node, referenceBbox, referenceOuterHeight) {
      var currentPos = node.position();
      var currentBbox = node.boundingBox();
      var newPosition; //This parameter is used to move the compounds less upwards when they contain label

      var moveParam = node.isParent() ? node.outerHeight() - (currentBbox.h - node.outerHeight()) / 2 - (node.outerHeight() - node.height()) / 2 : node.height(); //This param is used only when the node is parent, for simple nodes is 0

      var labelHeight = node.isParent() ? currentBbox.h - node.outerHeight() : 0;

      if (param === 'vLeft') {
        newPosition = {
          x: referenceBbox.x1 + currentBbox.w / 2,
          y: currentPos.y
        };
      } else if (param === 'vCen') {
        newPosition = {
          x: referenceBbox.x1 + referenceBbox.w / 2,
          y: currentPos.y
        };
      } else if (param === 'vRight') {
        newPosition = {
          x: referenceBbox.x2 - currentBbox.w / 2,
          y: currentPos.y
        };
      } else if (param === 'hTop') {
        newPosition = {
          x: currentPos.x,
          y: referenceBbox.y1 + currentBbox.h / 2
        };
      } //Checks for the case where compounds don't have names (name isn't taken in consideration in that case)
      else if (param === 'hMid' && node.isParent() && node.data('name') == "") {
          newPosition = {
            x: currentPos.x,
            y: referenceBbox.y1 + referenceBbox.h / 2
          };
        } else if (param === 'hMid') {
          newPosition = {
            x: currentPos.x,
            y: referenceBbox.y1 + referenceOuterHeight / 2 + labelHeight / 2
          };
        } //Checks for the case where compounds don't have names (name isn't taken in consideration in that case)
        else if (param === 'hBot' && node.isParent() && node.data('name') == "") {
            newPosition = {
              x: currentPos.x,
              y: referenceBbox.y2 - currentBbox.h / 2
            };
          } else if (param === 'hBot') {
            newPosition = {
              x: currentPos.x,
              y: referenceBbox.y1 + referenceOuterHeight - moveParam / 2
            };
          } else {
            console.log('Error: wrong alignment name ' + param);
            return;
          }

      return newPosition;
    }
  }); //Recursively move leaf nodes

  Object.defineProperty(ViewOperationsManager.prototype, "changePosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, dx, dy, newPos) {
      if (node.isParent()) {
        var childNodes = node.children();
        var parentBbox = node.boundingBox();
        var self = this;
        childNodes.forEach(function (childNode, index) {
          var childBbox = childNode.boundingBox();

          var _dx = -(parentBbox.x1 - childBbox.x1) - parentBbox.w / 2 + childBbox.w / 2;

          var _dy = -(parentBbox.y1 - childBbox.y1) - parentBbox.h / 2 + childBbox.h / 2; //If further compound node is found, set position accordingly


          if (childNode.isParent()) {
            self.changePosition(childNode, 0, 0, {
              x: newPos.x + _dx,
              y: newPos.y + _dy
            });
          } else {
            self.changePosition(childNode, _dx, _dy, newPos);
          }
        });
      } else {
        //Move locally and let editor actions manager know a move happened
        //If in collaborative mode editor actions manager will update collaborative model
        var position = {
          x: newPos.x + dx,
          y: newPos.y + dy
        };
        this.movedNodes.push({
          node: node,
          nextPosition: position,
          oldPosition: null
        });
      }
    }
  });
  return ViewOperationsManager;
}();

/* harmony default export */ var managers_ViewOperationsManager = (ViewOperationsManager);
// CONCATENATED MODULE: ./src/modals/AboutModal.tsx
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var AboutModal_AboutModal =
/** @class */
function (_super) {
  __extends(AboutModal, _super);

  function AboutModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(AboutModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.ABOUT);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "About")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("h3", {
        id: "about-model-header"
      }, "PathwayMapper 2.0"), external_react_default.a.createElement("div", {
        className: "aboutImageContent"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__(54),
        alt: "",
        height: "25px"
      })), external_react_default.a.createElement("div", {
        className: "aboutImageContent"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__(55),
        alt: "",
        height: "34px"
      })), external_react_default.a.createElement("div", {
        className: "adressText"
      }, external_react_default.a.createElement("p", null, "i-Vis information Visualization Lab"), external_react_default.a.createElement("p", null, "Bilkent University, Ankara, Turkey")), external_react_default.a.createElement("div", {
        className: "adressText"
      }, external_react_default.a.createElement("p", null, "Memorial Sloan-Kettering Cancer Center"), external_react_default.a.createElement("p", null, "New York, USA"))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper"
      }, "https://github.com/iVis-at-Bilkent/pathway-mapper")));
    }
  });
  return AboutModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_AboutModal = (AboutModal_AboutModal);
// EXTERNAL MODULE: external "oncoprintjs"
var external_oncoprintjs_ = __webpack_require__(11);

// EXTERNAL MODULE: ./src/images/toolbar/edit.svg
var edit = __webpack_require__(15);
var edit_default = /*#__PURE__*/__webpack_require__.n(edit);

// EXTERNAL MODULE: ./src/images/toolbar/layout-cose.svg
var layout_cose = __webpack_require__(9);
var layout_cose_default = /*#__PURE__*/__webpack_require__.n(layout_cose);

// EXTERNAL MODULE: ./src/images/toolbar/save_png.svg
var save_png = __webpack_require__(12);
var save_png_default = /*#__PURE__*/__webpack_require__.n(save_png);

// EXTERNAL MODULE: ./src/images/toolbar/save_svg.svg
var save_svg = __webpack_require__(13);
var save_svg_default = /*#__PURE__*/__webpack_require__.n(save_svg);

// CONCATENATED MODULE: ./src/modals/CBioHelpModal.tsx
var CBioHelpModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore


 // @ts-ignore

var addSelImage = __webpack_require__(17); // @ts-ignore


var addAllImage = __webpack_require__(18); // https://github.com/cBioPortal/cbioportal-frontend/blob/29a93c5e992ca1affd3d027355015164ae3602bd/src/shared/lib/Colors.ts


var CNA_COLOR_AMP = '#ff0000';
var CNA_COLOR_HOMDEL = '#0000ff';
var DEFAULT_GREY = '#bebebe';
var MUT_COLOR_MISSENSE = '#008000';
var MUT_COLOR_MISSENSE_PASSENGER = '#53D400';
var MUT_COLOR_INFRAME = '#993404';
var MUT_COLOR_INFRAME_PASSENGER = '#a68028';
var MUT_COLOR_TRUNC = '#000000';
var MUT_COLOR_TRUNC_PASSENGER = '#708090';
var MUT_COLOR_FUSION = '#8B00C9';
var MUT_COLOR_PROMOTER = '#00B7CE';
var MUT_COLOR_OTHER = '#cf58bc';
var MUT_COLOR_GERMLINE = '#FFFFFF'; // always used shape

var defaultShape = {
  type: 'rectangle',
  fill: DEFAULT_GREY,
  x: 0,
  y: 0,
  width: 6,
  height: 20,
  stroke: 'rgba(0,0,0,0)',
  'stroke-width': 0
};
var labels = ['Amplification', 'Deep Deletion', 'Fusion', 'Germline Mutation', 'Missense Mutation (putative driver)', 'Missense Mutation (unknown significance)', 'Other Mutation', 'Promoter Mutation', 'Truncating Mutation (putative driver)', 'Truncating Mutation (unknown significance)', 'Inframe Mutation (putative driver)', 'Inframe Mutation (unknown significance)']; // conditional shapes

var shapeBank = [{
  type: 'rectangle',
  fill: CNA_COLOR_AMP,
  x: 0,
  y: 0,
  width: 6,
  height: 20
}, {
  type: 'rectangle',
  fill: CNA_COLOR_HOMDEL,
  x: 0,
  y: 0,
  width: 6,
  height: 20
}, {
  type: 'rectangle',
  fill: MUT_COLOR_FUSION,
  x: 0,
  y: 4,
  width: 6,
  height: 12
}, {
  type: 'rectangle',
  fill: MUT_COLOR_GERMLINE,
  x: 0,
  y: 8.75,
  width: 6,
  height: 1.6
}, {
  type: 'rectangle',
  fill: MUT_COLOR_MISSENSE,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_MISSENSE_PASSENGER,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_OTHER,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_PROMOTER,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_TRUNC,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_TRUNC_PASSENGER,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_INFRAME,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: MUT_COLOR_INFRAME_PASSENGER,
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}];

var CBioHelpModal_CBioHelpModal =
/** @class */
function (_super) {
  CBioHelpModal_extends(CBioHelpModal, _super);

  function CBioHelpModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(CBioHelpModal.prototype, "generateOncoprintLegend", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var svgNameSpace = 'http://www.w3.org/2000/svg';
      var svgElement = document.createElementNS(svgNameSpace, 'svg');
      var legendEleWidth = 280;
      var cellWidth = 6;
      var cellHeight = 23;
      var cellVerticalPadding = 15;
      var cellMarginRight = cellWidth + 3;
      shapeBank.forEach(function (shape, index) {
        var offsetX = index % 3 * legendEleWidth;
        var textOffsetX = offsetX + cellMarginRight;
        var offsetY = Math.floor(index / 3) * (cellHeight + cellVerticalPadding);
        var textOffsetY = offsetY + 15;
        var g = document.createElementNS(svgNameSpace, 'g');

        if (!shape["stroke"]) {
          shape["stroke"] = 'rgba(0,0,0,0)';
          shape["stroke-width"] = 0;
        }

        g.appendChild(Object(external_oncoprintjs_["shapeToSvg"])(defaultShape, offsetX, offsetY));
        g.appendChild(Object(external_oncoprintjs_["shapeToSvg"])(shape, offsetX, offsetY));
        var text = document.createElementNS(svgNameSpace, 'text');
        text.setAttributeNS(null, 'x', textOffsetX.toString());
        text.setAttributeNS(null, 'y', textOffsetY.toString());
        text.setAttributeNS(null, 'font-size', '12');
        text.setAttributeNS(null, 'font-family', 'Arial');
        var textNode = document.createTextNode(labels[index]);
        text.appendChild(textNode);
        g.appendChild(text);
        svgElement.appendChild(g);
      });
      svgElement.setAttribute('width', '840');
      svgElement.setAttribute('height', '175');
      svgElement.style.paddingTop = '20px'; // This is important you need to include this to succesfully render in cytoscape.js!

      svgElement.setAttribute('xmlns', svgNameSpace);
      return svgElement;
    }
  });
  Object.defineProperty(CBioHelpModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var legendPadding = '45px';
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        bsSize: "lg",
        id: "cBioHelpModal",
        className: "pathwayMapper",
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.CHELP);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "PathwayMapper cBioPortal Edition 2.0")), !this.props.patientView && external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("p", {
        className: "leftText"
      }, "PathwayMapper shows you your genes of interest with the alteration frequencies of selected genetic profiles of the chosen study overlaid on a TCGA pathway using a white to red color scale (the more frequently altered a gene is, the more red it's shown). All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with highest ranking with the default ranking options but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Refer to the documentation ", external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper",
        target: "_blank"
      }, "here"), " for the notation used.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "To search for a particular pathway of your interest, use the search field on top of the pathway table. To switch to another pathway, click on the button in the associated row of the pathway table. Ranking criteria might be changed by changing the options at the bottom of the table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "The buttons on top of the pathway are:", external_react_default.a.createElement("ul", null, external_react_default.a.createElement("table", {
        cellPadding: 5
      }, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_png_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as PNG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_svg_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as SVG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: layout_cose_default.a
      })), " ", external_react_default.a.createElement("td", null, "Perform layout: Layout is recalculated taking current node positions into account")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: addSelImage
      })), " ", external_react_default.a.createElement("td", null, "Add selected genes to query: You may select additional genes from the pathway by left clicking (Shift + left click to add more genes)")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: addAllImage
      })), " ", external_react_default.a.createElement("td", null, "Add all valid genes to query: All valid gene symbols will be added to the query; others will be ignored")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: edit_default.a
      })), " ", external_react_default.a.createElement("td", null, "Edit pathway: Edit both the topology and the geometry of the current pathway with the full blown PathwayMapper editor")))))), ",", this.props.patientView && external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("p", {
        className: "leftText"
      }, "PathwayMapper shows you your genes of interest with the mutation types, copy number alterations and fusions of selected genetic profiles of the chosen study overlaid on a TCGA pathway using the OncoPrint color scheme. All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with the highest number of genes of interest matching the ones in a pathway but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Refer to the documentation ", external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper",
        target: "_blank"
      }, "here"), " for the notation used.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Genetic alteration legend:", external_react_default.a.createElement("br", null), external_react_default.a.createElement("div", {
        className: "container",
        style: {
          paddingLeft: legendPadding,
          width: 'fit-content'
        },
        dangerouslySetInnerHTML: {
          __html: this.generateOncoprintLegend().outerHTML
        }
      }), external_react_default.a.createElement("p", {
        style: {
          paddingLeft: legendPadding
        }
      }, "Putative driver and unknown significance annotations are based on data from OncoKB and CancerHotspots.org."), external_react_default.a.createElement("br", null), "To search for a particular pathway of your interest, use the search field on top of the pathway table. To switch to another pathway, click on the button in the associated row of the pathway table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "The buttons on top of the pathway are:", external_react_default.a.createElement("ul", null, external_react_default.a.createElement("table", {
        cellPadding: 5
      }, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_png_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as PNG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_svg_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as SVG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: layout_cose_default.a
      })), " ", external_react_default.a.createElement("td", null, "Perform layout: Layout is recalculated taking current node positions into account")))))));
    }
  });
  return CBioHelpModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_CBioHelpModal = (CBioHelpModal_CBioHelpModal);
// CONCATENATED MODULE: ./src/modals/ConfirmationModal.tsx
var ConfirmationModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var ConfirmationModal_ConfirmationModal =
/** @class */
function (_super) {
  ConfirmationModal_extends(ConfirmationModal, _super);

  function ConfirmationModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(ConfirmationModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.CONFIRMATION);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Confirmation")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("div", null, "All unsaved changes will be lost. Do you want to continue?")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          ConfirmationModal.pendingFunction();

          _this.props.handleClose(EModalType.CONFIRMATION);
        }
      }, "Yes"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.handleClose(EModalType.CONFIRMATION);
        }
      }, "No")));
    }
  });
  return ConfirmationModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_ConfirmationModal = (ConfirmationModal_ConfirmationModal);
// CONCATENATED MODULE: ./src/modals/GridSettings.tsx
var GridSettings_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GridSettings_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EGridType;

(function (EGridType) {
  EGridType[EGridType["GRID"] = 0] = "GRID";
  EGridType[EGridType["GUIDE"] = 1] = "GUIDE";
  EGridType[EGridType["NONE"] = 2] = "NONE";
})(EGridType || (EGridType = {}));

var GridSettings_GridSettings =
/** @class */
function (_super) {
  GridSettings_extends(GridSettings, _super);

  function GridSettings(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "gridSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "guideColor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "defaultSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: managers_GridOptionsManager.defaultGridGuideOptions
    });
    Object.defineProperty(_this, "enabledType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.gridSize = _this.defaultSettings.gridSpacing;
    _this.guideColor = _this.defaultSettings.guidelinesStyle.strokeStyle;
    return _this;
  }

  Object.defineProperty(GridSettings.prototype, "setEnabledType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newType) {
      if (newType === this.enabledType) {
        this.enabledType = EGridType.NONE;
        return;
      }

      this.enabledType = newType;
    }
  });
  Object.defineProperty(GridSettings.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        dialogClassName: "gridModal",
        show: this.props.isModalShown,
        onShow: function () {
          _this.enabledType = _this.props.pathwayActions.enabledType;
        },
        onHide: function () {
          _this.props.handleClose(EModalType.GRID);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, external_react_default.a.createElement("h4", null, "Grid Settings"))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement(external_react_bootstrap_["Form"], {
        id: "gripOptionsForm",
        className: "leftText"
      }, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Enable Grids:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        checked: this.enabledType === EGridType.GRID,
        onChange: function () {
          _this.setEnabledType(EGridType.GRID);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Enable Guidelines")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        checked: this.enabledType === EGridType.GUIDE,
        onChange: function () {
          _this.setEnabledType(EGridType.GUIDE);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Grid Size:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: this.gridSize,
        onChange: function (e) {
          _this.gridSize = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Guideline Color:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement("input", {
        id: "guidelineColor",
        type: "color",
        className: "form-control",
        value: this.guideColor,
        onChange: function (e) {
          _this.guideColor = e.target.value;
        }
      }))))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.enabledType = _this.enabledType;

          _this.props.pathwayActions.adjustGridSettings(_this.gridSize, _this.guideColor);

          if (_this.props.pathwayActions.enabledType === EGridType.GRID) {
            _this.props.pathwayActions.toggleGrid(true);
          } else if (_this.props.pathwayActions.enabledType === EGridType.GUIDE) {
            _this.props.pathwayActions.toggleGuide(true);
          } else {
            _this.props.pathwayActions.toggleGrid(false); // This will disable both.

          }

          _this.props.handleClose(EModalType.GRID);
        }
      }, "Save")));
    }
  });

  GridSettings_decorate([external_mobx_["observable"]], GridSettings.prototype, "gridSize", void 0);

  GridSettings_decorate([external_mobx_["observable"]], GridSettings.prototype, "guideColor", void 0);

  GridSettings_decorate([external_mobx_["observable"]], GridSettings.prototype, "enabledType", void 0);

  GridSettings = GridSettings_decorate([external_mobx_react_["observer"]], GridSettings);
  return GridSettings;
}(external_react_default.a.Component);

/* harmony default export */ var modals_GridSettings = (GridSettings_GridSettings);
// CONCATENATED MODULE: ./src/utils/GraphUtilities.tsx
/**
 * Created by istemi on 27.09.2016.
 */
var GraphUtilities =
/** @class */
function () {
  function GraphUtilities() {}

  Object.defineProperty(GraphUtilities.prototype, "createGraphHierarchy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      //Some arrays and maps for creating graph hierarchy
      var tree = [];
      var mappedArr = {}; // First map the nodes of the array to an object -> create a hash table.

      for (var i = 0, len = nodes.length; i < len; i++) {
        var arrElem = nodes[i];
        mappedArr[arrElem.id()] = arrElem;
        mappedArr[arrElem.id()].childNodes = [];
      }

      for (var id in mappedArr) {
        var mappedElem = mappedArr[id]; // If the element is not at the root level, add it to its parent array of children.

        if (mappedElem.parent().length > 0) {
          mappedArr[mappedElem.parent().id()].childNodes.push(mappedElem);
        } // If the element is at the root level, add it to first level elements array.
        else {
            tree.push(mappedElem);
          }
      }

      return tree;
    }
  });
  ;
  /*
   * Creates graph hierarchy from given flat list of nodes list, nodes list is assumed to have parent-child
   * relationship by a field 'parent' which represents to the id of the parent node This function is specific
   * for the needs of TCGA Pathway Curation Tool 04/07/2016
   *
   * @param nodes {array}: flat list of nodes of a graph
   * @return {array}: Tree representation in array, entries are root level nodes. node.children gives children nodes
   * of each node in the returned array.
   * a node in corresponding level.
   *
   * */

  Object.defineProperty(GraphUtilities.prototype, "createGraphHierarchyRealTime", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      //Some arrays and maps for creating graph hierarchy
      var tree = [];
      var mappedArr = {}; // First map the nodes of the array to an object -> create a hash table.

      for (var i = 0, len = nodes.length; i < len; i++) {
        var arrElem = nodes[i];
        mappedArr[arrElem.data.id] = arrElem;
        mappedArr[arrElem.data.id].children = [];
      }

      for (var id in mappedArr) {
        var mappedElem = mappedArr[id]; // If the element is not at the root level, add it to its parent array of children.

        if (mappedElem.data.parent != -1) {
          mappedArr[mappedElem.data.parent].children.push(mappedElem);
        } // If the element is at the root level, add it to first level elements array.
        else {
            tree.push(mappedElem);
          }
      }

      return tree;
    }
  });
  ;
  return GraphUtilities;
}();

/* harmony default export */ var utils_GraphUtilities = (GraphUtilities);
// CONCATENATED MODULE: ./src/utils/SVGExporter.ts


var SVGExporter_SVGExporter =
/** @class */
function () {
  function SVGExporter(edgeEditing, editor) {
    Object.defineProperty(this, "SVGNameSpace", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'http://www.w3.org/2000/svg'
    });
    Object.defineProperty(this, "svg", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElementNS(this.SVGNameSpace, 'svg')
    });
    Object.defineProperty(this, "NODE_FILL_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'rgb(255,255,255)'
    });
    Object.defineProperty(this, "FAMILY_FILL_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'rgb(255,255,255)'
    });
    Object.defineProperty(this, "FAMILY_STROKE_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'rgb(204,204,204)'
    });
    Object.defineProperty(this, "NODE_STROKE_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'rgb(0,0,0)'
    });
    Object.defineProperty(this, "COMPARTMENT_STROKE_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    Object.defineProperty(this, "NODE_STROKE_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "NODE_OPACITY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0.5
    });
    Object.defineProperty(this, "ROUNDING_FACTOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 6
    });
    Object.defineProperty(this, "GENOMICDATA_LABEL_Y_OFFSET", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -15
    });
    Object.defineProperty(this, "EDGE_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "T_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    Object.defineProperty(this, "T_HEIGHT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8
    });
    Object.defineProperty(this, "T_ARROW_HEAD_OFFSET", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    Object.defineProperty(this, "TRIANGLE_ARROW_HEAD_HEIGHT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8
    });
    Object.defineProperty(this, "TRIANGLE_ARROW_HEAD_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8
    });
    Object.defineProperty(this, "DASH_PARAMETERS", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: '5, 3'
    });
    Object.defineProperty(this, "COMPOUND_MARGIN", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8
    });
    Object.defineProperty(this, "NODE_FONT_SIZE", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 14
    });
    Object.defineProperty(this, "edgeEditing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.edgeEditing = edgeEditing;
    this.editor = editor;
  }

  Object.defineProperty(SVGExporter.prototype, "resetSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.svg = document.createElementNS(this.SVGNameSpace, 'svg');
    }
  });
  Object.defineProperty(SVGExporter.prototype, "exportGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      //Reset SVG
      this.resetSVG();
      this.svg.setAttribute('version', '1.1');
      this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); //Set viewport of output SVG

      var cyBounds = this.editor.cy.extent();
      this.svg.setAttribute('viewBox', cyBounds.x1 + ' ' + cyBounds.y1 + ' ' + cyBounds.w + ' ' + cyBounds.h);
      var that = this;
      var nodeMap = {};
      var nodeTree = new utils_GraphUtilities().createGraphHierarchy(nodes);

      var traverseFunction = function (node) {
        //Create SVG for current node
        nodeMap[node.id()] = node;
        var genomicDataSVG = that.editor.getGenomicDataSVG(node).children;
        var oncoprintDataSVG = that.editor.getOncoprintDataSVG(node);
        that.svg.appendChild(that.createRect(node));
        var labelOffset = genomicDataSVG && genomicDataSVG.length > 0 || oncoprintDataSVG.outerHTML !== '' ? that.GENOMICDATA_LABEL_Y_OFFSET : 0;
        that.svg.appendChild(that.createText(node, labelOffset)); //Append Genomic Data SVG here

        if (genomicDataSVG) {
          while (genomicDataSVG.length > 0) {
            var elemSVG = genomicDataSVG[0];
            var nodePosition = node.position();
            var svgX = elemSVG.getAttribute('x');
            var svgY = elemSVG.getAttribute('y');
            elemSVG.setAttribute('x', nodePosition.x - node.width() / 2 + parseFloat(svgX));
            elemSVG.setAttribute('y', nodePosition.y - node.height() / 2 + parseFloat(svgY));
            that.svg.appendChild(elemSVG);
          }
        } else if (oncoprintDataSVG.outerHTML !== '') {
          var nodePosition = node.position();
          var width = parseInt(oncoprintDataSVG.getAttribute('width'));
          var height = parseInt(oncoprintDataSVG.getAttribute('height'));
          var verticalPadding = 8;
          var y = nodePosition.y + node.height() / 2 - (height + verticalPadding);
          oncoprintDataSVG.setAttribute('x', nodePosition.x - width / 2);
          oncoprintDataSVG.setAttribute('y', y);
          that.svg.appendChild(oncoprintDataSVG);
        } //Traverse children


        if (node.childNodes) {
          for (var i in node.childNodes) {
            traverseFunction(node.childNodes[i]);
          }
        }
      }; //Traverse node hierarchy


      for (var i in nodeTree) {
        var rootLevelNode = nodeTree[i];
        traverseFunction(rootLevelNode);
      }

      edges.forEach(function (edge) {
        var source = nodeMap[edge.source().id()];
        var target = nodeMap[edge.target().id()];
        that.drawEdge(edge, source, target);
      });
      return this.svg.outerHTML;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "drawEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge, source, target) {
      var edgeType = edge.data().type;
      var sourceRectangle = {
        x: source.position().x,
        y: source.position().y,
        width: source.width(),
        height: source.height()
      };
      var targetRectangle = {
        x: target.position().x,
        y: target.position().y,
        width: target.width(),
        height: target.height()
      }; //If source or target node is compound node adjust their width and height according to compound margins

      if (source.isParent()) {
        sourceRectangle.width += this.COMPOUND_MARGIN;
        sourceRectangle.height += this.COMPOUND_MARGIN;
      }

      if (target.isParent()) {
        targetRectangle.width += this.COMPOUND_MARGIN;
        targetRectangle.height += this.COMPOUND_MARGIN;
      }

      var numberOfBendPoints = 0;
      if (this.edgeEditing.getSegmentPoints(edge) !== undefined) numberOfBendPoints = this.edgeEditing.getSegmentPoints(edge).length / 2;
      var clipPoints;

      if (numberOfBendPoints > 0) {
        var lastBendPoint = {
          x: this.edgeEditing.getSegmentPoints(edge)[2 * numberOfBendPoints - 2],
          y: this.edgeEditing.getSegmentPoints(edge)[2 * numberOfBendPoints - 1],
          height: 0,
          width: 0
        }; //Calculate clipping point of target node with the segment from last bend point by Cohen Sutherland algorithm

        clipPoints = this.findClippingPoints(lastBendPoint, targetRectangle);
      } else {
        //Calculate clipping points of both source and target nodes by Cohen Sutherland algorithm
        clipPoints = this.findClippingPoints(sourceRectangle, targetRectangle);
      } //Calculate unit vector pointing from source clipping coordinates to target clipping coordinates


      var unitV = this.unitVector({
        x: clipPoints.targetClipPoints.x - clipPoints.sourceClipPoints.x,
        y: clipPoints.targetClipPoints.y - clipPoints.sourceClipPoints.y
      });
      var inverseUnitV = this.scale(unitV, -1);
      var targetX = clipPoints.targetClipPoints.x;
      var targetY = clipPoints.targetClipPoints.y; //Draw Triangle arrow head

      if (edgeType == 'ACTIVATES' || edgeType == 'INDUCES') {
        targetX = clipPoints.targetClipPoints.x + this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.x;
        targetY = clipPoints.targetClipPoints.y + this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.y;
        var point1Vector = this.rotateVector(unitV, Math.PI / 2);
        var point2Vector = this.rotateVector(unitV, -Math.PI / 2);
        point1Vector = this.scale(point1Vector, this.TRIANGLE_ARROW_HEAD_WIDTH / 2);
        point2Vector = this.scale(point2Vector, this.TRIANGLE_ARROW_HEAD_WIDTH / 2);
        var point1X = targetX + point1Vector.x;
        var point1Y = targetY + point1Vector.y;
        var point2X = targetX + point2Vector.x;
        var point2Y = targetY + point2Vector.y;
        var polySVG = document.createElementNS(this.SVGNameSpace, 'polygon');
        polySVG.setAttribute('points', point1X + ',' + point1Y + ',' + point2X + ',' + point2Y + ',' + clipPoints.targetClipPoints.x + ',' + clipPoints.targetClipPoints.y);
        this.svg.appendChild(polySVG);
      } //Draw T type arrow head
      else if (edgeType === 'INHIBITS' || edgeType === 'REPRESSES') {
          targetX = clipPoints.targetClipPoints.x + this.T_ARROW_HEAD_OFFSET * inverseUnitV.x;
          targetY = clipPoints.targetClipPoints.y + this.T_ARROW_HEAD_OFFSET * inverseUnitV.y; //Calculate T shape points

          var point1Vector = this.rotateVector(unitV, Math.PI / 2);
          var point2Vector = this.rotateVector(unitV, -Math.PI / 2);
          point1Vector = this.scale(point1Vector, this.T_HEIGHT / 2);
          point2Vector = this.scale(point2Vector, this.T_HEIGHT / 2);
          var point1X = targetX + point1Vector.x;
          var point1Y = targetY + point1Vector.y;
          var point2X = targetX + point2Vector.x;
          var point2Y = targetY + point2Vector.y; //Draw edge arrow line here !

          var lineSVG = document.createElementNS(this.SVGNameSpace, 'line');
          lineSVG.setAttribute('x1', point1X);
          lineSVG.setAttribute('y1', point1Y);
          lineSVG.setAttribute('x2', point2X);
          lineSVG.setAttribute('y2', point2Y);
          lineSVG.setAttribute('stroke-width', this.T_WIDTH + '');
          lineSVG.setAttribute('stroke', 'black');
          this.svg.appendChild(lineSVG);
        } //Draw edge lines here !


      if (numberOfBendPoints > 0) {
        //Calculate initial clipping point of source node with the segment from first bend point
        var firstBendPoint = {
          x: this.edgeEditing.getSegmentPoints(edge)[0],
          y: this.edgeEditing.getSegmentPoints(edge)[1],
          height: 0,
          width: 0
        };
        var initialClipPoint = this.findClippingPoints(sourceRectangle, firstBendPoint); //Create a copy array of edgeEditing.getSegmentPoints(edge) which contain all the bending points
        // including source and target clipping point. The first elements of the array are source's x and y positions
        // and the last ones are target's x and y positions

        var points = [initialClipPoint.sourceClipPoints.x, initialClipPoint.sourceClipPoints.y];

        for (var i = 0; i < numberOfBendPoints * 2; i++) {
          points.push(this.edgeEditing.getSegmentPoints(edge)[i]);
        }

        points.push(clipPoints.targetClipPoints.x);
        points.push(clipPoints.targetClipPoints.y);

        for (var i = 0; i < points.length - 2; i += 2) {
          var lineSVG = document.createElementNS(this.SVGNameSpace, 'line');
          lineSVG.setAttribute('x1', points[i]);
          lineSVG.setAttribute('y1', points[i + 1]);
          lineSVG.setAttribute('x2', points[i + 2]);
          lineSVG.setAttribute('y2', points[i + 3]);
          lineSVG.setAttribute('stroke-width', this.EDGE_WIDTH + '');
          lineSVG.setAttribute('stroke', 'black'); //Draw dashed if induces or represses interaction

          if (edgeType == 'INDUCES' || edgeType == 'REPRESSES') {
            lineSVG.setAttribute('stroke-dasharray', this.DASH_PARAMETERS);
          }

          this.svg.appendChild(lineSVG);
        }
      } else {
        var lineSVG = document.createElementNS(this.SVGNameSpace, 'line');
        lineSVG.setAttribute('x1', clipPoints.sourceClipPoints.x);
        lineSVG.setAttribute('y1', clipPoints.sourceClipPoints.y);
        lineSVG.setAttribute('x2', targetX);
        lineSVG.setAttribute('y2', targetY);
        lineSVG.setAttribute('stroke-width', this.EDGE_WIDTH + '');
        lineSVG.setAttribute('stroke', 'black'); //Draw dashed if induces or represses interaction

        if (edgeType == 'INDUCES' || edgeType == 'REPRESSES') {
          lineSVG.setAttribute('stroke-dasharray', this.DASH_PARAMETERS);
        }

        this.svg.appendChild(lineSVG);
      }
    }
  });
  /**
   *
   * **/

  Object.defineProperty(SVGExporter.prototype, "findClippingPoints", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sourceRectangle, targetRectangle) {
      var sourceAABB = {
        xMin: sourceRectangle.x - sourceRectangle.width / 2,
        xMax: sourceRectangle.x + sourceRectangle.width / 2,
        yMin: sourceRectangle.y - sourceRectangle.height / 2,
        yMax: sourceRectangle.y + sourceRectangle.height / 2
      };
      var targetAABB = {
        xMin: targetRectangle.x - targetRectangle.width / 2,
        xMax: targetRectangle.x + targetRectangle.width / 2,
        yMin: targetRectangle.y - targetRectangle.height / 2,
        yMax: targetRectangle.y + targetRectangle.height / 2
      };
      var line1 = {
        x1: sourceRectangle.x,
        y1: sourceRectangle.y,
        x2: targetRectangle.x,
        y2: targetRectangle.y
      };
      var line2 = {
        x1: targetRectangle.x,
        y1: targetRectangle.y,
        x2: sourceRectangle.x,
        y2: sourceRectangle.y
      };
      var returnObj = {
        sourceClipPoints: this.clipLine(line1, sourceAABB),
        targetClipPoints: this.clipLine(line2, targetAABB)
      };
      return returnObj;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createRect", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      var nodeRectangle = document.createElementNS(this.SVGNameSpace, 'rect');
      var nodePosition = node.position();

      if (node.isParent()) {
        nodeRectangle.setAttribute('x', nodePosition.x - node.width() / 2 - this.COMPOUND_MARGIN / 2 + '');
        nodeRectangle.setAttribute('y', nodePosition.y - node.height() / 2 - this.COMPOUND_MARGIN / 2 + '');
        nodeRectangle.setAttribute('width', node.width() + this.COMPOUND_MARGIN);
        nodeRectangle.setAttribute('height', node.height() + this.COMPOUND_MARGIN);
      } else {
        nodeRectangle.setAttribute('x', nodePosition.x - node.width() / 2 + '');
        nodeRectangle.setAttribute('y', nodePosition.y - node.height() / 2 + '');
        nodeRectangle.setAttribute('width', node.width());
        nodeRectangle.setAttribute('height', node.height());
      }

      nodeRectangle = this.createStyleForNodes(node, nodeRectangle);
      return nodeRectangle;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createText", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, genomicDataOffset) {
      var verticalTextOffset = 5;
      var nodePosition = node.position();
      var svgText = document.createElementNS(this.SVGNameSpace, 'text');

      if (node.isParent()) {
        verticalTextOffset = 20;
        svgText.setAttribute('x', nodePosition.x);
        svgText.setAttribute('y', nodePosition.y + node.height() / 2 + verticalTextOffset);
      } else {
        svgText.setAttribute('x', nodePosition.x);
        svgText.setAttribute('y', nodePosition.y + verticalTextOffset + genomicDataOffset);
      }

      svgText.setAttribute('font-family', 'Arial');
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('font-size', this.NODE_FONT_SIZE + '');
      svgText.innerHTML = node.data().name;
      return svgText;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createStyleForNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, nodeRectangle) {
      var nodeType = node.data().type;
      var strokeWidth = node.css('border-width') || this.NODE_STROKE_WIDTH;
      var strokeColor = this.NODE_STROKE_COLOR;
      var fillColor = this.NODE_FILL_COLOR;
      var opacity = this.NODE_OPACITY;
      var strokeOpacity = 1;

      if (nodeType == 'GENE' || nodeType == 'COMPARTMENT') {
        nodeRectangle.setAttribute('rx', this.ROUNDING_FACTOR);
        nodeRectangle.setAttribute('ry', this.ROUNDING_FACTOR);
        if (nodeType == 'COMPARTMENT') strokeWidth = this.COMPARTMENT_STROKE_WIDTH;
      }

      if (nodeType == 'PROCESS') {
        opacity = 0;
        strokeOpacity = 0;
      }

      if (nodeType == 'FAMILY') {
        fillColor = this.FAMILY_FILL_COLOR;
        strokeColor = this.FAMILY_STROKE_COLOR;
      }

      var styleString = 'stroke-width:' + strokeWidth + ';' + 'stroke:' + strokeColor + ';' + 'fill-opacity:' + opacity + ';' + 'fill:' + fillColor + ';' + 'stroke-opacity:' + strokeOpacity + ';';
      nodeRectangle.setAttribute('style', styleString);
      return nodeRectangle;
    }
  });
  /**
   * Cohen Sutherland Line Clipping algorithm implementation
   * **/

  Object.defineProperty(SVGExporter.prototype, "clipLine", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (line, rectangle) {
      //Clipping regions encoded with different integers !
      var INSIDE = 0;
      var LEFT = 1;
      var RIGHT = 2;
      var BOTTOM = 4;
      var TOP = 8;
      /*
       *  Get outcode of given point compared to the rectangle
       * */

      function getOutCode(point, rectangle) {
        var outcode = INSIDE;
        if (point.x < rectangle.xMin) outcode = outcode | LEFT;else if (point.x > rectangle.xMax) outcode = outcode | RIGHT;
        if (point.y < rectangle.yMin) outcode = outcode | TOP;else if (point.y > rectangle.yMax) outcode = outcode | BOTTOM;
        return outcode;
      }

      var outcode0 = getOutCode({
        x: line.x1,
        y: line.y1
      }, rectangle);
      var outcode1 = getOutCode({
        x: line.x2,
        y: line.y2
      }, rectangle);
      var slope = (line.y2 - line.y1) / (line.x2 - line.x1);
      var returnCoords = {
        x: line.x1,
        y: line.y1,
        slope: slope
      }; //Main clipping loop

      var accept = false;

      while (true) {
        // Bitwise OR is 0. Trivially accept and get out of loop
        if (!(outcode0 | outcode1)) {
          accept = true;
          break;
        } // Bitwise AND is not 0. Trivially reject and get out of loop
        else if (outcode0 & outcode1) {
            break;
          } else {
            var outCode = outcode0 ? outcode0 : outcode1;

            if (outCode & TOP) {
              returnCoords.x = line.x1 + (rectangle.yMin - line.y1) / slope;
              returnCoords.y = rectangle.yMin;
            } else if (outCode & BOTTOM) {
              returnCoords.x = line.x1 + (rectangle.yMax - line.y1) / slope;
              returnCoords.y = rectangle.yMax;
            } else if (outCode & RIGHT) {
              returnCoords.x = rectangle.xMax;
              returnCoords.y = line.y1 + slope * (rectangle.xMax - line.x1);
            } else if (outCode & LEFT) {
              returnCoords.x = rectangle.xMin;
              returnCoords.y = line.y1 + slope * (rectangle.xMin - line.x1);
            } // Now we move outside point to intersection point to clip
            // and get ready for next pass.


            if (outCode == outcode0) {
              outcode0 = getOutCode({
                x: returnCoords.x,
                y: returnCoords.y
              }, rectangle);
            } else {
              outcode1 = getOutCode({
                x: returnCoords.x,
                y: returnCoords.y
              }, rectangle);
            }
          }
      }

      return returnCoords;
    }
  });
  /**
   * Utility vector functions
   * */

  Object.defineProperty(SVGExporter.prototype, "dotProduct", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v1, v2) {
      var newX = v1.x * v2.x;
      var newY = v1.y * v2.y;
      return {
        x: newX,
        y: newY
      };
    }
  });
  Object.defineProperty(SVGExporter.prototype, "unitVector", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v) {
      var inverseLength = 1 / Math.sqrt(v.x * v.x + v.y * v.y);
      return {
        x: v.x * inverseLength,
        y: v.y * inverseLength
      };
    }
  });
  Object.defineProperty(SVGExporter.prototype, "rotateVector", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v, radians) {
      var newX = v.x * Math.cos(radians) - v.y * Math.sin(radians);
      var newY = v.x * Math.sin(radians) + v.y * Math.cos(radians);
      return {
        x: newX,
        y: newY
      };
    }
  });
  Object.defineProperty(SVGExporter.prototype, "scale", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v, scalar) {
      var newX = v.x * scalar;
      var newY = v.y * scalar;
      return {
        x: newX,
        y: newY
      };
    }
  });
  return SVGExporter;
}();

/* harmony default export */ var utils_SVGExporter = (SVGExporter_SVGExporter);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./src/managers/GenomicDataOverlayManager.ts



var GenomicDataOverlayManager_GenomicDataOverlayManager =
/** @class */
function () {
  function GenomicDataOverlayManager(cy) {
    Object.defineProperty(this, "genomicDataMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "visibleGenomicDataMapByType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "groupedGenomicDataCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "groupedGenomicDataMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "patientData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "DEFAULT_VISIBLE_GENOMIC_DATA_COUNT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "observers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "clearAllGenomicData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function () {
        this.genomicDataMap = {};
        this.visibleGenomicDataMapByType = {};
        this.groupedGenomicDataMap = {};
        this.groupedGenomicDataCount = 0;
      }
    });
    Object.defineProperty(this, "prepareGenomicDataShareDB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (genomicData) {
        var genomicDataMap = {};
        var cancerTypes = [];
        var visibleGenomicDataMapByType = {}; // By lines

        var lines = genomicData.split('\n'); // First line is meta data !

        var metaLineColumns = lines[0].split('\t'); // Parse cancer types

        for (var i = 1; i < metaLineColumns.length; i++) {
          cancerTypes.push(metaLineColumns[i]); // Update initially visible genomic data boxes !

          if (i - 1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT) {
            visibleGenomicDataMapByType[cancerTypes[i - 1]] = true;
          } else {
            visibleGenomicDataMapByType[cancerTypes[i - 1]] = false;
          }
        } // parse genomic data


        for (var i = 1; i < lines.length; i++) {
          // EOF check
          if (lines[i].length === 0) {
            break;
          } // Split each line by tab and parse genomic data content


          var lineContent = lines[i].split('\t');
          var geneSymbol = lineContent[0]; // If current gene entry is not  in genomic data map create new hashmap entry

          if (!(geneSymbol in genomicDataMap)) {
            genomicDataMap[geneSymbol] = {};
          } // Add each entry of genomic data


          for (var j = 1; j < lineContent.length; j++) {
            genomicDataMap[geneSymbol][cancerTypes[j - 1]] = lineContent[j];
          }
        }

        var returnObj = {
          genomicDataMap: genomicDataMap,
          visibilityMap: visibleGenomicDataMapByType
        };
        return returnObj;
      }
    });
    Object.defineProperty(this, "updateGenomicDataVisibility", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (_key, isVisible) {
        if (_key in this.visibleGenomicDataMapByType) {
          this.visibleGenomicDataMapByType[_key] = isVisible;
        }
      }
    });
    Object.defineProperty(this, "hideGenomicData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function () {
        this.cy.style().selector('node[type="GENE"]').style('text-margin-y', 0).style('width', function (ele) {
          return 150;
        }).style('background-image', function (ele) {
          var dataURI = 'data:image/svg+xml;utf8,';
          return dataURI;
        }).update();
      }
    });
    this.cy = cy;
    this.genomicDataMap = {};
    this.patientData = {};
    this.visibleGenomicDataMapByType = {};
    this.groupedGenomicDataMap = {};
    this.groupedGenomicDataCount = 0;
    this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT = 3; // Observer-observable pattern related stuff

    this.observers = [];
  }

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getEmptyGroupID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var oldCount = this.groupedGenomicDataCount;
      this.groupedGenomicDataCount++;
      return oldCount;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicDataLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData, groupID) {
      this.parseGenomicData(genomicData, groupID);
      this.showGenomicData();
      this.notifyObservers();
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "preparePortalGenomicDataShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData) {
      var geneMap = {};
      var visMap = {};

      for (var cancerKey in genomicData) {
        for (var geneSymbol in genomicData[cancerKey]) {
          geneMap[geneSymbol] = {};
          geneMap[geneSymbol][cancerKey] = genomicData[cancerKey][geneSymbol];
        }

        visMap[cancerKey] = true;
      }

      return {
        genomicDataMap: geneMap,
        visibilityMap: visMap
      };
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (data) {
      this.genomicDataMap = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "removeGenomicVisData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.visibleGenomicDataMapByType = {};
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicDataWithGeneSymbol", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneSymbol, data) {
      this.genomicDataMap[geneSymbol] = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicGroupData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (groupID, data) {
      this.groupedGenomicDataMap[groupID] = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addPortalGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (data, groupID) {
      for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var cancerStudy = _a[_i];
        this.visibleGenomicDataMapByType[cancerStudy] = true; // Group current cancer study according to the groupID

        if (this.groupedGenomicDataMap[groupID] === undefined) {
          this.groupedGenomicDataMap[groupID] = [];
        }

        this.groupedGenomicDataMap[groupID].push(cancerStudy);
        var cancerData = data[cancerStudy];

        for (var _b = 0, _c = Object.keys(cancerData); _b < _c.length; _b++) {
          var geneSymbol = _c[_b];
          if (this.genomicDataMap[geneSymbol] === undefined) this.genomicDataMap[geneSymbol] = {};
          this.genomicDataMap[geneSymbol][cancerStudy] = data[cancerStudy][geneSymbol].toFixed ? data[cancerStudy][geneSymbol].toFixed(2) : data[cancerStudy][geneSymbol];
        }
      } //This parameter is used as flag for PatientView PathwayMapper Functions


      if (data['PatientView'] == 1) {
        this.patientData = data;
        this.showPatientData();
      } else {
        this.showGenomicData();
      }

      this.notifyObservers();
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "removeGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.genomicDataMap = {};
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "removeGenomicDataWithGeneSymbol", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneSymbol) {
      this.genomicDataMap[geneSymbol] = {};
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicVisData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (key, data) {
      this.visibleGenomicDataMapByType[key] = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "countVisibleGenomicDataByType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // Count the genomic data that will be displayed on nodes' body
      var genomicDataBoxCount = 0;

      for (var cancerType in this.visibleGenomicDataMapByType) {
        if (this.visibleGenomicDataMapByType[cancerType]) {
          genomicDataBoxCount++;
        }
      }

      return genomicDataBoxCount;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateSVGForNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var genomicDataBoxCount = this.countVisibleGenomicDataByType(); // Experimental data overlay part !

      var dataURI = 'data:image/svg+xml;utf8,';
      var svgNameSpace = 'http://www.w3.org/2000/svg';
      var nodeLabel = ele.data('name'); // If there is no genomic data for this node return !

      if (!(nodeLabel in this.genomicDataMap)) {
        return dataURI;
      }

      var eleBBox = ele.boundingBox();
      var reqWidth = this.getRequiredWidthForGenomicData(genomicDataBoxCount);
      var overlayRecBoxW = reqWidth - 10;
      var overlayRecBoxH = 25;
      var svg = document.createElementNS(svgNameSpace, 'svg'); // It seems this should be set according to the node size !

      svg.setAttribute('width', reqWidth);
      svg.setAttribute('height', eleBBox.h); // This is important you need to include this to succesfully render in cytoscape.js!

      svg.setAttribute('xmlns', svgNameSpace); // Overlay Data Rect

      var overLayRectBBox = {
        w: overlayRecBoxW,
        h: overlayRecBoxH,
        x: reqWidth / 2 - overlayRecBoxW / 2,
        y: eleBBox.h / 2 + overlayRecBoxH / 2 - 18
      };
      var genomicFrequencyData = this.genomicDataMap[nodeLabel];
      var maxGenomicDataBoxCount =
      /*(genomicDataBoxCount > 3) ? 3:*/
      genomicDataBoxCount;
      var genomicBoxCounter = 0;

      for (var i in this.groupedGenomicDataMap) {
        for (var j in this.groupedGenomicDataMap[i]) {
          var cancerType = this.groupedGenomicDataMap[i][j];

          if (!this.visibleGenomicDataMapByType[cancerType]) {
            continue;
          }

          if (genomicFrequencyData[cancerType] !== undefined) {
            genomicDataRectangleGenerator(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.y, overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.h, genomicFrequencyData[cancerType], svg);
          } else {
            genomicDataRectangleGenerator(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.y, overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.h, null, svg);
          }

          genomicBoxCounter++;
        }
      }

      function genomicDataRectangleGenerator(x, y, w, h, percent, parentSVG) {
        var colorString = '';

        if (percent) {
          var isNegativePercent = percent < 0;

          var _percent = Math.abs(percent); // Handle special cases here !


          _percent = _percent > 0 && _percent < 0.5 ? 0.5 : _percent; // _percent = _percent === 1 ? 2 : _percent
          // Here we are using non linear regression
          // Fitting points of (0,0), (25,140), (50,220), (100, 255)

          var percentColor = 255 - (-7.118 + 53.9765 * Math.log(_percent + 0.8));

          if (_percent === 0 || percent == -101) {
            colorString = 'rgb(255,255,255)';
          } else if (isNegativePercent) {
            colorString = 'rgb(' + Math.round(percentColor) + ',' + Math.round(percentColor) + ',255)';
            percent = percent.substring(1);
          } else {
            colorString = 'rgb(255,' + Math.round(percentColor) + ',' + Math.round(percentColor) + ')';
          } // Rectangle Part


          var overlayRect = document.createElementNS(svgNameSpace, 'rect');
          overlayRect.setAttribute('x', x);
          overlayRect.setAttribute('y', y);
          overlayRect.setAttribute('width', w);
          overlayRect.setAttribute('height', h);
          overlayRect.setAttribute('style', 'stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:' + colorString + ';'); // Text Part

          var textPercent = percent < 0.5 && percent > 0 ? '<0.5' : Number(percent).toFixed(1);
          var text = percent == -101 ? 'N/P' : textPercent + '%';
          var fontSize = 14;
          var textLength = text.length;
          var xOffset = w / 2 - textLength * 4;
          var yOffset = fontSize / 3;
          var svgText = document.createElementNS(svgNameSpace, 'text');
          svgText.setAttribute('x', x + xOffset);
          svgText.setAttribute('y', y + h / 2 + yOffset);
          svgText.setAttribute('font-family', 'Arial');
          svgText.setAttribute('font-size', fontSize + '');
          svgText.innerHTML = text;
          parentSVG.appendChild(overlayRect);
          parentSVG.appendChild(svgText);
        } else {
          colorString = 'rgb(210,210,210)'; // Rectangle Part

          var overlayRect = document.createElementNS(svgNameSpace, 'rect');
          overlayRect.setAttribute('x', x);
          overlayRect.setAttribute('y', y);
          overlayRect.setAttribute('width', w);
          overlayRect.setAttribute('height', h);
          overlayRect.setAttribute('style', 'stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:' + colorString + ';');
          parentSVG.appendChild(overlayRect);
        }
      }

      return svg;
    }
  }); // Just an utility function to calculate required width for genes for genomic data !

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getRequiredWidthForGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicDataBoxCount) {
      var term = genomicDataBoxCount > 3 ? genomicDataBoxCount - 3 : 0;
      return 150 + term * 35;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "showGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var self = this;
      var genomicDataBoxCount = this.countVisibleGenomicDataByType();

      if (genomicDataBoxCount < 1) {
        // Hide all genomic data and return
        this.hideGenomicData();
        return;
      }

      this.cy.style().selector('node[type="GENE"]') // It used to change the width of nodes only locally
      .style('width', function (ele) {
        return _this.getRequiredWidthForGenomicData(genomicDataBoxCount);
      }).style('text-margin-y', function (ele) {
        var nodeLabel = ele.data('name'); // If there is no genomic data for this node return !

        if (!(nodeLabel in self.genomicDataMap)) {
          return 0;
        } // Else shift label in Y axis


        return -15;
      }).style('background-image', function (ele) {
        var x = encodeURIComponent(self.generateSVGForNode(ele).outerHTML);

        if (x === 'undefined') {
          return 'none';
        }

        var dataURI = 'data:image/svg+xml;utf8,' + x;
        return dataURI;
      }).update();
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "parseGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData, groupID) {
      this.genomicDataMap = this.genomicDataMap || {};
      this.visibleGenomicDataMapByType = this.visibleGenomicDataMapByType || {};
      this.groupedGenomicDataMap = this.groupedGenomicDataMap || {};
      var cancerTypes = []; // By lines

      var lines = genomicData.split('\n'); // First line is meta data !

      var metaLineColumns = lines[0].split('\t'); // Parse cancer types

      for (var i = 1; i < metaLineColumns.length; i++) {
        cancerTypes.push(metaLineColumns[i]); // Update initially visible genomic data boxes !

        if (i - 1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT) {
          this.visibleGenomicDataMapByType[cancerTypes[i - 1]] = true;
        } else {
          this.visibleGenomicDataMapByType[cancerTypes[i - 1]] = false;
        }

        if (this.groupedGenomicDataMap[groupID] === undefined) {
          this.groupedGenomicDataMap[groupID] = [];
        }

        this.groupedGenomicDataMap[groupID].push(cancerTypes[i - 1]);
      } // parse genomic data


      for (var i = 1; i < lines.length; i++) {
        // EOF check
        if (lines[i].length === 0) {
          break;
        } // Split each line by tab and parse genomic data content


        var lineContent = lines[i].split('\t');
        var geneSymbol = lineContent[0]; // If current gene entry is not  in genomic data map create new map

        if (!(geneSymbol in this.genomicDataMap)) {
          this.genomicDataMap[geneSymbol] = {};
        } // Add each entry of genomic data


        for (var j = 1; j < lineContent.length; j++) {
          this.genomicDataMap[geneSymbol][cancerTypes[j - 1]] = lineContent[j];
        }
      }
    }
  }); // Simple observer-observable pattern for views!!!!!

  Object.defineProperty(GenomicDataOverlayManager.prototype, "registerObserver", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (observer) {
      this.observers.push(observer);
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "notifyObservers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
        var observer = _a[_i];
        observer.notify();
      }
    }
  }); //This method is needed to calculate the alteration Types for each gene

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getAlterationCountForPatient", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneData) {
      var count = 0;

      for (var altType in geneData) {
        count++;
      }

      return count;
    }
  }); //These methods are created to be used in CbioPortal PatientView they are not used
  //in ResultView Page or PathwayMapper Editor

  Object.defineProperty(GenomicDataOverlayManager.prototype, "showPatientData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var self = this;
      var data = this.patientData; // const genomicDataBoxCount = 3 //this.countVisibleGenomicDataByType(); //CHANGE

      var genomicDataBoxCount = data.geneticTrackData ? data.geneticTrackData.length : 3;

      if (genomicDataBoxCount < 1) {
        // Hide all genomic data and return
        this.hideGenomicData();
        return;
      }

      this.cy.style().selector('node[type="GENE"]') // It used to change the width of nodes only locally
      .style('width', function (ele) {
        return _this.getRequiredWidthForGenomicData(genomicDataBoxCount);
      }).style('text-margin-y', function (ele) {
        var nodeLabel = ele.data('name'); // If there is no genomic data for this node return !

        if (!(nodeLabel in data)) {
          return 0;
        } // Else shift label in Y axis


        return -15;
      }).style('background-image', function (ele) {
        var x = encodeURIComponent( // self.generateSVGForPatientNode(ele, data).outerHTML
        self.generateOncoprintForPatientNode(ele).outerHTML);

        if (x === 'undefined') {
          return 'none';
        }

        var dataURI = 'data:image/svg+xml;utf8,' + x;
        return dataURI;
      }).update();
      this.cy.on('mouseover', 'node[type="GENE"]', function (event) {
        var node = event.target || event.cyTarget;
        var nodeLabel = node.data('name');

        if (!data[nodeLabel]) {
          return;
        }

        node.qtip({
          content: {
            text: function () {
              return self.generateHTMLContentForNodeTooltip(node, data);
            }
          },
          style: {
            classes: 'qtip-light qtip-rounded'
          },
          show: {
            event: 'showqtipevent'
          },
          hide: {
            event: 'mouseout'
          }
        }, event);
        node.trigger('showqtipevent');
      });
    }
  }); //Every mutation type has a unique color coded. This method is used to retrieve the colors

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getOncoprintColors", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedGene) {
      var oncoprintColors = {
        Missense_Mutation: 'rgb(0,128,0)',
        inframe: '#993404',
        truncating: '#000000',
        Fusion: 'rgb(139,0,201)',
        AMP: 'rgb(255,0,0)',
        gain: '#ffb6c1',
        heatloss: '#8fd8d8',
        homdel: 'rgb(0,0,255)',
        DeepDel: 'rgb(0,0,255)',
        "5'Flank": 'rgb(207,88,188)',
        in_frame_del: 'rgb(166,128,40)'
      };

      if (oncoprintColors[selectedGene] !== undefined) {
        return oncoprintColors[selectedGene];
      } else {
        //Types are not on the list corresponds to black
        return 'rgb(0,0,0)';
      }
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateSVGForPatientNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, patientData) {
      //Here we should use the parameter patientData when calculating the expressions
      var genomicDataBoxCount = this.countVisibleGenomicDataByType(); // Experimental data overlay part !

      var dataURI = 'data:image/svg+xml;utf8,';
      var svgNameSpace = 'http://www.w3.org/2000/svg'; //nodeLabel refers to the nodeLabels in the overlay data

      var nodeLabel = ele.data('name'); // If there is no genomic data for this node return !

      if (!(nodeLabel in patientData)) {
        return dataURI;
      } //this parameter refers to the count of alteration types for each gene


      var alterationBoxCount = this.getAlterationCountForPatient(patientData[nodeLabel]);
      var eleBBox = ele.boundingBox();
      var svg = document.createElementNS(svgNameSpace, 'svg'); //this parameter is set to 12 since there are 12 different possiblities for types

      var term = alterationBoxCount > 12 ? alterationBoxCount - 12 : 0;
      var reqWidth = 150 + term * 35;
      var overlayRecBoxW = reqWidth - 10;
      var overlayRecBoxH = 25; // It seems this should be set according to the node size !

      svg.setAttribute('width', reqWidth);
      svg.setAttribute('height', eleBBox.h); // This is important you need to include this to succesfully render in cytoscape.js!

      svg.setAttribute('xmlns', svgNameSpace); // Overlay Data Rect

      var overLayRectBBox = {
        w: overlayRecBoxW,
        h: overlayRecBoxH,
        x: reqWidth / 2 - overlayRecBoxW / 2,
        y: eleBBox.h / 2 + overlayRecBoxH / 2 - 18
      };
      var genomicBoxCounter = 0; //required width is calculated for each gene since box count is different for each gene

      for (var j in patientData[nodeLabel]) {
        var genomicAlterationData = patientData[nodeLabel];
        var alterationType = j;

        if (!this.visibleGenomicDataMapByType[nodeLabel]) {
          continue;
        } //get the color string corresponding to the alterationType


        var colorString = this.getOncoprintColors(alterationType);

        if (genomicAlterationData[alterationType] !== undefined) {
          genomicDataRectangleGeneratorPatient(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / alterationBoxCount, overLayRectBBox.y, overLayRectBBox.w / alterationBoxCount, overLayRectBBox.h, 100, svg, alterationType, colorString);
        } else {
          genomicDataRectangleGeneratorPatient(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / alterationBoxCount, overLayRectBBox.y, overLayRectBBox.w / alterationBoxCount, overLayRectBBox.h, null, svg, '', null);
        }

        genomicBoxCounter++;
      } //This function differs from genomicRectangleGenerator. genomicDataRectangleGeneratorPatient
      //has an extra parameter text. In patient view alterationTypes of genes are displayed instead of
      //alteration percentage. Hence a text is sent to this method which is alterationType


      function genomicDataRectangleGeneratorPatient(x, y, w, h, percent, parentSVG, text, colorString) {
        if (percent) {
          var isNegativePercent = percent < 0; // Rectangle Part

          var overlayRect = document.createElementNS(svgNameSpace, 'rect');
          overlayRect.setAttribute('x', x);
          overlayRect.setAttribute('y', y);
          overlayRect.setAttribute('width', w);
          overlayRect.setAttribute('height', h);
          overlayRect.setAttribute('style', 'stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:' + colorString + ';'); // Text Part

          var fontSize = 14;
          var textLength = 4;
          var xOffset = w / 2 - textLength * 4;
          var yOffset = fontSize / 3;
          var svgText = document.createElementNS(svgNameSpace, 'text');

          if (colorString === 'rgb(0,0,0)') {
            svgText.setAttribute('fill', 'white');
          }

          svgText.setAttribute('x', x + xOffset);
          svgText.setAttribute('y', y + h / 2 + yOffset);
          svgText.setAttribute('font-family', 'Arial');
          svgText.setAttribute('font-size', fontSize + ''); //first 4 letters of the alterationTypes are used

          svgText.innerHTML = text.substring(0, 4);
          parentSVG.appendChild(overlayRect);
          parentSVG.appendChild(svgText);
        } else {
          //Normally
          colorString = 'rgb(210,210,210)';
        }
      }

      return svg;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateOncoprintForPatientNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      // const dataURI = 'data:image/svg+xml;utf8,'
      // nodeLabel refers to the nodeLabels in the overlay data
      var patientData = this.patientData;
      var nodeLabel = ele.data('name');
      var genomicData = patientData[nodeLabel];
      var svgNameSpace = 'http://www.w3.org/2000/svg';
      var svgElement = document.createElementNS(svgNameSpace, 'svg');

      if (!genomicData) {
        return {
          outerHTML: ''
        };
      }

      var ruleset = new external_oncoprintjs_["GeneticAlterationRuleSet"](genomicData.geneticTrackRuleSetParams);
      var cellWidth = 6;
      var cellPadding = 3;
      var cellHeight = 23;
      var cellVerticalPadding = 8;
      var shapesPerDatum = ruleset.apply(genomicData.geneticTrackData, cellWidth, cellHeight);
      shapesPerDatum.forEach(function (shapes, index) {
        var offsetX = index * (cellWidth + cellPadding); // width + padding

        var offsetY = cellVerticalPadding;
        var g = document.createElementNS(svgNameSpace, 'g');
        shapes.forEach(function (shape) {
          return g.appendChild(Object(external_oncoprintjs_["shapeToSvg"])(shape, offsetX, offsetY));
        });
        svgElement.appendChild(g);
      }); // It seems this should be set according to the node size !

      svgElement.setAttribute('width', ((cellWidth + cellPadding) * shapesPerDatum.length).toString());
      svgElement.setAttribute('height', (cellHeight + cellVerticalPadding).toString()); // This is important you need to include this to succesfully render in cytoscape.js!

      svgElement.setAttribute('xmlns', svgNameSpace);
      return svgElement;
    }
  }); // Mapping of alteration type keys to strings
  // See: https://github.com/cBioPortal/cbioportal-frontend/blob/442e108208846255feb1ed5b309218cd44927fb9/src/shared/components/oncoprint/TooltipUtils.ts#L599

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getCNADisplayString", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (alterationTypeKey) {
      var disp_cna = {
        '-2': 'HOMODELETED',
        '-1': 'HETLOSS',
        '1': 'GAIN',
        '2': 'AMPLIFIED'
      };
      return disp_cna[alterationTypeKey];
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateSvgIconForSample", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (iconColor, iconText) {
      var html = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">' + '<g transform="translate(6,6)">' + '<circle r="6" fill="' + iconColor + '" fill-opacity="1"></circle>' + '</g>' + '<g transform="translate(6,5.5)">' + '<text y="4" text-anchor="middle" font-size="10" fill="white" style="cursor: default;">' + iconText + '</text>' + '</g>' + '</svg>';
      return html;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateHTMLContentForNodeTooltip", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, patientData) {
      var _this = this;

      var tooltipMaxHeight = '200px';
      var tooltipMaxWidth = '200px';
      var marginBetweenSamples = '10px';
      var sampleIconColorMap = patientData.sampleColors;
      var sampleIndexMap = patientData.sampleIndex;
      var nodeLabel = ele.data('name');
      var data = patientData[nodeLabel]; // Outer wrapper for the entire tooltip

      var wrapper = external_jquery_default()('<div></div>');
      wrapper.css({
        'max-width': tooltipMaxWidth,
        'max-height': tooltipMaxHeight,
        'word-wrap': 'break-word',
        'overflow-y': 'auto'
      });
      data.geneticTrackData.forEach(function (sample, sampleIndex) {
        var sampleId = sample.sample;
        var iconColor = sampleIconColorMap[sampleId];
        var iconText = (sampleIndexMap[sampleId] + 1).toString();

        var sampleIconSvgHTML = _this.generateSvgIconForSample(iconColor, iconText);

        var margin = sampleIndex > 0 ? marginBetweenSamples : '0px'; // Inner wrapper for a single sample

        var sampleWrapper = external_jquery_default()('<div></div>');
        sampleWrapper.css({
          'margin-top': margin
        });
        var sampleData = sample.data;
        var mutationInfo = [];
        var cnaInfo = [];
        var fusionInfo = [];
        sampleData.forEach(function (data) {
          var geneSymbol = data.gene.hugoGeneSymbol;

          if (sample.disp_mut && data.proteinChange && data.mutationType !== 'Fusion') {
            var proteinChange = data.proteinChange;
            mutationInfo.push({
              gene: geneSymbol,
              proteinChange: proteinChange
            });
          }

          if (sample.disp_cna && data.alteration) {
            var cnaLabelKey = data.alteration;

            var cnaLabel = _this.getCNADisplayString(cnaLabelKey);

            cnaInfo.push({
              gene: geneSymbol,
              cnaLabel: cnaLabel
            });
          }

          if (sample.disp_fusion && data.proteinChange && data.mutationType === 'Fusion') {
            var proteinChange = data.proteinChange;
            fusionInfo.push({
              gene: geneSymbol,
              proteinChange: proteinChange
            });
          }
        }); // Prepare HTML for tooltip

        var mutationInfoHTML = mutationInfo.length > 0 ? 'Mutation: ' : '';
        var cnaInfoHTML = cnaInfo.length > 0 ? 'CNA: ' : '';
        var fusionInfoHTML = fusionInfo.length > 0 ? 'Fusion: ' : '';
        mutationInfo.forEach(function (mutation, index) {
          mutationInfoHTML += '<b>' + mutation.gene + ' ' + mutation.proteinChange + '</b>';

          if (index !== mutationInfo.length - 1) {
            mutationInfoHTML += ', ';
          } else {
            mutationInfoHTML += '<br>';
          }
        });
        cnaInfo.forEach(function (cna, index) {
          cnaInfoHTML += '<b>' + cna.gene + ' ' + cna.cnaLabel + '</b>';

          if (index !== cnaInfo.length - 1) {
            cnaInfoHTML += ', ';
          } else {
            cnaInfoHTML += '<br>';
          }
        });
        fusionInfo.forEach(function (fusion, index) {
          fusionInfoHTML += '<b>' + fusion.gene + ' ' + fusion.proteinChange + '</b>';

          if (index !== fusionInfo.length - 1) {
            fusionInfoHTML += ', ';
          } else {
            fusionInfoHTML += '<br>';
          }
        });
        var sampleIdHTML = '<b> ' + sampleId + '</b>' + '<br>';
        sampleWrapper.append(external_jquery_default()('<div>' + sampleIconSvgHTML + sampleIdHTML + mutationInfoHTML + cnaInfoHTML + fusionInfoHTML + +'</div>'));
        wrapper.append(sampleWrapper);
      });
      return wrapper;
    }
  });
  return GenomicDataOverlayManager;
}();

/* harmony default export */ var managers_GenomicDataOverlayManager = (GenomicDataOverlayManager_GenomicDataOverlayManager);
// CONCATENATED MODULE: ./src/managers/EditorActionsManager.tsx
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var EditorActionsManager_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var _ = __webpack_require__(7);

var EditorActionsManager_EditorActionsManager =
/** @class */
function () {
  function EditorActionsManager(isCollaborative, shareDBManager, cyInst, isCBioPortal, undoRedoManager, portalAccessor, profiles) {
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "genomicDataOverlayManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "edgeEditing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "selectedNodeStack", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "layoutProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "FIT_CONSTANT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "observers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "svgExporter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCbioPortal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shareDBManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "profiles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }); // Set cy instance and set real time manager reference if collaborative mode

    Object(external_mobx_["makeObservable"])(this);
    this.cy = cyInst;
    this.isCollaborative = isCollaborative;
    this.isCbioPortal = isCBioPortal;
    this.profiles = profiles;
    var edgeEditingOptions = {
      // this function specifies the positions of bend points
      bendPositionsFunction: function (ele) {
        return ele.data('bendPointPositions');
      },
      // whether to initilize bend points on creation of this extension automatically
      initBendPointsAutomatically: true,
      // whether the bend editing operations are undoable (requires cytoscape-undo-redo.js)
      undoable: true,
      // the size of bend shape is obtained by multipling width of edge with this parameter
      bendShapeSizeFactor: 6,
      // whether to start the plugin in the enabled state
      enabled: !this.isCbioPortal,
      // title of add bend point menu item (User may need to adjust width of menu items according to length of this option)
      addBendMenuItemTitle: "Add Bend Point",
      // title of remove bend point menu item (User may need to adjust width of menu items according to length of this option)
      removeBendMenuItemTitle: "Remove Bend Point",
      handleReconnectEdge: this.reconnectEdge.bind(this)
    };
    this.edgeEditing = this.cy.edgeEditing(edgeEditingOptions);
    this.portalAccessor = portalAccessor;

    if (this.isCollaborative) {
      this.shareDBManager = shareDBManager;
    }

    this.FIT_CONSTANT = 50;
    this.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties);
    this.observers = [];
    this.genomicDataOverlayManager = new managers_GenomicDataOverlayManager(this.cy);
    this.svgExporter = new utils_SVGExporter(this.edgeEditing, this);
    this.selectedNodeStack = {};
    this.undoRedoManager = undoRedoManager;
    this.undoRedoManager.action("changePositions", this.doChangePosition, this.undoChangePosition);
    this.undoRedoManager.action("changeNodeSize", this.doChangeNodeSize, this.undoChangeNodeSize);
    this.undoRedoManager.action("changeCompoundSize", this.doChangeCompoundSize, this.undoChangeCompoundSize);
    this.undoRedoManager.action("changeName", this.doChangename, this.undoChangeName);
    this.undoRedoManager.action("hideNode", this.doHide, this.undoHide);
    this.undoRedoManager.action("showAllNodes", this.doShow, this.undoShow); // HighlightOthers is the type of highlight from the menu and by searching, while highlightInvalidGenes is for only invalid genes

    this.undoRedoManager.action("highlightInvalidGenes", this.doHighlightInvalidGenes, this.undoHighlightInvalidGenes);
    this.undoRedoManager.action("removeHighlightInvalidGenes", this.undoHighlightInvalidGenes, this.doHighlightInvalidGenes);
    this.undoRedoManager.action("highlightOthers", this.doHighlight, this.undoHighlight);
    this.undoRedoManager.action("removeOtherHighlight", this.undoHighlight, this.doHighlight);
  }

  ;
  Object.defineProperty(EditorActionsManager.prototype, "setProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index, profile) {
      this.profiles[index] = profile;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profile) {
      this.profiles.push(profile);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.profiles.length = 0;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "handleChangePositionByAlignment", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (movedNodeArr) {
      if (this.isCollaborative) this.shareDBManager.changeElementsPositionByAlignment(movedNodeArr);else this.undoRedoManager.do("changePositions", movedNodeArr);
    }
  });
  ;
  /*
   * Undo redo for changing positions of nodes via programatically (node.position)
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangePosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (movedNodes) {
      var newMovedNodes = [];

      for (var i = 0; i < movedNodes.length; i++) {
        var currentNodePosition = {
          x: movedNodes[i].node.position().x,
          y: movedNodes[i].node.position().y
        };
        newMovedNodes.push({
          node: movedNodes[i].node,
          oldPosition: currentNodePosition,
          nextPosition: movedNodes[i].nextPosition
        });
        movedNodes[i].node.position(movedNodes[i].nextPosition);
      }

      return newMovedNodes;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangePosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (movedNodes) {
      var newMovedNodes = [];

      for (var i = 0; i < movedNodes.length; i++) {
        var currentNodePosition = {
          x: movedNodes[i].node.position().x,
          y: movedNodes[i].node.position().y
        };
        newMovedNodes.push({
          node: movedNodes[i].node,
          oldPosition: movedNodes[i].oldPosition,
          nextPosition: currentNodePosition
        });
        movedNodes[i].node.position(movedNodes[i].oldPosition);
      }

      return newMovedNodes;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeNodePositionsByArrows", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedNodes) {
      if (this.isCollaborative) this.shareDBManager.changeNodePositionsShareDB(selectedNodes); //resize-node extension already deals for the movement in local mode
    }
  });
  ;
  /*
   * Undo redo for changing size of nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangeNodeSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.ele.data('w', args.newWidth);
      args.ele.data('h', args.newHeight);
      args.ele.style('width', args.newWidth);
      args.ele.style('height', args.newHeight);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangeNodeSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.ele.data('w', args.oldWidth);
      args.ele.data('h', args.oldHeight);
      args.ele.style('width', args.oldWidth);
      args.ele.style('height', args.oldHeight);
      return args;
    }
  });
  ;
  /*
   * Undo redo for changing size of compounds
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangeCompoundSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.ele.style('min-width', args.newMinWidth);
      args.ele.style('min-width-bias-left', args.newMinWidthBiasLeft);
      args.ele.style('min-width-bias-right', args.newMinWidthBiasRight);
      args.ele.style('min-height', args.newMinHeight);
      args.ele.style('min-height-bias-top', args.newMinHeightBiasTop);
      args.ele.style('min-height-bias-bottom', args.newMinHeightBiasBottom);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangeCompoundSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      if (args.oldMinWidth == undefined) {
        args.ele.style('min-width', 0);
        args.ele.style('min-width-bias-left', 0);
        args.ele.style('min-width-bias-right', 0);
      } else {
        args.ele.style('min-width', args.oldMinWidth);
        args.ele.style('min-width-bias-left', args.oldMinWidthBiasLeft);
        args.ele.style('min-width-bias-right', args.oldMinWidthBiasRight);
      }

      if (args.oldMinHeight == undefined) {
        args.ele.style('min-height', 0);
        args.ele.style('min-height-bias-top', 0);
        args.ele.style('min-height-bias-bottom', 0);
      } else {
        args.ele.style('min-height', args.oldMinHeight);
        args.ele.style('min-height-bias-top', args.oldMinHeightBiasTop);
        args.ele.style('min-height-bias-bottom', args.oldMinHeightBiasBottom);
      }

      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newName) {
      if (this.isCollaborative) {
        this.shareDBManager.changeName(ele, newName);
      } else {
        this.changeNameCy(ele, newName);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeNameCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newName) {
      var currentName = ele.data('name');
      var args = {
        ele: ele,
        oldName: currentName,
        newName: newName
      };
      this.undoRedoManager.do('changeName', args);
    }
  });
  ;
  /*
   * Undo redo for changing name of nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangename", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      var currentName = args.ele.data('name');
      var newArgs = {
        ele: args.ele,
        newName: args.newName,
        oldName: currentName
      };
      args.ele.data('name', args.newName);
      args.ele.css('content', args.newName);
      return newArgs;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      var currentName = args.ele.data('name');
      var newArgs = {
        ele: args.ele,
        newName: args.newName,
        oldName: currentName
      };
      args.ele.data('name', args.oldName);
      args.ele.css('content', args.oldName);
      return newArgs;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "hideSelectedNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      //Hides the selected elements
      var sel = this.cy.nodes(":selected");
      var nodesToHide = sel;
      var b = true; //Hides the parents if they have no children

      sel.parent().each(function (parent) {
        b = true;
        parent.children().each(function (ch) {
          if (!ch.selected()) {
            if (ch.visible()) b = false;
          }
        });
        if (b) nodesToHide = nodesToHide.add(parent);
      });
      this.cy.elements(":selected").unselect();
      if (this.isCollaborative) this.shareDBManager.changeVisibility(nodesToHide, true);else this.undoRedoManager.do('hideNode', nodesToHide);
    }
  });
  ;
  /*
   * Undo redo for hiding nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doHide", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.hide();
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoHide", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.show();
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "showAllNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var hid = this.cy.nodes(":hidden");
      if (this.isCollaborative) this.shareDBManager.changeVisibility(hid, false);else this.undoRedoManager.do('showAllNodes', hid);
    }
  });
  ;
  /*
   * Undo redo for showing all nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doShow", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.show();
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoShow", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.hide();
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "highlightElementsInitially", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (invalidHighlightedGenesIDs, invalidGenesIDs, highlightedGenesIDs, highlightedEdgesIDs, hiddenGenesIDs) {
      for (var i in invalidHighlightedGenesIDs) {
        this.cy.$('#' + invalidHighlightedGenesIDs[i]).addClass('invalidGeneHighlight');
      }

      for (var i in invalidGenesIDs) {
        this.cy.$('#' + invalidGenesIDs[i]).addClass('invalidGene');
      }

      for (var i in highlightedGenesIDs) {
        this.cy.$('#' + highlightedGenesIDs[i]).addClass('highlightedNode');
      }

      for (var i in highlightedEdgesIDs) {
        this.cy.$('#' + highlightedEdgesIDs[i]).addClass('highlightedEdge');
      }

      for (var i in hiddenGenesIDs) {
        this.cy.$('#' + hiddenGenesIDs[i]).hide();
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "validateGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var geneSymbols = this.getGeneSymbols();
      this.portalAccessor.validateGenes(geneSymbols, this);
    }
  }); //Get all gene symbols

  Object.defineProperty(EditorActionsManager.prototype, "getGeneSymbols", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var geneSymbols = [];
      this.cy.nodes().forEach(function (gene) {
        if (gene.data().type === "GENE") geneSymbols.push(gene.data().name);
      });
      return geneSymbols;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "highlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (validGeneSymbols) {
      if (this.isCollaborative) {
        var invalidGenes = [];
        this.cy.nodes().forEach(function (gene) {
          if (gene.data().type === "GENE") {
            var geneName = gene.data().name;
            if (validGeneSymbols.indexOf(geneName) < 0) invalidGenes.push(gene.id());
          }
        });
        this.shareDBManager.changeHighlightInvalidGenes(invalidGenes, true); // TODO: Amendment by Ziya

        /*
        if (invalidGenes.length > 0)
            this.notificationManager.createNotification("Invalid genes are highlighted","fail");
        else
            this.notificationManager.createNotification("All gene symbols are valid","success");*/
      } else {
        var highlightedGenes = this.cy.collection();
        this.cy.nodes().forEach(function (gene) {
          if (gene.data().type === "GENE") {
            var geneName = gene.data().name;
            if (validGeneSymbols.indexOf(geneName) < 0) highlightedGenes = highlightedGenes.add(gene);
          }
        }); // TODO: Amendment by Ziya

        /*
                    if (highlightedGenes.size() > 0)
                        this.notificationManager.createNotification("Invalid genes are highlighted","fail");
                    else
                        this.notificationManager.createNotification("All gene symbols are valid","success");*/

        var nodesToAddInvalidHighlight = this.cy.collection();
        highlightedGenes.forEach(function (ele) {
          if (!ele.hasClass('invalidGeneHighlight') && !ele.hasClass('invalidGene')) nodesToAddInvalidHighlight = nodesToAddInvalidHighlight.union(ele);
        });
        this.undoRedoManager.do('highlightInvalidGenes', nodesToAddInvalidHighlight);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeInvalidGeneHighlights", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (actions) {
      if (this.isCollaborative) {
        var geneIDs = [];
        this.cy.nodes().forEach(function (gene) {
          if (gene.data().type === "GENE") {
            if (gene.hasClass('invalidGeneHighlight') || gene.hasClass('invalidGene')) geneIDs.push(gene.id());
          }
        });
        this.shareDBManager.changeHighlightInvalidGenes(geneIDs, false);
      } else {
        var nodesToRemoveInvalidHighlight = this.cy.collection();
        this.cy.nodes().forEach(function (ele) {
          if (ele.hasClass('invalidGeneHighlight') || ele.hasClass('invalidGene')) nodesToRemoveInvalidHighlight = nodesToRemoveInvalidHighlight.union(ele);
        });
        actions.push({
          name: "removeHighlightInvalidGenes",
          param: nodesToRemoveInvalidHighlight
        }); // this.undoRedoManager.do('removeHighlightInvalidGenes', nodesToRemoveInvalidHighlight);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "doHighlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.hasClass('highlightedNode')) {
          n.removeClass('highlightedNode');
          n.addClass("invalidGeneHighlight");
        } else n.addClass("invalidGene");
      });
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoHighlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.hasClass('invalidGeneHighlight')) {
          n.removeClass('invalidGeneHighlight');
          n.addClass("highlightedNode");
        } else n.removeClass("invalidGene");
      });
      return args;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "highlightSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var sel = this.cy.elements(":selected");
      sel.unselect();
      var elementsToHighlight = this.cy.collection();
      sel.forEach(function (ele) {
        if (!ele.hasClass('invalidGeneHighlight') && !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge')) elementsToHighlight = elementsToHighlight.union(ele);
      });
      if (this.isCollaborative) this.shareDBManager.changeHighlight(elementsToHighlight, true);else this.undoRedoManager.do('highlightOthers', elementsToHighlight);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "highlightNeighbors", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var sel = this.cy.elements(":selected");
      var neighbors = sel.neighborhood();
      neighbors = neighbors.union(sel);
      neighbors.unselect();
      var elementsToHighlight = this.cy.collection();
      neighbors.forEach(function (ele) {
        if (!ele.hasClass('invalidGeneHighlight') && !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge')) elementsToHighlight = elementsToHighlight.union(ele);
      });
      if (this.isCollaborative) this.shareDBManager.changeHighlight(elementsToHighlight, true);else this.undoRedoManager.do('highlightOthers', elementsToHighlight);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "highlightBySearch", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      if (this.isCollaborative) this.shareDBManager.changeHighlight(args, true);else this.undoRedoManager.do('highlightOthers', args);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeOtherHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (actions) {
      var nodesToRemoveHighlight = this.cy.collection(); //TODO cytoscape selectors may provide more handy functionality instead of iterating over !

      this.cy.elements().forEach(function (ele) {
        if (ele.hasClass('highlightedNode') || ele.hasClass('highlightedEdge') || ele.hasClass('invalidGeneHighlight')) nodesToRemoveHighlight = nodesToRemoveHighlight.add(ele);
      });
      if (this.isCollaborative) this.shareDBManager.changeHighlight(nodesToRemoveHighlight, false);else actions.push({
        name: "removeOtherHighlight",
        param: nodesToRemoveHighlight
      }); // this.undoRedoManager.do('removeOtherHighlight', nodesToRemoveHighlight);
    }
  });
  ;
  /*
   * Undo redo for highlighting of nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.isEdge()) n.addClass("highlightedEdge");else {
          if (n.hasClass('invalidGene')) {
            n.removeClass("invalidGene");
            n.addClass("invalidGeneHighlight");
          } else n.addClass("highlightedNode");
        }
      });
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.isEdge()) n.removeClass("highlightedEdge");else {
          if (n.hasClass('invalidGeneHighlight')) {
            n.removeClass("invalidGeneHighlight");
            n.addClass("invalidGene");
          } else n.removeClass("highlightedNode");
        }
      });
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeAllHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var actions = [];
      this.removeInvalidGeneHighlights(actions);
      this.removeOtherHighlight(actions);
      this.cy.undoRedo().do("batch", actions);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "postLayout", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        //Previously this.cy.nodes() was sent as an argument in moveElements function but it caused a problem when
        // the compound node was moved before the child nodes
        var movedNodes = this.cy.collection();
        var parentNodes = this.cy.collection();
        this.cy.nodes().forEach(function (node) {
          if (!node.isParent()) movedNodes = movedNodes.add(node);else parentNodes = parentNodes.add(node);
        });
        this.moveElements(movedNodes);
        this.moveElements(parentNodes);
        var newState = {
          zoomLevel: this.cy.zoom(),
          panLevel: this.cy.pan()
        };
        this.updateGlobalOptions(newState);
      }
    }
  });
  ;
  /*
  * Gets the first empty index from the list in cloud model
  * **/

  Object.defineProperty(EditorActionsManager.prototype, "getEmptyGroupID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) return this.shareDBManager.getEmptyGroupID();else return this.genomicDataOverlayManager.getEmptyGroupID();
    }
  });
  ;
  /*
   * Gets the first empty index from the list in cloud model
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "groupGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerNames, groupID) {
      return this.shareDBManager.groupGenomicData(cancerNames, groupID);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addPubmedIDs", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge, pubmedIDs) {
      if (this.isCollaborative) {
        this.shareDBManager.addPubmedIDs(edge.id(), pubmedIDs);
      } else {
        var pubmedArray = edge.data('pubmedIDs');

        var validPubmedIDs = _.filter(pubmedIDs, function (id) {
          return !isNaN(id);
        });

        pubmedArray.push.apply(pubmedArray, validPubmedIDs);
        edge.data('pubmedIDs', _.uniq(pubmedArray));
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removePubmedID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge, pubmedIDs) {
      if (this.isCollaborative) {
        this.shareDBManager.removePubmedID(edge.id(), pubmedIDs);
      } else {
        var pubmedArray = edge.data('pubmedIDs');
        edge.data('pubmedIDs', _.difference(pubmedArray, pubmedIDs));
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateEdgeBendPoints", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      if (this.isCollaborative) {
        var numberOfBendPoints = 0;
        if (this.edgeEditing.getSegmentPoints(edge) !== undefined) numberOfBendPoints = this.edgeEditing.getSegmentPoints(edge).length / 2;
        var bendPointsArray = [];

        for (var j = 0; j < numberOfBendPoints; j++) {
          bendPointsArray.push({
            x: this.edgeEditing.getSegmentPoints(edge)[2 * j],
            y: this.edgeEditing.getSegmentPoints(edge)[2 * j + 1]
          });
        } // edge.data("bendPointPositions", bendPointsArray);
        // edgeEditing.initBendPoints(edge);


        this.shareDBManager.updateEdgeBendPoints(edge.id(), bendPointsArray);
      }
    }
  }); //Related to order the nodes according to the selection of user

  Object.defineProperty(EditorActionsManager.prototype, "pushSelectedNodeStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.selectedNodeStack[ele.id()] = ele;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeElementFromSelectedNodeStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var nodeID = ele.id();
      if (nodeID in this.selectedNodeStack) delete this.selectedNodeStack[ele.id()];
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "clearSelectedNodeStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.selectedNodeStack = {};
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "exportSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.svgExporter.exportGraph(this.cy.nodes(), this.cy.edges());
    }
  }); //Simple observer-observable pattern for views!!!!!

  Object.defineProperty(EditorActionsManager.prototype, "registerObserver", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (observer) {
      this.observers.push(observer);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "notifyObservers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var i in this.observers) {
        var observer = this.observers[i];
        observer.notify();
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "registerGenomicDataObserver", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (observer) {
      this.genomicDataOverlayManager.registerObserver(observer);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateGenomicDataVisibility", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataMap) {
      if (this.isCollaborative) {
        //TODO compound OP
        // this.shareDBManager.clearGenomicVisData();
        this.shareDBManager.addGenomicVisibilityData(dataMap);
      } else {
        for (var _key in dataMap) {
          this.genomicDataOverlayManager.updateGenomicDataVisibility(_key, dataMap[_key]);
        }

        this.genomicDataOverlayManager.showGenomicData();
      }
    }
  }); //Global options related functions, zoom etc..

  Object.defineProperty(EditorActionsManager.prototype, "getGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return {
        zoomLevel: this.cy.zoom(),
        panLevel: this.cy.pan()
      };
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "changeGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var globalOptions = op.li;
      this.cy.zoom(globalOptions.zoomLevel);
      this.cy.pan(globalOptions.panLevel);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newOptions) {
      if (this.isCollaborative) this.shareDBManager.updateGlobalOptions(newOptions);
    }
  }); //Layout properties related functions

  Object.defineProperty(EditorActionsManager.prototype, "saveLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newLayoutProps) {
      if (this.isCollaborative) {
        // Call a real time function that updated real time object and
        // its callback (updateLayoutPropertiesCallback) will handle sync of this object
        // across collaborators
        this.shareDBManager.updateLayoutProperties(newLayoutProps);
      } else {
        this.layoutProperties = _.clone(newLayoutProps);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateLayoutPropertiesCallback", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var newLayoutProps = op.li;
      this.layoutProperties = _.clone(newLayoutProps);
      modals_LayoutProperties.layoutProperties = _.clone(this.layoutProperties); //Notify observers to reflect changes on colalborative object to the views

      this.notifyObservers();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "performLayout", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.do("layout", {
        options: this.layoutProperties,
        eles: null,
        zoom: this.cy.zoom(),
        pan: this.cy.pan()
      });
    }
  });
  ; //Node Related Functions

  Object.defineProperty(EditorActionsManager.prototype, "addNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      if (this.isCollaborative) {
        this.addNewNodeToShareDB(nodeData, posData);
      } else {
        this.addNodetoCy(nodeData, posData);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      for (var i in nodes) {
        this.addNode(nodes[i].data, nodes[i].position);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNodesCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      var nodeArr = [];

      for (var i in nodes) {
        var nodeData = nodes[i].data;
        var posData = nodes[i].position;
        var newNode = {
          group: "nodes",
          data: nodeData,
          position: {}
        };

        if (nodeData.parent === undefined) {
          delete newNode.data.parent;
        }

        if (posData) {
          newNode.position = {
            x: posData.x,
            y: posData.y
          };
        }

        nodeArr[i] = newNode;
      }

      this.cy.add(nodeArr);
      this.cy.nodes().updateCompoundBounds();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNodetoCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      var newNode = {
        group: "nodes",
        data: nodeData,
        position: {}
      };

      if (nodeData.parent === undefined) {
        delete newNode.data.parent;
      }

      if (posData) {
        newNode.position = {
          x: posData.x,
          y: posData.y
        };
      } //his.cy.add(newNode);


      this.cy.nodes().updateCompoundBounds();
      this.undoRedoManager.do("add", newNode); //Width was not properly updated only by changing data property

      var thatEle = this.cy.getElementById(nodeData.id);
      thatEle.style('width', thatEle.data('w'));
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "shareDBNodeAddRemoveEventCallBack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      //Get real time node object and sync it to node addition or removal
      var isRemove = Object.keys(op)[1] === 'od';
      var node = op.oi || op.od; //Removal Operation

      if (isRemove) {
        var nodeID = op.p[1]; //Remove element from existing graph

        var cyEle = this.cy.$("#" + nodeID);
        this.removeElementCy(cyEle);
        this.cy.nodes().updateCompoundBounds();
      } //Addition Operation
      else {
          this.addNewNodeLocally(node);
        }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewNodeLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (realtimeNode) {
      var nodeData = {
        id: realtimeNode.id,
        type: realtimeNode.type,
        name: realtimeNode.name,
        parent: realtimeNode.parent,
        w: realtimeNode.w,
        h: realtimeNode.h
      };

      if (realtimeNode.x != "undefined" && realtimeNode.y != "undefined") {
        this.addNodetoCy(nodeData, {
          x: realtimeNode.x,
          y: realtimeNode.y
        });
      } else {
        // TODO: Amendment by Ziya
        this.addNodetoCy(nodeData, null);
      }

      this.cy.nodes().updateCompoundBounds();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewNodeToShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      this.shareDBManager.addNewNode(nodeData, posData);
    }
  });
  ; //Edge related functions

  Object.defineProperty(EditorActionsManager.prototype, "addEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      if (this.isCollaborative) {
        this.addNewEdgeShareDB(edgeData);
      } else {
        this.addNewEdgetoCy(edgeData);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addEdges", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edges) {
      for (var i in edges) {
        this.addEdge(edges[i].data);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addEdgesCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edges) {
      var newEdges = [];

      for (var i in edges) {
        var newEdge = {
          group: "edges",
          data: edges[i].data
        };
        newEdges.push(newEdge);
      }

      this.cy.add(newEdges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewEdgeShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      this.shareDBManager.addNewEdge(edgeData);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewEdgetoCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      var newEdge = {
        group: "edges",
        data: edgeData
      };
      this.undoRedoManager.do("add", newEdge);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "shareDBEdgeAddRemoveEventCallBack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      //Get real time node object and sync it to node addition or removal
      var isRemove = Object.keys(op)[1] === 'od';
      var edge = op.oi || op.od; //Removal Operation

      if (isRemove) {
        var edgeID = op.p[1]; //Remove element from existing graph

        var cyEle = this.cy.$("#" + edgeID);
        this.removeElementCy(cyEle);
      } //Addition Operation
      else {
          this.addNewEdgeLocally(edge);
        }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewElementsLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (realTimeNodeArray, realTimeEdgeArray) {
      var nodeList = [];
      var nodeMap = {};

      for (var i in realTimeNodeArray) {
        var realTimeNode = realTimeNodeArray[i];
        var nodeID = realTimeNode.id; //Added for backward compatibility when width was not defined

        var nodeWidth = realTimeNode.w == undefined ? 150 : realTimeNode.w;
        var nodeHeight = realTimeNode.h == undefined ? 52 : realTimeNode.h;
        var compoundMinWidth = realTimeNode.minWidth == undefined ? 0 : realTimeNode.minWidth;
        var compoundMinWidthBiasLeft = realTimeNode.minWidthBiasLeft == undefined ? 0 : realTimeNode.minWidthBiasLeft;
        var compoundMinWidthBiasRight = realTimeNode.minWidthBiasRight == undefined ? 0 : realTimeNode.minWidthBiasRight;
        var compoundMinHeight = realTimeNode.minHeight == undefined ? 0 : realTimeNode.minHeight;
        var compoundMinHeightBiasTop = realTimeNode.minHeightBiasTop == undefined ? 0 : realTimeNode.minHeightBiasTop;
        var compoundMinHeightBiasBottom = realTimeNode.minHeightBiasBottom == undefined ? 0 : realTimeNode.minHeightBiasBottom;
        var nodeData = {
          group: 'nodes',
          // TODO: Amendment by Ziya
          position: {},
          data: {
            id: nodeID,
            type: realTimeNode.type,
            name: realTimeNode.name,
            parent: realTimeNode.parent,
            w: nodeWidth,
            h: nodeHeight
          },
          style: {
            'width': nodeWidth,
            'height': nodeHeight,
            'min-width': compoundMinWidth,
            'min-width-bias-left': compoundMinWidthBiasLeft,
            'min-width-bias-right': compoundMinWidthBiasRight,
            'min-height': compoundMinHeight,
            'min-height-bias-top': compoundMinHeightBiasTop,
            'min-height-bias-bottom': compoundMinHeightBiasBottom
          }
        };

        if (nodeData.data.parent === undefined) {
          delete nodeData.data.parent;
        }

        if (realTimeNode.x && realTimeNode.y) {
          nodeData.position = {
            x: realTimeNode.x,
            y: realTimeNode.y
          };
        }

        nodeMap[nodeID] = nodeData;
        nodeList.push(nodeData);
      }

      var edgeList = [];

      for (var i in realTimeEdgeArray) {
        var edge = realTimeEdgeArray[i];
        var edgeID = edge.id; //If source and and target is somehow lost in remote model do not create this edge

        if (!(edge.source in nodeMap && edge.target in nodeMap)) continue;
        var edgeData = {
          group: 'edges',
          data: {
            id: edgeID,
            type: edge.type,
            source: edge.source,
            target: edge.target,
            pubmedIDs: edge.pubmedIDs,
            name: edge.name,
            bendPointPositions: edge.bendPoint
          }
        };
        edgeList.push(edgeData);
      }

      this.cy.add(nodeList);
      this.cy.add(edgeList);
      this.edgeEditing.initBendPoints(this.cy.edges());
      this.cy.nodes().updateCompoundBounds();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addNewEdgeLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var edgeData = {
        id: edge.id,
        type: edge.type,
        source: edge.source,
        target: edge.target,
        pubmedIDs: edge.pubmedIDs,
        name: edge.name,
        bendPointPositions: edge.bendPoint
      };
      this.addNewEdgetoCy(edgeData);
      this.edgeEditing.initBendPoints(this.cy.getElementById(edge.id));
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "reconnectEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sourceID, targetID, edgeData) {
      if (this.isCollaborative) {
        var edge = this.cy.getElementById(edgeData.id);
        this.reconnectEdgeInShareDB(sourceID, targetID, edgeData);
      } else {
        var location = {
          source: sourceID,
          target: targetID
        };
        var edge = this.cy.getElementById(edgeData.id);
        edge.move(location);
      }

      return this.cy.getElementById(edgeData.id);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "reconnectEdgeInShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sourceID, targetID, edgeData) {
      this.shareDBManager.reconnectEdge(sourceID, targetID, edgeData);
    }
  });
  ; //Removal functions

  Object.defineProperty(EditorActionsManager.prototype, "removeElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      if (this.isCollaborative) {
        this.removeElementsFromShareDB(ele);
      } else {
        this.removeElementsCy(ele);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.undoRedoManager.do("remove", ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementsCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.undoRedoManager.do("remove", ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementsFromShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles) {
      var self = this;
      eles.forEach(function (ele) {
        self.shareDBManager.removeElement(ele.id());
      });
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementFromShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.shareDBManager.removeElement(ele.id());
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeParents", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles, newParentId) {
      if (this.isCollaborative) {
        this.changeParentShareDB(eles, newParentId);
      } else {
        var parentData = newParentId ? newParentId : null; // Old manual way to change parents in local mode
        //this.changeParentCy(eles, newParentId);
        //Save element's previous width & height in dim array

        var dim_1 = [];
        var id_1 = [];
        eles.forEach(function (ele) {
          var parameters = {
            id: ele.id(),
            width: ele.style("width"),
            height: ele.style("height")
          };
          dim_1.push(parameters);
          id_1.push(ele.id());
        });
        var parentElem = this.cy.getElementById(parentData);
        var param = {
          firstTime: true,
          parentData: parentData,
          nodes: eles,
          posDiffX: !parentData ? 0 : parentElem.position('x') - eles[0].position('x'),
          posDiffY: !parentData ? 0 : parentElem.position('y') - eles[0].position('y')
        };
        this.undoRedoManager.do('changeParent', param); //The elements after change parent operation are different so we find them by using the saved ids
        // and add them to the collection

        var collection = this.cy.collection();

        for (var i in id_1) {
          var elementById = this.cy.getElementById(id_1[i]);
          collection = collection.add(elementById);
        } //Set their previous size to the new elements in the collection


        collection.forEach(function (ele, i) {
          if (ele.id() == dim_1[i].id) ele.style("width", dim_1[i].width);
          ele.style("height", dim_1[i].height);
        });
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeParentShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles, newParentId) {
      var classRef = this;

      function getTopLevelParents(eles) {
        var tpMostNodes = classRef.cy.collection();
        var parentMap = {}; //Get all parents

        eles.forEach(function (node) {
          if (node.isParent()) parentMap[node.id()] = node;
        }); //Get all parents

        eles.forEach(function (node) {
          var nodeParent = node.parent();
          if (parentMap[nodeParent.id()] === undefined) tpMostNodes = tpMostNodes.union(node);
        });
        return tpMostNodes;
      }

      var NodeObj =
      /** @class */
      function () {
        function NodeObj(nodeObj) {
          Object.defineProperty(this, "nodeRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          });
          Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          });
          this.nodeRef = nodeObj;
          this.children = [];
        }

        return NodeObj;
      }();

      var connectedEdges = eles.connectedEdges(); // Traverses given elements and constructs subgraph relations
      // creates a nested structure into rootnodeObj

      function traverseNodes(eles, rootNodeObj) {
        eles.forEach(function (ele) {
          connectedEdges = connectedEdges.union(ele.connectedEdges());

          if (ele.isParent()) {
            rootNodeObj.children.push(new NodeObj(ele));
            var lengthOfChildrenArray = rootNodeObj.children.length;
            traverseNodes(ele.children(), rootNodeObj.children[lengthOfChildrenArray - 1]);
          } else {
            rootNodeObj.children.push(new NodeObj(ele));
          }
        });
      } //Create new collection


      var topMostNodes = getTopLevelParents(eles);
      var rootNodeR = new NodeObj(null);
      traverseNodes(topMostNodes, rootNodeR);
      this.shareDBManager.changeParent(rootNodeR, newParentId, connectedEdges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeParentCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles, newParentId) {
      var lockedNodes = {};
      var self = this;

      function removeNodes(nodes) {
        //Get removed edges first
        var removedEles = nodes.connectedEdges().remove();
        var children = nodes.children();

        if (children != null && children.length > 0) {
          children.forEach(function (childNode) {
            lockedNodes[childNode.id()] = true;
          });
          removedEles = removedEles.union(removeNodes(children));
        }

        removedEles = removedEles.union(nodes.remove());
        self.cy.nodes().updateCompoundBounds();
        return removedEles;
      }

      var removedEles = removeNodes(eles);
      this.undoRedoManager.do("remove", removedEles);

      for (var i = 0; i < removedEles.length; i++) {
        var removedNode = removedEles[i]; //Just alter the parent id of corresponding nodes !

        if (removedNode.isEdge() || lockedNodes[removedNode.id()]) {
          continue;
        }

        removedNode._private.data.parent = newParentId;

        if (removedNode._private.parent) {
          delete removedNode._private.parent;
        }
      }

      self.cy.add(removedEles);
      this.undoRedoManager.do("add", removedEles);
      self.cy.nodes().updateCompoundBounds();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "moveElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles) {
      var classRef = this; //Sync movement to real time api

      if (this.isCollaborative) {
        eles.forEach(function (ele) {
          classRef.shareDBManager.moveElement(ele);
        });
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "resizeElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      if (this.isCollaborative) {
        if (!ele.isParent()) {
          var previousWidth = ele.width();
          var previousHeight = ele.height(); //Sync movement to real time api

          this.shareDBManager.resizeElement(ele, previousWidth, previousHeight);
        } else {
          var minWidth = ele.style('min-width');
          var minWidthBiasLeft = ele.style('min-width-bias-left');
          var minWidthBiasRight = ele.style('min-width-bias-right');
          var minHeight = ele.style('min-height');
          var minHeightBiasTop = ele.style('min-height-bias-top');
          var minHeightBiasBottom = ele.style('min-height-bias-bottom'); //Sync movement to real time api

          this.shareDBManager.resizeCompound(ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom);
        }
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "mergeGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      if (this.isCollaborative) {
        //Collaborative usage
        this.shareDBManager.mergeGraph(nodes, edges);
      } else {
        //Local usage file load
        this.mergeGraphCy(nodes, edges);
      }

      this.fitGraph();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "mergeGraphCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      //Define arrays and maps
      var nodesToBeAdded = [];
      var edgesToBeAdded = [];
      var nodeMap = {}; //Iterate over nodes and find nodes that does not exist in current graph by looking their name

      for (var index in nodes) {
        var ele = nodes[index];
        nodeMap[ele.data.id] = ele;

        if (this.cy.filter('node[name = "' + ele.data.name + '"]').length <= 0) {
          delete ele.data.id; //TODO need to update parent ?

          nodesToBeAdded.push(ele);
        }
      }

      this.cy.add(nodesToBeAdded); //Iterate over all edges

      for (var index in edges) {
        //Get corresponding source and target node in merge file
        var ele = edges[index];
        var sourceNode = nodeMap[ele.data.source];
        var targetNode = nodeMap[ele.data.target]; //Check if there are nodes with same name in current graph

        var cySourceNode = this.cy.nodes('[name="' + sourceNode.data.name + '"]');
        var targetNode = this.cy.nodes('[name="' + targetNode.data.name + '"]');

        if (cySourceNode.length > 0) {
          ele.data.source = cySourceNode.id();
        }

        if (targetNode.length > 0) {
          ele.data.target = targetNode.id();
        }

        if (targetNode.length < 0 && cySourceNode.length < 0) {
          continue;
        }

        var edgesBtw = this.cy.filter('edge[source = "' + cySourceNode.id() + '"][target = "' + targetNode.id() + '"]'); //We assume there could be one edge between source and target node with same type

        var isFound = false;
        edgesBtw.forEach(function (edge) {
          if (edge.data().type == ele.data.type) {
            isFound = true;
            return false;
          } //TODO: AMENDMENT by Ziya


          return true;
        });

        if (!isFound) {
          delete ele.data.id;
          edgesToBeAdded.push(ele);
        }
      }

      this.cy.add(edgesToBeAdded);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "fitGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        this.cy.fit(this.FIT_CONSTANT);
        var newState = {
          zoomLevel: this.cy.zoom(),
          panLevel: this.cy.pan()
        };
        this.updateGlobalOptions(newState);
      } else {
        this.cy.fit(this.FIT_CONSTANT);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "loadFile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      if (this.isCollaborative) {
        //Real time load graph
        this.loadfileShareDB(nodes, edges);
      } else {
        //Local usage file load
        this.loadFileCy(nodes, edges);
      }

      this.cy.edgeEditing('get').initBendPoints(this.cy.edges());
      this.fitGraph();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "loadFileCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      //Remove all elements
      this.removeElementCy(this.cy.elements());
      this.addNodesCy(nodes);
      this.addEdgesCy(edges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "loadfileShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      this.shareDBManager.loadGraph(nodes, edges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeAllElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        this.shareDBManager.removeAllElements();
      } else {
        this.cy.remove(this.cy.elements());
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, isHighlighted) {
      if (isHighlighted) this.undoRedoManager.do('highlightOthers', ele);else this.undoRedoManager.do('removeOtherHighlight', ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateVisibility", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, isHidden) {
      if (isHidden) ele.hide();else ele.show();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateElementCallback", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var ele = op.oi;
      var eleID = ele.id;
      var cyEle = this.cy.$("#" + eleID);
      this.changeNameCy(cyEle, ele.name);

      if (cyEle.isNode()) {
        //Width and height of simple nodes and compounds is changed differently
        if (cyEle.isParent()) {
          cyEle.style("min-width", ele.minWidth);
          cyEle.style("min-width-bias-left", ele.minWidthBiasLeft);
          cyEle.style("min-width-bias-right", ele.minWidthBiasRight);
          cyEle.style("min-height", ele.minHeight);
          cyEle.style("min-height-bias-top", ele.minHeightBiasTop);
          cyEle.style("min-height-bias-bottom", ele.minHeightBiasBottom);
        } else {
          cyEle.data.w = ele.w;
          cyEle.data.h = ele.h;
          cyEle.style("width", ele.w);
          cyEle.style("height", ele.h); //Position is changed only for simple nodes because the
          //position of compounds is defined by simple nodes' position

          cyEle.position({
            x: ele.x,
            y: ele.y
          });
        }

        this.updateVisibility(cyEle, ele.isHidden);
        this.updateHighlight(cyEle, ele.isHighlighted);

        if (ele.isInvalidGene) {
          this.doHighlightInvalidGenes(cyEle);
        } else {
          this.undoHighlightInvalidGenes(cyEle);
        } //Refresh grapples when the node being changed from another collaborator is selected in current window
        // this.cy.nodeResize('get').refreshGrapples();

      } else if (cyEle.isEdge()) {
        var pubmedArray = ele.pubmedIDs;
        cyEle.data('pubmedIDs', pubmedArray);
        this.updateHighlight(cyEle, ele.isHighlighted);
        var bendPoint = ele.bendPoint;
        var numberOfBendPositions = cyEle.data('bendPointPositions').length; // Holds the number of bend positions in data before being updated
        //If edge is reconnected

        if (ele.source !== cyEle.source().id() || ele.target !== cyEle.target().id()) {
          var location = {
            source: ele.source,
            target: ele.target
          };
          cyEle.move(location); //make sure that bend points are same

          this.updateEdgeBendPoints(cyEle);
        } else {
          cyEle.data('bendPointPositions', bendPoint);
          if (numberOfBendPositions !== undefined && numberOfBendPositions > 0) this.edgeEditing.deleteSelectedBendPoint(cyEle, 0);
          this.edgeEditing.initBendPoints(cyEle);
        }
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "getGenomicDataSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      // @ts-ignore
      return this.genomicDataOverlayManager.generateSVGForNode(node);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "getOncoprintDataSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      return this.genomicDataOverlayManager.generateOncoprintForPatientNode(node);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        this.shareDBManager.clearGenomicData();
      } else {
        // TODO wrap this in afunction in genomic data overlay manager
        this.genomicDataOverlayManager.clearAllGenomicData();
        this.genomicDataOverlayManager.hideGenomicData();
        this.genomicDataOverlayManager.notifyObservers();
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData) {
      var groupID = this.getEmptyGroupID();

      if (this.isCollaborative) {
        var parsedGenomicData = this.genomicDataOverlayManager.prepareGenomicDataShareDB(genomicData);
        this.shareDBManager.addGenomicData(parsedGenomicData.genomicDataMap);
        this.shareDBManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap), groupID);
        this.shareDBManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
      } else {
        this.genomicDataOverlayManager.addGenomicDataLocally(genomicData, groupID);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "adjustVisibilityShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId, isEnabled) {
      var targetProfileIndex = this.profiles.map(function (profile) {
        return profile.profileId;
      }).indexOf(profileId);
      this.setProfile(targetProfileIndex, __assign(__assign({}, this.profiles[targetProfileIndex]), {
        enabled: isEnabled
      }));
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addToProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId) {
      // Check if this profile already exists
      if (this.profiles.map(function (profile) {
        return profile.profileId;
      }).includes(profileId)) {
        return;
      }

      this.addProfile({
        profileId: profileId,
        enabled: true
      });
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addPortalGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData, groupID) {
      if (this.isCollaborative) {
        var parsedGenomicData = this.genomicDataOverlayManager.preparePortalGenomicDataShareDB(genomicData);
        this.shareDBManager.addGenomicData(parsedGenomicData.genomicDataMap);
        this.shareDBManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap), groupID);
        this.shareDBManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
      } else {
        this.genomicDataOverlayManager.addPortalGenomicData(genomicData, groupID);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "shareDBGenomicDataHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var isRemove = Object.keys(op)[1] === 'od';
      var newData = op.oi;
      var geneSymbol = op.p[1];

      if (!isRemove) {
        this.genomicDataOverlayManager.addGenomicDataWithGeneSymbol(geneSymbol, newData);
      } // Removal
      else {
          this.genomicDataOverlayManager.removeGenomicDataWithGeneSymbol(geneSymbol);
        }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "shareDBGenomicDataGroupChangeHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var _this = this;

      var isRemove = Object.keys(op)[1] === 'od';
      var data = op.oi;
      var key = op.p[1]; // Addition

      if (!isRemove) {
        this.genomicDataOverlayManager.addGenomicGroupData(key, data);

        if (data.length !== 1) {
          console.log("Grouped genomic data expected to be of length 1");
        }

        data.forEach(function (profileId) {
          _this.addToProfiles(profileId);
        });
      } // //Removal
      // else
      // {
      //
      // }


      this.genomicDataOverlayManager.showGenomicData();
      this.genomicDataOverlayManager.notifyObservers();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "shareDBGenomicDataVisibilityHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var data = op.oi;
      var key = op.p[1];
      var isRemove = Object.keys(op)[1] === 'od'; // Addition

      if (!isRemove) {
        this.genomicDataOverlayManager.addGenomicVisData(key, data);
        this.adjustVisibilityShareDB(key, data);
      } // Removal
      else {
          this.genomicDataOverlayManager.removeGenomicVisData();
          this.removeProfiles();
        }

      this.genomicDataOverlayManager.showGenomicData();
      this.genomicDataOverlayManager.notifyObservers();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "resizeNodesToContent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      if (this.isCollaborative) {
        var visibleNumberOfData_1 = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
        var labelWithData_1 = 148 + (visibleNumberOfData_1 - 3) * 36;
        var rt_1 = this.shareDBManager;
        nodes.forEach(function (ele) {
          if (!ele.isParent()) {
            var newWidth = 150;
            var newHeight = 52;

            if (ele.data('name') != "") {
              var labelLength = ele.style('label').length * 10 + 6;
              newWidth = labelLength;
              newHeight = 24;
            }

            if (visibleNumberOfData_1 > 0) {
              newHeight = 52;

              if (visibleNumberOfData_1 < 4) {
                if (150 > newWidth) newWidth = 150;
              } else {
                if (labelWithData_1 > newWidth) newWidth = labelWithData_1;
              }
            }

            rt_1.setSizeOfElement(ele, newWidth, newHeight);
          } else {
            //Set the minWidth, minHeight and other properties of compound to 0
            rt_1.resizeCompound(ele, 0, 0, 0, 0, 0, 0);
          }
        });
      } else {
        var ur = this.cy.undoRedo();
        var actions_1 = [];
        var visibleNumberOfData_2 = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
        var labelWithData_2 = 150 + (visibleNumberOfData_2 - 3) * 36;
        nodes.forEach(function (ele) {
          if (!ele.isParent()) {
            var newWidth = 150;
            var newHeight = 52;

            if (ele.data('name') != "") {
              var labelLength = ele.style('label').length * 6 + 24;
              newWidth = labelLength;
              newHeight = 24;
            }

            if (visibleNumberOfData_2 > 0) {
              newHeight = 52;

              if (visibleNumberOfData_2 < 4) {
                if (150 > newWidth) newWidth = 150;
              } else {
                if (labelWithData_2 > newWidth) newWidth = labelWithData_2;
              }
            }

            var args = {
              ele: ele,
              oldWidth: ele.width(),
              newWidth: newWidth,
              oldHeight: ele.height(),
              newHeight: newHeight
            };
            actions_1.push({
              name: "changeNodeSize",
              param: args
            });
          } else {
            var args = {
              ele: ele,
              oldMinWidth: ele.style("min-width"),
              newMinWidth: 0,
              oldMinWidthBiasLeft: ele.style("min-width-bias-left"),
              newMinWidthBiasLeft: 0,
              oldMinWidthBiasRight: ele.style("min-width-bias-right"),
              newMinWidthBiasRight: 0,
              oldMinHeight: ele.style("min-height"),
              newMinHeight: 0,
              oldMinHeightBiasTop: ele.style("min-height-bias-top"),
              newMinHeightBiasTop: 0,
              oldMinHeightBiasBottom: ele.style("min-height-bias-bottom"),
              newMinHeightBiasBottom: 0
            };
            actions_1.push({
              name: "changeCompoundSize",
              param: args
            });
          }
        });
        ur.do("batch", actions_1);
      }

      this.cy.nodeResize('get').refreshGrapples();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager, "defaultLayoutProperties", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
      name: 'cose-bilkent',
      nodeRepulsion: 4500,
      idealEdgeLength: 50,
      edgeElasticity: 0.45,
      nestingFactor: 0.1,
      gravity: 0.25,
      numIter: 2500,
      tile: true,
      animate: true,
      randomize: false,
      gravityRangeCompound: 1.5,
      // Gravity force (constant) for compounds
      gravityCompound: 1.0,
      // Gravity range (constant)
      gravityRange: 3.8,
      // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
      tilingPaddingVertical: 10,
      // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
      tilingPaddingHorizontal: 10,
      // Initial cooling factor for incremental layout
      initialEnergyOnIncremental: 0.5,
      animationDuration: 2000,
      animationEasing: 'cubic-bezier(0.17,0.72,0.41,0.98)'
    }
  });

  EditorActionsManager_decorate([external_mobx_["observable"]], EditorActionsManager.prototype, "profiles", void 0);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "setProfile", null);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "addProfile", null);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "removeProfiles", null);

  return EditorActionsManager;
}();

/* harmony default export */ var managers_EditorActionsManager = (EditorActionsManager_EditorActionsManager);
// CONCATENATED MODULE: ./src/modals/LayoutProperties.tsx
var LayoutProperties_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var LayoutProperties_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutProperties_LayoutProperties =
/** @class */
function (_super) {
  LayoutProperties_extends(LayoutProperties, _super);

  function LayoutProperties(props) {
    var _this = _super.call(this, props) || this;

    LayoutProperties_1.layoutProperties = external_lodash_default.a.clone(managers_EditorActionsManager.defaultLayoutProperties);
    return _this;
  }

  LayoutProperties_1 = LayoutProperties;
  Object.defineProperty(LayoutProperties.prototype, "updateLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (property, val) {
      LayoutProperties_1.layoutProperties[property] = val;
    }
  });
  Object.defineProperty(LayoutProperties.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "layoutPropertiesDiv",
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.LAYOUT);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, external_react_default.a.createElement("h3", null, "Layout Properties"))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, {
        id: "layoutPropsForm",
        className: "leftText"
      }, external_react_default.a.createElement(external_react_bootstrap_["Form"], null, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "control-label",
        sm: 4
      }, "Node Repulsion:"), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.nodeRepulsion + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.nodeRepulsion = Number(e.target.value);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Ideal Edge Length:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.idealEdgeLength + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.idealEdgeLength = Number(e.target.value);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Edge Elasticity:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.edgeElasticity + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.edgeElasticity = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Nesting Factor:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.nestingFactor + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.nestingFactor = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Gravity:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.gravity + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.gravity = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Gravity Range:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.gravityRange + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.gravityRange = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Compound Gravity:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.gravityCompound + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.gravityCompound = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Compound Gravity Range:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.gravityRangeCompound + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.gravityRangeCompound = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Number of Iterations:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.numIter + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.numIter = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Tiling Vertical Padding:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.tilingPaddingVertical + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.tilingPaddingVertical = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Tiling Horizontal Padding:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.tilingPaddingHorizontal + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.tilingPaddingHorizontal = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Tile Disconnected:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        className: "layProps",
        checked: LayoutProperties_1.layoutProperties.tile,
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.tile = !LayoutProperties_1.layoutProperties.tile;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "control-label",
        sm: 4
      }, "Animate:"), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        className: "layProps",
        checked: LayoutProperties_1.layoutProperties.animate,
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.animate = !LayoutProperties_1.layoutProperties.animate;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Incremental:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        className: "layProps",
        checked: !LayoutProperties_1.layoutProperties.randomize,
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.randomize = !LayoutProperties_1.layoutProperties.randomize;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Incremental Cooling Factor:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: LayoutProperties_1.layoutProperties.initialEnergyOnIncremental + "",
        onChange: function (e) {
          LayoutProperties_1.layoutProperties.initialEnergyOnIncremental = e.target.value;
        }
      }))))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.setLayoutProperties(LayoutProperties_1.layoutProperties);

          _this.props.handleClose(EModalType.LAYOUT);
        }
      }, "Save"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          LayoutProperties_1.layoutProperties = external_lodash_default.a.clone(managers_EditorActionsManager.defaultLayoutProperties);

          _this.props.pathwayActions.setLayoutProperties(LayoutProperties_1.layoutProperties);
        }
      }, "Default")));
    }
  });
  var LayoutProperties_1;
  LayoutProperties = LayoutProperties_1 = LayoutProperties_decorate([external_mobx_react_["observer"]], LayoutProperties);
  return LayoutProperties;
}(external_react_default.a.Component);

/* harmony default export */ var modals_LayoutProperties = (LayoutProperties_LayoutProperties);
// CONCATENATED MODULE: ./src/modals/PathwayDetailsModal.tsx
var PathwayDetailsModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var PathwayDetailsModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PathwayDetailsModal_PathwayDetailsModal =
/** @class */
function (_super) {
  PathwayDetailsModal_extends(PathwayDetailsModal, _super);

  function PathwayDetailsModal(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "pathwayInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    return _this;
  }

  Object.defineProperty(PathwayDetailsModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      this.pathwayInfo = this.props.pathwayActions.getPathwayInfo;
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "pathwayDetailsDiv",
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(4);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Pathway Properties")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement(external_react_bootstrap_["Form"], {
        id: "pathwayDetailsForm"
      }, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        style: {
          textAlign: "left"
        },
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "File Name:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        onChange: function (e) {
          _this.pathwayInfo.fileName = e.target.value;
        },
        value: this.pathwayInfo.fileName
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        style: {
          textAlign: "left"
        },
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Pathway Title:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        onChange: function (e) {
          _this.pathwayInfo.pathwayTitle = e.target.value;
        },
        value: this.pathwayInfo.pathwayTitle
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        style: {
          textAlign: "left"
        },
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Pathway Description:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement("textarea", {
        className: "form-control",
        rows: 3,
        onChange: function (e) {
          _this.pathwayInfo.pathwayDetails = e.target.value;
        },
        value: this.pathwayInfo.pathwayDetails
      }))))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.setPathwayInfo(_this.pathwayInfo);

          _this.props.handleClose(EModalType.PW_DETAILS);
        }
      }, "Save")));
    }
  });
  PathwayDetailsModal = PathwayDetailsModal_decorate([external_mobx_react_["observer"]], PathwayDetailsModal);
  return PathwayDetailsModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_PathwayDetailsModal = (PathwayDetailsModal_PathwayDetailsModal);
// CONCATENATED MODULE: ./src/modals/ProfilesModal.tsx
var ProfilesModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ProfilesModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfilesModal_ProfilesModal =
/** @class */
function (_super) {
  ProfilesModal_extends(ProfilesModal, _super);

  function ProfilesModal(props) {
    var _this = _super.call(this, props) || this;

    Object(external_mobx_["makeObservable"])(_this);
    return _this;
  }

  Object.defineProperty(ProfilesModal.prototype, "profileEnabledMap", {
    get: function () {
      var profileEnabledMap = {};
      this.props.profiles.forEach(function (profile) {
        profileEnabledMap[profile.profileId] = profile.enabled;
      });
      return profileEnabledMap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ProfilesModal.prototype, "handleProfileLabelClicked", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index) {
      this.props.handleProfileLabelClicked(index);
    }
  });
  Object.defineProperty(ProfilesModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var profileLabels = this.props.profiles.map(function (profile, i) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, {
          key: i
        }, external_react_default.a.createElement(external_react_bootstrap_["Label"], {
          onClick: function () {
            _this.handleProfileLabelClicked(i);

            _this.props.editor.updateGenomicDataVisibility(_this.profileEnabledMap);
          },
          onMouseEnter: function () {
            document.body.style.cursor = "pointer";
          },
          onMouseLeave: function () {
            document.body.style.cursor = "default";
          },
          style: {
            fontSize: "85%"
          },
          bsStyle: _this.props.profiles[i].enabled ? "primary" : "default"
        }, profile.profileId), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null));
      });
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.PROFILES);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Genomic Data Set(s) to Show")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, profileLabels.length > 0 ? profileLabels : external_react_default.a.createElement("h4", {
        className: "modal-title"
      }, "There is currently no data to show")));
    }
  });

  ProfilesModal_decorate([external_mobx_["computed"]], ProfilesModal.prototype, "profileEnabledMap", null);

  ProfilesModal = ProfilesModal_decorate([external_mobx_react_["observer"]], ProfilesModal);
  return ProfilesModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_ProfilesModal = (ProfilesModal_ProfilesModal);
// CONCATENATED MODULE: ./src/modals/QuickHelpModal.tsx
var QuickHelpModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var QuickHelpModal_QuickHelpModal =
/** @class */
function (_super) {
  QuickHelpModal_extends(QuickHelpModal, _super);

  function QuickHelpModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(QuickHelpModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "quickHelpModal",
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.HELP);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Quick Help")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("ul", {
        className: "leftText"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To add a node:"), " Drag and drop from node palette"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To add an interaction:"), " Click on interaction type; then click on small circle on source node and release on target node"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To add a node into a container (family, complex, compartment or process):"), " Drag the node into its container node or select nodes to be contained and right click on container node and choose \"Add Selected Into This\""), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To delete nodes/interactions:"), " Select and perform Edit > Delete Selected"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To overlay experiment data:"), " Select Alteration % > Load From cBioPortal..."))));
    }
  });
  return QuickHelpModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_QuickHelpModal = (QuickHelpModal_QuickHelpModal);
// CONCATENATED MODULE: ./src/utils/CBioPortalAccessor.tsx



var CBioPortalAccessor_CBioPortalAccessor =
/** @class */
function () {
  function CBioPortalAccessor() {}

  Object.defineProperty(CBioPortalAccessor.prototype, "getDataTypes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return [CBioPortalAccessor.MUTATION, CBioPortalAccessor.GENE_EXPRESSION, CBioPortalAccessor.CNA];
    }
  });
  /*
  * Retrieves all cancer studies from cBioPortal
  * **/

  Object.defineProperty(CBioPortalAccessor.prototype, "fetchCancerStudies", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (callbackFunction) {
      var cancerStudies = {};
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          // By lines
          // Match all new line character representations
          var seperator = /\r?\n|\r/;
          var lines = request.responseText.split(seperator); // start from first line skip node meta data

          for (var i = 1; i < lines.length; i++) {
            if (lines[i].length <= 0) continue;
            var lineData = lines[i].split('\t');
            cancerStudies[lineData[0]] = lineData;
          }

          callbackFunction(cancerStudies);
        } else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200) {
          external_react_toastify_["toast"].error("Error retrieving studies");
        }
      };

      request.open("GET", CBioPortalAccessor.GET_ALL_CANCER_STUDIES_URL);
      request.send();
    }
  });
  ;
  /*
  * Retrieves all genetic profiles for given cancerStudy from cBioPortal
  * **/

  Object.defineProperty(CBioPortalAccessor.prototype, "getSupportedGeneticProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerStudy, callbackFunction) {
      var outData = {};
      var request = new XMLHttpRequest();
      var self = this;

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          // By lines
          // Match all new line character representations
          var seperator = /\r?\n|\r/;
          var lines = request.responseText.split(seperator); // start from first line skip node meta data

          for (var i = 1; i < lines.length; i++) {
            if (lines[i].length <= 0) continue;
            var lineData = lines[i].split('\t');
            var cancerProfileName = lineData[0];

            if (self.isSupportedCancerProfile(cancerProfileName)) {
              outData[cancerProfileName] = lineData;
            }
          }

          callbackFunction(outData);
        } else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200) {
          console.error("Error retrieving studies"); // window.notificationManager.createNotification("Error retrieving genetic profiles", "fail")
        }
      };

      request.open("GET", CBioPortalAccessor.GET_GENETIC_PROFILES_URL + cancerStudy);
      request.send();
    }
  });
  ;
  Object.defineProperty(CBioPortalAccessor.prototype, "isSupportedCancerProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerProfileName) {
      return cancerProfileName.endsWith(CBioPortalAccessor.MRNA_EXP_STUDY_NAME) || cancerProfileName.endsWith(CBioPortalAccessor.CNA_EXP_STUDY_NAME) || cancerProfileName.endsWith(CBioPortalAccessor.MUTATION_EXP_STUDY_NAME);
    }
  });
  ;
  Object.defineProperty(CBioPortalAccessor, "getDataType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerProfileName) {
      if (cancerProfileName.endsWith(this.MRNA_EXP_STUDY_NAME)) {
        return this.GENE_EXPRESSION;
      } else if (cancerProfileName.endsWith(this.CNA_EXP_STUDY_NAME)) {
        return this.CNA;
      } else if (cancerProfileName.endsWith(this.MUTATION_EXP_STUDY_NAME)) {
        return this.MUTATION;
      }

      return "";
    }
  });
  Object.defineProperty(CBioPortalAccessor.prototype, "calcAlterationPercentages", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (paramLines, geneticProfileId, callbackFunction) {
      // By lines
      // Match all new line character representations
      var seperator = /\r?\n|\r/;
      var lines = paramLines.split(seperator);
      var startIndex = 0; //Find starting index of actual data skip commented lines

      for (var i in lines) {
        if (!lines[i].startsWith('#')) {
          startIndex = parseInt(i);
          break;
        }
      } //Total number of tumor samples in the response


      var tumorSamples = lines[startIndex].split('\t');
      var numOfTumorSamples = tumorSamples.length - 2;
      var outData = {};
      outData[geneticProfileId] = {};
      var geneticProfileType = CBioPortalAccessor.getDataType(geneticProfileId); // skip meta line and iterate over tumor sample data

      for (var i = startIndex + 1; i < lines.length; i++) {
        if (lines[i].length <= 0) continue; //Iterate over samples for each gene to calculate profile data

        var lineData = lines[i].split('\t');
        var profileDataAlteration = 0;

        for (var j = 2; j < lineData.length; j++) {
          if (lineData[j] !== 'NaN') {
            if (geneticProfileType === CBioPortalAccessor.MUTATION) profileDataAlteration++;else if (geneticProfileType === CBioPortalAccessor.CNA && (parseInt(lineData[j]) === CBioPortalAccessor.CNA_GAIN || parseInt(lineData[j]) === CBioPortalAccessor.CNA_DELETION)) {
              profileDataAlteration++;
            } else if (geneticProfileType === CBioPortalAccessor.GENE_EXPRESSION && (parseFloat(lineData[j]) >= CBioPortalAccessor.Z_SCORE_UPPER_THRESHOLD || parseFloat(lineData[j]) <= CBioPortalAccessor.Z_SCORE_LOWER_THRESHOLD)) {
              profileDataAlteration++;
            }
          }
        } //


        outData[geneticProfileId][lineData[1]] = profileDataAlteration / numOfTumorSamples * 100;
      }

      callbackFunction(outData);
    }
  });
  /*
  *
  *    Retrieves profile data associated with the parameters below from cBioPortal
  *    @params
        {
          caseSetId: "gbm_tcga",
          geneticProfileId: "gbm_tcga_mutations",
          genes: ["BRCA1", "BRCA2", "TP53"]
        }
  * */

  Object.defineProperty(CBioPortalAccessor.prototype, "getProfileData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params, callbackFunction) {
      //params
      //caseSetId, geneticProfileId, genes
      var outData = {};
      var request = new XMLHttpRequest();
      var self = this;

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          self.calcAlterationPercentages(request.responseText, params.geneticProfileId, callbackFunction);
          external_react_toastify_["toast"].success(params.geneticProfileId + " is succesfully loaded from cBioPortal");
        }
      }; //Create query URL


      var queryURL = CBioPortalAccessor.GET_PROFILE_DATA_URL; //Fetch sequenced case list !!

      queryURL += "&case_set_id=" + params.caseSetId + "_sequenced";
      queryURL += "&genetic_profile_id=" + params.geneticProfileId;
      queryURL += "&gene_list=";
      var isFirst = true;

      for (var _i = 0, _a = params.genes; _i < _a.length; _i++) {
        var gene = _a[_i];

        if (!isFirst) {
          queryURL += "+";
        } else {
          isFirst = false;
        }

        queryURL += gene;
      }

      request.open("GET", queryURL);
      request.send();
    }
  });
  ;
  Object.defineProperty(CBioPortalAccessor.prototype, "validateGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeSymbols, editor) {
      var request = new XMLHttpRequest();
      var self = this;

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          var validGeneSymbols = JSON.parse(request.responseText);

          var validGeneArray = external_lodash_default.a.map(validGeneSymbols, function (object) {
            return object.hugoGeneSymbol;
          });

          editor.highlightInvalidGenes(validGeneArray);
        }
      };

      var queryURL = CBioPortalAccessor.VALIDATE_GENES_URL;
      request.open("POST", queryURL);
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(nodeSymbols));
    }
  });
  Object.defineProperty(CBioPortalAccessor, "CNA_GAIN", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2
  });
  Object.defineProperty(CBioPortalAccessor, "GET_ALL_CANCER_STUDIES_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "https://www.cbioportal.org/webservice.do?cmd=getCancerStudies"
  });
  Object.defineProperty(CBioPortalAccessor, "GET_GENETIC_PROFILES_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "https://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id="
  });
  Object.defineProperty(CBioPortalAccessor, "GET_PROFILE_DATA_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "https://www.cbioportal.org/webservice.do?cmd=getProfileData"
  });
  Object.defineProperty(CBioPortalAccessor, "MRNA_EXP_STUDY_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "_mrna_median_Zscores"
  });
  Object.defineProperty(CBioPortalAccessor, "CNA_EXP_STUDY_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "_gistic"
  });
  Object.defineProperty(CBioPortalAccessor, "VALIDATE_GENES_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'https://www.cbioportal.org/api/genes/fetch?geneIdType=HUGO_GENE_SYMBOL&projection=ID'
  });
  Object.defineProperty(CBioPortalAccessor, "MUTATION_EXP_STUDY_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "_mutations"
  });
  Object.defineProperty(CBioPortalAccessor, "CNA_DELETION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -2
  });
  Object.defineProperty(CBioPortalAccessor, "Z_SCORE_UPPER_THRESHOLD", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2
  });
  Object.defineProperty(CBioPortalAccessor, "Z_SCORE_LOWER_THRESHOLD", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -2
  });
  Object.defineProperty(CBioPortalAccessor, "MUTATION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Mutation"
  });
  Object.defineProperty(CBioPortalAccessor, "GENE_EXPRESSION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Gene Expression"
  });
  Object.defineProperty(CBioPortalAccessor, "CNA", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Copy Number Alteration"
  });
  return CBioPortalAccessor;
}();

/* harmony default export */ var utils_CBioPortalAccessor = (CBioPortalAccessor_CBioPortalAccessor);
// CONCATENATED MODULE: ./src/modals/StudyModal.tsx
var StudyModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var StudyModal_assign = undefined && undefined.__assign || function () {
  StudyModal_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return StudyModal_assign.apply(this, arguments);
};

var StudyModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var StudyModal_StudyModal =
/** @class */
function (_super) {
  StudyModal_extends(StudyModal, _super);

  function StudyModal(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "dataTypes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(_this, "itemArray", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "selectedStudyData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.selectedStudyData = [];
    _this.portalAccessor = new utils_CBioPortalAccessor();

    _this.fetchStudy();

    return _this;
  }

  Object.defineProperty(StudyModal.prototype, "setSelectedStudyData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (data) {
      this.selectedStudyData = data;
    }
  });
  Object.defineProperty(StudyModal.prototype, "setDataTypeProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataType, properties) {
      this.dataTypes[dataType] = properties;
    }
  });
  Object.defineProperty(StudyModal.prototype, "preparePortalAccess", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyId) {
      var _this = this;

      this.portalAccessor.getSupportedGeneticProfiles(studyId, function (data) {
        _this.disableAllDataTypes(); // Iterate through profiles


        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
          var profile = _a[_i];
          var type = utils_CBioPortalAccessor.getDataType(profile);

          if (type !== "") {
            _this.setDataTypeProperties(type, StudyModal_assign(StudyModal_assign({}, _this.dataTypes[type]), {
              enabled: true,
              profile: profile
            }));
          }
        }
      });
    }
  });
  Object.defineProperty(StudyModal.prototype, "disableAllDataTypes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var _i = 0, _a = Object.keys(this.dataTypes); _i < _a.length; _i++) {
        var dataType = _a[_i];
        this.setDataTypeProperties(dataType, {
          enabled: false,
          checked: false,
          profile: undefined
        });
      }
    }
  });
  Object.defineProperty(StudyModal.prototype, "fetchStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      this.itemArray = [];
      this.portalAccessor.getDataTypes().forEach(function (dataType) {
        _this.setDataTypeProperties(dataType, {
          enabled: false,
          checked: false,
          profile: undefined
        });
      });
      this.portalAccessor.fetchCancerStudies(function (cancerStudies) {
        var _loop_1 = function (study) {
          if (!cancerStudies.hasOwnProperty(study)) {
            return "continue";
          }

          var item = external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
            key: study,
            onClick: function () {
              _this.setSelectedStudyData(cancerStudies[study]);

              _this.preparePortalAccess(cancerStudies[study][0]);
            }
          }, cancerStudies[study][1]);

          _this.itemArray.push(item);
        };

        for (var study in cancerStudies) {
          _loop_1(study);
        }
      });
    }
  });
  Object.defineProperty(StudyModal.prototype, "resetModal", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.disableAllDataTypes();
      this.setSelectedStudyData([]);
    }
  });
  Object.defineProperty(StudyModal.prototype, "handleCheckboxClick", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataType) {
      this.setDataTypeProperties(dataType, StudyModal_assign(StudyModal_assign({}, this.dataTypes[dataType]), {
        checked: !this.dataTypes[dataType].checked
      }));
    }
  });
  Object.defineProperty(StudyModal.prototype, "selectedStudyDataTitle", {
    get: function () {
      if (this.selectedStudyData.length > 1) {
        return this.selectedStudyData[1] || "Choose study";
      } else {
        return "Choose study";
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StudyModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "cbioPortalModal",
        show: this.props.isModalShown,
        onHide: function () {
          _this.props.handleClose(EModalType.STUDY);

          _this.resetModal();
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Profile Data from cBioPortal")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("div", {
        id: "cancerDropDown"
      }, external_react_default.a.createElement("h4", null, "Select Cancer Study"), external_react_default.a.createElement(external_react_bootstrap_["DropdownButton"], {
        id: "dropdown-study",
        title: this.selectedStudyDataTitle
      }, this.itemArray)), Object.keys(this.dataTypes).map(function (dataType) {
        return external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
          key: dataType,
          disabled: !_this.dataTypes[dataType].enabled,
          onClick: function () {
            _this.handleCheckboxClick(dataType);
          },
          checked: _this.dataTypes[dataType].checked
        }, dataType);
      }), external_react_default.a.createElement("br", null)), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        bsClass: "success",
        onClick: function () {
          _this.props.loadFromCBio(_this.dataTypes, _this.selectedStudyData);

          _this.props.handleClose(EModalType.STUDY);

          _this.resetModal();
        }
      }, "Load Data")));
    }
  });

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "dataTypes", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "selectedStudyData", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "portalAccessor", void 0);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setSelectedStudyData", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setDataTypeProperties", null);

  StudyModal_decorate([external_autobind_decorator_default.a], StudyModal.prototype, "resetModal", null);

  StudyModal_decorate([external_autobind_decorator_default.a], StudyModal.prototype, "handleCheckboxClick", null);

  StudyModal_decorate([external_mobx_["computed"]], StudyModal.prototype, "selectedStudyDataTitle", null);

  StudyModal = StudyModal_decorate([external_mobx_react_["observer"]], StudyModal);
  return StudyModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_StudyModal = (StudyModal_StudyModal);
// CONCATENATED MODULE: ./src/ui/Ranking.tsx
var Ranking_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Ranking_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Ranking_Ranking =
/** @class */
function (_super) {
  Ranking_extends(Ranking, _super);

  function Ranking(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "bestPathways", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "dropDownTitle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "selectedPathway", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isPercentageMatch", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isAlterationEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isExpanded", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "COUNT_PERC_EXPLANATION", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Whether we should favor the number of genes of interest matching the ones in a pathway or the percentage of such genes in that pathway. For instance, suppose genes of interest are A, B, and C, and the pathway contains genes B, C, D, and E. When we consider count, the score is 2 (for the two genes that match). However, when we consider percentage the score will be 50% as 2 of the 4 genes in the pathway are among genes of interest."
    });
    Object.defineProperty(_this, "ALTERATION_EXPLANATION", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "When this is checked, each matching gene will not directly contribute to the score as 1 unit but with the alteration frequency percentage of that gene. For instance, suppose genes of interest are A, B, and C with alteration frequencies of 0.5, 0.2, and 0.3, respectively, and the pathway contains genes B, C, D, and E. When this is option isn't checked, the score will be 2 for match count and 50% for the match percentage. However, when this option is checked, the scores will be 0.2+0.3=0.5 and (0.2+0.3)/4=12.5% for match count and percentage, respectively."
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.isPercentageMatch = 0;
    _this.isAlterationEnabled = 0;
    _this.dropDownTitle = "Match count";
    _this.isExpanded = false;

    _this.setBestPathwayMethod(0);

    _this.selectedPathway = _this.bestPathways[0].pathwayName;
    return _this;
  }

  Object.defineProperty(Ranking.prototype, "setBestPathwayMethod", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (i) {
      this.bestPathways = this.props.bestPathwaysAlgos[i]; //this.selectedPathway = this.bestPathways[0].pathwayName;
      //this.props.pathwayActions.changePathway(this.selectedPathway);
    }
  });
  Object.defineProperty(Ranking.prototype, "onPathwayClick", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathway) {
      this.selectedPathway = pathway;
      this.props.pathwayActions.changePathway(this.selectedPathway);
    }
  });
  Object.defineProperty(Ranking.prototype, "onApplyClick", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // Mapping from dropdown + checkbox selection to pathway method.
      this.setBestPathwayMethod(2 * this.isAlterationEnabled + this.isPercentageMatch);
    }
  });
  Object.defineProperty(Ranking.prototype, "componentDidMount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.props.pathwayActions.changePathway(this.selectedPathway);
    }
  });
  Object.defineProperty(Ranking.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var lengthThreshold = 13;
      return external_react_default.a.createElement("div", {
        id: "ranking-bar"
      }, this.props.tableComponent && this.props.tableComponent(this.bestPathways.map(function (data) {
        return {
          name: data.pathwayName,
          score: data.score,
          genes: data.genesMatched
        };
      }), this.selectedPathway, this.onPathwayClick), !this.props.patientView && external_react_default.a.createElement("div", {
        className: "info-entry",
        style: {
          marginTop: "10px"
        }
      }, external_react_default.a.createElement("div", {
        id: "criteria-title",
        className: "info-title"
      }, external_react_default.a.createElement("b", {
        style: {
          display: "inline-block"
        }
      }, "\u00A0Ranking options")), external_react_default.a.createElement("div", {
        className: "indent",
        style: {
          marginTop: "10px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["DropdownButton"], {
        title: this.dropDownTitle,
        id: "0",
        style: {
          fontSize: "13px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        style: {
          fontSize: "13px"
        },
        onClick: function () {
          _this.isPercentageMatch = 0;
          _this.dropDownTitle = "Match count";

          _this.onApplyClick();
        }
      }, "Match count"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        style: {
          fontSize: "13px"
        },
        onClick: function () {
          _this.isPercentageMatch = 1;
          _this.dropDownTitle = "Match percentage";

          _this.onApplyClick();
        }
      }, "Match percentage")), "\u00A0", external_react_default.a.createElement("div", {
        "data-tip": this.COUNT_PERC_EXPLANATION,
        "data-border": "true",
        "data-type": "light",
        "data-place": "left",
        "data-effect": "solid",
        className: "fa fa-question-circle styles-module__infoIcon__zMiog"
      }), external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        id: "alterationCheckBox",
        onClick: function () {
          _this.isAlterationEnabled = _this.isAlterationEnabled === 1 ? 0 : 1;

          _this.onApplyClick();
        },
        style: {
          fontSize: "13px",
          marginTop: "18px",
          bottom: "4px"
        }
      }, "Consider alteration frequency\u00A0", external_react_default.a.createElement("span", {
        "data-tip": this.ALTERATION_EXPLANATION,
        "data-border": "true",
        "data-type": "light",
        "data-place": "left",
        "data-effect": "solid",
        className: "fa fa-question-circle styles-module__infoIcon__zMiog"
      })))));
    }
  });

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "bestPathways", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "dropDownTitle", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "selectedPathway", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "isExpanded", void 0);

  Ranking_decorate([external_autobind_decorator_default.a], Ranking.prototype, "setBestPathwayMethod", null);

  Ranking_decorate([external_autobind_decorator_default.a], Ranking.prototype, "onPathwayClick", null);

  Ranking_decorate([external_autobind_decorator_default.a], Ranking.prototype, "onApplyClick", null);

  Ranking = Ranking_decorate([external_mobx_react_["observer"]], Ranking);
  return Ranking;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Ranking = (Ranking_Ranking);
// CONCATENATED MODULE: ./src/ui/Toolbar.tsx
var Toolbar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Toolbar_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore


 // @ts-ignore

var Toolbar_addSelImage = __webpack_require__(17); // @ts-ignore


var Toolbar_addAllImage = __webpack_require__(18); // @ts-ignore


var aboutImage = __webpack_require__(16);

var Toolbar_Toolbar =
/** @class */
function (_super) {
  Toolbar_extends(Toolbar, _super);

  function Toolbar(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "selectedGenes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.selectedGenes = [];
    return _this;
  }

  Object.defineProperty(Toolbar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var studyQuery = "q=" + JSON.stringify(this.props.alterationData) + "&g=" + this.props.genes.map(function (gene) {
        return gene.hugoGeneSymbol;
      }).join("+");
      return external_react_default.a.createElement("div", {
        id: "toolbar",
        style: {
          marginLeft: '0px'
        }
      }, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Save as PNG",
        "data-place": "right",
        "data-effect": "solid",
        src: save_png_default.a,
        onClick: function () {
          _this.props.pathwayActions.saveAs("PNG");
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Save as SVG",
        "data-place": "right",
        "data-effect": "solid",
        src: save_svg_default.a,
        onClick: function () {
          _this.props.pathwayActions.saveAs("SVG");
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Perform layout",
        "data-place": "right",
        "data-effect": "solid",
        src: layout_cose_default.a,
        onClick: this.props.pathwayActions.performLayout
      }), !this.props.patientView && [external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Add selected genes to query",
        "data-place": "right",
        "data-effect": "solid",
        src: Toolbar_addSelImage,
        onClick: function () {
          _this.selectedGenes = _this.props.pathwayActions.getSelectedNodes().filter(function (node) {
            return node.data().type === "GENE";
          }).map(function (node) {
            return node.data().name;
          });

          var noneGeneList = _this.props.pathwayActions.getSelectedNodes().filter(function (node) {
            return node.data().type !== "GENE";
          }).map(function (node) {
            return node.data().name;
          });

          var invalidGenes = [];
          var message = "";

          if (noneGeneList.length > 0) {
            message += "Selection contains nodes that are not genes: " + noneGeneList.join(', ') + ". ";
          }

          _this.selectedGenes.forEach(function (gene) {
            if (!_this.props.validGenes.hasOwnProperty(gene)) {
              invalidGenes.push(gene);
            }
          });

          if (invalidGenes.length === 0) {
            if (_this.selectedGenes.length > 0 && noneGeneList.length === 0) {
              _this.props.onAddGenes(_this.selectedGenes);
            }
          } else {
            message += "Following gene symbols are invalid or already in gene list: " + invalidGenes.join(", ") + ".";
          }

          if (message.length > 0) {
            _this.props.showMessage(message);
          }
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Add all valid genes to query",
        "data-place": "right",
        "data-effect": "solid",
        src: Toolbar_addAllImage,
        onClick: function () {
          _this.selectedGenes = _this.props.pathwayGenes.filter(function (gene) {
            return _this.props.validGenes.hasOwnProperty(gene);
          });

          if (_this.selectedGenes.length > 0) {
            _this.props.onAddGenes(_this.selectedGenes);
          }
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Edit pathway",
        "data-place": "right",
        "data-effect": "solid",
        src: edit_default.a,
        onClick: function () {
          {
            window.open("http://pathwaymapper.org/?pathwayName=" + _this.props.selectedPathway + "&" + studyQuery);
          }
        }
      })], external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Help",
        "data-place": "right",
        "data-effect": "solid",
        src: aboutImage,
        onClick: function () {
          _this.props.handleOpen(EModalType.CHELP);
        }
      }));
    }
  });

  Toolbar_decorate([external_mobx_["observable"]], Toolbar.prototype, "selectedGenes", void 0);

  Toolbar_decorate([external_mobx_["observable"]], Toolbar.prototype, "editor", void 0);

  Toolbar = Toolbar_decorate([external_mobx_react_["observer"]], Toolbar);
  return Toolbar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Toolbar = (Toolbar_Toolbar);
// CONCATENATED MODULE: ./src/utils/PathwayActions.ts
var PathwayActions_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PathwayActions_PathwayActions =
/** @class */
function () {
  function PathwayActions(pathwayHandler, profiles, fileManager, handleOpen, isCBioPortal, isCollaborative) {
    Object.defineProperty(this, "selectedPathway", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fileManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "pathwayHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "handleOpen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "eh", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "profiles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "gridOptionsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "uploader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "merger", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCBioPortal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "viewOperationsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overlayUploader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "enabledType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(this);
    this.pathwayHandler = pathwayHandler;
    this.profiles = profiles;
    this.fileManager = fileManager;
    this.handleOpen = handleOpen;
    this.isCBioPortal = isCBioPortal;
    this.isCollaborative = isCollaborative;
    this.enabledType = EGridType.NONE;
  }

  Object.defineProperty(PathwayActions.prototype, "addProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profile) {
      this.profiles.push(profile);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "clearProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.profiles.length = 0;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "emphasiseQueryGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (queryGenes) {
      if (this.editor) this.editor.cy.nodes().forEach(function (node) {
        var nodeName = node.data().name;
        var nodeType = node.data().type;

        if (queryGenes.includes(nodeName) && nodeType === "GENE") {
          node.style({
            "border-width": "4px",
            "font-weight": "bold"
          });
        }
      });
    }
  });
  Object.defineProperty(PathwayActions.prototype, "getSelectedNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.editor.cy.nodes(":selected");
    }
  });
  Object.defineProperty(PathwayActions.prototype, "setLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (layoutProperties) {
      this.editor.saveLayoutProperties(layoutProperties);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "doesCyHaveElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.editor.cy.elements().length > 0;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "toggleGrid", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isEnabled) {
      this.gridOptionsManager.setSnapToGuidelines(false);
      this.gridOptionsManager.setShowGrid(isEnabled);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "toggleGuide", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isEnabled) {
      this.gridOptionsManager.setSnapToGuidelines(isEnabled);
      this.gridOptionsManager.setShowGrid(false);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "adjustGridSettings", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (gridSize, color) {
      this.gridOptionsManager.currentProperties.gridSpacing = gridSize;
      this.gridOptionsManager.currentProperties.guidelinesStyle.strokeStyle = color;
      this.gridOptionsManager.currentProperties.guidelinesStyle.horizontalDistColor = color;
      this.gridOptionsManager.currentProperties.guidelinesStyle.verticalDistColor = color;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "resizeToContent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.resizeNodesToContent(this.editor.cy.nodes());
    }
  });
  Object.defineProperty(PathwayActions.prototype, "align", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (param) {
      this.viewOperationsManager.handleNodeAlignment(param);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "onChangeFile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (e, isMerge) {
      var file = e.target.files[0];
      this.processFile(file, isMerge);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "uploadOverlay", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.overlayUploader.click();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "overlayFromText", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (file) {
      var _this = this; // Create a new FormData object.


      var formData = new FormData();
      formData.append("graphFile", file);
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          var linesOfData = request.responseText.split("\n");

          if (linesOfData.length > 0) {
            var profileIdsFromFile = linesOfData[0].split("\t").slice(1);
            profileIdsFromFile.forEach(function (id) {
              return _this.addProfile({
                profileId: id,
                enabled: true
              });
            });
          } else {
            console.log("Error: No valid data");
          }

          _this.editor.addGenomicData(request.responseText);
        }
      };

      request.open("POST", "/loadGraph");
      request.send(formData);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "upload", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      if (this.editor.cy.elements().length > 0) {
        this.handleOpen(EModalType.CONFIRMATION);

        modals_ConfirmationModal.pendingFunction = function () {
          _this.uploader.click();
        };
      } else {
        this.uploader.click();
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "merge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.merger.click();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "setOverlayUploader", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (inputRef) {
      this.overlayUploader = inputRef;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "setUploaders", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (inputRef, isMerge) {
      if (isMerge) this.merger = inputRef;else this.uploader = inputRef;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "getPathwayInfo", {
    get: function () {
      return this.fileManager.getPathwayInfo;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PathwayActions.prototype, "setPathwayInfo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (other) {
      this.fileManager.setPathwayInfo(other);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "undo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.undo();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "redo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.redo();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "export", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isSIFNX) {
      //this.editor.cy.remove('.eh-handle');
      this.eh.hide();
      this.fileManager.saveGraph(isSIFNX, this.editor);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "resetUndoStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.reset();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "newPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var commitNewPathway = function () {
        _this.editor.removeAllElements();

        _this.fileManager.setPathwayInfo({
          pathwayTitle: "New Pathway",
          pathwayDetails: "",
          fileName: "pathway.txt"
        }); //this.removeAllData()


        _this.resetUndoStack();

        _this.pathwayHandler("Dummy");
      };

      if (this.editor.cy.elements().length > 0) {
        this.handleOpen(EModalType.CONFIRMATION);
        modals_ConfirmationModal.pendingFunction = commitNewPathway;
      } else {
        commitNewPathway();
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "changePathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathwayName) {
      this.pathwayHandler(pathwayName);

      if (!this.isCBioPortal) {
        this.fileManager.setPathwayInfo({
          pathwayTitle: pathwayName,
          pathwayDetails: "",
          fileName: pathwayName + ".txt"
        }); // At the beginning changePathway is called editor is not ready hence removeData shall not be called

        if (this.editor) {
          //this.removeAllData()
          this.resetUndoStack();
        }
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "highlightNeighbours", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.highlightNeighbors();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "highlightSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.highlightSelected();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "validateGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.validateGenes();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "showAll", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.showAllNodes();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "hideSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.hideSelectedNodes();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "deleteSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var selectedEles = this.editor.cy.elements(":selected");
      this.editor.removeElement(selectedEles);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "addEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeTypeIndex) {
      // @ts-ignore
      window.edgeAddingMode = edgeTypeIndex + 1;

      if (edgeTypeIndex === -1) {
        this.eh.disable();
        this.eh.hide();
        return;
      } else {
        // @ts-ignore
        this.eh.enable();
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "changeNodeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (oldName, newName) {
      var cyNode = this.editor.cy.$('[name="' + oldName + '"]')[0];
      this.editor.changeName(cyNode, newName);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "addNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeType) {
      var nodeData = {
        type: nodeType.toUpperCase(),
        name: "New " + nodeType,
        w: "150",
        h: "52"
      };
      var extent = this.editor.cy.extent();
      var posData = {
        x: (extent.x1 + extent.x2) / 2,
        y: (extent.y1 + extent.y2) / 2
      };
      this.editor.addNode(nodeData, posData);
      this.pathwayHandler("Additional Pathway");
    }
  });
  Object.defineProperty(PathwayActions.prototype, "searchGene", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneName) {
      var selector = "node[name @*= '" + geneName + "']";
      var nodesContainingSearchedGene = this.editor.cy.filter(selector);
      var nodesToSelect = this.editor.cy.collection();
      nodesContainingSearchedGene.forEach(function (ele, index) {
        if (!ele.hasClass("highlightedNode") && !ele.hasClass("invalidGeneHighlight")) nodesToSelect = nodesToSelect.union(ele);
      });
      this.editor.highlightBySearch(nodesToSelect);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "removeAllData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.removeGenomicData();
      this.clearProfiles();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "removeAllHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.removeAllHighlight();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "processFile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (file, isMerge) {
      var _this = this; // Create a new FormData object.


      var formData = new FormData();
      formData.append("graphFile", file);
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            var pathwayData = utils_SaveLoadUtility.parseGraph(request.responseText, false);

            if (isMerge) {
              _this.editor.mergeGraph(pathwayData.nodes, pathwayData.edges);

              var graphJSON = _this.editor.cy.json(); //TODO change file name maybe, probabyly  not necessary ?
              // Pathway nodes and edges are now combination of both previous and new pathway.


              pathwayData.nodes = graphJSON.elements.nodes; //this.editor.cy.nodes().map((node) => ({data: node.data()}));

              pathwayData.edges = graphJSON.elements.edges; //this.editor.cy.edges().map((edge) => ({data: edge.data()}));

              pathwayData.title = "Additional Pathway";
            } else {
              _this.editor.loadFile(pathwayData.nodes, pathwayData.edges);

              _this.fileManager.setPathwayInfo({
                pathwayTitle: pathwayData.title,
                pathwayDetails: pathwayData.description,
                fileName: pathwayData.title + ".txt"
              });
            }

            _this.pathwayHandler(pathwayData.title + "_imported");

            _this.resetUndoStack();
          } else {
            console.error("Error processing file: " + request.readyState + request.responseText);
          }
        }
      };

      request.open("POST", "/loadGraph");
      request.send(formData);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "saveAs", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (type) {
      if (type === "SVG") {
        this.fileManager.saveAsSVG(this.editor);
      } else if (type === "PNG") {
        this.fileManager.saveAsPNG(this.editor.cy);
      } else if (type === "JPEG") {
        this.fileManager.saveAsJPEG(this.editor.cy);
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "editorHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor, eh, undoRedoManager, viewOperationsManager, gridOptionsManager) {
      this.editor = editor;
      this.eh = eh;
      this.undoRedoManager = undoRedoManager;
      this.viewOperationsManager = viewOperationsManager;
      this.gridOptionsManager = gridOptionsManager;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "loadSampleData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var data = "gene\tlung\tovarian\tbreast\ty\n" + "PTEN\t-7\t-20\t10\t20\n" + "NF1\t-12\t-4\t30\t20\n" + "PIK3CA\t18\t40\t-50\t20\n" + "KRAS\t11\t-5\t0\t20\n" + "ZIYA\t0\t-2\t0\t20\n" + "AKT1\t3\t30\t-10\t20\n" + "AKT2\t6\t-3\t20\t20\n" + "AKT3\t6\t-3\t20\t20\n" + "\n";
      this.editor.addGenomicData(data);
      this.addProfile({
        profileId: "lung",
        enabled: true
      });
      this.addProfile({
        profileId: "ovarian",
        enabled: true
      });
      this.addProfile({
        profileId: "breast",
        enabled: true
      });
    }
  });
  Object.defineProperty(PathwayActions.prototype, "performLayout", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.performLayout();
    }
  });

  PathwayActions_decorate([external_mobx_["observable"]], PathwayActions.prototype, "selectedPathway", void 0);

  PathwayActions_decorate([external_mobx_["observable"]], PathwayActions.prototype, "enabledType", void 0);

  PathwayActions_decorate([external_mobx_["action"].bound], PathwayActions.prototype, "addProfile", null);

  PathwayActions_decorate([external_mobx_["action"].bound], PathwayActions.prototype, "clearProfiles", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "toggleGrid", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "toggleGuide", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "resizeToContent", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "align", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "onChangeFile", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "upload", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "merge", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "setUploaders", null);

  PathwayActions_decorate([external_mobx_["computed"]], PathwayActions.prototype, "getPathwayInfo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "setPathwayInfo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "undo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "redo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "export", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "resetUndoStack", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "newPathway", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "changePathway", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "highlightNeighbours", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "highlightSelected", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "validateGenes", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "showAll", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "hideSelected", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "deleteSelected", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "addEdge", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "changeNodeName", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "addNode", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "searchGene", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "removeAllData", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "removeAllHighlight", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "processFile", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "saveAs", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "editorHandler", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "loadSampleData", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "performLayout", null);

  return PathwayActions;
}();

/* harmony default export */ var utils_PathwayActions = (PathwayActions_PathwayActions);
// EXTERNAL MODULE: ./src/images/toolbar/about.svg
var about = __webpack_require__(16);
var about_default = /*#__PURE__*/__webpack_require__.n(about);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-horizontal-bottom.svg
var align_horizontal_bottom = __webpack_require__(20);
var align_horizontal_bottom_default = /*#__PURE__*/__webpack_require__.n(align_horizontal_bottom);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-horizontal-middle.svg
var align_horizontal_middle = __webpack_require__(21);
var align_horizontal_middle_default = /*#__PURE__*/__webpack_require__.n(align_horizontal_middle);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-horizontal-top.svg
var align_horizontal_top = __webpack_require__(22);
var align_horizontal_top_default = /*#__PURE__*/__webpack_require__.n(align_horizontal_top);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-vertical-center.svg
var align_vertical_center = __webpack_require__(23);
var align_vertical_center_default = /*#__PURE__*/__webpack_require__.n(align_vertical_center);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-vertical-left.svg
var align_vertical_left = __webpack_require__(24);
var align_vertical_left_default = /*#__PURE__*/__webpack_require__.n(align_vertical_left);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-vertical-right.svg
var align_vertical_right = __webpack_require__(25);
var align_vertical_right_default = /*#__PURE__*/__webpack_require__.n(align_vertical_right);

// EXTERNAL MODULE: ./src/images/toolbar/delete-simple.svg
var delete_simple = __webpack_require__(26);
var delete_simple_default = /*#__PURE__*/__webpack_require__.n(delete_simple);

// EXTERNAL MODULE: ./src/images/toolbar/grid.svg
var grid = __webpack_require__(27);
var grid_default = /*#__PURE__*/__webpack_require__.n(grid);

// EXTERNAL MODULE: ./src/images/toolbar/guidelines.svg
var guidelines = __webpack_require__(28);
var guidelines_default = /*#__PURE__*/__webpack_require__.n(guidelines);

// EXTERNAL MODULE: ./src/images/toolbar/hide-selected.svg
var hide_selected = __webpack_require__(29);
var hide_selected_default = /*#__PURE__*/__webpack_require__.n(hide_selected);

// EXTERNAL MODULE: ./src/images/toolbar/layout-properties.svg
var layout_properties = __webpack_require__(30);
var layout_properties_default = /*#__PURE__*/__webpack_require__.n(layout_properties);

// EXTERNAL MODULE: ./src/images/toolbar/load.svg
var load = __webpack_require__(31);
var load_default = /*#__PURE__*/__webpack_require__.n(load);

// EXTERNAL MODULE: ./src/images/toolbar/new.svg
var toolbar_new = __webpack_require__(32);
var new_default = /*#__PURE__*/__webpack_require__.n(toolbar_new);

// EXTERNAL MODULE: ./src/images/toolbar/portal.svg
var portal = __webpack_require__(33);
var portal_default = /*#__PURE__*/__webpack_require__.n(portal);

// EXTERNAL MODULE: ./src/images/toolbar/quick-help.svg
var quick_help = __webpack_require__(34);
var quick_help_default = /*#__PURE__*/__webpack_require__.n(quick_help);

// EXTERNAL MODULE: ./src/images/toolbar/redo.svg
var redo = __webpack_require__(35);
var redo_default = /*#__PURE__*/__webpack_require__.n(redo);

// EXTERNAL MODULE: ./src/images/toolbar/save.svg
var save = __webpack_require__(36);
var save_default = /*#__PURE__*/__webpack_require__.n(save);

// EXTERNAL MODULE: ./src/images/toolbar/settings.svg
var settings = __webpack_require__(37);
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// EXTERNAL MODULE: ./src/images/toolbar/show-all.svg
var show_all = __webpack_require__(38);
var show_all_default = /*#__PURE__*/__webpack_require__.n(show_all);

// EXTERNAL MODULE: ./src/images/toolbar/undo.svg
var undo = __webpack_require__(39);
var undo_default = /*#__PURE__*/__webpack_require__.n(undo);

// CONCATENATED MODULE: ./src/ui/Buttonbar.tsx
var Buttonbar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Buttonbar_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore





var Buttonbar_Buttonbar =
/** @class */
function (_super) {
  Buttonbar_extends(Buttonbar, _super);

  function Buttonbar(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "searchedGene", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.searchedGene = "";
    _this.props.pathwayActions.enabledType = EGridType.NONE;
    return _this;
  }

  Object.defineProperty(Buttonbar.prototype, "setEnabledType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newType) {
      if (newType === this.props.pathwayActions.enabledType) {
        this.props.pathwayActions.enabledType = EGridType.NONE;
      } else {
        this.props.pathwayActions.enabledType = newType;
      } // Enabled type calculated


      if (this.props.pathwayActions.enabledType === EGridType.GRID) {
        this.props.pathwayActions.toggleGrid(true);
      } else if (this.props.pathwayActions.enabledType === EGridType.GUIDE) {
        this.props.pathwayActions.toggleGuide(true);
      } else {
        this.props.pathwayActions.toggleGrid(false); // This will disable both.
      }
    }
  });
  Object.defineProperty(Buttonbar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var fileFunctions = [{
        svg: new_default.a,
        function: this.props.pathwayActions.newPathway,
        tooltip: "New Pathway"
      }, {
        svg: load_default.a,
        function: this.props.pathwayActions.upload,
        tooltip: "Import Pathway"
      }, {
        svg: save_default.a,
        function: function () {
          _this.props.pathwayActions.export(false);
        },
        tooltip: "Export Pathway"
      }];
      var modFunctions = [{
        svg: delete_simple_default.a,
        function: this.props.pathwayActions.deleteSelected,
        tooltip: "Delete Selected"
      }];

      if (!this.props.pathwayActions.isCollaborative) {
        modFunctions.push({
          svg: undo_default.a,
          function: function () {
            _this.props.pathwayActions.undo();
          },
          tooltip: "Undo"
        }, {
          svg: redo_default.a,
          function: function () {
            _this.props.pathwayActions.redo();
          },
          tooltip: "Redo"
        });
      }

      var alignFunctions = [{
        svg: align_horizontal_top_default.a,
        function: function () {
          _this.props.pathwayActions.align("hTop");
        },
        tooltip: "Align Horizontal Top"
      }, {
        svg: align_horizontal_middle_default.a,
        function: function () {
          _this.props.pathwayActions.align("hMid");
        },
        tooltip: "Align Horizontal Middle"
      }, {
        svg: align_horizontal_bottom_default.a,
        function: function () {
          _this.props.pathwayActions.align("hBot");
        },
        tooltip: "Align Horizontal Bottom"
      }, {
        svg: align_vertical_left_default.a,
        function: function () {
          _this.props.pathwayActions.align("vLeft");
        },
        tooltip: "Align Vertical Left"
      }, {
        svg: align_vertical_center_default.a,
        function: function () {
          _this.props.pathwayActions.align("vCen");
        },
        tooltip: "Align Vertical Center"
      }, {
        svg: align_vertical_right_default.a,
        function: function () {
          _this.props.pathwayActions.align("vRight");
        },
        tooltip: "Align Vertical Right"
      }];
      var utilFunctions = [{
        isFocused: this.props.pathwayActions.enabledType === EGridType.GRID,
        svg: grid_default.a,
        function: function () {
          _this.setEnabledType(EGridType.GRID);
        },
        tooltip: "Enable Grid: Show and snap to grid"
      }, {
        isFocused: this.props.pathwayActions.enabledType === EGridType.GUIDE,
        svg: guidelines_default.a,
        function: function () {
          _this.setEnabledType(EGridType.GUIDE);
        },
        tooltip: "Enable Guidelines: Enable and snap to alignment guidelines"
      }];
      var visibilityFunctions = [{
        svg: hide_selected_default.a,
        function: function () {
          _this.props.pathwayActions.hideSelected();
        },
        tooltip: "Hide Selected"
      }, {
        svg: show_all_default.a,
        function: function () {
          _this.props.pathwayActions.showAll();
        },
        tooltip: "Show All"
      }];
      var layoutFunctions = [{
        svg: layout_cose_default.a,
        function: function () {
          _this.props.pathwayActions.performLayout();
        },
        tooltip: "Perform Layout"
      }, {
        svg: layout_properties_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.LAYOUT);
        },
        tooltip: "Layout Properties"
      }];
      var portalFunctions = [{
        svg: portal_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.STUDY);
        },
        tooltip: "Fetch Genomic Data From cBioPortal"
      }, {
        svg: settings_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.PROFILES);
        },
        tooltip: "Genomic Data Visibility Settings"
      }];
      var infoFunctions = [{
        svg: quick_help_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.HELP);
        },
        tooltip: "Quick Help"
      }, {
        svg: about_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.ABOUT);
        },
        tooltip: "About"
      }];
      var allFunctions = [fileFunctions, modFunctions, alignFunctions, utilFunctions, visibilityFunctions, portalFunctions, layoutFunctions, infoFunctions];
      return external_react_default.a.createElement(external_react_bootstrap_["Navbar"], {
        fluid: true,
        style: {
          backgroundColor: "#eff0f2",
          minHeight: "0px"
        },
        className: "pathway-toolbar"
      }, external_react_default.a.createElement(external_react_bootstrap_["ButtonToolbar"], {
        className: "toolbar pathway-toolbar",
        style: {
          marginBottom: "0px",
          paddingBottom: "0px"
        }
      }, allFunctions.map(function (functions, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["ButtonGroup"], {
          key: index
        }, functions.map(function (svg, index) {
          return external_react_default.a.createElement(external_react_bootstrap_["Button"], {
            key: index,
            className: "toolbar-button" + (svg.isFocused ? " toolbar-button-focused" : ""),
            style: {
              padding: 0
            }
          }, external_react_default.a.createElement("img", {
            height: "22px",
            width: "22px",
            src: svg.svg,
            "data-tip": svg.tooltip,
            "data-place": "bottom",
            "data-effect": "solid",
            onClick: svg.function
          }));
        }));
      }), external_react_default.a.createElement(external_react_bootstrap_["ButtonGroup"], {
        id: "searchGeneToolbar"
      }, external_react_default.a.createElement(external_react_bootstrap_["FormGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        id: "searchGene",
        type: "text",
        style: {
          maxHeight: '32px',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        },
        onChange: function (e) {
          _this.searchedGene = e.target.value;
        },
        placeholder: "Search Genes...",
        onKeyPress: function (e) {
          if (e.key !== "Enter") return;

          _this.props.pathwayActions.searchGene(_this.searchedGene);
        }
      }), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"].Addon, {
        id: "search-gene-input-group-addon",
        onClick: function () {
          _this.props.pathwayActions.searchGene(_this.searchedGene);
        },
        style: {
          cursor: 'pointer'
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Glyphicon"], {
        glyph: "search"
      })))))));
    }
  });

  Buttonbar_decorate([external_mobx_["observable"]], Buttonbar.prototype, "searchedGene", void 0);

  Buttonbar = Buttonbar_decorate([external_mobx_react_["observer"]], Buttonbar);
  return Buttonbar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Buttonbar = (Buttonbar_Buttonbar);
// EXTERNAL MODULE: external "cytoscape"
var external_cytoscape_ = __webpack_require__(6);
var external_cytoscape_default = /*#__PURE__*/__webpack_require__.n(external_cytoscape_);

// EXTERNAL MODULE: ./src/images/nodes/compartment.svg
var compartment = __webpack_require__(40);
var compartment_default = /*#__PURE__*/__webpack_require__.n(compartment);

// EXTERNAL MODULE: ./src/images/nodes/complex.svg
var complex = __webpack_require__(41);
var complex_default = /*#__PURE__*/__webpack_require__.n(complex);

// EXTERNAL MODULE: ./src/images/nodes/family.svg
var family = __webpack_require__(42);
var family_default = /*#__PURE__*/__webpack_require__.n(family);

// EXTERNAL MODULE: ./src/images/nodes/gene.svg
var nodes_gene = __webpack_require__(43);
var gene_default = /*#__PURE__*/__webpack_require__.n(nodes_gene);

// EXTERNAL MODULE: ./src/images/nodes/process.svg
var process = __webpack_require__(44);
var process_default = /*#__PURE__*/__webpack_require__.n(process);

// EXTERNAL MODULE: ./src/images/resizeCue.svg
var resizeCue = __webpack_require__(45);
var resizeCue_default = /*#__PURE__*/__webpack_require__.n(resizeCue);

// CONCATENATED MODULE: ./src/managers/ContextMenuManager.tsx


var ContextMenuManager_ContextMenuManager =
/** @class */
function () {
  function ContextMenuManager(cy, editor, handleOpen, undoRedoManager, isCollaborative) {
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "handleOpen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.editor = editor;
    this.handleOpen = handleOpen;
    this.undoRedoManager = undoRedoManager;
    this.isCollaborative = isCollaborative;
    this.init();
  }

  Object.defineProperty(ContextMenuManager.prototype, "init", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var classRef = this;
      var ctxMenus = this.cy.contextMenus();
      var menuItems = [{
        id: 'deleteSelected',
        content: 'Delete Selected',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        coreAsWell: true,
        onClickFunction: function (event) {
          var selectedEles = _this.cy.elements(':selected');

          classRef.editor.removeElement(selectedEles);
        },
        disabled: false,
        hasTrailingDivider: true
      }, {
        id: 'hideSelected',
        content: 'Hide Selected',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        coreAsWell: true,
        onClickFunction: function (event) {
          classRef.editor.hideSelectedNodes();
        },
        disabled: false,
        hasTrailingDivider: true
      }, {
        id: 'loadFromCBioPortal',
        content: 'Load From cBioPortal...',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        coreAsWell: true,
        onClickFunction: function (event) {
          _this.handleOpen(EModalType.STUDY);
        },
        disabled: false,
        hasTrailingDivider: true
      }, //Context menu items when clicking on nodes/compounds
      {
        id: 'remove',
        content: 'Delete',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        selector: 'node, edge',
        onClickFunction: function (event) {
          var ele = event.target; // The function to be executed on click

          var selectedElements = classRef.cy.nodes(':selected').union(ele);
          classRef.editor.removeElement(selectedElements);
        },
        disabled: false,
        hasTrailingDivider: true,
        coreAsWell: false // Whether core instance have this item on cxttap

      }, {
        id: 'addSelected',
        content: 'Add Selected Into This',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        selector: 'node',
        onClickFunction: function (event) {
          var ele = event.target;
          var selectedNodes = classRef.cy.nodes(':selected');
          var containerType = ele.data('type');
          var validNodes = classRef.cy.collection(); //Do nothing if node is GENE

          if (ele._private.data['type'] === 'GENE' || selectedNodes.size() < 1) {
            return;
          } //Prevent actions like adding root node to children & addition to itself
          else {
              var notValid = false;
              selectedNodes.forEach(function (tmpNode, i) {
                if (ele.id() == tmpNode.id()) {
                  notValid = true;
                  return false;
                }

                if (tmpNode.isParent()) {
                  notValid = classRef.isChildren(tmpNode, ele);

                  if (notValid) {
                    return false;
                  }
                }

                return true;
              });

              if (notValid) {
                return;
              }
            }

          selectedNodes.forEach(function (tmpNode, i) {
            if (containerType == "FAMILY" || containerType == "COMPLEX") {
              if (tmpNode.data('type') != "COMPARTMENT" && tmpNode.data('type') != "PROCESS") {
                validNodes = validNodes.add(tmpNode);
              }
            } else {
              validNodes = validNodes.add(tmpNode);
            }
          });
          var compId = ele.id();
          classRef.editor.changeParents(validNodes, compId); //Unselecting nodes to remove them from selectedNodeStack

          selectedNodes.unselect();
        },
        disabled: false,
        hasTrailingDivider: true,
        coreAsWell: false // Whether core instance have this item on cxttap

      }, {
        id: 'removeSelected',
        content: 'Remove Selected From Parent',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        selector: 'node',
        onClickFunction: function (event) {
          var ele = event.target;
          var selectedNodes = classRef.cy.nodes(':selected');
          var notValid = false;
          selectedNodes.forEach(function (tmpNode, i) {
            if (tmpNode.isParent()) {
              notValid = classRef.isChildren(tmpNode, ele);

              if (notValid) {
                return false;
              }
            }

            return true;
          });

          if (notValid) {
            return;
          }

          classRef.editor.changeParents(selectedNodes, null); //Unselecting nodes to remove them from selectedNodeStack

          selectedNodes.unselect();
        },
        disabled: false,
        hasTrailingDivider: true,
        coreAsWell: false // Whether core instance have this item on cxttap

      }, {
        id: 'performLayout',
        content: 'Perform Layout',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        coreAsWell: true,
        onClickFunction: function (event) {
          _this.editor.performLayout();
        },
        disabled: false,
        hasTrailingDivider: true
      }];
      var nonCollabItems = [//Context menu items when clicking on blank space
      {
        id: 'undoAction',
        content: 'Undo',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        coreAsWell: true,
        onClickFunction: function (event) {
          _this.undoRedoManager.undo();
        },
        disabled: false,
        hasTrailingDivider: true
      }, {
        id: 'redoAction',
        content: 'Redo',
        // Filters the elements to have this menu item on cxttap
        // If the selector is not truthy no elements will have this menu item on cxttap
        coreAsWell: true,
        onClickFunction: function (event) {
          _this.undoRedoManager.redo();
        },
        disabled: false,
        hasTrailingDivider: true
      }];

      if (!this.isCollaborative) {
        menuItems = menuItems.concat(nonCollabItems);
      }

      ctxMenus.appendMenuItems(menuItems);
    }
  }); //TODO ??????
  //window.edgeAddingMode = false;
  //TODO better move this to another class
  //Utility function to check whether query node is children of given node

  Object.defineProperty(ContextMenuManager.prototype, "isChildren", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, queryNode) {
      var parent = queryNode.parent()[0];

      while (parent) {
        if (parent.id() == node.id()) {
          return true;
        }

        parent = parent.parent()[0];
      }

      return false;
    }
  });
  return ContextMenuManager;
}();

/* harmony default export */ var managers_ContextMenuManager = (ContextMenuManager_ContextMenuManager);
// CONCATENATED MODULE: ./src/managers/QtipManager.tsx


var QtipManager_QtipManager =
/** @class */
function () {
  function QtipManager(cy, editor) {
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.editor = editor;
  }

  Object.defineProperty(QtipManager.prototype, "generateEdgeQtipContentHTML", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var self = this;
      var textInput = external_jquery_default()('<div class="col-xs-6 inputCol"><input type="text" class="form-control" edgeid="' + edge.id() + '"value=""></div>');
      var pubmedIDList = external_jquery_default()('<div class="pubmedIDList"></div>');
      var pubmedURL = 'https://www.ncbi.nlm.nih.gov/pubmed/';
      var pubmedData = edge.data('pubmedIDs');
      var edgeLabelInput = external_jquery_default()('<div class="col-xs-6 inputCol"><input type="text" class="form-control" edgeid="' + edge.id() + '"value="' + edge.data('name') + '"></div>');

      function generatePubmedLinks(argData) {
        for (var key in argData) {
          if (!argData.hasOwnProperty(key)) {
            continue;
          }

          var pubmedID = argData[key];
          if (isNaN(pubmedID)) continue;
          var pubmedIDRemoveButton = external_jquery_default()("<i edgeID='" + edge.id() + "' class='fa fa-times qtipRemovePmedID' aria-hidden='true'></i>");
          pubmedIDRemoveButton.on('click', function (event) {
            external_jquery_default()(event.target).parent().remove();
            var edge = self.cy.$('#' + external_jquery_default()(event.target).attr('edgeId'));
            var pubmedId = [external_jquery_default()(event.target).parent().find('a').text()];
            self.editor.removePubmedID(edge, pubmedId);

            if (external_jquery_default()('.pubmedIDList').children().length < 3) {
              external_jquery_default()('.pubmedIDList').children().remove();
            }
          });
          var pubmedContent = external_jquery_default()("<div>\
                              <label>\
                                <a target='_blank' href=" + pubmedURL + pubmedID + ">" + +pubmedID + "</a>" + "</label>\
                              </div>");
          pubmedContent.first().append(pubmedIDRemoveButton);
          pubmedIDList.append(pubmedContent);
        }
      }

      function generatePubmedLinksHeader() {
        pubmedIDList.append(external_jquery_default()('<hr/>'));
        pubmedIDList.append(external_jquery_default()('<label class="col-xs-12 pubmedIDLabel">Pubmed IDs</label>'));
      }

      if (pubmedData.length > 0) {
        generatePubmedLinksHeader();
        generatePubmedLinks(pubmedData);
      }

      textInput.change(function () {
        var edgeID = external_jquery_default()(this).find('input').attr('edgeid');
        var val = external_jquery_default()(this).find('input').val();
        var pumbedIDs = val.split(';');
        external_jquery_default()(this).find('input').val("");

        if (external_jquery_default()('.pubmedIDList').children().length === 0) {
          generatePubmedLinksHeader();
        }

        self.editor.addPubmedIDs(edge, pumbedIDs);
        generatePubmedLinks(pumbedIDs);
      });
      edgeLabelInput.change(function () {
        var edgeID = external_jquery_default()(this).find('input').attr('edgeid');
        var cyEdge = self.cy.$('#' + edgeID)[0];
        var newName = external_jquery_default()(this).find('input').val();
        external_jquery_default()(this).find('input').val(""); //TODO call associated Editor Actions Manager function

        self.editor.changeName(cyEdge, newName);
      });
      var wrapper = external_jquery_default()('<div></div>');
      var pubmedRow = external_jquery_default()('<div class="row">\
                 <div class="col-xs-6 qtipLabel">Add  PubmedID(s):</div>\
              </div>');
      pubmedRow.append(textInput);
      var labelRow = external_jquery_default()('<div class="row">\
               <div class="col-xs-6 qtipLabel">Label:</div>\
            </div>');
      labelRow.append(edgeLabelInput);
      wrapper.append(labelRow);
      wrapper.append('<hr/>');
      pubmedRow.append(textInput);
      wrapper.append(pubmedRow);
      wrapper.append(pubmedIDList);
      return wrapper;
    }
  });
  Object.defineProperty(QtipManager.prototype, "generateNodeQtipContentHTML", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var self = this;
      var nodeData = ele.data();
      var textInput = external_jquery_default()('<div class="col-xs-8 inputCol"><input type="text" class="form-control" nodeid="' + ele.id() + '" value="' + nodeData.name + '"></div>');
      textInput.change(function () {
        var nodeID = external_jquery_default()(this).find('input').attr('nodeid');
        var cyNode = self.cy.$('#' + nodeID)[0];
        var newName = external_jquery_default()(this).find('input').val();
        self.editor.changeName(cyNode, newName);
      });
      var wrapper = external_jquery_default()('<div></div>');
      var row = external_jquery_default()('<div class="row">\
                 <div class="col-xs-4 qtipLabel">Name:</div>\
              </div>');
      row.append(textInput);
      wrapper.append(row);

      if (ele.data().type === "GENE") {
        var entrezGeneButton = external_jquery_default()('<div class="row centerText geneDetails"><button nodeid="' + ele.id() + '" type="button" class="btn btn-default">My Cancer Genome</button></div>');
        entrezGeneButton.find('button').on('click', function (event) {
          event.preventDefault();
          var nodeID = external_jquery_default()(this).attr('nodeid');

          var nodeSymbol = self.cy.$('#' + nodeID)[0]._private.data['name'];

          var parent = external_jquery_default()(this).parent();
          window.open('https://www.mycancergenome.org/content/gene/' + nodeSymbol);
        });
        wrapper.append(entrezGeneButton);
      }

      return wrapper;
    }
  });
  Object.defineProperty(QtipManager.prototype, "addQtipToElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles) {
      var self = this;
      eles.forEach(function (ele) {
        var qTipOpts = {};

        if (ele.isNode()) {
          qTipOpts = {
            content: {
              text: function () {
                return self.generateNodeQtipContentHTML(this);
              },
              title: function () {
                return ele.data().type.toUpperCase() + ' DETAILS';
              }
            },
            position: {
              my: 'top center',
              at: 'bottom center'
            },
            style: {
              classes: 'qtip-tipsy qtip-rounded',
              width: 400
            },
            show: {
              event: "showqtipevent"
            }
          };
        } else if (ele.isEdge()) {
          qTipOpts = {
            content: {
              text: function () {
                return self.generateEdgeQtipContentHTML(this);
              },
              title: function () {
                return 'INTERACTION DETAILS';
              }
            },
            position: {
              my: 'top center',
              at: 'bottom center'
            },
            style: {
              classes: 'qtip-tipsy qtip-rounded',
              width: 400
            },
            show: {
              event: "showqtipevent"
            }
          };
        }

        ele.qtip(qTipOpts);
      });
    }
  }); //Utility Functions

  Object.defineProperty(QtipManager.prototype, "capitalizeFirstLetter", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  });
  return QtipManager;
}();

/* harmony default export */ var managers_QtipManager = (QtipManager_QtipManager);
// CONCATENATED MODULE: ./src/managers/ShareDBManager.tsx


var sharedb;
var socket;
var connection;

var ShareDBManager_ShareDBManager =
/** @class */
function () {
  function ShareDBManager(postFileLoadCallback) {
    Object.defineProperty(this, "NODEMAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'nodes'
    });
    Object.defineProperty(this, "EDGEMAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'edges'
    });
    Object.defineProperty(this, "LAYOUT_PROPS_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'layoutProperties'
    });
    Object.defineProperty(this, "GLOBAL_OPTS_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'globalOptions'
    }); //For storing genomic data information per gene

    Object.defineProperty(this, "GENOMIC_DATA_MAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataMap'
    }); //For storing visibility information of genomic data according to the cancer type

    Object.defineProperty(this, "VISIBLE_GENOMIC_DATA_MAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'visibleGenomicDataMapByType'
    });
    Object.defineProperty(this, "GENOMIC_DATA_GROUP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataGroupList'
    });
    Object.defineProperty(this, "GENOMIC_DATA_GROUP_COUNT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataGroupCount'
    });
    Object.defineProperty(this, "graphUtilities", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "doc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "postFileLoad", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "reconnectEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (sourceID, targetID, edgeData) {
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];
        var edge = edgeMap[edgeData.id];
        var edgeID = edge.id;
        edge.source = sourceID;
        edge.target = targetID;

        if (edgeMap.hasOwnProperty(edgeID)) {
          this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, edge);
        } else {
          throw new Error('Element does not exist in Real Time');
        }
      }
    }); //Doc data maps names and keys

    this.postFileLoad = postFileLoadCallback;
    this.graphUtilities = new utils_GraphUtilities();
  }

  ;
  Object.defineProperty(ShareDBManager.prototype, "getDoc", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.doc;
    }
  });
  Object.defineProperty(ShareDBManager.prototype, "setEditor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor) {
      this.editor = editor;
    }
  }); //Applies any given sharDB opeation to shared document and notifies other clients

  Object.defineProperty(ShareDBManager.prototype, "applyShareDBOperation", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      this.doc.submitOp(op, this.shareDBError);
    }
  });
  ; //Clears genomic data in shared document and notifies other clients

  Object.defineProperty(ShareDBManager.prototype, "clearShareDBGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var ops = [];
      var genomicMap = this.doc.data[this.GENOMIC_DATA_MAP_NAME];
      var visMap = this.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var genomicDataGroupMap = this.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var genomicDataGroupCount = this.doc.data[this.GENOMIC_DATA_GROUP_COUNT]; //Reset all genomic maps

      for (var _i = 0, _a = Object.keys(genomicMap); _i < _a.length; _i++) {
        var key = _a[_i];
        ops.push({
          p: [this.GENOMIC_DATA_GROUP_NAME, key],
          od: genomicMap[key]
        });
      }

      for (var _b = 0, _c = Object.keys(visMap); _b < _c.length; _b++) {
        var key = _c[_b];
        ops.push({
          p: [this.VISIBLE_GENOMIC_DATA_MAP_NAME, key],
          od: visMap[key]
        });
      }

      for (var _d = 0, _e = Object.keys(genomicDataGroupMap); _d < _e.length; _d++) {
        var key = _e[_d];
        ops.push({
          p: [this.GENOMIC_DATA_GROUP_NAME, key],
          od: genomicDataGroupMap[key]
        });
      } //Reset genomic data group count to 0


      ops.push({
        p: [this.GENOMIC_DATA_GROUP_COUNT],
        na: -genomicDataGroupCount
      });
      this.doc.submitOp(ops, this.shareDBError);
    }
  });
  ;
  /*
   * Updates shared document object
   * @param mapName: map name of the object
   * @param objectKey: key of the object
   * @param object: new object
   *
   */

  Object.defineProperty(ShareDBManager.prototype, "updateShareDBObject", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (mapName, objectKey, object) {
      this.doc.submitOp([{
        p: [mapName, objectKey],
        od: this.doc.data[mapName][objectKey],
        oi: object
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Inserts a new shared document object
   * @param mapName: map name of the object
   * @param objectKey: key of the object
   * @param object: new object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "insertShareDBObject", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (mapName, objectKey, object) {
      this.doc.submitOp([{
        p: [mapName, objectKey],
        oi: object
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Deletes a shared document object
   * @param mapName: map name of the object
   * @param objectKey: key of the object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "deleteShareDBObject", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (mapName, objectKey) {
      this.doc.submitOp([{
        p: [mapName, objectKey],
        od: this.doc.data[mapName][objectKey]
      }], this.shareDBError);
    }
  });
  ; //Initializes layout properties of the shared document

  Object.defineProperty(ShareDBManager.prototype, "initializeShareDBLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.submitOp([{
        p: [this.LAYOUT_PROPS_NAME, 0],
        li: [this.editor.layoutProperties]
      }], this.shareDBError);
    }
  });
  ; //Initializes global options of the shared document

  Object.defineProperty(ShareDBManager.prototype, "initializeShareDBGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.submitOp([{
        p: [this.GLOBAL_OPTS_NAME, 0],
        li: [this.editor.getGlobalOptions()]
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Updates layout properties of the shared document and notifies other clients
   * @param object: new layout properties object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "updateShareDBLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (object) {
      this.doc.submitOp([{
        p: [this.LAYOUT_PROPS_NAME, 0],
        ld: this.doc.data[this.LAYOUT_PROPS_NAME][0],
        li: object
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Updates global options of the shared document and notifies other clients
   * @param object: new global options object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "updateShareDBGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (object) {
      this.doc.submitOp([{
        p: [this.GLOBAL_OPTS_NAME, 0],
        ld: this.doc.data[this.GLOBAL_OPTS_NAME][0],
        li: object
      }], this.shareDBError);
    }
  });
  ; //Increments shared data group count
  //Use this function to increment and keep the group count synchronized

  Object.defineProperty(ShareDBManager.prototype, "incrementShareDBGroupCount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.submitOp([{
        p: [this.GENOMIC_DATA_GROUP_COUNT],
        na: 1
      }], this.shareDBError);
    }
  });
  ; //Checks whether given operation is a replace or add/delete operation

  Object.defineProperty(ShareDBManager.prototype, "isShareDBReplaceEvent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      return op.hasOwnProperty("oi") && op.hasOwnProperty("od") || op.hasOwnProperty("li") && op.hasOwnProperty("ld");
    }
  });
  ;
  /*
   * Gets the initial value of the shared document
   * without this function shared document values cannot be reached
  */

  Object.defineProperty(ShareDBManager.prototype, "initializeSharedDBDoc", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.subscribe();
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "shareDBError", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (err) {
      if (err) {
        console.error(err);
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "initShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      sharedb = __webpack_require__(56);
      socket = new WebSocket('ws://' + window.location.host);
      connection = new sharedb.Connection(socket);
      var self = this;
      var id = this.getParam('id');

      var loadFileCallback = function () {
        self.onFileLoaded();
      }; //Creates new shared db document and initializes values


      var createNewDocument = function () {
        var new_id = self.getCustomObjId();
        var data = {
          nodes: {},
          edges: {},
          layoutProperties: [_this.editor.layoutProperties],
          globalOptions: [_this.editor.getGlobalOptions()],
          genomicDataMap: {},
          visibleGenomicDataMapByType: {},
          genomicDataGroupList: {},
          genomicDataGroupCount: 0
        };
        window.history.pushState(null, null, '?id=' + new_id);
        self.doc = connection.get('cy', new_id);
        self.doc.create(data, loadFileCallback);
      }; //Check if id exists in parameters
      //If exists open the shared document


      if (id) {
        // Check any document exists with given id
        this.doc = connection.get('cy', id);
        this.doc.fetch(function (err) {
          if (err) throw err;

          if (self.doc.type === null) {
            createNewDocument();
            return;
          }

          self.doc.subscribe(loadFileCallback);
        });
      } else {
        //Create new shared document
        createNewDocument();
      }
    }
  });
  ;
  /*
   * After a file has been initialized and loaded, we can access the
   * document. We will wire up the data in shared document to the UI.
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "onFileLoaded", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.initializeSharedDBDoc();
      this.syncInitialSharedDocData();
      this.initSharedDocEventHandlers();
      this.postFileLoad();
    }
  });
  ;
  /*
   * Synchronizes initial data in the shared document to
   * client's application.
   */

  Object.defineProperty(ShareDBManager.prototype, "syncInitialSharedDocData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      var edgeMap = self.doc.data[this.EDGEMAP_NAME];
      var shareDBLayoutProperties = self.doc.data[this.LAYOUT_PROPS_NAME][0];
      var globalOptions = self.doc.data[this.GLOBAL_OPTS_NAME][0];
      var genomicDataMap = self.doc.data[this.GENOMIC_DATA_MAP_NAME];
      var visDataMap = self.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var groupedGenomicDataMap = self.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var groupedGenomicDataCount = self.doc.data[this.GENOMIC_DATA_GROUP_COUNT];
      var invalidGenes = [];
      var highlightedGenes = [];
      var invalidHighlightedGenes = [];
      var hiddenGenes = [];

      for (var _i = 0, _a = Object.keys(nodeMap); _i < _a.length; _i++) {
        var key = _a[_i];
        var tmpNode = nodeMap[key];
        var tmpNodeId = tmpNode.id;

        if (tmpNode.isInvalidGene && tmpNode.isHighlighted) {
          invalidHighlightedGenes.push(tmpNodeId);
        } else if (tmpNode.isInvalidGene) {
          invalidGenes.push(tmpNodeId);
        } else if (tmpNode.isHighlighted) {
          highlightedGenes.push(tmpNodeId);
        }

        if (tmpNode.isHidden) {
          hiddenGenes.push(tmpNodeId);
        }
      }

      var highlightedEdges = [];

      for (var _b = 0, _c = Object.keys(edgeMap); _b < _c.length; _b++) {
        var key = _c[_b];
        var tmpEdge = edgeMap[key];
        var tmpEdgeId = tmpEdge.id;

        if (tmpEdge.isHighlighted) {
          highlightedEdges.push(tmpEdgeId);
        }
      } //TODO Workaround for legacy pathways
      // Workaround for backward compatibility of legacy pathways
      // Addition of pubmed id field on server if legacy collaborative
      // pathways does not have !


      for (var _d = 0, _e = Object.keys(edgeMap); _d < _e.length; _d++) {
        var key = _e[_d];
        var tmpEdge = edgeMap[key];

        if (tmpEdge.pubmedIDs == undefined || tmpEdge.name == undefined || tmpEdge.bendPoint == undefined) {
          var pubmedIDs = tmpEdge.pubmedIDs == undefined ? [] : tmpEdge.pubmedID;
          var edgeLabel = tmpEdge.name == undefined ? "" : tmpEdge.name;
          var bendPoint = tmpEdge.bendPoint == undefined ? [] : tmpEdge.bendPoint;
          var param = {
            type: tmpEdge.type,
            source: tmpEdge.source,
            id: self.getCustomObjId(),
            target: tmpEdge.target,
            pubmedID: pubmedIDs,
            name: edgeLabel,
            bendPoint: bendPoint
          };
          var newEdge = self.edgeInitializer(param);
          var tmpEdgeID = tmpEdge.id;
          var newEdgeID = newEdge.id;
          var ops = [{
            p: [self.EDGEMAP_NAME, tmpEdgeID],
            od: tmpEdge
          }, {
            p: [self.EDGEMAP_NAME, newEdgeID],
            oi: newEdge
          }];
          self.applyShareDBOperation(ops);
        }
      } //Add real time nodes to local graph


      this.editor.addNewElementsLocally(nodeMap, edgeMap); //Adds different type of highlight to nodes and hides if their property is hidden

      this.editor.highlightElementsInitially(invalidHighlightedGenes, invalidGenes, highlightedGenes, highlightedEdges, hiddenGenes); //Update layout properties & global options!!

      this.editor.updateLayoutPropertiesCallback({
        li: shareDBLayoutProperties
      });
      this.editor.changeGlobalOptions({
        li: globalOptions
      }); //Sync already available genomic data !

      if (!groupedGenomicDataMap) {
        self.insertShareDBObject(self.GENOMIC_DATA_MAP_NAME, '0', []);

        for (var _f = 0, _g = Object.keys(visDataMap); _f < _g.length; _f++) {
          var key = _g[_f];

          var currentMap = external_lodash_default.a.clone(groupedGenomicDataMap['0']); // currentMap.push(visibilityMapKeys[key]);


          self.updateShareDBObject(self.GENOMIC_DATA_MAP_NAME, '0', currentMap);
        }
      }

      if (!groupedGenomicDataCount) {
        var count = self.doc.data[self.GENOMIC_DATA_GROUP_COUNT];
        var op = [{
          p: [self.GENOMIC_DATA_GROUP_COUNT],
          na: -count
        }];
        self.applyShareDBOperation(op);
        groupedGenomicDataCount = self.doc.data[self.GENOMIC_DATA_GROUP_COUNT];
      }

      for (var _h = 0, _j = Object.keys(genomicDataMap); _h < _j.length; _h++) {
        var key_g = _j[_h];
        this.editor.genomicDataOverlayManager.genomicDataMap[key_g] = genomicDataMap[key_g];
      }

      for (var _k = 0, _l = Object.keys(groupedGenomicDataMap); _k < _l.length; _k++) {
        var key_g = _l[_k];
        this.editor.genomicDataOverlayManager.groupedGenomicDataMap[key_g] = groupedGenomicDataMap[key_g];
        var data = groupedGenomicDataMap[key_g];

        if (data.length !== 1) {
          console.log("Grouped genomic data expected to be of length 1 (from sync)");
        }

        data.forEach(function (profileId) {
          _this.editor.addToProfiles(profileId);
        });
      }

      for (var _m = 0, _o = Object.keys(visDataMap); _m < _o.length; _m++) {
        var key_g = _o[_m];
        this.editor.genomicDataOverlayManager.visibleGenomicDataMapByType[key_g] = visDataMap[key_g];
        this.editor.adjustVisibilityShareDB(key_g, visDataMap[key_g]);
      } //Does not seem necessary for not but just for sake of completeness


      this.editor.genomicDataOverlayManager.groupedGenomicDataCount = groupedGenomicDataCount;
      this.editor.genomicDataOverlayManager.showGenomicData();
      this.editor.genomicDataOverlayManager.notifyObservers();
      this.editor.cy.fit(50);
    }
  });
  ;
  /*
   * Initialize event listeners for any operation coming from shareDB
   *
   */

  Object.defineProperty(ShareDBManager.prototype, "initSharedDocEventHandlers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var self = this; //Setup event handlers for maps

      var nodeAddRemoveHandler = function (op) {
        self.editor.shareDBNodeAddRemoveEventCallBack(op);
      };

      var edgeAddRemoveHandler = function (op) {
        self.editor.shareDBEdgeAddRemoveEventCallBack(op);
      };

      var genomicDataAddRemoveHandler = function (op) {
        self.editor.shareDBGenomicDataHandler(op);
      };

      var genomicDataVisibilityChangeHandler = function (op) {
        self.editor.shareDBGenomicDataVisibilityHandler(op);
        self.checkShareDBGenomicData();
      };

      var genomicDataGroupChangeHandler = function (op) {
        self.editor.shareDBGenomicDataGroupChangeHandler(op);
      };

      var updateElementHandler = function (op) {
        self.editor.updateElementCallback(op);
      };

      var updateLayoutPropsHandler = function (op) {
        self.editor.updateLayoutPropertiesCallback(op);
      };

      var updateGlobalOptionsHandler = function (op) {
        self.editor.changeGlobalOptions(op);
      }; //Event listeners for maps


      this.doc.on('op', function (op, source) {
        for (var i = 0; i < op.length; i++) {
          var handleOp = op[i];
          var path = handleOp.p[0];
          var isReplaceEvent = self.isShareDBReplaceEvent(handleOp);

          if (!isReplaceEvent) {
            if (path === self.NODEMAP_NAME) {
              nodeAddRemoveHandler(handleOp);
            } else if (path === self.EDGEMAP_NAME) {
              edgeAddRemoveHandler(handleOp);
            } else if (path === self.GENOMIC_DATA_MAP_NAME) {
              genomicDataAddRemoveHandler(handleOp);
            } else if (path === self.VISIBLE_GENOMIC_DATA_MAP_NAME) {
              genomicDataVisibilityChangeHandler(handleOp);
            } else if (path === self.GENOMIC_DATA_GROUP_NAME) {
              genomicDataGroupChangeHandler(handleOp);
            }
          } else {
            //Then it is update event
            if (path === self.NODEMAP_NAME) {
              updateElementHandler(handleOp);
            } else if (path === self.EDGEMAP_NAME) {
              updateElementHandler(handleOp);
            } else if (path === self.LAYOUT_PROPS_NAME) {
              updateLayoutPropsHandler(handleOp);
            } else if (path === self.GLOBAL_OPTS_NAME) {
              updateGlobalOptionsHandler(handleOp);
            }
          }
        }
      });
    }
  });
  ;
  /*
   * Make sure that genomic cloud data is syncronized
   */

  Object.defineProperty(ShareDBManager.prototype, "checkShareDBGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var self = this;
      var genomicDataMap = self.doc.data[this.GENOMIC_DATA_MAP_NAME];
      var visDataMap = self.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var groupedGenomicDataMap = self.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var groupedGenomicDataCount = self.doc.data[this.GENOMIC_DATA_GROUP_COUNT];

      for (var key in genomicDataMap) {
        this.editor.genomicDataOverlayManager.genomicDataMap[key] = genomicDataMap[key];
      }

      for (var key in visDataMap) {
        this.editor.genomicDataOverlayManager.visibleGenomicDataMapByType[key] = visDataMap[key];
      }

      for (var key in groupedGenomicDataMap) {
        this.editor.genomicDataOverlayManager.groupedGenomicDataMap[key] = groupedGenomicDataMap[key];
      }

      this.editor.genomicDataOverlayManager.groupedGenomicDataCount = groupedGenomicDataCount;
      this.editor.genomicDataOverlayManager.showGenomicData();
      this.editor.genomicDataOverlayManager.notifyObservers();
    }
  });
  ;
  /*
   * Gets the first empty index from the shared document
   * genomic data group count and increments counter by 1
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "getEmptyGroupID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var returnCount = this.doc.data[this.GENOMIC_DATA_GROUP_COUNT];
      this.incrementShareDBGroupCount();
      return returnCount;
    }
  });
  ;
  /*
   * Gets the first empty index from the shared document
   * Initializes & inserts a new genomic data
   * by group id or group name
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "groupGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerNames, inGroupId) {
      var genomicGroupMap = this.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var genomicVisMap = this.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var groupID = "" + inGroupId;
      var currentGroup = [];
      if (genomicGroupMap.hasOwnProperty(groupID)) currentGroup = external_lodash_default.a.clone(genomicGroupMap[groupID]);

      for (var i in cancerNames) {
        if (!genomicVisMap.hasOwnProperty(cancerNames[i])) currentGroup.push(cancerNames[i]);
      } // If group id already exists change existing object


      if (genomicGroupMap.hasOwnProperty(groupID)) {
        this.updateShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
      } else {
        //Insert new group
        this.insertShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
      }
    }
  });
  ; //Clears genomic data on shared document

  Object.defineProperty(ShareDBManager.prototype, "clearGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.clearShareDBGenomicData();
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneData) {
      var genomicMap = this.doc.data[this.GENOMIC_DATA_MAP_NAME]; //Iterate over all genmoic data which is mapped by geneSymbol to list of alteration values
      //that are also mapped by cancer name and associated value

      var ops = [];

      for (var geneSymbol in geneData) {
        var genomicMapEntry = {};
        if (genomicMap.hasOwnProperty(geneSymbol)) genomicMapEntry = external_lodash_default.a.clone(genomicMap[geneSymbol]);

        for (var cancerType in geneData[geneSymbol]) {
          if (!(cancerType in genomicMapEntry)) genomicMapEntry[cancerType] = parseInt(geneData[geneSymbol][cancerType]).toFixed(2);
        }

        ops.push({
          p: [this.GENOMIC_DATA_MAP_NAME, geneSymbol],
          oi: genomicMapEntry
        });
      }

      this.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addGenomicVisibilityData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (visMap) {
      var ops = [];

      for (var cancerStudy in visMap) {
        ops.push({
          p: [this.VISIBLE_GENOMIC_DATA_MAP_NAME, cancerStudy],
          oi: visMap[cancerStudy]
        });
      }

      this.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeVisibility", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodesToHide, isHidden) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      nodesToHide.forEach(function (ele) {
        var nodeID = ele.id();

        if (nodeMap.hasOwnProperty(nodeID)) {
          var realTimeNode = nodeMap[nodeID];
          realTimeNode.isHidden = isHidden;
          self.updateShareDBObject(self.NODEMAP_NAME, nodeID, realTimeNode);
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (elementsToHighlight, isHighlighted) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      var edgeMap = self.doc.data[this.EDGEMAP_NAME];
      elementsToHighlight.forEach(function (ele) {
        var elementID = ele.id();

        if (nodeMap.hasOwnProperty(elementID)) {
          var realTimeNode = nodeMap[elementID];
          realTimeNode.isHighlighted = isHighlighted;
          self.updateShareDBObject(self.NODEMAP_NAME, elementID, realTimeNode);
        }

        if (edgeMap.hasOwnProperty(elementID)) {
          var realTimeEdge = edgeMap[elementID];
          realTimeEdge.isHighlighted = isHighlighted;
          self.updateShareDBObject(self.EDGEMAP_NAME, elementID, realTimeEdge);
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addNewNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      var realTimeGeneratedID = this.getCustomObjId();
      var params = {
        name: nodeData.name,
        type: nodeData.type,
        id: realTimeGeneratedID,
        parent: nodeData.parent,
        w: nodeData.w,
        h: nodeData.h,
        minWidth: nodeData.minWidth,
        minWidthBiasLeft: nodeData.minWidthBiasLeft,
        minWidthBiasRight: nodeData.minWidthBiasRight,
        minHeight: nodeData.minHeight,
        minHeightBiasTop: nodeData.minHeightBiasTop,
        minHeightBiasBottom: nodeData.minHeightBiasBottom
      }; //Ensures new node is compatible with the other nodes

      var newNode = this.nodeInitializer(params);

      if (posData) {
        newNode.x = posData.x;
        newNode.y = posData.y;
      }

      this.insertShareDBObject(this.NODEMAP_NAME, realTimeGeneratedID, newNode);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addNewEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      var realTimeGeneratedID = this.getCustomObjId();
      var params = {
        type: edgeData.type,
        id: realTimeGeneratedID,
        source: edgeData.source,
        target: edgeData.target,
        pubmedIDs: edgeData.pubmedIDs,
        name: edgeData.name,
        bendPoint: edgeData.bendPoint
      }; //Ensures new edge is compatible with the other edge

      var newEdge = this.edgeInitializer(params);
      this.insertShareDBObject(this.EDGEMAP_NAME, realTimeGeneratedID, newEdge);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "removeElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (elementID) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];
      var nodeMap = this.doc.data[this.NODEMAP_NAME];

      if (nodeMap.hasOwnProperty(elementID)) {
        this.deleteShareDBObject(this.NODEMAP_NAME, elementID);
      } else if (edgeMap.hasOwnProperty(elementID)) {
        this.deleteShareDBObject(this.EDGEMAP_NAME, elementID);
      } else {
        throw new Error('Element does not exist in Real Time');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "moveElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();
      var newPos = ele.position();

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.x = newPos.x;
        tmpNode.y = newPos.y;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ; //This function is used for movements of all selected elements wrt alignment selected

  Object.defineProperty(ShareDBManager.prototype, "changeElementsPositionByAlignment", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (coll) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      coll.forEach(function (ele) {
        var elementID = ele.node.id();

        if (nodeMap.hasOwnProperty(elementID)) {
          var tmpNode = nodeMap[elementID];
          tmpNode.x = ele.nextPosition.x;
          tmpNode.y = ele.nextPosition.y;
          self.updateShareDBObject(self.NODEMAP_NAME, elementID, tmpNode);
        } else {
          throw new Error('Element does not exist in nodes !!! ');
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "resizeElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, previousWidth, previousHeight) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();
      var newWidth = ele.width();
      var newHeight = ele.height();
      var currentX = ele.position('x');
      var currentY = ele.position('y');

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.x = currentX + newWidth - previousWidth;
        tmpNode.y = currentY + newHeight - previousHeight;
        tmpNode.w = newWidth;
        tmpNode.h = newHeight;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "setSizeOfElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newWidth, newHeight) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.w = newWidth;
        tmpNode.h = newHeight;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "resizeCompound", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();
      var currentX = ele.position('x');
      var currentY = ele.position('y');

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.x = currentX;
        tmpNode.y = currentY;
        tmpNode.minWidth = minWidth;
        tmpNode.minWidthBiasLeft = minWidthBiasLeft;
        tmpNode.minWidthBiasRight = minWidthBiasRight;
        tmpNode.minHeight = minHeight;
        tmpNode.minHeightBiasTop = minHeightBiasTop;
        tmpNode.minHeightBiasBottom = minHeightBiasBottom;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeNodePositionsShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      var self = this;
      var nodeMap = self.doc.data[self.NODEMAP_NAME];
      nodes.forEach(function (ele) {
        var nodeID = ele.id();

        if (nodeMap.hasOwnProperty(nodeID)) {
          var realTimeNode = nodeMap[nodeID];
          realTimeNode.x = ele.position('x');
          realTimeNode.y = ele.position('y');
          self.updateShareDBObject(self.NODEMAP_NAME, nodeID, realTimeNode);
        } else {
          throw new Error('Element does not exist in nodes !!! ');
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeHighlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeIDs, isInvalid) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME]; //TODO check compound operation inside or outside of for ?

      for (var i in nodeIDs) {
        var nodeID = nodeIDs[i];

        if (nodeMap.hasOwnProperty(nodeID)) {
          var collaborativeNode = nodeMap[nodeID];
          collaborativeNode.isInvalidGene = isInvalid;
          this.updateShareDBObject(this.NODEMAP_NAME, nodeID, collaborativeNode);
        }
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addPubmedIDs", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeID, pubmedIDs) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];

      if (edgeMap.hasOwnProperty(edgeID)) {
        var tmpEdge = edgeMap[edgeID];
        var nonDuplicateArray = [];

        for (var i = 0; i < pubmedIDs.length; i++) {
          if (tmpEdge.pubmedIDs.indexOf(pubmedIDs[i]) < 0) {
            nonDuplicateArray.push(pubmedIDs[i]);
          }
        }

        tmpEdge.pubmedIDs = tmpEdge.pubmedIDs.concat(nonDuplicateArray);
        this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
      } else {
        throw new Error('Edge does not exist in real time !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "removePubmedID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeID, pubmedIDs) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];

      if (edgeMap.hasOwnProperty(edgeID)) {
        var tmpEdge = edgeMap[edgeID];
        var removedIndices = [];

        for (var i = 0; i < pubmedIDs.length; i++) {
          var tmpID = pubmedIDs[i];
          var index = tmpEdge.pubmedIDs.indexOf(tmpID);

          if (index >= 0) {
            removedIndices.push(index);
          }
        }

        for (var i = 0; i < removedIndices.length; i++) {
          tmpEdge.pubmedIDs.remove(removedIndices[i]);
        }

        this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
      } else {
        throw new Error('Edge does not exist in real time !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateEdgeBendPoints", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeID, bendPointsArray) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];

      if (edgeMap.hasOwnProperty(edgeID)) {
        var tmpEdge = edgeMap[edgeID];
        tmpEdge.bendPoint = bendPointsArray;
        this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
      } else {
        throw new Error('Edge does not exist in real time !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newName) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];
      var elementID = ele.id();

      if (ele.isNode()) {
        if (nodeMap.hasOwnProperty(elementID)) {
          var tmpNode = nodeMap[elementID];
          tmpNode.name = newName;
          this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
        } else {
          throw new Error('Element does not exist in nodes !!! ');
        }
      } else {
        if (edgeMap.hasOwnProperty(elementID)) {
          var tmpEdge = edgeMap[elementID];
          tmpEdge.name = newName;
          this.updateShareDBObject(this.EDGEMAP_NAME, elementID, tmpEdge);
        } else {
          throw new Error('Element does not exist in edges !!! ');
        }
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeParent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (rootNode, newParentId, connectedEdges) {
      var self = this;
      var nodeLookupTable = {};

      function traverseFromRoot(rootNode, parId) {
        /*
         remove outermost node,
         create new real time node with given parentId,
         pass id of this real time node to children,
         repeat in a recursive manner
         after that restore the edges that dissapear by removed nodes
         during change parent
         */
        var refNode = rootNode.nodeRef;
        var children = rootNode.children;
        var newParentId = parId;

        if (refNode) {
          var refNodeId = refNode.id();
          var nodeData = refNode.data();
          var posData = refNode.position();
          var currentWidth = refNode.data('w');
          var currentHeight = refNode.data('h');
          var newNodeData = {
            name: nodeData.name,
            type: nodeData.type,
            x: posData.x,
            y: posData.y,
            w: currentWidth,
            h: currentHeight,
            parent: -1
          };

          if (parId) {
            newNodeData.parent = parId;
          }

          self.removeElement(refNodeId);
          var newNode = self.nodeInitializer(newNodeData);
          var newNodeId = newNode.id;
          self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode);
          newParentId = newNodeId;
          nodeLookupTable[refNodeId] = newNodeId;
        }

        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
          var childNode = children_1[_i];
          traverseFromRoot(childNode, newParentId);
        }
      } //Begin traversing from given root node


      traverseFromRoot(rootNode, newParentId); //Restore edges that dissapear by the change parent operation
      //TODO compound operations ?

      connectedEdges.forEach(function (edge, index) {
        var edgeData = edge.data();
        self.removeElement(edge.id());
        var newSource = nodeLookupTable[edgeData.source];
        var newTarget = nodeLookupTable[edgeData.target];

        if (newSource) {
          edgeData.source = newSource;
        }

        if (newTarget) {
          edgeData.target = newTarget;
        }

        self.addNewEdge(edgeData);
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "removeAllElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];
      var ops = []; //Remove all real time nodes

      for (var _i = 0, _a = Object.keys(nodeMap); _i < _a.length; _i++) {
        var key = _a[_i];
        ops.push({
          p: [this.NODEMAP_NAME, key],
          od: nodeMap[key]
        });
      } //Remove all real time edges


      for (var _b = 0, _c = Object.keys(edgeMap); _b < _c.length; _b++) {
        var key = _c[_b];
        ops.push({
          p: [this.EDGEMAP_NAME, key],
          od: edgeMap[key]
        });
      }

      this.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "loadGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      var self = this;
      this.removeAllElements(); //Function that traverses graph tree recursively.

      var oldIdNewIdMap = {};

      function traverseTree(node, newParentId) {
        node.data.x = node.position.x;
        node.data.y = node.position.y; //Update parent !

        if (newParentId) {
          var parent = node.data.parent;

          if (parent) {
            node.data.parent = newParentId;
          }
        } //Create new real time node


        var newNodeId = self.getCustomObjId();
        var params = node.data;
        oldIdNewIdMap[params.id] = newNodeId;
        var newNode = self.nodeInitializer(params);
        newNode.id = newNodeId;
        self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode); //If node has children recursively traverse sub graphs and update parent field of child nodes

        if (node.children.length > 0) {
          for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var tmpNode = _a[_i];
            traverseTree(tmpNode, newNodeId);
          }
        }
      } //Create graph hierarchy from given list of flat nodes


      var tree = this.graphUtilities.createGraphHierarchyRealTime(nodes); //Traverse from root nodes of tree

      for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var rootLevelNode = tree_1[_i];
        traverseTree(rootLevelNode, undefined);
      }
      /*
        Create real time edges, update the source and target fields, since new ids will be generated for the nodes in
        real time
      */


      for (var _a = 0, edges_1 = edges; _a < edges_1.length; _a++) {
        var edge = edges_1[_a];
        edge.data.source = oldIdNewIdMap[edge.data.source];
        edge.data.target = oldIdNewIdMap[edge.data.target];
        var params = edge.data;
        var newEdgeID = self.getCustomObjId();
        params.id = newEdgeID;
        var newEdge = self.edgeInitializer(params);
        self.insertShareDBObject(self.EDGEMAP_NAME, newEdgeID, newEdge);
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "mergeGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      var realTimeNodeMap = nodeMap;
      var realTimeNodeLookupTable = {};
      var realTimeNodeNameLookupTable = {};
      var oldIdNewIdMap = {}; //Create lookup table for real time nodes
      //items are stored in an array in the resulting array of nodeMap.items()
      // [0] - id, [1] - object

      for (var i in realTimeNodeMap) {
        var nodeMapItem = realTimeNodeMap[i];
        realTimeNodeLookupTable[nodeMapItem.id] = nodeMapItem;
        realTimeNodeNameLookupTable[nodeMapItem.name] = nodeMapItem;
      } //Recursive traverse definition


      function traverseTree(node, newParentId) {
        //Search by name !
        //We have not found a node that exist in the graph, add normally
        if (!(node.data.name in realTimeNodeNameLookupTable)) {
          node.data.x = node.position.x;
          node.data.y = node.position.y; //Update parent !

          if (newParentId) {
            var parent = node.data.parent;

            if (parent) {
              node.data.parent = newParentId;
            }
          } //Create new real time node


          var newNodeId = self.getCustomObjId();
          oldIdNewIdMap[node.data.id] = newNodeId;
          var newNode = self.nodeInitializer(node.data);
          newNode.id = newNodeId;
          self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode); //If node has children recursively traverse sub graphs and update parent field of child nodes

          if (node.children.length > 0) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
              var tmpNode = _a[_i];
              traverseTree(tmpNode, newNodeId);
            }
          }
        } // At this point there exists another node in the graph with the same name as 'node'
        // we need to update parent field of children of this node if any
        else {
            var sameNameNode = realTimeNodeNameLookupTable[node.data.name];
            var sameNodeId = sameNameNode.id;
            oldIdNewIdMap[node.data.id] = sameNodeId; //If node has children recursively traverse sub graphs and update parent field of child nodes

            if (node.children.length > 0) {
              for (var _b = 0, _c = node.children; _b < _c.length; _b++) {
                var tmpNode = _c[_b];
                traverseTree(tmpNode, sameNodeId);
              }
            }
          }
      } //Traverse from root nodes of tree


      var tree = this.graphUtilities.createGraphHierarchyRealTime(nodes);

      for (var _i = 0, tree_2 = tree; _i < tree_2.length; _i++) {
        var rootLevelNode = tree_2[_i];
        traverseTree(rootLevelNode, rootLevelNode.data.id);
      }
      /*
       Create real time edges, update the source and target fields, since new ids will be generated for the nodes in
       real time
       */


      var ops = [];

      for (var _a = 0, edges_2 = edges; _a < edges_2.length; _a++) {
        var edge = edges_2[_a];
        edge.data.source = oldIdNewIdMap[edge.data.source];
        edge.data.target = oldIdNewIdMap[edge.data.target];
        var newEdge = self.edgeInitializer(edge.data);
        var newEdgeID = this.getCustomObjId();
        newEdge.id = newEdgeID;
        ops.push({
          p: [self.EDGEMAP_NAME, newEdgeID],
          oi: newEdge
        });
      }

      self.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newLayoutProperties) {
      this.updateShareDBLayoutProperties(newLayoutProperties);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newOptions) {
      this.updateShareDBGlobalOptions(newOptions);
    }
  });
  ;
  /*
   * Creates graph hierarchy from given flat list of nodes list, nodes list is assumed to have parent-child
   * relationship by a field 'parent' which represents to the id of the parent node This function is specific
   * for the needs of TCGA Pathway Curation Tool 04/07/2016
   *
   * @param nodes {array}: flat list of nodes of a graph
   * @return {array}: Tree representation in array, entries are root level nodes. node.children gives children nodes
   * of each node in the returned array.
   * a node in corresponding level.
   *
   * */

  Object.defineProperty(ShareDBManager.prototype, "createGraphHierarchy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      //Some arrays and maps for creating graph hierarchy
      var tree = [];
      var mappedArr = {}; // First map the nodes of the array to an object -> create a hash table.

      for (var i = 0, len = nodes.length; i < len; i++) {
        var arrElem = nodes[i];
        mappedArr[arrElem.data.id] = arrElem;
        mappedArr[arrElem.data.id].children = [];
      }

      for (var _i = 0, _a = Object.keys(mappedArr); _i < _a.length; _i++) {
        var id = _a[_i];
        var mappedElem = mappedArr[id]; // If the element is not at the root level, add it to its parent array of children.

        if (mappedElem.data.parent) {
          mappedArr[mappedElem.data.parent].children.push(mappedElem);
        } // If the element is at the root level, add it to first level elements array.
        else {
            tree.push(mappedElem);
          }
      }

      return tree;
    }
  });
  ; //Makes sure that edge is compatible with edges in shared document

  Object.defineProperty(ShareDBManager.prototype, "edgeInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var edge = {};
      edge.id = params.id || this.getCustomObjId();
      edge.type = params.type || "undefined";
      edge.source = params.source || "undefined";
      edge.target = params.target || "undefined";
      edge.name = params.name || "";
      edge.isHighlighted = params.isHighlighted || false;

      if (params.pubmedIDs) {
        if (edge.pubmedIDs == undefined) {
          edge.pubmedIDs = [];
        }

        if (params.pubmedIDs.length > 0) edge.pubmedIDs.push(params.pubmedIDs);
      } else {
        edge.pubmedIDs = [];
      }

      if (params.bendPoint) {
        if (edge.bendPoint == undefined) {
          edge.bendPoint = [];
        }

        edge.bendPoint.push(params.bendPoint);
      } else {
        edge.bendPoint = [];
      }

      return edge;
    }
  });
  ; //Makes sure that node is compatible with nodes in shared document

  Object.defineProperty(ShareDBManager.prototype, "nodeInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var node = {};
      node.id = params.id || this.getCustomObjId();
      node.name = params.name || "undefined";
      node.type = params.type || "undefined";
      node.parent = params.parent || "undefined";
      node.x = params.x || "undefined";
      node.y = params.y || "undefined";
      node.w = params.w || "undefined";
      node.h = params.h || "undefined";
      node.minWidth = params.minWidth || 0;
      node.minWidthBiasLeft = params.minWidth || 0;
      node.minWidthBiasRight = params.minWidth || 0;
      node.minHeight = params.minWidth || 0;
      node.minHeightBiasTop = params.minWidth || 0;
      node.minHeightBiasBottom = params.minWidth || 0;
      node.isHidden = params.isHidden || false;
      node.isInvalidGene = params.isInvalidGene || false;
      node.isHighlighted = params.isHighlighted || false;
      return node;
    }
  });
  ; //Makes sure that layout properties is compatible with layout properties in shared document

  Object.defineProperty(ShareDBManager.prototype, "layoutPropertiesInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var layoutProperties = {};
      layoutProperties.name = params.name || 'undefined';
      layoutProperties.nodeRepulsion = params.nodeRepulsion || 'undefined'; // this.nodeOverlap = params.nodeOverlap || 'undefined';

      layoutProperties.idealEdgeLength = params.idealEdgeLength || 'undefined';
      layoutProperties.edgeElasticity = params.edgeElasticity || 'undefined';
      layoutProperties.nestingFactor = params.nestingFactor || 'undefined';
      layoutProperties.gravity = params.gravity || 'undefined';
      layoutProperties.numIter = params.numIter || 'undefined';
      layoutProperties.tile = params.tile || 'undefined';
      layoutProperties.animate = params.animate || 'undefined';
      layoutProperties.randomize = params.randomize || false;
      layoutProperties.gravityRangeCompound = params.gravityRangeCompound || 'undefined';
      layoutProperties.gravityCompound = params.gravityCompound || 'undefined';
      layoutProperties.gravityRange = params.gravityRange || 'undefined';
      layoutProperties.tilingPaddingVertical = params.tilingPaddingVertical || 'undefined';
      layoutProperties.tilingPaddingHorizontal = params.tilingPaddingHorizontal || 'undefined';
      layoutProperties.initialEnergyOnIncremental = params.initialEnergyOnIncremental || 'undefined';
      return layoutProperties;
    }
  });
  ; //Makes sure that global options is compatible with global options in shared document

  Object.defineProperty(ShareDBManager.prototype, "globalOptionsInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var globalOptions = {};
      globalOptions.zoomLevel = params.zoomLevel || 'undefined';
      globalOptions.panLevel = params.panLevel || 'undefined';
      return globalOptions;
    }
  });
  ; //Create unique ID for elements

  Object.defineProperty(ShareDBManager.prototype, "getCustomObjId", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // see http://stackoverflow.com/a/8809472
      // we need to take care of our own IDs because the ones automatically generated by cytoscape (also UUID)
      // don't comply with xsd:SID type that must not begin with a number
      // Public Domain/MIT
      var d = Date.now();

      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }

      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "getParam", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (urlParam) {
      var regExp = new RegExp(urlParam + '=(.*?)($|&)', 'g');
      var match = window.location.search.match(regExp);

      if (match && match.length) {
        match = match[0];
        match = match.replace(urlParam + '=', '').replace('&', '');
      } else {
        match = null;
      }

      return match;
    }
  });
  ;
  return ShareDBManager;
}();

/* harmony default export */ var managers_ShareDBManager = (ShareDBManager_ShareDBManager);
// EXTERNAL MODULE: external "jquery-ui-dist/jquery-ui"
var jquery_ui_ = __webpack_require__(57);

// CONCATENATED MODULE: ./src/utils/DragDropNodeAddPlugin.tsx




var DragDropNodeAddPlugin_DragDropNodeAddPlugin =
/** @class */
function () {
  function DragDropNodeAddPlugin(editor, cy, pathwayHandler) {
    Object.defineProperty(this, "pathwayHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.editor = editor;
    this.cy = cy;
    this.pathwayHandler = pathwayHandler;
    this.initNodeAdd();
  } //TODO JQUERY IS IGNORED


  Object.defineProperty(DragDropNodeAddPlugin.prototype, "initNodeAdd", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var nodeAddClass = this;
      var defaults = {
        height: 30,
        width: 30,
        padding: 5,
        backgroundColorDiv: '#fbfbfb',
        borderColorDiv: '#fff',
        borderWidthDiv: '0px',
        borderRadiusDiv: '5px',
        icon: '',
        nodeParams: function () {
          // return element object to be passed to cy.add() for adding node
          return {};
        }
      };
      var self = this; // @ts-ignore

      external_jquery_default.a.fn.cytoscapeNodeadd = function (params) {
        var options = external_jquery_default.a.extend(true, {}, defaults, params);
        var fn = params;
        var functions = {
          destroy: function () {
            var $this = external_jquery_default()(this);
            $this.find(".ui-cytoscape-nodeadd").remove();
          },
          init: function () {
            return external_jquery_default()(this).each(function () {
              var components = options.components;

              for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
                var component = components_1[_i];
                var dragContainer = component.container; //var explanationText = component.explanationText;

                var $nodeadd = external_jquery_default()('<div class="ui-cytoscape-nodeadd"></div>');
                dragContainer.append($nodeadd);
                var $nodeDragHandle = external_jquery_default()('<div class="ui-cytoscape-nodeadd-nodediv"> \
                                                <span id="ui-cytoscape-nodeadd-icon" class="draggable" nodeType="' + component.nodeType + '">\
                                                  <img src="' + component.icon + '"</img>\
                                                </span>\
                                              </div>');
                $nodeadd.append($nodeDragHandle);
                $nodeDragHandle.bind("mousedown", function (e) {
                  e.stopPropagation(); // don't trigger dragging of nodeadd

                  e.preventDefault(); // don't cause text selection
                }); //Setup UI

                dragContainer.find(".ui-cytoscape-nodeadd-nodediv").css({
                  background: options.backgroundColorDiv,
                  border: options.borderWidthDiv + ' solid ' + options.borderColorDiv,
                  'border-radius': options.borderRadiusDiv
                }); //Init Draggable

                dragContainer.find("#ui-cytoscape-nodeadd-icon").draggable({
                  helper: "clone",
                  cursor: "pointer"
                });
              } // @ts-ignore TODO: AMENDMENT ATTENTION


              var $container = external_jquery_default()(this); //Init Droppable
              // @ts-ignore TODO: Droppable is ignored

              $container.droppable({
                activeClass: "ui-state-highlight",
                // accept: "#ui-cytoscape-nodeadd-icon",
                drop: function (event, ui) {
                  $container.removeClass("ui-state-highlight");
                  var currentOffset = $container.offset();
                  var relX = event.pageX - currentOffset.left;
                  var relY = event.pageY - currentOffset.top;
                  var nodeType = external_jquery_default()(ui.helper).attr('nodeType').toUpperCase();
                  var cy = nodeAddClass.cy; //Hold a map for parents and candidate parent nodes for this addition

                  var nodeMap = {};
                  var parentMap = {}; //Loop through nodes for hit testing about drag position on canvas

                  cy.nodes().forEach(function (node) {
                    var nodeBbox = node.renderedBoundingBox(); //Rectangle point test

                    if (relX <= nodeBbox.x2 && relX >= nodeBbox.x1 && relY <= nodeBbox.y2 && relY >= nodeBbox.y1 && node.data().type != 'GENE') {
                      //If node has a children put an entry to the parentMap
                      if (node.children().length > 0) {
                        parentMap[node.id()] = true;
                      } //If parent of this node is already added to the node map remove it, since our candidate is in deeper level !


                      if (parentMap[node._private.data.parent]) {
                        delete nodeMap[node._private.data.parent];
                      } //Add an entry to node map


                      nodeMap[node.id()] = node;
                    }
                  }); //Check if any parent found, if so set parent field

                  var parent = nodeMap[Object.keys(nodeMap)[0]];
                  var nodeData = {
                    w: "0",
                    h: "100",
                    parent: 0,
                    type: nodeType,
                    name: 'New ' + external_jquery_default()(ui.helper).attr('nodeType')
                  };

                  if (parent) {
                    if (parent.data().type == "FAMILY" || parent.data().type == "COMPLEX") {
                      if (nodeType != "COMPARTMENT" && nodeType != "PROCESS") {
                        nodeData.parent = parent.id();
                      }
                    } else {
                      nodeData.parent = parent.id();
                    }
                  } //TODO one place access to these


                  nodeData.w = "150";
                  nodeData.h = "52"; //Adjust position according to the zoom level and pan !
                  //To set rendered position !!!
                  //TODO refactor this !

                  relX = relX / cy.zoom() + cy.extent().x1;
                  relY = relY / cy.zoom() + cy.extent().y1;
                  nodeAddClass.editor.addNode(nodeData, {
                    x: relX,
                    y: relY
                  });
                  self.pathwayHandler("Additional Pathway");
                }
              });
            });
          }
        };

        if (functions[fn]) {
          return functions[fn].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof fn == 'object' || !fn) {
          return functions.init.apply(this, arguments);
        } else {
          external_jquery_default.a.error("No such function `" + fn + "` for jquery.cytoscapenodeadd");
        }

        return external_jquery_default()(this);
      }; // @ts-ignore


      external_jquery_default.a.fn.cynodeadd = external_jquery_default.a.fn.cytoscapeNodeadd;

      try {
        /* Adding as an extension to the core functionality of cytoscape.js*/
        external_cytoscape_default()('core', 'nodeadd', function (options) {
          // @ts-ignore
          external_jquery_default()(this.container()).cytoscapeNodeadd(options);
        });
      } catch (err) {
        console.log(err);
      }
    }
  });
  return DragDropNodeAddPlugin;
}();

/* harmony default export */ var utils_DragDropNodeAddPlugin = (DragDropNodeAddPlugin_DragDropNodeAddPlugin);
// CONCATENATED MODULE: ./src/ui/CytoscapeArea.tsx
var CytoscapeArea_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var CytoscapeArea_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore








 // @ts-ignore

window.$ = external_jquery_default.a;

var edgeHandles = __webpack_require__(58);

var edgeEditing = __webpack_require__(59);

var regCose = __webpack_require__(60);

var nodeResize = __webpack_require__(61);

var undoRedo = __webpack_require__(62);

var panzoom = __webpack_require__(63);

var styleSheet = __webpack_require__(64);

var panzoomOpts = __webpack_require__(65);

var CytoscapeArea_navigator = __webpack_require__(66);

var contextMenus = __webpack_require__(67);

var konva = __webpack_require__(68);

var viewUtilities = __webpack_require__(69);

var grid_guide = __webpack_require__(70);

var cyqtip = __webpack_require__(71);

var CytoscapeArea_CytoscapeArea =
/** @class */
function (_super) {
  CytoscapeArea_extends(CytoscapeArea, _super);

  function CytoscapeArea(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "cyDiv", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "edgeAddingMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "viewOperationsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "qtipManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "genomicDataExplorerView", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "pathwayDetailsView", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "viewUtilities", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isCbioPortal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "shareDBManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "cxtMenuManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "dragDropNodeAddManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isMountedFirst", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(_this, "eh", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "lastSelectedEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    _this.isCollaborative = props.isCollaborative;
    _this.edgeAddingMode = 0;
    _this.isCbioPortal = props.isCbioPortal;
    return _this; // this.init();
    // this.createSampleMenu(); //TODO: AMENDMENT Menu must be react.
    // this.createCBioPortalAccessModal();
  }

  Object.defineProperty(CytoscapeArea.prototype, "componentWillUpdate", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nextProps) {
      this.getPathway(nextProps.selectedPathway);
    }
  }); // This method only opens pathways that are available in pathway.json. Namely, imported or merged pathways are not opened via this method.
  // Yet, they individually call parsing method.

  Object.defineProperty(CytoscapeArea.prototype, "getPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedPathway) {
      if (!selectedPathway || selectedPathway === '') return;
      var data = pathways[selectedPathway]; // It might be non-existent due to pathway being created using collaborative mode, or pathway loaded elsewhere (import vs.)

      if (!data) {
        return;
      } // TODO Problematic const data = pathways["../samples/BLCA-2014-RTK-RAS-PI(3)K-pathway.txt"];


      var parsedGraph = utils_SaveLoadUtility.parseGraph(data, true);
      var allEles = parsedGraph;
      this.editor.loadFile(allEles.nodes, allEles.edges);
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return external_react_default.a.createElement("div", {
        className: this.props.isCbioPortal ? "" : "cyContainer",
        style: {
          border: 0
        }
      }, external_react_default.a.createElement("div", {
        ref: this.cyDivHandler,
        id: "cy",
        style: {
          "border": "3px solid " + (this.isCbioPortal ? "#4389c0" : "#1abc9c"),
          "height": this.isCbioPortal ? "800px" : "100%",
          "borderRadius": "6px",
          marginTop: "0px"
        }
      }), external_react_default.a.createElement("div", {
        className: "cytoscape-navigator-wrapper"
      }));
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "componentDidMount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isMountedFirst) {
        this.init();
        this.isMountedFirst = false;
      }

      this.getPathway(this.props.selectedPathway);
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "cyDivHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (div) {
      this.cyDiv = div;
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "init", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // Create portal accessor
      this.portalAccessor = new utils_CBioPortalAccessor(); // Initializes cytoscape

      this.initCyJS(); // Initialize cytoscape based handlers here

      this.initCyHandlers();
      this.initKeyboardHandlers();
      this.initUndoRedoFunctionality();
      this.initCBioPortalFunctionalities();
      this.placePanzoomAndOverlay(); //this.appManager = this;
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "placePanzoomAndOverlay", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      //TODO place navigator !!!
      var offset = 5; // @ts-ignore

      var topCy = external_jquery_default()(this.cyDiv).offset().top; //var bottomCy = $('.cyContainer').offset().bottom;
      // @ts-ignore

      var leftCy = external_jquery_default()(this.cyDiv).offset().left; //var rightCy = $('.cyContainer').offset().right;
      // @ts-ignore

      var heightCy = external_jquery_default()(this.cyDiv).outerHeight(); // @ts-ignore

      var widthCy = external_jquery_default()(this.cyDiv).outerWidth();
      var heightNavigator = external_jquery_default()('.cytoscape-navigator-wrapper').outerHeight();
      var widthNavigator = external_jquery_default()('.cytoscape-navigator-wrapper').outerWidth();
      var heightPatwayNavbar = external_jquery_default()('.pathway-navbar').outerHeight();
      var heightPathwayToolbar = external_jquery_default()('.pathway-toolbar').outerHeight();
      var widthSideBar = external_jquery_default()('.sideBarWrapper').outerWidth();
      var widthcBioPortalSideBar = external_jquery_default()('.cBioPortal-sidebar').outerWidth(); //706px 1513.15px
      //694px 1391.15px
      //var heightPanzoom = $('.cy-panzoom').outerHeight();
      //var widthPanzoom = $('.cy-panzoom').outerWidth();

      if (!this.isCbioPortal) {
        external_jquery_default()('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - heightNavigator - offset + 13);
        external_jquery_default()('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator - offset + 21 - 0.5 + 0.35); //$('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator - offset);
      } else {
        external_jquery_default()('.cytoscape-navigator-wrapper').css('bottom', 10.5);
        external_jquery_default()('.cytoscape-navigator-wrapper').css('right', 0); //$('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator + widthcBioPortalSideBar + offset - widthSideBar);
      }

      external_jquery_default()('.cytoscape-navigator-wrapper').css('z-index', 1039); //Relative is used so that its position depends on the below properties

      external_jquery_default()('.cy-panzoom').css('position', 'relative');
      external_jquery_default()('.cy-panzoom').css('top', 2);
      external_jquery_default()('.cy-panzoom').css('left', widthCy - 57);
      external_jquery_default()('.cy-panzoom').css('z-index', 1039); //Makes the width of panzoom container to 0

      external_jquery_default()('.cy-panzoom').css('width', 200);
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "getPathwayData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.pathwayDetailsView.getPathwayData();
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initCyJS", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      try {
        panzoom(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      } // cxtmenu( cytoscape, $ ); // register extension


      try {
        regCose(external_cytoscape_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        CytoscapeArea_navigator(external_cytoscape_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        grid_guide(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        undoRedo(external_cytoscape_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        contextMenus(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        nodeResize(external_cytoscape_default.a, external_jquery_default.a, konva); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        edgeEditing(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        viewUtilities(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        cyqtip(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        edgeHandles(external_cytoscape_default.a, external_jquery_default.a);
      } catch (err) {
        console.log(err);
      }

      this.edgeAddingMode = 0; // var allEles = SaveLoadUtilities.parseGraph(sampleGraph);

      this.cy = external_cytoscape_default()({
        container: this.cyDiv,
        boxSelectionEnabled: true,
        autounselectify: false,
        wheelSensitivity: 0.1,
        style: styleSheet,
        // elements: allEles,
        textureOnViewport: false,
        motionBlur: true,
        layout: {
          name: 'preset'
        }
      });
      this.undoRedoManager = this.cy.undoRedo(); // Create Manager Classes

      this.shareDBManager = new managers_ShareDBManager(function () {
        var dbDoc = _this.shareDBManager.getDoc();
      });
      this.editor = new managers_EditorActionsManager(this.isCollaborative, this.shareDBManager, this.cy, this.isCbioPortal, this.undoRedoManager, this.portalAccessor, this.props.profiles);
      this.shareDBManager.setEditor(this.editor);

      if (this.isCollaborative) {
        this.shareDBManager.initShareDB();
      } //@ts-ignore


      window.editorActionsManager = this.editor;
      this.qtipManager = new managers_QtipManager(this.cy, this.editor);
      this.cxtMenuManager = new managers_ContextMenuManager(this.cy, this.editor, this.props.handleOpen, this.undoRedoManager, this.props.isCollaborative);
      this.dragDropNodeAddManager = new utils_DragDropNodeAddPlugin(this.editor, this.cy, this.props.pathwayHandler); // Initialize panzoom

      this.cy.panzoom(panzoomOpts); // Node Add initialization

      this.cy.nodeadd({
        // Once the explanationText is cast to uppercase they will be node types
        components: [{
          container: external_jquery_default()('#simpleNodeDiv'),
          nodeType: 'Gene',
          icon: gene_default.a
        }, {
          container: external_jquery_default()('#familyNodeDiv'),
          nodeType: 'Family',
          icon: family_default.a
        }, {
          container: external_jquery_default()('#complexNodeDiv'),
          nodeType: 'Complex',
          icon: complex_default.a
        }, {
          container: external_jquery_default()('#compartmentNodeDiv'),
          nodeType: 'Compartment',
          icon: compartment_default.a
        }, {
          container: external_jquery_default()('#processNodeDiv'),
          nodeType: 'Process',
          icon: process_default.a
        }]
      });
      var self = this;
      var edgeHandleDefaults = {
        preview: true,
        stackOrder: 4,
        handleSize: 10,
        handleColor: '#1abc9c',
        handleLineType: 'ghost',
        handleLineWidth: 1,
        handleNodes: 'node',
        hoverDelay: 1,
        cxt: false,
        enabled: false,
        toggleOffOnLeave: true,
        edgeType: function (sourceNode, targetNode) {
          // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
          // returning null/undefined means an edge can't be added between the two nodes
          return 'flat';
        },
        handlePosition: function (node) {
          return 'middle top'; // sets the position of the handle in the format of "X-AXIS Y-AXIS" such as "left top", "middle top"
        },
        loopAllowed: function (node) {
          // for the specified node, return whether edges from itself to itself are allowed
          return false;
        },
        nodeLoopOffset: -50,
        nodeParams: function (sourceNode, targetNode) {
          // for edges between the specified source and target
          // return element object to be passed to cy.add() for intermediary node
          return {};
        },
        edgeParams: function (sourceNode, targetNode, i) {
          // for edges between the specified source and target
          // return element object to be passed to cy.add() for edge
          // NB: i indicates edge index in case of edgeType: 'node'
          return {};
        },
        start: function (sourceNode) {
          // fired when edgehandles interaction starts (drag on handle)
          var type = self.getGlobalEdgeType(); //self.cy.edgehandles('option', 'ghostEdgeType', type);
        },
        complete: function (sourceNode, targetNodes, addedEntities) {
          //  // Remove recently added edge !
          //  // FBI takes this case from now on :O
          //  // We will take care of addition in our manager :)
          self.cy.remove(addedEntities);
          self.editor.addEdge({
            source: sourceNode.id(),
            target: targetNodes[0].id(),
            // @ts-ignore
            type: self.getGlobalEdgeType(window.edgeAddingMode),
            pubmedIDs: [],
            name: ""
          });
        },
        stop: function (sourceNode) {
          // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
          //TODO refactor this, so terrible for now
          //$('.edge-palette a').blur().removeClass('active');
          self.edgeAddingMode = -1;
          self.eh.disable();
          self.eh.hide();
          self.props.setActiveEdge(-1);
        }
      }; //Edge Handles initialization

      this.eh = this.cy.edgehandles(edgeHandleDefaults);
      this.eh.disable();
      this.props.editorHandler(this.editor, this.eh, this.undoRedoManager);
      if (!this.isCbioPortal) this.cy.nodeResize({
        padding: 5,
        undoable: true,
        grappleSize: 8,
        grappleColor: "#ffc90e",
        inactiveGrappleStroke: "inside 1px blue",
        boundingRectangle: true,
        boundingRectangleLineDash: [4, 8],
        boundingRectangleLineColor: "ffc90e",
        boundingRectangleLineWidth: 1.5,
        zIndex: 999,
        moveSelectedNodesOnKeyEvents: function () {
          return true;
        },
        minWidth: function (node) {
          var data = node.data("resizeMinWidth");
          return data ? data : 15;
        },
        minHeight: function (node) {
          var data = node.data("resizeMinHeight");
          return data ? data : 15;
        },
        // Getters for some style properties the defaults returns ele.css('property-name')
        // you are encouraged to override these getters
        getCompoundMinWidth: function (node) {
          return node.style('min-width');
        },
        getCompoundMinHeight: function (node) {
          return node.style('min-height');
        },
        getCompoundMinWidthBiasRight: function (node) {
          return node.style('min-width-bias-right');
        },
        getCompoundMinWidthBiasLeft: function (node) {
          return node.style('min-width-bias-left');
        },
        getCompoundMinHeightBiasTop: function (node) {
          return node.style('min-height-bias-top');
        },
        getCompoundMinHeightBiasBottom: function (node) {
          return node.style('min-height-bias-bottom');
        },
        isFixedAspectRatioResizeMode: function (node) {
          return node.is(".fixedAspectRatioResizeMode");
        },
        isNoResizeMode: function (node) {
          return undefined;
        },
        // These optional function will be executed to set the width/height of a node in this extension
        // Using node.css() is not a recommended way (http://js.cytoscape.org/#eles.style) to do this. Therefore, overriding these defaults
        // so that a data field or something like that will be used to set node dimentions instead of directly calling node.css()
        // is highly recommended (Of course this will require a proper setting in the stylesheet).
        setWidth: function (node, width) {
          node.style('width', width);
        },
        setHeight: function (node, height) {
          node.style('height', height);
        },
        setCompoundMinWidth: function (node, minWidth) {
          node.style('min-width', minWidth);
        },
        setCompoundMinHeight: function (node, minHeight) {
          node.style('min-height', minHeight);
        },
        setCompoundMinWidthBiasLeft: function (node, minWidthBiasLeft) {
          node.style('min-width-bias-left', minWidthBiasLeft);
        },
        setCompoundMinWidthBiasRight: function (node, minHeightBiasRight) {
          node.style('min-width-bias-right', minHeightBiasRight);
        },
        setCompoundMinHeightBiasTop: function (node, minHeightBiasTop) {
          node.style('min-height-bias-top', minHeightBiasTop);
        },
        setCompoundMinHeightBiasBottom: function (node, minHeightBiasBottom) {
          node.style('min-height-bias-bottom', minHeightBiasBottom);
        },
        cursors: {
          // May take any "cursor" css property
          default: "default",
          inactive: "not-allowed",
          nw: "nw-resize",
          n: "n-resize",
          ne: "ne-resize",
          e: "e-resize",
          se: "se-resize",
          s: "s-resize",
          sw: "sw-resize",
          w: "w-resize"
        },
        resizeToContentCueImage: resizeCue_default.a,
        resizeToContentFunction: this.editor.resizeNodesToContent.bind(this.editor)
      }); //Navigator for cytoscape js

      var navDefaults = {
        container: '.cytoscape-navigator-wrapper' // can be a HTML or jQuery element or jQuery selector
        ,
        viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
        ,
        thumbnailEventFramerate: 10 // max thumbnail's updates per second triggered by graph updates
        ,
        thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
        ,
        dblClickDelay: 200 // milliseconds
        ,
        removeCustomContainer: true // destroy the container specified by user on plugin destroy
        ,
        rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance

      }; //TODO: AMENDMENT declaration removed

      this.cy.navigator(navDefaults); // get navigator instance, nav

      var viewUtilitiesOpts = {
        node: {
          highlighted: {
            'border-width': 2,
            'border-color': '#bc1142'
          },
          unhighlighted: {
            'opacity': function (ele) {
              // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
              return ele.css('opacity');
            } // styles for when nodes are unhighlighted.}

          }
        },
        edge: {
          highlighted: {},
          unhighlighted: {
            'opacity': function (ele) {
              // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
              return ele.css('opacity');
            } // styles for when edges are unhighlighted.

          }
        },
        setVisibilityOnHide: false,
        setDisplayOnHide: true,
        neighbor: function () {
          return false;
        },
        neighborSelectTime: 500 //ms, time to taphold to select desired neighbors

      };
      this.viewUtilities = this.cy.viewUtilities(viewUtilitiesOpts);
      this.placePanzoomAndOverlay();
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "getGlobalEdgeType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var type = "NONE"; // @ts-ignore

      if (window.edgeAddingMode === 1) {
        type = 'ACTIVATES';
      } // @ts-ignore
      else if (window.edgeAddingMode === 2) {
          type = 'INHIBITS';
        } // @ts-ignore
        else if (window.edgeAddingMode === 3) {
            type = 'INDUCES';
          } // @ts-ignore
          else if (window.edgeAddingMode === 4) {
              type = 'REPRESSES';
            } // @ts-ignore
            else if (window.edgeAddingMode === 5) {
                type = 'BINDS';
              }

      return type;
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initCyHandlers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var that = this;
      var tappedBefore;
      var tappedTimeout;
      this.cy.on('tap', function (event) {
        var tappedNow = event.target;

        if (tappedTimeout !== -1 && tappedBefore !== -1) {
          clearTimeout(tappedTimeout);
        }

        if (tappedBefore === tappedNow) {
          tappedNow.trigger('doubleTap');
          tappedBefore = -1;
        } else {
          // @ts-ignore TODO AMENDMENTsa
          tappedTimeout = setTimeout(function () {
            tappedBefore = -1;
          }, 300);

          if (tappedNow && tappedNow.isNode && tappedNow.isNode()) {
            external_jquery_default()(".qtip").remove();
          }

          if (tappedNow && tappedNow.isEdge && tappedNow.isEdge()) {
            external_jquery_default()(".qtip").remove();
          }

          tappedBefore = tappedNow;
        }
      });
      this.cy.on('doubleTap', 'node', function (e) {
        // if cBioPortal ignore
        if (that.props.isCbioPortal) return;
        var eventIsDirect = e.target === this;

        if (eventIsDirect) {
          external_jquery_default()(".qtip").remove();
          that.qtipManager.addQtipToElements(e.target);
          e.target.trigger("showqtipevent");
        }
      });
      this.cy.on('doubleTap', 'edge', function (e) {
        // if cBioPortal ignore
        if (that.props.isCbioPortal) return;
        var eventIsDirect = e.target === this;

        if (eventIsDirect) {
          external_jquery_default()(".qtip").remove();
          that.qtipManager.addQtipToElements(e.target);
          e.target.trigger("showqtipevent");
        }
      });
      this.cy.on('select', 'node', function (e) {
        _this.editor.pushSelectedNodeStack(e.target);
      }); // this.cy.on('select', 'edge', function( e )
      // {
      //   var eventIsDirect = (e.target === this);
      //   $(".qtip").remove();
      //
      //   if( eventIsDirect ) {
      //       that.qtipManager.addQtipToElements(e.target);
      //   }
      // });

      this.cy.on('unselect', 'node', function (e) {
        _this.editor.removeElementFromSelectedNodeStack(e.target);
      });
      this.cy.on('free', 'node', function (e) {
        //Collect all nodes with descendants in case of compounds
        var selectedNodes = _this.cy.nodes(':selected');

        var nodes = e.target;
        nodes = nodes.union(nodes.descendants());
        nodes = nodes.union(selectedNodes);

        _this.editor.moveElements(nodes);
      });
      this.cy.on('layoutstop', function () {
        _this.editor.postLayout();
      }); // //TODO fix this when cytoscape is updated !!!
      // //Due to cytoscape.js bug, only workaround that worked :(
      // this.cy.on('add', 'node', function(event)
      // {
      //     // event.target.select();
      //     this.cy.style().update();
      //     this.cy.forceRender();
      // });

      this.cy.on("noderesize.resizeend", function (_e, _type, node) {
        //Updates 'data' properties from 'style'
        node.data('w', node.width());
        node.data('h', node.height()); //Used for collaborative mode

        _this.editor.resizeElements(node);
      });
      this.cy.on('select', 'edge', function (e) {
        _this.lastSelectedEdge = e.target;
      });
      this.cy.on('bendPointMovement', function () {
        _this.editor.updateEdgeBendPoints(_this.lastSelectedEdge);
      });
      this.cy.on('noderesize.moveend', function () {
        _this.editor.changeNodePositionsByArrows(_this.cy.nodes(":selected"));
      });
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initKeyboardHandlers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      if (!this.isCollaborative && !this.isCbioPortal) {
        external_jquery_default()(document).keydown(function (e) {
          if (e.which === 89 && (e.ctrlKey || e.metaKey)) {
            _this.undoRedoManager.redo();
          } else if (e.which === 90 && (e.ctrlKey || e.metaKey)) {
            _this.undoRedoManager.undo();
          }
        });
      } else {
        external_jquery_default()('a[role="redo"]').hide();
        external_jquery_default()('a[role="undo"]').hide();
      }

      external_jquery_default()(document).keydown(function (e) {
        if (e.which === 65 && (e.ctrlKey || e.metaKey)) {
          // @ts-ignore
          var tn = document.activeElement.tagName;

          if (tn != "TEXTAREA" && tn != "INPUT") {
            e.preventDefault();

            _this.cy.elements().select();
          }
        } else if (e.which === 8 || e.which === 46) {
          // @ts-ignore
          var tn = document.activeElement.tagName;

          if (tn != "TEXTAREA" && tn != "INPUT") {
            var selectedElements = _this.cy.$(':selected');

            _this.editor.removeElement(selectedElements);
          }
        }
      });
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initUndoRedoFunctionality", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative || this.isCbioPortal) {
        external_jquery_default()('[role="undo"]').hide();
        external_jquery_default()('[role="redo"]').hide();
        /* TODO: AMENDMENT
        document.getElementById("localOrCollaborativeToolbar").style.display = "none";
        */
      }
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initCBioPortalFunctionalities", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCbioPortal) {
        var contextMenu = this.cy.contextMenus('get');
        contextMenu.destroy();
      }
    }
  });

  CytoscapeArea_decorate([external_autobind_decorator_default.a], CytoscapeArea.prototype, "cyDivHandler", null);

  CytoscapeArea = CytoscapeArea_decorate([external_mobx_react_["observer"]], CytoscapeArea);
  return CytoscapeArea;
}(external_react_default.a.Component);

/* harmony default export */ var ui_CytoscapeArea = (CytoscapeArea_CytoscapeArea);
// CONCATENATED MODULE: ./src/ui/Menubar.tsx
var Menubar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Menubar_Menubar =
/** @class */
function (_super) {
  Menubar_extends(Menubar, _super);

  function Menubar(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(Menubar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var nodeTypes = ["Gene", "Family", "Complex", "Compartment", "Process"];
      var edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];
      var pathwayDropdownData = {};

      for (var _i = 0, _a = Object.keys(pathways); _i < _a.length; _i++) {
        var pwName = _a[_i]; // If a pathway name ain't include 'pathway' word then it is under pancanatlas.

        var isPancanatlas = !pwName.includes('pathway');
        var dashPos = pwName.indexOf('-');
        var pwHead = isPancanatlas ? 'PanCanAtlas' : pwName.substring(0, dashPos);

        if (pwHead in pathwayDropdownData) {
          pathwayDropdownData[pwHead].push(pwName);
        } else {
          pathwayDropdownData[pwHead] = [pwName];
        }
      }

      return external_react_default.a.createElement(external_react_bootstrap_["Navbar"], {
        className: "pathway-navbar"
      }, external_react_default.a.createElement(external_react_bootstrap_["Nav"], null, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 1,
        title: "Network",
        id: "basic-nav-network"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: this.props.pathwayActions.newPathway
      }, "New"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.PW_DETAILS);
        }
      }, "Properties..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.upload();
        }
      }, "Import"), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        className: "dropdown-submenu",
        eventKey: 1,
        title: "TCGA",
        id: "basic-nav-TCGA"
      }, Object.keys(pathwayDropdownData).map(function (pwHead, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
          key: index,
          id: pwHead + "_dropdown",
          className: "dropdown-submenu",
          eventKey: 1,
          title: pwHead
        }, pathwayDropdownData[pwHead].map(function (pwName, index) {
          return external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
            key: index,
            onClick: function () {
              if (_this.props.pathwayActions.doesCyHaveElements()) {
                _this.props.handleOpen(EModalType.CONFIRMATION);

                modals_ConfirmationModal.pendingFunction = function () {
                  _this.props.pathwayActions.changePathway(pwName);
                };
              } else {
                _this.props.pathwayActions.changePathway(pwName);
              }
            }
          }, pwName.split('-').join(" "));
        }));
      })), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.merge();
        }
      }, "Merge With..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.export(false);
        }
      }, "Export"), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        className: "dropdown-submenu",
        eventKey: 1,
        title: "Export as",
        id: "basic-nav-export"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.saveAs("JPEG");
        }
      }, "JPEG"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.saveAs("PNG");
        }
      }, "PNG"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.saveAs("SVG");
        }
      }, "SVG"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.export(true);
        }
      }, "SIFNX"))), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 2,
        title: "Edit",
        id: "basic-nav-edit"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "add-node-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Add Node"
      }, nodeTypes.map(function (nodeType, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
          key: index,
          onClick: function () {
            _this.props.pathwayActions.addNode(nodeType);
          }
        }, nodeType);
      })), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "add-edge-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Add Edge"
      }, edgeTypes.map(function (nodeType, i) {
        return external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
          key: i,
          onClick: function () {
            _this.props.pathwayActions.addEdge(i);

            _this.props.setActiveEdge(i);
          }
        }, nodeType);
      })), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.deleteSelected();
        }
      }, "Delete Selected"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.resizeToContent();
        }
      }, "Resize Nodes to Content"), !this.props.pathwayActions.isCollaborative && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.undo();
        }
      }, "Undo"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.redo();
        }
      }, "Redo"))), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 3,
        title: "View",
        id: "basic-nav-view"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "align-view-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Align Selected"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "align-vertical-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Vertical"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("vLeft");
        }
      }, "Left"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("vCen");
        }
      }, "Center"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("vRight");
        }
      }, "Right")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "align-horizontal-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Horizontal"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("hTop");
        }
      }, "Top"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("hMid");
        }
      }, "Middle"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("hBot");
        }
      }, "Bottom"))), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.GRID);
        }
      }, "Grid..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.hideSelected();
        }
      }, "Hide Selected Nodes"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.showAll();
        }
      }, "Show All Nodes")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 4,
        title: "Highlight",
        id: "basic-nav-highlight"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.highlightSelected
      }, "Highlight Selected"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.highlightNeighbours
      }, "Highlight Neighbors Of Selected"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.validateGenes
      }, "Identify Invalid Genes"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.removeAllHighlight
      }, "Remove All Highlights")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 5,
        title: "Alteration %",
        id: "basic-nav-alteration"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.pathwayActions.uploadOverlay();
        }
      }, "Load From File..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: this.props.pathwayActions.loadSampleData
      }, "Load Sample Data"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.STUDY);
        }
      }, "Load cBioPortal Data..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.PROFILES);
        }
      }, "View Settings..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: this.props.pathwayActions.removeAllData
      }, "Remove All Data")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 6,
        title: "Layout",
        id: "basic-nav-layout"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 6.1,
        onClick: this.props.pathwayActions.performLayout
      }, "Perform Layout"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 6.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.LAYOUT);
        }
      }, "Layout Properties...")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 7,
        title: "Help",
        id: "basic-nav-help"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 7.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.HELP);
        }
      }, "Quick Help"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 7.1,
        onClick: function () {
          window.open("https://github.com/iVis-at-Bilkent/pathway-mapper");
        }
      }, "How To Use"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 7.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.ABOUT);
        }
      }, "About"))), external_react_default.a.createElement(external_react_bootstrap_["Nav"], {
        pullRight: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Brand, null, external_react_default.a.createElement("a", {
        href: "#"
      }, "PathwayMapper"))));
    }
  });
  return Menubar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Menubar = (Menubar_Menubar);
// EXTERNAL MODULE: ./src/css/supp.css
var supp = __webpack_require__(72);

// EXTERNAL MODULE: ./src/images/edges/activates.svg
var activates = __webpack_require__(46);
var activates_default = /*#__PURE__*/__webpack_require__.n(activates);

// EXTERNAL MODULE: ./src/images/edges/binds.svg
var binds = __webpack_require__(47);
var binds_default = /*#__PURE__*/__webpack_require__.n(binds);

// EXTERNAL MODULE: ./src/images/edges/induces.svg
var induces = __webpack_require__(48);
var induces_default = /*#__PURE__*/__webpack_require__.n(induces);

// EXTERNAL MODULE: ./src/images/edges/inhibits.svg
var inhibits = __webpack_require__(49);
var inhibits_default = /*#__PURE__*/__webpack_require__.n(inhibits);

// EXTERNAL MODULE: ./src/images/edges/represses.svg
var represses = __webpack_require__(50);
var represses_default = /*#__PURE__*/__webpack_require__.n(represses);

// CONCATENATED MODULE: ./src/ui/Sidebar.tsx
var Sidebar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Sidebar_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore




var Sidebar_Sidebar =
/** @class */
function (_super) {
  Sidebar_extends(Sidebar, _super);

  function Sidebar(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "activeEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -1
    });
    Object(external_mobx_["makeObservable"])(_this);
    props.setActiveEdgeHandler(_this.setActiveEdge);
    return _this;
  }

  Object.defineProperty(Sidebar.prototype, "addEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeIndex) {
      if (edgeIndex === this.activeEdge) {
        this.setActiveEdge(-1);
        this.props.pathwayActions.addEdge(-1);
        return;
      }

      this.setActiveEdge(edgeIndex);
      this.props.pathwayActions.addEdge(edgeIndex);
    }
  });
  Object.defineProperty(Sidebar.prototype, "setActiveEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeIndex) {
      this.activeEdge = edgeIndex;
    }
  });
  Object.defineProperty(Sidebar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];
      var edgeImgs = [activates_default.a, inhibits_default.a, induces_default.a, represses_default.a, binds_default.a];
      var nodeIds = ["simpleNodeDiv", "familyNodeDiv", "complexNodeDiv", "compartmentNodeDiv", "processNodeDiv"];
      return external_react_default.a.createElement("div", {
        id: "pathway-sidebar",
        className: "sideBarWrapper"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"], {
        className: "pnl"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, {
        className: "pnl-header"
      }, "Network"), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
        className: "pnl-body pathwayPanel"
      }, external_react_default.a.createElement("div", {
        className: "buttonContainer"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.handleOpen(EModalType.PW_DETAILS);
        }
      }, "Properties")), external_react_default.a.createElement("div", {
        className: "buttonContainer"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.upload();
        }
      }, "Import")), external_react_default.a.createElement("div", {
        className: "buttonContainer"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.export(false);
        }
      }, "Export")))), external_react_default.a.createElement(external_react_bootstrap_["Panel"], {
        className: "pnl"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, {
        className: "pnl-header"
      }, "Node Palette"), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
        className: "pnl-body"
      }, nodeIds.map(function (id) {
        return external_react_default.a.createElement("div", {
          key: id,
          id: id,
          "data-tip": "Click on this and drag to the location on drawing canvas and release!",
          "data-effect": "solid",
          "data-place": "bottom",
          "data-delay-show": "1000",
          className: "dragButtonContainer"
        });
      }))), external_react_default.a.createElement(external_react_bootstrap_["Panel"], {
        className: "pnl edgePanel"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, {
        className: "pnl-header"
      }, "Interaction Palette"), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
        className: "pnl-body edgePaletteWrapper"
      }, external_react_default.a.createElement("div", {
        className: "list-group edge-palette"
      }, edgeTypes.map(function (edgeType, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          "data-tip": "Click to activate; then, start the interaction from the little circle on the source node!",
          "data-effect": "solid",
          "data-place": "bottom",
          "data-delay-show": "1000"
        }, external_react_default.a.createElement("a", {
          style: {
            marginBottom: "5px"
          },
          className: "list-group-item " + (_this.activeEdge === i ? "active" : ""),
          onClick: function () {
            _this.addEdge(i);
          },
          href: "#"
        }, external_react_default.a.createElement("img", {
          style: {
            width: "30px"
          },
          className: "pull-left",
          src: edgeImgs[i]
        }), ' ', edgeType));
      })))));
    }
  });

  Sidebar_decorate([external_mobx_["observable"]], Sidebar.prototype, "activeEdge", void 0);

  Sidebar_decorate([external_mobx_["action"].bound], Sidebar.prototype, "setActiveEdge", null);

  Sidebar = Sidebar_decorate([external_mobx_react_["observer"]], Sidebar);
  return Sidebar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Sidebar = (Sidebar_Sidebar);
// CONCATENATED MODULE: ./src/ui/react-pathway-mapper.tsx
var react_pathway_mapper_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var react_pathway_mapper_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var maxHeapFn = __webpack_require__(73);

var maxHeap = maxHeapFn();
var EModalType;

(function (EModalType) {
  EModalType[EModalType["STUDY"] = 0] = "STUDY";
  EModalType[EModalType["CONFIRMATION"] = 1] = "CONFIRMATION";
  EModalType[EModalType["PROFILES"] = 2] = "PROFILES";
  EModalType[EModalType["ABOUT"] = 3] = "ABOUT";
  EModalType[EModalType["PW_DETAILS"] = 4] = "PW_DETAILS";
  EModalType[EModalType["GRID"] = 5] = "GRID";
  EModalType[EModalType["HELP"] = 6] = "HELP";
  EModalType[EModalType["LAYOUT"] = 7] = "LAYOUT";
  EModalType[EModalType["CHELP"] = 8] = "CHELP";
})(EModalType || (EModalType = {}));

var react_pathway_mapper_PathwayMapper =
/** @class */
function (_super) {
  react_pathway_mapper_extends(PathwayMapper, _super);

  function PathwayMapper(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "NUMBER_OF_PATHWAYS_TO_SHOW", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 10
    });
    Object.defineProperty(_this, "selectedPathway", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "fileManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "pathwayActions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isModalShown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "portalAcessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "alterationData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "patientData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "pathwayGeneMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(_this, "bestPathwaysAlgos", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "oldName", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(_this, "profiles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "setActiveEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "viewOperationsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "gridOptionsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.fileManager = new managers_FileOperationsManager();
    _this.pathwayActions = new utils_PathwayActions(_this.pathwayHandler, _this.profiles, _this.fileManager, _this.handleOpen, _this.props.isCBioPortal, _this.props.isCollaborative);
    _this.selectedPathway = "";

    if (_this.props.pathwayName) {
      _this.pathwayActions.changePathway(_this.props.pathwayName);
    }

    _this.isModalShown = [false, false, false, false, false, false, false, false, false]; // TODO: Change below

    _this.alterationData = {}; //{"study1_gistic" : {"CDK4": 11, "MDM2": 19, "TP53": 29}, "study2_gistic" : {"MDM2": 99, "TP53": 98}, "study3_mutations": {"MDM2": 1, "TP53": 2}};

    _this.extractAllGenes();

    if (_this.props.isCBioPortal) {
      //this.overlayPortalData();
      // If cBioPortal mode is 'on' it is very likely to have cBioALterationData
      // but to be on the safe side below assertion is made.
      if (_this.props.cBioAlterationData) {
        if (_this.props.patientView) {
          //PatientView PathwayMapper has a different functionality
          //Alteration types are overlayed instead of alterationpercentage
          _this.calculatePatientData(_this.props.cBioAlterationData);

          _this.addSampleIconData(_this.props.sampleIconData);
        } else {
          _this.calculateAlterationData(_this.props.cBioAlterationData);
        }
      }

      if (_this.props.addGenomicDataHandler) {
        _this.props.addGenomicDataHandler(_this.addGenomicData);
      }

      _this.profiles.push({
        profileId: PathwayMapper_1.CBIO_PROFILE_NAME,
        enabled: true
      });

      _this.getBestPathway(0);

      _this.getBestPathway(1);

      _this.getBestPathway(2);

      _this.getBestPathway(3);
    }

    return _this;
    /*
    const profile1 = {profileId: "study1_gistic", studyId: "study1", enabled: true};
    const profile2 = {profileId: "study2_gistic", studyId: "study2", enabled: true};
    const profile3 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile4 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile5 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile6 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    this.profiles.push(profile1, profile2, profile3, profile4, profile5, profile6);
    */
  }

  PathwayMapper_1 = PathwayMapper;
  Object.defineProperty(PathwayMapper.prototype, "setSelectedPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathway) {
      this.selectedPathway = pathway;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "setEditor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor) {
      this.editor = editor;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "addProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profile) {
      this.profiles.push(profile);
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "toggleProfileEnabled", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index) {
      this.profiles[index].enabled = !this.profiles[index].enabled;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "calculateAlterationData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cBioAlterationData) {
      var _this = this; // Transform cBioDataAlteration into AlterationData


      this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME] = {};
      cBioAlterationData.forEach(function (geneAltData) {
        var perc = geneAltData.altered / geneAltData.sequenced * 100; // NaN value is replaced with -101 since NaN value leads to some runtime exceptions (such as with toFixed() function),
        // hence it is represented as -101. It will be recognized in the genomic data svg creation to show N/P instead of
        // a percentage. -101 is chosen because this percentage is impossible to get.

        _this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME][geneAltData.gene] = Object.is(perc, NaN) ? -101 : perc;
      });
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "calculatePatientData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cBioAlterationData) {
      // Transform cBioDataAlteration into Patient Data every alteration is accepted 100% altered
      var _this = this;

      this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME] = {};
      var allTypes = cBioAlterationData.map(function (x) {
        return x.gene;
      }); //const allTypes = cBioAlterationData.map(x => x.percentAltered);

      var uniqueTypes = allTypes.filter(function (x, i, a) {
        return a.indexOf(x) == i;
      }); //This is a flag for GenomicDataOverlayManager showPatientData

      this.patientData["PatientView"] = 1;
      uniqueTypes.forEach(function (x) {
        _this.patientData[x] = {};
      });
      cBioAlterationData.forEach(function (geneAltData) {
        var perc = geneAltData.altered / geneAltData.sequenced * 100;
        _this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME][geneAltData.gene] = Object.is(perc, NaN) ? -101 : perc;
        _this.patientData[geneAltData.gene][geneAltData.percentAltered] = Object.is(perc, NaN) ? -101 : perc;
        _this.patientData[geneAltData.gene]["geneticTrackData"] = geneAltData.geneticTrackData;
        _this.patientData[geneAltData.gene]["geneticTrackRuleSetParams"] = geneAltData.geneticTrackRuleSetParams;
      });
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "addSampleIconData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sampleIconData) {
      if (sampleIconData) {
        this.patientData["sampleColors"] = sampleIconData.sampleColors;
        this.patientData["sampleIndex"] = sampleIconData.sampleIndex;
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "getGeneStudyMap", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyGeneMap) {
      var genomicDataMap = {};

      for (var _i = 0, _a = Object.keys(studyGeneMap); _i < _a.length; _i++) {
        var cancerStudy = _a[_i];
        var cancerData = studyGeneMap[cancerStudy];

        for (var _b = 0, _c = Object.keys(cancerData); _b < _c.length; _b++) {
          var geneSymbol = _c[_b];
          if (genomicDataMap[geneSymbol] === undefined) genomicDataMap[geneSymbol] = {};
          genomicDataMap[geneSymbol][cancerStudy] = studyGeneMap[cancerStudy][geneSymbol].toFixed(2);
        }
      }

      return genomicDataMap;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "getAlterationAveragePerGene", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicDataMap) {
      var geneAlterationMap = {};

      for (var _i = 0, _a = Object.keys(genomicDataMap); _i < _a.length; _i++) {
        var gene = _a[_i];
        var sum = 0,
            count = 0;

        for (var _b = 0, _c = Object.values(genomicDataMap[gene]); _b < _c.length; _b++) {
          var alteration = _c[_b];
          sum += parseFloat(alteration);
          count++;
        }

        if (count === 0) {
          geneAlterationMap[gene] = 0;
        } else {
          geneAlterationMap[gene] = sum / count;
        }
      }

      return geneAlterationMap;
    }
  });
  /**
   *
   * @param rankingMode: number => 0 = Count, 1 = Percentage, 2 = Count with Alteration, 3 = Percentage with Alteration
   *
   */

  Object.defineProperty(PathwayMapper.prototype, "getBestPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (rankingMode) {
      var genomicDataMap = this.getGeneStudyMap(this.alterationData);
      var alterationPerGene = this.getAlterationAveragePerGene(genomicDataMap);
      maxHeap = maxHeapFn();
      var matchedGenesMap = {};
      var bestPathways = [];

      for (var pathwayName in this.pathwayGeneMap) {
        if (this.pathwayGeneMap.hasOwnProperty(pathwayName)) {
          var genesMatching = []; // Calculate sum of all alterations

          var sumOfAlterations = 0;

          for (var _i = 0, _a = this.props.genes; _i < _a.length; _i++) {
            var gene = _a[_i];

            if (this.pathwayGeneMap[pathwayName].hasOwnProperty(gene.hugoGeneSymbol) && this.pathwayGeneMap[pathwayName][gene.hugoGeneSymbol] === "GENE") {
              genesMatching.push(gene.hugoGeneSymbol);
              sumOfAlterations += alterationPerGene[gene.hugoGeneSymbol];
            }
          }

          matchedGenesMap[pathwayName] = genesMatching;
          var geneCount = 0; // Count number of genes *not processess* in a pathway

          for (var _b = 0, _c = Object.values(this.pathwayGeneMap[pathwayName]); _b < _c.length; _b++) {
            var geneType = _c[_b];

            if (geneType === "GENE") {
              geneCount++;
            }
          }

          if (rankingMode === 0) {
            maxHeap.insert(genesMatching.length, {
              pathwayName: pathwayName
            });
          } else if (rankingMode === 1) {
            maxHeap.insert(genesMatching.length / geneCount * 100, {
              pathwayName: pathwayName
            });
          } else if (rankingMode === 2) {
            maxHeap.insert(sumOfAlterations, {
              pathwayName: pathwayName
            });
          } else if (rankingMode === 3) {
            maxHeap.insert(genesMatching.length * sumOfAlterations / geneCount, {
              pathwayName: pathwayName
            });
          }
        }
      }

      while (maxHeap.size() > 0) {
        var top_1 = maxHeap.extractMax();
        var pathwayName = top_1.getValue().pathwayName;
        bestPathways.push({
          score: top_1.getKey(),
          genesMatched: matchedGenesMap[pathwayName],
          pathwayName: pathwayName
        });
      }

      if (this.bestPathwaysAlgos.length === 0) // First pathway of the first method is shown as the default pathway.
        this.setSelectedPathway(bestPathways[0].pathwayName);
      this.bestPathwaysAlgos.push(bestPathways);
    }
  }); // This method extracts all genes of a pathway and adds it to the pathwayGeneMap
  // so that it can be used by percentage calculation and genomic data 
  // Note: Pathway title

  Object.defineProperty(PathwayMapper.prototype, "includePathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathwayData, pathwayName) {
      var genes = pathwayData.nodes;
      var geneHash = {};

      for (var _i = 0, genes_1 = genes; _i < genes_1.length; _i++) {
        var gene = genes_1[_i];
        if (gene.data.type === "GENE") geneHash[gene.data.name] = gene.data.type;
      }

      this.pathwayGeneMap[pathwayData.title] = geneHash;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "extractAllGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var pathwayName in pathways) {
        if (pathways.hasOwnProperty(pathwayName)) {
          var pathwayData = utils_SaveLoadUtility.parseGraph(pathways[pathwayName], true);
          this.includePathway(pathwayData);
        }
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "loadRedirectedPortalData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      if (!this.props.alterationData) {
        // If size 0 that means it is not redirected.
        return;
      }

      var redirectedProfiles = Object.keys(this.props.alterationData).map(function (data) {
        return {
          profileId: data,
          enabled: true
        };
      });
      redirectedProfiles.forEach(function (redirectedProfile) {
        _this.addProfile(redirectedProfile);
      });
      this.editor.addPortalGenomicData(this.props.alterationData, this.editor.getEmptyGroupID());
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "profileEnabledMap", {
    get: function () {
      var profileEnabledMap = {};
      this.profiles.forEach(function (profile) {
        profileEnabledMap[profile.profileId] = profile.enabled;
      });
      return profileEnabledMap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PathwayMapper.prototype, "doesProfileExist", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId) {
      var exists = false;
      this.profiles.forEach(function (profile) {
        if (profile.profileId === profileId) {
          exists = true;
        }
      });
      return exists;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "loadFromCBio", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataTypes, selectedStudyData) {
      var _this = this;

      if (!this.pathwayActions.doesCyHaveElements()) {
        external_react_toastify_["toast"].warn("Your pathway is empty");
        return;
      }

      for (var _i = 0, _a = Object.keys(dataTypes); _i < _a.length; _i++) {
        var dataType = _a[_i];
        if (!dataTypes[dataType].checked) continue;

        if (this.doesProfileExist(dataTypes[dataType].profile)) {
          external_react_toastify_["toast"].warn(dataTypes[dataType].profile + " already exists");
          continue;
        }

        this.addProfile({
          studyId: selectedStudyData[0],
          profileId: dataTypes[dataType].profile,
          enabled: true
        });
        var currentMapNodeNames = this.editor.cy.nodes().filter(function (node) {
          return node.data("type") === "GENE";
        }).map(function (node) {
          return node.data("name");
        });
        this.portalAcessor.getProfileData({
          caseSetId: selectedStudyData[0],
          geneticProfileId: dataTypes[dataType].profile,
          genes: currentMapNodeNames
        }, function (data) {
          _this.editor.addPortalGenomicData(data, _this.editor.getEmptyGroupID());
        });
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "setActiveEdgeHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (setActiveEdge) {
      this.setActiveEdge = setActiveEdge;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cBioAlterationData) {
      this.calculateAlterationData(cBioAlterationData);
      this.editor.removeGenomicData();
      this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var isCBioPortal = this.props.isCBioPortal;
      var cytoComp = external_react_default.a.createElement(ui_CytoscapeArea, {
        profiles: this.profiles,
        isCbioPortal: this.props.isCBioPortal,
        isCollaborative: this.props.isCollaborative,
        setActiveEdge: this.setActiveEdge,
        editorHandler: this.editorHandler,
        selectedPathway: this.selectedPathway,
        pathwayHandler: this.pathwayHandler,
        handleOpen: this.handleOpen
      });
      return external_react_default.a.createElement("div", {
        className: "pathwayMapper"
      }, external_react_default.a.createElement("div", {
        style: isCBioPortal ? {
          width: window.innerWidth * 0.99
        } : {},
        className: isCBioPortal ? "cBioMode container" : "customMargins"
      }, !isCBioPortal && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(ui_Menubar, {
        pathwayActions: this.pathwayActions,
        handleOpen: this.handleOpen,
        setActiveEdge: this.setActiveEdge
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement(ui_Buttonbar, {
        pathwayActions: this.pathwayActions,
        handleOpen: this.handleOpen
      }))), isCBioPortal && external_react_default.a.createElement(external_react_bootstrap_["Row"], {
        style: {
          marginBottom: "6px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 2,
        style: {
          paddingRight: '0px',
          marginBottom: '5px'
        }
      }, external_react_default.a.createElement(ui_Toolbar, {
        pathwayActions: this.pathwayActions,
        selectedPathway: this.selectedPathway,
        alterationData: this.alterationData,
        genes: this.props.genes,
        handleOpen: this.handleOpen,
        validGenes: this.props.validGenes,
        showMessage: this.props.showMessage,
        pathwayGenes: Object.keys(this.pathwayGeneMap[this.selectedPathway]),
        onAddGenes: this.props.onAddGenes,
        patientView: this.props.patientView
      })), this.props.messageBanner ? external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 4,
        style: {
          maxHeight: '32px',
          paddingRight: '0px'
        }
      }, this.props.messageBanner()) : external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 4,
        style: {
          maxHeight: '32px',
          paddingRight: '0px'
        }
      }), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 3,
        style: {
          paddingLeft: "0px",
          marginTop: "12px",
          textAlign: "right",
          paddingRight: "25px"
        }
      }, this.selectedPathway)), external_react_default.a.createElement("div", {
        className: isCBioPortal ? "row" : "mainContentWrapper"
      }, !isCBioPortal && external_react_default.a.createElement("div", null, external_react_default.a.createElement(ui_Sidebar, {
        pathwayActions: this.pathwayActions,
        setActiveEdgeHandler: this.setActiveEdgeHandler,
        handleOpen: this.handleOpen
      })), isCBioPortal ? external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 9
      }, cytoComp, external_react_default.a.createElement("div", {
        style: {
          paddingRight: "9px",
          textAlign: "right",
          fontSize: "13px"
        }
      }, "Powered by ", external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper",
        target: "_blank"
      }, "PathwayMapper"))) : cytoComp, isCBioPortal && external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 3,
        style: {
          paddingLeft: "0px"
        }
      }, external_react_default.a.createElement(ui_Ranking, {
        pathwayActions: this.pathwayActions,
        bestPathwaysAlgos: this.bestPathwaysAlgos,
        tableComponent: this.props.tableComponent,
        patientView: this.props.patientView
      }))), external_react_default.a.createElement("div", {
        id: "invisibles"
      }, external_react_default.a.createElement("div", {
        id: "pm-modals"
      }, external_react_default.a.createElement(modals_ProfilesModal, {
        profiles: this.profiles,
        editor: this.editor,
        isModalShown: this.isModalShown[EModalType.PROFILES],
        handleClose: this.handleClose,
        handleProfileLabelClicked: this.toggleProfileEnabled
      }), external_react_default.a.createElement(modals_PathwayDetailsModal, {
        isModalShown: this.isModalShown[EModalType.PW_DETAILS],
        handleClose: this.handleClose,
        pathwayActions: this.pathwayActions
      }), external_react_default.a.createElement(modals_GridSettings, {
        isModalShown: this.isModalShown[EModalType.GRID],
        handleClose: this.handleClose,
        pathwayActions: this.pathwayActions
      }), external_react_default.a.createElement(modals_QuickHelpModal, {
        isModalShown: this.isModalShown[EModalType.HELP],
        handleClose: this.handleClose
      }), external_react_default.a.createElement(modals_LayoutProperties, {
        isModalShown: this.isModalShown[EModalType.LAYOUT],
        handleClose: this.handleClose,
        pathwayActions: this.pathwayActions
      }), external_react_default.a.createElement(modals_ConfirmationModal, {
        isModalShown: this.isModalShown[EModalType.CONFIRMATION],
        handleClose: this.handleClose
      }), external_react_default.a.createElement(modals_CBioHelpModal, {
        isModalShown: this.isModalShown[EModalType.CHELP],
        handleClose: this.handleClose,
        patientView: this.props.patientView
      }), external_react_default.a.createElement(modals_AboutModal, {
        isModalShown: this.isModalShown[EModalType.ABOUT],
        handleClose: this.handleClose
      })), !this.props.isCBioPortal && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(modals_StudyModal, {
        isModalShown: this.isModalShown[EModalType.STUDY],
        loadFromCBio: this.loadFromCBio,
        handleClose: this.handleClose
      }), external_react_default.a.createElement(external_react_toastify_["ToastContainer"], {
        className: "pm-toast-container"
      })), external_react_default.a.createElement(external_react_tooltip_default.a, {
        className: isCBioPortal ? "" : "pmTip",
        style: {
          maxWidth: "350px",
          zIndex: 9999999
        }
      }), external_react_default.a.createElement("input", {
        id: "myInput",
        type: "file",
        ref: function (ref) {
          _this.pathwayActions.setUploaders(ref, false);
        },
        style: {
          display: 'none'
        },
        onChange: function (e) {
          _this.pathwayActions.onChangeFile(e, false);
        }
      }), external_react_default.a.createElement("input", {
        id: "myInput2",
        type: "file",
        ref: function (ref) {
          _this.pathwayActions.setUploaders(ref, true);
        },
        style: {
          display: 'none'
        },
        onChange: function (e) {
          _this.pathwayActions.onChangeFile(e, true);
        }
      }), external_react_default.a.createElement("input", {
        id: "myInput3",
        type: "file",
        ref: function (ref) {
          _this.pathwayActions.setOverlayUploader(ref);
        },
        style: {
          display: 'none'
        },
        onChange: function (e) {
          _this.pathwayActions.overlayFromText(e.target.files[0]);
        }
      }))));
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "componentDidMount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (!this.props.isCBioPortal) {
        $(".container").css('width', "auto");
        $(".container").css('paddingLeft', 0);
        $(".container").css('marginLeft', 5);
      } else {
        this.pathwayActions.emphasiseQueryGenes(this.props.genes.map(function (gene) {
          return gene.hugoGeneSymbol;
        }));
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "componentDidUpdate", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.props.isCBioPortal) {
        this.pathwayActions.emphasiseQueryGenes(this.props.genes.map(function (gene) {
          return gene.hugoGeneSymbol;
        }));
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "handleOpen", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (modalId) {
      this.isModalShown[modalId] = true;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "handleClose", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (modalId) {
      this.isModalShown[modalId] = false;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "editorHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor, eh, undoRedoManager) {
      this.setEditor(editor);
      this.gridOptionsManager = new managers_GridOptionsManager(this.editor.cy);
      this.viewOperationsManager = new managers_ViewOperationsManager(this.editor, this.editor.cy);
      this.pathwayActions.editorHandler(editor, eh, undoRedoManager, this.viewOperationsManager, this.gridOptionsManager);

      if (this.props.isCBioPortal) {
        if (this.props.patientView) {
          this.editor.addPortalGenomicData(this.patientData, this.editor.getEmptyGroupID());
        } else {
          this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
        }
      } else {
        this.portalAcessor = new utils_CBioPortalAccessor();
        this.loadRedirectedPortalData();
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "pathwayHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathway) {
      var _this = this;

      this.setSelectedPathway(pathway);
      if (this.pathwayGeneMap[pathway] && this.props.changePathwayHandler) this.props.changePathwayHandler(Object.keys(this.pathwayGeneMap[pathway]).filter(function (gene) {
        return !_this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME].hasOwnProperty(gene);
      }));
    }
  });
  var PathwayMapper_1;
  Object.defineProperty(PathwayMapper, "CBIO_PROFILE_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "cBioPortal_data"
  });

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "selectedPathway", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "editor", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "isModalShown", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "alterationData", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "patientData", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "pathwayGeneMap", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "oldName", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "profiles", void 0);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "setSelectedPathway", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "setEditor", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "addProfile", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "toggleProfileEnabled", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "includePathway", null);

  react_pathway_mapper_decorate([external_mobx_["computed"]], PathwayMapper.prototype, "profileEnabledMap", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "loadFromCBio", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "setActiveEdgeHandler", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "addGenomicData", null);

  react_pathway_mapper_decorate([external_mobx_["action"].bound], PathwayMapper.prototype, "handleOpen", null);

  react_pathway_mapper_decorate([external_mobx_["action"].bound], PathwayMapper.prototype, "handleClose", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "editorHandler", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "pathwayHandler", null);

  PathwayMapper = PathwayMapper_1 = react_pathway_mapper_decorate([external_mobx_react_["observer"]], PathwayMapper);
  return PathwayMapper;
}(external_react_default.a.Component);


/* harmony default export */ var react_pathway_mapper = __webpack_exports__["default"] = (react_pathway_mapper_PathwayMapper);

/***/ })
/******/ ]);
//# sourceMappingURL=index.es5.js.map