(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-kotlinx-atomicfu-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-kotlinx-atomicfu-runtime'.");
    }
    globalThis['kotlin-kotlinx-atomicfu-runtime'] = factory(typeof globalThis['kotlin-kotlinx-atomicfu-runtime'] === 'undefined' ? {} : globalThis['kotlin-kotlinx-atomicfu-runtime'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var equals = kotlin_kotlin.$_$.ab;
  //endregion
  //region block: pre-declaration
  //endregion
  function atomicfu_getValue(atomicfu$getter, atomicfu$setter) {
    return atomicfu$getter();
  }
  function atomicfu_setValue(value, atomicfu$getter, atomicfu$setter) {
    atomicfu$setter(value);
  }
  function atomicfu_getAndSet(value, atomicfu$getter, atomicfu$setter) {
    var oldValue = atomicfu$getter();
    atomicfu$setter(value);
    return oldValue;
  }
  function atomicfu_compareAndSet(expect, update, atomicfu$getter, atomicfu$setter) {
    if (equals(atomicfu$getter(), expect)) {
      atomicfu$setter(update);
      return true;
    } else {
      return false;
    }
  }
  function atomicfu_addAndGet(value, atomicfu$getter, atomicfu$setter) {
    atomicfu$setter(atomicfu$getter() + value | 0);
    return atomicfu$getter();
  }
  return _;
}));

//# sourceMappingURL=kotlin-kotlinx-atomicfu-runtime.js.map
