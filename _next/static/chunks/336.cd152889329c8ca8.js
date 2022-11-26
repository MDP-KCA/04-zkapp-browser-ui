"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[336],{

/***/ 9336:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Add": function() { return /* reexport */ Add; }
});

// EXTERNAL MODULE: ./node_modules/snarkyjs/dist/web/index.js
var web = __webpack_require__(6400);
;// CONCATENATED MODULE: ../contracts/build/src/Add.js
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
class Add extends web/* SmartContract */.C3 {
    constructor() {
        super(...arguments);
        this.num = (0,web/* State */.ZM)();
    }
    init() {
        super.init();
        this.num.set((0,web/* Field */.gN)(1));
    }
    update() {
        const currentState = this.num.get();
        this.num.assertEquals(currentState); // precondition that links this.num.get() to the actual on-chain state
        const newState = currentState.add(2);
        this.num.set(newState);
    }
}
__decorate([
    (0,web/* state */.SB)(web/* Field */.gN),
    __metadata("design:type", Object)
], Add.prototype, "num", void 0);
__decorate([
    web/* method */.UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Add.prototype, "update", null);
//# sourceMappingURL=Add.js.map
;// CONCATENATED MODULE: ../contracts/build/src/index.js


//# sourceMappingURL=index.js.map

/***/ })

}]);