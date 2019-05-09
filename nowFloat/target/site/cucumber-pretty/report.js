$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("nowFloatHomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Now Float Service Selection Functionality",
  "description": "",
  "id": "now-float-service-selection-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Testing"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify User is able to Select Service From Home Page successfully",
  "description": "",
  "id": "now-float-service-selection-functionality;verify-user-is-able-to-select-service-from-home-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Now Float Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Services link from home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify list of services are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click any \"\u003cServices\u003e\" from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify selected service is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "now-float-service-selection-functionality;verify-user-is-able-to-select-service-from-home-page-successfully;",
  "rows": [
    {
      "cells": [
        "Services"
      ],
      "line": 12,
      "id": "now-float-service-selection-functionality;verify-user-is-able-to-select-service-from-home-page-successfully;;1"
    },
    {
      "cells": [
        "classic"
      ],
      "line": 13,
      "id": "now-float-service-selection-functionality;verify-user-is-able-to-select-service-from-home-page-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User is able to Select Service From Home Page successfully",
  "description": "",
  "id": "now-float-service-selection-functionality;verify-user-is-able-to-select-service-from-home-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Testing"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Now Float Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Services link from home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify list of services are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click any \"classic\" from dropdown list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify selected service is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageValidation.i_am_on_Now_Float_Home_Page()"
});
formatter.result({
  "duration": 20514376742,
  "status": "passed"
});
formatter.match({
  "location": "HomePageValidation.i_click_Services_link_from_home_page()"
});
formatter.result({
  "duration": 3428115081,
  "status": "passed"
});
formatter.match({
  "location": "HomePageValidation.i_verify_list_of_services_are_displayed()"
});
formatter.result({
  "duration": 55328647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "classic",
      "offset": 13
    }
  ],
  "location": "HomePageValidation.i_click_any_from_dropdown_list(String)"
});
formatter.result({
  "duration": 5833765314,
  "error_message": "java.lang.ClassCastException: com.sun.proxy.$Proxy19 cannot be cast to org.openqa.selenium.By\r\n\tat com.nowFloat.Pages.HomePage.selectService(HomePage.java:54)\r\n\tat com.nowFloat.StepDef.HomePageValidation.i_click_any_from_dropdown_list(HomePageValidation.java:38)\r\n\tat ✽.And I click any \"classic\" from dropdown list(nowFloatHomePage.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageValidation.i_verify_selected_service_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify user is able o select service from Service Overlay",
  "description": "",
  "id": "now-float-service-selection-functionality;verify-user-is-able-o-select-service-from-service-overlay",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on Now Float Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I Mouse Over on Services link from home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click any \"\u003cServices\u003e\" from overlay",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "now-float-service-selection-functionality;verify-user-is-able-o-select-service-from-service-overlay;",
  "rows": [
    {
      "cells": [
        "Services"
      ],
      "line": 23,
      "id": "now-float-service-selection-functionality;verify-user-is-able-o-select-service-from-service-overlay;;1"
    },
    {
      "cells": [
        "Classic"
      ],
      "line": 24,
      "id": "now-float-service-selection-functionality;verify-user-is-able-o-select-service-from-service-overlay;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user is able o select service from Service Overlay",
  "description": "",
  "id": "now-float-service-selection-functionality;verify-user-is-able-o-select-service-from-service-overlay;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Testing"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on Now Float Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I Mouse Over on Services link from home page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click any \"Classic\" from overlay",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageValidation.i_am_on_Now_Float_Home_Page()"
});
formatter.result({
  "duration": 14580543265,
  "status": "passed"
});
formatter.match({
  "location": "HomePageValidation.i_Mouse_Over_on_Services_link_from_home_page()"
});
formatter.result({
  "duration": 149101533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Classic",
      "offset": 13
    }
  ],
  "location": "HomePageValidation.i_click_any_from_overlay(String)"
});
formatter.result({
  "duration": 8628066661,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-CEDR2O3\u0027, ip: \u0027192.168.1.107\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_74\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\VAMSIM~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53585}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: 1bdcd44e14754534eebda6837ffefa33\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat com.nowFloat.Pages.HomePage.selectServiceFromOverlay(HomePage.java:74)\r\n\tat com.nowFloat.StepDef.HomePageValidation.i_click_any_from_overlay(HomePageValidation.java:58)\r\n\tat ✽.Then I click any \"Classic\" from overlay(nowFloatHomePage.feature:19)\r\n",
  "status": "failed"
});
formatter.uri("nowFloatPlaceOrder.feature");
formatter.feature({
  "line": 2,
  "name": "Now Float Order Placement Functionality",
  "description": "",
  "id": "now-float-order-placement-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Testing"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify User is able to Place Order successfully",
  "description": "",
  "id": "now-float-order-placement-functionality;verify-user-is-able-to-place-order-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on Now Float Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Services link from home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify list of services are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click any \"\u003cServices\u003e\" from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify selected service is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Add to Bag button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify product added to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click shopping bag link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify user navigated to shopping bag page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify user navigated to checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter shipping details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click payment options",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Place order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify Order ID",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "now-float-order-placement-functionality;verify-user-is-able-to-place-order-successfully;",
  "rows": [
    {
      "cells": [
        "Services"
      ],
      "line": 23,
      "id": "now-float-order-placement-functionality;verify-user-is-able-to-place-order-successfully;;1"
    },
    {
      "cells": [
        "classic"
      ],
      "line": 24,
      "id": "now-float-order-placement-functionality;verify-user-is-able-to-place-order-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Verify User is able to Place Order successfully",
  "description": "",
  "id": "now-float-order-placement-functionality;verify-user-is-able-to-place-order-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Testing"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Now Float Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Services link from home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify list of services are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click any \"classic\" from dropdown list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify selected service is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click Add to Bag button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify product added to Bag",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click shopping bag link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify user navigated to shopping bag page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify user navigated to checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter shipping details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click payment options",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Place order",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify Order ID",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageValidation.i_am_on_Now_Float_Home_Page()"
});
formatter.result({
  "duration": 54413444616,
  "status": "passed"
});
formatter.match({
  "location": "HomePageValidation.i_click_Services_link_from_home_page()"
});
formatter.result({
  "duration": 5334788969,
  "status": "passed"
});
formatter.match({
  "location": "HomePageValidation.i_verify_list_of_services_are_displayed()"
});
formatter.result({
  "duration": 70657197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "classic",
      "offset": 13
    }
  ],
  "location": "HomePageValidation.i_click_any_from_dropdown_list(String)"
});
formatter.result({
  "duration": 4809192784,
  "error_message": "java.lang.ClassCastException: com.sun.proxy.$Proxy19 cannot be cast to org.openqa.selenium.By\r\n\tat com.nowFloat.Pages.HomePage.selectService(HomePage.java:54)\r\n\tat com.nowFloat.StepDef.HomePageValidation.i_click_any_from_dropdown_list(HomePageValidation.java:38)\r\n\tat ✽.And I click any \"classic\" from dropdown list(nowFloatPlaceOrder.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageValidation.i_verify_selected_service_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_click_Add_to_Bag_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_verify_product_added_to_Bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_click_shopping_bag_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_verify_user_navigated_to_shopping_bag_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_click_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_verify_user_navigated_to_checkout_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_enter_shipping_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_click_payment_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_Place_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderValidation.i_verify_Order_ID()"
});
formatter.result({
  "status": "skipped"
});
});