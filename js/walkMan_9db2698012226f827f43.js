!function(I){var g={};function C(A){if(g[A])return g[A].exports;var e=g[A]={i:A,l:!1,exports:{}};return I[A].call(e.exports,e,e.exports,C),e.l=!0,e.exports}C.m=I,C.c=g,C.d=function(I,g,A){C.o(I,g)||Object.defineProperty(I,g,{enumerable:!0,get:A})},C.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},C.t=function(I,g){if(1&g&&(I=C(I)),8&g)return I;if(4&g&&"object"==typeof I&&I&&I.__esModule)return I;var A=Object.create(null);if(C.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:I}),2&g&&"string"!=typeof I)for(var e in I)C.d(A,e,function(g){return I[g]}.bind(null,e));return A},C.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return C.d(g,"a",g),g},C.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},C.p="",C(C.s=32)}({32:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(69);\n\n__webpack_require__(33);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2Fsa01hbi9pbmRleC5qcz8xNzE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsbUJBQU8sQ0FBQyxFQUFELENBQVAiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXguY3NzJztcbnJlcXVpcmUoJy4vaW5kZXguaHRtbCcpOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n")},33:function(module,exports){eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\" />\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <meta http=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n        <title>walk-man</title>\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"index.css\\\">\\n    </head>\\n    <body>\\n        <div class=\\\"walk\\\"></div>\\n        <script>\\n            const keyboards = {\\n                UP: 38,\\n                DOWN: 40,\\n                LEFT: 37,\\n                RIGHT: 39\\n            };\\n            const keyRelatedVar = {\\n                [keyboards.UP]: '--translate-y',\\n                [keyboards.DOWN]: '--translate-y',\\n                [keyboards.LEFT]: '--translate-x',\\n                [keyboards.RIGHT]: '--translate-x'\\n            }\\n            const keyRelatedMultiplier = {\\n                [keyboards.UP]: -0.8,\\n                [keyboards.DOWN]: 0.8,\\n                [keyboards.LEFT]: -1,\\n                [keyboards.RIGHT]: 1\\n            }\\n\\n            const directions = {\\n                LEFT: 1,\\n                RIGHT: 2\\n            }\\n\\n            const root = document.querySelector(':root')\\n            let move = false\\n            let direction = ''\\n            let timer = null\\n\\n            document.addEventListener('keydown', (ev) => {\\n                move = true;\\n                if (!Object.values(keyboards).includes(ev.keyCode)) {\\n                    return;\\n                }\\n\\n                root.style.setProperty('--moving', 'runing');\\n                if (ev.keyCode === keyboards.RIGHT) {\\n                    direction = directions.RIGHT;\\n                    root.style.setProperty('--rotateY', '0deg');\\n                } else if (ev.keyCode === keyboards.LEFT) {\\n                    direction = directions.LEFT;\\n                    root.style.setProperty('--rotateY', '180deg');\\n                }\\n\\n                if (!timer) {\\n                    const varName = keyRelatedVar[ev.keyCode];\\n                    const multiplier = keyRelatedMultiplier[ev.keyCode];\\n                    const multiplierBase = 12;\\n                    timer = setInterval(() => {\\n                        let value = parseInt(root.style.getPropertyValue(varName), 10) || 0;\\n                        let nextValue = value + multiplier * multiplierBase;\\n                        root.style.setProperty(varName, `${nextValue}px`)\\n                    }, 100);\\n                }\\n            });\\n\\n            document.addEventListener('keyup', (ev) => {\\n                move = false\\n                root.style.setProperty('--moving', 'paused');\\n                direction = '';\\n                timer = clearInterval(timer);\\n            });\\n        <\/script>\\n    </body>\\n</html>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2Fsa01hbi9pbmRleC5odG1sP2VlODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK2NBQStjLDBIQUEwSCxxQ0FBcUMsNk5BQTZOLDRDQUE0QywyS0FBMkssb0NBQW9DLG1FQUFtRSxzTkFBc04sOEJBQThCLHVFQUF1RSw2QkFBNkIsbUJBQW1CLGlFQUFpRSx1REFBdUQsbURBQW1ELGtFQUFrRSxtQkFBbUIsMENBQTBDLGtEQUFrRCxvRUFBb0UsbUJBQW1CLGlDQUFpQyxnRUFBZ0UsMEVBQTBFLGdEQUFnRCxpREFBaUQsOEZBQThGLDhFQUE4RSw2REFBNkQsVUFBVSwyQkFBMkIsT0FBTyxtQkFBbUIsZUFBZSxFQUFFLDREQUE0RCw2RkFBNkYsaUNBQWlDLCtDQUErQyxlQUFlLEVBQUUiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgICA8aGVhZD5cXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICAgICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgICAgICAgPG1ldGEgaHR0cD1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIj5cXG4gICAgICAgIDx0aXRsZT53YWxrLW1hbjwvdGl0bGU+XFxuICAgICAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIHR5cGU9XFxcInRleHQvY3NzXFxcIiBocmVmPVxcXCJpbmRleC5jc3NcXFwiPlxcbiAgICA8L2hlYWQ+XFxuICAgIDxib2R5PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Fsa1xcXCI+PC9kaXY+XFxuICAgICAgICA8c2NyaXB0PlxcbiAgICAgICAgICAgIGNvbnN0IGtleWJvYXJkcyA9IHtcXG4gICAgICAgICAgICAgICAgVVA6IDM4LFxcbiAgICAgICAgICAgICAgICBET1dOOiA0MCxcXG4gICAgICAgICAgICAgICAgTEVGVDogMzcsXFxuICAgICAgICAgICAgICAgIFJJR0hUOiAzOVxcbiAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgY29uc3Qga2V5UmVsYXRlZFZhciA9IHtcXG4gICAgICAgICAgICAgICAgW2tleWJvYXJkcy5VUF06ICctLXRyYW5zbGF0ZS15JyxcXG4gICAgICAgICAgICAgICAgW2tleWJvYXJkcy5ET1dOXTogJy0tdHJhbnNsYXRlLXknLFxcbiAgICAgICAgICAgICAgICBba2V5Ym9hcmRzLkxFRlRdOiAnLS10cmFuc2xhdGUteCcsXFxuICAgICAgICAgICAgICAgIFtrZXlib2FyZHMuUklHSFRdOiAnLS10cmFuc2xhdGUteCdcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3Qga2V5UmVsYXRlZE11bHRpcGxpZXIgPSB7XFxuICAgICAgICAgICAgICAgIFtrZXlib2FyZHMuVVBdOiAtMC44LFxcbiAgICAgICAgICAgICAgICBba2V5Ym9hcmRzLkRPV05dOiAwLjgsXFxuICAgICAgICAgICAgICAgIFtrZXlib2FyZHMuTEVGVF06IC0xLFxcbiAgICAgICAgICAgICAgICBba2V5Ym9hcmRzLlJJR0hUXTogMVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0ge1xcbiAgICAgICAgICAgICAgICBMRUZUOiAxLFxcbiAgICAgICAgICAgICAgICBSSUdIVDogMlxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKVxcbiAgICAgICAgICAgIGxldCBtb3ZlID0gZmFsc2VcXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gJydcXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBudWxsXFxuXFxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xcbiAgICAgICAgICAgICAgICBtb3ZlID0gdHJ1ZTtcXG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QudmFsdWVzKGtleWJvYXJkcykuaW5jbHVkZXMoZXYua2V5Q29kZSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1vdmluZycsICdydW5pbmcnKTtcXG4gICAgICAgICAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IGtleWJvYXJkcy5SSUdIVCkge1xcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5SSUdIVDtcXG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tcm90YXRlWScsICcwZGVnJyk7XFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0ga2V5Ym9hcmRzLkxFRlQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuTEVGVDtcXG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tcm90YXRlWScsICcxODBkZWcnKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAoIXRpbWVyKSB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJOYW1lID0ga2V5UmVsYXRlZFZhcltldi5rZXlDb2RlXTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSBrZXlSZWxhdGVkTXVsdGlwbGllcltldi5rZXlDb2RlXTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG11bHRpcGxpZXJCYXNlID0gMTI7XFxuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChyb290LnN0eWxlLmdldFByb3BlcnR5VmFsdWUodmFyTmFtZSksIDEwKSB8fCAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSB2YWx1ZSArIG11bHRpcGxpZXIgKiBtdWx0aXBsaWVyQmFzZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIGAke25leHRWYWx1ZX1weGApXFxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXYpID0+IHtcXG4gICAgICAgICAgICAgICAgbW92ZSA9IGZhbHNlXFxuICAgICAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbW92aW5nJywgJ3BhdXNlZCcpO1xcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnJztcXG4gICAgICAgICAgICAgICAgdGltZXIgPSBjbGVhckludGVydmFsKHRpbWVyKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIDwvc2NyaXB0PlxcbiAgICA8L2JvZHk+XFxuPC9odG1sPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n")},69:function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2Fsa01hbi9pbmRleC5jc3M/NmRhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///69\n")}});