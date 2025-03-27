// Style firefox
//user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.light-dark.enabled", true);
user_pref("browser.tabs.tabMinWidth", 66);
user_pref("browser.tabs.tabClipWidth", 86);
user_pref("fp.tweak.autohide-bookmarks", true);
user_pref("fp.tweak.macos-button", false);
user_pref("fp.tweak.rounded-corners", true);

// disable spell checking
user_pref("layout.spellcheckDefault", 0);
// disable auto install updates
user_pref("app.update.auto", false);
// disable background service to install updates
user_pref("app.update.service.enabled", false);
// open tabs to the right of the current tab
user_pref("browser.tabs.insertAfterCurrent", true);
// enable dark-mode
//user_pref("browser.in-content.dark-mode", true);
//user_pref("ui.systemUsesDarkTheme", 1);
// restore previous session
user_pref("browser.startup.page", 3);
// disable data collection & crash reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// disable WebRTC leaks
user_pref("media.peerconnection.enabled", false);
// allow search sugggestions in private windows
user_pref("browser.search.suggest.enabled.private", true);
// Disables geolocation and firefox logging geolocation requests.
user_pref("geo.enabled", true);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.url", "");
// Only send pings if send and receiving host match (same website).
user_pref("browser.send_pings.require_same_host", true);
// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
// Disable (Windows-only) scheduled task which runs in the background to collect and submit data about the browser
user_pref("default-browser-agent", false);
// Better font rendering
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);

//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 135                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", true);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
