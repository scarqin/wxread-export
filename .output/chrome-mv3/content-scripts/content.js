var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
(function() {
  "use strict";
  var _a, _b, _isTopFrame, _abortController, _locationWatcher, _stopOldScripts, stopOldScripts_fn, _listenForNewerScripts, listenForNewerScripts_fn;
  function defineContentScript(definition2) {
    return definition2;
  }
  const definition = defineContentScript({
    matches: ["*://*.google.com/*"],
    main() {
      console.log("Hello content.");
    }
  });
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var browserPolyfill = { exports: {} };
  (function(module, exports) {
    (function(global2, factory) {
      {
        factory(module);
      }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function(module2) {
      var _a2, _b2;
      if (!((_b2 = (_a2 = globalThis.chrome) == null ? void 0 : _a2.runtime) == null ? void 0 : _b2.id)) {
        throw new Error("This script should only be loaded in a browser extension.");
      }
      if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        const wrapAPIs = (extensionAPIs) => {
          const apiMetadata = {
            "alarms": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "clearAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "bookmarks": {
              "create": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getChildren": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getRecent": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getSubTree": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getTree": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "move": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeTree": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "search": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            },
            "browserAction": {
              "disable": {
                "minArgs": 0,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "enable": {
                "minArgs": 0,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "getBadgeBackgroundColor": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getBadgeText": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getPopup": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getTitle": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "openPopup": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "setBadgeBackgroundColor": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setBadgeText": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setIcon": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "setPopup": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setTitle": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              }
            },
            "browsingData": {
              "remove": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "removeCache": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeCookies": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeDownloads": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeFormData": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeHistory": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeLocalStorage": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removePasswords": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removePluginData": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "settings": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "commands": {
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "contextMenus": {
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            },
            "cookies": {
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAllCookieStores": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "devtools": {
              "inspectedWindow": {
                "eval": {
                  "minArgs": 1,
                  "maxArgs": 2,
                  "singleCallbackArg": false
                }
              },
              "panels": {
                "create": {
                  "minArgs": 3,
                  "maxArgs": 3,
                  "singleCallbackArg": true
                },
                "elements": {
                  "createSidebarPane": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              }
            },
            "downloads": {
              "cancel": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "download": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "erase": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getFileIcon": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "open": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "pause": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeFile": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "resume": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "search": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "show": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              }
            },
            "extension": {
              "isAllowedFileSchemeAccess": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "isAllowedIncognitoAccess": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "history": {
              "addUrl": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "deleteAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "deleteRange": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "deleteUrl": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getVisits": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "search": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "i18n": {
              "detectLanguage": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAcceptLanguages": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "identity": {
              "launchWebAuthFlow": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "idle": {
              "queryState": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "management": {
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getSelf": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "setEnabled": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "uninstallSelf": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "notifications": {
              "clear": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "create": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getPermissionLevel": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            },
            "pageAction": {
              "getPopup": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getTitle": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "hide": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setIcon": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "setPopup": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setTitle": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "show": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              }
            },
            "permissions": {
              "contains": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "request": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "runtime": {
              "getBackgroundPage": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getPlatformInfo": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "openOptionsPage": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "requestUpdateCheck": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "sendMessage": {
                "minArgs": 1,
                "maxArgs": 3
              },
              "sendNativeMessage": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "setUninstallURL": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "sessions": {
              "getDevices": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getRecentlyClosed": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "restore": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "storage": {
              "local": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getBytesInUse": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "managed": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getBytesInUse": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "sync": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getBytesInUse": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              }
            },
            "tabs": {
              "captureVisibleTab": {
                "minArgs": 0,
                "maxArgs": 2
              },
              "create": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "detectLanguage": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "discard": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "duplicate": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "executeScript": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getCurrent": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getZoom": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getZoomSettings": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "goBack": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "goForward": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "highlight": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "insertCSS": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "move": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "query": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "reload": {
                "minArgs": 0,
                "maxArgs": 2
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeCSS": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "sendMessage": {
                "minArgs": 2,
                "maxArgs": 3
              },
              "setZoom": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "setZoomSettings": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "update": {
                "minArgs": 1,
                "maxArgs": 2
              }
            },
            "topSites": {
              "get": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "webNavigation": {
              "getAllFrames": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getFrame": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "webRequest": {
              "handlerBehaviorChanged": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "windows": {
              "create": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "get": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getCurrent": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getLastFocused": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            }
          };
          if (Object.keys(apiMetadata).length === 0) {
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          }
          class DefaultWeakMap extends WeakMap {
            constructor(createItem, items = void 0) {
              super(items);
              this.createItem = createItem;
            }
            get(key) {
              if (!this.has(key)) {
                this.set(key, this.createItem(key));
              }
              return super.get(key);
            }
          }
          const isThenable = (value) => {
            return value && typeof value === "object" && typeof value.then === "function";
          };
          const makeCallback = (promise, metadata) => {
            return (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) {
                promise.reject(new Error(extensionAPIs.runtime.lastError.message));
              } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                promise.resolve(callbackArgs[0]);
              } else {
                promise.resolve(callbackArgs);
              }
            };
          };
          const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
          const wrapAsyncFunction = (name, metadata) => {
            return function asyncFunctionWrapper(target, ...args) {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                if (metadata.fallbackToNoCallback) {
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                    target[name](...args);
                    metadata.fallbackToNoCallback = false;
                    metadata.noCallback = true;
                    resolve();
                  }
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                }
              });
            };
          };
          const wrapMethod = (target, method, wrapper) => {
            return new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
          };
          let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
          const wrapObject = (target, wrappers = {}, metadata = {}) => {
            let cache = /* @__PURE__ */ Object.create(null);
            let handlers = {
              has(proxyTarget2, prop) {
                return prop in target || prop in cache;
              },
              get(proxyTarget2, prop, receiver) {
                if (prop in cache) {
                  return cache[prop];
                }
                if (!(prop in target)) {
                  return void 0;
                }
                let value = target[prop];
                if (typeof value === "function") {
                  if (typeof wrappers[prop] === "function") {
                    value = wrapMethod(target, target[prop], wrappers[prop]);
                  } else if (hasOwnProperty(metadata, prop)) {
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else {
                    value = value.bind(target);
                  }
                } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                  value = wrapObject(value, wrappers[prop], metadata[prop]);
                } else if (hasOwnProperty(metadata, "*")) {
                  value = wrapObject(value, wrappers[prop], metadata["*"]);
                } else {
                  Object.defineProperty(cache, prop, {
                    configurable: true,
                    enumerable: true,
                    get() {
                      return target[prop];
                    },
                    set(value2) {
                      target[prop] = value2;
                    }
                  });
                  return value;
                }
                cache[prop] = value;
                return value;
              },
              set(proxyTarget2, prop, value, receiver) {
                if (prop in cache) {
                  cache[prop] = value;
                } else {
                  target[prop] = value;
                }
                return true;
              },
              defineProperty(proxyTarget2, prop, desc) {
                return Reflect.defineProperty(cache, prop, desc);
              },
              deleteProperty(proxyTarget2, prop) {
                return Reflect.deleteProperty(cache, prop);
              }
            };
            let proxyTarget = Object.create(target);
            return new Proxy(proxyTarget, handlers);
          };
          const wrapEvent = (wrapperMap) => ({
            addListener(target, listener, ...args) {
              target.addListener(wrapperMap.get(listener), ...args);
            },
            hasListener(target, listener) {
              return target.hasListener(wrapperMap.get(listener));
            },
            removeListener(target, listener) {
              target.removeListener(wrapperMap.get(listener));
            }
          });
          const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
            if (typeof listener !== "function") {
              return listener;
            }
            return function onRequestFinished(req) {
              const wrappedReq = wrapObject(
                req,
                {},
                {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                }
              );
              listener(wrappedReq);
            };
          });
          const onMessageWrappers = new DefaultWeakMap((listener) => {
            if (typeof listener !== "function") {
              return listener;
            }
            return function onMessage(message, sender, sendResponse) {
              let didCallSendResponse = false;
              let wrappedSendResponse;
              let sendResponsePromise = new Promise((resolve) => {
                wrappedSendResponse = function(response) {
                  didCallSendResponse = true;
                  resolve(response);
                };
              });
              let result;
              try {
                result = listener(message, sender, wrappedSendResponse);
              } catch (err) {
                result = Promise.reject(err);
              }
              const isResultThenable = result !== true && isThenable(result);
              if (result !== true && !isResultThenable && !didCallSendResponse) {
                return false;
              }
              const sendPromisedResult = (promise) => {
                promise.then((msg) => {
                  sendResponse(msg);
                }, (error) => {
                  let message2;
                  if (error && (error instanceof Error || typeof error.message === "string")) {
                    message2 = error.message;
                  } else {
                    message2 = "An unexpected error occurred";
                  }
                  sendResponse({
                    __mozWebExtensionPolyfillReject__: true,
                    message: message2
                  });
                }).catch((err) => {
                  console.error("Failed to send onMessage rejected reply", err);
                });
              };
              if (isResultThenable) {
                sendPromisedResult(result);
              } else {
                sendPromisedResult(sendResponsePromise);
              }
              return true;
            };
          });
          const wrappedSendMessageCallback = ({
            reject,
            resolve
          }, reply) => {
            if (extensionAPIs.runtime.lastError) {
              if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                resolve();
              } else {
                reject(new Error(extensionAPIs.runtime.lastError.message));
              }
            } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
              reject(new Error(reply.message));
            } else {
              resolve(reply);
            }
          };
          const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
            if (args.length < metadata.minArgs) {
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            }
            if (args.length > metadata.maxArgs) {
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            }
            return new Promise((resolve, reject) => {
              const wrappedCb = wrappedSendMessageCallback.bind(null, {
                resolve,
                reject
              });
              args.push(wrappedCb);
              apiNamespaceObj.sendMessage(...args);
            });
          };
          const staticWrappers = {
            devtools: {
              network: {
                onRequestFinished: wrapEvent(onRequestFinishedWrappers)
              }
            },
            runtime: {
              onMessage: wrapEvent(onMessageWrappers),
              onMessageExternal: wrapEvent(onMessageWrappers),
              sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          };
          const settingMetadata = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          apiMetadata.privacy = {
            network: {
              "*": settingMetadata
            },
            services: {
              "*": settingMetadata
            },
            websites: {
              "*": settingMetadata
            }
          };
          return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        module2.exports = wrapAPIs(chrome);
      } else {
        module2.exports = globalThis.browser;
      }
    });
  })(browserPolyfill);
  var browserPolyfillExports = browserPolyfill.exports;
  const originalBrowser = /* @__PURE__ */ getDefaultExportFromCjs(browserPolyfillExports);
  var browser = originalBrowser;
  var define_import_meta_env_default = { VITE_CJS_IGNORE_WARNING: "true", BASE_URL: "/", MODE: "development", DEV: true, PROD: false, SSR: false, MANIFEST_VERSION: 3, BROWSER: "chrome", CHROME: true, FIREFOX: false, SAFARI: false, EDGE: false, OPERA: false, COMMAND: "serve", ENTRYPOINT: "content" };
  function print$1(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  var logger$1 = {
    debug: (...args) => print$1(console.debug, ...args),
    log: (...args) => print$1(console.log, ...args),
    warn: (...args) => print$1(console.warn, ...args),
    error: (...args) => print$1(console.error, ...args)
  };
  var WxtLocationChangeEvent = (_a = class extends Event {
    constructor(newUrl, oldUrl) {
      super(_a.EVENT_NAME, {});
      this.newUrl = newUrl;
      this.oldUrl = oldUrl;
    }
  }, __publicField(_a, "EVENT_NAME", getUniqueEventName("wxt:locationchange")), _a);
  function getUniqueEventName(eventName) {
    const entrypointName = typeof define_import_meta_env_default === "undefined" ? "build" : "content";
    return `${browser.runtime.id}:${entrypointName}:${eventName}`;
  }
  function createLocationWatcher(ctx) {
    let interval;
    let oldUrl;
    return {
      /**
       * Ensure the location watcher is actively looking for URL changes. If it's already watching,
       * this is a noop.
       */
      run() {
        if (interval != null)
          return;
        oldUrl = new URL(location.href);
        interval = ctx.setInterval(() => {
          let newUrl = new URL(location.href);
          if (newUrl.href !== oldUrl.href) {
            window.dispatchEvent(new WxtLocationChangeEvent(newUrl, oldUrl));
            oldUrl = newUrl;
          }
        }, 1e3);
      }
    };
  }
  var ContentScriptContext = (_b = class {
    constructor(contentScriptName, options) {
      __privateAdd(this, _stopOldScripts);
      __privateAdd(this, _listenForNewerScripts);
      __privateAdd(this, _isTopFrame, window.self === window.top);
      __privateAdd(this, _abortController, void 0);
      __privateAdd(this, _locationWatcher, createLocationWatcher(this));
      this.contentScriptName = contentScriptName;
      this.options = options;
      __privateSet(this, _abortController, new AbortController());
      if (__privateGet(this, _isTopFrame)) {
        __privateMethod(this, _stopOldScripts, stopOldScripts_fn).call(this);
      }
      this.setTimeout(() => {
        __privateMethod(this, _listenForNewerScripts, listenForNewerScripts_fn).call(this);
      });
    }
    get signal() {
      return __privateGet(this, _abortController).signal;
    }
    abort(reason) {
      return __privateGet(this, _abortController).abort(reason);
    }
    get isInvalid() {
      if (browser.runtime.id == null) {
        this.notifyInvalidated();
      }
      return this.signal.aborted;
    }
    get isValid() {
      return !this.isInvalid;
    }
    /**
     * Add a listener that is called when the content script's context is invalidated.
     *
     * @returns A function to remove the listener.
     *
     * @example
     * browser.runtime.onMessage.addListener(cb);
     * const removeInvalidatedListener = ctx.onInvalidated(() => {
     *   browser.runtime.onMessage.removeListener(cb);
     * })
     * // ...
     * removeInvalidatedListener();
     */
    onInvalidated(cb) {
      this.signal.addEventListener("abort", cb);
      return () => this.signal.removeEventListener("abort", cb);
    }
    /**
     * Return a promise that never resolves. Useful if you have an async function that shouldn't run
     * after the context is expired.
     *
     * @example
     * const getValueFromStorage = async () => {
     *   if (ctx.isInvalid) return ctx.block();
     *
     *   // ...
     * }
     */
    block() {
      return new Promise(() => {
      });
    }
    /**
     * Wrapper around `window.setInterval` that automatically clears the interval when invalidated.
     */
    setInterval(handler, timeout) {
      const id = setInterval(() => {
        if (this.isValid)
          handler();
      }, timeout);
      this.onInvalidated(() => clearInterval(id));
      return id;
    }
    /**
     * Wrapper around `window.setTimeout` that automatically clears the interval when invalidated.
     */
    setTimeout(handler, timeout) {
      const id = setTimeout(() => {
        if (this.isValid)
          handler();
      }, timeout);
      this.onInvalidated(() => clearTimeout(id));
      return id;
    }
    /**
     * Wrapper around `window.requestAnimationFrame` that automatically cancels the request when
     * invalidated.
     */
    requestAnimationFrame(callback) {
      const id = requestAnimationFrame((...args) => {
        if (this.isValid)
          callback(...args);
      });
      this.onInvalidated(() => cancelAnimationFrame(id));
      return id;
    }
    /**
     * Wrapper around `window.requestIdleCallback` that automatically cancels the request when
     * invalidated.
     */
    requestIdleCallback(callback, options) {
      const id = requestIdleCallback((...args) => {
        if (!this.signal.aborted)
          callback(...args);
      }, options);
      this.onInvalidated(() => cancelIdleCallback(id));
      return id;
    }
    /**
     * Call `target.addEventListener` and remove the event listener when the context is invalidated.
     *
     * Includes additional events useful for content scripts:
     *
     * - `"wxt:locationchange"` - Triggered when HTML5 history mode is used to change URL. Content
     *   scripts are not reloaded when navigating this way, so this can be used to reset the content
     *   script state on URL change, or run custom code.
     *
     * @example
     * ctx.addEventListener(document, "visibilitychange", () => {
     *   // ...
     * });
     * ctx.addEventListener(document, "wxt:locationchange", () => {
     *   // ...
     * });
     */
    addEventListener(target, type, handler, options) {
      var _a2;
      if (type === "wxt:locationchange") {
        if (this.isValid)
          __privateGet(this, _locationWatcher).run();
      }
      (_a2 = target.addEventListener) == null ? void 0 : _a2.call(
        target,
        type.startsWith("wxt:") ? getUniqueEventName(type) : type,
        // @ts-expect-error: Event don't match, but that's OK, EventTarget doesn't allow custom types in the callback
        handler,
        {
          ...options,
          signal: this.signal
        }
      );
    }
    /**
     * @internal
     * Abort the abort controller and execute all `onInvalidated` listeners.
     */
    notifyInvalidated() {
      this.abort("Content script context invalidated");
      logger$1.debug(
        `Content script "${this.contentScriptName}" context invalidated`
      );
    }
  }, _isTopFrame = new WeakMap(), _abortController = new WeakMap(), _locationWatcher = new WeakMap(), _stopOldScripts = new WeakSet(), stopOldScripts_fn = function() {
    window.postMessage(
      {
        event: _b.SCRIPT_STARTED_MESSAGE_TYPE,
        contentScriptName: this.contentScriptName
      },
      "*"
    );
  }, _listenForNewerScripts = new WeakSet(), listenForNewerScripts_fn = function() {
    const cb = (event) => {
      var _a2, _b2;
      if (((_a2 = event.data) == null ? void 0 : _a2.type) === _b.SCRIPT_STARTED_MESSAGE_TYPE && ((_b2 = event.data) == null ? void 0 : _b2.contentScriptName) === this.contentScriptName) {
        this.notifyInvalidated();
      }
    };
    addEventListener("message", cb);
    this.onInvalidated(() => removeEventListener("message", cb));
  }, __publicField(_b, "SCRIPT_STARTED_MESSAGE_TYPE", "wxt:content-script-started"), _b);
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  var logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  (async () => {
    try {
      const { main, ...options } = definition;
      const ctx = new ContentScriptContext("content", options);
      await main(ctx);
    } catch (err) {
      logger.error(
        `The content script "${"content"}" crashed on startup!`,
        err
      );
    }
  })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE3Ljcvbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3NhbmRib3guanMiLCIuLi8uLi8uLi9zcmMvZW50cnlwb2ludHMvY29udGVudC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93ZWJleHRlbnNpb24tcG9seWZpbGxAMC4xMC4wL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE3Ljcvbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2NodW5rLUZOVEUyTDI3LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3d4dEAwLjE3Ljcvbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2NsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc2FuZGJveC9kZWZpbmUtdW5saXN0ZWQtc2NyaXB0LnRzXG5mdW5jdGlvbiBkZWZpbmVVbmxpc3RlZFNjcmlwdChhcmcpIHtcbiAgaWYgKHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIilcbiAgICByZXR1cm4geyBtYWluOiBhcmcgfTtcbiAgcmV0dXJuIGFyZztcbn1cblxuLy8gc3JjL3NhbmRib3gvZGVmaW5lLWJhY2tncm91bmQudHNcbmZ1bmN0aW9uIGRlZmluZUJhY2tncm91bmQoYXJnKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIHsgbWFpbjogYXJnIH07XG4gIHJldHVybiBhcmc7XG59XG5cbi8vIHNyYy9zYW5kYm94L2RlZmluZS1jb250ZW50LXNjcmlwdC50c1xuZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG4gIHJldHVybiBkZWZpbml0aW9uO1xufVxuXG4vLyBzcmMvc2FuZGJveC9pbmRleC50c1xuZXhwb3J0ICogZnJvbSBcIkB3ZWJleHQtY29yZS9tYXRjaC1wYXR0ZXJuc1wiO1xuZXhwb3J0IHtcbiAgZGVmaW5lQmFja2dyb3VuZCxcbiAgZGVmaW5lQ29udGVudFNjcmlwdCxcbiAgZGVmaW5lVW5saXN0ZWRTY3JpcHRcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBkZWZpbmVDb250ZW50U2NyaXB0KHtcbiAgbWF0Y2hlczogWycqOi8vKi5nb29nbGUuY29tLyonXSxcbiAgbWFpbigpIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gY29udGVudC4nKTtcbiAgfSxcbn0pO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghZ2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWU/LmlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzLmJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbFRoaXMuYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjsgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG5cblxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTsgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG5cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9OyAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9XG4gICAgICAgICAgLyogd3JhcHBlcnMgKi9cbiAgICAgICAgICAsIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTsgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvLyBzcmMvYnJvd3Nlci50c1xuaW1wb3J0IG9yaWdpbmFsQnJvd3NlciBmcm9tIFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCI7XG52YXIgYnJvd3NlciA9IG9yaWdpbmFsQnJvd3NlcjtcblxuZXhwb3J0IHtcbiAgYnJvd3NlclxufTtcbiIsImltcG9ydCB7XG4gIGJyb3dzZXJcbn0gZnJvbSBcIi4vY2h1bmstRk5URTJMMjcuanNcIjtcblxuLy8gc3JjL3NhbmRib3gvdXRpbHMvbG9nZ2VyLnRzXG5mdW5jdGlvbiBwcmludChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFID09PSBcInByb2R1Y3Rpb25cIilcbiAgICByZXR1cm47XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzLnNoaWZ0KCk7XG4gICAgbWV0aG9kKGBbd3h0XSAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kKFwiW3d4dF1cIiwgLi4uYXJncyk7XG4gIH1cbn1cbnZhciBsb2dnZXIgPSB7XG4gIGRlYnVnOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5kZWJ1ZywgLi4uYXJncyksXG4gIGxvZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUubG9nLCAuLi5hcmdzKSxcbiAgd2FybjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUud2FybiwgLi4uYXJncyksXG4gIGVycm9yOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5lcnJvciwgLi4uYXJncylcbn07XG5cbi8vIHNyYy9jbGllbnQvY29udGVudC1zY3JpcHRzL2N1c3RvbS1ldmVudHMudHNcbnZhciBXeHRMb2NhdGlvbkNoYW5nZUV2ZW50ID0gY2xhc3MgX1d4dExvY2F0aW9uQ2hhbmdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5ld1VybCwgb2xkVXJsKSB7XG4gICAgc3VwZXIoX1d4dExvY2F0aW9uQ2hhbmdlRXZlbnQuRVZFTlRfTkFNRSwge30pO1xuICAgIHRoaXMubmV3VXJsID0gbmV3VXJsO1xuICAgIHRoaXMub2xkVXJsID0gb2xkVXJsO1xuICB9XG4gIHN0YXRpYyBFVkVOVF9OQU1FID0gZ2V0VW5pcXVlRXZlbnROYW1lKFwid3h0OmxvY2F0aW9uY2hhbmdlXCIpO1xufTtcbmZ1bmN0aW9uIGdldFVuaXF1ZUV2ZW50TmFtZShldmVudE5hbWUpIHtcbiAgY29uc3QgZW50cnlwb2ludE5hbWUgPSB0eXBlb2YgaW1wb3J0Lm1ldGEuZW52ID09PSBcInVuZGVmaW5lZFwiID8gXCJidWlsZFwiIDogaW1wb3J0Lm1ldGEuZW52LkVOVFJZUE9JTlQ7XG4gIHJldHVybiBgJHticm93c2VyLnJ1bnRpbWUuaWR9OiR7ZW50cnlwb2ludE5hbWV9OiR7ZXZlbnROYW1lfWA7XG59XG5cbi8vIHNyYy9jbGllbnQvY29udGVudC1zY3JpcHRzL2xvY2F0aW9uLXdhdGNoZXIudHNcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uV2F0Y2hlcihjdHgpIHtcbiAgbGV0IGludGVydmFsO1xuICBsZXQgb2xkVXJsO1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIEVuc3VyZSB0aGUgbG9jYXRpb24gd2F0Y2hlciBpcyBhY3RpdmVseSBsb29raW5nIGZvciBVUkwgY2hhbmdlcy4gSWYgaXQncyBhbHJlYWR5IHdhdGNoaW5nLFxuICAgICAqIHRoaXMgaXMgYSBub29wLlxuICAgICAqL1xuICAgIHJ1bigpIHtcbiAgICAgIGlmIChpbnRlcnZhbCAhPSBudWxsKVxuICAgICAgICByZXR1cm47XG4gICAgICBvbGRVcmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgaW50ZXJ2YWwgPSBjdHguc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsZXQgbmV3VXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKG5ld1VybC5ocmVmICE9PSBvbGRVcmwuaHJlZikge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBXeHRMb2NhdGlvbkNoYW5nZUV2ZW50KG5ld1VybCwgb2xkVXJsKSk7XG4gICAgICAgICAgb2xkVXJsID0gbmV3VXJsO1xuICAgICAgICB9XG4gICAgICB9LCAxZTMpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gc3JjL2NsaWVudC9jb250ZW50LXNjcmlwdHMvY29udGVudC1zY3JpcHQtY29udGV4dC50c1xudmFyIENvbnRlbnRTY3JpcHRDb250ZXh0ID0gY2xhc3MgX0NvbnRlbnRTY3JpcHRDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGVudFNjcmlwdE5hbWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRlbnRTY3JpcHROYW1lID0gY29udGVudFNjcmlwdE5hbWU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLiNhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgaWYgKHRoaXMuI2lzVG9wRnJhbWUpIHtcbiAgICAgIHRoaXMuI3N0b3BPbGRTY3JpcHRzKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiNsaXN0ZW5Gb3JOZXdlclNjcmlwdHMoKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFID0gXCJ3eHQ6Y29udGVudC1zY3JpcHQtc3RhcnRlZFwiO1xuICAjaXNUb3BGcmFtZSA9IHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wO1xuICAjYWJvcnRDb250cm9sbGVyO1xuICAjbG9jYXRpb25XYXRjaGVyID0gY3JlYXRlTG9jYXRpb25XYXRjaGVyKHRoaXMpO1xuICBnZXQgc2lnbmFsKCkge1xuICAgIHJldHVybiB0aGlzLiNhYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICB9XG4gIGFib3J0KHJlYXNvbikge1xuICAgIHJldHVybiB0aGlzLiNhYm9ydENvbnRyb2xsZXIuYWJvcnQocmVhc29uKTtcbiAgfVxuICBnZXQgaXNJbnZhbGlkKCkge1xuICAgIGlmIChicm93c2VyLnJ1bnRpbWUuaWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub3RpZnlJbnZhbGlkYXRlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaWduYWwuYWJvcnRlZDtcbiAgfVxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNJbnZhbGlkO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb250ZW50IHNjcmlwdCdzIGNvbnRleHQgaXMgaW52YWxpZGF0ZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihjYik7XG4gICAqIGNvbnN0IHJlbW92ZUludmFsaWRhdGVkTGlzdGVuZXIgPSBjdHgub25JbnZhbGlkYXRlZCgoKSA9PiB7XG4gICAqICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihjYik7XG4gICAqIH0pXG4gICAqIC8vIC4uLlxuICAgKiByZW1vdmVJbnZhbGlkYXRlZExpc3RlbmVyKCk7XG4gICAqL1xuICBvbkludmFsaWRhdGVkKGNiKSB7XG4gICAgdGhpcy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNiKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNiKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IG5ldmVyIHJlc29sdmVzLiBVc2VmdWwgaWYgeW91IGhhdmUgYW4gYXN5bmMgZnVuY3Rpb24gdGhhdCBzaG91bGRuJ3QgcnVuXG4gICAqIGFmdGVyIHRoZSBjb250ZXh0IGlzIGV4cGlyZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGdldFZhbHVlRnJvbVN0b3JhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAqICAgaWYgKGN0eC5pc0ludmFsaWQpIHJldHVybiBjdHguYmxvY2soKTtcbiAgICpcbiAgICogICAvLyAuLi5cbiAgICogfVxuICAgKi9cbiAgYmxvY2soKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5zZXRJbnRlcnZhbGAgdGhhdCBhdXRvbWF0aWNhbGx5IGNsZWFycyB0aGUgaW50ZXJ2YWwgd2hlbiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHNldEludGVydmFsKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpXG4gICAgICAgIGhhbmRsZXIoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2xlYXJJbnRlcnZhbChpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5zZXRUaW1lb3V0YCB0aGF0IGF1dG9tYXRpY2FsbHkgY2xlYXJzIHRoZSBpbnRlcnZhbCB3aGVuIGludmFsaWRhdGVkLlxuICAgKi9cbiAgc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpXG4gICAgICAgIGhhbmRsZXIoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2xlYXJUaW1lb3V0KGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZWAgdGhhdCBhdXRvbWF0aWNhbGx5IGNhbmNlbHMgdGhlIHJlcXVlc3Qgd2hlblxuICAgKiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKVxuICAgICAgICBjYWxsYmFjayguLi5hcmdzKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFja2AgdGhhdCBhdXRvbWF0aWNhbGx5IGNhbmNlbHMgdGhlIHJlcXVlc3Qgd2hlblxuICAgKiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2soY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmICghdGhpcy5zaWduYWwuYWJvcnRlZClcbiAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogQ2FsbCBgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXJgIGFuZCByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbnRleHQgaXMgaW52YWxpZGF0ZWQuXG4gICAqXG4gICAqIEluY2x1ZGVzIGFkZGl0aW9uYWwgZXZlbnRzIHVzZWZ1bCBmb3IgY29udGVudCBzY3JpcHRzOlxuICAgKlxuICAgKiAtIGBcInd4dDpsb2NhdGlvbmNoYW5nZVwiYCAtIFRyaWdnZXJlZCB3aGVuIEhUTUw1IGhpc3RvcnkgbW9kZSBpcyB1c2VkIHRvIGNoYW5nZSBVUkwuIENvbnRlbnRcbiAgICogICBzY3JpcHRzIGFyZSBub3QgcmVsb2FkZWQgd2hlbiBuYXZpZ2F0aW5nIHRoaXMgd2F5LCBzbyB0aGlzIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSBjb250ZW50XG4gICAqICAgc2NyaXB0IHN0YXRlIG9uIFVSTCBjaGFuZ2UsIG9yIHJ1biBjdXN0b20gY29kZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY3R4LmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCAoKSA9PiB7XG4gICAqICAgLy8gLi4uXG4gICAqIH0pO1xuICAgKiBjdHguYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgKiAgIC8vIC4uLlxuICAgKiB9KTtcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09IFwid3h0OmxvY2F0aW9uY2hhbmdlXCIpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpXG4gICAgICAgIHRoaXMuI2xvY2F0aW9uV2F0Y2hlci5ydW4oKTtcbiAgICB9XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXI/LihcbiAgICAgIHR5cGUuc3RhcnRzV2l0aChcInd4dDpcIikgPyBnZXRVbmlxdWVFdmVudE5hbWUodHlwZSkgOiB0eXBlLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogRXZlbnQgZG9uJ3QgbWF0Y2gsIGJ1dCB0aGF0J3MgT0ssIEV2ZW50VGFyZ2V0IGRvZXNuJ3QgYWxsb3cgY3VzdG9tIHR5cGVzIGluIHRoZSBjYWxsYmFja1xuICAgICAgaGFuZGxlcixcbiAgICAgIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc2lnbmFsOiB0aGlzLnNpZ25hbFxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBBYm9ydCB0aGUgYWJvcnQgY29udHJvbGxlciBhbmQgZXhlY3V0ZSBhbGwgYG9uSW52YWxpZGF0ZWRgIGxpc3RlbmVycy5cbiAgICovXG4gIG5vdGlmeUludmFsaWRhdGVkKCkge1xuICAgIHRoaXMuYWJvcnQoXCJDb250ZW50IHNjcmlwdCBjb250ZXh0IGludmFsaWRhdGVkXCIpO1xuICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgIGBDb250ZW50IHNjcmlwdCBcIiR7dGhpcy5jb250ZW50U2NyaXB0TmFtZX1cIiBjb250ZXh0IGludmFsaWRhdGVkYFxuICAgICk7XG4gIH1cbiAgI3N0b3BPbGRTY3JpcHRzKCkge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgZXZlbnQ6IF9Db250ZW50U2NyaXB0Q29udGV4dC5TQ1JJUFRfU1RBUlRFRF9NRVNTQUdFX1RZUEUsXG4gICAgICAgIGNvbnRlbnRTY3JpcHROYW1lOiB0aGlzLmNvbnRlbnRTY3JpcHROYW1lXG4gICAgICB9LFxuICAgICAgXCIqXCJcbiAgICApO1xuICB9XG4gICNsaXN0ZW5Gb3JOZXdlclNjcmlwdHMoKSB7XG4gICAgY29uc3QgY2IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhPy50eXBlID09PSBfQ29udGVudFNjcmlwdENvbnRleHQuU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFICYmIGV2ZW50LmRhdGE/LmNvbnRlbnRTY3JpcHROYW1lID09PSB0aGlzLmNvbnRlbnRTY3JpcHROYW1lKSB7XG4gICAgICAgIHRoaXMubm90aWZ5SW52YWxpZGF0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGNiKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgY2IpKTtcbiAgfVxufTtcblxuLy8gc3JjL2NsaWVudC9jb250ZW50LXNjcmlwdHMvdWkvaW5kZXgudHNcbmltcG9ydCB7IGNyZWF0ZUlzb2xhdGVkRWxlbWVudCB9IGZyb20gXCJAd2ViZXh0LWNvcmUvaXNvbGF0ZWQtZWxlbWVudFwiO1xuZnVuY3Rpb24gY3JlYXRlSW50ZWdyYXRlZFVpKGN0eCwgb3B0aW9ucykge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnRhZyB8fCBcImRpdlwiKTtcbiAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXd4dC1pbnRlZ3JhdGVkXCIsIFwiXCIpO1xuICBsZXQgbW91bnRlZCA9IHZvaWQgMDtcbiAgY29uc3QgbW91bnQgPSAoKSA9PiB7XG4gICAgYXBwbHlQb3NpdGlvbih3cmFwcGVyLCB2b2lkIDAsIG9wdGlvbnMpO1xuICAgIG1vdW50VWkod3JhcHBlciwgb3B0aW9ucyk7XG4gICAgbW91bnRlZCA9IG9wdGlvbnMub25Nb3VudD8uKHdyYXBwZXIpO1xuICB9O1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgb3B0aW9ucy5vblJlbW92ZT8uKG1vdW50ZWQpO1xuICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gIH07XG4gIGN0eC5vbkludmFsaWRhdGVkKHJlbW92ZSk7XG4gIHJldHVybiB7XG4gICAgbW91bnRlZCxcbiAgICB3cmFwcGVyLFxuICAgIG1vdW50LFxuICAgIHJlbW92ZVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlSWZyYW1lVWkoY3R4LCBvcHRpb25zKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImRhdGEtd3h0LWlmcmFtZVwiLCBcIlwiKTtcbiAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgaWZyYW1lLnNyYyA9IGJyb3dzZXIucnVudGltZS5nZXRVUkwob3B0aW9ucy5wYWdlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBsZXQgbW91bnRlZCA9IHZvaWQgMDtcbiAgY29uc3QgbW91bnQgPSAoKSA9PiB7XG4gICAgYXBwbHlQb3NpdGlvbih3cmFwcGVyLCBpZnJhbWUsIG9wdGlvbnMpO1xuICAgIG1vdW50VWkod3JhcHBlciwgb3B0aW9ucyk7XG4gICAgbW91bnRlZCA9IG9wdGlvbnMub25Nb3VudD8uKHdyYXBwZXIsIGlmcmFtZSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICBvcHRpb25zLm9uUmVtb3ZlPy4obW91bnRlZCk7XG4gICAgd3JhcHBlci5yZW1vdmUoKTtcbiAgfTtcbiAgY3R4Lm9uSW52YWxpZGF0ZWQocmVtb3ZlKTtcbiAgcmV0dXJuIHtcbiAgICBtb3VudGVkLFxuICAgIGlmcmFtZSxcbiAgICB3cmFwcGVyLFxuICAgIG1vdW50LFxuICAgIHJlbW92ZVxuICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2hhZG93Um9vdFVpKGN0eCwgb3B0aW9ucykge1xuICBjb25zdCBjc3MgPSBbb3B0aW9ucy5jc3MgPz8gXCJcIl07XG4gIGlmIChjdHgub3B0aW9ucz8uY3NzSW5qZWN0aW9uTW9kZSA9PT0gXCJ1aVwiKSB7XG4gICAgY29uc3QgZW50cnlDc3MgPSBhd2FpdCBsb2FkQ3NzKCk7XG4gICAgY3NzLnB1c2goZW50cnlDc3MucmVwbGFjZUFsbChcIjpyb290XCIsIFwiOmhvc3RcIikpO1xuICB9XG4gIGNvbnN0IHtcbiAgICBpc29sYXRlZEVsZW1lbnQ6IHVpQ29udGFpbmVyLFxuICAgIHBhcmVudEVsZW1lbnQ6IHNoYWRvd0hvc3QsXG4gICAgc2hhZG93XG4gIH0gPSBhd2FpdCBjcmVhdGVJc29sYXRlZEVsZW1lbnQoe1xuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICBjc3M6IHtcbiAgICAgIHRleHRDb250ZW50OiBjc3Muam9pbihcIlxcblwiKS50cmltKClcbiAgICB9LFxuICAgIG1vZGU6IG9wdGlvbnMubW9kZSA/PyBcIm9wZW5cIixcbiAgICBpc29sYXRlRXZlbnRzOiBvcHRpb25zLmlzb2xhdGVFdmVudHNcbiAgfSk7XG4gIHNoYWRvd0hvc3Quc2V0QXR0cmlidXRlKFwiZGF0YS13eHQtc2hhZG93LXJvb3RcIiwgXCJcIik7XG4gIGxldCBtb3VudGVkO1xuICBjb25zdCBtb3VudCA9ICgpID0+IHtcbiAgICBtb3VudFVpKHNoYWRvd0hvc3QsIG9wdGlvbnMpO1xuICAgIGFwcGx5UG9zaXRpb24oc2hhZG93SG9zdCwgc2hhZG93LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLCBvcHRpb25zKTtcbiAgICBtb3VudGVkID0gb3B0aW9ucy5vbk1vdW50KHVpQ29udGFpbmVyLCBzaGFkb3csIHNoYWRvd0hvc3QpO1xuICB9O1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgb3B0aW9ucy5vblJlbW92ZT8uKG1vdW50ZWQpO1xuICAgIHNoYWRvd0hvc3QucmVtb3ZlKCk7XG4gICAgd2hpbGUgKHVpQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgIHVpQ29udGFpbmVyLnJlbW92ZUNoaWxkKHVpQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH07XG4gIGN0eC5vbkludmFsaWRhdGVkKHJlbW92ZSk7XG4gIHJldHVybiB7XG4gICAgc2hhZG93LFxuICAgIHNoYWRvd0hvc3QsXG4gICAgdWlDb250YWluZXIsXG4gICAgbW91bnQsXG4gICAgcmVtb3ZlLFxuICAgIG1vdW50ZWRcbiAgfTtcbn1cbmZ1bmN0aW9uIGFwcGx5UG9zaXRpb24ocm9vdCwgcG9zaXRpb25lZEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMucG9zaXRpb24gPT09IFwiaW5saW5lXCIpXG4gICAgcmV0dXJuO1xuICBpZiAob3B0aW9ucy56SW5kZXggIT0gbnVsbClcbiAgICByb290LnN0eWxlLnpJbmRleCA9IFN0cmluZyhvcHRpb25zLnpJbmRleCk7XG4gIHJvb3Quc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgcm9vdC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgcm9vdC5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICByb290LnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICByb290LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGlmIChwb3NpdGlvbmVkRWxlbWVudCkge1xuICAgIGlmIChvcHRpb25zLnBvc2l0aW9uID09PSBcIm92ZXJsYXlcIikge1xuICAgICAgcG9zaXRpb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBpZiAob3B0aW9ucy5hbGlnbm1lbnQ/LnN0YXJ0c1dpdGgoXCJib3R0b20tXCIpKVxuICAgICAgICBwb3NpdGlvbmVkRWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICAgIGVsc2VcbiAgICAgICAgcG9zaXRpb25lZEVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICBpZiAob3B0aW9ucy5hbGlnbm1lbnQ/LmVuZHNXaXRoKFwiLXJpZ2h0XCIpKVxuICAgICAgICBwb3NpdGlvbmVkRWxlbWVudC5zdHlsZS5yaWdodCA9IFwiMFwiO1xuICAgICAgZWxzZVxuICAgICAgICBwb3NpdGlvbmVkRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgcG9zaXRpb25lZEVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICBwb3NpdGlvbmVkRWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICAgIHBvc2l0aW9uZWRFbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICAgIHBvc2l0aW9uZWRFbGVtZW50LnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRBbmNob3Iob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5hbmNob3IgPT0gbnVsbClcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgbGV0IHJlc29sdmVkID0gdHlwZW9mIG9wdGlvbnMuYW5jaG9yID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLmFuY2hvcigpIDogb3B0aW9ucy5hbmNob3I7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZWQgPT09IFwic3RyaW5nXCIpXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVzb2x2ZWQpID8/IHZvaWQgMDtcbiAgcmV0dXJuIHJlc29sdmVkID8/IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIG1vdW50VWkocm9vdCwgb3B0aW9ucykge1xuICBjb25zdCBhbmNob3IgPSBnZXRBbmNob3Iob3B0aW9ucyk7XG4gIGlmIChhbmNob3IgPT0gbnVsbClcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIFwiRmFpbGVkIHRvIG1vdW50IGNvbnRlbnQgc2NyaXB0IFVJOiBjb3VsZCBub3QgZmluZCBhbmNob3IgZWxlbWVudFwiXG4gICAgKTtcbiAgc3dpdGNoIChvcHRpb25zLmFwcGVuZCkge1xuICAgIGNhc2Ugdm9pZCAwOlxuICAgIGNhc2UgXCJsYXN0XCI6XG4gICAgICBhbmNob3IuYXBwZW5kKHJvb3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICBhbmNob3IucHJlcGVuZChyb290KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyZXBsYWNlXCI6XG4gICAgICBhbmNob3IucmVwbGFjZVdpdGgocm9vdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYWZ0ZXJcIjpcbiAgICAgIGFuY2hvci5wYXJlbnRFbGVtZW50Py5pbnNlcnRCZWZvcmUocm9vdCwgYW5jaG9yLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYmVmb3JlXCI6XG4gICAgICBhbmNob3IucGFyZW50RWxlbWVudD8uaW5zZXJ0QmVmb3JlKHJvb3QsIGFuY2hvcik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgb3B0aW9ucy5hcHBlbmQoYW5jaG9yLCByb290KTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkQ3NzKCkge1xuICBjb25zdCB1cmwgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKFxuICAgIGAvY29udGVudC1zY3JpcHRzLyR7aW1wb3J0Lm1ldGEuZW52LkVOVFJZUE9JTlR9LmNzc2BcbiAgKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBhd2FpdCByZXMudGV4dCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2dnZXIud2FybihcbiAgICAgIGBGYWlsZWQgdG8gbG9hZCBzdHlsZXMgQCAke3VybH0uIERpZCB5b3UgZm9yZ2V0IHRvIGltcG9ydCB0aGUgc3R5bGVzaGVldCBpbiB5b3VyIGVudHJ5cG9pbnQ/YCxcbiAgICAgIGVyclxuICAgICk7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIENvbnRlbnRTY3JpcHRDb250ZXh0LFxuICBjcmVhdGVJZnJhbWVVaSxcbiAgY3JlYXRlSW50ZWdyYXRlZFVpLFxuICBjcmVhdGVTaGFkb3dSb290VWlcbn07XG4iXSwibmFtZXMiOlsiZGVmaW5pdGlvbiIsImdsb2JhbCIsInRoaXMiLCJtb2R1bGUiLCJfYiIsIl9hIiwicHJveHlUYXJnZXQiLCJ2YWx1ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxXQUFTLG9CQUFvQkEsYUFBWTtBQUN2QyxXQUFPQTtBQUFBLEVBQ1Q7QUNqQkEsUUFBQSxhQUFlLG9CQUFvQjtBQUFBLElBQ2pDLFNBQVMsQ0FBQyxvQkFBb0I7QUFBQSxJQUM5QixPQUFPO0FBQ0wsY0FBUSxJQUFJLGdCQUFnQjtBQUFBLElBQzlCO0FBQUEsRUFDRixDQUFDOzs7Ozs7O0FDTEQsS0FBQyxTQUFVQyxTQUFRLFNBQVM7QUFHaUI7QUFDekMsZ0JBQVEsTUFBTTtBQUFBLE1BT2Y7QUFBQSxJQUNILEdBQUcsT0FBTyxlQUFlLGNBQWMsYUFBYSxPQUFPLFNBQVMsY0FBYyxPQUFPQyxnQkFBTSxTQUFVQyxTQUFROztBQVkvRyxVQUFJLEdBQUNDLE9BQUFDLE1BQUEsV0FBVyxXQUFYLGdCQUFBQSxJQUFtQixZQUFuQixnQkFBQUQsSUFBNEIsS0FBSTtBQUNuQyxjQUFNLElBQUksTUFBTSwyREFBMkQ7QUFBQSxNQUM1RTtBQUVELFVBQUksT0FBTyxXQUFXLFlBQVksZUFBZSxPQUFPLGVBQWUsV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXO0FBQy9HLGNBQU0sbURBQW1EO0FBTXpELGNBQU0sV0FBVyxtQkFBaUI7QUFJaEMsZ0JBQU0sY0FBYztBQUFBLFlBQ2xCLFVBQVU7QUFBQSxjQUNSLFNBQVM7QUFBQSxnQkFDUCxXQUFXO0FBQUEsZ0JBQ1gsV0FBVztBQUFBLGNBQ1o7QUFB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LGNBQ1IsU0FBUztBQUFBLGdCQUNQLG1CQUFtQixVQUFVLHlCQUF5QjtBQUFBLGNBQ3ZEO0FBQUEsWUFDRjtBQUFBLFlBQ0QsU0FBUztBQUFBLGNBQ1AsV0FBVyxVQUFVLGlCQUFpQjtBQUFBLGNBQ3RDLG1CQUFtQixVQUFVLGlCQUFpQjtBQUFBLGNBQzlDLGFBQWEsbUJBQW1CLEtBQUssTUFBTSxlQUFlO0FBQUEsZ0JBQ3hELFNBQVM7QUFBQSxnQkFDVCxTQUFTO0FBQUEsY0FDckIsQ0FBVztBQUFBLFlBQ0Y7QUFBQSxZQUNELE1BQU07QUFBQSxjQUNKLGFBQWEsbUJBQW1CLEtBQUssTUFBTSxlQUFlO0FBQUEsZ0JBQ3hELFNBQVM7QUFBQSxnQkFDVCxTQUFTO0FBQUEsY0FDckIsQ0FBVztBQUFBLFlBQ0Y7QUFBQSxVQUNUO0FBQ00sZ0JBQU0sa0JBQWtCO0FBQUEsWUFDdEIsT0FBTztBQUFBLGNBQ0wsU0FBUztBQUFBLGNBQ1QsU0FBUztBQUFBLFlBQ1Y7QUFBQSxZQUNELEtBQUs7QUFBQSxjQUNILFNBQVM7QUFBQSxjQUNULFNBQVM7QUFBQSxZQUNWO0FBQUEsWUFDRCxLQUFLO0FBQUEsY0FDSCxTQUFTO0FBQUEsY0FDVCxTQUFTO0FBQUEsWUFDVjtBQUFBLFVBQ1Q7QUFDTSxzQkFBWSxVQUFVO0FBQUEsWUFDcEIsU0FBUztBQUFBLGNBQ1AsS0FBSztBQUFBLFlBQ047QUFBQSxZQUNELFVBQVU7QUFBQSxjQUNSLEtBQUs7QUFBQSxZQUNOO0FBQUEsWUFDRCxVQUFVO0FBQUEsY0FDUixLQUFLO0FBQUEsWUFDTjtBQUFBLFVBQ1Q7QUFDTSxpQkFBTyxXQUFXLGVBQWUsZ0JBQWdCLFdBQVc7QUFBQSxRQUNsRTtBQUlJLFFBQUFMLFFBQU8sVUFBVSxTQUFTLE1BQU07QUFBQSxNQUNwQyxPQUFTO0FBQ0wsUUFBQUEsUUFBTyxVQUFVLFdBQVc7QUFBQSxNQUM3QjtBQUFBLElBQ0gsQ0FBQztBQUFBOzs7QUNqdkNELE1BQUksVUFBVTtBQ0ZkLE1BQUEsaUNBQUEsRUFBQyx5QkFBMkIsUUFBUSxVQUFZLEtBQUssTUFBUSxlQUFlLEtBQU8sTUFBTSxNQUFRLE9BQU8sS0FBTyxPQUFPLGtCQUFvQixHQUFHLFNBQVcsVUFBVSxRQUFVLE1BQU0sU0FBVyxPQUFPLFFBQVUsT0FBTyxNQUFRLE9BQU8sT0FBUyxPQUFPLFNBQVcsU0FBUyxZQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDIsMyw0XX0=
