(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-icons-fa.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-icons-fa.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'musaib:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'musaib:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'musaib:site'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'musaib:site'.");
    }
    globalThis['musaib:site'] = factory(typeof globalThis['musaib:site'] === 'undefined' ? {} : globalThis['musaib:site'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-icons-fa']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobwebx_silk_icons_fa) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.mg;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var to = kotlin_kotlin.$_$.xg;
  var mapOf = kotlin_kotlin.$_$.b8;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var removePrefix = kotlin_kotlin.$_$.de;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.q4;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var protoOf = kotlin_kotlin.$_$.kc;
  var initMetadataForObject = kotlin_kotlin.$_$.mb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.wg;
  var toInt = kotlin_kotlin.$_$.se;
  var charSequenceLength = kotlin_kotlin.$_$.wa;
  var toBoolean = kotlin_kotlin.$_$.qe;
  var isBlank = kotlin_kotlin.$_$.wd;
  var removeSuffix = kotlin_kotlin.$_$.ee;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u2;
  var loadFromLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o2;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.ia;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.wb;
  var saveToLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var setVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var initMetadataForLambda = kotlin_kotlin.$_$.lb;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g4;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var SuspendFunction1 = kotlin_kotlin.$_$.ja;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var VOID = kotlin_kotlin.$_$.f;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y4;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.b4;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h4;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.v;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n4;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var backgroundColor_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.zc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.eb;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var initMetadataForClass = kotlin_kotlin.$_$.hb;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.pg;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.t;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q4;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var THROW_IAE = kotlin_kotlin.$_$.uf;
  var enumEntries = kotlin_kotlin.$_$.ma;
  var Enum = kotlin_kotlin.$_$.if;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k4;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s4;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Start_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u4;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var height_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var topBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l2;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var gridAutoRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.j4;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y3;
  var fontSize_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var extendedBy = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var get_ImageStyle = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var Arrangement_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l4;
  var IconSize_XXL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.o;
  var FaEnvelope = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var FaLinkedinIn = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var FaDiscord = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var FaWhatsapp = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.l;
  var FaTelegram = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.j;
  var FaInstagram = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var IconSize_XXS_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.p;
  var FaLocationDot = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.h;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var leftRight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_silk_widgets.$_$.u;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Start$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var alignContent = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var KMutableProperty0 = kotlin_kotlin.$_$.xc;
  var THROW_ISE = kotlin_kotlin.$_$.vf;
  var getLocalDelegateReference = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_13 = kotlin_kotlin.$_$.i4;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.i;
  var toDuration = kotlin_kotlin.$_$.df;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.s9;
  var Direction_ToBottom_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var backgroundImage = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Companion_getInstance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i4;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Companion_getInstance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var FaLinkedin = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var FaGithub = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var FaXTwitter = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.m;
  var FaHackerrank = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var FaMedium = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.i;
  var IconSize_X3_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.n;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var scale = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var get_s = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var SunIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var MoonIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var CloseIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var HamburgerIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var get_UndecoratedLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.w;
  var Overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var gap_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var CenterStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r4;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var get_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.q;
  var saturate = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var blur = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var backdropFilter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_getInstance_20 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var clamp = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var SideEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var listOf = kotlin_kotlin.$_$.z7;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var filter = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var Pair = kotlin_kotlin.$_$.qf;
  var BottomEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o4;
  var FaUpRightFromSquare = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.k;
  var padding_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t4;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var Companion_getInstance_21 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j4;
  var Companion_getInstance_22 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k4;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var scrollMargin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var Companion_getInstance_23 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f4;
  var pointerEvents = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Bottom_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p4;
  var toAttrs = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.b6;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x4;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForLambda(AppEntry$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SitePalette, 'SitePalette');
  initMetadataForObject(SitePalettes, 'SitePalettes');
  initMetadataForLambda(DefaultPageLayout$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Skill, 'Skill', VOID, Enum);
  initMetadataForObject(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt');
  initMetadataForObject(ComposableSingletons$ContactLinksRowKt, 'ComposableSingletons$ContactLinksRowKt');
  initMetadataForObject(ComposableSingletons$DeveloperLocationInfoRowKt, 'ComposableSingletons$DeveloperLocationInfoRowKt');
  initMetadataForObject(ComposableSingletons$FooterContactRowKt, 'ComposableSingletons$FooterContactRowKt');
  initMetadataForObject(ComposableSingletons$GetInTouchColumnKt, 'ComposableSingletons$GetInTouchColumnKt');
  initMetadataForLambda(TimeDisplay$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$CloseButtonKt, 'ComposableSingletons$CloseButtonKt');
  initMetadataForObject(ComposableSingletons$HumburgerButtonKt, 'ComposableSingletons$HumburgerButtonKt');
  initMetadataForClass(SideMenuState, 'SideMenuState', VOID, Enum);
  initMetadataForObject(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt');
  initMetadataForObject(ComposableSingletons$RoundedImageKt, 'ComposableSingletons$RoundedImageKt');
  initMetadataForObject(ComposableSingletons$ProjectsKt, 'ComposableSingletons$ProjectsKt');
  initMetadataForObject(ButtonColors, 'ButtonColors');
  initMetadataForObject(Constants, 'Constants');
  initMetadataForObject(Title, 'Title');
  initMetadataForObject(Images, 'Images');
  initMetadataForObject(Res, 'Res');
  initMetadataForObject(ComposableSingletons$LinkButtonKt, 'ComposableSingletons$LinkButtonKt');
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'Musaib Shabir')));
    Companion_getInstance().set_wjk6wo_k$('/Portfolio/');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_gm9buu_k$(remove(Companion_getInstance(), removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda$1844790174$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda$854823496$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda$1844790174__1 = ComposableLambda$invoke$ref(composableLambdaInstance(1844790174, false, ComposableSingletons$MainKt$lambda$1844790174$lambda));
    var tmp_0 = this;
    tmp_0.lambda$854823496__1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda$854823496$lambda));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda$1844790174_ibe5yu_k$ = function () {
    return this.lambda$1844790174__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$854823496_fm4lai_k$ = function () {
    return this.lambda$854823496__1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (document.hidden) {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = $status.className;
          if (charSequenceLength(this_0) > 0) {
            $shouldReload._v = true;
            tmp_1 = Unit_getInstance();
          } else {
            forceReloadNow();
            tmp_1 = Unit_getInstance();
          }
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register_wqi1wu_k$('/', ComposableSingletons$MainKt_getInstance().lambda$1844790174__1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('headline-text', get_HeadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('subheadline-text', get_SubheadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('about', get_AboutStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('skills-section', get_SkillsSectionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('skills-grid', get_SkillsGridStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('about-discription', get_AboutDiscriptionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('footer', get_FooterStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('footer-text', get_FooterTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('footer-location', get_FooterLocationStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('footer-description', get_FooterDescriptionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('hero-section', get_HeroSectionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('hello-im', get_HelloImStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('user-name', get_UserNameStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('users-message', get_UsersMessageStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('nav-header', get_NavHeaderStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('side-menu', get_SideMenuStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('menu', get_MenuStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('projects', get_ProjectsStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('section-title', get_SectionTitleStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('section-discription', get_SectionDiscriptionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('skill-text', get_SkillTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('skill-proficiency-text', get_SkillProficiencyTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('main-button', get_MainButtonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('section-container', get_SectionContainerStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('social-link', get_SocialLinkStyle());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-circle', get_CircleButtonVariant());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-uncolored', get_UncoloredButtonVariant());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-skill-item', get_SkillItemImageVariant());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-normal', ButtonColors_getInstance().get_NormalButton_1q98iq_k$());
    ctx.get_theme_iz24rk_k$().registerKeyframes_f5btlc_k$('hero-container-key-frames', get_HeroContainerKeyFrames());
    ctx.get_theme_iz24rk_k$().registerKeyframes_f5btlc_k$('side-menu-slide-in', get_SideMenuSlideInAnim());
    initColorMode(ctx);
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda$854823496__1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initColorMode(ctx) {
    var tmp = ctx.get_config_c0698r_k$();
    var tmp0_elvis_lhs = loadFromLocalStorage(Companion_getInstance_1(), 'musaib:colorMode');
    tmp.set_initialColorMode_lmyh2d_k$(tmp0_elvis_lhs == null ? ColorMode_DARK_getInstance() : tmp0_elvis_lhs);
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(933136176);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1248055121, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.$colorMode_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppEntry$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          saveToLocalStorage(this.$colorMode_1, 'musaib:colorMode');
          var tmp_0 = document.body;
          setVariable(tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE(), get_ScrollbarThumbColor(), toSitePalette(this.$colorMode_1).get_subHeadLine_h6dtkb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.$colorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppEntry$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var colorMode = Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6);
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_kpusro_k$(colorMode.get_ordinal_ip24qg_k$());
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        LaunchedEffect(colorMode, tmp0_group, $composer_0, 0);
        var tmp_2 = scrollBehavior(minHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), get_vh(100)), Companion_getInstance_2().get_Smooth_4edjo7_k$());
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1533166101, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_2, null, null, null, null, tmp0, $composer_0, 196608, 30);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_ScrollbarThumbColor() {
    _init_properties_AppStyles_kt__9fg0zz();
    return ScrollbarThumbColor$delegate.getValue_fbnwi2_k$(null, ScrollbarThumbColor$factory());
  }
  var ScrollbarThumbColor$delegate;
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle;
  }
  var HeadlineTextStyle;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle;
  }
  var SubheadlineTextStyle;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant;
  }
  var CircleButtonVariant;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant;
  }
  var UncoloredButtonVariant;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp = ctx.get_stylesheet_hk204p_k$();
    tmp.registerStyle_79mtge_k$('html', initSiteStyles$lambda);
    var tmp_0 = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(tmp_0, 'body', initSiteStyles$lambda_0);
    var tmp_1 = ctx.get_theme_iz24rk_k$();
    var tmp_2 = get_HorizontalDividerStyle();
    modifyStyleBase(tmp_1, tmp_2, VOID, initSiteStyles$lambda_1);
    var tmp_3 = ctx.get_stylesheet_hk204p_k$();
    tmp_3.registerStyle_79mtge_k$('body', initSiteStyles$lambda_2);
  }
  function HeadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(3)), Companion_getInstance_4().get_Start_ih4i6x_k$()), 1.2);
  }
  function SubheadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(1)), Companion_getInstance_4().get_Start_ih4i6x_k$()), get_color(toPalette($this$base.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8));
  }
  function CircleButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_getInstance_3(), get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable_0(Companion_getInstance_3(), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function initSiteStyles$lambda($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'no-preference';
    var tmp = new MediaFeature('prefers-reduced-motion', tmp$ret$2);
    $this$registerStyle.cssRule_7fzdgd_k$(tmp, initSiteStyles$lambda$lambda);
    return Unit_getInstance();
  }
  function initSiteStyles$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return scrollBehavior(Companion_getInstance_3(), Companion_getInstance_2().get_Smooth_4edjo7_k$());
  }
  function initSiteStyles$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_getInstance_3(), ['lexend', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_1($this$modifyStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_getInstance_3());
  }
  function initSiteStyles$lambda_2($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    $this$registerStyle.cssRule_fe6cwq_k$('::-webkit-scrollbar', initSiteStyles$lambda$lambda_0);
    $this$registerStyle.cssRule_fe6cwq_k$('::-webkit-scrollbar-thumb', initSiteStyles$lambda$lambda_1);
    $this$registerStyle.cssRule_fe6cwq_k$('::-webkit-scrollbar-corner', initSiteStyles$lambda$lambda_2);
    return Unit_getInstance();
  }
  function initSiteStyles$lambda$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return backgroundColor(height(width(Companion_getInstance_3(), get_px(4)), get_px(6)), Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function initSiteStyles$lambda$lambda_1() {
    _init_properties_AppStyles_kt__9fg0zz();
    return backgroundColor(borderRadius(Companion_getInstance_3(), get_px(10)), get_ScrollbarThumbColor().value$default_36t2hw_k$());
  }
  function initSiteStyles$lambda$lambda_2() {
    _init_properties_AppStyles_kt__9fg0zz();
    return backgroundColor_0(Companion_getInstance_3(), Companion_getInstance_5().get_Transparent_cxh4g9_k$());
  }
  function ScrollbarThumbColor$factory() {
    return getPropertyCallableRef('ScrollbarThumbColor', 0, KProperty0, function () {
      return get_ScrollbarThumbColor();
    }, null);
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      ScrollbarThumbColor$delegate = StyleVariable();
      var tmp = Companion_getInstance_6();
      HeadlineTextStyle = base(tmp, VOID, HeadlineTextStyle$lambda);
      var tmp_0 = Companion_getInstance_6();
      SubheadlineTextStyle = base(tmp_0, VOID, SubheadlineTextStyle$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant = addVariantBase(tmp_1, VOID, CircleButtonVariant$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$lambda);
    }
  }
  var musaib_SitePalette$stable;
  var musaib_SitePalettes$stable;
  function SitePalette(nearBackground, discription, subHeadLine, buttonBackground, buttonText) {
    this.nearBackground_1 = nearBackground;
    this.discription_1 = discription;
    this.subHeadLine_1 = subHeadLine;
    this.buttonBackground_1 = buttonBackground;
    this.buttonText_1 = buttonText;
  }
  protoOf(SitePalette).get_nearBackground_c1s3l_k$ = function () {
    return this.nearBackground_1;
  };
  protoOf(SitePalette).get_discription_rmjmk1_k$ = function () {
    return this.discription_1;
  };
  protoOf(SitePalette).get_subHeadLine_h6dtkb_k$ = function () {
    return this.subHeadLine_1;
  };
  protoOf(SitePalette).get_buttonBackground_ox9et3_k$ = function () {
    return this.buttonBackground_1;
  };
  protoOf(SitePalette).get_buttonText_e8s7aw_k$ = function () {
    return this.buttonText_1;
  };
  function SitePalettes() {
    SitePalettes_instance = this;
    this.light_1 = new SitePalette(Companion_getInstance_7().rgb_6orfmz_k$(16054010), Colors_getInstance().get_Gray_wo2eh8_k$(), Companion_getInstance_7().rgb_6orfmz_k$(893709), Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$());
    this.dark_1 = new SitePalette(Companion_getInstance_7().rgb_6orfmz_k$(4539717), Colors_getInstance().get_LightGray_i1h2r4_k$(), Companion_getInstance_7().rgb_6orfmz_k$(4838212), Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$());
  }
  protoOf(SitePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(SitePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SitePalettes_getInstance().light_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().dark_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Companion_getInstance_7().rgb_6orfmz_k$(14277081));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Companion_getInstance_7().rgb_6orfmz_k$(1907997));
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function musaib_SitePalette$stableprop_getter() {
    return musaib_SitePalette$stable;
  }
  function musaib_SitePalettes$stableprop_getter() {
    return musaib_SitePalettes$stable;
  }
  function DefaultPageLayout(title, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(961351104);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = DefaultPageLayout$slambda_0(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(title, tmp0_group, $composer_0, 14 & $dirty);
      var tmp_1 = fillMaxSize(Companion_getInstance_3());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
      Companion_getInstance_8();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = 'relative';
      var tmp_2 = position(tmp_1, tmp$ret$7);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(740346822, true, DefaultPageLayout$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_2, null, null, tmp0, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(DefaultPageLayout$lambda_0(title, content, $changed));
    }
  }
  function DefaultPageLayout$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultPageLayout$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultPageLayout$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultPageLayout$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          document.title = 'Musaib Shabir';
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DefaultPageLayout$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new DefaultPageLayout$slambda(completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(DefaultPageLayout$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultPageLayout$slambda_0(resultContinuation) {
    var i = new DefaultPageLayout$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultPageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        NavHeader($composer_0, 0);
        $content($composer_0, 0);
        Footer(null, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DefaultPageLayout$lambda($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        SVGHeroBackround(height(left(top(displayUntil(Companion_getInstance_3(), Breakpoint_MD_getInstance()), get_px(-50)), get_px(-50)), get_vh(28)), 'images/green_circle.svg', $composer_0, 48, 0);
        SVGHeroBackround(height(right(top(displayIfAtLeast(Companion_getInstance_3(), Breakpoint_LG_getInstance()), get_px(0)), get_px(0)), get_vh(100)), 'images/waves.svg', $composer_0, 48, 0);
        var tmp_0 = fillMaxSize(Companion_getInstance_3());
        var tmp_1 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-588891459, true, DefaultPageLayout$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DefaultPageLayout$lambda_0($title, $content, $$changed) {
    return function ($composer, $force) {
      DefaultPageLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var Skill_AndroidStudio_instance;
  var Skill_IntellijIdea_instance;
  var Skill_Kotlin_instance;
  var Skill_Java_instance;
  var Skill_CPP_instance;
  var Skill_Compose_instance;
  var Skill_Ktor_instance;
  var Skill_Jetpack_instance;
  var Skill_Firebase_instance;
  var Skill_Github_instance;
  var Skill_Gradle_instance;
  var Skill_Git_instance;
  var Skill_Figma_instance;
  var Skill_Python_instance;
  var Skill_Markdown_instance;
  function values() {
    return [Skill_AndroidStudio_getInstance(), Skill_IntellijIdea_getInstance(), Skill_Kotlin_getInstance(), Skill_Java_getInstance(), Skill_CPP_getInstance(), Skill_Compose_getInstance(), Skill_Ktor_getInstance(), Skill_Jetpack_getInstance(), Skill_Firebase_getInstance(), Skill_Github_getInstance(), Skill_Gradle_getInstance(), Skill_Git_getInstance(), Skill_Figma_getInstance(), Skill_Python_getInstance(), Skill_Markdown_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'AndroidStudio':
        return Skill_AndroidStudio_getInstance();
      case 'IntellijIdea':
        return Skill_IntellijIdea_getInstance();
      case 'Kotlin':
        return Skill_Kotlin_getInstance();
      case 'Java':
        return Skill_Java_getInstance();
      case 'CPP':
        return Skill_CPP_getInstance();
      case 'Compose':
        return Skill_Compose_getInstance();
      case 'Ktor':
        return Skill_Ktor_getInstance();
      case 'Jetpack':
        return Skill_Jetpack_getInstance();
      case 'Firebase':
        return Skill_Firebase_getInstance();
      case 'Github':
        return Skill_Github_getInstance();
      case 'Gradle':
        return Skill_Gradle_getInstance();
      case 'Git':
        return Skill_Git_getInstance();
      case 'Figma':
        return Skill_Figma_getInstance();
      case 'Python':
        return Skill_Python_getInstance();
      case 'Markdown':
        return Skill_Markdown_getInstance();
      default:
        Skill_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_getInstance();
    Skill_entriesInitialized = true;
    Skill_AndroidStudio_instance = new Skill('AndroidStudio', 0, 'Android Studio', 'Skilled', 'images/Skills/android_studio_dark.svg', 'images/Skills/android_studio_light.svg');
    Skill_IntellijIdea_instance = new Skill('IntellijIdea', 1, 'IntelliJ IDEA', 'Skilled', 'images/Skills/intellij_idea.svg', 'images/Skills/intellij_idea.svg');
    Skill_Kotlin_instance = new Skill('Kotlin', 2, 'Kotlin', 'Skilled', 'images/Skills/kotlin.svg', 'images/Skills/kotlin.svg');
    Skill_Java_instance = new Skill('Java', 3, 'Java', 'Adept', 'images/Skills/java.svg', 'images/Skills/java.svg');
    Skill_CPP_instance = new Skill('CPP', 4, 'C++', 'Skilled', 'images/Skills/cpp.svg', 'images/Skills/cpp.svg');
    Skill_Compose_instance = new Skill('Compose', 5, 'Compose', 'Skilled', 'images/Skills/compose.svg', 'images/Skills/compose.svg');
    Skill_Ktor_instance = new Skill('Ktor', 6, 'Ktor', 'Novice', 'images/Skills/ktor.svg', 'images/Skills/ktor.svg');
    Skill_Jetpack_instance = new Skill('Jetpack', 7, 'Jetpack', 'Skilled', 'images/Skills/jetpack_dark.svg', 'images/Skills/jetpack_light.svg');
    Skill_Firebase_instance = new Skill('Firebase', 8, 'Firebase', 'Adept', 'images/Skills/firebase.svg', 'images/Skills/firebase.svg');
    Skill_Github_instance = new Skill('Github', 9, 'GitHub', 'Skilled', 'images/Skills/github_dark.svg', 'images/Skills/github_light.svg');
    Skill_Gradle_instance = new Skill('Gradle', 10, 'Gradle', 'Adept', 'images/Skills/gradle_dark.svg', 'images/Skills/gradle_light.svg');
    Skill_Git_instance = new Skill('Git', 11, 'Git', 'Skilled', 'images/Skills/git.svg', 'images/Skills/git.svg');
    Skill_Figma_instance = new Skill('Figma', 12, 'Figma', 'Adept', 'images/Skills/figma.svg', 'images/Skills/figma.svg');
    Skill_Python_instance = new Skill('Python', 13, 'Python', 'Skilled', 'images/Skills/python.svg', 'images/Skills/python.svg');
    Skill_Markdown_instance = new Skill('Markdown', 14, 'Markdown', 'Adept', 'images/Skills/markdown_dark.svg', 'images/Skills/markdown_light.svg');
  }
  var $ENTRIES;
  function Skill(name, ordinal, skillName, level, iconResLight, iconResDark) {
    Enum.call(this, name, ordinal);
    this.skillName_1 = skillName;
    this.level_1 = level;
    this.iconResLight_1 = iconResLight;
    this.iconResDark_1 = iconResDark;
  }
  protoOf(Skill).get_skillName_tl7bxp_k$ = function () {
    return this.skillName_1;
  };
  protoOf(Skill).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(Skill).get_iconResLight_pe08qg_k$ = function () {
    return this.iconResLight_1;
  };
  protoOf(Skill).get_iconResDark_lfq42c_k$ = function () {
    return this.iconResDark_1;
  };
  function Skill_AndroidStudio_getInstance() {
    Skill_initEntries();
    return Skill_AndroidStudio_instance;
  }
  function Skill_IntellijIdea_getInstance() {
    Skill_initEntries();
    return Skill_IntellijIdea_instance;
  }
  function Skill_Kotlin_getInstance() {
    Skill_initEntries();
    return Skill_Kotlin_instance;
  }
  function Skill_Java_getInstance() {
    Skill_initEntries();
    return Skill_Java_instance;
  }
  function Skill_CPP_getInstance() {
    Skill_initEntries();
    return Skill_CPP_instance;
  }
  function Skill_Compose_getInstance() {
    Skill_initEntries();
    return Skill_Compose_instance;
  }
  function Skill_Ktor_getInstance() {
    Skill_initEntries();
    return Skill_Ktor_instance;
  }
  function Skill_Jetpack_getInstance() {
    Skill_initEntries();
    return Skill_Jetpack_instance;
  }
  function Skill_Firebase_getInstance() {
    Skill_initEntries();
    return Skill_Firebase_instance;
  }
  function Skill_Github_getInstance() {
    Skill_initEntries();
    return Skill_Github_instance;
  }
  function Skill_Gradle_getInstance() {
    Skill_initEntries();
    return Skill_Gradle_instance;
  }
  function Skill_Git_getInstance() {
    Skill_initEntries();
    return Skill_Git_instance;
  }
  function Skill_Figma_getInstance() {
    Skill_initEntries();
    return Skill_Figma_instance;
  }
  function Skill_Python_getInstance() {
    Skill_initEntries();
    return Skill_Python_instance;
  }
  function Skill_Markdown_getInstance() {
    Skill_initEntries();
    return Skill_Markdown_instance;
  }
  function SkillItem(skill, colorMode, modifier, horizontalArrangement, $composer, $changed, $default) {
    var colorMode_0 = {_v: colorMode};
    var modifier_0 = {_v: modifier};
    var horizontalArrangement_0 = {_v: horizontalArrangement};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(691745194);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(skill.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (($changed & 48) === 0) {
      var tmp;
      var tmp_0;
      if (($default & 2) === 0) {
        var tmp_1 = $composer_0;
        var tmpEnum = colorMode_0._v;
        tmp_0 = tmp_1.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$());
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = 32;
      } else {
        tmp = 16;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.changedInstance_s1wkiy_k$(horizontalArrangement_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          colorMode_0._v = Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance_3();
        }
        if (!(($default & 8) === 0)) {
          horizontalArrangement_0._v = Start_getInstance();
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp_2 = modifier_0._v;
      var tmp_3 = horizontalArrangement_0._v;
      var tmp_4 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-482602873, true, SkillItem$lambda(colorMode_0, skill), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp_2, tmp_3, tmp_4, null, tmp0, $composer_0, 24576 | 14 & $dirty >> 6 | 112 & $dirty >> 6 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SkillItem$lambda_0(skill, colorMode_0, modifier_0, horizontalArrangement_0, $changed, $default));
    }
  }
  function SkillItem$lambda$lambda($skill) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = $skill.get_skillName_tl7bxp_k$();
        var tmp_1 = toModifier(get_SkillTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
        var tmp_2 = $skill.get_level_ium7h7_k$();
        var tmp_3 = toModifier(get_SkillProficiencyTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        var tmp_4;
        switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_4 = Colors_getInstance().get_Gray_wo2eh8_k$();
            break;
          case 1:
            tmp_4 = Colors_getInstance().get_LightGray_i1h2r4_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var tmp_5 = color(tmp_3, tmp_4);
        SpanText(tmp_2, tmp_5, null, null, $composer_0, 0, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillItem$lambda($colorMode, $skill) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = $colorMode._v.get_isLight_zemp0j_k$() ? $skill.get_iconResLight_pe08qg_k$() : $skill.get_iconResDark_lfq42c_k$();
        var tmp_1 = get_SkillItemImageVariant();
        Image(tmp_0, null, tmp_1, null, null, null, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 122);
        var tmp0_modifier = margin(Companion_getInstance_3(), VOID, VOID, VOID, get_cssRem(0.75));
        var tmp1_horizontalAlignment = Start_getInstance_0();
        var tmp2_verticalArrangement = SpaceBetween_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(919367984, true, SkillItem$lambda$lambda($skill), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp0_modifier, tmp2_verticalArrangement, tmp1_horizontalAlignment, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillItem$lambda_0($skill, $colorMode, $modifier, $horizontalArrangement, $$changed, $$default) {
    return function ($composer, $force) {
      SkillItem($skill, $colorMode._v, $modifier._v, $horizontalArrangement._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_AboutStyle() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return AboutStyle;
  }
  var AboutStyle;
  function get_SkillItemImageVariant() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return SkillItemImageVariant;
  }
  var SkillItemImageVariant;
  function get_SkillsSectionStyle() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return SkillsSectionStyle;
  }
  var SkillsSectionStyle;
  function get_SkillsGridStyle() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return SkillsGridStyle;
  }
  var SkillsGridStyle;
  function get_AboutDiscriptionStyle() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return AboutDiscriptionStyle;
  }
  var AboutDiscriptionStyle;
  function AboutStyle$lambda($this$extendedBy) {
    _init_properties_AboutStyle_kt__5kx1x8();
    $this$extendedBy.base_y8uu8g_k$(AboutStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function AboutStyle$lambda$lambda() {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp = fillMaxWidth(Companion_getInstance_3());
    // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
    // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
    // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = height_0(tmp, 'auto');
    return padding_0(tmp_0, AboutStyle$lambda$lambda$lambda);
  }
  function AboutStyle$lambda$lambda$lambda($this$padding) {
    _init_properties_AboutStyle_kt__5kx1x8();
    topBottom($this$padding, get_cssRem(10));
    return Unit_getInstance();
  }
  function SkillItemImageVariant$lambda($this$addVariant) {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$addVariant.invoke_xzuw0j_k$(tmp, SkillItemImageVariant$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$addVariant.invoke_xzuw0j_k$(tmp_0, SkillItemImageVariant$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$addVariant.invoke_xzuw0j_k$(tmp_1, SkillItemImageVariant$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$addVariant.invoke_xzuw0j_k$(tmp_2, SkillItemImageVariant$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$addVariant.invoke_xzuw0j_k$(tmp_3, SkillItemImageVariant$lambda$lambda_3);
    return Unit_getInstance();
  }
  function SkillItemImageVariant$lambda$lambda() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return size(Companion_getInstance_3(), get_cssRem(1.65));
  }
  function SkillItemImageVariant$lambda$lambda_0() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return size(Companion_getInstance_3(), get_cssRem(1.75));
  }
  function SkillItemImageVariant$lambda$lambda_1() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return size(Companion_getInstance_3(), get_cssRem(2));
  }
  function SkillItemImageVariant$lambda$lambda_2() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return size(Companion_getInstance_3(), get_cssRem(3));
  }
  function SkillItemImageVariant$lambda$lambda_3() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return size(Companion_getInstance_3(), get_cssRem(3.5));
  }
  function SkillsSectionStyle$lambda($this$CssStyle) {
    _init_properties_AboutStyle_kt__5kx1x8();
    $this$CssStyle.base_y8uu8g_k$(SkillsSectionStyle$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SkillsSectionStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SkillsSectionStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SkillsSectionStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, SkillsSectionStyle$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, SkillsSectionStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function SkillsSectionStyle$lambda$lambda() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return height(Companion_getInstance_3(), get_vh(30));
  }
  function SkillsSectionStyle$lambda$lambda_0() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return maxWidth(Companion_getInstance_3(), get_percent(100));
  }
  function SkillsSectionStyle$lambda$lambda_1() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return maxWidth(Companion_getInstance_3(), get_percent(100));
  }
  function SkillsSectionStyle$lambda$lambda_2() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return maxWidth(Companion_getInstance_3(), get_percent(100));
  }
  function SkillsSectionStyle$lambda$lambda_3() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return maxWidth(Companion_getInstance_3(), get_percent(100));
  }
  function SkillsSectionStyle$lambda$lambda_4() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return maxWidth(Companion_getInstance_3(), get_percent(70));
  }
  function SkillsGridStyle$lambda($this$CssStyle) {
    _init_properties_AboutStyle_kt__5kx1x8();
    $this$CssStyle.base_y8uu8g_k$(SkillsGridStyle$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SkillsGridStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SkillsGridStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SkillsGridStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, SkillsGridStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function SkillsGridStyle$lambda$lambda() {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp = padding_1(fillMaxWidth(Companion_getInstance_3()), get_cssRem(6.5), VOID, VOID, get_cssRem(3));
    return gridAutoRows(tmp, SkillsGridStyle$lambda$lambda$lambda);
  }
  function SkillsGridStyle$lambda$lambda$lambda($this$gridAutoRows) {
    _init_properties_AboutStyle_kt__5kx1x8();
    $this$gridAutoRows.size_q03g6h_k$(get_fr(1));
    return Unit_getInstance();
  }
  function SkillsGridStyle$lambda$lambda_0() {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp0_$receiver = Companion_getInstance_3();
    var tmp1_columnGap = get_cssRem(1);
    var tmp2_rowGap = get_cssRem(1.5);
    return gap(tmp0_$receiver, tmp2_rowGap, tmp1_columnGap);
  }
  function SkillsGridStyle$lambda$lambda_1() {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp0_$receiver = Companion_getInstance_3();
    var tmp1_columnGap = get_cssRem(5);
    var tmp2_rowGap = get_cssRem(2.5);
    return gap(tmp0_$receiver, tmp2_rowGap, tmp1_columnGap);
  }
  function SkillsGridStyle$lambda$lambda_2() {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp0_$receiver = Companion_getInstance_3();
    var tmp1_columnGap = get_cssRem(5);
    var tmp2_rowGap = get_cssRem(2.5);
    return gap(tmp0_$receiver, tmp2_rowGap, tmp1_columnGap);
  }
  function SkillsGridStyle$lambda$lambda_3() {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp0_$receiver = Companion_getInstance_3();
    var tmp1_columnGap = get_cssRem(5);
    var tmp2_rowGap = get_cssRem(5);
    return gap(tmp0_$receiver, tmp2_rowGap, tmp1_columnGap);
  }
  function AboutDiscriptionStyle$lambda($this$CssStyle) {
    _init_properties_AboutStyle_kt__5kx1x8();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, AboutDiscriptionStyle$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, AboutDiscriptionStyle$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, AboutDiscriptionStyle$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, AboutDiscriptionStyle$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, AboutDiscriptionStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function AboutDiscriptionStyle$lambda$lambda() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return textAlign(margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$()), get_cssRem(0.75)), Companion_getInstance_4().get_Justify_84qi6f_k$());
  }
  function AboutDiscriptionStyle$lambda$lambda_0() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return textAlign(margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$()), get_cssRem(0.75)), Companion_getInstance_4().get_Justify_84qi6f_k$());
  }
  function AboutDiscriptionStyle$lambda$lambda_1() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return textAlign(margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$()), get_cssRem(2)), Companion_getInstance_4().get_Center_3arb0i_k$());
  }
  function AboutDiscriptionStyle$lambda$lambda_2() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return textAlign(margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$()), get_cssRem(2)), Companion_getInstance_4().get_Center_3arb0i_k$());
  }
  function AboutDiscriptionStyle$lambda$lambda_3() {
    _init_properties_AboutStyle_kt__5kx1x8();
    return textAlign(margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$()), get_cssRem(2)), Companion_getInstance_4().get_Center_3arb0i_k$());
  }
  var properties_initialized_AboutStyle_kt_ahxbxi;
  function _init_properties_AboutStyle_kt__5kx1x8() {
    if (!properties_initialized_AboutStyle_kt_ahxbxi) {
      properties_initialized_AboutStyle_kt_ahxbxi = true;
      var tmp = get_SectionContainerStyle();
      AboutStyle = extendedBy(tmp, VOID, AboutStyle$lambda);
      var tmp_0 = get_ImageStyle();
      SkillItemImageVariant = addVariant(tmp_0, VOID, SkillItemImageVariant$lambda);
      SkillsSectionStyle = CssStyle(VOID, SkillsSectionStyle$lambda);
      SkillsGridStyle = CssStyle(VOID, SkillsGridStyle$lambda);
      AboutDiscriptionStyle = CssStyle(VOID, AboutDiscriptionStyle$lambda);
    }
  }
  function About($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(374439516);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = id(toModifier(get_AboutStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), 'about');
      var tmp_0 = Center_getInstance();
      var tmp_1 = CenterHorizontally_getInstance();
      Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$AboutKt_getInstance().lambda$_1607878509_3p9kn5__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(About$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_910160641$lambda_30lnhk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        SkillItem(element, null, null, null, $composer_0, 0, 14);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda$642037078$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_modifier = toModifier(get_SkillsGridStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp1_numColumns = numColumns(2, VOID, 5, 5);
      SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, ComposableSingletons$AboutKt_getInstance().lambda$_910160641_o51v00__1, $composer_0, 24576 | com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter(), 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1607878509$lambda_ddr6vh($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      SectionTitle('About me', $composer_0, 6);
      var tmp = toModifier(get_AboutDiscriptionStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_LightGray_i1h2r4_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = lineHeight(color(tmp, tmp_0), 2);
      SpanText('I am a Computer Science Engineering graduate with a strong passion for technology, problem-solving, and innovation. I specialize in modern Android development using Kotlin and Jetpack Compose, ensuring seamless and efficient user experiences. My interests extend to deep learning and artificial intelligence, where I explore advancements to build intelligent and scalable solutions. Beyond coding, I am fascinated by the cosmos and constantly seek to learn more about the universe, its mysteries, and the science behind it. I am always eager to explore new ideas and develop solutions that make a meaningful impact.', tmp_1, null, null, $composer_0, 6, 12);
      var tmp1_modifier = fillMaxWidth(Companion_getInstance_3());
      var tmp2_verticalAlignment = CenterVertically_getInstance();
      var tmp3_horizontalArrangement = Center_getInstance();
      Row(tmp1_modifier, tmp3_horizontalArrangement, tmp2_verticalAlignment, null, ComposableSingletons$AboutKt_getInstance().lambda$642037078__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.lambda$_910160641_o51v00__1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-910160641, false, ComposableSingletons$AboutKt$lambda$_910160641$lambda_30lnhk));
    var tmp_0 = this;
    tmp_0.lambda$642037078__1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(642037078, false, ComposableSingletons$AboutKt$lambda$642037078$lambda));
    var tmp_1 = this;
    tmp_1.lambda$_1607878509_3p9kn5__1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1607878509, false, ComposableSingletons$AboutKt$lambda$_1607878509$lambda_ddr6vh));
  }
  protoOf(ComposableSingletons$AboutKt).get_lambda$_910160641_qu7sq2_k$ = function () {
    return this.lambda$_910160641_o51v00__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$642037078_fb4do_k$ = function () {
    return this.lambda$642037078__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1607878509_hx7ha1_k$ = function () {
    return this.lambda$_1607878509_3p9kn5__1;
  };
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function About$lambda($$changed) {
    return function ($composer, $force) {
      About($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ContactLinksRow(displayEmail, $composer, $changed, $default) {
    var displayEmail_0 = {_v: displayEmail};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-922031664);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(displayEmail_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        displayEmail_0._v = false;
      }
      var tmp = Arrangement_getInstance().spacedBy_9noyc7_k$(get_cssRem(1));
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1681535853, true, ContactLinksRow$lambda(displayEmail_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(null, tmp, tmp_0, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ContactLinksRow$lambda_0(displayEmail_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ContactLinksRowKt$lambda$_1435741099$lambda_dyae9d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaEnvelope(null, null, IconSize_XXL_getInstance(), $composer_0, 384, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ContactLinksRowKt$lambda$1303691130$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaLinkedinIn(null, IconSize_XXL_getInstance(), $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ContactLinksRowKt$lambda$516144177$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaDiscord(null, IconSize_XXL_getInstance(), $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ContactLinksRowKt$lambda$_186451662$lambda_k65p77($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaWhatsapp(null, IconSize_XXL_getInstance(), $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ContactLinksRowKt$lambda$_889047501$lambda_8nf2w($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaTelegram(null, IconSize_XXL_getInstance(), $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ContactLinksRowKt$lambda$_1591643340$lambda_e9kkd8($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaInstagram(null, IconSize_XXL_getInstance(), $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ContactLinksRowKt() {
    ComposableSingletons$ContactLinksRowKt_instance = this;
    var tmp = this;
    tmp.lambda$_1435741099_lzh7kf_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1435741099, false, ComposableSingletons$ContactLinksRowKt$lambda$_1435741099$lambda_dyae9d));
    var tmp_0 = this;
    tmp_0.lambda$1303691130__1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1303691130, false, ComposableSingletons$ContactLinksRowKt$lambda$1303691130$lambda));
    var tmp_1 = this;
    tmp_1.lambda$516144177__1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(516144177, false, ComposableSingletons$ContactLinksRowKt$lambda$516144177$lambda));
    var tmp_2 = this;
    tmp_2.lambda$_186451662_dqlo3j_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-186451662, false, ComposableSingletons$ContactLinksRowKt$lambda$_186451662$lambda_k65p77));
    var tmp_3 = this;
    tmp_3.lambda$_889047501_w8ipu4__1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-889047501, false, ComposableSingletons$ContactLinksRowKt$lambda$_889047501$lambda_8nf2w));
    var tmp_4 = this;
    tmp_4.lambda$_1591643340_95jv6i_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-1591643340, false, ComposableSingletons$ContactLinksRowKt$lambda$_1591643340$lambda_e9kkd8));
  }
  protoOf(ComposableSingletons$ContactLinksRowKt).get_lambda$_1435741099_djyuax_k$ = function () {
    return this.lambda$_1435741099_lzh7kf_1;
  };
  protoOf(ComposableSingletons$ContactLinksRowKt).get_lambda$1303691130_p49uyw_k$ = function () {
    return this.lambda$1303691130__1;
  };
  protoOf(ComposableSingletons$ContactLinksRowKt).get_lambda$516144177_cs3vnv_k$ = function () {
    return this.lambda$516144177__1;
  };
  protoOf(ComposableSingletons$ContactLinksRowKt).get_lambda$_186451662_rsbxaf_k$ = function () {
    return this.lambda$_186451662_dqlo3j_1;
  };
  protoOf(ComposableSingletons$ContactLinksRowKt).get_lambda$_889047501_j65gfm_k$ = function () {
    return this.lambda$_889047501_w8ipu4__1;
  };
  protoOf(ComposableSingletons$ContactLinksRowKt).get_lambda$_1591643340_udazb2_k$ = function () {
    return this.lambda$_1591643340_95jv6i_1;
  };
  var ComposableSingletons$ContactLinksRowKt_instance;
  function ComposableSingletons$ContactLinksRowKt_getInstance() {
    if (ComposableSingletons$ContactLinksRowKt_instance == null)
      new ComposableSingletons$ContactLinksRowKt();
    return ComposableSingletons$ContactLinksRowKt_instance;
  }
  function ContactLinksRow$lambda($displayEmail) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1048250938);
        if ($displayEmail._v) {
          SocialLinkButton('mailto:itzmusaibshabir@gmail.com', ComposableSingletons$ContactLinksRowKt_getInstance().lambda$_1435741099_lzh7kf_1, $composer_0, 54);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        SocialLinkButton('https://www.linkedin.com/in/musaibshabir', ComposableSingletons$ContactLinksRowKt_getInstance().lambda$1303691130__1, $composer_0, 54);
        SocialLinkButton('https://discordapp.com/users/914566253312618527', ComposableSingletons$ContactLinksRowKt_getInstance().lambda$516144177__1, $composer_0, 54);
        SocialLinkButton('https://wa.me/qr/YSOCVLJKQJMIN1', ComposableSingletons$ContactLinksRowKt_getInstance().lambda$_186451662_dqlo3j_1, $composer_0, 54);
        SocialLinkButton('https://t.me/MusaibShabir', ComposableSingletons$ContactLinksRowKt_getInstance().lambda$_889047501_w8ipu4__1, $composer_0, 54);
        SocialLinkButton('https://www.instagram.com/musaib.shabir/', ComposableSingletons$ContactLinksRowKt_getInstance().lambda$_1591643340_95jv6i_1, $composer_0, 54);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ContactLinksRow$lambda_0($displayEmail, $$changed, $$default) {
    return function ($composer, $force) {
      ContactLinksRow($displayEmail._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DeveloperLocationInfoRow(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1771548767);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      var ctx = rememberPageContext($composer_0, 0);
      var tmp = displayUntil(fillMaxWidth(modifier_0._v), Breakpoint_MD_getInstance());
      var tmp_0 = Arrangement_getInstance().spacedBy_9noyc7_k$(get_cssRem(3));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1043465288, true, DeveloperLocationInfoRow$lambda(modifier_0, ctx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, tmp_0, null, null, tmp0, $composer_0, 24576, 12);
      var tmp_3 = fillMaxWidth(displayIfAtLeast(modifier_0._v, Breakpoint_MD_getInstance()));
      var tmp_4 = SpaceBetween_getInstance();
      var tmp_5 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(1747179708, true, DeveloperLocationInfoRow$lambda_0(modifier_0, ctx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_26(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Row(tmp_3, tmp_4, tmp_5, null, tmp0_0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(DeveloperLocationInfoRow$lambda_1(modifier_0, $changed, $default));
    }
  }
  function LocationAndTime($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-659442372);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = CenterVertically_getInstance();
      Row(null, null, tmp, null, ComposableSingletons$DeveloperLocationInfoRowKt_getInstance().lambda$_398527681_ewwll5__1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 11);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LocationAndTime$lambda($changed));
    }
  }
  function getCopyrightText() {
    var currentYear = (new Date()).getFullYear().toString();
    return '\xA9 ' + currentYear + ' | Musaib Shabir';
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeveloperLocationInfoRowKt$lambda$_398527681$lambda_w2tyab($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (($changed & 17) === 16 && $composer_0.get_skipping_3owdve_k$()) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DeveloperLocationInfoRowKt() {
    ComposableSingletons$DeveloperLocationInfoRowKt_instance = this;
    var tmp = this;
    tmp.lambda$_398527681_ewwll5__1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-398527681, false, ComposableSingletons$DeveloperLocationInfoRowKt$lambda$_398527681$lambda_w2tyab));
  }
  protoOf(ComposableSingletons$DeveloperLocationInfoRowKt).get_lambda$_398527681_34m9a5_k$ = function () {
    return this.lambda$_398527681_ewwll5__1;
  };
  var ComposableSingletons$DeveloperLocationInfoRowKt_instance;
  function ComposableSingletons$DeveloperLocationInfoRowKt_getInstance() {
    if (ComposableSingletons$DeveloperLocationInfoRowKt_instance == null)
      new ComposableSingletons$DeveloperLocationInfoRowKt();
    return ComposableSingletons$DeveloperLocationInfoRowKt_instance;
  }
  function DeveloperLocationInfoRow$lambda$lambda$lambda$lambda($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$('https://maps.app.goo.gl/bjR36bERzYbTsqkv6');
      return Unit_getInstance();
    };
  }
  function DeveloperLocationInfoRow$lambda$lambda$lambda($modifier, $ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        FaLocationDot(color(padding_1($modifier._v, VOID, get_cssRem(0.5)), toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6)).get_discription_rmjmk1_k$()), IconSize_XXS_getInstance(), $composer_0, 48, 0);
        var tmp_0 = toModifier(get_FooterLocationStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($ctx);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = DeveloperLocationInfoRow$lambda$lambda$lambda$lambda($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = width(onClick(tmp_0, tmp0_group), get_cssRem(6));
        SpanText('Kashmir India', tmp_3, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DeveloperLocationInfoRow$lambda$lambda($modifier, $ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fillMaxWidth($modifier._v);
        var tmp_1 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(112529730, true, DeveloperLocationInfoRow$lambda$lambda$lambda($modifier, $ctx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
        TimeDisplay(null, 'Asia/Kolkata', $composer_0, 48, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DeveloperLocationInfoRow$lambda($modifier, $ctx) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fillMaxWidth($modifier._v);
        var tmp_1 = SpaceBetween_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-926111707, true, DeveloperLocationInfoRow$lambda$lambda($modifier, $ctx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        FooterSpanText(getCopyrightText(), textAlign(fillMaxWidth($modifier._v), Companion_getInstance_4().get_Center_3arb0i_k$()), $composer_0, 0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DeveloperLocationInfoRow$lambda$lambda$lambda$lambda_0($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$('https://maps.app.goo.gl/bjR36bERzYbTsqkv6');
      return Unit_getInstance();
    };
  }
  function DeveloperLocationInfoRow$lambda$lambda$lambda$lambda_1($this$padding) {
    leftRight($this$padding, get_cssRem(0.5));
    return Unit_getInstance();
  }
  function DeveloperLocationInfoRow$lambda$lambda$lambda_0($modifier, $ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        FaLocationDot(color(padding_1($modifier._v, VOID, get_cssRem(0.5)), toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6)).get_discription_rmjmk1_k$()), IconSize_XXS_getInstance(), $composer_0, 48, 0);
        var tmp_0 = toModifier(get_FooterLocationStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($ctx);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = DeveloperLocationInfoRow$lambda$lambda$lambda$lambda_0($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = onClick(tmp_0, tmp0_group);
        SpanText('Kashmir India', tmp_3, null, null, $composer_0, 6, 12);
        var tmp_4 = $modifier._v;
        $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = DeveloperLocationInfoRow$lambda$lambda$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        FooterSpanText('|', padding_0(tmp_4, tmp1_group), $composer_0, 6, 0);
        TimeDisplay(null, 'Asia/Kolkata', $composer_0, 48, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DeveloperLocationInfoRow$lambda$lambda_0($modifier, $ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1598728502, true, DeveloperLocationInfoRow$lambda$lambda$lambda_0($modifier, $ctx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(null, null, tmp_0, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 11);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DeveloperLocationInfoRow$lambda_0($modifier, $ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        FooterSpanText(getCopyrightText(), fillMaxWidth($modifier._v), $composer_0, 0, 0);
        var tmp_0 = fillMaxWidth($modifier._v);
        var tmp_1 = End_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1794513319, true, DeveloperLocationInfoRow$lambda$lambda_0($modifier, $ctx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function DeveloperLocationInfoRow$lambda_1($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      DeveloperLocationInfoRow($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LocationAndTime$lambda($$changed) {
    return function ($composer, $force) {
      LocationAndTime($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function FooterContactRow(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1593474465);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      var tmp = fillMaxWidth(displayUntil(modifier_0._v, Breakpoint_MD_getInstance()));
      var tmp_0 = Center_getInstance();
      var tmp_1 = CenterVertically_getInstance();
      Row(tmp, tmp_0, tmp_1, null, ComposableSingletons$FooterContactRowKt_getInstance().lambda$_2095053636_k5gmmj_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
      var tmp_2 = fillMaxWidth(displayIfAtLeast(modifier_0._v, Breakpoint_MD_getInstance()));
      var tmp_3 = SpaceBetween_getInstance();
      var tmp_4 = CenterVertically_getInstance();
      Row(tmp_2, tmp_3, tmp_4, null, ComposableSingletons$FooterContactRowKt_getInstance().lambda$_213217435_6b09vi_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FooterContactRow$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterContactRowKt$lambda$_2095053636$lambda_pckxzz($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      ContactLinksRow(true, $composer_0, 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterContactRowKt$lambda$_213217435$lambda_i04e2o($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var ctx = rememberPageContext($composer_0, 0);
      var currentPalette = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6));
      var tmp0_size = Companion_getInstance_10().get_LG_knton0_k$();
      var tmp1_modifier = background(toModifier(get_MainButtonStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), currentPalette.get_buttonBackground_ox9et3_k$(), []);
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(ctx);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableSingletons$FooterContactRowKt$lambda$_213217435$lambda$lambda_k7cnfv(ctx);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-709803659, true, ComposableSingletons$FooterContactRowKt$lambda$_213217435$lambda$lambda_k7cnfv_0(currentPalette), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp1_modifier, null, null, false, tmp0_size, null, null, null, tmp0, $composer_0, 805306368 | com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter() << 15, 476);
      ContactLinksRow(false, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterContactRowKt$lambda$_213217435$lambda$lambda_k7cnfv($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$('mailto:itzmusaibshabir@gmail.com');
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$FooterContactRowKt$lambda$_213217435$lambda$lambda_k7cnfv_0($currentPalette) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fontFamily(color(Companion_getInstance_3(), $currentPalette.get_buttonText_e8s7aw_k$()), ['Lexend']);
        SpanText('Email', tmp_0, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterContactRowKt() {
    ComposableSingletons$FooterContactRowKt_instance = this;
    var tmp = this;
    tmp.lambda$_2095053636_k5gmmj_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-2095053636, false, ComposableSingletons$FooterContactRowKt$lambda$_2095053636$lambda_pckxzz));
    var tmp_0 = this;
    tmp_0.lambda$_213217435_6b09vi_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-213217435, false, ComposableSingletons$FooterContactRowKt$lambda$_213217435$lambda_i04e2o));
  }
  protoOf(ComposableSingletons$FooterContactRowKt).get_lambda$_2095053636_6imc3_k$ = function () {
    return this.lambda$_2095053636_k5gmmj_1;
  };
  protoOf(ComposableSingletons$FooterContactRowKt).get_lambda$_213217435_i228h4_k$ = function () {
    return this.lambda$_213217435_6b09vi_1;
  };
  var ComposableSingletons$FooterContactRowKt_instance;
  function ComposableSingletons$FooterContactRowKt_getInstance() {
    if (ComposableSingletons$FooterContactRowKt_instance == null)
      new ComposableSingletons$FooterContactRowKt();
    return ComposableSingletons$FooterContactRowKt_instance;
  }
  function FooterContactRow$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      FooterContactRow($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FooterSpanText(text, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2034553004);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      var tmp = toModifier(get_FooterTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()).then_mmfvo6_k$(modifier_0._v);
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_LightGray_i1h2r4_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = color(tmp, tmp_0);
      SpanText(text, tmp_1, null, null, $composer_0, 14 & $dirty, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FooterSpanText$lambda(text, modifier_0, $changed, $default));
    }
  }
  function FooterSpanText$lambda($text, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      FooterSpanText($text, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function GetInTouchColumn(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1579235009);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      var tmp = fillMaxWidth(modifier_0._v);
      var tmp_0 = Start_getInstance_0();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1257763032, true, GetInTouchColumn$lambda(modifier_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(GetInTouchColumn$lambda_0(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GetInTouchColumnKt$lambda$301228689$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = toModifier(get_FooterDescriptionStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      SpanText("Feel free to reach out for collaboration, project inquiries, or simply to say hello. I'm always eager to connect with like-minded individuals who are passionate about technology and innovation. Whether you're seeking a dedicated developer to bring your ideas to life or wish to engage in discussions about the latest industry trends, don't hesitate to get in touch. Let's collaborate and create something exceptional together!\uD83D\uDE0A", tmp, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$GetInTouchColumnKt$lambda$449701818$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = toModifier(get_FooterDescriptionStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      SpanText("Feel free to reach out for collaboration, project inquiries, or simply to say hello. I'm always eager to connect with like-minded individuals who are passionate about technology and innovation. Whether you're seeking a dedicated developer to bring your ideas to life or wish to engage in discussions about the latest industry trends, don't hesitate to get in touch. Let's collaborate and create something exceptional together!\uD83D\uDE0A", tmp, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$GetInTouchColumnKt() {
    ComposableSingletons$GetInTouchColumnKt_instance = this;
    var tmp = this;
    tmp.lambda$301228689__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(301228689, false, ComposableSingletons$GetInTouchColumnKt$lambda$301228689$lambda));
    var tmp_0 = this;
    tmp_0.lambda$449701818__1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(449701818, false, ComposableSingletons$GetInTouchColumnKt$lambda$449701818$lambda));
  }
  protoOf(ComposableSingletons$GetInTouchColumnKt).get_lambda$301228689_1ufmfm_k$ = function () {
    return this.lambda$301228689__1;
  };
  protoOf(ComposableSingletons$GetInTouchColumnKt).get_lambda$449701818_vnilhh_k$ = function () {
    return this.lambda$449701818__1;
  };
  var ComposableSingletons$GetInTouchColumnKt_instance;
  function ComposableSingletons$GetInTouchColumnKt_getInstance() {
    if (ComposableSingletons$GetInTouchColumnKt_instance == null)
      new ComposableSingletons$GetInTouchColumnKt();
    return ComposableSingletons$GetInTouchColumnKt_instance;
  }
  function GetInTouchColumn$lambda$lambda($modifier) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fontWeight(fontSize($modifier._v, get_cssRem(2)), Companion_getInstance_11().get_Black_i7mvue_k$());
        SpanText('GET IN TOUCH', tmp_0, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GetInTouchColumn$lambda($modifier) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_modifier = fillMaxWidth($modifier._v);
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Start_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1164440315, true, GetInTouchColumn$lambda$lambda($modifier), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Start$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp3_modifier = padding_2(fillMaxWidth(displayUntil($modifier._v, Breakpoint_MD_getInstance())), get_cssRem(1), VOID, get_cssRem(3));
        var tmp4_horizontalAlignment = Start_getInstance_0();
        var tmp5_verticalArrangement = Center_getInstance();
        Column(tmp3_modifier, tmp5_verticalArrangement, tmp4_horizontalAlignment, null, ComposableSingletons$GetInTouchColumnKt_getInstance().lambda$301228689__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
        var tmp6_modifier = padding_2(width(displayIfAtLeast($modifier._v, Breakpoint_MD_getInstance()), get_cssRem(52)), get_cssRem(1), VOID, get_cssRem(3));
        var tmp7_horizontalAlignment = Start_getInstance_0();
        var tmp8_verticalArrangement = Center_getInstance();
        Column(tmp6_modifier, tmp8_verticalArrangement, tmp7_horizontalAlignment, null, ComposableSingletons$GetInTouchColumnKt_getInstance().lambda$449701818__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function GetInTouchColumn$lambda_0($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      GetInTouchColumn($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function TimeDisplay(modifier, timeZone, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1612870222);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(timeZone) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(getFormattedTime(timeZone));
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var currentTime$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1633490746);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it_0 = tmp2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = TimeDisplay$slambda_0(timeZone, currentTime$delegate, null);
        tmp2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp1_group, $composer_0, 6);
      var tmp_3 = TimeDisplay$lambda(currentTime$delegate);
      var tmp_4 = width(toModifier(get_FooterTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()).then_mmfvo6_k$(modifier_0._v), get_cssRem(5));
      // Inline function 'org.jetbrains.compose.web.css.Companion.End' call
      Companion_getInstance_12();
      // Inline function 'org.jetbrains.compose.web.css.AlignContent' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_5 = alignContent(tmp_4, 'end');
      var tmp_6;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_6 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_6 = Colors_getInstance().get_LightGray_i1h2r4_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_7 = color(tmp_5, tmp_6);
      SpanText(tmp_3, tmp_7, null, null, $composer_0, 0, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(TimeDisplay$lambda_1(modifier_0, timeZone, $changed, $default));
    }
  }
  function getFormattedTime(timeZone) {
    var options = {timeZone: timeZone, hour: '2-digit', minute: '2-digit', hour12: true};
    return (new Date()).toLocaleTimeString('en-US', options);
  }
  function TimeDisplay$lambda($currentTime$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentTime', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentTime$delegate.get_value_j01efc_k$();
  }
  function TimeDisplay$lambda_0($currentTime$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('currentTime', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $currentTime$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function TimeDisplay$slambda($timeZone, $currentTime$delegate, resultContinuation) {
    this.$timeZone_1 = $timeZone;
    this.$currentTime$delegate_1 = $currentTime$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TimeDisplay$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(TimeDisplay$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(TimeDisplay$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            TimeDisplay$lambda_0(this.$currentTime$delegate_1, getFormattedTime(this.$timeZone_1));
            this.set_state_rjd8d0_k$(2);
            Companion_getInstance_13();
            suspendResult = delay(toDuration(1, DurationUnit_SECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(TimeDisplay$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new TimeDisplay$slambda(this.$timeZone_1, this.$currentTime$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(TimeDisplay$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function TimeDisplay$slambda_0($timeZone, $currentTime$delegate, resultContinuation) {
    var i = new TimeDisplay$slambda($timeZone, $currentTime$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function TimeDisplay$lambda_1($modifier, $timeZone, $$changed, $$default) {
    return function ($composer, $force) {
      TimeDisplay($modifier._v, $timeZone, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_FooterStyle() {
    _init_properties_FooterStyle_kt__fkp99g();
    return FooterStyle;
  }
  var FooterStyle;
  function get_FooterTextStyle() {
    _init_properties_FooterStyle_kt__fkp99g();
    return FooterTextStyle;
  }
  var FooterTextStyle;
  function get_FooterLocationStyle() {
    _init_properties_FooterStyle_kt__fkp99g();
    return FooterLocationStyle;
  }
  var FooterLocationStyle;
  function get_FooterDescriptionStyle() {
    _init_properties_FooterStyle_kt__fkp99g();
    return FooterDescriptionStyle;
  }
  var FooterDescriptionStyle;
  function FooterStyle$lambda($this$CssStyle) {
    _init_properties_FooterStyle_kt__fkp99g();
    $this$CssStyle.base_y8uu8g_k$(FooterStyle$lambda$lambda($this$CssStyle));
    return Unit_getInstance();
  }
  function FooterStyle$lambda$lambda$lambda($this_CssStyle) {
    return function ($this$styleModifier) {
      backgroundImage($this$styleModifier, linearGradient(toSitePalette($this_CssStyle.get_colorMode_trbg8z_k$()).get_subHeadLine_h6dtkb_k$(), toSitePalette($this_CssStyle.get_colorMode_trbg8z_k$()).get_nearBackground_c1s3l_k$(), Direction_ToBottom_getInstance(), Companion_getInstance_14().get_DisplayP3_pa2gtg_k$()));
      return Unit_getInstance();
    };
  }
  function FooterStyle$lambda$lambda($this_CssStyle) {
    return function () {
      var tmp0_$receiver = Companion_getInstance_3();
      var tmp1_top = get_cssRem(5);
      var tmp2_bottom = get_cssRem(2);
      var tmp3_leftRight = get_percent(10);
      var tmp = padding_2(tmp0_$receiver, tmp1_top, tmp3_leftRight, tmp2_bottom);
      return styleModifier(tmp, FooterStyle$lambda$lambda$lambda($this_CssStyle));
    };
  }
  function FooterTextStyle$lambda($this$CssStyle) {
    _init_properties_FooterStyle_kt__fkp99g();
    $this$CssStyle.base_y8uu8g_k$(FooterTextStyle$lambda$lambda($this$CssStyle));
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, FooterTextStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, FooterTextStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, FooterTextStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, FooterTextStyle$lambda$lambda_3);
    var tmp_3 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, FooterTextStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function FooterTextStyle$lambda$lambda($this_CssStyle) {
    return function () {
      return color(Companion_getInstance_3(), toSitePalette($this_CssStyle.get_colorMode_trbg8z_k$()).get_discription_rmjmk1_k$());
    };
  }
  function FooterTextStyle$lambda$lambda_0() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function FooterTextStyle$lambda$lambda_1() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function FooterTextStyle$lambda$lambda_2() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function FooterTextStyle$lambda$lambda_3() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function FooterTextStyle$lambda$lambda_4() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function FooterLocationStyle$lambda($this$extendedBy) {
    _init_properties_FooterStyle_kt__fkp99g();
    var tmp = get_hover($this$extendedBy);
    $this$extendedBy.invoke_9o9x0o_k$(tmp, FooterLocationStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function FooterLocationStyle$lambda$lambda() {
    _init_properties_FooterStyle_kt__fkp99g();
    var tmp = cursor(textDecorationLine(Companion_getInstance_3(), Companion_getInstance_15().get_Underline_oo7egz_k$()), Companion_getInstance_16().get_Pointer_m64vg4_k$());
    return onClick(tmp, FooterLocationStyle$lambda$lambda$lambda);
  }
  function FooterLocationStyle$lambda$lambda$lambda(it) {
    _init_properties_FooterStyle_kt__fkp99g();
    return Unit_getInstance();
  }
  function FooterDescriptionStyle$lambda($this$CssStyle) {
    _init_properties_FooterStyle_kt__fkp99g();
    $this$CssStyle.base_y8uu8g_k$(FooterDescriptionStyle$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, FooterDescriptionStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, FooterDescriptionStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, FooterDescriptionStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, FooterDescriptionStyle$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, FooterDescriptionStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function FooterDescriptionStyle$lambda$lambda() {
    _init_properties_FooterStyle_kt__fkp99g();
    return textAlign(Companion_getInstance_3(), Companion_getInstance_4().get_Justify_84qi6f_k$());
  }
  function FooterDescriptionStyle$lambda$lambda_0() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function FooterDescriptionStyle$lambda$lambda_1() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function FooterDescriptionStyle$lambda$lambda_2() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function FooterDescriptionStyle$lambda$lambda_3() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function FooterDescriptionStyle$lambda$lambda_4() {
    _init_properties_FooterStyle_kt__fkp99g();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  var properties_initialized_FooterStyle_kt_nrt406;
  function _init_properties_FooterStyle_kt__fkp99g() {
    if (!properties_initialized_FooterStyle_kt_nrt406) {
      properties_initialized_FooterStyle_kt_nrt406 = true;
      FooterStyle = CssStyle(VOID, FooterStyle$lambda);
      FooterTextStyle = CssStyle(VOID, FooterTextStyle$lambda);
      var tmp = get_FooterTextStyle();
      FooterLocationStyle = extendedBy(tmp, VOID, FooterLocationStyle$lambda);
      FooterDescriptionStyle = CssStyle(VOID, FooterDescriptionStyle$lambda);
    }
  }
  function Footer(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(519669665);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      var tmp = id(fillMaxWidth(toModifier(get_FooterStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())), 'contact');
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1690539274, true, Footer$lambda(modifier_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_35(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Footer$lambda_0(modifier_0, $changed, $default));
    }
  }
  function Footer$lambda$lambda$lambda($this$padding) {
    $this$padding.bottom_k4p8ql_k$(get_cssRem(4));
    return Unit_getInstance();
  }
  function Footer$lambda$lambda($modifier) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        GetInTouchColumn(null, $composer_0, 0, 1);
        var tmp_0 = $modifier._v;
        $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Footer$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        FooterContactRow(padding_0(tmp_0, tmp0_group), $composer_0, 0, 0);
        DeveloperLocationInfoRow(null, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Footer$lambda($modifier) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fillMaxWidth($modifier._v);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(564391923, true, Footer$lambda$lambda($modifier), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_34(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Footer$lambda_0($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SocialLinksRow(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(465540585);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(breakpoint.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var bottomPadding;
      switch (breakpoint.get_ordinal_ip24qg_k$()) {
        case 0:
        case 1:
        case 2:
          bottomPadding = get_cssRem(3);
          break;
        default:
          bottomPadding = get_cssRem(3);
          break;
      }
      var spaceBetweenIcons;
      switch (breakpoint.get_ordinal_ip24qg_k$()) {
        case 0:
        case 1:
        case 2:
          spaceBetweenIcons = get_cssRem(1.5);
          break;
        default:
          spaceBetweenIcons = get_cssRem(2.5);
          break;
      }
      var tmp = Companion_getInstance_3();
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(bottomPadding);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = SocialLinksRow$lambda(bottomPadding);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = padding_0(tmp, tmp0_group);
      var tmp_3 = Arrangement_getInstance().spacedBy_9noyc7_k$(spaceBetweenIcons);
      var tmp_4 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(579587782, true, SocialLinksRow$lambda_0(breakpoint), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp_2, tmp_3, tmp_4, null, tmp0_0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SocialLinksRow$lambda_1(breakpoint, $changed));
    }
  }
  function SocialLinkButton(url, icon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-249936043);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(url) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(icon) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = toModifier(get_SocialLinkStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = color(tmp, tmp_0);
      var tmp_2;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_2 = Colors_getInstance().get_Transparent_cxh4g9_k$();
          break;
        case 1:
          tmp_2 = Colors_getInstance().get_Transparent_cxh4g9_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_3 = backgroundColor(tmp_1, tmp_2);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-122257543, true, SocialLinkButton$lambda(icon), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      LinkButton(url, tmp_3, null, tmp0, $composer_0, 3072 | 14 & $dirty, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SocialLinkButton$lambda_0(url, icon, $changed));
    }
  }
  function SocialLinksRow$lambda($bottomPadding) {
    return function ($this$padding) {
      $this$padding.top_1wurxj_k$(get_cssRem(1));
      $this$padding.bottom_k4p8ql_k$($bottomPadding);
      return Unit_getInstance();
    };
  }
  function SocialLinksRow$lambda$lambda($iconSize) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        FaLinkedin(null, $iconSize, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinksRow$lambda$lambda_0($iconSize) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        FaGithub(null, $iconSize, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinksRow$lambda$lambda_1($iconSize) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        FaXTwitter(null, $iconSize, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinksRow$lambda$lambda_2($iconSize) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        FaHackerrank(null, $iconSize, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinksRow$lambda$lambda_3($iconSize) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        FaMedium(null, $iconSize, $composer_0, 0, 1);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinksRow$lambda_0($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var iconSize;
        switch ($breakpoint.get_ordinal_ip24qg_k$()) {
          case 0:
          case 1:
          case 2:
            iconSize = IconSize_X3_getInstance();
            break;
          default:
            iconSize = IconSize_X3_getInstance();
            break;
        }
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1091527423, true, SocialLinksRow$lambda$lambda(iconSize), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        SocialLinkButton('https://www.linkedin.com/in/musaibshabir', tmp0, $composer_0, 54);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-1704823960, true, SocialLinksRow$lambda$lambda_0(iconSize), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        SocialLinkButton('https://github.com/MusaibShabir', tmp0_0, $composer_0, 54);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(-757657017, true, SocialLinksRow$lambda$lambda_1(iconSize), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_38(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp0_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        SocialLinkButton('https://x.com/musaib_shabir', tmp0_1, $composer_0, 54);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_2 = rememberComposableLambda(189509926, true, SocialLinksRow$lambda$lambda_2(iconSize), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_39(dispatchReceiver_2);
          $composer_4.updateRememberedValue_l1wh71_k$(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp0_2 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        sourceInformationMarkerEnd($composer_4);
        SocialLinkButton('https://www.hackerrank.com/profile/musaibshabir', tmp0_2, $composer_0, 54);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_3 = rememberComposableLambda(1136676869, true, SocialLinksRow$lambda$lambda_3(iconSize), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_5 = $composer_0;
        sourceInformationMarkerStart($composer_5, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_5.changed_ga7h3f_k$(dispatchReceiver_3);
        // Inline function 'kotlin.let' call
        var it_3 = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_3 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_3 = ComposableLambda$invoke$ref_40(dispatchReceiver_3);
          $composer_5.updateRememberedValue_l1wh71_k$(value_3);
          tmp_8 = value_3;
        } else {
          tmp_8 = it_3;
        }
        var tmp_9 = tmp_8;
        var tmp0_3 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_5);
        SocialLinkButton('https://medium.com/@musaib.shabir', tmp0_3, $composer_0, 54);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SocialLinksRow$lambda_1($breakpoint, $$changed) {
    return function ($composer, $force) {
      SocialLinksRow($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SocialLinkButton$lambda($icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $icon($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function SocialLinkButton$lambda_0($url, $icon, $$changed) {
    return function ($composer, $force) {
      SocialLinkButton($url, $icon, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_HeroSectionStyle() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return HeroSectionStyle;
  }
  var HeroSectionStyle;
  function get_HelloImStyle() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return HelloImStyle;
  }
  var HelloImStyle;
  function get_UserNameStyle() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return UserNameStyle;
  }
  var UserNameStyle;
  function get_UsersMessageStyle() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return UsersMessageStyle;
  }
  var UsersMessageStyle;
  function get_HeroContainerKeyFrames() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return HeroContainerKeyFrames;
  }
  var HeroContainerKeyFrames;
  function HeroSectionStyle$lambda($this$extendedBy) {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$extendedBy.invoke_xzuw0j_k$(tmp, HeroSectionStyle$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$extendedBy.invoke_xzuw0j_k$(tmp_0, HeroSectionStyle$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$extendedBy.invoke_xzuw0j_k$(tmp_1, HeroSectionStyle$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$extendedBy.invoke_xzuw0j_k$(tmp_2, HeroSectionStyle$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$extendedBy.invoke_xzuw0j_k$(tmp_3, HeroSectionStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function HeroSectionStyle$lambda$lambda() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return height(Companion_getInstance_3(), get_vh(85));
  }
  function HeroSectionStyle$lambda$lambda_0() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return height(Companion_getInstance_3(), get_vh(85));
  }
  function HeroSectionStyle$lambda$lambda_1() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return height(Companion_getInstance_3(), get_vh(100));
  }
  function HeroSectionStyle$lambda$lambda_2() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return height(Companion_getInstance_3(), get_vh(100));
  }
  function HeroSectionStyle$lambda$lambda_3() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return height(Companion_getInstance_3(), get_vh(100));
  }
  function HelloImStyle$lambda($this$CssStyle) {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, HelloImStyle$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, HelloImStyle$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, HelloImStyle$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, HelloImStyle$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, HelloImStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function HelloImStyle$lambda$lambda() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XXLarge_dt4n9q_k$());
  }
  function HelloImStyle$lambda$lambda_0() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XXLarge_dt4n9q_k$());
  }
  function HelloImStyle$lambda$lambda_1() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XLarge_697k5o_k$());
  }
  function HelloImStyle$lambda$lambda_2() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize(Companion_getInstance_3(), get_cssRem(2.5));
  }
  function HelloImStyle$lambda$lambda_3() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize(Companion_getInstance_3(), get_cssRem(2.5));
  }
  function UserNameStyle$lambda($this$CssStyle) {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    $this$CssStyle.base_y8uu8g_k$(UserNameStyle$lambda$lambda);
    var tmp = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, UserNameStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, UserNameStyle$lambda$lambda_1);
    return Unit_getInstance();
  }
  function UserNameStyle$lambda$lambda() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return textAlign(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(3)), Companion_getInstance_11().get_Bold_wnz5ke_k$()), Companion_getInstance_4().get_Start_ih4i6x_k$());
  }
  function UserNameStyle$lambda$lambda_0() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize(Companion_getInstance_3(), get_cssRem(4));
  }
  function UserNameStyle$lambda$lambda_1() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize(Companion_getInstance_3(), get_cssRem(4));
  }
  function UsersMessageStyle$lambda($this$CssStyle) {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, UsersMessageStyle$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, UsersMessageStyle$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, UsersMessageStyle$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, UsersMessageStyle$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, UsersMessageStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function UsersMessageStyle$lambda$lambda() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function UsersMessageStyle$lambda$lambda_0() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function UsersMessageStyle$lambda$lambda_1() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function UsersMessageStyle$lambda$lambda_2() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XXLarge_dt4n9q_k$());
  }
  function UsersMessageStyle$lambda$lambda_3() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XXLarge_dt4n9q_k$());
  }
  function HeroContainerKeyFrames$lambda($this$Keyframes) {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    var tmp = get_percent(0);
    $this$Keyframes.invoke_u48aa2_k$(tmp, HeroContainerKeyFrames$lambda$lambda);
    var tmp_0 = get_percent(100);
    $this$Keyframes.invoke_u48aa2_k$(tmp_0, HeroContainerKeyFrames$lambda$lambda_0);
    return Unit_getInstance();
  }
  function HeroContainerKeyFrames$lambda$lambda() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return scale(opacity(margin(Companion_getInstance_3(), VOID, VOID, VOID, get_percent(-30)), 0), 1);
  }
  function HeroContainerKeyFrames$lambda$lambda_0() {
    _init_properties_HomeSectionStyle_kt__l1e1hx();
    return scale(opacity(margin(Companion_getInstance_3(), VOID, VOID, VOID, get_px(0)), 1), 1.0);
  }
  var properties_initialized_HomeSectionStyle_kt_rac2vn;
  function _init_properties_HomeSectionStyle_kt__l1e1hx() {
    if (!properties_initialized_HomeSectionStyle_kt_rac2vn) {
      properties_initialized_HomeSectionStyle_kt_rac2vn = true;
      var tmp = get_SectionContainerStyle();
      HeroSectionStyle = extendedBy(tmp, VOID, HeroSectionStyle$lambda);
      HelloImStyle = CssStyle(VOID, HelloImStyle$lambda);
      UserNameStyle = CssStyle(VOID, UserNameStyle$lambda);
      UsersMessageStyle = CssStyle(VOID, UsersMessageStyle$lambda);
      HeroContainerKeyFrames = new Keyframes(HeroContainerKeyFrames$lambda);
    }
  }
  function Home(currentPalette, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(648791486);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(currentPalette) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = id(fillMaxWidth(toModifier(get_HeroSectionStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())), 'home');
      var tmp_0 = SpaceBetween_getInstance();
      var tmp_1 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(335502081, true, Home$lambda(currentPalette), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Home$lambda_0(currentPalette, $changed));
    }
  }
  function Home$lambda$lambda$lambda$lambda($ctx) {
    return function (it) {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$('https://drive.google.com/file/d/11M1RPYv3xNdwc88zEVvHVPVSrb5G9Fna/view?usp=drive_link');
      return Unit_getInstance();
    };
  }
  function Home$lambda$lambda$lambda$lambda_0($currentPalette) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = color(Companion_getInstance_3(), $currentPalette.get_buttonText_e8s7aw_k$());
        SpanText('Resume', tmp_0, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Home$lambda$lambda$lambda($currentPalette, $ctx) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_size = Companion_getInstance_10().get_LG_knton0_k$();
        var tmp1_modifier = background(toModifier(get_MainButtonStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $currentPalette.get_buttonBackground_ox9et3_k$(), []);
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($ctx);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Home$lambda$lambda$lambda$lambda($ctx);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1073832555, true, Home$lambda$lambda$lambda$lambda_0($currentPalette), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp0_group, tmp1_modifier, null, null, false, tmp0_size, null, null, null, tmp0, $composer_0, 805306368 | com_varabyte_kobweb_silk_components_forms_ButtonSize$stableprop_getter() << 15, 476);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Home$lambda$lambda($currentPalette) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fontWeight(toModifier(get_HelloImStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), Companion_getInstance_11().get_Lighter_vm6n22_k$());
        SpanText("Hello I'm", tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1 = toModifier(get_UserNameStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        SpanText('Musaib Shabir', tmp_1, null, null, $composer_0, 6, 12);
        var tmp_2 = color(toModifier(get_UsersMessageStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $currentPalette.get_subHeadLine_h6dtkb_k$());
        SpanText('A Professional Kotlin & Android Developer', tmp_2, null, null, $composer_0, 6, 12);
        var ctx = rememberPageContext($composer_0, 0);
        var breakpoint = rememberBreakpoint($composer_0, 0);
        SocialLinksRow(breakpoint, $composer_0, 0);
        var tmp0_modifier = fillMaxWidth(Companion_getInstance_3());
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Arrangement_getInstance().spacedBy_9noyc7_k$(get_cssRem(2));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-167161221, true, Home$lambda$lambda$lambda($currentPalette, ctx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_44(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Home$lambda($currentPalette) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fillMaxHeight(Companion_getInstance_3());
        var tmp_1 = get_HeroContainerKeyFrames();
        var tmp_2 = get_s(1.5);
        // Inline function 'org.jetbrains.compose.web.css.Companion.cubicBezier' call
        Companion_getInstance_17();
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = 'cubic-bezier(' + 0.4 + ', ' + 0.0 + ', ' + 1.0 + ', ' + 1.0 + ')';
        var tmp0_modifier = animation(tmp_0, [toAnimation(tmp_1, tmp_2, tmp_3, null, null, null, null, null, $composer_0, com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter(), 124)]);
        var tmp1_horizontalAlignment = Start_getInstance_0();
        var tmp2_verticalArrangement = Center_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-934910472, true, Home$lambda$lambda($currentPalette), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp0_modifier, tmp2_verticalArrangement, tmp1_horizontalAlignment, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Home$lambda_0($currentPalette, $$changed) {
    return function ($composer, $force) {
      Home($currentPalette, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorModeButton($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(503552663);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var colorMode$delegate = Companion_getInstance_1().get_currentState_dmzs7c_k$($composer_0, 6);
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ColorModeButton$lambda_1(colorMode$delegate);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(153488240, true, ColorModeButton$lambda_2(colorMode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_47(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      IconButton(tmp0_group, tmp0_0, $composer_0, 48);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ColorModeButton$lambda_3($changed));
    }
  }
  function ColorModeButton$lambda($colorMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $colorMode$delegate.get_value_j01efc_k$();
  }
  function ColorModeButton$lambda_0($colorMode$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $colorMode$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorModeButton$lambda_1($colorMode$delegate) {
    return function () {
      ColorModeButton$lambda_0($colorMode$delegate, ColorModeButton$lambda($colorMode$delegate).get_opposite_ywslzk_k$());
      return Unit_getInstance();
    };
  }
  function ColorModeButton$lambda_2($colorMode$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0;
        if (ColorModeButton$lambda($colorMode$delegate).get_isLight_zemp0j_k$()) {
          $composer_0.startReplaceGroup_5hh8aj_k$(1473311642);
          MoonIcon(null, $composer_0, 0, 1);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(1473312153);
          SunIcon(null, $composer_0, 0, 1);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ColorModeButton$lambda_3($$changed) {
    return function ($composer, $force) {
      ColorModeButton($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CloseButton(onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(890682875);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      IconButton(onClick, ComposableSingletons$CloseButtonKt_getInstance().lambda$_1371379646_8dycz5__1, $composer_0, 48 | 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CloseButton$lambda(onClick, $changed));
    }
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CloseButtonKt$lambda$_1371379646$lambda_839wp0($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      CloseIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CloseButtonKt() {
    ComposableSingletons$CloseButtonKt_instance = this;
    var tmp = this;
    tmp.lambda$_1371379646_8dycz5__1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-1371379646, false, ComposableSingletons$CloseButtonKt$lambda$_1371379646$lambda_839wp0));
  }
  protoOf(ComposableSingletons$CloseButtonKt).get_lambda$_1371379646_apzn9j_k$ = function () {
    return this.lambda$_1371379646_8dycz5__1;
  };
  var ComposableSingletons$CloseButtonKt_instance;
  function ComposableSingletons$CloseButtonKt_getInstance() {
    if (ComposableSingletons$CloseButtonKt_instance == null)
      new ComposableSingletons$CloseButtonKt();
    return ComposableSingletons$CloseButtonKt_instance;
  }
  function CloseButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      CloseButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HamburgerButton(onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1527313709);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      IconButton(onClick, ComposableSingletons$HumburgerButtonKt_getInstance().lambda$166029428__1, $composer_0, 48 | 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HamburgerButton$lambda(onClick, $changed));
    }
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$HumburgerButtonKt$lambda$166029428$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      HamburgerIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HumburgerButtonKt() {
    ComposableSingletons$HumburgerButtonKt_instance = this;
    var tmp = this;
    tmp.lambda$166029428__1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(166029428, false, ComposableSingletons$HumburgerButtonKt$lambda$166029428$lambda));
  }
  protoOf(ComposableSingletons$HumburgerButtonKt).get_lambda$166029428_7cois1_k$ = function () {
    return this.lambda$166029428__1;
  };
  var ComposableSingletons$HumburgerButtonKt_instance;
  function ComposableSingletons$HumburgerButtonKt_getInstance() {
    if (ComposableSingletons$HumburgerButtonKt_instance == null)
      new ComposableSingletons$HumburgerButtonKt();
    return ComposableSingletons$HumburgerButtonKt_instance;
  }
  function HamburgerButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      HamburgerButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MenuItems(activeSection, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-955985878);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(activeSection) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      NavLink('#home', 'Home', activeSection === 'home', $composer_0, 54);
      NavLink('#about', 'About', activeSection === 'about', $composer_0, 54);
      NavLink('#projects', 'Projects', activeSection === 'projects', $composer_0, 54);
      NavLink('#contact', 'Contact', activeSection === 'contact', $composer_0, 54);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MenuItems$lambda(activeSection, $changed));
    }
  }
  function MenuItems$lambda($activeSection, $$changed) {
    return function ($composer, $force) {
      MenuItems($activeSection, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavLink(path, text, isActive, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1729619291);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isActive) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_variant = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      var tmp = toModifier(get_MenuStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      $composer_0.startReplaceGroup_5hh8aj_k$(-11787286);
      var tmp0_group = isActive ? color(Companion_getInstance_3(), toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6)).get_subHeadLine_h6dtkb_k$()) : Companion_getInstance_3();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp1_modifier = tmp.then_mmfvo6_k$(tmp0_group);
      Link(path, text, tmp1_modifier, tmp0_variant, null, null, null, null, $composer_0, 14 & $dirty | 112 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 240);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavLink$lambda(path, text, isActive, $changed));
    }
  }
  function NavLink$lambda($path, $text, $isActive, $$changed) {
    return function ($composer, $force) {
      NavLink($path, $text, $isActive, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SideMenu(menuState, close, onAnimationEnd, activeSection, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2104794677);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(menuState.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(close) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onAnimationEnd) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(activeSection) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = setVariable_0(Companion_getInstance_3(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = SideMenu$lambda(close);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = onClick(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(880148959, true, SideMenu$lambda_0(menuState, onAnimationEnd, close, activeSection), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Overlay(tmp_2, null, null, null, tmp0_0, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SideMenu$lambda_1(menuState, close, onAnimationEnd, activeSection, $changed));
    }
  }
  function SideMenu$lambda($close) {
    return function (it) {
      $close();
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda$lambda(it) {
    it.stopPropagation_5qf8uy_k$();
    return Unit_getInstance();
  }
  function SideMenu$lambda$lambda_0($onAnimationEnd) {
    return function (it) {
      $onAnimationEnd();
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda$lambda$lambda($close) {
    return function () {
      $close();
      return Unit_getInstance();
    };
  }
  function SideMenu$lambda$lambda$lambda_0($activeSection) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        MenuItems($activeSection, $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$lambda$lambda_1($close, $activeSection) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($close);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = SideMenu$lambda$lambda$lambda($close);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        CloseButton(tmp0_group, $composer_0, 0);
        var tmp_2 = fontSize(gap_0(padding_1(Companion_getInstance_3(), VOID, get_cssRem(0.75)), get_cssRem(1.5)), get_cssRem(1.4));
        var tmp_3 = Start_getInstance_0();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1961826204, true, SideMenu$lambda$lambda$lambda_0($activeSection), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_50(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_2, null, tmp_3, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 10);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$lambda_0($menuState, $onAnimationEnd, $close, $activeSection) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Overlay) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startMovableGroup_clfloq_k$(-285406142, $menuState);
        var tmp_1 = $this$Overlay.align_s6rwef_k$(toModifier(get_SideMenuStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), CenterStart_getInstance());
        var tmp_2 = get_SideMenuSlideInAnim();
        var tmp_3 = get_ms(200);
        var tmp_4;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
          Companion_getInstance_17();
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = 'ease-out';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
          Companion_getInstance_17();
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = 'ease-in';
        }
        var tmp_5 = tmp_4;
        var tmp_6;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
          Companion_getInstance_18();
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_6 = 'normal';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
          Companion_getInstance_18();
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_6 = 'reverse';
        }
        var tmp_7 = tmp_6;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
        Companion_getInstance_19();
        // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = 'forwards';
        var tmp_9 = borderRadius_0(animation(tmp_1, [toAnimation(tmp_2, tmp_3, tmp_5, null, null, tmp_7, tmp_8, null, $composer_0, com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter(), 76)]), VOID, get_cssRem(2));
        $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = SideMenu$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_10 = value;
        } else {
          tmp_10 = it;
        }
        var tmp_11 = tmp_10;
        var tmp0_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_12 = onClick(tmp_9, tmp0_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($onAnimationEnd);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_13;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = SideMenu$lambda$lambda_0($onAnimationEnd);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = it_0;
        }
        var tmp_14 = tmp_13;
        var tmp1_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_15 = onAnimationEnd(tmp_12, tmp1_group);
        var tmp_16 = Start_getInstance_0();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(985378875, true, SideMenu$lambda$lambda_1($close, $activeSection), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_17;
        if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_51(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_17 = value_1;
        } else {
          tmp_17 = it_1;
        }
        var tmp_18 = tmp_17;
        var tmp0 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_15, null, tmp_16, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 10);
        $composer_0.endMovableGroup_kd2hcs_k$();
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SideMenu$lambda_1($menuState, $close, $onAnimationEnd, $activeSection, $$changed) {
    return function ($composer, $force) {
      SideMenu($menuState, $close, $onAnimationEnd, $activeSection, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return NavHeaderStyle;
  }
  var NavHeaderStyle;
  function get_SideMenuStyle() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return SideMenuStyle;
  }
  var SideMenuStyle;
  function get_MenuStyle() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return MenuStyle;
  }
  var MenuStyle;
  function get_SideMenuSlideInAnim() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return SideMenuSlideInAnim;
  }
  var SideMenuSlideInAnim;
  function NavHeaderStyle$lambda($this$base) {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    var colorPalette = toPalette($this$base.get_colorMode_trbg8z_k$());
    var tmp = backgroundColor(padding(fillMaxWidth(Companion_getInstance_3()), get_cssRem(1)), get_background(colorPalette).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Sticky' call
    Companion_getInstance_8();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = backdropFilter(top(position(tmp, 'sticky'), get_percent(0)), [saturate(get_percent(180)), blur(get_px(8))]);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_20();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp_0, 'flex');
  }
  function SideMenuStyle$lambda($this$base) {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    var colorPalette = toPalette($this$base.get_colorMode_trbg8z_k$());
    return backdropFilter(backgroundColor(gap_0(padding_2(width(fillMaxHeight(Companion_getInstance_3()), clamp(get_cssRem(8), get_percent(33), get_cssRem(10))), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), get_background(colorPalette).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8)), [saturate(get_percent(180)), blur(get_px(8))]);
  }
  function MenuStyle$lambda($this$CssStyle) {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, MenuStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function MenuStyle$lambda$lambda() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return opacity(Companion_getInstance_3(), 0.5);
  }
  function SideMenuSlideInAnim$lambda($this$Keyframes) {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    $this$Keyframes.from_1urvt_k$(SideMenuSlideInAnim$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(SideMenuSlideInAnim$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SideMenuSlideInAnim$lambda$lambda() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return translateX(Companion_getInstance_3(), get_percent(-100));
  }
  function SideMenuSlideInAnim$lambda$lambda_0() {
    _init_properties_NavHeaderStyles_kt__xgjxk0();
    return Companion_getInstance_3();
  }
  var properties_initialized_NavHeaderStyles_kt_5fawxu;
  function _init_properties_NavHeaderStyles_kt__xgjxk0() {
    if (!properties_initialized_NavHeaderStyles_kt_5fawxu) {
      properties_initialized_NavHeaderStyles_kt_5fawxu = true;
      var tmp = Companion_getInstance_6();
      NavHeaderStyle = base(tmp, VOID, NavHeaderStyle$lambda);
      var tmp_0 = Companion_getInstance_6();
      SideMenuStyle = base(tmp_0, VOID, SideMenuStyle$lambda);
      MenuStyle = CssStyle(VOID, MenuStyle$lambda);
      SideMenuSlideInAnim = new Keyframes(SideMenuSlideInAnim$lambda);
    }
  }
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  function values_0() {
    return [SideMenuState_CLOSED_getInstance(), SideMenuState_OPEN_getInstance(), SideMenuState_CLOSING_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'CLOSED':
        return SideMenuState_CLOSED_getInstance();
      case 'OPEN':
        return SideMenuState_OPEN_getInstance();
      case 'CLOSING':
        return SideMenuState_CLOSING_getInstance();
      default:
        SideMenuState_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SideMenuState_entriesInitialized;
  function SideMenuState_initEntries() {
    if (SideMenuState_entriesInitialized)
      return Unit_getInstance();
    SideMenuState_entriesInitialized = true;
    SideMenuState_CLOSED_instance = new SideMenuState('CLOSED', 0);
    SideMenuState_OPEN_instance = new SideMenuState('OPEN', 1);
    SideMenuState_CLOSING_instance = new SideMenuState('CLOSING', 2);
  }
  var $ENTRIES_0;
  function SideMenuState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SideMenuState).close_1keygo_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SideMenuState_CLOSED_getInstance();
        break;
      case 1:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      case 2:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function NavHeader($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(771548249);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf('home');
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var activeSection$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = NavHeader$lambda_1(activeSection$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      SideEffect(tmp1_group, $composer_0, 6);
      var tmp_3 = toModifier(get_NavHeaderStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_4 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1898848284, true, NavHeader$lambda_2(activeSection$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp_3, null, tmp_4, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(NavHeader$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$1282865494$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      ColorModeButton($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.lambda$1282865494__1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(1282865494, false, ComposableSingletons$NavHeaderKt$lambda$1282865494$lambda));
  }
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda$1282865494_szry2e_k$ = function () {
    return this.lambda$1282865494__1;
  };
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function NavHeader$lambda($activeSection$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeSection', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeSection$delegate.get_value_j01efc_k$();
  }
  function NavHeader$lambda_0($activeSection$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeSection', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeSection$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function NavHeader$lambda$lambda($activeSection$delegate) {
    return function (it) {
      var sections = listOf(['home', 'about', 'projects', 'contact']);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = sections.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var element_0 = document.getElementById(element);
        if (!(element_0 == null)) {
          var rect = element_0.getBoundingClientRect();
          if (rect.top <= (window.innerHeight / 2 | 0) && rect.bottom >= (window.innerHeight / 2 | 0)) {
            NavHeader$lambda_0($activeSection$delegate, element);
          }
        }
      }
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda_1($activeSection$delegate) {
    return function () {
      var tmp = window;
      tmp.onscroll = NavHeader$lambda$lambda($activeSection$delegate);
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda_0($activeSection$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        MenuItems(NavHeader$lambda($activeSection$delegate), $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function invoke$lambda($menuState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuState$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($menuState$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuState$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function NavHeader$lambda$lambda$lambda($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda$lambda_0($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, invoke$lambda($menuState$delegate).close_1keygo_k$());
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda$lambda_1($menuState$delegate) {
    return function () {
      var tmp;
      if (invoke$lambda($menuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        invoke$lambda_0($menuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda$lambda_1($activeSection$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var menuState$delegate = tmp0_group;
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = NavHeader$lambda$lambda$lambda(menuState$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        HamburgerButton(tmp1_group, $composer_0, 6);
        $composer_0.startReplaceGroup_5hh8aj_k$(-94304740);
        if (!invoke$lambda(menuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
          var tmp0_menuState = invoke$lambda(menuState$delegate);
          var tmp1_activeSection = NavHeader$lambda($activeSection$delegate);
          $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_1 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_4;
          if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value_1 = NavHeader$lambda$lambda$lambda_0(menuState$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_2 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_6;
          if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value_2 = NavHeader$lambda$lambda$lambda_1(menuState$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_2);
            tmp_6 = value_2;
          } else {
            tmp_6 = it_2;
          }
          var tmp_7 = tmp_6;
          var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          SideMenu(tmp0_menuState, tmp2_group, tmp3_group, tmp1_activeSection, $composer_0, 432);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        ColorModeButton($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavHeader$lambda_2($activeSection$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_modifier = displayIfAtLeast(gap_0(fillMaxWidth(Companion_getInstance_3()), get_cssRem(1.5)), Breakpoint_MD_getInstance());
        var tmp1_verticalAlignment = CenterVertically_getInstance();
        var tmp2_horizontalArrangement = Center_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1769684639, true, NavHeader$lambda$lambda_0($activeSection$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_54(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp0_modifier, tmp2_horizontalArrangement, tmp1_verticalAlignment, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp3_modifier = displayIfAtLeast(gap_0(Companion_getInstance_3(), get_cssRem(1.5)), Breakpoint_MD_getInstance());
        var tmp4_verticalAlignment = CenterVertically_getInstance();
        var tmp5_horizontalArrangement = End_getInstance();
        Row(tmp3_modifier, tmp5_horizontalArrangement, tmp4_verticalAlignment, null, ComposableSingletons$NavHeaderKt_getInstance().lambda$1282865494__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp_2 = displayUntil(gap_0(fontSize(fillMaxWidth(Companion_getInstance_3()), get_cssRem(1.5)), get_cssRem(1)), Breakpoint_MD_getInstance());
        var tmp_3 = SpaceBetween_getInstance();
        var tmp_4 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(808839511, true, NavHeader$lambda$lambda_1($activeSection$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_55(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Row(tmp_2, tmp_3, tmp_4, null, tmp0_0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavHeader$lambda_3($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SideMenuState_CLOSED_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSED_instance;
  }
  function SideMenuState_OPEN_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_OPEN_instance;
  }
  function SideMenuState_CLOSING_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSING_instance;
  }
  function AppearanceAwareImage(src, modifier, width, height, alt, ref, dyanmicColor, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var ref_0 = {_v: ref};
    var dyanmicColor_0 = {_v: dyanmicColor};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1787542819);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(width_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(height_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alt_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ((($changed & 262144) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(dyanmicColor_0._v) ? 1048576 : 524288);
    if (!(($dirty & 599187) === 599186) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 4) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 32) === 0)) {
        ref_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        dyanmicColor_0._v = true;
      }
      var tmp;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = true;
          break;
        case 1:
          tmp = false;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var isLight = tmp;
      var tmp_0 = modifier_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(-158252294);
      var tmp_1;
      if (dyanmicColor_0._v) {
        var tmp_2 = Companion_getInstance_3();
        $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_jpyyrz_k$(isLight);
        // Inline function 'kotlin.let' call
        var it = tmp0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = AppearanceAwareImage$lambda(isLight);
          tmp0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_1 = styleModifier(tmp_2, tmp0_group);
      } else {
        tmp_1 = Companion_getInstance_3();
      }
      var tmp1_group = tmp_1;
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_5 = tmp_0.then_mmfvo6_k$(tmp1_group);
      Image(src, tmp_5, null, width_0._v, height_0._v, alt_0._v, ref_0._v, $composer_0, 14 & $dirty | 7168 & $dirty << 3 | 57344 & $dirty << 3 | 458752 & $dirty << 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 18 | 3670016 & $dirty << 3, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(AppearanceAwareImage$lambda_0(src, modifier_0, width_0, height_0, alt_0, ref_0, dyanmicColor_0, $changed, $default));
    }
  }
  function AppearanceAwareImage$lambda$lambda($isLight) {
    return function ($this$filter) {
      var tmp;
      if ($isLight) {
        $this$filter.invert_j1rfj9_k$(1);
        tmp = Unit_getInstance();
      } else {
        $this$filter.invert_j1rfj9_k$(0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$lambda($isLight) {
    return function ($this$styleModifier) {
      filter($this$styleModifier, AppearanceAwareImage$lambda$lambda($isLight));
      return Unit_getInstance();
    };
  }
  function AppearanceAwareImage$lambda_0($src, $modifier, $width, $height, $alt, $ref, $dyanmicColor, $$changed, $$default) {
    return function ($composer, $force) {
      AppearanceAwareImage($src, $modifier._v, $width._v, $height._v, $alt._v, $ref._v, $dyanmicColor._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function getAllProjects() {
    return listOf([new Pair('images/Projects/found_it.png', 'https://github.com/MusaibShabir/Found_It'), new Pair('images/Projects/ralith_milith.png', 'https://github.com/Tajamul21/Ralith-Milith'), new Pair('images/Projects/portfolio.png', 'https://github.com/MusaibShabir/Portfolio')]);
  }
  function RoundedImage(modifier, src, navigateTo, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var navigateTo_0 = {_v: navigateTo};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1099186494);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(navigateTo_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 4) === 0)) {
        navigateTo_0._v = null;
      }
      var ctx = rememberPageContext($composer_0, 0);
      var tmp = cursor(borderRadius(padding(fillMaxSize(Companion_getInstance_3()), get_px(5)), get_px(10)).then_mmfvo6_k$(modifier_0._v), Companion_getInstance_16().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(-1633490746);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 896) === 256 | $composer_0.changedInstance_s1wkiy_k$(ctx));
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = RoundedImage$lambda(navigateTo_0, ctx);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = onClick(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1712992136, true, RoundedImage$lambda_0(src), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_58(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_2, null, null, tmp0_0, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(RoundedImage$lambda_1(modifier_0, src, navigateTo_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RoundedImageKt$lambda$1234291250$lambda($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_$receiver = $this$Box.align_s6rwef_k$(size(Companion_getInstance_3(), get_px(22)), BottomEnd_getInstance());
      var tmp1_bottom = get_px(10);
      var tmp2_right = get_px(10);
      var tmp = margin(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom);
      Image('images/Skills/github_dark.svg', tmp, null, null, null, null, null, $composer_0, 6, 124);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RoundedImageKt() {
    ComposableSingletons$RoundedImageKt_instance = this;
    var tmp = this;
    tmp.lambda$1234291250__1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(1234291250, false, ComposableSingletons$RoundedImageKt$lambda$1234291250$lambda));
  }
  protoOf(ComposableSingletons$RoundedImageKt).get_lambda$1234291250_xqt3l4_k$ = function () {
    return this.lambda$1234291250__1;
  };
  var ComposableSingletons$RoundedImageKt_instance;
  function ComposableSingletons$RoundedImageKt_getInstance() {
    if (ComposableSingletons$RoundedImageKt_instance == null)
      new ComposableSingletons$RoundedImageKt();
    return ComposableSingletons$RoundedImageKt_instance;
  }
  function RoundedImage$lambda($navigateTo, $ctx) {
    return function (it) {
      var tmp0_safe_receiver = $navigateTo._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(tmp0_safe_receiver);
      }
      return Unit_getInstance();
    };
  }
  function RoundedImage$lambda$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('background', 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.52%, rgba(0, 0, 0, 0.71) 100%)');
    return Unit_getInstance();
  }
  function RoundedImage$lambda_0($src) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_modifier = borderRadius(fillMaxSize(Companion_getInstance_3()), get_px(10));
        Image($src, tmp0_modifier, null, null, null, null, null, $composer_0, 0, 124);
        var tmp_0 = borderRadius(fillMaxSize(Companion_getInstance_3()), get_px(10));
        $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = RoundedImage$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = styleModifier(tmp_0, tmp0_group);
        Box(tmp_3, null, null, ComposableSingletons$RoundedImageKt_getInstance().lambda$1234291250__1, $composer_0, 3072, 6);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function RoundedImage$lambda_1($modifier, $src, $navigateTo, $$changed, $$default) {
    return function ($composer, $force) {
      RoundedImage($modifier._v, $src, $navigateTo._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_ProjectsStyle() {
    _init_properties_ProjectsStyle_kt__ikol7p();
    return ProjectsStyle;
  }
  var ProjectsStyle;
  function ProjectsStyle$lambda($this$extendedBy) {
    _init_properties_ProjectsStyle_kt__ikol7p();
    return Unit_getInstance();
  }
  var properties_initialized_ProjectsStyle_kt_yqb3mh;
  function _init_properties_ProjectsStyle_kt__ikol7p() {
    if (!properties_initialized_ProjectsStyle_kt_yqb3mh) {
      properties_initialized_ProjectsStyle_kt_yqb3mh = true;
      var tmp = get_SectionContainerStyle();
      ProjectsStyle = extendedBy(tmp, VOID, ProjectsStyle$lambda);
    }
  }
  function Projects($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1628688969);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = id(toModifier(get_AboutStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), 'projects');
      var tmp_0 = Center_getInstance();
      var tmp_1 = CenterHorizontally_getInstance();
      Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$ProjectsKt_getInstance().lambda$_948141728_ewogjg_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Projects$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda$_1063444690$lambda_g9i05o($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = Companion_getInstance_3();
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = margin(color(tmp, tmp_0), VOID, get_px(8));
      Link('https://github.com/MusaibShabir?tab=repositories', 'More on GitHub', tmp_1, null, null, null, null, null, $composer_0, 54, 248);
      FaUpRightFromSquare(null, null, $composer_0, 0, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda$1549996753$lambda($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = CenterVertically_getInstance();
      Row(null, null, tmp, null, ComposableSingletons$ProjectsKt_getInstance().lambda$_1063444690_b7qslh_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 11);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda$414310423$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var allProjects = getAllProjects();
      $composer_0.startReplaceGroup_5hh8aj_k$(-1279639818);
      // Inline function 'kotlin.repeat' call
      var times = allProjects.get_size_woubt6_k$();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var project = allProjects.get_c1px32_k$(index);
          RoundedImage(null, project.get_first_irdx8n_k$(), project.get_second_jf7fjx_k$(), $composer_0, 0, 1);
        }
         while (inductionVariable < times);
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp = padding_3(fillMaxSize(Companion_getInstance_3()), get_px(50));
      var tmp_0 = Center_getInstance_0();
      Box(tmp, tmp_0, null, ComposableSingletons$ProjectsKt_getInstance().lambda$1549996753__1, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda$_948141728$lambda_6zl2v3($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      SectionTitle('My Projects', $composer_0, 6);
      var tmp = textAlign(toModifier(get_SectionDiscriptionStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), Companion_getInstance_4().get_Center_3arb0i_k$());
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Gray_wo2eh8_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_LightGray_i1h2r4_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = color(tmp, tmp_0);
      SpanText('A showcase of my latest work, featuring innovative and functional applications built using modern technologies. ', tmp_1, null, null, $composer_0, 6, 12);
      var tmp_2 = numColumns(1, 2, 3);
      var tmp_3 = margin_1(fillMaxWidth(Companion_getInstance_3()), get_cssRem(3), VOID, get_cssRem(6));
      SimpleGrid(tmp_2, tmp_3, null, null, ComposableSingletons$ProjectsKt_getInstance().lambda$414310423__1, $composer_0, 24576 | com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter(), 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProjectsKt() {
    ComposableSingletons$ProjectsKt_instance = this;
    var tmp = this;
    tmp.lambda$_1063444690_b7qslh_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(-1063444690, false, ComposableSingletons$ProjectsKt$lambda$_1063444690$lambda_g9i05o));
    var tmp_0 = this;
    tmp_0.lambda$1549996753__1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(1549996753, false, ComposableSingletons$ProjectsKt$lambda$1549996753$lambda));
    var tmp_1 = this;
    tmp_1.lambda$414310423__1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(414310423, false, ComposableSingletons$ProjectsKt$lambda$414310423$lambda));
    var tmp_2 = this;
    tmp_2.lambda$_948141728_ewogjg_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(-948141728, false, ComposableSingletons$ProjectsKt$lambda$_948141728$lambda_6zl2v3));
  }
  protoOf(ComposableSingletons$ProjectsKt).get_lambda$_1063444690_b5d5tv_k$ = function () {
    return this.lambda$_1063444690_b7qslh_1;
  };
  protoOf(ComposableSingletons$ProjectsKt).get_lambda$1549996753_67d905_k$ = function () {
    return this.lambda$1549996753__1;
  };
  protoOf(ComposableSingletons$ProjectsKt).get_lambda$414310423_ptqixh_k$ = function () {
    return this.lambda$414310423__1;
  };
  protoOf(ComposableSingletons$ProjectsKt).get_lambda$_948141728_xmikny_k$ = function () {
    return this.lambda$_948141728_ewogjg_1;
  };
  var ComposableSingletons$ProjectsKt_instance;
  function ComposableSingletons$ProjectsKt_getInstance() {
    if (ComposableSingletons$ProjectsKt_instance == null)
      new ComposableSingletons$ProjectsKt();
    return ComposableSingletons$ProjectsKt_instance;
  }
  function Projects$lambda($$changed) {
    return function ($composer, $force) {
      Projects($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_SectionTitleStyle() {
    _init_properties_styles_kt__wiigwy();
    return SectionTitleStyle;
  }
  var SectionTitleStyle;
  function get_SectionDiscriptionStyle() {
    _init_properties_styles_kt__wiigwy();
    return SectionDiscriptionStyle;
  }
  var SectionDiscriptionStyle;
  function SectionTitleStyle$lambda($this$CssStyle) {
    _init_properties_styles_kt__wiigwy();
    $this$CssStyle.base_y8uu8g_k$(SectionTitleStyle$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SectionTitleStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SectionTitleStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SectionTitleStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function SectionTitleStyle$lambda$lambda() {
    _init_properties_styles_kt__wiigwy();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function SectionTitleStyle$lambda$lambda_0() {
    _init_properties_styles_kt__wiigwy();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function SectionTitleStyle$lambda$lambda_1() {
    _init_properties_styles_kt__wiigwy();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XLarge_697k5o_k$());
  }
  function SectionTitleStyle$lambda$lambda_2() {
    _init_properties_styles_kt__wiigwy();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XXLarge_dt4n9q_k$());
  }
  function SectionDiscriptionStyle$lambda($this$CssStyle) {
    _init_properties_styles_kt__wiigwy();
    $this$CssStyle.base_y8uu8g_k$(SectionDiscriptionStyle$lambda$lambda);
    var tmp = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SectionDiscriptionStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SectionDiscriptionStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SectionDiscriptionStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, SectionDiscriptionStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function SectionDiscriptionStyle$lambda$lambda() {
    _init_properties_styles_kt__wiigwy();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$()), get_cssRem(0.75));
  }
  function SectionDiscriptionStyle$lambda$lambda_0() {
    _init_properties_styles_kt__wiigwy();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$()), get_cssRem(0.75));
  }
  function SectionDiscriptionStyle$lambda$lambda_1() {
    _init_properties_styles_kt__wiigwy();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$()), get_cssRem(2));
  }
  function SectionDiscriptionStyle$lambda$lambda_2() {
    _init_properties_styles_kt__wiigwy();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$()), get_cssRem(2));
  }
  function SectionDiscriptionStyle$lambda$lambda_3() {
    _init_properties_styles_kt__wiigwy();
    return margin_0(fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$()), get_cssRem(2));
  }
  var properties_initialized_styles_kt_wvm9h8;
  function _init_properties_styles_kt__wiigwy() {
    if (!properties_initialized_styles_kt_wvm9h8) {
      properties_initialized_styles_kt_wvm9h8 = true;
      SectionTitleStyle = CssStyle(VOID, SectionTitleStyle$lambda);
      SectionDiscriptionStyle = CssStyle(VOID, SectionDiscriptionStyle$lambda);
    }
  }
  var musaib_components_styles_ButtonColors$stable;
  function ButtonColors$NormalButton$lambda($this$addVariant) {
    $this$addVariant.base_y8uu8g_k$(ButtonColors$NormalButton$lambda$lambda);
    var tmp = get_hover($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, ButtonColors$NormalButton$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ButtonColors$NormalButton$lambda$lambda() {
    return backgroundColor(Companion_getInstance_3(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function ButtonColors$NormalButton$lambda$lambda_0() {
    return backgroundColor(Companion_getInstance_3(), Colors_getInstance().get_White_ij46ow_k$().copyf$default_6pu18v_k$(23.0));
  }
  function ButtonColors() {
    ButtonColors_instance = this;
    var tmp = this;
    var tmp_0 = get_ButtonStyle();
    tmp.NormalButton_1 = addVariant(tmp_0, VOID, ButtonColors$NormalButton$lambda);
  }
  protoOf(ButtonColors).get_NormalButton_1q98iq_k$ = function () {
    return this.NormalButton_1;
  };
  var ButtonColors_instance;
  function ButtonColors_getInstance() {
    if (ButtonColors_instance == null)
      new ButtonColors();
    return ButtonColors_instance;
  }
  function musaib_components_styles_ButtonColors$stableprop_getter() {
    return musaib_components_styles_ButtonColors$stable;
  }
  var properties_initialized_ButtonColors_kt_f6dqd8;
  function _init_properties_ButtonColors_kt__3ay5sy() {
    if (!properties_initialized_ButtonColors_kt_f6dqd8) {
      properties_initialized_ButtonColors_kt_f6dqd8 = true;
      musaib_components_styles_ButtonColors$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter();
    }
  }
  function get_SkillTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return SkillTextStyle;
  }
  var SkillTextStyle;
  function get_SkillProficiencyTextStyle() {
    _init_properties_FontStyles_kt__hfl7yn();
    return SkillProficiencyTextStyle;
  }
  var SkillProficiencyTextStyle;
  function SkillTextStyle$lambda($this$CssStyle) {
    _init_properties_FontStyles_kt__hfl7yn();
    $this$CssStyle.base_y8uu8g_k$(SkillTextStyle$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SkillTextStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SkillTextStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SkillTextStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, SkillTextStyle$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, SkillTextStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function SkillTextStyle$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontWeight(Companion_getInstance_3(), Companion_getInstance_11().get_Medium_1fiba6_k$());
  }
  function SkillTextStyle$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function SkillTextStyle$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function SkillTextStyle$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function SkillTextStyle$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function SkillTextStyle$lambda$lambda_4() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Large_icy5ma_k$());
  }
  function SkillProficiencyTextStyle$lambda($this$CssStyle) {
    _init_properties_FontStyles_kt__hfl7yn();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SkillProficiencyTextStyle$lambda$lambda);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SkillProficiencyTextStyle$lambda$lambda_0);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SkillProficiencyTextStyle$lambda$lambda_1);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, SkillProficiencyTextStyle$lambda$lambda_2);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, SkillProficiencyTextStyle$lambda$lambda_3);
    return Unit_getInstance();
  }
  function SkillProficiencyTextStyle$lambda$lambda() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XSmall_6d9fo8_k$());
  }
  function SkillProficiencyTextStyle$lambda$lambda_0() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_XSmall_6d9fo8_k$());
  }
  function SkillProficiencyTextStyle$lambda$lambda_1() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Small_ih014u_k$());
  }
  function SkillProficiencyTextStyle$lambda$lambda_2() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  function SkillProficiencyTextStyle$lambda$lambda_3() {
    _init_properties_FontStyles_kt__hfl7yn();
    return fontSize_0(Companion_getInstance_3(), Companion_getInstance_9().get_Medium_1fiba6_k$());
  }
  var properties_initialized_FontStyles_kt_t7l7zn;
  function _init_properties_FontStyles_kt__hfl7yn() {
    if (!properties_initialized_FontStyles_kt_t7l7zn) {
      properties_initialized_FontStyles_kt_t7l7zn = true;
      SkillTextStyle = CssStyle(VOID, SkillTextStyle$lambda);
      SkillProficiencyTextStyle = CssStyle(VOID, SkillProficiencyTextStyle$lambda);
    }
  }
  function get_MainButtonStyle() {
    _init_properties_MainButtonStyle_kt__v6tbec();
    return MainButtonStyle;
  }
  var MainButtonStyle;
  function MainButtonStyle$lambda($this$CssStyle) {
    _init_properties_MainButtonStyle_kt__v6tbec();
    $this$CssStyle.base_y8uu8g_k$(MainButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, MainButtonStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MainButtonStyle$lambda$lambda() {
    _init_properties_MainButtonStyle_kt__v6tbec();
    return transition(padding_3(Companion_getInstance_3(), VOID, get_px(30)), Companion_getInstance_21().of$default_vdjnti_k$(Companion_getInstance_22().get_All_18jx7s_k$(), get_ms(500)));
  }
  function MainButtonStyle$lambda$lambda_0() {
    _init_properties_MainButtonStyle_kt__v6tbec();
    return padding_3(Companion_getInstance_3(), VOID, get_px(50));
  }
  var properties_initialized_MainButtonStyle_kt_v13356;
  function _init_properties_MainButtonStyle_kt__v6tbec() {
    if (!properties_initialized_MainButtonStyle_kt_v13356) {
      properties_initialized_MainButtonStyle_kt_v13356 = true;
      MainButtonStyle = CssStyle(VOID, MainButtonStyle$lambda);
    }
  }
  function get_SectionContainerStyle() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    return SectionContainerStyle;
  }
  var SectionContainerStyle;
  function SectionContainerStyle$lambda($this$CssStyle) {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    $this$CssStyle.base_y8uu8g_k$(SectionContainerStyle$lambda$lambda);
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, SectionContainerStyle$lambda$lambda_0);
    var tmp_0 = Breakpoint_SM_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_0, SectionContainerStyle$lambda$lambda_1);
    var tmp_1 = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_1, SectionContainerStyle$lambda$lambda_2);
    var tmp_2 = Breakpoint_LG_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_2, SectionContainerStyle$lambda$lambda_3);
    var tmp_3 = Breakpoint_XL_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp_3, SectionContainerStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function SectionContainerStyle$lambda$lambda() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    var tmp = Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
    // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
    // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = width_0(tmp, 'auto');
    // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
    // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
    // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return classNames(scrollMargin(maxWidth(height_0(tmp_0, 'auto'), get_cssRem(130)), get_px(100)), ['section-container']);
  }
  function SectionContainerStyle$lambda$lambda_0() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    return padding_3(Companion_getInstance_3(), VOID, get_px(16));
  }
  function SectionContainerStyle$lambda$lambda_1() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    return padding_3(Companion_getInstance_3(), VOID, get_px(28));
  }
  function SectionContainerStyle$lambda$lambda_2() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    return padding_3(Companion_getInstance_3(), VOID, get_px(48));
  }
  function SectionContainerStyle$lambda$lambda_3() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    return padding_3(Companion_getInstance_3(), VOID, get_px(94));
  }
  function SectionContainerStyle$lambda$lambda_4() {
    _init_properties_SectionContainerStyle_kt__uvuwar();
    return padding_3(Companion_getInstance_3(), VOID, get_px(134));
  }
  var properties_initialized_SectionContainerStyle_kt_e2banv;
  function _init_properties_SectionContainerStyle_kt__uvuwar() {
    if (!properties_initialized_SectionContainerStyle_kt_e2banv) {
      properties_initialized_SectionContainerStyle_kt_e2banv = true;
      SectionContainerStyle = CssStyle(VOID, SectionContainerStyle$lambda);
    }
  }
  function get_SocialLinkStyle() {
    _init_properties_SocialLinkButtonStyle_kt__cuxj6i();
    return SocialLinkStyle;
  }
  var SocialLinkStyle;
  function SocialLinkStyle$lambda($this$CssStyle) {
    _init_properties_SocialLinkButtonStyle_kt__cuxj6i();
    $this$CssStyle.base_y8uu8g_k$(SocialLinkStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, SocialLinkStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SocialLinkStyle$lambda$lambda() {
    _init_properties_SocialLinkButtonStyle_kt__cuxj6i();
    return transition(scale(Companion_getInstance_3(), 1), Companion_getInstance_21().of$default_vdjnti_k$(Companion_getInstance_22().get_All_18jx7s_k$(), get_ms(500)));
  }
  function SocialLinkStyle$lambda$lambda_0() {
    _init_properties_SocialLinkButtonStyle_kt__cuxj6i();
    return scale(Companion_getInstance_3(), 1.3);
  }
  var properties_initialized_SocialLinkButtonStyle_kt_soxcxk;
  function _init_properties_SocialLinkButtonStyle_kt__cuxj6i() {
    if (!properties_initialized_SocialLinkButtonStyle_kt_soxcxk) {
      properties_initialized_SocialLinkButtonStyle_kt_soxcxk = true;
      SocialLinkStyle = CssStyle(VOID, SocialLinkStyle$lambda);
    }
  }
  var musaib_components_utils_Res_Constants$stable;
  var musaib_components_utils_Res_Title$stable;
  var musaib_components_utils_Res_Images$stable;
  var musaib_components_utils_Res$stable;
  function Constants() {
    Constants_instance = this;
    this.GITHUB_URL_1 = 'https://github.com/MusaibShabir';
    this.LINKEDIN_URL_1 = 'https://www.linkedin.com/in/musaibshabir';
    this.TWITTER_URL_1 = 'https://x.com/musaib_shabir';
    this.HACKER_RANK_URL_1 = 'https://www.hackerrank.com/profile/musaibshabir';
    this.MEDIUM_URL_1 = 'https://medium.com/@musaib.shabir';
    this.MAIL_TO_1 = 'mailto:itzmusaibshabir@gmail.com';
    this.RESUME_URL_1 = 'https://drive.google.com/file/d/11M1RPYv3xNdwc88zEVvHVPVSrb5G9Fna/view?usp=drive_link';
    this.DEVELOPER_LOCATION_ON_MAP_1 = 'https://maps.app.goo.gl/bjR36bERzYbTsqkv6';
    this.DISCORD_URL_1 = 'https://discordapp.com/users/914566253312618527';
    this.WHATSAPP_URL_1 = 'https://wa.me/qr/YSOCVLJKQJMIN1';
    this.TELEGRAM_URL_1 = 'https://t.me/MusaibShabir';
    this.INSTAGRAM_URL_1 = 'https://www.instagram.com/musaib.shabir/';
    this.FOUNT_IT_URL_1 = 'https://github.com/MusaibShabir/Found_It';
    this.RALITH_MILITH_URL_1 = 'https://github.com/Tajamul21/Ralith-Milith';
    this.PORTFOLIO_URL_1 = 'https://github.com/MusaibShabir/Portfolio';
    this.GREETING_1 = "Hello I'm";
    this.NAME_1 = 'Musaib Shabir';
    this.SUB_HEADLINE_1 = 'A Professional Kotlin & Android Developer';
    this.RESUME_1 = 'Resume';
    this.EMAIL_1 = 'Email';
    this.ABOUT_ME_TEXT_1 = 'I am a Computer Science Engineering graduate with a strong passion for technology, problem-solving, and innovation. I specialize in modern Android development using Kotlin and Jetpack Compose, ensuring seamless and efficient user experiences. My interests extend to deep learning and artificial intelligence, where I explore advancements to build intelligent and scalable solutions. Beyond coding, I am fascinated by the cosmos and constantly seek to learn more about the universe, its mysteries, and the science behind it. I am always eager to explore new ideas and develop solutions that make a meaningful impact.';
    this.PROJECT_SECTION_TEXT_1 = 'A showcase of my latest work, featuring innovative and functional applications built using modern technologies. ';
    this.PROJECT_REPOSITORIES_URL_1 = 'https://github.com/MusaibShabir?tab=repositories';
    this.MORE_ON_GITHUB_1 = 'More on GitHub';
    this.COPYRIGHT_1 = 'Musaib Shabir';
    this.DEVELOPER_LOCATION_1 = 'Kashmir India';
    this.GET_IN_TOUCH_1 = 'GET IN TOUCH';
    this.GET_IN_TOUCH_DISCRIPTION_1 = "Feel free to reach out for collaboration, project inquiries, or simply to say hello. I'm always eager to connect with like-minded individuals who are passionate about technology and innovation. Whether you're seeking a dedicated developer to bring your ideas to life or wish to engage in discussions about the latest industry trends, don't hesitate to get in touch. Let's collaborate and create something exceptional together!\uD83D\uDE0A";
  }
  protoOf(Constants).get_GITHUB_URL_kptwn0_k$ = function () {
    return this.GITHUB_URL_1;
  };
  protoOf(Constants).get_LINKEDIN_URL_g9prkn_k$ = function () {
    return this.LINKEDIN_URL_1;
  };
  protoOf(Constants).get_TWITTER_URL_j9qsxm_k$ = function () {
    return this.TWITTER_URL_1;
  };
  protoOf(Constants).get_HACKER_RANK_URL_zhdrq4_k$ = function () {
    return this.HACKER_RANK_URL_1;
  };
  protoOf(Constants).get_MEDIUM_URL_tmawpa_k$ = function () {
    return this.MEDIUM_URL_1;
  };
  protoOf(Constants).get_MAIL_TO_qvrw2i_k$ = function () {
    return this.MAIL_TO_1;
  };
  protoOf(Constants).get_RESUME_URL_lcc8ca_k$ = function () {
    return this.RESUME_URL_1;
  };
  protoOf(Constants).get_DEVELOPER_LOCATION_ON_MAP_qkzotk_k$ = function () {
    return this.DEVELOPER_LOCATION_ON_MAP_1;
  };
  protoOf(Constants).get_DISCORD_URL_vywpn1_k$ = function () {
    return this.DISCORD_URL_1;
  };
  protoOf(Constants).get_WHATSAPP_URL_7kft05_k$ = function () {
    return this.WHATSAPP_URL_1;
  };
  protoOf(Constants).get_TELEGRAM_URL_t5monu_k$ = function () {
    return this.TELEGRAM_URL_1;
  };
  protoOf(Constants).get_INSTAGRAM_URL_qubi13_k$ = function () {
    return this.INSTAGRAM_URL_1;
  };
  protoOf(Constants).get_FOUNT_IT_URL_qsej2n_k$ = function () {
    return this.FOUNT_IT_URL_1;
  };
  protoOf(Constants).get_RALITH_MILITH_URL_jpiarx_k$ = function () {
    return this.RALITH_MILITH_URL_1;
  };
  protoOf(Constants).get_PORTFOLIO_URL_w2vvjl_k$ = function () {
    return this.PORTFOLIO_URL_1;
  };
  protoOf(Constants).get_GREETING_fgoeta_k$ = function () {
    return this.GREETING_1;
  };
  protoOf(Constants).get_NAME_wo5uj8_k$ = function () {
    return this.NAME_1;
  };
  protoOf(Constants).get_SUB_HEADLINE_5pk2w4_k$ = function () {
    return this.SUB_HEADLINE_1;
  };
  protoOf(Constants).get_RESUME_3atpo6_k$ = function () {
    return this.RESUME_1;
  };
  protoOf(Constants).get_EMAIL_i8psnn_k$ = function () {
    return this.EMAIL_1;
  };
  protoOf(Constants).get_ABOUT_ME_TEXT_chvvqx_k$ = function () {
    return this.ABOUT_ME_TEXT_1;
  };
  protoOf(Constants).get_PROJECT_SECTION_TEXT_c3od2u_k$ = function () {
    return this.PROJECT_SECTION_TEXT_1;
  };
  protoOf(Constants).get_PROJECT_REPOSITORIES_URL_8f6wxz_k$ = function () {
    return this.PROJECT_REPOSITORIES_URL_1;
  };
  protoOf(Constants).get_MORE_ON_GITHUB_fcq2am_k$ = function () {
    return this.MORE_ON_GITHUB_1;
  };
  protoOf(Constants).get_COPYRIGHT_8r5ypq_k$ = function () {
    return this.COPYRIGHT_1;
  };
  protoOf(Constants).get_DEVELOPER_LOCATION_tbszzn_k$ = function () {
    return this.DEVELOPER_LOCATION_1;
  };
  protoOf(Constants).get_GET_IN_TOUCH_77j6mh_k$ = function () {
    return this.GET_IN_TOUCH_1;
  };
  protoOf(Constants).get_GET_IN_TOUCH_DISCRIPTION_pgnay8_k$ = function () {
    return this.GET_IN_TOUCH_DISCRIPTION_1;
  };
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  function Title() {
    Title_instance = this;
    this.ABOUT_1 = 'About me';
    this.PROJECTS_1 = 'My Projects';
  }
  protoOf(Title).get_ABOUT_i6bw3o_k$ = function () {
    return this.ABOUT_1;
  };
  protoOf(Title).get_PROJECTS_zdkvct_k$ = function () {
    return this.PROJECTS_1;
  };
  var Title_instance;
  function Title_getInstance() {
    if (Title_instance == null)
      new Title();
    return Title_instance;
  }
  function Images() {
    Images_instance = this;
    this.WAVES_1 = 'images/waves.svg';
    this.GREEN_CIRCE_1 = 'images/green_circle.svg';
    this.PORTAL_STAR_LIGHT_1 = 'images/portal_star_light.svg';
    this.PORTAL_STAR_DARK_1 = 'images/portal_star_dark.svg';
    this.ANDROID_STUDIO_LIGHT_LOGO_1 = 'images/Skills/android_studio_light.svg';
    this.ANDROID_STUDIO_DARK_LOGO_1 = 'images/Skills/android_studio_dark.svg';
    this.INTELLIJ_IDEA_LOGO_1 = 'images/Skills/intellij_idea.svg';
    this.KOTLIN_LOGO_1 = 'images/Skills/kotlin.svg';
    this.COMPOSE_LOGO_1 = 'images/Skills/compose.svg';
    this.JAVA_LOGO_1 = 'images/Skills/java.svg';
    this.CPP_LOGO_1 = 'images/Skills/cpp.svg';
    this.JETPACK_LIGHT_LOGO_1 = 'images/Skills/jetpack_light.svg';
    this.JETPACK_DARK_LOGO_1 = 'images/Skills/jetpack_dark.svg';
    this.KTOR_LOGO_1 = 'images/Skills/ktor.svg';
    this.FIREBASE_LOGO_1 = 'images/Skills/firebase.svg';
    this.GITHUB_DARK_LOGO_1 = 'images/Skills/github_dark.svg';
    this.GITHUB_LIGHT_LOGO_1 = 'images/Skills/github_light.svg';
    this.GRADLE_DARK_LOGO_1 = 'images/Skills/gradle_dark.svg';
    this.GRADLE_LIGHT_LOGO_1 = 'images/Skills/gradle_light.svg';
    this.GIT_LOGO_1 = 'images/Skills/git.svg';
    this.FIGMA_LOGO_1 = 'images/Skills/figma.svg';
    this.PYTHON_LOGO_1 = 'images/Skills/python.svg';
    this.MARKDOWN_LIGHT_LOGO_1 = 'images/Skills/markdown_light.svg';
    this.MARKDOWN_DARK_LOGO_1 = 'images/Skills/markdown_dark.svg';
    this.PROJECT_FOUND_IT_1 = 'images/Projects/found_it.png';
    this.PROJECT_PORTFOLIO_1 = 'images/Projects/portfolio.png';
    this.PROJECT_RALITH_MILITH_1 = 'images/Projects/ralith_milith.png';
  }
  protoOf(Images).get_WAVES_iieuz5_k$ = function () {
    return this.WAVES_1;
  };
  protoOf(Images).get_GREEN_CIRCE_x34sw9_k$ = function () {
    return this.GREEN_CIRCE_1;
  };
  protoOf(Images).get_PORTAL_STAR_LIGHT_fx3dub_k$ = function () {
    return this.PORTAL_STAR_LIGHT_1;
  };
  protoOf(Images).get_PORTAL_STAR_DARK_9oagop_k$ = function () {
    return this.PORTAL_STAR_DARK_1;
  };
  protoOf(Images).get_ANDROID_STUDIO_LIGHT_LOGO_oab870_k$ = function () {
    return this.ANDROID_STUDIO_LIGHT_LOGO_1;
  };
  protoOf(Images).get_ANDROID_STUDIO_DARK_LOGO_18tzs4_k$ = function () {
    return this.ANDROID_STUDIO_DARK_LOGO_1;
  };
  protoOf(Images).get_INTELLIJ_IDEA_LOGO_uds7nw_k$ = function () {
    return this.INTELLIJ_IDEA_LOGO_1;
  };
  protoOf(Images).get_KOTLIN_LOGO_miri68_k$ = function () {
    return this.KOTLIN_LOGO_1;
  };
  protoOf(Images).get_COMPOSE_LOGO_xszfj3_k$ = function () {
    return this.COMPOSE_LOGO_1;
  };
  protoOf(Images).get_JAVA_LOGO_tw29dt_k$ = function () {
    return this.JAVA_LOGO_1;
  };
  protoOf(Images).get_CPP_LOGO_cg39e8_k$ = function () {
    return this.CPP_LOGO_1;
  };
  protoOf(Images).get_JETPACK_LIGHT_LOGO_r5c7ca_k$ = function () {
    return this.JETPACK_LIGHT_LOGO_1;
  };
  protoOf(Images).get_JETPACK_DARK_LOGO_aud03m_k$ = function () {
    return this.JETPACK_DARK_LOGO_1;
  };
  protoOf(Images).get_KTOR_LOGO_x100q3_k$ = function () {
    return this.KTOR_LOGO_1;
  };
  protoOf(Images).get_FIREBASE_LOGO_bktfi2_k$ = function () {
    return this.FIREBASE_LOGO_1;
  };
  protoOf(Images).get_GITHUB_DARK_LOGO_wsymkf_k$ = function () {
    return this.GITHUB_DARK_LOGO_1;
  };
  protoOf(Images).get_GITHUB_LIGHT_LOGO_ed9ncp_k$ = function () {
    return this.GITHUB_LIGHT_LOGO_1;
  };
  protoOf(Images).get_GRADLE_DARK_LOGO_mmyy57_k$ = function () {
    return this.GRADLE_DARK_LOGO_1;
  };
  protoOf(Images).get_GRADLE_LIGHT_LOGO_go05ur_k$ = function () {
    return this.GRADLE_LIGHT_LOGO_1;
  };
  protoOf(Images).get_GIT_LOGO_1zt4v5_k$ = function () {
    return this.GIT_LOGO_1;
  };
  protoOf(Images).get_FIGMA_LOGO_295bhh_k$ = function () {
    return this.FIGMA_LOGO_1;
  };
  protoOf(Images).get_PYTHON_LOGO_rapakl_k$ = function () {
    return this.PYTHON_LOGO_1;
  };
  protoOf(Images).get_MARKDOWN_LIGHT_LOGO_tyuklh_k$ = function () {
    return this.MARKDOWN_LIGHT_LOGO_1;
  };
  protoOf(Images).get_MARKDOWN_DARK_LOGO_128gst_k$ = function () {
    return this.MARKDOWN_DARK_LOGO_1;
  };
  protoOf(Images).get_PROJECT_FOUND_IT_epomfd_k$ = function () {
    return this.PROJECT_FOUND_IT_1;
  };
  protoOf(Images).get_PROJECT_PORTFOLIO_ev6m9z_k$ = function () {
    return this.PROJECT_PORTFOLIO_1;
  };
  protoOf(Images).get_PROJECT_RALITH_MILITH_7wur4z_k$ = function () {
    return this.PROJECT_RALITH_MILITH_1;
  };
  var Images_instance;
  function Images_getInstance() {
    if (Images_instance == null)
      new Images();
    return Images_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function musaib_components_utils_Res_Constants$stableprop_getter() {
    return musaib_components_utils_Res_Constants$stable;
  }
  function musaib_components_utils_Res_Title$stableprop_getter() {
    return musaib_components_utils_Res_Title$stable;
  }
  function musaib_components_utils_Res_Images$stableprop_getter() {
    return musaib_components_utils_Res_Images$stable;
  }
  function musaib_components_utils_Res$stableprop_getter() {
    return musaib_components_utils_Res$stable;
  }
  function IconButton(onClick, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1834346241);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = IconButton$lambda(onClick);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = setVariable_0(Companion_getInstance_3(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), get_em(1));
      var tmp_2 = get_CircleButtonVariant().then_9h6e8h_k$(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-161513713, true, IconButton$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_63(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp_1, tmp_2, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function IconButton$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ThemedButton(onClick, modifier, text, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var text_0 = {_v: text};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-663818182);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 4) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$LinkButtonKt_getInstance().lambda$367856365__1;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ThemedButton$lambda(onClick);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = modifier_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ThemedButton$lambda_0;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_4 = padding_0(tmp_1, tmp1_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1451029066, true, ThemedButton$lambda_1(content_0, text_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_67(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp_4, null, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368, 508);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ThemedButton$lambda_2(onClick, modifier_0, text_0, content_0, $changed, $default));
    }
  }
  function LinkButton(path, modifier, text, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var text_0 = {_v: text};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-916634482);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      if (!(($default & 4) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = ComposableSingletons$LinkButtonKt_getInstance().lambda$946865659__1;
      }
      var ctx = rememberPageContext($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1633490746);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changedInstance_s1wkiy_k$(ctx) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = LinkButton$lambda(ctx, path);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      ThemedButton(tmp0_group, modifier_0._v, text_0._v, content_0._v, $composer_0, 112 & $dirty | 896 & $dirty | 7168 & $dirty, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(LinkButton$lambda_0(path, modifier_0, text_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$LinkButtonKt$lambda$367856365$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if (($changed & 3) === 2 && $composer_0.get_skipping_3owdve_k$()) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$LinkButtonKt$lambda$946865659$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if (($changed & 3) === 2 && $composer_0.get_skipping_3owdve_k$()) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LinkButtonKt() {
    ComposableSingletons$LinkButtonKt_instance = this;
    var tmp = this;
    tmp.lambda$367856365__1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(367856365, false, ComposableSingletons$LinkButtonKt$lambda$367856365$lambda));
    var tmp_0 = this;
    tmp_0.lambda$946865659__1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(946865659, false, ComposableSingletons$LinkButtonKt$lambda$946865659$lambda));
  }
  protoOf(ComposableSingletons$LinkButtonKt).get_lambda$367856365_ab3zmw_k$ = function () {
    return this.lambda$367856365__1;
  };
  protoOf(ComposableSingletons$LinkButtonKt).get_lambda$946865659_o4xy1z_k$ = function () {
    return this.lambda$946865659__1;
  };
  var ComposableSingletons$LinkButtonKt_instance;
  function ComposableSingletons$LinkButtonKt_getInstance() {
    if (ComposableSingletons$LinkButtonKt_instance == null)
      new ComposableSingletons$LinkButtonKt();
    return ComposableSingletons$LinkButtonKt_instance;
  }
  function ThemedButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function ThemedButton$lambda_0($this$padding) {
    leftRight($this$padding, get_cssRem(0));
    return Unit_getInstance();
  }
  function ThemedButton$lambda$lambda($content, $text) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $content._v($composer_0, 0);
        // Inline function 'kotlin.text.isNullOrEmpty' call
        var this_0 = $text._v;
        if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
          var tmp_0 = $text._v;
          SpanText(tmp_0, null, null, null, $composer_0, 0, 14);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ThemedButton$lambda_1($content, $text) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_verticalAlignment = CenterVertically_getInstance();
        var tmp1_horizontalArrangement = Arrangement_getInstance().spacedBy_9noyc7_k$(get_cssRem(0.2));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1518201203, true, ThemedButton$lambda$lambda($content, $text), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_66(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(null, tmp1_horizontalArrangement, tmp0_verticalAlignment, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ThemedButton$lambda_2($onClick, $modifier, $text, $content, $$changed, $$default) {
    return function ($composer, $force) {
      ThemedButton($onClick, $modifier._v, $text._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LinkButton$lambda($ctx, $path) {
    return function () {
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$($path);
      return Unit_getInstance();
    };
  }
  function LinkButton$lambda_0($path, $modifier, $text, $content, $$changed, $$default) {
    return function ($composer, $force) {
      LinkButton($path, $modifier._v, $text._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SVGHeroBackround(modifier, src, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1636565387);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_3();
      }
      var tmp = modifier_0._v.then_mmfvo6_k$(modifier_0._v);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      Companion_getInstance_8();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      var tmp0_modifier = pointerEvents(position(tmp, tmp$ret$3), Companion_getInstance_23().get_None_wo6tgh_k$());
      AppearanceAwareImage(src, tmp0_modifier, null, null, null, null, false, $composer_0, 1572864 | 14 & $dirty >> 3, 60);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SVGHeroBackround$lambda(modifier_0, src, $changed, $default));
    }
  }
  function SVGHeroBackround$lambda($modifier, $src, $$changed, $$default) {
    return function ($composer, $force) {
      SVGHeroBackround($modifier._v, $src, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SectionTitle(sectionTitleText, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(481813351);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(sectionTitleText) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(58405866, true, SectionTitle$lambda(sectionTitleText), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(null, null, null, null, tmp0, $composer_0, 24576, 15);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SectionTitle$lambda_0(sectionTitleText, $changed));
    }
  }
  function SectionTitle$lambda$lambda($sectionTitleText, $this_Row) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $this_Row.align_kdfg3t_k$(padding_1(margin_0(toModifier(get_SectionTitleStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), get_cssRem(10)), VOID, get_cssRem(1)), Bottom_getInstance());
      var tmp_0;
      switch (Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_0 = Colors_getInstance().get_Black_i7mvue_k$();
          break;
        case 1:
          tmp_0 = Colors_getInstance().get_White_ij46ow_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = fontFamily(fontWeight(color(tmp, tmp_0), Companion_getInstance_11().get_Black_i7mvue_k$()), ['Lexend']);
      SpanText($sectionTitleText, tmp_1, null, null, $composer_0, 0, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$lambda($sectionTitleText) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Row) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_1 = get_SubheadlineTextStyle();
        var tmp_2 = toAttrs(tmp_1, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1947484119, true, SectionTitle$lambda$lambda($sectionTitleText, $this$Row), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_68(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        var portalStar = Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6).get_isLight_zemp0j_k$() ? 'images/portal_star_dark.svg' : 'images/portal_star_light.svg';
        var tmp_5 = size($this$Row.align_kdfg3t_k$(Companion_getInstance_3(), Top_getInstance()), get_px(22));
        Image(portalStar, tmp_5, null, null, null, null, null, $composer_0, 0, 124);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SectionTitle$lambda_0($sectionTitleText, $$changed) {
    return function ($composer, $force) {
      SectionTitle($sectionTitleText, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(987419131);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      DefaultPageLayout('Musaib Shabir', ComposableSingletons$IndexKt_getInstance().lambda$_2051657495_ls4r4y_1, $composer_0, 54);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda$_239833134$lambda_9p6xnj($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var currentPalette = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6));
      Home(currentPalette, $composer_0, 0);
      About($composer_0, 0);
      Projects($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$IndexKt$lambda$_2051657495$lambda_c4crqn($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxSize(Companion_getInstance_3());
      var tmp_0 = CenterHorizontally_getInstance();
      Column(tmp, null, tmp_0, null, ComposableSingletons$IndexKt_getInstance().lambda$_239833134_7oz0i_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda$_239833134_7oz0i_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(-239833134, false, ComposableSingletons$IndexKt$lambda$_239833134$lambda_9p6xnj));
    var tmp_0 = this;
    tmp_0.lambda$_2051657495_ls4r4y_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-2051657495, false, ComposableSingletons$IndexKt$lambda$_2051657495$lambda_c4crqn));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda$_239833134_eik4a0_k$ = function () {
    return this.lambda$_239833134_7oz0i_1;
  };
  protoOf(ComposableSingletons$IndexKt).get_lambda$_2051657495_cnc30m_k$ = function () {
    return this.lambda$_2051657495_ls4r4y_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: init
  COLOR_MODE_KEY = 'musaib:colorMode';
  musaib_SitePalette$stable = 8;
  musaib_SitePalettes$stable = 8;
  musaib_components_utils_Res_Constants$stable = 0;
  musaib_components_utils_Res_Title$stable = 0;
  musaib_components_utils_Res_Images$stable = 0;
  musaib_components_utils_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=musaib.js.map
