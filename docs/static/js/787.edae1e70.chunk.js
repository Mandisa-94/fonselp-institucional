'use strict';
(self.webpackChunkfonselp_institucional =
	self.webpackChunkfonselp_institucional || []).push([
	[787],
	{
		787: function (e, n, t) {
			t.r(n),
				t.d(n, {
					getCLS: function () {
						return y;
					},
					getFCP: function () {
						return g;
					},
					getFID: function () {
						return C;
					},
					getLCP: function () {
						return P;
					},
					getTTFB: function () {
						return D;
					},
				});
			let i;
			let r;
			let a;
			let o;
			const u = function (e, n) {
				return {
					name: e,
					value: void 0 === n ? -1 : n,
					delta: 0,
					entries: [],
					id: 'v2-'
						.concat(Date.now(), '-')
						.concat(Math.floor(8999999999999 * Math.random()) + 1e12),
				};
			};
			const c = function (e, n) {
				try {
					if (PerformanceObserver.supportedEntryTypes.includes(e)) {
						if (e === 'first-input' && !('PerformanceEventTiming' in self))
							return;
						const t = new PerformanceObserver(function (e) {
							return e.getEntries().map(n);
						});
						return t.observe({ type: e, buffered: !0 }), t;
					}
				} catch (e) {}
			};
			const f = function (e, n) {
				const t = function t(i) {
					(i.type !== 'pagehide' && document.visibilityState !== 'hidden') ||
						(e(i),
						n &&
							(removeEventListener('visibilitychange', t, !0),
							removeEventListener('pagehide', t, !0)));
				};
				addEventListener('visibilitychange', t, !0),
					addEventListener('pagehide', t, !0);
			};
			const s = function (e) {
				addEventListener(
					'pageshow',
					function (n) {
						n.persisted && e(n);
					},
					!0
				);
			};
			const m = function (e, n, t) {
				let i;
				return function (r) {
					n.value >= 0 &&
						(r || t) &&
						((n.delta = n.value - (i || 0)),
						(n.delta || void 0 === i) && ((i = n.value), e(n)));
				};
			};
			let v = -1;
			const p = function () {
				return document.visibilityState === 'hidden' ? 0 : 1 / 0;
			};
			const d = function () {
				f(function (e) {
					const n = e.timeStamp;
					v = n;
				}, !0);
			};
			const l = function () {
				return (
					v < 0 &&
						((v = p()),
						d(),
						s(function () {
							setTimeout(function () {
								(v = p()), d();
							}, 0);
						})),
					{
						get firstHiddenTime() {
							return v;
						},
					}
				);
			};
			var g = function (e, n) {
				let t;
				const i = l();
				let r = u('FCP');
				const a = function (e) {
					e.name === 'first-contentful-paint' &&
						(f && f.disconnect(),
						e.startTime < i.firstHiddenTime &&
							((r.value = e.startTime), r.entries.push(e), t(!0)));
				};
				const o =
					window.performance &&
					performance.getEntriesByName &&
					performance.getEntriesByName('first-contentful-paint')[0];
				var f = o ? null : c('paint', a);
				(o || f) &&
					((t = m(e, r, n)),
					o && a(o),
					s(function (i) {
						(r = u('FCP')),
							(t = m(e, r, n)),
							requestAnimationFrame(function () {
								requestAnimationFrame(function () {
									(r.value = performance.now() - i.timeStamp), t(!0);
								});
							});
					}));
			};
			let h = !1;
			let T = -1;
			var y = function (e, n) {
				h ||
					(g(function (e) {
						T = e.value;
					}),
					(h = !0));
				let t;
				const i = function (n) {
					T > -1 && e(n);
				};
				let r = u('CLS', 0);
				let a = 0;
				let o = [];
				const v = function (e) {
					if (!e.hadRecentInput) {
						const n = o[0];
						const i = o[o.length - 1];
						a &&
						e.startTime - i.startTime < 1e3 &&
						e.startTime - n.startTime < 5e3
							? ((a += e.value), o.push(e))
							: ((a = e.value), (o = [e])),
							a > r.value && ((r.value = a), (r.entries = o), t());
					}
				};
				const p = c('layout-shift', v);
				p &&
					((t = m(i, r, n)),
					f(function () {
						p.takeRecords().map(v), t(!0);
					}),
					s(function () {
						(a = 0), (T = -1), (r = u('CLS', 0)), (t = m(i, r, n));
					}));
			};
			const E = { passive: !0, capture: !0 };
			const w = new Date();
			const L = function (e, n) {
				i || ((i = n), (r = e), (a = new Date()), F(removeEventListener), S());
			};
			var S = function () {
				if (r >= 0 && r < a - w) {
					const e = {
						entryType: 'first-input',
						name: i.type,
						target: i.target,
						cancelable: i.cancelable,
						startTime: i.timeStamp,
						processingStart: i.timeStamp + r,
					};
					o.forEach(function (n) {
						n(e);
					}),
						(o = []);
				}
			};
			const b = function (e) {
				if (e.cancelable) {
					const n =
						(e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
					e.type == 'pointerdown'
						? (function (e, n) {
								const t = function () {
									L(e, n), r();
								};
								const i = function () {
									r();
								};
								var r = function () {
									removeEventListener('pointerup', t, E),
										removeEventListener('pointercancel', i, E);
								};
								addEventListener('pointerup', t, E),
									addEventListener('pointercancel', i, E);
						  })(n, e)
						: L(n, e);
				}
			};
			var F = function (e) {
				['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (
					n
				) {
					return e(n, b, E);
				});
			};
			var C = function (e, n) {
				let t;
				const a = l();
				let v = u('FID');
				const p = function (e) {
					e.startTime < a.firstHiddenTime &&
						((v.value = e.processingStart - e.startTime),
						v.entries.push(e),
						t(!0));
				};
				const d = c('first-input', p);
				(t = m(e, v, n)),
					d &&
						f(function () {
							d.takeRecords().map(p), d.disconnect();
						}, !0),
					d &&
						s(function () {
							let a;
							(v = u('FID')),
								(t = m(e, v, n)),
								(o = []),
								(r = -1),
								(i = null),
								F(addEventListener),
								(a = p),
								o.push(a),
								S();
						});
			};
			const k = {};
			var P = function (e, n) {
				let t;
				const i = l();
				let r = u('LCP');
				const a = function (e) {
					const n = e.startTime;
					n < i.firstHiddenTime && ((r.value = n), r.entries.push(e), t());
				};
				const o = c('largest-contentful-paint', a);
				if (o) {
					t = m(e, r, n);
					const v = function () {
						k[r.id] ||
							(o.takeRecords().map(a), o.disconnect(), (k[r.id] = !0), t(!0));
					};
					['keydown', 'click'].forEach(function (e) {
						addEventListener(e, v, { once: !0, capture: !0 });
					}),
						f(v, !0),
						s(function (i) {
							(r = u('LCP')),
								(t = m(e, r, n)),
								requestAnimationFrame(function () {
									requestAnimationFrame(function () {
										(r.value = performance.now() - i.timeStamp),
											(k[r.id] = !0),
											t(!0);
									});
								});
						});
				}
			};
			var D = function (e) {
				let n;
				const t = u('TTFB');
				(n = function () {
					try {
						const n =
							performance.getEntriesByType('navigation')[0] ||
							(function () {
								const e = performance.timing;
								const n = { entryType: 'navigation', startTime: 0 };
								for (const t in e)
									t !== 'navigationStart' &&
										t !== 'toJSON' &&
										(n[t] = Math.max(e[t] - e.navigationStart, 0));
								return n;
							})();
						if (
							((t.value = t.delta = n.responseStart),
							t.value < 0 || t.value > performance.now())
						)
							return;
						(t.entries = [n]), e(t);
					} catch (e) {}
				}),
					document.readyState === 'complete'
						? setTimeout(n, 0)
						: addEventListener('load', function () {
								return setTimeout(n, 0);
						  });
			};
		},
	},
]);
// # sourceMappingURL=787.edae1e70.chunk.js.map
