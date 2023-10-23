webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideProject.js":
/*!***********************************!*\
  !*** ./components/SideProject.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./components/icons/index.js");
var _this = undefined,
    _jsxFileName = "/home/userx/projects/x-dune.github.io/components/SideProject.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SideProject = function SideProject(_ref) {
  var item = _ref.item;
  return __jsx("div", {
    className: "flex justify-center py-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "flex flex-col lg:flex-row max-w-screen-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: item.img,
    className: "self-center w-full lg:max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "px-5 py-5 lg:py0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-2xl font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, item.title), __jsx("div", {
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, item.subtitle), __jsx("div", {
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "flex flex-col lg:flex-row items-start text-gray-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pb-2 lg:pb-0 pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("a", {
    className: "bg-purple-700 px-4 py-2 rounded-md flex",
    href: item.links.source,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_1__["GithubIcon"], {
    className: "h-6 w-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Source Code"))), __jsx("div", {
    className: "pt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, item.techs.map(function (x, i) {
    return __jsx("a", {
      className: "mr-3",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: x,
      height: "50px",
      width: "50px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }));
  })))));
};

_c = SideProject;
/* harmony default export */ __webpack_exports__["default"] = (SideProject);

var _c;

$RefreshReg$(_c, "SideProject");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/StyledButton.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlUHJvamVjdC5qcyJdLCJuYW1lcyI6WyJTaWRlUHJvamVjdCIsIml0ZW0iLCJpbWciLCJ0aXRsZSIsInN1YnRpdGxlIiwibGlua3MiLCJzb3VyY2UiLCJ0ZWNocyIsIm1hcCIsIngiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNsQjtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQSxJQUFJLENBQUNDLEdBQWY7QUFBb0IsYUFBUyxFQUFDLGdDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0QsSUFBSSxDQUFDRSxLQUF6QyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlGLElBQUksQ0FBQ0csUUFBVCxDQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxhQUFTLEVBQUMseUNBRFo7QUFFRSxRQUFJLEVBQUVILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxNQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxpREFBRDtBQUFZLGFBQVMsRUFBQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLENBRkYsQ0FMRixFQWVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZGLEVBZ0JFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ2Q7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFvQixTQUFHLEVBQUVBLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUQsQ0FBVjtBQUFhLFlBQU0sRUFBQyxNQUFwQjtBQUEyQixXQUFLLEVBQUMsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGM7QUFBQSxHQUFmLENBREgsQ0FoQkYsQ0FGRixDQURGLENBRGtCO0FBQUEsQ0FBcEI7O0tBQU1ULFc7QUFnQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFhOWU2N2E5ZDQ2ZmFiMWY4MzFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHaXRodWJJY29uIH0gZnJvbSBcIi4vaWNvbnNcIlxuXG5jb25zdCBTaWRlUHJvamVjdCA9ICh7IGl0ZW0gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktNVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBtYXgtdy1zY3JlZW4tbGdcIj5cbiAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdy1mdWxsIGxnOm1heC13LWxnXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS01IGxnOnB5MFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01XCIgLz5cbiAgICAgICAgPHA+e2l0ZW0uc3VidGl0bGV9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtc3RhcnQgdGV4dC1ncmF5LTIwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMiBsZzpwYi0wIHBsLTJcIiAvPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNzAwIHB4LTQgcHktMiByb3VuZGVkLW1kIGZsZXhcIlxuICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rcy5zb3VyY2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdpdGh1Ykljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+U291cmNlIENvZGU8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAge2l0ZW0udGVjaHMubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtci0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3h9IGhlaWdodD1cIjUwcHhcIiB3aWR0aD1cIjUwcHhcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2lkZVByb2plY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=