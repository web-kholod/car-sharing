(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), o = t && "IntersectionObserver" in window, i = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, u = function(n, t) {
                    var e, o = "LazyLoad::Initialized", i = new n(t);
                    try {
                        e = new CustomEvent(o, {
                            detail: {
                                instance: i
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(o, !1, !1, {
                            instance: i
                        });
                    }
                    window.dispatchEvent(e);
                }, l = "src", s = "srcset", f = "sizes", d = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", m = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, A = function(n, t) {
                    return function(n, t, e) {
                        var o = "data-ll-status";
                        null !== e ? n.setAttribute(o, e) : n.removeAttribute(o);
                    }(n, 0, t);
                }, w = function(n) {
                    return A(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, p, m ], C = function(n, t, e, o) {
                    n && (void 0 === o ? void 0 === e ? n(t) : n(t, e) : n(t, e, o));
                }, N = function(n, t) {
                    i ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    i ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], o = 0; t = n.children[o]; o += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, V = function(n, t) {
                    j(n).forEach(t);
                }, F = [ l ], B = [ l, d ], J = [ l, s, f ], P = [ g ], S = function(n) {
                    return !!n[_];
                }, U = function(n) {
                    return n[_];
                }, $ = function(n) {
                    return delete n[_];
                }, q = function(n, t) {
                    if (!S(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, H = function(n, t) {
                    if (S(n)) {
                        var e = U(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), A(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), A(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, f, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, l, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            q(n, J), X(n, t);
                        })), q(n, J), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        q(n, F), W(n, l, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        V(n, (function(n) {
                            q(n, F), W(n, l, y(n, t.data_src));
                        })), q(n, B), W(n, d, y(n, t.data_poster)), W(n, l, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        q(n, P), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var o = t[e];
                            en(n, e, o);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var o = z(n) || n;
                    on(o) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var o = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, o, t), tn(n, "error", e);
                    }(o, (function(i) {
                        !function(n, t, e, o) {
                            var i = O(t);
                            rn(t, e, o), N(t, e.class_loaded), A(t, b), C(e.callback_loaded, t, o), i || nn(e, o);
                        }(0, n, t, e), an(o);
                    }), (function(i) {
                        !function(n, t, e, o) {
                            var i = O(t);
                            rn(t, e, o), N(t, e.class_error), A(t, m), C(e.callback_error, t, o), e.restore_on_error && H(t, J), 
                            i || nn(e, o);
                        }(0, n, t, e), an(o);
                    }));
                }, un = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            S(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var o = y(n, t.data_bg), i = y(n, t.data_bg_hidpi), r = a && i ? i : o;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(l, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var o = y(n, t.data_bg_multi), i = y(n, t.data_bg_multi_hidpi), r = a && i ? i : o;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var o = y(n, t.data_bg_set);
                            if (o) {
                                var i = o.split("|"), a = i.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = i.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var o = Y[n.tagName];
                            o && (o(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, ln = function(n) {
                    n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
                }, sn = function(n) {
                    D(n, (function(n) {
                        H(n, J);
                    })), H(n, J);
                }, fn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        H(n, F);
                    },
                    VIDEO: function(n) {
                        V(n, (function(n) {
                            H(n, F);
                        })), H(n, B), n.load();
                    },
                    OBJECT: function(n) {
                        H(n, P);
                    }
                }, dn = function(n, t) {
                    (function(n) {
                        var t = fn[n.tagName];
                        t ? t(n) : function(n) {
                            if (S(n)) {
                                var t = U(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), w(n), $(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, o) {
                            var i = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            A(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, o), C(e.callback_enter, n, t, o), i || un(n, e, o);
                        }(n.target, n, t, e) : function(n, t, e, o) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, o) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        ln(n);
                                    })), ln(n);
                                }(n), sn(n), M(n, e.class_loading), R(o, -1), w(n), C(e.callback_cancel, n, t, o));
                            }(n, t, e, o), C(e.callback_exit, n, t, o));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, pn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, mn = function(n) {
                    return function(n) {
                        return k(n) === m;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || pn(t));
                }, En = function(n, e) {
                    var i = c(n);
                    this._settings = i, this.loadingCount = 0, function(n, t) {
                        o && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(i, this), function(n, e) {
                        t && window.addEventListener("online", (function() {
                            !function(n, t) {
                                var e;
                                (e = pn(n), bn(e).filter(mn)).forEach((function(t) {
                                    M(t, n.class_error), w(t);
                                })), t.update();
                            }(n, e);
                        }));
                    }(i, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, i, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && o ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), A(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (i = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, i)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), pn(this._settings).forEach((function(n) {
                            $(n);
                        })), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), un(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        pn(n).forEach((function(t) {
                            dn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    un(n, e);
                }, En.resetStatus = function(n) {
                    w(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, o = 0; e = t[o]; o += 1) u(n, e); else u(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const isPlainObject = obj => "object" === typeof obj && null !== obj && obj.constructor === Object && "[object Object]" === Object.prototype.toString.call(obj);
        const extend = (...args) => {
            let deep = false;
            if ("boolean" == typeof args[0]) deep = args.shift();
            let result = args[0];
            if (!result || "object" !== typeof result) throw new Error("extendee must be an object");
            const extenders = args.slice(1);
            const len = extenders.length;
            for (let i = 0; i < len; i++) {
                const extender = extenders[i];
                for (let key in extender) if (extender.hasOwnProperty(key)) {
                    const value = extender[key];
                    if (deep && (Array.isArray(value) || isPlainObject(value))) {
                        const base = Array.isArray(value) ? [] : {};
                        result[key] = extend(true, result.hasOwnProperty(key) ? result[key] : base, value);
                    } else result[key] = value;
                }
            }
            return result;
        };
        const canUseDOM = !!("undefined" !== typeof window && window.document && window.document.createElement);
        let preventScrollSupported = null;
        const FOCUSABLE_ELEMENTS = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ];
        const setFocusOn = node => {
            if (!node || !canUseDOM) return;
            if (null === preventScrollSupported) document.createElement("div").focus({
                get preventScroll() {
                    preventScrollSupported = true;
                    return false;
                }
            });
            try {
                if (node.setActive) node.setActive(); else if (preventScrollSupported) node.focus({
                    preventScroll: true
                }); else {
                    const scrollTop = window.pageXOffset || document.body.scrollTop;
                    const scrollLeft = window.pageYOffset || document.body.scrollLeft;
                    node.focus();
                    document.body.scrollTo({
                        top: scrollTop,
                        left: scrollLeft,
                        behavior: "auto"
                    });
                }
            } catch (e) {}
        };
        const resolve = function(path, obj) {
            return path.split(".").reduce((function(prev, curr) {
                return prev && prev[curr];
            }), obj);
        };
        class Base {
            constructor(options = {}) {
                this.options = extend(true, {}, options);
                this.plugins = [];
                this.events = {};
                for (const type of [ "on", "once" ]) for (const args of Object.entries(this.options[type] || {})) this[type](...args);
            }
            option(key, fallback, ...rest) {
                key = String(key);
                let value = resolve(key, this.options);
                if ("function" === typeof value) value = value.call(this, this, ...rest);
                return void 0 === value ? fallback : value;
            }
            localize(str, params = []) {
                str = String(str).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((match, key, subkey) => {
                    let rez = "";
                    if (subkey) rez = this.option(`${key[0] + key.toLowerCase().substring(1)}.l10n.${subkey}`); else if (key) rez = this.option(`l10n.${key}`);
                    if (!rez) rez = match;
                    for (let index = 0; index < params.length; index++) rez = rez.split(params[index][0]).join(params[index][1]);
                    return rez;
                }));
                str = str.replace(/\{\{(.*)\}\}/, ((match, key) => key));
                return str;
            }
            on(name, callback) {
                if (isPlainObject(name)) {
                    for (const args of Object.entries(name)) this.on(...args);
                    return this;
                }
                String(name).split(" ").forEach((item => {
                    const listeners = this.events[item] = this.events[item] || [];
                    if (-1 == listeners.indexOf(callback)) listeners.push(callback);
                }));
                return this;
            }
            once(name, callback) {
                if (isPlainObject(name)) {
                    for (const args of Object.entries(name)) this.once(...args);
                    return this;
                }
                String(name).split(" ").forEach((item => {
                    const listener = (...details) => {
                        this.off(item, listener);
                        callback.call(this, this, ...details);
                    };
                    listener._ = callback;
                    this.on(item, listener);
                }));
                return this;
            }
            off(name, callback) {
                if (isPlainObject(name)) {
                    for (const args of Object.entries(name)) this.off(...args);
                    return;
                }
                name.split(" ").forEach((item => {
                    const listeners = this.events[item];
                    if (!listeners || !listeners.length) return this;
                    let index = -1;
                    for (let i = 0, len = listeners.length; i < len; i++) {
                        const listener = listeners[i];
                        if (listener && (listener === callback || listener._ === callback)) {
                            index = i;
                            break;
                        }
                    }
                    if (-1 != index) listeners.splice(index, 1);
                }));
                return this;
            }
            trigger(name, ...details) {
                for (const listener of [ ...this.events[name] || [] ].slice()) if (listener && false === listener.call(this, this, ...details)) return false;
                for (const listener of [ ...this.events["*"] || [] ].slice()) if (listener && false === listener.call(this, name, this, ...details)) return false;
                return true;
            }
            attachPlugins(plugins) {
                const newPlugins = {};
                for (const [key, Plugin] of Object.entries(plugins || {})) if (false !== this.options[key] && !this.plugins[key]) {
                    this.options[key] = extend({}, Plugin.defaults || {}, this.options[key]);
                    newPlugins[key] = new Plugin(this);
                }
                for (const [key, plugin] of Object.entries(newPlugins)) plugin.attach(this);
                this.plugins = Object.assign({}, this.plugins, newPlugins);
                return this;
            }
            detachPlugins() {
                for (const key in this.plugins) {
                    let plugin;
                    if ((plugin = this.plugins[key]) && "function" === typeof plugin.detach) plugin.detach(this);
                }
                this.plugins = {};
                return this;
            }
        }
        const round = (value, precision = 1e4) => {
            value = parseFloat(value) || 0;
            return Math.round((value + Number.EPSILON) * precision) / precision;
        };
        const hasScrollbars = function(node) {
            const overflowY = getComputedStyle(node)["overflow-y"], overflowX = getComputedStyle(node)["overflow-x"], vertical = ("scroll" === overflowY || "auto" === overflowY) && Math.abs(node.scrollHeight - node.clientHeight) > 1, horizontal = ("scroll" === overflowX || "auto" === overflowX) && Math.abs(node.scrollWidth - node.clientWidth) > 1;
            return vertical || horizontal;
        };
        const isScrollable = function(node) {
            if (!node || !("object" === typeof node && node instanceof Element) || node === document.body) return false;
            if (node.__Panzoom) return false;
            if (hasScrollbars(node)) return node;
            return isScrollable(node.parentNode);
        };
        const ResizeObserver = "undefined" !== typeof window && window.ResizeObserver || class {
            constructor(callback) {
                this.observables = [];
                this.boundCheck = this.check.bind(this);
                this.boundCheck();
                this.callback = callback;
            }
            observe(el) {
                if (this.observables.some((observable => observable.el === el))) return;
                const newObservable = {
                    el,
                    size: {
                        height: el.clientHeight,
                        width: el.clientWidth
                    }
                };
                this.observables.push(newObservable);
            }
            unobserve(el) {
                this.observables = this.observables.filter((obj => obj.el !== el));
            }
            disconnect() {
                this.observables = [];
            }
            check() {
                const changedEntries = this.observables.filter((obj => {
                    const currentHeight = obj.el.clientHeight;
                    const currentWidth = obj.el.clientWidth;
                    if (obj.size.height !== currentHeight || obj.size.width !== currentWidth) {
                        obj.size.height = currentHeight;
                        obj.size.width = currentWidth;
                        return true;
                    }
                })).map((obj => obj.el));
                if (changedEntries.length > 0) this.callback(changedEntries);
                window.requestAnimationFrame(this.boundCheck);
            }
        };
        class Pointer {
            constructor(nativePointer) {
                this.id = self.Touch && nativePointer instanceof Touch ? nativePointer.identifier : -1;
                this.pageX = nativePointer.pageX;
                this.pageY = nativePointer.pageY;
                this.clientX = nativePointer.clientX;
                this.clientY = nativePointer.clientY;
            }
        }
        const getDistance = (a, b) => {
            if (!b) return 0;
            return Math.sqrt((b.clientX - a.clientX) ** 2 + (b.clientY - a.clientY) ** 2);
        };
        const getMidpoint = (a, b) => {
            if (!b) return a;
            return {
                clientX: (a.clientX + b.clientX) / 2,
                clientY: (a.clientY + b.clientY) / 2
            };
        };
        const isTouchEvent = event => "changedTouches" in event;
        class PointerTracker {
            constructor(_element, {start = () => true, move = () => {}, end = () => {}} = {}) {
                this._element = _element;
                this.startPointers = [];
                this.currentPointers = [];
                this._pointerStart = event => {
                    if (event.buttons > 0 && 0 !== event.button) return;
                    const pointer = new Pointer(event);
                    if (this.currentPointers.some((p => p.id === pointer.id))) return;
                    if (!this._triggerPointerStart(pointer, event)) return;
                    window.addEventListener("mousemove", this._move);
                    window.addEventListener("mouseup", this._pointerEnd);
                };
                this._touchStart = event => {
                    for (const touch of Array.from(event.changedTouches || [])) this._triggerPointerStart(new Pointer(touch), event);
                };
                this._move = event => {
                    const previousPointers = this.currentPointers.slice();
                    const changedPointers = isTouchEvent(event) ? Array.from(event.changedTouches).map((t => new Pointer(t))) : [ new Pointer(event) ];
                    const trackedChangedPointers = [];
                    for (const pointer of changedPointers) {
                        const index = this.currentPointers.findIndex((p => p.id === pointer.id));
                        if (index < 0) continue;
                        trackedChangedPointers.push(pointer);
                        this.currentPointers[index] = pointer;
                    }
                    this._moveCallback(previousPointers, this.currentPointers.slice(), event);
                };
                this._triggerPointerEnd = (pointer, event) => {
                    const index = this.currentPointers.findIndex((p => p.id === pointer.id));
                    if (index < 0) return false;
                    this.currentPointers.splice(index, 1);
                    this.startPointers.splice(index, 1);
                    this._endCallback(pointer, event);
                    return true;
                };
                this._pointerEnd = event => {
                    if (event.buttons > 0 && 0 !== event.button) return;
                    if (!this._triggerPointerEnd(new Pointer(event), event)) return;
                    window.removeEventListener("mousemove", this._move, {
                        passive: false
                    });
                    window.removeEventListener("mouseup", this._pointerEnd, {
                        passive: false
                    });
                };
                this._touchEnd = event => {
                    for (const touch of Array.from(event.changedTouches || [])) this._triggerPointerEnd(new Pointer(touch), event);
                };
                this._startCallback = start;
                this._moveCallback = move;
                this._endCallback = end;
                this._element.addEventListener("mousedown", this._pointerStart, {
                    passive: false
                });
                this._element.addEventListener("touchstart", this._touchStart, {
                    passive: false
                });
                this._element.addEventListener("touchmove", this._move, {
                    passive: false
                });
                this._element.addEventListener("touchend", this._touchEnd);
                this._element.addEventListener("touchcancel", this._touchEnd);
            }
            stop() {
                this._element.removeEventListener("mousedown", this._pointerStart, {
                    passive: false
                });
                this._element.removeEventListener("touchstart", this._touchStart, {
                    passive: false
                });
                this._element.removeEventListener("touchmove", this._move, {
                    passive: false
                });
                this._element.removeEventListener("touchend", this._touchEnd);
                this._element.removeEventListener("touchcancel", this._touchEnd);
                window.removeEventListener("mousemove", this._move);
                window.removeEventListener("mouseup", this._pointerEnd);
            }
            _triggerPointerStart(pointer, event) {
                if (!this._startCallback(pointer, event)) return false;
                this.currentPointers.push(pointer);
                this.startPointers.push(pointer);
                return true;
            }
        }
        const getTextNodeFromPoint = (element, x, y) => {
            const nodes = element.childNodes;
            const range = document.createRange();
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (node.nodeType !== Node.TEXT_NODE) continue;
                range.selectNodeContents(node);
                const rect = range.getBoundingClientRect();
                if (x >= rect.left && y >= rect.top && x <= rect.right && y <= rect.bottom) return node;
            }
            return false;
        };
        const getFullWidth = elem => Math.max(parseFloat(elem.naturalWidth || 0), parseFloat(elem.width && elem.width.baseVal && elem.width.baseVal.value || 0), parseFloat(elem.offsetWidth || 0), parseFloat(elem.scrollWidth || 0));
        const getFullHeight = elem => Math.max(parseFloat(elem.naturalHeight || 0), parseFloat(elem.height && elem.height.baseVal && elem.height.baseVal.value || 0), parseFloat(elem.offsetHeight || 0), parseFloat(elem.scrollHeight || 0));
        const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
            const ratio = Math.min(maxWidth / srcWidth || 0, maxHeight / srcHeight);
            return {
                width: srcWidth * ratio || 0,
                height: srcHeight * ratio || 0
            };
        };
        const Plugins = {};
        const defaults = {
            touch: true,
            zoom: true,
            pinchToZoom: true,
            panOnlyZoomed: false,
            lockAxis: false,
            friction: .64,
            decelFriction: .88,
            zoomFriction: .74,
            bounceForce: .2,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: .5,
            textSelection: false,
            click: "toggleZoom",
            wheel: "zoom",
            wheelFactor: 42,
            wheelLimit: 5,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging",
            ratio: 1
        };
        class Panzoom extends Base {
            constructor($container, options = {}) {
                super(extend(true, {}, defaults, options));
                this.state = "init";
                this.$container = $container;
                for (const methodName of [ "onLoad", "onWheel", "onClick" ]) this[methodName] = this[methodName].bind(this);
                this.initLayout();
                this.resetValues();
                this.attachPlugins(Panzoom.Plugins);
                this.trigger("init");
                this.updateMetrics();
                this.attachEvents();
                this.trigger("ready");
                if (false === this.option("centerOnStart")) this.state = "ready"; else this.panTo({
                    friction: 0
                });
                $container.__Panzoom = this;
            }
            initLayout() {
                const $container = this.$container;
                if (!($container instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
                const $content = this.option("content") || $container.querySelector(".panzoom__content");
                if (!$content) throw new Error("Panzoom: Content not found");
                this.$content = $content;
                let $viewport = this.option("viewport") || $container.querySelector(".panzoom__viewport");
                if (!$viewport && false !== this.option("wrapInner")) {
                    $viewport = document.createElement("div");
                    $viewport.classList.add("panzoom__viewport");
                    $viewport.append(...$container.childNodes);
                    $container.appendChild($viewport);
                }
                this.$viewport = $viewport || $content.parentNode;
            }
            resetValues() {
                this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24);
                this.container = {
                    width: 0,
                    height: 0
                };
                this.viewport = {
                    width: 0,
                    height: 0
                };
                this.content = {
                    origWidth: 0,
                    origHeight: 0,
                    width: 0,
                    height: 0,
                    x: this.option("x", 0),
                    y: this.option("y", 0),
                    scale: this.option("baseScale")
                };
                this.transform = {
                    x: 0,
                    y: 0,
                    scale: 1
                };
                this.resetDragPosition();
            }
            onLoad(event) {
                this.updateMetrics();
                this.panTo({
                    scale: this.option("baseScale"),
                    friction: 0
                });
                this.trigger("load", event);
            }
            onClick(event) {
                if (event.defaultPrevented) return;
                if (this.option("textSelection") && window.getSelection().toString().length) {
                    event.stopPropagation();
                    return;
                }
                const rect = this.$content.getClientRects()[0];
                if ("ready" !== this.state) if (this.dragPosition.midPoint || Math.abs(rect.top - this.dragStart.rect.top) > 1 || Math.abs(rect.left - this.dragStart.rect.left) > 1) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }
                if (false === this.trigger("click", event)) return;
                if (this.option("zoom") && "toggleZoom" === this.option("click")) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.zoomWithClick(event);
                }
            }
            onWheel(event) {
                if (false === this.trigger("wheel", event)) return;
                if (this.option("zoom") && this.option("wheel")) this.zoomWithWheel(event);
            }
            zoomWithWheel(event) {
                if (void 0 === this.changedDelta) this.changedDelta = 0;
                const delta = Math.max(-1, Math.min(1, -event.deltaY || -event.deltaX || event.wheelDelta || -event.detail));
                const scale = this.content.scale;
                let newScale = scale * (100 + delta * this.option("wheelFactor")) / 100;
                if (delta < 0 && Math.abs(scale - this.option("minScale")) < .01 || delta > 0 && Math.abs(scale - this.option("maxScale")) < .01) {
                    this.changedDelta += Math.abs(delta);
                    newScale = scale;
                } else {
                    this.changedDelta = 0;
                    newScale = Math.max(Math.min(newScale, this.option("maxScale")), this.option("minScale"));
                }
                if (this.changedDelta > this.option("wheelLimit")) return;
                event.preventDefault();
                if (newScale === scale) return;
                const rect = this.$content.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                this.zoomTo(newScale, {
                    x,
                    y
                });
            }
            zoomWithClick(event) {
                const rect = this.$content.getClientRects()[0];
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                this.toggleZoom({
                    x,
                    y
                });
            }
            attachEvents() {
                this.$content.addEventListener("load", this.onLoad);
                this.$container.addEventListener("wheel", this.onWheel, {
                    passive: false
                });
                this.$container.addEventListener("click", this.onClick, {
                    passive: false
                });
                this.initObserver();
                const pointerTracker = new PointerTracker(this.$container, {
                    start: (pointer, event) => {
                        if (!this.option("touch")) return false;
                        if (this.velocity.scale < 0) return false;
                        const target = event.composedPath()[0];
                        if (!pointerTracker.currentPointers.length) {
                            const ignoreClickedElement = -1 !== [ "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(target.nodeName);
                            if (ignoreClickedElement) return false;
                            if (this.option("textSelection") && getTextNodeFromPoint(target, pointer.clientX, pointer.clientY)) return false;
                        }
                        if (isScrollable(target)) return false;
                        if (false === this.trigger("touchStart", event)) return false;
                        if ("mousedown" === event.type) event.preventDefault();
                        this.state = "pointerdown";
                        this.resetDragPosition();
                        this.dragPosition.midPoint = null;
                        this.dragPosition.time = Date.now();
                        return true;
                    },
                    move: (previousPointers, currentPointers, event) => {
                        if ("pointerdown" !== this.state) return;
                        if (false === this.trigger("touchMove", event)) {
                            event.preventDefault();
                            return;
                        }
                        if (currentPointers.length < 2 && true === this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) return;
                        if (currentPointers.length > 1 && (!this.option("zoom") || false === this.option("pinchToZoom"))) return;
                        const prevMidpoint = getMidpoint(previousPointers[0], previousPointers[1]);
                        const newMidpoint = getMidpoint(currentPointers[0], currentPointers[1]);
                        const panX = newMidpoint.clientX - prevMidpoint.clientX;
                        const panY = newMidpoint.clientY - prevMidpoint.clientY;
                        const prevDistance = getDistance(previousPointers[0], previousPointers[1]);
                        const newDistance = getDistance(currentPointers[0], currentPointers[1]);
                        const scaleDiff = prevDistance && newDistance ? newDistance / prevDistance : 1;
                        this.dragOffset.x += panX;
                        this.dragOffset.y += panY;
                        this.dragOffset.scale *= scaleDiff;
                        this.dragOffset.time = Date.now() - this.dragPosition.time;
                        const axisToLock = 1 === this.dragStart.scale && this.option("lockAxis");
                        if (axisToLock && !this.lockAxis) {
                            if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) {
                                event.preventDefault();
                                return;
                            }
                            const angle = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                            this.lockAxis = angle > 45 && angle < 135 ? "y" : "x";
                        }
                        if ("xy" !== axisToLock && "y" === this.lockAxis) return;
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                        if (this.lockAxis) this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0;
                        this.$container.classList.add(this.option("draggingClass"));
                        if (!(this.transform.scale === this.option("baseScale") && "y" === this.lockAxis)) this.dragPosition.x = this.dragStart.x + this.dragOffset.x;
                        if (!(this.transform.scale === this.option("baseScale") && "x" === this.lockAxis)) this.dragPosition.y = this.dragStart.y + this.dragOffset.y;
                        this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale;
                        if (currentPointers.length > 1) {
                            const startPoint = getMidpoint(pointerTracker.startPointers[0], pointerTracker.startPointers[1]);
                            const xPos = startPoint.clientX - this.dragStart.rect.x;
                            const yPos = startPoint.clientY - this.dragStart.rect.y;
                            const {deltaX, deltaY} = this.getZoomDelta(this.content.scale * this.dragOffset.scale, xPos, yPos);
                            this.dragPosition.x -= deltaX;
                            this.dragPosition.y -= deltaY;
                            this.dragPosition.midPoint = newMidpoint;
                        } else this.setDragResistance();
                        this.transform = {
                            x: this.dragPosition.x,
                            y: this.dragPosition.y,
                            scale: this.dragPosition.scale
                        };
                        this.startAnimation();
                    },
                    end: (pointer, event) => {
                        if ("pointerdown" !== this.state) return;
                        this._dragOffset = {
                            ...this.dragOffset
                        };
                        if (pointerTracker.currentPointers.length) {
                            this.resetDragPosition();
                            return;
                        }
                        this.state = "decel";
                        this.friction = this.option("decelFriction");
                        this.recalculateTransform();
                        this.$container.classList.remove(this.option("draggingClass"));
                        if (false === this.trigger("touchEnd", event)) return;
                        if ("decel" !== this.state) return;
                        const minScale = this.option("minScale");
                        if (this.transform.scale < minScale) {
                            this.zoomTo(minScale, {
                                friction: .64
                            });
                            return;
                        }
                        const maxScale = this.option("maxScale");
                        if (this.transform.scale - maxScale > .01) {
                            const last = this.dragPosition.midPoint || pointer;
                            const rect = this.$content.getClientRects()[0];
                            this.zoomTo(maxScale, {
                                friction: .64,
                                x: last.clientX - rect.left,
                                y: last.clientY - rect.top
                            });
                            return;
                        }
                    }
                });
                this.pointerTracker = pointerTracker;
            }
            initObserver() {
                if (this.resizeObserver) return;
                this.resizeObserver = new ResizeObserver((() => {
                    if (this.updateTimer) return;
                    this.updateTimer = setTimeout((() => {
                        const rect = this.$container.getBoundingClientRect();
                        if (!(rect.width && rect.height)) {
                            this.updateTimer = null;
                            return;
                        }
                        if (Math.abs(rect.width - this.container.width) > 1 || Math.abs(rect.height - this.container.height) > 1) {
                            if (this.isAnimating()) this.endAnimation(true);
                            this.updateMetrics();
                            this.panTo({
                                x: this.content.x,
                                y: this.content.y,
                                scale: this.option("baseScale"),
                                friction: 0
                            });
                        }
                        this.updateTimer = null;
                    }), this.updateRate);
                }));
                this.resizeObserver.observe(this.$container);
            }
            resetDragPosition() {
                this.lockAxis = null;
                this.friction = this.option("friction");
                this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                };
                const {x, y, scale} = this.content;
                this.dragStart = {
                    rect: this.$content.getBoundingClientRect(),
                    x,
                    y,
                    scale
                };
                this.dragPosition = {
                    ...this.dragPosition,
                    x,
                    y,
                    scale
                };
                this.dragOffset = {
                    x: 0,
                    y: 0,
                    scale: 1,
                    time: 0
                };
            }
            updateMetrics(silently) {
                if (true !== silently) this.trigger("beforeUpdate");
                const $container = this.$container;
                const $content = this.$content;
                const $viewport = this.$viewport;
                const contentIsImage = $content instanceof HTMLImageElement;
                const contentIsZoomable = this.option("zoom");
                const shouldResizeParent = this.option("resizeParent", contentIsZoomable);
                let width = this.option("width");
                let height = this.option("height");
                let origWidth = width || getFullWidth($content);
                let origHeight = height || getFullHeight($content);
                Object.assign($content.style, {
                    width: width ? `${width}px` : "",
                    height: height ? `${height}px` : "",
                    maxWidth: "",
                    maxHeight: ""
                });
                if (shouldResizeParent) Object.assign($viewport.style, {
                    width: "",
                    height: ""
                });
                const ratio = this.option("ratio");
                origWidth = round(origWidth * ratio);
                origHeight = round(origHeight * ratio);
                width = origWidth;
                height = origHeight;
                const contentRect = $content.getBoundingClientRect();
                const viewportRect = $viewport.getBoundingClientRect();
                const containerRect = $viewport == $container ? viewportRect : $container.getBoundingClientRect();
                let viewportWidth = Math.max($viewport.offsetWidth, round(viewportRect.width));
                let viewportHeight = Math.max($viewport.offsetHeight, round(viewportRect.height));
                let viewportStyles = window.getComputedStyle($viewport);
                viewportWidth -= parseFloat(viewportStyles.paddingLeft) + parseFloat(viewportStyles.paddingRight);
                viewportHeight -= parseFloat(viewportStyles.paddingTop) + parseFloat(viewportStyles.paddingBottom);
                this.viewport.width = viewportWidth;
                this.viewport.height = viewportHeight;
                if (contentIsZoomable) {
                    if (Math.abs(origWidth - contentRect.width) > .1 || Math.abs(origHeight - contentRect.height) > .1) {
                        const rez = calculateAspectRatioFit(origWidth, origHeight, Math.min(origWidth, contentRect.width), Math.min(origHeight, contentRect.height));
                        width = round(rez.width);
                        height = round(rez.height);
                    }
                    Object.assign($content.style, {
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: ""
                    });
                }
                if (shouldResizeParent) {
                    Object.assign($viewport.style, {
                        width: `${width}px`,
                        height: `${height}px`
                    });
                    this.viewport = {
                        ...this.viewport,
                        width,
                        height
                    };
                }
                if (contentIsImage && contentIsZoomable && "function" !== typeof this.options.maxScale) {
                    const maxScale = this.option("maxScale");
                    this.options.maxScale = function() {
                        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : maxScale;
                    };
                }
                this.content = {
                    ...this.content,
                    origWidth,
                    origHeight,
                    fitWidth: width,
                    fitHeight: height,
                    width,
                    height,
                    scale: 1,
                    isZoomable: contentIsZoomable
                };
                this.container = {
                    width: containerRect.width,
                    height: containerRect.height
                };
                if (true !== silently) this.trigger("afterUpdate");
            }
            zoomIn(step) {
                this.zoomTo(this.content.scale + (step || this.option("step")));
            }
            zoomOut(step) {
                this.zoomTo(this.content.scale - (step || this.option("step")));
            }
            toggleZoom(props = {}) {
                const maxScale = this.option("maxScale");
                const baseScale = this.option("baseScale");
                const scale = this.content.scale > baseScale + .5 * (maxScale - baseScale) ? baseScale : maxScale;
                this.zoomTo(scale, props);
            }
            zoomTo(scale = this.option("baseScale"), {x = null, y = null} = {}) {
                scale = Math.max(Math.min(scale, this.option("maxScale")), this.option("minScale"));
                const currentScale = round(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
                if (null === x) x = this.content.width * currentScale * .5;
                if (null === y) y = this.content.height * currentScale * .5;
                const {deltaX, deltaY} = this.getZoomDelta(scale, x, y);
                x = this.content.x - deltaX;
                y = this.content.y - deltaY;
                this.panTo({
                    x,
                    y,
                    scale,
                    friction: this.option("zoomFriction")
                });
            }
            getZoomDelta(scale, x = 0, y = 0) {
                const currentWidth = this.content.fitWidth * this.content.scale;
                const currentHeight = this.content.fitHeight * this.content.scale;
                const percentXInCurrentBox = x > 0 && currentWidth ? x / currentWidth : 0;
                const percentYInCurrentBox = y > 0 && currentHeight ? y / currentHeight : 0;
                const nextWidth = this.content.fitWidth * scale;
                const nextHeight = this.content.fitHeight * scale;
                const deltaX = (nextWidth - currentWidth) * percentXInCurrentBox;
                const deltaY = (nextHeight - currentHeight) * percentYInCurrentBox;
                return {
                    deltaX,
                    deltaY
                };
            }
            panTo({x = this.content.x, y = this.content.y, scale, friction = this.option("friction"), ignoreBounds = false} = {}) {
                scale = scale || this.content.scale || 1;
                if (!ignoreBounds) {
                    const {boundX, boundY} = this.getBounds(scale);
                    if (boundX) x = Math.max(Math.min(x, boundX.to), boundX.from);
                    if (boundY) y = Math.max(Math.min(y, boundY.to), boundY.from);
                }
                this.friction = friction;
                this.transform = {
                    ...this.transform,
                    x,
                    y,
                    scale
                };
                if (friction) {
                    this.state = "panning";
                    this.velocity = {
                        x: (1 / this.friction - 1) * (x - this.content.x),
                        y: (1 / this.friction - 1) * (y - this.content.y),
                        scale: (1 / this.friction - 1) * (scale - this.content.scale)
                    };
                    this.startAnimation();
                } else this.endAnimation();
            }
            startAnimation() {
                if (!this.rAF) this.trigger("startAnimation"); else cancelAnimationFrame(this.rAF);
                this.rAF = requestAnimationFrame((() => this.animate()));
            }
            animate() {
                this.setEdgeForce();
                this.setDragForce();
                this.velocity.x *= this.friction;
                this.velocity.y *= this.friction;
                this.velocity.scale *= this.friction;
                this.content.x += this.velocity.x;
                this.content.y += this.velocity.y;
                this.content.scale += this.velocity.scale;
                if (this.isAnimating()) this.setTransform(); else if ("pointerdown" !== this.state) {
                    this.endAnimation();
                    return;
                }
                this.rAF = requestAnimationFrame((() => this.animate()));
            }
            getBounds(scale) {
                let boundX = this.boundX;
                let boundY = this.boundY;
                if (void 0 !== boundX && void 0 !== boundY) return {
                    boundX,
                    boundY
                };
                boundX = {
                    from: 0,
                    to: 0
                };
                boundY = {
                    from: 0,
                    to: 0
                };
                scale = scale || this.transform.scale;
                const width = this.content.fitWidth * scale;
                const height = this.content.fitHeight * scale;
                const viewportWidth = this.viewport.width;
                const viewportHeight = this.viewport.height;
                if (width < viewportWidth) {
                    const deltaX = round(.5 * (viewportWidth - width));
                    boundX.from = deltaX;
                    boundX.to = deltaX;
                } else boundX.from = round(viewportWidth - width);
                if (height < viewportHeight) {
                    const deltaY = .5 * (viewportHeight - height);
                    boundY.from = deltaY;
                    boundY.to = deltaY;
                } else boundY.from = round(viewportHeight - height);
                return {
                    boundX,
                    boundY
                };
            }
            setEdgeForce() {
                if ("decel" !== this.state) return;
                const bounceForce = this.option("bounceForce");
                const {boundX, boundY} = this.getBounds(Math.max(this.transform.scale, this.content.scale));
                let pastLeft, pastRight, pastTop, pastBottom;
                if (boundX) {
                    pastLeft = this.content.x < boundX.from;
                    pastRight = this.content.x > boundX.to;
                }
                if (boundY) {
                    pastTop = this.content.y < boundY.from;
                    pastBottom = this.content.y > boundY.to;
                }
                if (pastLeft || pastRight) {
                    const bound = pastLeft ? boundX.from : boundX.to;
                    const distance = bound - this.content.x;
                    let force = distance * bounceForce;
                    const restX = this.content.x + (this.velocity.x + force) / this.friction;
                    if (restX >= boundX.from && restX <= boundX.to) force += this.velocity.x;
                    this.velocity.x = force;
                    this.recalculateTransform();
                }
                if (pastTop || pastBottom) {
                    const bound = pastTop ? boundY.from : boundY.to;
                    const distance = bound - this.content.y;
                    let force = distance * bounceForce;
                    const restY = this.content.y + (force + this.velocity.y) / this.friction;
                    if (restY >= boundY.from && restY <= boundY.to) force += this.velocity.y;
                    this.velocity.y = force;
                    this.recalculateTransform();
                }
            }
            setDragResistance() {
                if ("pointerdown" !== this.state) return;
                const {boundX, boundY} = this.getBounds(this.dragPosition.scale);
                let pastLeft, pastRight, pastTop, pastBottom;
                if (boundX) {
                    pastLeft = this.dragPosition.x < boundX.from;
                    pastRight = this.dragPosition.x > boundX.to;
                }
                if (boundY) {
                    pastTop = this.dragPosition.y < boundY.from;
                    pastBottom = this.dragPosition.y > boundY.to;
                }
                if ((pastLeft || pastRight) && !(pastLeft && pastRight)) {
                    const bound = pastLeft ? boundX.from : boundX.to;
                    const distance = bound - this.dragPosition.x;
                    this.dragPosition.x = bound - .3 * distance;
                }
                if ((pastTop || pastBottom) && !(pastTop && pastBottom)) {
                    const bound = pastTop ? boundY.from : boundY.to;
                    const distance = bound - this.dragPosition.y;
                    this.dragPosition.y = bound - .3 * distance;
                }
            }
            setDragForce() {
                if ("pointerdown" === this.state) {
                    this.velocity.x = this.dragPosition.x - this.content.x;
                    this.velocity.y = this.dragPosition.y - this.content.y;
                    this.velocity.scale = this.dragPosition.scale - this.content.scale;
                }
            }
            recalculateTransform() {
                this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1);
                this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1);
                this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
            }
            isAnimating() {
                return !!(this.friction && (Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
            }
            setTransform(final) {
                let x, y, scale;
                if (final) {
                    x = round(this.transform.x);
                    y = round(this.transform.y);
                    scale = this.transform.scale;
                    this.content = {
                        ...this.content,
                        x,
                        y,
                        scale
                    };
                } else {
                    x = round(this.content.x);
                    y = round(this.content.y);
                    scale = this.content.scale / (this.content.width / this.content.fitWidth);
                    this.content = {
                        ...this.content,
                        x,
                        y
                    };
                }
                this.trigger("beforeTransform");
                x = round(this.content.x);
                y = round(this.content.y);
                if (final && this.option("zoom")) {
                    let width;
                    let height;
                    width = round(this.content.fitWidth * scale);
                    height = round(this.content.fitHeight * scale);
                    this.content.width = width;
                    this.content.height = height;
                    this.transform = {
                        ...this.transform,
                        width,
                        height,
                        scale
                    };
                    Object.assign(this.$content.style, {
                        width: `${width}px`,
                        height: `${height}px`,
                        maxWidth: "none",
                        maxHeight: "none",
                        transform: `translate3d(${x}px, ${y}px, 0) scale(1)`
                    });
                } else this.$content.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
                this.trigger("afterTransform");
            }
            endAnimation(silently) {
                cancelAnimationFrame(this.rAF);
                this.rAF = null;
                this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                };
                this.setTransform(true);
                this.state = "ready";
                this.handleCursor();
                if (true !== silently) this.trigger("endAnimation");
            }
            handleCursor() {
                const draggableClass = this.option("draggableClass");
                if (!draggableClass || !this.option("touch")) return;
                if (true == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) this.$container.classList.remove(draggableClass); else this.$container.classList.add(draggableClass);
            }
            detachEvents() {
                this.$content.removeEventListener("load", this.onLoad);
                this.$container.removeEventListener("wheel", this.onWheel, {
                    passive: false
                });
                this.$container.removeEventListener("click", this.onClick, {
                    passive: false
                });
                if (this.pointerTracker) {
                    this.pointerTracker.stop();
                    this.pointerTracker = null;
                }
                if (this.resizeObserver) {
                    this.resizeObserver.disconnect();
                    this.resizeObserver = null;
                }
            }
            destroy() {
                if ("destroy" === this.state) return;
                this.state = "destroy";
                clearTimeout(this.updateTimer);
                this.updateTimer = null;
                cancelAnimationFrame(this.rAF);
                this.rAF = null;
                this.detachEvents();
                this.detachPlugins();
                this.resetDragPosition();
            }
        }
        Panzoom.version = "__VERSION__";
        Panzoom.Plugins = Plugins;
        const throttle = (func, limit) => {
            let lastCall = 0;
            return function(...args) {
                const now = (new Date).getTime();
                if (now - lastCall < limit) return;
                lastCall = now;
                return func(...args);
            };
        };
        const Navigation_defaults = {
            prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
            nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
            classNames: {
                main: "carousel__nav",
                button: "carousel__button",
                next: "is-next",
                prev: "is-prev"
            }
        };
        class Navigation {
            constructor(carousel) {
                this.$container = null;
                this.$prev = null;
                this.$next = null;
                this.carousel = carousel;
                this.onRefresh = this.onRefresh.bind(this);
            }
            option(name) {
                return this.carousel.option(`Navigation.${name}`);
            }
            createButton(type) {
                const $btn = document.createElement("button");
                $btn.setAttribute("title", this.carousel.localize(`{{${type.toUpperCase()}}}`));
                const classNames = this.option("classNames.button") + " " + this.option(`classNames.${type}`);
                $btn.classList.add(...classNames.split(" "));
                $btn.setAttribute("tabindex", "0");
                $btn.innerHTML = this.carousel.localize(this.option(`${type}Tpl`));
                $btn.addEventListener("click", (event => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.carousel[`slide${"next" === type ? "Next" : "Prev"}`]();
                }));
                return $btn;
            }
            build() {
                if (!this.$container) {
                    this.$container = document.createElement("div");
                    this.$container.classList.add(...this.option("classNames.main").split(" "));
                    this.carousel.$container.appendChild(this.$container);
                }
                if (!this.$next) {
                    this.$next = this.createButton("next");
                    this.$container.appendChild(this.$next);
                }
                if (!this.$prev) {
                    this.$prev = this.createButton("prev");
                    this.$container.appendChild(this.$prev);
                }
            }
            onRefresh() {
                const pageCount = this.carousel.pages.length;
                if (pageCount <= 1 || pageCount > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage"))) {
                    this.cleanup();
                    return;
                }
                this.build();
                this.$prev.removeAttribute("disabled");
                this.$next.removeAttribute("disabled");
                if (this.carousel.option("infiniteX", this.carousel.option("infinite"))) return;
                if (this.carousel.page <= 0) this.$prev.setAttribute("disabled", "");
                if (this.carousel.page >= pageCount - 1) this.$next.setAttribute("disabled", "");
            }
            cleanup() {
                if (this.$prev) this.$prev.remove();
                this.$prev = null;
                if (this.$next) this.$next.remove();
                this.$next = null;
                if (this.$container) this.$container.remove();
                this.$container = null;
            }
            attach() {
                this.carousel.on("refresh change", this.onRefresh);
            }
            detach() {
                this.carousel.off("refresh change", this.onRefresh);
                this.cleanup();
            }
        }
        Navigation.defaults = Navigation_defaults;
        class Dots {
            constructor(carousel) {
                this.carousel = carousel;
                this.$list = null;
                this.events = {
                    change: this.onChange.bind(this),
                    refresh: this.onRefresh.bind(this)
                };
            }
            buildList() {
                if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
                const $list = document.createElement("ol");
                $list.classList.add("carousel__dots");
                $list.addEventListener("click", (e => {
                    if (!("page" in e.target.dataset)) return;
                    e.preventDefault();
                    e.stopPropagation();
                    const page = parseInt(e.target.dataset.page, 10);
                    const carousel = this.carousel;
                    if (page === carousel.page) return;
                    if (carousel.pages.length < 3 && carousel.option("infinite")) carousel[0 == page ? "slidePrev" : "slideNext"](); else carousel.slideTo(page);
                }));
                this.$list = $list;
                this.carousel.$container.appendChild($list);
                this.carousel.$container.classList.add("has-dots");
                return $list;
            }
            removeList() {
                if (this.$list) {
                    this.$list.parentNode.removeChild(this.$list);
                    this.$list = null;
                }
                this.carousel.$container.classList.remove("has-dots");
            }
            rebuildDots() {
                let $list = this.$list;
                const listExists = !!$list;
                const pagesCount = this.carousel.pages.length;
                if (pagesCount < 2) {
                    if (listExists) this.removeList();
                    return;
                }
                if (!listExists) $list = this.buildList();
                const dotCount = this.$list.children.length;
                if (dotCount > pagesCount) {
                    for (let i = pagesCount; i < dotCount; i++) this.$list.removeChild(this.$list.lastChild);
                    return;
                }
                for (let index = dotCount; index < pagesCount; index++) {
                    const $dot = document.createElement("li");
                    $dot.classList.add("carousel__dot");
                    $dot.dataset.page = index;
                    $dot.setAttribute("role", "button");
                    $dot.setAttribute("tabindex", "0");
                    $dot.setAttribute("title", this.carousel.localize("{{GOTO}}", [ [ "%d", index + 1 ] ]));
                    $dot.addEventListener("keydown", (event => {
                        const code = event.code;
                        let $el;
                        if ("Enter" === code || "NumpadEnter" === code) $el = $dot; else if ("ArrowRight" === code) $el = $dot.nextSibling; else if ("ArrowLeft" === code) $el = $dot.previousSibling;
                        $el && $el.click();
                    }));
                    this.$list.appendChild($dot);
                }
                this.setActiveDot();
            }
            setActiveDot() {
                if (!this.$list) return;
                this.$list.childNodes.forEach(($dot => {
                    $dot.classList.remove("is-selected");
                }));
                const $activeDot = this.$list.childNodes[this.carousel.page];
                if ($activeDot) $activeDot.classList.add("is-selected");
            }
            onChange() {
                this.setActiveDot();
            }
            onRefresh() {
                this.rebuildDots();
            }
            attach() {
                this.carousel.on(this.events);
            }
            detach() {
                this.removeList();
                this.carousel.off(this.events);
                this.carousel = null;
            }
        }
        const Sync_defaults = {
            friction: .92
        };
        class Sync {
            constructor(carousel) {
                this.carousel = carousel;
                this.selectedIndex = null;
                this.friction = 0;
                this.onNavReady = this.onNavReady.bind(this);
                this.onNavClick = this.onNavClick.bind(this);
                this.onNavCreateSlide = this.onNavCreateSlide.bind(this);
                this.onTargetChange = this.onTargetChange.bind(this);
            }
            addAsTargetFor(nav) {
                this.target = this.carousel;
                this.nav = nav;
                this.attachEvents();
            }
            addAsNavFor(target) {
                this.target = target;
                this.nav = this.carousel;
                this.attachEvents();
            }
            attachEvents() {
                this.nav.options.initialSlide = this.target.options.initialPage;
                this.nav.on("ready", this.onNavReady);
                this.nav.on("createSlide", this.onNavCreateSlide);
                this.nav.on("Panzoom.click", this.onNavClick);
                this.target.on("change", this.onTargetChange);
                this.target.on("Panzoom.afterUpdate", this.onTargetChange);
            }
            onNavReady() {
                this.onTargetChange(true);
            }
            onNavClick(carousel, panzoom, event) {
                const clickedNavSlide = event.target.closest(".carousel__slide");
                if (!clickedNavSlide) return;
                event.stopPropagation();
                const selectedNavIndex = parseInt(clickedNavSlide.dataset.index, 10);
                const selectedSyncPage = this.target.findPageForSlide(selectedNavIndex);
                if (this.target.page !== selectedSyncPage) this.target.slideTo(selectedSyncPage, {
                    friction: this.friction
                });
                this.markSelectedSlide(selectedNavIndex);
            }
            onNavCreateSlide(carousel, slide) {
                if (slide.index === this.selectedIndex) this.markSelectedSlide(slide.index);
            }
            onTargetChange() {
                const targetIndex = this.target.pages[this.target.page].indexes[0];
                const selectedNavPage = this.nav.findPageForSlide(targetIndex);
                this.nav.slideTo(selectedNavPage);
                this.markSelectedSlide(targetIndex);
            }
            markSelectedSlide(selectedIndex) {
                this.selectedIndex = selectedIndex;
                [ ...this.nav.slides ].filter((slide => slide.$el && slide.$el.classList.remove("is-nav-selected")));
                const slide = this.nav.slides[selectedIndex];
                if (slide && slide.$el) slide.$el.classList.add("is-nav-selected");
            }
            attach(carousel) {
                const sync = carousel.options.Sync;
                if (!sync.target && !sync.nav) return;
                if (sync.target) this.addAsNavFor(sync.target); else if (sync.nav) this.addAsTargetFor(sync.nav);
                this.friction = sync.friction;
            }
            detach() {
                if (this.nav) {
                    this.nav.off("ready", this.onNavReady);
                    this.nav.off("Panzoom.click", this.onNavClick);
                    this.nav.off("createSlide", this.onNavCreateSlide);
                }
                if (this.target) {
                    this.target.off("Panzoom.afterUpdate", this.onTargetChange);
                    this.target.off("change", this.onTargetChange);
                }
            }
        }
        Sync.defaults = Sync_defaults;
        const plugins_Plugins = {
            Navigation,
            Dots,
            Sync
        };
        const en = {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d"
        };
        const Carousel_defaults = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: null,
            initialSlide: null,
            friction: .92,
            center: true,
            infinite: true,
            fill: true,
            dragFree: false,
            prefix: "",
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected"
            },
            l10n: en
        };
        class Carousel extends Base {
            constructor($container, options = {}) {
                options = extend(true, {}, Carousel_defaults, options);
                super(options);
                this.state = "init";
                this.$container = $container;
                if (!(this.$container instanceof HTMLElement)) throw new Error("No root element provided");
                this.slideNext = throttle(this.slideNext.bind(this), 250, true);
                this.slidePrev = throttle(this.slidePrev.bind(this), 250, true);
                this.init();
                $container.__Carousel = this;
            }
            init() {
                this.pages = [];
                this.page = this.pageIndex = null;
                this.prevPage = this.prevPageIndex = null;
                this.attachPlugins(Carousel.Plugins);
                this.trigger("init");
                this.initLayout();
                this.initSlides();
                this.updateMetrics();
                if (this.$track && this.pages.length) this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`;
                this.manageSlideVisiblity();
                this.initPanzoom();
                this.state = "ready";
                this.trigger("ready");
            }
            initLayout() {
                const prefix = this.option("prefix");
                const classNames = this.option("classNames");
                this.$viewport = this.option("viewport") || this.$container.querySelector(`.${prefix}${classNames.viewport}`);
                if (!this.$viewport) {
                    this.$viewport = document.createElement("div");
                    this.$viewport.classList.add(...(prefix + classNames.viewport).split(" "));
                    this.$viewport.append(...this.$container.childNodes);
                    this.$container.appendChild(this.$viewport);
                }
                this.$track = this.option("track") || this.$container.querySelector(`.${prefix}${classNames.track}`);
                if (!this.$track) {
                    this.$track = document.createElement("div");
                    this.$track.classList.add(...(prefix + classNames.track).split(" "));
                    this.$track.append(...this.$viewport.childNodes);
                    this.$viewport.appendChild(this.$track);
                }
            }
            initSlides() {
                this.slides = [];
                const elems = this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`);
                elems.forEach((el => {
                    const slide = {
                        $el: el,
                        isDom: true
                    };
                    this.slides.push(slide);
                    this.trigger("createSlide", slide, this.slides.length);
                }));
                if (Array.isArray(this.options.slides)) this.slides = extend(true, [ ...this.slides ], this.options.slides);
            }
            updateMetrics() {
                let contentWidth = 0;
                let indexes = [];
                let lastSlideWidth;
                this.slides.forEach(((slide, index) => {
                    const $el = slide.$el;
                    const slideWidth = slide.isDom || !lastSlideWidth ? this.getSlideMetrics($el) : lastSlideWidth;
                    slide.index = index;
                    slide.width = slideWidth;
                    slide.left = contentWidth;
                    lastSlideWidth = slideWidth;
                    contentWidth += slideWidth;
                    indexes.push(index);
                }));
                let viewportWidth = Math.max(this.$track.offsetWidth, round(this.$track.getBoundingClientRect().width));
                let viewportStyles = getComputedStyle(this.$track);
                viewportWidth -= parseFloat(viewportStyles.paddingLeft) + parseFloat(viewportStyles.paddingRight);
                this.contentWidth = contentWidth;
                this.viewportWidth = viewportWidth;
                const pages = [];
                const slidesPerPage = this.option("slidesPerPage");
                if (Number.isInteger(slidesPerPage) && contentWidth > viewportWidth) for (let i = 0; i < this.slides.length; i += slidesPerPage) pages.push({
                    indexes: indexes.slice(i, i + slidesPerPage),
                    slides: this.slides.slice(i, i + slidesPerPage)
                }); else {
                    let currentPage = 0;
                    let currentWidth = 0;
                    for (let i = 0; i < this.slides.length; i += 1) {
                        let slide = this.slides[i];
                        if (!pages.length || currentWidth + slide.width > viewportWidth) {
                            pages.push({
                                indexes: [],
                                slides: []
                            });
                            currentPage = pages.length - 1;
                            currentWidth = 0;
                        }
                        currentWidth += slide.width;
                        pages[currentPage].indexes.push(i);
                        pages[currentPage].slides.push(slide);
                    }
                }
                const shouldCenter = this.option("center");
                const shouldFill = this.option("fill");
                pages.forEach(((page, index) => {
                    page.index = index;
                    page.width = page.slides.reduce(((sum, slide) => sum + slide.width), 0);
                    page.left = page.slides[0].left;
                    if (shouldCenter) page.left += .5 * (viewportWidth - page.width) * -1;
                    if (shouldFill && !this.option("infiniteX", this.option("infinite")) && contentWidth > viewportWidth) {
                        page.left = Math.max(page.left, 0);
                        page.left = Math.min(page.left, contentWidth - viewportWidth);
                    }
                }));
                const rez = [];
                let prevPage;
                pages.forEach((page2 => {
                    const page = {
                        ...page2
                    };
                    if (prevPage && page.left === prevPage.left) {
                        prevPage.width += page.width;
                        prevPage.slides = [ ...prevPage.slides, ...page.slides ];
                        prevPage.indexes = [ ...prevPage.indexes, ...page.indexes ];
                    } else {
                        page.index = rez.length;
                        prevPage = page;
                        rez.push(page);
                    }
                }));
                this.pages = rez;
                let page = this.page;
                if (null === page) {
                    const initialSlide = this.option("initialSlide");
                    if (null !== initialSlide) page = this.findPageForSlide(initialSlide); else page = parseInt(this.option("initialPage", 0), 10) || 0;
                    if (!rez[page]) page = rez.length && page > rez.length ? rez[rez.length - 1].index : 0;
                    this.page = page;
                    this.pageIndex = page;
                }
                this.updatePanzoom();
                this.trigger("refresh");
            }
            getSlideMetrics(node) {
                if (!node) {
                    const firstSlide = this.slides[0];
                    node = document.createElement("div");
                    node.dataset.isTestEl = 1;
                    node.style.visibility = "hidden";
                    node.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" "));
                    if (firstSlide.customClass) node.classList.add(...firstSlide.customClass.split(" "));
                    this.$track.prepend(node);
                }
                let width = Math.max(node.offsetWidth, round(node.getBoundingClientRect().width));
                const style = node.currentStyle || window.getComputedStyle(node);
                width = width + (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
                if (node.dataset.isTestEl) node.remove();
                return width;
            }
            findPageForSlide(index) {
                index = parseInt(index, 10) || 0;
                const page = this.pages.find((page => page.indexes.indexOf(index) > -1));
                return page ? page.index : null;
            }
            slideNext() {
                this.slideTo(this.pageIndex + 1);
            }
            slidePrev() {
                this.slideTo(this.pageIndex - 1);
            }
            slideTo(page, params = {}) {
                const {x = -1 * this.setPage(page, true), y = 0, friction = this.option("friction")} = params;
                if (this.Panzoom.content.x === x && !this.Panzoom.velocity.x && friction) return;
                this.Panzoom.panTo({
                    x,
                    y,
                    friction,
                    ignoreBounds: true
                });
                if ("ready" === this.state && "ready" === this.Panzoom.state) this.trigger("settle");
            }
            initPanzoom() {
                if (this.Panzoom) this.Panzoom.destroy();
                const options = extend(true, {}, {
                    content: this.$track,
                    wrapInner: false,
                    resizeParent: false,
                    zoom: false,
                    click: false,
                    lockAxis: "x",
                    x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                    centerOnStart: false,
                    textSelection: () => this.option("textSelection", false),
                    panOnlyZoomed: function() {
                        return this.content.width <= this.viewport.width;
                    }
                }, this.option("Panzoom"));
                this.Panzoom = new Panzoom(this.$container, options);
                this.Panzoom.on({
                    "*": (name, ...details) => this.trigger(`Panzoom.${name}`, ...details),
                    afterUpdate: () => {
                        this.updatePage();
                    },
                    beforeTransform: this.onBeforeTransform.bind(this),
                    touchEnd: this.onTouchEnd.bind(this),
                    endAnimation: () => {
                        this.trigger("settle");
                    }
                });
                this.updateMetrics();
                this.manageSlideVisiblity();
            }
            updatePanzoom() {
                if (!this.Panzoom) return;
                this.Panzoom.content = {
                    ...this.Panzoom.content,
                    fitWidth: this.contentWidth,
                    origWidth: this.contentWidth,
                    width: this.contentWidth
                };
                if (this.pages.length > 1 && this.option("infiniteX", this.option("infinite"))) this.Panzoom.boundX = null; else if (this.pages.length) this.Panzoom.boundX = {
                    from: -1 * this.pages[this.pages.length - 1].left,
                    to: -1 * this.pages[0].left
                };
                if (this.option("infiniteY", this.option("infinite"))) this.Panzoom.boundY = null; else this.Panzoom.boundY = {
                    from: 0,
                    to: 0
                };
                this.Panzoom.handleCursor();
            }
            manageSlideVisiblity() {
                const contentWidth = this.contentWidth;
                const viewportWidth = this.viewportWidth;
                let currentX = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
                const preload = this.option("preload");
                const infinite = this.option("infiniteX", this.option("infinite"));
                const paddingLeft = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left"));
                const paddingRight = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                this.slides.forEach((slide => {
                    let leftBoundary, rightBoundary;
                    let hasDiff = 0;
                    leftBoundary = currentX - paddingLeft;
                    rightBoundary = currentX + viewportWidth + paddingRight;
                    leftBoundary -= preload * (viewportWidth + paddingLeft + paddingRight);
                    rightBoundary += preload * (viewportWidth + paddingLeft + paddingRight);
                    const insideCurrentInterval = slide.left + slide.width > leftBoundary && slide.left < rightBoundary;
                    leftBoundary = currentX + contentWidth - paddingLeft;
                    rightBoundary = currentX + contentWidth + viewportWidth + paddingRight;
                    leftBoundary -= preload * (viewportWidth + paddingLeft + paddingRight);
                    const insidePrevInterval = infinite && slide.left + slide.width > leftBoundary && slide.left < rightBoundary;
                    leftBoundary = currentX - contentWidth - paddingLeft;
                    rightBoundary = currentX - contentWidth + viewportWidth + paddingRight;
                    leftBoundary -= preload * (viewportWidth + paddingLeft + paddingRight);
                    const insideNextInterval = infinite && slide.left + slide.width > leftBoundary && slide.left < rightBoundary;
                    if (insidePrevInterval || insideCurrentInterval || insideNextInterval) {
                        this.createSlideEl(slide);
                        if (insideCurrentInterval) hasDiff = 0;
                        if (insidePrevInterval) hasDiff = -1;
                        if (insideNextInterval) hasDiff = 1;
                        if (slide.left + slide.width > currentX && slide.left <= currentX + viewportWidth + paddingRight) hasDiff = 0;
                    } else this.removeSlideEl(slide);
                    slide.hasDiff = hasDiff;
                }));
                let nextIndex = 0;
                let nextPos = 0;
                this.slides.forEach(((slide, index) => {
                    let updatedX = 0;
                    if (slide.$el) {
                        if (index !== nextIndex || slide.hasDiff) updatedX = nextPos + slide.hasDiff * contentWidth; else nextPos = 0;
                        slide.$el.style.left = Math.abs(updatedX) > .1 ? `${nextPos + slide.hasDiff * contentWidth}px` : "";
                        nextIndex++;
                    } else nextPos += slide.width;
                }));
                this.markSelectedSlides();
            }
            createSlideEl(slide) {
                if (!slide) return;
                if (slide.$el) {
                    let curentIndex = slide.$el.dataset.index;
                    if (!curentIndex || parseInt(curentIndex, 10) !== slide.index) {
                        slide.$el.dataset.index = slide.index;
                        slide.$el.querySelectorAll("[data-lazy-srcset]").forEach((node => {
                            node.srcset = node.dataset.lazySrcset;
                        }));
                        slide.$el.querySelectorAll("[data-lazy-src]").forEach((node => {
                            let lazySrc = node.dataset.lazySrc;
                            if (node instanceof HTMLImageElement) node.src = lazySrc; else node.style.backgroundImage = `url('${lazySrc}')`;
                        }));
                        let lazySrc;
                        if (lazySrc = slide.$el.dataset.lazySrc) slide.$el.style.backgroundImage = `url('${lazySrc}')`;
                        slide.state = "ready";
                    }
                    return;
                }
                const div = document.createElement("div");
                div.dataset.index = slide.index;
                div.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" "));
                if (slide.customClass) div.classList.add(...slide.customClass.split(" "));
                if (slide.html) div.innerHTML = slide.html;
                const allElelements = [];
                this.slides.forEach(((slide, index) => {
                    if (slide.$el) allElelements.push(index);
                }));
                const goal = slide.index;
                let refSlide = null;
                if (allElelements.length) {
                    let refIndex = allElelements.reduce(((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev));
                    refSlide = this.slides[refIndex];
                }
                this.$track.insertBefore(div, refSlide && refSlide.$el ? refSlide.index < slide.index ? refSlide.$el.nextSibling : refSlide.$el : null);
                slide.$el = div;
                this.trigger("createSlide", slide, goal);
                return slide;
            }
            removeSlideEl(slide) {
                if (slide.$el && !slide.isDom) {
                    this.trigger("removeSlide", slide);
                    slide.$el.remove();
                    slide.$el = null;
                }
            }
            markSelectedSlides() {
                const selectedClass = this.option("classNames.slideSelected");
                const attr = "aria-hidden";
                this.slides.forEach(((slide, index) => {
                    const $el = slide.$el;
                    if (!$el) return;
                    const page = this.pages[this.page];
                    if (page && page.indexes && page.indexes.indexOf(index) > -1) {
                        if (selectedClass && !$el.classList.contains(selectedClass)) {
                            $el.classList.add(selectedClass);
                            this.trigger("selectSlide", slide);
                        }
                        $el.removeAttribute(attr);
                    } else {
                        if (selectedClass && $el.classList.contains(selectedClass)) {
                            $el.classList.remove(selectedClass);
                            this.trigger("unselectSlide", slide);
                        }
                        $el.setAttribute(attr, true);
                    }
                }));
            }
            updatePage() {
                this.updateMetrics();
                this.slideTo(this.page, {
                    friction: 0
                });
            }
            onBeforeTransform() {
                if (this.option("infiniteX", this.option("infinite"))) this.manageInfiniteTrack();
                this.manageSlideVisiblity();
            }
            manageInfiniteTrack() {
                const contentWidth = this.contentWidth;
                const viewportWidth = this.viewportWidth;
                if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || contentWidth < viewportWidth) return;
                const panzoom = this.Panzoom;
                let isFlipped = false;
                if (panzoom.content.x < -1 * (contentWidth - viewportWidth)) {
                    panzoom.content.x += contentWidth;
                    this.pageIndex = this.pageIndex - this.pages.length;
                    isFlipped = true;
                }
                if (panzoom.content.x > viewportWidth) {
                    panzoom.content.x -= contentWidth;
                    this.pageIndex = this.pageIndex + this.pages.length;
                    isFlipped = true;
                }
                if (isFlipped && "pointerdown" === panzoom.state) panzoom.resetDragPosition();
                return isFlipped;
            }
            onTouchEnd(panzoom, event) {
                const dragFree = this.option("dragFree");
                if (!dragFree && this.pages.length > 1 && panzoom.dragOffset.time < 350 && Math.abs(panzoom.dragOffset.y) < 1 && Math.abs(panzoom.dragOffset.x) > 5) {
                    this[panzoom.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
                    return;
                }
                if (dragFree) {
                    const [, nextPageIndex] = this.getPageFromPosition(-1 * panzoom.transform.x);
                    this.setPage(nextPageIndex);
                } else this.slideToClosest();
            }
            slideToClosest(params = {}) {
                let [, nextPageIndex] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
                this.slideTo(nextPageIndex, params);
            }
            getPageFromPosition(xPos) {
                const pageCount = this.pages.length;
                const center = this.option("center");
                if (center) xPos += .5 * this.viewportWidth;
                const interval = Math.floor(xPos / this.contentWidth);
                xPos -= interval * this.contentWidth;
                let slide = this.slides.find((slide => slide.left <= xPos && slide.left + slide.width > xPos));
                if (slide) {
                    let pageIndex = this.findPageForSlide(slide.index);
                    return [ pageIndex, pageIndex + interval * pageCount ];
                }
                return [ 0, 0 ];
            }
            setPage(page, toClosest) {
                let nextPosition = 0;
                let pageIndex = parseInt(page, 10) || 0;
                const prevPage = this.page, prevPageIndex = this.pageIndex, pageCount = this.pages.length;
                const contentWidth = this.contentWidth;
                const viewportWidth = this.viewportWidth;
                page = (pageIndex % pageCount + pageCount) % pageCount;
                if (this.option("infiniteX", this.option("infinite")) && contentWidth > viewportWidth) {
                    const nextInterval = Math.floor(pageIndex / pageCount) || 0, elemDimWidth = contentWidth;
                    nextPosition = this.pages[page].left + nextInterval * elemDimWidth;
                    if (true === toClosest && pageCount > 2) {
                        let currPosition = -1 * this.Panzoom.content.x;
                        const decreasedPosition = nextPosition - elemDimWidth, increasedPosition = nextPosition + elemDimWidth, diff1 = Math.abs(currPosition - nextPosition), diff2 = Math.abs(currPosition - decreasedPosition), diff3 = Math.abs(currPosition - increasedPosition);
                        if (diff3 < diff1 && diff3 <= diff2) {
                            nextPosition = increasedPosition;
                            pageIndex += pageCount;
                        } else if (diff2 < diff1 && diff2 < diff3) {
                            nextPosition = decreasedPosition;
                            pageIndex -= pageCount;
                        }
                    }
                } else {
                    page = pageIndex = Math.max(0, Math.min(pageIndex, pageCount - 1));
                    nextPosition = this.pages.length ? this.pages[page].left : 0;
                }
                this.page = page;
                this.pageIndex = pageIndex;
                if (null !== prevPage && page !== prevPage) {
                    this.prevPage = prevPage;
                    this.prevPageIndex = prevPageIndex;
                    this.trigger("change", page, prevPage);
                }
                return nextPosition;
            }
            destroy() {
                this.state = "destroy";
                this.slides.forEach((slide => {
                    this.removeSlideEl(slide);
                }));
                this.slides = [];
                this.Panzoom.destroy();
                this.detachPlugins();
            }
        }
        Carousel.version = "__VERSION__";
        Carousel.Plugins = plugins_Plugins;
        class ScrollLock {
            constructor(fancybox) {
                this.fancybox = fancybox;
                this.viewport = null;
                this.pendingUpdate = null;
                for (const methodName of [ "onReady", "onResize", "onTouchstart", "onTouchmove" ]) this[methodName] = this[methodName].bind(this);
            }
            onReady() {
                const viewport = window.visualViewport;
                if (viewport) {
                    this.viewport = viewport;
                    this.startY = 0;
                    viewport.addEventListener("resize", this.onResize);
                    this.updateViewport();
                }
                window.addEventListener("touchstart", this.onTouchstart, {
                    passive: false
                });
                window.addEventListener("touchmove", this.onTouchmove, {
                    passive: false
                });
                window.addEventListener("wheel", this.onWheel, {
                    passive: false
                });
            }
            onResize() {
                this.updateViewport();
            }
            updateViewport() {
                const fancybox = this.fancybox, viewport = this.viewport, scale = viewport.scale || 1, $container = fancybox.$container;
                if (!$container) return;
                let width = "", height = "", transform = "";
                if (scale - 1 > .1) {
                    width = `${viewport.width * scale}px`;
                    height = `${viewport.height * scale}px`;
                    transform = `translate3d(${viewport.offsetLeft}px, ${viewport.offsetTop}px, 0) scale(${1 / scale})`;
                }
                $container.style.width = width;
                $container.style.height = height;
                $container.style.transform = transform;
            }
            onTouchstart(event) {
                this.startY = event.touches ? event.touches[0].screenY : event.screenY;
            }
            onTouchmove(event) {
                const startY = this.startY;
                const zoom = window.innerWidth / window.document.documentElement.clientWidth;
                if (!event.cancelable) return;
                if (event.touches.length > 1 || 1 !== zoom) return;
                const el = isScrollable(event.composedPath()[0]);
                if (!el) {
                    event.preventDefault();
                    return;
                }
                const style = window.getComputedStyle(el);
                const height = parseInt(style.getPropertyValue("height"), 10);
                const curY = event.touches ? event.touches[0].screenY : event.screenY;
                const isAtTop = startY <= curY && 0 === el.scrollTop;
                const isAtBottom = startY >= curY && el.scrollHeight - el.scrollTop === height;
                if (isAtTop || isAtBottom) event.preventDefault();
            }
            onWheel(event) {
                if (!isScrollable(event.composedPath()[0])) event.preventDefault();
            }
            cleanup() {
                if (this.pendingUpdate) {
                    cancelAnimationFrame(this.pendingUpdate);
                    this.pendingUpdate = null;
                }
                const viewport = this.viewport;
                if (viewport) {
                    viewport.removeEventListener("resize", this.onResize);
                    this.viewport = null;
                }
                window.removeEventListener("touchstart", this.onTouchstart, false);
                window.removeEventListener("touchmove", this.onTouchmove, false);
                window.removeEventListener("wheel", this.onWheel, {
                    passive: false
                });
            }
            attach() {
                this.fancybox.on("initLayout", this.onReady);
            }
            detach() {
                this.fancybox.off("initLayout", this.onReady);
                this.cleanup();
            }
        }
        const Thumbs_defaults = {
            minSlideCount: 2,
            minScreenHeight: 500,
            autoStart: true,
            key: "t",
            Carousel: {}
        };
        class Thumbs {
            constructor(fancybox) {
                this.fancybox = fancybox;
                this.$container = null;
                this.state = "init";
                for (const methodName of [ "onPrepare", "onClosing", "onKeydown" ]) this[methodName] = this[methodName].bind(this);
                this.events = {
                    prepare: this.onPrepare,
                    closing: this.onClosing,
                    keydown: this.onKeydown
                };
            }
            onPrepare() {
                const slides = this.getSlides();
                if (slides.length < this.fancybox.option("Thumbs.minSlideCount")) {
                    this.state = "disabled";
                    return;
                }
                if (true === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight")) this.build();
            }
            onClosing() {
                if (this.Carousel) this.Carousel.Panzoom.detachEvents();
            }
            onKeydown(fancybox, key) {
                if (key === fancybox.option("Thumbs.key")) this.toggle();
            }
            build() {
                if (this.$container) return;
                const $container = document.createElement("div");
                $container.classList.add("fancybox__thumbs");
                this.fancybox.$carousel.parentNode.insertBefore($container, this.fancybox.$carousel.nextSibling);
                this.Carousel = new Carousel($container, extend(true, {
                    Dots: false,
                    Navigation: false,
                    Sync: {
                        friction: 0
                    },
                    infinite: false,
                    center: true,
                    fill: true,
                    dragFree: true,
                    slidesPerPage: 1,
                    preload: 1
                }, this.fancybox.option("Thumbs.Carousel"), {
                    Sync: {
                        target: this.fancybox.Carousel
                    },
                    slides: this.getSlides()
                }));
                this.Carousel.Panzoom.on("wheel", ((panzoom, event) => {
                    event.preventDefault();
                    this.fancybox[event.deltaY < 0 ? "prev" : "next"]();
                }));
                this.$container = $container;
                this.state = "visible";
            }
            getSlides() {
                const slides = [];
                for (const slide of this.fancybox.items) {
                    const thumb = slide.thumb;
                    if (thumb) slides.push({
                        html: `<div class="fancybox__thumb" style="background-image:url('${thumb}')"></div>`,
                        customClass: `has-thumb has-${slide.type || "image"}`
                    });
                }
                return slides;
            }
            toggle() {
                if ("visible" === this.state) this.hide(); else if ("hidden" === this.state) this.show(); else this.build();
            }
            show() {
                if ("hidden" === this.state) {
                    this.$container.style.display = "";
                    this.Carousel.Panzoom.attachEvents();
                    this.state = "visible";
                }
            }
            hide() {
                if ("visible" === this.state) {
                    this.Carousel.Panzoom.detachEvents();
                    this.$container.style.display = "none";
                    this.state = "hidden";
                }
            }
            cleanup() {
                if (this.Carousel) {
                    this.Carousel.destroy();
                    this.Carousel = null;
                }
                if (this.$container) {
                    this.$container.remove();
                    this.$container = null;
                }
                this.state = "init";
            }
            attach() {
                this.fancybox.on(this.events);
            }
            detach() {
                this.fancybox.off(this.events);
                this.cleanup();
            }
        }
        Thumbs.defaults = Thumbs_defaults;
        const buildURLQuery = (src, obj) => {
            const url = new URL(src);
            const params = new URLSearchParams(url.search);
            let rez = new URLSearchParams;
            for (const [key, value] of [ ...params, ...Object.entries(obj) ]) if ("t" === key) rez.set("start", parseInt(value)); else rez.set(key, value);
            rez = rez.toString();
            let matches = src.match(/#t=((.*)?\d+s)/);
            if (matches) rez += `#t=${matches[1]}`;
            return rez;
        };
        const Html_defaults = {
            video: {
                autoplay: true,
                ratio: 16 / 9
            },
            youtube: {
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            vimeo: {
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            html5video: {
                tpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
                format: ""
            }
        };
        class Html {
            constructor(fancybox) {
                this.fancybox = fancybox;
                for (const methodName of [ "onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage" ]) this[methodName] = this[methodName].bind(this);
                this.events = {
                    init: this.onInit,
                    ready: this.onReady,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh
                };
            }
            onInit() {
                for (const slide of this.fancybox.items) this.processType(slide);
            }
            processType(slide) {
                if (slide.html) {
                    slide.src = slide.html;
                    slide.type = "html";
                    delete slide.html;
                    return;
                }
                const src = slide.src || "";
                let type = slide.type || this.fancybox.options.type, rez = null;
                if (src && "string" !== typeof src) return;
                if (rez = src.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const params = buildURLQuery(src, this.fancybox.option("Html.youtube"));
                    const videoId = encodeURIComponent(rez[1]);
                    slide.videoId = videoId;
                    slide.src = `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
                    slide.thumb = slide.thumb || `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
                    slide.vendor = "youtube";
                    type = "video";
                } else if (rez = src.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                    const params = buildURLQuery(src, this.fancybox.option("Html.vimeo"));
                    const videoId = encodeURIComponent(rez[1]);
                    slide.videoId = videoId;
                    slide.src = `https://player.vimeo.com/video/${videoId}?${params}`;
                    slide.vendor = "vimeo";
                    type = "video";
                } else if (rez = src.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) {
                    slide.src = `//maps.google.${rez[1]}/?ll=${(rez[2] ? rez[2] + "&z=" + Math.floor(rez[3]) + (rez[4] ? rez[4].replace(/^\//, "&") : "") : rez[4] + "").replace(/\?/, "&")}&output=${rez[4] && rez[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`;
                    type = "map";
                } else if (rez = src.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) {
                    slide.src = `//maps.google.${rez[1]}/maps?q=${rez[2].replace("query=", "q=").replace("api=1", "")}&output=embed`;
                    type = "map";
                }
                if (!type) if ("#" === src.charAt(0)) type = "inline"; else if (rez = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) {
                    type = "html5video";
                    slide.format = slide.format || "video/" + ("ogv" === rez[1] ? "ogg" : rez[1]);
                } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) type = "image"; else if (src.match(/\.(pdf)((\?|#).*)?$/i)) type = "pdf";
                slide.type = type || this.fancybox.option("defaultType", "image");
                if ("html5video" === type || "video" === type) {
                    slide.video = extend({}, this.fancybox.option("Html.video"), slide.video);
                    if (slide._width && slide._height) slide.ratio = parseFloat(slide._width) / parseFloat(slide._height); else slide.ratio = slide.ratio || slide.video.ratio || Html_defaults.video.ratio;
                }
            }
            onReady() {
                this.fancybox.Carousel.slides.forEach((slide => {
                    if (slide.$el) {
                        this.setContent(slide);
                        if (slide.index === this.fancybox.getSlide().index) this.playVideo(slide);
                    }
                }));
            }
            onCreateSlide(fancybox, carousel, slide) {
                if ("ready" !== this.fancybox.state) return;
                this.setContent(slide);
            }
            loadInlineContent(slide) {
                let $content;
                if (slide.src instanceof HTMLElement) $content = slide.src; else if ("string" === typeof slide.src) {
                    const tmp = slide.src.split("#", 2);
                    const id = 2 === tmp.length && "" === tmp[0] ? tmp[1] : tmp[0];
                    $content = document.getElementById(id);
                }
                if ($content) {
                    if ("clone" === slide.type || $content.$placeHolder) {
                        $content = $content.cloneNode(true);
                        let attrId = $content.getAttribute("id");
                        attrId = attrId ? `${attrId}--clone` : `clone-${this.fancybox.id}-${slide.index}`;
                        $content.setAttribute("id", attrId);
                    } else {
                        const $placeHolder = document.createElement("div");
                        $placeHolder.classList.add("fancybox-placeholder");
                        $content.parentNode.insertBefore($placeHolder, $content);
                        $content.$placeHolder = $placeHolder;
                    }
                    this.fancybox.setContent(slide, $content);
                } else this.fancybox.setError(slide, "{{ELEMENT_NOT_FOUND}}");
            }
            loadAjaxContent(slide) {
                const fancybox = this.fancybox;
                const xhr = new XMLHttpRequest;
                fancybox.showLoading(slide);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) if ("ready" === fancybox.state) {
                        fancybox.hideLoading(slide);
                        if (200 === xhr.status) fancybox.setContent(slide, xhr.responseText); else fancybox.setError(slide, 404 === xhr.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}");
                    }
                };
                const data = slide.ajax || null;
                xhr.open(data ? "POST" : "GET", slide.src);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.send(data);
                slide.xhr = xhr;
            }
            loadIframeContent(slide) {
                const fancybox = this.fancybox;
                const $iframe = document.createElement("iframe");
                $iframe.className = "fancybox__iframe";
                $iframe.setAttribute("id", `fancybox__iframe_${fancybox.id}_${slide.index}`);
                $iframe.setAttribute("allow", "autoplay; fullscreen");
                $iframe.setAttribute("scrolling", "auto");
                slide.$iframe = $iframe;
                if ("iframe" !== slide.type || false === slide.preload) {
                    $iframe.setAttribute("src", slide.src);
                    this.fancybox.setContent(slide, $iframe);
                    this.resizeIframe(slide);
                    return;
                }
                fancybox.showLoading(slide);
                const $content = document.createElement("div");
                $content.style.visibility = "hidden";
                this.fancybox.setContent(slide, $content);
                $content.appendChild($iframe);
                $iframe.onerror = () => {
                    fancybox.setError(slide, "{{IFRAME_ERROR}}");
                };
                $iframe.onload = () => {
                    fancybox.hideLoading(slide);
                    let isFirstLoad = false;
                    if (!$iframe.isReady) {
                        $iframe.isReady = true;
                        isFirstLoad = true;
                    }
                    if (!$iframe.src.length) return;
                    $iframe.parentNode.style.visibility = "";
                    this.resizeIframe(slide);
                    if (isFirstLoad) fancybox.revealContent(slide);
                };
                $iframe.setAttribute("src", slide.src);
            }
            setAspectRatio(slide) {
                const $content = slide.$content;
                const ratio = slide.ratio;
                if (!$content) return;
                let width = slide._width;
                let height = slide._height;
                if (ratio || width && height) {
                    Object.assign($content.style, {
                        width: width && height ? "100%" : "",
                        height: width && height ? "100%" : "",
                        maxWidth: "",
                        maxHeight: ""
                    });
                    let maxWidth = $content.offsetWidth;
                    let maxHeight = $content.offsetHeight;
                    width = width || maxWidth;
                    height = height || maxHeight;
                    if (width > maxWidth || height > maxHeight) {
                        let maxRatio = Math.min(maxWidth / width, maxHeight / height);
                        width *= maxRatio;
                        height *= maxRatio;
                    }
                    if (Math.abs(width / height - ratio) > .01) if (ratio < width / height) width = height * ratio; else height = width / ratio;
                    Object.assign($content.style, {
                        width: `${width}px`,
                        height: `${height}px`
                    });
                }
            }
            resizeIframe(slide) {
                const $iframe = slide.$iframe;
                if (!$iframe) return;
                let width_ = slide._width || 0;
                let height_ = slide._height || 0;
                if (width_ && height_) slide.autoSize = false;
                const $parent = $iframe.parentNode;
                const parentStyle = $parent && $parent.style;
                if (false !== slide.preload && false !== slide.autoSize && parentStyle) try {
                    const compStyles = window.getComputedStyle($parent), paddingX = parseFloat(compStyles.paddingLeft) + parseFloat(compStyles.paddingRight), paddingY = parseFloat(compStyles.paddingTop) + parseFloat(compStyles.paddingBottom);
                    const document = $iframe.contentWindow.document, $html = document.getElementsByTagName("html")[0], $body = document.body;
                    parentStyle.width = "";
                    $body.style.overflow = "hidden";
                    width_ = width_ || $html.scrollWidth + paddingX;
                    parentStyle.width = `${width_}px`;
                    $body.style.overflow = "";
                    parentStyle.flex = "0 0 auto";
                    parentStyle.height = `${$body.scrollHeight}px`;
                    height_ = $html.scrollHeight + paddingY;
                } catch (error) {}
                if (width_ || height_) {
                    const newStyle = {
                        flex: "0 1 auto"
                    };
                    if (width_) newStyle.width = `${width_}px`;
                    if (height_) newStyle.height = `${height_}px`;
                    Object.assign(parentStyle, newStyle);
                }
            }
            onRefresh(fancybox, carousel) {
                carousel.slides.forEach((slide => {
                    if (!slide.$el) return;
                    if (slide.$iframe) this.resizeIframe(slide);
                    if (slide.ratio) this.setAspectRatio(slide);
                }));
            }
            setContent(slide) {
                if (!slide || slide.isDom) return;
                switch (slide.type) {
                  case "html":
                    this.fancybox.setContent(slide, slide.src);
                    break;

                  case "html5video":
                    this.fancybox.setContent(slide, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, slide.src).replace("{{format}}", slide.format || slide.html5video && slide.html5video.format || "").replace("{{poster}}", slide.poster || slide.thumb || ""));
                    break;

                  case "inline":
                  case "clone":
                    this.loadInlineContent(slide);
                    break;

                  case "ajax":
                    this.loadAjaxContent(slide);
                    break;

                  case "pdf":
                  case "video":
                  case "map":
                    slide.preload = false;

                  case "iframe":
                    this.loadIframeContent(slide);
                    break;
                }
                if (slide.ratio) this.setAspectRatio(slide);
            }
            onSelectSlide(fancybox, carousel, slide) {
                if ("ready" === fancybox.state) this.playVideo(slide);
            }
            playVideo(slide) {
                if ("html5video" === slide.type && slide.video.autoplay) try {
                    const $video = slide.$el.querySelector("video");
                    if ($video) {
                        const promise = $video.play();
                        if (void 0 !== promise) promise.then((() => {})).catch((error => {
                            $video.muted = true;
                            $video.play();
                        }));
                    }
                } catch (err) {}
                if ("video" !== slide.type || !(slide.$iframe && slide.$iframe.contentWindow)) return;
                const poller = () => {
                    if ("done" === slide.state && slide.$iframe && slide.$iframe.contentWindow) {
                        let command;
                        if (slide.$iframe.isReady) {
                            if (slide.video && slide.video.autoplay) if ("youtube" == slide.vendor) command = {
                                event: "command",
                                func: "playVideo"
                            }; else command = {
                                method: "play",
                                value: "true"
                            };
                            if (command) slide.$iframe.contentWindow.postMessage(JSON.stringify(command), "*");
                            return;
                        }
                        if ("youtube" === slide.vendor) {
                            command = {
                                event: "listening",
                                id: slide.$iframe.getAttribute("id")
                            };
                            slide.$iframe.contentWindow.postMessage(JSON.stringify(command), "*");
                        }
                    }
                    slide.poller = setTimeout(poller, 250);
                };
                poller();
            }
            onUnselectSlide(fancybox, carousel, slide) {
                if ("html5video" === slide.type) {
                    try {
                        slide.$el.querySelector("video").pause();
                    } catch (error) {}
                    return;
                }
                let command = false;
                if ("vimeo" == slide.vendor) command = {
                    method: "pause",
                    value: "true"
                }; else if ("youtube" === slide.vendor) command = {
                    event: "command",
                    func: "pauseVideo"
                };
                if (command && slide.$iframe && slide.$iframe.contentWindow) slide.$iframe.contentWindow.postMessage(JSON.stringify(command), "*");
                clearTimeout(slide.poller);
            }
            onRemoveSlide(fancybox, carousel, slide) {
                if (slide.xhr) {
                    slide.xhr.abort();
                    slide.xhr = null;
                }
                if (slide.$iframe) {
                    slide.$iframe.onload = slide.$iframe.onerror = null;
                    slide.$iframe.src = "//about:blank";
                    slide.$iframe = null;
                }
                const $content = slide.$content;
                if ("inline" === slide.type && $content) {
                    $content.classList.remove("fancybox__content");
                    if ("none" !== $content.style.display) $content.style.display = "none";
                }
                if (slide.$closeButton) {
                    slide.$closeButton.remove();
                    slide.$closeButton = null;
                }
                const $placeHolder = $content && $content.$placeHolder;
                if ($placeHolder) {
                    $placeHolder.parentNode.insertBefore($content, $placeHolder);
                    $placeHolder.remove();
                    $content.$placeHolder = null;
                }
            }
            onMessage(e) {
                try {
                    let data = JSON.parse(e.data);
                    if ("https://player.vimeo.com" === e.origin) {
                        if ("ready" === data.event) for (let $iframe of document.getElementsByClassName("fancybox__iframe")) if ($iframe.contentWindow === e.source) $iframe.isReady = 1;
                    } else if ("https://www.youtube-nocookie.com" === e.origin) if ("onReady" === data.event) document.getElementById(data.id).isReady = 1;
                } catch (ex) {}
            }
            attach() {
                this.fancybox.on(this.events);
                window.addEventListener("message", this.onMessage, false);
            }
            detach() {
                this.fancybox.off(this.events);
                window.removeEventListener("message", this.onMessage, false);
            }
        }
        Html.defaults = Html_defaults;
        const Image_defaults = {
            canZoomInClass: "can-zoom_in",
            canZoomOutClass: "can-zoom_out",
            zoom: true,
            zoomOpacity: "auto",
            zoomFriction: .82,
            ignoreCoveredThumbnail: false,
            touch: true,
            click: "toggleZoom",
            doubleClick: null,
            wheel: "zoom",
            fit: "contain",
            wrap: false,
            Panzoom: {
                ratio: 1
            }
        };
        class Image_Image {
            constructor(fancybox) {
                this.fancybox = fancybox;
                for (const methodName of [ "onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange" ]) this[methodName] = this[methodName].bind(this);
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    done: this.onDone,
                    "Carousel.change": this.onPageChange,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide
                };
            }
            onReady() {
                this.fancybox.Carousel.slides.forEach((slide => {
                    if (slide.$el) this.setContent(slide);
                }));
            }
            onDone(fancybox, slide) {
                this.handleCursor(slide);
            }
            onClosing(fancybox) {
                clearTimeout(this.clickTimer);
                this.clickTimer = null;
                fancybox.Carousel.slides.forEach((slide => {
                    if (slide.$image) slide.state = "destroy";
                    if (slide.Panzoom) slide.Panzoom.detachEvents();
                }));
                if ("closing" === this.fancybox.state && this.canZoom(fancybox.getSlide())) this.zoomOut();
            }
            onCreateSlide(fancybox, carousel, slide) {
                if ("ready" !== this.fancybox.state) return;
                this.setContent(slide);
            }
            onRemoveSlide(fancybox, carousel, slide) {
                if (slide.$image) {
                    slide.$el.classList.remove(fancybox.option("Image.canZoomInClass"));
                    slide.$image.remove();
                    slide.$image = null;
                }
                if (slide.Panzoom) {
                    slide.Panzoom.destroy();
                    slide.Panzoom = null;
                }
                if (slide.$el && slide.$el.dataset) delete slide.$el.dataset.imageFit;
            }
            setContent(slide) {
                if (slide.isDom || slide.html || slide.type && "image" !== slide.type) return;
                if (slide.$image) return;
                slide.type = "image";
                slide.state = "loading";
                const $content = document.createElement("div");
                $content.style.visibility = "hidden";
                const $image = document.createElement("img");
                $image.addEventListener("load", (event => {
                    event.stopImmediatePropagation();
                    this.onImageStatusChange(slide);
                }));
                $image.addEventListener("error", (() => {
                    this.onImageStatusChange(slide);
                }));
                $image.src = slide.src;
                $image.alt = "";
                $image.draggable = false;
                $image.classList.add("fancybox__image");
                if (slide.srcset) $image.setAttribute("srcset", slide.srcset);
                if (slide.sizes) $image.setAttribute("sizes", slide.sizes);
                slide.$image = $image;
                const shouldWrap = this.fancybox.option("Image.wrap");
                if (shouldWrap) {
                    const $wrap = document.createElement("div");
                    $wrap.classList.add("string" === typeof shouldWrap ? shouldWrap : "fancybox__image-wrap");
                    $wrap.appendChild($image);
                    $content.appendChild($wrap);
                    slide.$wrap = $wrap;
                } else $content.appendChild($image);
                slide.$el.dataset.imageFit = this.fancybox.option("Image.fit");
                this.fancybox.setContent(slide, $content);
                if ($image.complete || $image.error) this.onImageStatusChange(slide); else this.fancybox.showLoading(slide);
            }
            onImageStatusChange(slide) {
                const $image = slide.$image;
                if (!$image || "loading" !== slide.state) return;
                if (!($image.complete && $image.naturalWidth && $image.naturalHeight)) {
                    this.fancybox.setError(slide, "{{IMAGE_ERROR}}");
                    return;
                }
                this.fancybox.hideLoading(slide);
                if ("contain" === this.fancybox.option("Image.fit")) this.initSlidePanzoom(slide);
                slide.$el.addEventListener("wheel", (event => this.onWheel(slide, event)), {
                    passive: false
                });
                slide.$content.addEventListener("click", (event => this.onClick(slide, event)), {
                    passive: false
                });
                this.revealContent(slide);
            }
            initSlidePanzoom(slide) {
                if (slide.Panzoom) return;
                slide.Panzoom = new Panzoom(slide.$el, extend(true, this.fancybox.option("Image.Panzoom", {}), {
                    viewport: slide.$wrap,
                    content: slide.$image,
                    width: slide._width,
                    height: slide._height,
                    wrapInner: false,
                    textSelection: true,
                    touch: this.fancybox.option("Image.touch"),
                    panOnlyZoomed: true,
                    click: false,
                    wheel: false
                }));
                slide.Panzoom.on("startAnimation", (() => {
                    this.fancybox.trigger("Image.startAnimation", slide);
                }));
                slide.Panzoom.on("endAnimation", (() => {
                    if ("zoomIn" === slide.state) this.fancybox.done(slide);
                    this.handleCursor(slide);
                    this.fancybox.trigger("Image.endAnimation", slide);
                }));
                slide.Panzoom.on("afterUpdate", (() => {
                    this.handleCursor(slide);
                    this.fancybox.trigger("Image.afterUpdate", slide);
                }));
            }
            revealContent(slide) {
                if (null === this.fancybox.Carousel.prevPage && slide.index === this.fancybox.options.startIndex && this.canZoom(slide)) this.zoomIn(); else this.fancybox.revealContent(slide);
            }
            getZoomInfo(slide) {
                const $thumb = slide.$thumb, thumbRect = $thumb.getBoundingClientRect(), thumbWidth = thumbRect.width, thumbHeight = thumbRect.height, contentRect = slide.$content.getBoundingClientRect(), contentWidth = contentRect.width, contentHeight = contentRect.height, shiftedTop = contentRect.top - thumbRect.top, shiftedLeft = contentRect.left - thumbRect.left;
                let opacity = this.fancybox.option("Image.zoomOpacity");
                if ("auto" === opacity) opacity = Math.abs(thumbWidth / thumbHeight - contentWidth / contentHeight) > .1;
                return {
                    top: shiftedTop,
                    left: shiftedLeft,
                    scale: contentWidth && thumbWidth ? thumbWidth / contentWidth : 1,
                    opacity
                };
            }
            canZoom(slide) {
                const fancybox = this.fancybox, $container = fancybox.$container;
                if (window.visualViewport && 1 !== window.visualViewport.scale) return false;
                if (slide.Panzoom && !slide.Panzoom.content.width) return false;
                if (!fancybox.option("Image.zoom") || "contain" !== fancybox.option("Image.fit")) return false;
                const $thumb = slide.$thumb;
                if (!$thumb || "loading" === slide.state) return false;
                $container.classList.add("fancybox__no-click");
                const rect = $thumb.getBoundingClientRect();
                let rez;
                if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                    const visibleTopLeft = document.elementFromPoint(rect.left + 1, rect.top + 1) === $thumb;
                    const visibleBottomRight = document.elementFromPoint(rect.right - 1, rect.bottom - 1) === $thumb;
                    rez = visibleTopLeft && visibleBottomRight;
                } else rez = document.elementFromPoint(rect.left + .5 * rect.width, rect.top + .5 * rect.height) === $thumb;
                $container.classList.remove("fancybox__no-click");
                return rez;
            }
            zoomIn() {
                const fancybox = this.fancybox, slide = fancybox.getSlide(), Panzoom = slide.Panzoom;
                const {top, left, scale, opacity} = this.getZoomInfo(slide);
                fancybox.trigger("reveal", slide);
                Panzoom.panTo({
                    x: -1 * left,
                    y: -1 * top,
                    scale,
                    friction: 0,
                    ignoreBounds: true
                });
                slide.$content.style.visibility = "";
                slide.state = "zoomIn";
                if (true === opacity) Panzoom.on("afterTransform", (panzoom => {
                    if ("zoomIn" === slide.state || "zoomOut" === slide.state) panzoom.$content.style.opacity = Math.min(1, 1 - (1 - panzoom.content.scale) / (1 - scale));
                }));
                Panzoom.panTo({
                    x: 0,
                    y: 0,
                    scale: 1,
                    friction: this.fancybox.option("Image.zoomFriction")
                });
            }
            zoomOut() {
                const fancybox = this.fancybox, slide = fancybox.getSlide(), Panzoom = slide.Panzoom;
                if (!Panzoom) return;
                slide.state = "zoomOut";
                fancybox.state = "customClosing";
                if (slide.$caption) slide.$caption.style.visibility = "hidden";
                let friction = this.fancybox.option("Image.zoomFriction");
                const animatePosition = event => {
                    const {top, left, scale, opacity} = this.getZoomInfo(slide);
                    if (!event && !opacity) friction *= .82;
                    Panzoom.panTo({
                        x: -1 * left,
                        y: -1 * top,
                        scale,
                        friction,
                        ignoreBounds: true
                    });
                    friction *= .98;
                };
                window.addEventListener("scroll", animatePosition);
                Panzoom.once("endAnimation", (() => {
                    window.removeEventListener("scroll", animatePosition);
                    fancybox.destroy();
                }));
                animatePosition();
            }
            handleCursor(slide) {
                if ("image" !== slide.type || !slide.$el) return;
                const panzoom = slide.Panzoom;
                const clickAction = this.fancybox.option("Image.click", false, slide);
                const touchIsEnabled = this.fancybox.option("Image.touch");
                const classList = slide.$el.classList;
                const zoomInClass = this.fancybox.option("Image.canZoomInClass");
                const zoomOutClass = this.fancybox.option("Image.canZoomOutClass");
                classList.remove(zoomOutClass);
                classList.remove(zoomInClass);
                if (panzoom && "toggleZoom" === clickAction) {
                    const canZoomIn = panzoom && 1 === panzoom.content.scale && panzoom.option("maxScale") - panzoom.content.scale > .01;
                    if (canZoomIn) classList.add(zoomInClass); else if (panzoom.content.scale > 1 && !touchIsEnabled) classList.add(zoomOutClass);
                } else if ("close" === clickAction) classList.add(zoomOutClass);
            }
            onWheel(slide, event) {
                if ("ready" !== this.fancybox.state) return;
                if (false === this.fancybox.trigger("Image.wheel", event)) return;
                switch (this.fancybox.option("Image.wheel")) {
                  case "zoom":
                    if ("done" === slide.state) slide.Panzoom && slide.Panzoom.zoomWithWheel(event);
                    break;

                  case "close":
                    this.fancybox.close();
                    break;

                  case "slide":
                    this.fancybox[event.deltaY < 0 ? "prev" : "next"]();
                    break;
                }
            }
            onClick(slide, event) {
                if ("ready" !== this.fancybox.state) return;
                const panzoom = slide.Panzoom;
                if (panzoom && (panzoom.dragPosition.midPoint || 0 !== panzoom.dragOffset.x || 0 !== panzoom.dragOffset.y || 1 !== panzoom.dragOffset.scale)) return;
                if (this.fancybox.Carousel.Panzoom.lockAxis) return false;
                const process = action => {
                    switch (action) {
                      case "toggleZoom":
                        event.stopPropagation();
                        slide.Panzoom && slide.Panzoom.zoomWithClick(event);
                        break;

                      case "close":
                        this.fancybox.close();
                        break;

                      case "next":
                        event.stopPropagation();
                        this.fancybox.next();
                        break;
                    }
                };
                const clickAction = this.fancybox.option("Image.click");
                const dblclickAction = this.fancybox.option("Image.doubleClick");
                if (dblclickAction) if (this.clickTimer) {
                    clearTimeout(this.clickTimer);
                    this.clickTimer = null;
                    process(dblclickAction);
                } else this.clickTimer = setTimeout((() => {
                    this.clickTimer = null;
                    process(clickAction);
                }), 300); else process(clickAction);
            }
            onPageChange(fancybox, carousel) {
                const currSlide = fancybox.getSlide();
                carousel.slides.forEach((slide => {
                    if (!slide.Panzoom || "done" !== slide.state) return;
                    if (slide.index !== currSlide.index) slide.Panzoom.panTo({
                        x: 0,
                        y: 0,
                        scale: 1,
                        friction: .8
                    });
                }));
            }
            attach() {
                this.fancybox.on(this.events);
            }
            detach() {
                this.fancybox.off(this.events);
            }
        }
        Image_Image.defaults = Image_defaults;
        class Hash {
            constructor(fancybox) {
                this.fancybox = fancybox;
                for (const methodName of [ "onChange", "onClosing" ]) this[methodName] = this[methodName].bind(this);
                this.events = {
                    initCarousel: this.onChange,
                    "Carousel.change": this.onChange,
                    closing: this.onClosing
                };
                this.hasCreatedHistory = false;
                this.origHash = "";
                this.timer = null;
            }
            onChange(fancybox) {
                const carousel = fancybox.Carousel;
                if (this.timer) clearTimeout(this.timer);
                const firstRun = null === carousel.prevPage;
                const currentSlide = fancybox.getSlide();
                const currentHash = new URL(document.URL).hash;
                let newHash = false;
                if (currentSlide.slug) newHash = "#" + currentSlide.slug; else {
                    const dataset = currentSlide.$trigger && currentSlide.$trigger.dataset;
                    const slug = fancybox.option("slug") || dataset && dataset.fancybox;
                    if (slug && slug.length && "true" !== slug) newHash = "#" + slug + (carousel.slides.length > 1 ? "-" + (currentSlide.index + 1) : "");
                }
                if (firstRun) this.origHash = currentHash !== newHash ? currentHash : "";
                if (newHash && currentHash !== newHash) this.timer = setTimeout((() => {
                    try {
                        window.history[firstRun ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + newHash);
                        if (firstRun) this.hasCreatedHistory = true;
                    } catch (e) {}
                }), 300);
            }
            onClosing() {
                if (this.timer) clearTimeout(this.timer);
                if (true === this.hasSilentClose) return;
                try {
                    window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
                    return;
                } catch (e) {}
            }
            attach(fancybox) {
                fancybox.on(this.events);
            }
            detach(fancybox) {
                fancybox.off(this.events);
            }
            static startFromUrl() {
                const Fancybox = Hash.Fancybox;
                if (!Fancybox || Fancybox.getInstance() || false === Fancybox.defaults.Hash) return;
                const {hash, slug, index} = Hash.getParsedURL();
                if (!slug) return;
                let selectedElem = document.querySelector(`[data-slug="${hash}"]`);
                if (selectedElem) selectedElem.dispatchEvent(new CustomEvent("click", {
                    bubbles: true,
                    cancelable: true
                }));
                if (Fancybox.getInstance()) return;
                const groupElems = document.querySelectorAll(`[data-fancybox="${slug}"]`);
                if (!groupElems.length) return;
                if (null === index && 1 === groupElems.length) selectedElem = groupElems[0]; else if (index) selectedElem = groupElems[index - 1];
                if (selectedElem) selectedElem.dispatchEvent(new CustomEvent("click", {
                    bubbles: true,
                    cancelable: true
                }));
            }
            static onHashChange() {
                const {slug, index} = Hash.getParsedURL();
                const Fancybox = Hash.Fancybox;
                const instance = Fancybox && Fancybox.getInstance();
                if (instance && instance.plugins.Hash) {
                    if (slug) {
                        const carousel = instance.Carousel;
                        if (slug === instance.option("slug")) return carousel.slideTo(index - 1);
                        for (let slide of carousel.slides) if (slide.slug && slide.slug === slug) return carousel.slideTo(slide.index);
                        const slide = instance.getSlide();
                        const dataset = slide.$trigger && slide.$trigger.dataset;
                        if (dataset && dataset.fancybox === slug) return carousel.slideTo(index - 1);
                    }
                    instance.plugins.Hash.hasSilentClose = true;
                    instance.close();
                }
                Hash.startFromUrl();
            }
            static create(Fancybox) {
                Hash.Fancybox = Fancybox;
                function proceed() {
                    window.addEventListener("hashchange", Hash.onHashChange, false);
                    Hash.startFromUrl();
                }
                if (canUseDOM) window.requestAnimationFrame((() => {
                    if (/complete|interactive|loaded/.test(document.readyState)) proceed(); else document.addEventListener("DOMContentLoaded", proceed);
                }));
            }
            static destroy() {
                window.removeEventListener("hashchange", Hash.onHashChange, false);
            }
            static getParsedURL() {
                const hash = window.location.hash.substr(1), tmp = hash.split("-"), index = tmp.length > 1 && /^\+?\d+$/.test(tmp[tmp.length - 1]) ? parseInt(tmp.pop(-1), 10) || null : null, slug = tmp.join("-");
                return {
                    hash,
                    slug,
                    index
                };
            }
        }
        const Fullscreen = {
            pageXOffset: 0,
            pageYOffset: 0,
            element() {
                return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
            },
            activate(element) {
                Fullscreen.pageXOffset = window.pageXOffset;
                Fullscreen.pageYOffset = window.pageYOffset;
                if (element.requestFullscreen) element.requestFullscreen(); else if (element.mozRequestFullScreen) element.mozRequestFullScreen(); else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen(); else if (element.msRequestFullscreen) element.msRequestFullscreen();
            },
            deactivate() {
                if (document.exitFullscreen) document.exitFullscreen(); else if (document.mozCancelFullScreen) document.mozCancelFullScreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            }
        };
        class Slideshow {
            constructor(fancybox) {
                this.fancybox = fancybox;
                this.active = false;
                this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
            }
            isActive() {
                return this.active;
            }
            setTimer() {
                if (!this.active || this.timer) return;
                const delay = this.fancybox.option("slideshow.delay", 3e3);
                this.timer = setTimeout((() => {
                    this.timer = null;
                    if (!this.fancybox.option("infinite") && this.fancybox.getSlide().index === this.fancybox.Carousel.slides.length - 1) this.fancybox.jumpTo(0, {
                        friction: 0
                    }); else this.fancybox.next();
                }), delay);
                let $progress = this.$progress;
                if (!$progress) {
                    $progress = document.createElement("div");
                    $progress.classList.add("fancybox__progress");
                    this.fancybox.$carousel.parentNode.insertBefore($progress, this.fancybox.$carousel);
                    this.$progress = $progress;
                    $progress.offsetHeight;
                }
                $progress.style.transitionDuration = `${delay}ms`;
                $progress.style.transform = "scaleX(1)";
            }
            clearTimer() {
                clearTimeout(this.timer);
                this.timer = null;
                if (this.$progress) {
                    this.$progress.style.transitionDuration = "";
                    this.$progress.style.transform = "";
                    this.$progress.offsetHeight;
                }
            }
            activate() {
                if (this.active) return;
                this.active = true;
                this.fancybox.$container.classList.add("has-slideshow");
                if ("done" === this.fancybox.getSlide().state) this.setTimer();
                document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
            }
            handleVisibilityChange() {
                this.deactivate();
            }
            deactivate() {
                this.active = false;
                this.clearTimer();
                this.fancybox.$container.classList.remove("has-slideshow");
                document.removeEventListener("visibilitychange", this.handleVisibilityChange, false);
            }
            toggle() {
                if (this.active) this.deactivate(); else if (this.fancybox.Carousel.slides.length > 1) this.activate();
            }
        }
        const Toolbar_defaults = {
            display: [ "counter", "zoom", "slideshow", "fullscreen", "thumbs", "close" ],
            autoEnable: true,
            items: {
                counter: {
                    position: "left",
                    type: "div",
                    class: "fancybox__counter",
                    html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                    attr: {
                        tabindex: -1
                    }
                },
                prev: {
                    type: "button",
                    class: "fancybox__button--prev",
                    label: "PREV",
                    html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                    attr: {
                        "data-fancybox-prev": ""
                    }
                },
                next: {
                    type: "button",
                    class: "fancybox__button--next",
                    label: "NEXT",
                    html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                    attr: {
                        "data-fancybox-next": ""
                    }
                },
                fullscreen: {
                    type: "button",
                    class: "fancybox__button--fullscreen",
                    label: "TOGGLE_FULLSCREEN",
                    html: `<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>`,
                    click: function(event) {
                        event.preventDefault();
                        if (Fullscreen.element()) Fullscreen.deactivate(); else Fullscreen.activate(this.fancybox.$container);
                    }
                },
                slideshow: {
                    type: "button",
                    class: "fancybox__button--slideshow",
                    label: "TOGGLE_SLIDESHOW",
                    html: `<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>`,
                    click: function(event) {
                        event.preventDefault();
                        this.Slideshow.toggle();
                    }
                },
                zoom: {
                    type: "button",
                    class: "fancybox__button--zoom",
                    label: "TOGGLE_ZOOM",
                    html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                    click: function(event) {
                        event.preventDefault();
                        const panzoom = this.fancybox.getSlide().Panzoom;
                        if (panzoom) panzoom.toggleZoom();
                    }
                },
                download: {
                    type: "link",
                    label: "DOWNLOAD",
                    class: "fancybox__button--download",
                    html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                    click: function(event) {
                        event.stopPropagation();
                    }
                },
                thumbs: {
                    type: "button",
                    label: "TOGGLE_THUMBS",
                    class: "fancybox__button--thumbs",
                    html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                    click: function(event) {
                        event.stopPropagation();
                        const thumbs = this.fancybox.plugins.Thumbs;
                        if (thumbs) thumbs.toggle();
                    }
                },
                close: {
                    type: "button",
                    label: "CLOSE",
                    class: "fancybox__button--close",
                    html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                    attr: {
                        "data-fancybox-close": "",
                        tabindex: 0
                    }
                }
            }
        };
        class Toolbar {
            constructor(fancybox) {
                this.fancybox = fancybox;
                this.$container = null;
                this.state = "init";
                for (const methodName of [ "onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh" ]) this[methodName] = this[methodName].bind(this);
                this.events = {
                    init: this.onInit,
                    prepare: this.onPrepare,
                    done: this.onDone,
                    keydown: this.onKeydown,
                    closing: this.onClosing,
                    "Carousel.change": this.onChange,
                    "Carousel.settle": this.onSettle,
                    "Carousel.Panzoom.touchStart": () => this.onRefresh(),
                    "Image.startAnimation": (fancybox, slide) => this.onRefresh(slide),
                    "Image.afterUpdate": (fancybox, slide) => this.onRefresh(slide)
                };
            }
            onInit() {
                if (this.fancybox.option("Toolbar.autoEnable")) {
                    let hasImage = false;
                    for (const item of this.fancybox.items) if ("image" === item.type) {
                        hasImage = true;
                        break;
                    }
                    if (!hasImage) {
                        this.state = "disabled";
                        return;
                    }
                }
                for (const key of this.fancybox.option("Toolbar.display")) {
                    const id = isPlainObject(key) ? key.id : key;
                    if ("close" === id) {
                        this.fancybox.options.closeButton = false;
                        break;
                    }
                }
            }
            onPrepare() {
                const fancybox = this.fancybox;
                if ("init" !== this.state) return;
                this.build();
                this.update();
                this.Slideshow = new Slideshow(fancybox);
                if (!fancybox.Carousel.prevPage) {
                    if (fancybox.option("slideshow.autoStart")) this.Slideshow.activate();
                    if (fancybox.option("fullscreen.autoStart") && !Fullscreen.element()) try {
                        Fullscreen.activate(fancybox.$container);
                    } catch (error) {}
                }
            }
            onFsChange() {
                window.scrollTo(Fullscreen.pageXOffset, Fullscreen.pageYOffset);
            }
            onSettle() {
                const fancybox = this.fancybox;
                const slideshow = this.Slideshow;
                if (slideshow && slideshow.isActive()) if (fancybox.getSlide().index === fancybox.Carousel.slides.length - 1 && !fancybox.option("infinite")) slideshow.deactivate(); else if ("done" === fancybox.getSlide().state) slideshow.setTimer();
            }
            onChange() {
                this.update();
                if (this.Slideshow && this.Slideshow.isActive()) this.Slideshow.clearTimer();
            }
            onDone(fancybox, slide) {
                const slideshow = this.Slideshow;
                if (slide.index === fancybox.getSlide().index) {
                    this.update();
                    if (slideshow && slideshow.isActive()) if (!fancybox.option("infinite") && slide.index === fancybox.Carousel.slides.length - 1) slideshow.deactivate(); else slideshow.setTimer();
                }
            }
            onRefresh(slide) {
                if (!slide || slide.index === this.fancybox.getSlide().index) {
                    this.update();
                    if (this.Slideshow && this.Slideshow.isActive() && (!slide || "done" === slide.state)) this.Slideshow.deactivate();
                }
            }
            onKeydown(fancybox, key, event) {
                if (" " === key && this.Slideshow) {
                    this.Slideshow.toggle();
                    event.preventDefault();
                }
            }
            onClosing() {
                if (this.Slideshow) this.Slideshow.deactivate();
                document.removeEventListener("fullscreenchange", this.onFsChange);
            }
            createElement(obj) {
                let $el;
                if ("div" === obj.type) $el = document.createElement("div"); else {
                    $el = document.createElement("link" === obj.type ? "a" : "button");
                    $el.classList.add("carousel__button");
                }
                $el.innerHTML = obj.html;
                $el.setAttribute("tabindex", obj.tabindex || 0);
                if (obj.class) $el.classList.add(...obj.class.split(" "));
                for (const prop in obj.attr) $el.setAttribute(prop, obj.attr[prop]);
                if (obj.label) $el.setAttribute("title", this.fancybox.localize(`{{${obj.label}}}`));
                if (obj.click) $el.addEventListener("click", obj.click.bind(this));
                if ("prev" === obj.id) $el.setAttribute("data-fancybox-prev", "");
                if ("next" === obj.id) $el.setAttribute("data-fancybox-next", "");
                const $svg = $el.querySelector("svg");
                if ($svg) {
                    $svg.setAttribute("role", "img");
                    $svg.setAttribute("tabindex", "-1");
                    $svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                }
                return $el;
            }
            build() {
                this.cleanup();
                const all_items = this.fancybox.option("Toolbar.items");
                const all_groups = [ {
                    position: "left",
                    items: []
                }, {
                    position: "center",
                    items: []
                }, {
                    position: "right",
                    items: []
                } ];
                const thumbs = this.fancybox.plugins.Thumbs;
                for (const key of this.fancybox.option("Toolbar.display")) {
                    let id, item;
                    if (isPlainObject(key)) {
                        id = key.id;
                        item = extend({}, all_items[id], key);
                    } else {
                        id = key;
                        item = all_items[id];
                    }
                    if ([ "counter", "next", "prev", "slideshow" ].includes(id) && this.fancybox.items.length < 2) continue;
                    if ("fullscreen" === id) {
                        if (!document.fullscreenEnabled || window.fullScreen) continue;
                        document.addEventListener("fullscreenchange", this.onFsChange);
                    }
                    if ("thumbs" === id && (!thumbs || "disabled" === thumbs.state)) continue;
                    if (!item) continue;
                    let position = item.position || "right";
                    let group = all_groups.find((obj => obj.position === position));
                    if (group) group.items.push(item);
                }
                const $container = document.createElement("div");
                $container.classList.add("fancybox__toolbar");
                for (const group of all_groups) if (group.items.length) {
                    const $wrap = document.createElement("div");
                    $wrap.classList.add("fancybox__toolbar__items");
                    $wrap.classList.add(`fancybox__toolbar__items--${group.position}`);
                    for (const obj of group.items) $wrap.appendChild(this.createElement(obj));
                    $container.appendChild($wrap);
                }
                this.fancybox.$carousel.parentNode.insertBefore($container, this.fancybox.$carousel);
                this.$container = $container;
            }
            update() {
                const slide = this.fancybox.getSlide();
                const idx = slide.index;
                const cnt = this.fancybox.items.length;
                const src = slide.downloadSrc || ("image" === slide.type && !slide.error ? slide.src : null);
                for (const $el of this.fancybox.$container.querySelectorAll("a.fancybox__button--download")) if (src) {
                    $el.removeAttribute("disabled");
                    $el.removeAttribute("tabindex");
                    $el.setAttribute("href", src);
                    $el.setAttribute("download", src);
                    $el.setAttribute("target", "_blank");
                } else {
                    $el.setAttribute("disabled", "");
                    $el.setAttribute("tabindex", -1);
                    $el.removeAttribute("href");
                    $el.removeAttribute("download");
                }
                const panzoom = slide.Panzoom;
                const canZoom = panzoom && panzoom.option("maxScale") > panzoom.option("baseScale");
                for (const $el of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")) if (canZoom) $el.removeAttribute("disabled"); else $el.setAttribute("disabled", "");
                for (const $el of this.fancybox.$container.querySelectorAll("[data-fancybox-index]")) $el.innerHTML = slide.index + 1;
                for (const $el of this.fancybox.$container.querySelectorAll("[data-fancybox-count]")) $el.innerHTML = cnt;
                if (!this.fancybox.option("infinite")) {
                    for (const $el of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")) if (0 === idx) $el.setAttribute("disabled", ""); else $el.removeAttribute("disabled");
                    for (const $el of this.fancybox.$container.querySelectorAll("[data-fancybox-next]")) if (idx === cnt - 1) $el.setAttribute("disabled", ""); else $el.removeAttribute("disabled");
                }
            }
            cleanup() {
                if (this.Slideshow && this.Slideshow.isActive()) this.Slideshow.clearTimer();
                if (this.$container) this.$container.remove();
                this.$container = null;
            }
            attach() {
                this.fancybox.on(this.events);
            }
            detach() {
                this.fancybox.off(this.events);
                this.cleanup();
            }
        }
        Toolbar.defaults = Toolbar_defaults;
        const Fancybox_plugins_Plugins = {
            ScrollLock,
            Thumbs,
            Html,
            Toolbar,
            Image: Image_Image,
            Hash
        };
        const l10n_en = {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            MODAL: "You can close this modal content with the ESC key",
            ERROR: "Something Went Wrong, Please Try Again Later",
            IMAGE_ERROR: "Image Not Found",
            ELEMENT_NOT_FOUND: "HTML Element Not Found",
            AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
            AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
            IFRAME_ERROR: "Error Loading Page",
            TOGGLE_ZOOM: "Toggle zoom level",
            TOGGLE_THUMBS: "Toggle thumbnails",
            TOGGLE_SLIDESHOW: "Toggle slideshow",
            TOGGLE_FULLSCREEN: "Toggle full-screen mode",
            DOWNLOAD: "Download"
        };
        const Fancybox_defaults = {
            startIndex: 0,
            preload: 1,
            infinite: true,
            showClass: "fancybox-zoomInUp",
            hideClass: "fancybox-fadeOut",
            animated: true,
            hideScrollbar: true,
            parentEl: null,
            mainClass: null,
            autoFocus: true,
            trapFocus: true,
            placeFocusBack: true,
            click: "close",
            closeButton: "inside",
            dragToClose: true,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            template: {
                closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
                spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
                main: null
            },
            l10n: l10n_en
        };
        const instances = new Map;
        let called = 0;
        class Fancybox extends Base {
            constructor(items, options = {}) {
                items = items.map((item => {
                    if (item.width) item._width = item.width;
                    if (item.height) item._height = item.height;
                    return item;
                }));
                super(extend(true, {}, Fancybox_defaults, options));
                this.bindHandlers();
                this.state = "init";
                this.setItems(items);
                this.attachPlugins(Fancybox.Plugins);
                this.trigger("init");
                if (true === this.option("hideScrollbar")) this.hideScrollbar();
                this.initLayout();
                this.initCarousel();
                this.attachEvents();
                instances.set(this.id, this);
                this.trigger("prepare");
                this.state = "ready";
                this.trigger("ready");
                this.$container.setAttribute("aria-hidden", "false");
                if (this.option("trapFocus")) this.focus();
            }
            option(name, ...rest) {
                const slide = this.getSlide();
                let value = slide ? slide[name] : void 0;
                if (void 0 !== value) {
                    if ("function" === typeof value) value = value.call(this, this, ...rest);
                    return value;
                }
                return super.option(name, ...rest);
            }
            bindHandlers() {
                for (const methodName of [ "onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform" ]) this[methodName] = this[methodName].bind(this);
            }
            attachEvents() {
                document.addEventListener("mousedown", this.onMousedown);
                document.addEventListener("keydown", this.onKeydown, true);
                if (this.option("trapFocus")) document.addEventListener("focus", this.onFocus, true);
                this.$container.addEventListener("click", this.onClick);
            }
            detachEvents() {
                document.removeEventListener("mousedown", this.onMousedown);
                document.removeEventListener("keydown", this.onKeydown, true);
                document.removeEventListener("focus", this.onFocus, true);
                this.$container.removeEventListener("click", this.onClick);
            }
            initLayout() {
                this.$root = this.option("parentEl") || document.body;
                let mainTemplate = this.option("template.main");
                if (mainTemplate) {
                    this.$root.insertAdjacentHTML("beforeend", this.localize(mainTemplate));
                    this.$container = this.$root.querySelector(".fancybox__container");
                }
                if (!this.$container) {
                    this.$container = document.createElement("div");
                    this.$root.appendChild(this.$container);
                }
                this.$container.onscroll = () => {
                    this.$container.scrollLeft = 0;
                    return false;
                };
                Object.entries({
                    class: "fancybox__container",
                    role: "dialog",
                    tabIndex: "-1",
                    "aria-modal": "true",
                    "aria-hidden": "true",
                    "aria-label": this.localize("{{MODAL}}")
                }).forEach((args => this.$container.setAttribute(...args)));
                if (this.option("animated")) this.$container.classList.add("is-animated");
                this.$backdrop = this.$container.querySelector(".fancybox__backdrop");
                if (!this.$backdrop) {
                    this.$backdrop = document.createElement("div");
                    this.$backdrop.classList.add("fancybox__backdrop");
                    this.$container.appendChild(this.$backdrop);
                }
                this.$carousel = this.$container.querySelector(".fancybox__carousel");
                if (!this.$carousel) {
                    this.$carousel = document.createElement("div");
                    this.$carousel.classList.add("fancybox__carousel");
                    this.$container.appendChild(this.$carousel);
                }
                this.$container.Fancybox = this;
                this.id = this.$container.getAttribute("id");
                if (!this.id) {
                    this.id = this.options.id || ++called;
                    this.$container.setAttribute("id", "fancybox-" + this.id);
                }
                const mainClass = this.option("mainClass");
                if (mainClass) this.$container.classList.add(...mainClass.split(" "));
                document.documentElement.classList.add("with-fancybox");
                this.trigger("initLayout");
                return this;
            }
            setItems(items) {
                const slides = [];
                for (const slide of items) {
                    const $trigger = slide.$trigger;
                    if ($trigger) {
                        const dataset = $trigger.dataset || {};
                        slide.src = dataset.src || $trigger.getAttribute("href") || slide.src;
                        slide.type = dataset.type || slide.type;
                        if (!slide.src && $trigger instanceof HTMLImageElement) slide.src = $trigger.currentSrc || slide.$trigger.src;
                    }
                    let $thumb = slide.$thumb;
                    if (!$thumb) {
                        let origTarget = slide.$trigger && slide.$trigger.origTarget;
                        if (origTarget) if (origTarget instanceof HTMLImageElement) $thumb = origTarget; else $thumb = origTarget.querySelector("img:not([aria-hidden])");
                        if (!$thumb && slide.$trigger) $thumb = slide.$trigger instanceof HTMLImageElement ? slide.$trigger : slide.$trigger.querySelector("img:not([aria-hidden])");
                    }
                    slide.$thumb = $thumb || null;
                    let thumb = slide.thumb;
                    if (!thumb && $thumb) {
                        thumb = $thumb.currentSrc || $thumb.src;
                        if (!thumb && $thumb.dataset) thumb = $thumb.dataset.lazySrc || $thumb.dataset.src;
                    }
                    if (!thumb && "image" === slide.type) thumb = slide.src;
                    slide.thumb = thumb || null;
                    slide.caption = slide.caption || "";
                    slides.push(slide);
                }
                this.items = slides;
            }
            initCarousel() {
                this.Carousel = new Carousel(this.$carousel, extend(true, {}, {
                    prefix: "",
                    classNames: {
                        viewport: "fancybox__viewport",
                        track: "fancybox__track",
                        slide: "fancybox__slide"
                    },
                    textSelection: true,
                    preload: this.option("preload"),
                    friction: .88,
                    slides: this.items,
                    initialPage: this.options.startIndex,
                    slidesPerPage: 1,
                    infiniteX: this.option("infinite"),
                    infiniteY: true,
                    l10n: this.option("l10n"),
                    Dots: false,
                    Navigation: {
                        classNames: {
                            main: "fancybox__nav",
                            button: "carousel__button",
                            next: "is-next",
                            prev: "is-prev"
                        }
                    },
                    Panzoom: {
                        textSelection: true,
                        panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"),
                        lockAxis: () => {
                            if (this.Carousel) {
                                let rez = "x";
                                if (this.option("dragToClose")) rez += "y";
                                return rez;
                            }
                        }
                    },
                    on: {
                        "*": (name, ...details) => this.trigger(`Carousel.${name}`, ...details),
                        init: carousel => this.Carousel = carousel,
                        createSlide: this.onCreateSlide,
                        settle: this.onSettle
                    }
                }, this.option("Carousel")));
                if (this.option("dragToClose")) this.Carousel.Panzoom.on({
                    touchMove: this.onTouchMove,
                    afterTransform: this.onTransform,
                    touchEnd: this.onTouchEnd
                });
                this.trigger("initCarousel");
                return this;
            }
            onCreateSlide(carousel, slide) {
                let caption = slide.caption || "";
                if ("function" === typeof this.options.caption) caption = this.options.caption.call(this, this, this.Carousel, slide);
                if ("string" === typeof caption && caption.length) {
                    const $caption = document.createElement("div");
                    const id = `fancybox__caption_${this.id}_${slide.index}`;
                    $caption.className = "fancybox__caption";
                    $caption.innerHTML = caption;
                    $caption.setAttribute("id", id);
                    slide.$caption = slide.$el.appendChild($caption);
                    slide.$el.classList.add("has-caption");
                    slide.$el.setAttribute("aria-labelledby", id);
                }
            }
            onSettle() {
                if (this.option("autoFocus")) this.focus();
            }
            onFocus(event) {
                this.focus(event);
            }
            onClick(event) {
                if (event.defaultPrevented) return;
                let eventTarget = event.composedPath()[0];
                if (eventTarget.matches("[data-fancybox-close]")) {
                    event.preventDefault();
                    Fancybox.close(false, event);
                    return;
                }
                if (eventTarget.matches("[data-fancybox-next]")) {
                    event.preventDefault();
                    Fancybox.next();
                    return;
                }
                if (eventTarget.matches("[data-fancybox-prev]")) {
                    event.preventDefault();
                    Fancybox.prev();
                    return;
                }
                if (!eventTarget.matches(FOCUSABLE_ELEMENTS)) document.activeElement.blur();
                if (eventTarget.closest(".fancybox__content")) return;
                if (getSelection().toString().length) return;
                if (false === this.trigger("click", event)) return;
                const action = this.option("click");
                switch (action) {
                  case "close":
                    this.close();
                    break;

                  case "next":
                    this.next();
                    break;
                }
            }
            onTouchMove() {
                const panzoom = this.getSlide().Panzoom;
                return panzoom && 1 !== panzoom.content.scale ? false : true;
            }
            onTouchEnd(panzoom) {
                const distanceY = panzoom.dragOffset.y;
                if (Math.abs(distanceY) >= 150 || Math.abs(distanceY) >= 35 && panzoom.dragOffset.time < 350) {
                    if (this.option("hideClass")) this.getSlide().hideClass = `fancybox-throwOut${panzoom.content.y < 0 ? "Up" : "Down"}`;
                    this.close();
                } else if ("y" === panzoom.lockAxis) panzoom.panTo({
                    y: 0
                });
            }
            onTransform(panzoom) {
                const $backdrop = this.$backdrop;
                if ($backdrop) {
                    const yPos = Math.abs(panzoom.content.y);
                    const opacity = yPos < 1 ? "" : Math.max(.33, Math.min(1, 1 - yPos / panzoom.content.fitHeight * 1.5));
                    this.$container.style.setProperty("--fancybox-ts", opacity ? "0s" : "");
                    this.$container.style.setProperty("--fancybox-opacity", opacity);
                }
            }
            onMousedown() {
                if ("ready" === this.state) document.body.classList.add("is-using-mouse");
            }
            onKeydown(event) {
                if (Fancybox.getInstance().id !== this.id) return;
                document.body.classList.remove("is-using-mouse");
                const key = event.key;
                const keyboard = this.option("keyboard");
                if (!keyboard || event.ctrlKey || event.altKey || event.shiftKey) return;
                const target = event.composedPath()[0];
                const classList = document.activeElement && document.activeElement.classList;
                const isUIElement = classList && classList.contains("carousel__button");
                if ("Escape" !== key && !isUIElement) {
                    let ignoreElements = event.target.isContentEditable || -1 !== [ "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(target.nodeName);
                    if (ignoreElements) return;
                }
                if (false === this.trigger("keydown", key, event)) return;
                const action = keyboard[key];
                if ("function" === typeof this[action]) this[action]();
            }
            getSlide() {
                const carousel = this.Carousel;
                if (!carousel) return null;
                const page = null === carousel.page ? carousel.option("initialPage") : carousel.page;
                const pages = carousel.pages || [];
                if (pages.length && pages[page]) return pages[page].slides[0];
                return null;
            }
            focus(event) {
                if (Fancybox.ignoreFocusChange) return;
                if ([ "init", "closing", "customClosing", "destroy" ].indexOf(this.state) > -1) return;
                const $container = this.$container;
                const currentSlide = this.getSlide();
                const $currentSlide = "done" === currentSlide.state ? currentSlide.$el : null;
                if ($currentSlide && $currentSlide.contains(document.activeElement)) return;
                if (event) event.preventDefault();
                Fancybox.ignoreFocusChange = true;
                const allFocusableElems = Array.from($container.querySelectorAll(FOCUSABLE_ELEMENTS));
                let enabledElems = [];
                let $firstEl;
                for (let node of allFocusableElems) {
                    const isNodeVisible = node.offsetParent;
                    const isNodeInsideCurrentSlide = $currentSlide && $currentSlide.contains(node);
                    const isNodeOutsideCarousel = !this.Carousel.$viewport.contains(node);
                    if (isNodeVisible && (isNodeInsideCurrentSlide || isNodeOutsideCarousel)) {
                        enabledElems.push(node);
                        if (void 0 !== node.dataset.origTabindex) {
                            node.tabIndex = node.dataset.origTabindex;
                            node.removeAttribute("data-orig-tabindex");
                        }
                        if (node.hasAttribute("autoFocus") || !$firstEl && isNodeInsideCurrentSlide && !node.classList.contains("carousel__button")) $firstEl = node;
                    } else {
                        node.dataset.origTabindex = void 0 === node.dataset.origTabindex ? node.getAttribute("tabindex") : node.dataset.origTabindex;
                        node.tabIndex = -1;
                    }
                }
                if (!event) {
                    if (this.option("autoFocus") && $firstEl) setFocusOn($firstEl); else if (enabledElems.indexOf(document.activeElement) < 0) setFocusOn($container);
                } else if (enabledElems.indexOf(event.target) > -1) this.lastFocus = event.target; else if (this.lastFocus === $container) setFocusOn(enabledElems[enabledElems.length - 1]); else setFocusOn($container);
                this.lastFocus = document.activeElement;
                Fancybox.ignoreFocusChange = false;
            }
            hideScrollbar() {
                if (!canUseDOM) return;
                const scrollbarWidth = window.innerWidth - document.documentElement.getBoundingClientRect().width;
                const id = "fancybox-style-noscroll";
                let $style = document.getElementById(id);
                if ($style) return;
                if (scrollbarWidth > 0) {
                    $style = document.createElement("style");
                    $style.id = id;
                    $style.type = "text/css";
                    $style.innerHTML = `.compensate-for-scrollbar {padding-right: ${scrollbarWidth}px;}`;
                    document.getElementsByTagName("head")[0].appendChild($style);
                    document.body.classList.add("compensate-for-scrollbar");
                }
            }
            revealScrollbar() {
                document.body.classList.remove("compensate-for-scrollbar");
                const el = document.getElementById("fancybox-style-noscroll");
                if (el) el.remove();
            }
            clearContent(slide) {
                this.Carousel.trigger("removeSlide", slide);
                if (slide.$content) {
                    slide.$content.remove();
                    slide.$content = null;
                }
                if (slide.$closeButton) {
                    slide.$closeButton.remove();
                    slide.$closeButton = null;
                }
                if (slide._className) slide.$el.classList.remove(slide._className);
            }
            setContent(slide, html, opts = {}) {
                let $content;
                const $el = slide.$el;
                if (html instanceof HTMLElement) if ([ "img", "iframe", "video", "audio" ].indexOf(html.nodeName.toLowerCase()) > -1) {
                    $content = document.createElement("div");
                    $content.appendChild(html);
                } else $content = html; else {
                    const $fragment = document.createRange().createContextualFragment(html);
                    $content = document.createElement("div");
                    $content.appendChild($fragment);
                }
                if (slide.filter && !slide.error) $content = $content.querySelector(slide.filter);
                if (!($content instanceof Element)) {
                    this.setError(slide, "{{ELEMENT_NOT_FOUND}}");
                    return;
                }
                slide._className = `has-${opts.suffix || slide.type || "unknown"}`;
                $el.classList.add(slide._className);
                $content.classList.add("fancybox__content");
                if ("none" === $content.style.display || "none" === getComputedStyle($content).getPropertyValue("display")) $content.style.display = slide.display || this.option("defaultDisplay") || "flex";
                if (slide.id) $content.setAttribute("id", slide.id);
                slide.$content = $content;
                $el.prepend($content);
                this.manageCloseButton(slide);
                if ("loading" !== slide.state) this.revealContent(slide);
                return $content;
            }
            manageCloseButton(slide) {
                const position = void 0 === slide.closeButton ? this.option("closeButton") : slide.closeButton;
                if (!position || "top" === position && this.$closeButton) return;
                const $btn = document.createElement("button");
                $btn.classList.add("carousel__button", "is-close");
                $btn.setAttribute("title", this.options.l10n.CLOSE);
                $btn.innerHTML = this.option("template.closeButton");
                $btn.addEventListener("click", (e => this.close(e)));
                if ("inside" === position) {
                    if (slide.$closeButton) slide.$closeButton.remove();
                    slide.$closeButton = slide.$content.appendChild($btn);
                } else this.$closeButton = this.$container.insertBefore($btn, this.$container.firstChild);
            }
            revealContent(slide) {
                this.trigger("reveal", slide);
                slide.$content.style.visibility = "";
                let showClass = false;
                if (!(slide.error || "loading" === slide.state || null !== this.Carousel.prevPage || slide.index !== this.options.startIndex)) showClass = void 0 === slide.showClass ? this.option("showClass") : slide.showClass;
                if (!showClass) {
                    this.done(slide);
                    return;
                }
                slide.state = "animating";
                this.animateCSS(slide.$content, showClass, (() => {
                    this.done(slide);
                }));
            }
            animateCSS($element, className, callback) {
                if ($element) $element.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: true,
                    cancelable: true
                }));
                if (!$element || !className) {
                    if ("function" === typeof callback) callback();
                    return;
                }
                const handleAnimationEnd = function(event) {
                    if (event.currentTarget === this) {
                        $element.removeEventListener("animationend", handleAnimationEnd);
                        if (callback) callback();
                        $element.classList.remove(className);
                    }
                };
                $element.addEventListener("animationend", handleAnimationEnd);
                $element.classList.add(className);
            }
            done(slide) {
                slide.state = "done";
                this.trigger("done", slide);
                const currentSlide = this.getSlide();
                if (currentSlide && slide.index === currentSlide.index && this.option("autoFocus")) this.focus();
            }
            setError(slide, message) {
                slide.error = message;
                this.hideLoading(slide);
                this.clearContent(slide);
                const div = document.createElement("div");
                div.classList.add("fancybox-error");
                div.innerHTML = this.localize(message || "<p>{{ERROR}}</p>");
                this.setContent(slide, div, {
                    suffix: "error"
                });
            }
            showLoading(slide) {
                slide.state = "loading";
                slide.$el.classList.add("is-loading");
                let $spinner = slide.$el.querySelector(".fancybox__spinner");
                if ($spinner) return;
                $spinner = document.createElement("div");
                $spinner.classList.add("fancybox__spinner");
                $spinner.innerHTML = this.option("template.spinner");
                $spinner.addEventListener("click", (() => {
                    if (!this.Carousel.Panzoom.velocity) this.close();
                }));
                slide.$el.prepend($spinner);
            }
            hideLoading(slide) {
                const $spinner = slide.$el && slide.$el.querySelector(".fancybox__spinner");
                if ($spinner) {
                    $spinner.remove();
                    slide.$el.classList.remove("is-loading");
                }
                if ("loading" === slide.state) {
                    this.trigger("load", slide);
                    slide.state = "ready";
                }
            }
            next() {
                const carousel = this.Carousel;
                if (carousel && carousel.pages.length > 1) carousel.slideNext();
            }
            prev() {
                const carousel = this.Carousel;
                if (carousel && carousel.pages.length > 1) carousel.slidePrev();
            }
            jumpTo(...args) {
                if (this.Carousel) this.Carousel.slideTo(...args);
            }
            close(event) {
                if (event) event.preventDefault();
                if ([ "closing", "customClosing", "destroy" ].includes(this.state)) return;
                if (false === this.trigger("shouldClose", event)) return;
                this.state = "closing";
                this.Carousel.Panzoom.destroy();
                this.detachEvents();
                this.trigger("closing", event);
                if ("destroy" === this.state) return;
                this.$container.setAttribute("aria-hidden", "true");
                this.$container.classList.add("is-closing");
                const currentSlide = this.getSlide();
                this.Carousel.slides.forEach((slide => {
                    if (slide.$content && slide.index !== currentSlide.index) this.Carousel.trigger("removeSlide", slide);
                }));
                if ("closing" === this.state) {
                    const hideClass = void 0 === currentSlide.hideClass ? this.option("hideClass") : currentSlide.hideClass;
                    this.animateCSS(currentSlide.$content, hideClass, (() => {
                        this.destroy();
                    }), true);
                }
            }
            destroy() {
                if ("destroy" === this.state) return;
                this.state = "destroy";
                this.trigger("destroy");
                const $trigger = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
                this.Carousel.destroy();
                this.detachPlugins();
                this.Carousel = null;
                this.options = {};
                this.events = {};
                this.$container.remove();
                this.$container = this.$backdrop = this.$carousel = null;
                if ($trigger) setFocusOn($trigger);
                instances.delete(this.id);
                const nextInstance = Fancybox.getInstance();
                if (nextInstance) {
                    nextInstance.focus();
                    return;
                }
                document.documentElement.classList.remove("with-fancybox");
                document.body.classList.remove("is-using-mouse");
                this.revealScrollbar();
            }
            static show(items, options = {}) {
                return new Fancybox(items, options);
            }
            static fromEvent(event, options = {}) {
                if (event.defaultPrevented) return;
                if (event.button && 0 !== event.button) return;
                if (event.ctrlKey || event.metaKey || event.shiftKey) return;
                const origTarget = event.composedPath()[0];
                let eventTarget = origTarget;
                let triggerGroupName;
                if (eventTarget.matches("[data-fancybox-trigger]") || (eventTarget = eventTarget.closest("[data-fancybox-trigger]"))) triggerGroupName = eventTarget && eventTarget.dataset && eventTarget.dataset.fancyboxTrigger;
                if (triggerGroupName) {
                    const triggerItems = document.querySelectorAll(`[data-fancybox="${triggerGroupName}"]`);
                    const triggerIndex = parseInt(eventTarget.dataset.fancyboxIndex, 10) || 0;
                    eventTarget = triggerItems.length ? triggerItems[triggerIndex] : eventTarget;
                }
                if (!eventTarget) eventTarget = origTarget;
                let matchingOpener;
                let target;
                Array.from(Fancybox.openers.keys()).reverse().some((opener => {
                    target = eventTarget;
                    let found = false;
                    try {
                        if (target instanceof Element && ("string" === typeof opener || opener instanceof String)) found = target.matches(opener) || (target = target.closest(opener));
                    } catch (error) {}
                    if (found) {
                        event.preventDefault();
                        matchingOpener = opener;
                        return true;
                    }
                    return false;
                }));
                let rez = false;
                if (matchingOpener) {
                    options.event = event;
                    options.target = target;
                    target.origTarget = origTarget;
                    rez = Fancybox.fromOpener(matchingOpener, options);
                    const nextInstance = Fancybox.getInstance();
                    if (nextInstance && "ready" === nextInstance.state && event.detail) document.body.classList.add("is-using-mouse");
                }
                return rez;
            }
            static fromOpener(opener, options = {}) {
                const mapCallback = function(el) {
                    const falseValues = [ "false", "0", "no", "null", "undefined" ];
                    const trueValues = [ "true", "1", "yes" ];
                    const dataset = Object.assign({}, el.dataset);
                    const options = {};
                    for (let [key, value] of Object.entries(dataset)) {
                        if ("fancybox" === key) continue;
                        if ("width" === key || "height" === key) options[`_${key}`] = value; else if ("string" === typeof value || value instanceof String) if (falseValues.indexOf(value) > -1) options[key] = false; else if (trueValues.indexOf(options[key]) > -1) options[key] = true; else try {
                            options[key] = JSON.parse(value);
                        } catch (e) {
                            options[key] = value;
                        } else options[key] = value;
                    }
                    if (el instanceof Element) options.$trigger = el;
                    return options;
                };
                let items = [], index = options.startIndex || 0, target = options.target || null;
                options = extend({}, options, Fancybox.openers.get(opener));
                const groupAll = void 0 === options.groupAll ? false : options.groupAll;
                const groupAttr = void 0 === options.groupAttr ? "data-fancybox" : options.groupAttr;
                const groupValue = groupAttr && target ? target.getAttribute(`${groupAttr}`) : "";
                if (!target || groupValue || groupAll) {
                    const $root = options.root || (target ? target.getRootNode() : document.body);
                    items = [].slice.call($root.querySelectorAll(opener));
                }
                if (target && !groupAll) if (groupValue) items = items.filter((el => el.getAttribute(`${groupAttr}`) === groupValue)); else items = [ target ];
                if (!items.length) return false;
                const currentInstance = Fancybox.getInstance();
                if (currentInstance && items.indexOf(currentInstance.options.$trigger) > -1) return false;
                index = target ? items.indexOf(target) : index;
                items = items.map(mapCallback);
                return new Fancybox(items, extend({}, options, {
                    startIndex: index,
                    $trigger: target
                }));
            }
            static bind(selector, options = {}) {
                function attachClickEvent() {
                    document.body.addEventListener("click", Fancybox.fromEvent, false);
                }
                if (!canUseDOM) return;
                if (!Fancybox.openers.size) if (/complete|interactive|loaded/.test(document.readyState)) attachClickEvent(); else document.addEventListener("DOMContentLoaded", attachClickEvent);
                Fancybox.openers.set(selector, options);
            }
            static unbind(selector) {
                Fancybox.openers.delete(selector);
                if (!Fancybox.openers.size) Fancybox.destroy();
            }
            static destroy() {
                let fb;
                while (fb = Fancybox.getInstance()) fb.destroy();
                Fancybox.openers = new Map;
                document.body.removeEventListener("click", Fancybox.fromEvent, false);
            }
            static getInstance(id) {
                if (id) return instances.get(id);
                const instance = Array.from(instances.values()).reverse().find((instance => {
                    if (![ "closing", "customClosing", "destroy" ].includes(instance.state)) return instance;
                    return false;
                }));
                return instance || null;
            }
            static close(all = true, args) {
                if (all) for (const instance of instances.values()) instance.close(args); else {
                    const instance = Fancybox.getInstance();
                    if (instance) instance.close(args);
                }
            }
            static next() {
                const instance = Fancybox.getInstance();
                if (instance) instance.next();
            }
            static prev() {
                const instance = Fancybox.getInstance();
                if (instance) instance.prev();
            }
        }
        Fancybox.version = "__VERSION__";
        Fancybox.defaults = Fancybox_defaults;
        Fancybox.openers = new Map;
        Fancybox.Plugins = Fancybox_plugins_Plugins;
        Fancybox.bind("[data-fancybox]");
        for (const [key, Plugin] of Object.entries(Fancybox.Plugins || {})) if ("function" === typeof Plugin.create) Plugin.create(Fancybox);
        $(".slider").slick({
            infinite: true,
            autoplay: true,
            dots: true,
            fade: true,
            arrows: false
        });
        $(".reviews__slider").slick({
            infinite: true,
            arrows: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dotsClass: "slick-dots-reviews",
            responsive: [ {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            } ]
        });
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        addLoadedClass();
        menuInit();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
    })();
})();