(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-compose.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-compose.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    globalThis['kobweb-frontend-silk-icons-fa'] = factory(typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y4;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Unit_getInstance = kotlin_kotlin.$_$.q4;
  var Enum = kotlin_kotlin.$_$.if;
  var protoOf = kotlin_kotlin.$_$.kc;
  var initMetadataForClass = kotlin_kotlin.$_$.hb;
  var VOID = kotlin_kotlin.$_$.f;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e4;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IconSize, 'IconSize', VOID, Enum);
  initMetadataForClass(IconStyle, 'IconStyle', VOID, Enum);
  initMetadataForClass(IconCategory, 'IconCategory', VOID, Enum);
  //endregion
  function FaEnvelope(modifier, style, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1094355464);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = style_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = size_0._v;
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
        tmp_1 = 256;
      } else {
        tmp_1 = 128;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        style_0._v = IconStyle_OUTLINE_getInstance();
      }
      if (!(($default & 4) === 0)) {
        size_0._v = null;
      }
      FaIcon('envelope', modifier_0._v, style_0._v.category_1, size_0._v, $composer_0, 6 | 112 & $dirty << 3 | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaEnvelope$lambda(modifier_0, style_0, size_0, $changed, $default));
    }
  }
  var IconSize_XXS_instance;
  var IconSize_XS_instance;
  var IconSize_SM_instance;
  var IconSize_LG_instance;
  var IconSize_XL_instance;
  var IconSize_XXL_instance;
  var IconSize_X1_instance;
  var IconSize_X2_instance;
  var IconSize_X3_instance;
  var IconSize_X4_instance;
  var IconSize_X5_instance;
  var IconSize_X6_instance;
  var IconSize_X7_instance;
  var IconSize_X8_instance;
  var IconSize_X9_instance;
  var IconSize_X10_instance;
  function values() {
    return [IconSize_XXS_getInstance(), IconSize_XS_getInstance(), IconSize_SM_getInstance(), IconSize_LG_getInstance(), IconSize_XL_getInstance(), IconSize_XXL_getInstance(), IconSize_X1_getInstance(), IconSize_X2_getInstance(), IconSize_X3_getInstance(), IconSize_X4_getInstance(), IconSize_X5_getInstance(), IconSize_X6_getInstance(), IconSize_X7_getInstance(), IconSize_X8_getInstance(), IconSize_X9_getInstance(), IconSize_X10_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'XXS':
        return IconSize_XXS_getInstance();
      case 'XS':
        return IconSize_XS_getInstance();
      case 'SM':
        return IconSize_SM_getInstance();
      case 'LG':
        return IconSize_LG_getInstance();
      case 'XL':
        return IconSize_XL_getInstance();
      case 'XXL':
        return IconSize_XXL_getInstance();
      case 'X1':
        return IconSize_X1_getInstance();
      case 'X2':
        return IconSize_X2_getInstance();
      case 'X3':
        return IconSize_X3_getInstance();
      case 'X4':
        return IconSize_X4_getInstance();
      case 'X5':
        return IconSize_X5_getInstance();
      case 'X6':
        return IconSize_X6_getInstance();
      case 'X7':
        return IconSize_X7_getInstance();
      case 'X8':
        return IconSize_X8_getInstance();
      case 'X9':
        return IconSize_X9_getInstance();
      case 'X10':
        return IconSize_X10_getInstance();
      default:
        IconSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var IconSize_entriesInitialized;
  function IconSize_initEntries() {
    if (IconSize_entriesInitialized)
      return Unit_getInstance();
    IconSize_entriesInitialized = true;
    IconSize_XXS_instance = new IconSize('XXS', 0, 'fa-2xs');
    IconSize_XS_instance = new IconSize('XS', 1, 'fa-xs');
    IconSize_SM_instance = new IconSize('SM', 2, 'fa-sm');
    IconSize_LG_instance = new IconSize('LG', 3, 'fa-lg');
    IconSize_XL_instance = new IconSize('XL', 4, 'fa-xl');
    IconSize_XXL_instance = new IconSize('XXL', 5, 'fa-2xl');
    IconSize_X1_instance = new IconSize('X1', 6, 'fa-1x');
    IconSize_X2_instance = new IconSize('X2', 7, 'fa-2x');
    IconSize_X3_instance = new IconSize('X3', 8, 'fa-3x');
    IconSize_X4_instance = new IconSize('X4', 9, 'fa-4x');
    IconSize_X5_instance = new IconSize('X5', 10, 'fa-5x');
    IconSize_X6_instance = new IconSize('X6', 11, 'fa-6x');
    IconSize_X7_instance = new IconSize('X7', 12, 'fa-7x');
    IconSize_X8_instance = new IconSize('X8', 13, 'fa-8x');
    IconSize_X9_instance = new IconSize('X9', 14, 'fa-9x');
    IconSize_X10_instance = new IconSize('X10', 15, 'fa-10x');
  }
  var $ENTRIES;
  function IconSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconSize).get_className_pmbm3o_k$ = function () {
    return this.className_1;
  };
  function FaLinkedinIn(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-293388905);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('linkedin-in', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaLinkedinIn$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaDiscord(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-94962162);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('discord', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaDiscord$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaWhatsapp(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1889763930);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('whatsapp', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaWhatsapp$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaTelegram(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(504129557);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('telegram', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaTelegram$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaInstagram(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-592540460);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('instagram', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaInstagram$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaLocationDot(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(716610230);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('location-dot', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaLocationDot$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaLinkedin(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1870020334);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('linkedin', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaLinkedin$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaGithub(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(520287031);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('github', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaGithub$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaXTwitter(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1703775215);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('x-twitter', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaXTwitter$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaHackerrank(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2134746482);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('hackerrank', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaHackerrank$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaMedium(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1038991561);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('medium', modifier_0._v, IconCategory_BRAND_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaMedium$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  function FaUpRightFromSquare(modifier, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1042707286);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = null;
      }
      FaIcon('up-right-from-square', modifier_0._v, IconCategory_SOLID_getInstance(), size_0._v, $composer_0, 390 | 112 & $dirty << 3 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaUpRightFromSquare$lambda(modifier_0, size_0, $changed, $default));
    }
  }
  var IconStyle_FILLED_instance;
  var IconStyle_OUTLINE_instance;
  function values_0() {
    return [IconStyle_FILLED_getInstance(), IconStyle_OUTLINE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'FILLED':
        return IconStyle_FILLED_getInstance();
      case 'OUTLINE':
        return IconStyle_OUTLINE_getInstance();
      default:
        IconStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var IconStyle_entriesInitialized;
  function IconStyle_initEntries() {
    if (IconStyle_entriesInitialized)
      return Unit_getInstance();
    IconStyle_entriesInitialized = true;
    IconStyle_FILLED_instance = new IconStyle('FILLED', 0, IconCategory_SOLID_getInstance());
    IconStyle_OUTLINE_instance = new IconStyle('OUTLINE', 1, IconCategory_REGULAR_getInstance());
  }
  var $ENTRIES_0;
  function IconStyle(name, ordinal, category) {
    Enum.call(this, name, ordinal);
    this.category_1 = category;
  }
  protoOf(IconStyle).get_category_klsyz3_k$ = function () {
    return this.category_1;
  };
  function FaIcon(name, modifier, style, size, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(706646195);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = style_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = size_0._v;
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
        tmp_1 = 2048;
      } else {
        tmp_1 = 1024;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        style_0._v = IconCategory_REGULAR_getInstance();
      }
      if (!(($default & 8) === 0)) {
        size_0._v = null;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1746271574);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 896) === 256 | ($dirty & 14) === 4) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = FaIcon$lambda(style_0, name, size_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_5 = toAttrs(modifier, tmp0_group);
      Span(tmp_5, null, $composer_0, 0, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(FaIcon$lambda_0(name, modifier, style_0, size_0, $changed, $default));
    }
  }
  var IconCategory_REGULAR_instance;
  var IconCategory_SOLID_instance;
  var IconCategory_BRAND_instance;
  function values_1() {
    return [IconCategory_REGULAR_getInstance(), IconCategory_SOLID_getInstance(), IconCategory_BRAND_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'REGULAR':
        return IconCategory_REGULAR_getInstance();
      case 'SOLID':
        return IconCategory_SOLID_getInstance();
      case 'BRAND':
        return IconCategory_BRAND_getInstance();
      default:
        IconCategory_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var IconCategory_entriesInitialized;
  function IconCategory_initEntries() {
    if (IconCategory_entriesInitialized)
      return Unit_getInstance();
    IconCategory_entriesInitialized = true;
    IconCategory_REGULAR_instance = new IconCategory('REGULAR', 0, 'far');
    IconCategory_SOLID_instance = new IconCategory('SOLID', 1, 'fas');
    IconCategory_BRAND_instance = new IconCategory('BRAND', 2, 'fab');
  }
  var $ENTRIES_1;
  function IconCategory(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconCategory).get_className_pmbm3o_k$ = function () {
    return this.className_1;
  };
  function FaEnvelope$lambda($modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaEnvelope($modifier._v, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaLinkedinIn$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaLinkedinIn($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaDiscord$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaDiscord($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaWhatsapp$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaWhatsapp($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaTelegram$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaTelegram($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaInstagram$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaInstagram($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaLocationDot$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaLocationDot($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaLinkedin$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaLinkedin($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaGithub$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaGithub($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaXTwitter$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaXTwitter($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaHackerrank$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaHackerrank($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaMedium$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaMedium($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaUpRightFromSquare$lambda($modifier, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaUpRightFromSquare($modifier._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaIcon$lambda($style, $name, $size) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_ayghm2_k$([$style._v.className_1, 'fa-' + $name]);
      var tmp;
      if (!($size._v == null)) {
        $this$toAttrs.classes_ayghm2_k$([$size._v.className_1]);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function FaIcon$lambda_0($name, $modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaIcon($name, $modifier, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function IconSize_XXS_getInstance() {
    IconSize_initEntries();
    return IconSize_XXS_instance;
  }
  function IconSize_XS_getInstance() {
    IconSize_initEntries();
    return IconSize_XS_instance;
  }
  function IconSize_SM_getInstance() {
    IconSize_initEntries();
    return IconSize_SM_instance;
  }
  function IconSize_LG_getInstance() {
    IconSize_initEntries();
    return IconSize_LG_instance;
  }
  function IconSize_XL_getInstance() {
    IconSize_initEntries();
    return IconSize_XL_instance;
  }
  function IconSize_XXL_getInstance() {
    IconSize_initEntries();
    return IconSize_XXL_instance;
  }
  function IconSize_X1_getInstance() {
    IconSize_initEntries();
    return IconSize_X1_instance;
  }
  function IconSize_X2_getInstance() {
    IconSize_initEntries();
    return IconSize_X2_instance;
  }
  function IconSize_X3_getInstance() {
    IconSize_initEntries();
    return IconSize_X3_instance;
  }
  function IconSize_X4_getInstance() {
    IconSize_initEntries();
    return IconSize_X4_instance;
  }
  function IconSize_X5_getInstance() {
    IconSize_initEntries();
    return IconSize_X5_instance;
  }
  function IconSize_X6_getInstance() {
    IconSize_initEntries();
    return IconSize_X6_instance;
  }
  function IconSize_X7_getInstance() {
    IconSize_initEntries();
    return IconSize_X7_instance;
  }
  function IconSize_X8_getInstance() {
    IconSize_initEntries();
    return IconSize_X8_instance;
  }
  function IconSize_X9_getInstance() {
    IconSize_initEntries();
    return IconSize_X9_instance;
  }
  function IconSize_X10_getInstance() {
    IconSize_initEntries();
    return IconSize_X10_instance;
  }
  function IconStyle_FILLED_getInstance() {
    IconStyle_initEntries();
    return IconStyle_FILLED_instance;
  }
  function IconStyle_OUTLINE_getInstance() {
    IconStyle_initEntries();
    return IconStyle_OUTLINE_instance;
  }
  function IconCategory_REGULAR_getInstance() {
    IconCategory_initEntries();
    return IconCategory_REGULAR_instance;
  }
  function IconCategory_SOLID_getInstance() {
    IconCategory_initEntries();
    return IconCategory_SOLID_instance;
  }
  function IconCategory_BRAND_getInstance() {
    IconCategory_initEntries();
    return IconCategory_BRAND_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FaDiscord;
  _.$_$.b = FaEnvelope;
  _.$_$.c = FaGithub;
  _.$_$.d = FaHackerrank;
  _.$_$.e = FaInstagram;
  _.$_$.f = FaLinkedinIn;
  _.$_$.g = FaLinkedin;
  _.$_$.h = FaLocationDot;
  _.$_$.i = FaMedium;
  _.$_$.j = FaTelegram;
  _.$_$.k = FaUpRightFromSquare;
  _.$_$.l = FaWhatsapp;
  _.$_$.m = FaXTwitter;
  _.$_$.n = IconSize_X3_getInstance;
  _.$_$.o = IconSize_XXL_getInstance;
  _.$_$.p = IconSize_XXS_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-icons-fa.js.map
