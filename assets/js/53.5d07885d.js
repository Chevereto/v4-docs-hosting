(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{390:function(e,t,r){"use strict";r.r(t);var a=r(25),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[e._v("#")]),e._v(" Debug")]),e._v(" "),t("p",[e._v("Debug enables to dump information about errors that may be affecting the software functionality. If Chevereto isn't working properly it will require debugging to understand the situation.")]),e._v(" "),t("p",[e._v("Debug refers to check the system logs, error messages, and any other information to identify the root cause of the problem.")]),e._v(" "),t("h2",{attrs:{id:"debug-with-user-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-with-user-interface"}},[e._v("#")]),e._v(" Debug with user interface")]),e._v(" "),t("p",[e._v("To debug errors go to "),t("a",{attrs:{href:"https://v4-admin.chevereto.com/settings/system.html#debug-errors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Settings > System > Debug errors"),t("OutboundLink")],1),e._v(' and enable "Debug errors". By enabling this Chevereto will debug errors to the screen (only to administrators).')]),e._v(" "),t("h2",{attrs:{id:"debug-with-xrdebug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-with-xrdebug"}},[e._v("#")]),e._v(" Debug with xrDebug")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://xrdebug.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("xrDebug"),t("OutboundLink")],1),e._v(" enables to spawn a user-friendly debugger that will automatically catch and display errors in real-time.")]),e._v(" "),t("p",[e._v("You can "),t("a",{attrs:{href:"https://docs.xrdebug.com/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install"),t("OutboundLink")],1),e._v(" xrDebug anywhere and connect it to your Chevereto, xrDebug also comes built-in with Chevereto.")]),e._v(" "),t("ul",[t("li",[e._v("Run xrDebug built-in server:")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" vendor/bin/xrdebug\n")])])]),t("ul",[t("li",[e._v("Enable xrDebug by configuring the "),t("RouterLink",{attrs:{to:"/application/configuration/environment.html#xrdebug-variables"}},[e._v("xrDebug variables")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"debug-with-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-with-docker"}},[e._v("#")]),e._v(" Debug with Docker")]),e._v(" "),t("p",[e._v("Replace "),t("code",[e._v("CONTAINER")]),e._v(" with the container name.")]),e._v(" "),t("p",[e._v("Chevereto error log:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs CONTAINER "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("1")]),e._v(">")]),e._v("/dev/null\n")])])]),t("p",[e._v("Chevereto access log:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs CONTAINER "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v("/dev/null\n")])])]),t("h2",{attrs:{id:"debug-with-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-with-logging"}},[e._v("#")]),e._v(" Debug with logging")]),e._v(" "),t("p",[e._v("Debug can be "),t("RouterLink",{attrs:{to:"/application/configuration/configuring.html"}},[e._v("configured")]),e._v(" using "),t("RouterLink",{attrs:{to:"/application/configuration/environment.html#debug-variables"}},[e._v("environment variables")]),e._v(" to log to a file or device.")],1),e._v(" "),t("h3",{attrs:{id:"debug-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-level"}},[e._v("#")]),e._v(" Debug level")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note on debug levels")]),e._v(" "),t("p",[e._v("Error level >= 2 is not recommended for production environments. Is not safe to print the errors to the screen, handle it with care.")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Level (N)")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("0")]),e._v(" "),t("td",[e._v("No debug")])]),e._v(" "),t("tr",[t("td",[e._v("1")]),e._v(" "),t("td",[e._v("(default) Debug to "),t("code",[e._v("log_device")])])]),e._v(" "),t("tr",[t("td",[e._v("2")]),e._v(" "),t("td",[e._v("Print errors (no logging)")])]),e._v(" "),t("tr",[t("td",[e._v("3")]),e._v(" "),t("td",[e._v("Print errors and log to "),t("code",[e._v("log_device")])])])])]),e._v(" "),t("p",[e._v("Use "),t("code",[e._v("CHEVERETO_DEBUG_LEVEL=N")]),e._v(" to configure the debug level.")]),e._v(" "),t("h2",{attrs:{id:"error-log-device"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-log-device"}},[e._v("#")]),e._v(" Error log device")]),e._v(" "),t("p",[e._v("Use "),t("RouterLink",{attrs:{to:"/application/configuration/environment.html#error-logging-variables"}},[t("code",[e._v("CHEVERETO_ERROR_LOG")])]),e._v(" to customize where error log will be written.")],1),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Permissions")]),e._v(" "),t("p",[e._v("Double-check that the target log device is writable by the user running PHP.")])]),e._v(" "),t("h2",{attrs:{id:"debug-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-development"}},[e._v("#")]),e._v(" Debug (development)")]),e._v(" "),t("p",[e._v("To enable debug in development you can set the environment variable "),t("code",[e._v("CHEVERETO_ENVIRONMENT")]),e._v(" to "),t("code",[e._v("dev")]),e._v(". "),t("strong",[e._v("Note:")]),e._v(" This variable is read from "),t("code",[e._v("$_ENV")]),e._v(" (server context) not from "),t("code",[e._v("app/env.php")]),e._v(" (Chevereto app).")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CHEVERETO_ENVIRONMENT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("dev\n")])])]),t("h3",{attrs:{id:"editing-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editing-source"}},[e._v("#")]),e._v(" Editing source")]),e._v(" "),t("p",[e._v("In cases where the error is preventing the application to boot you can force error display by editing the source code. This will allow to debug early in the application bootstrapping process.")]),e._v(" "),t("ul",[t("li",[e._v("Open "),t("code",[e._v("app/legacy/load/register-handlers.php")])]),e._v(" "),t("li",[e._v("Change this:")])]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$doDebug")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("in_array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$debugLevel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("isDebug")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("ul",[t("li",[e._v("To this:")])]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//$doDebug = in_array($debugLevel, [2, 3], true) || isDebug();")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$doDebug")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"finding-the-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-logs"}},[e._v("#")]),e._v(" Finding the logs")]),e._v(" "),t("p",[e._v("This vary depending the server provider and how PHP runs in the server. In doubt, always ask first to your system administrator.")]),e._v(" "),t("ul",[t("li",[e._v("Chevereto\n"),t("ul",[t("li",[e._v("Logs by default at "),t("code",[e._v("php://stderr")])]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/application/configuration/environment.html#error-logging-variables"}},[e._v("Configurable")]),e._v(" via\n"),t("ul",[t("li",[t("code",[e._v("CHEVERETO_ERROR_LOG")])]),e._v(" "),t("li",[t("code",[e._v("CHEVERETO_ERROR_LOG_CLI")])]),e._v(" "),t("li",[t("code",[e._v("CHEVERETO_ERROR_LOG_CRON")])])])],1)])]),e._v(" "),t("li",[e._v("Docker\n"),t("ul",[t("li",[e._v("Logs to "),t("code",[e._v("/dev/stderr")])])])]),e._v(" "),t("li",[e._v("xrDebug\n"),t("ul",[t("li",[e._v("Streams the debug messages to the xrDebug session")])])]),e._v(" "),t("li",[e._v("Apache\n"),t("ul",[t("li",[e._v("Logs by default at "),t("code",[e._v("/var/log/apache2/error.log")])]),e._v(" "),t("li",[e._v("Virtual host directive defines custom error log location")]),e._v(" "),t("li",[e._v("Commonly configured for "),t("code",[e._v("/var/www/domain.com/logs")])])])]),e._v(" "),t("li",[e._v("nginx\n"),t("ul",[t("li",[e._v("Logs by default at "),t("code",[e._v("/var/log/nginx/error.log")])]),e._v(" "),t("li",[e._v("Server block defines custom error log location")]),e._v(" "),t("li",[e._v("Commonly configured for "),t("code",[e._v("/var/www/domain.com/logs")])])])]),e._v(" "),t("li",[e._v("cPanel\n"),t("ul",[t("li",[e._v("Logs by default at "),t("code",[e._v("../domain.com.error.log")]),e._v(" (parent of "),t("code",[e._v("public_html")]),e._v(" folder)")]),e._v(" "),t("li",[e._v("Vary a lot from providers and cPanel version")])])])]),e._v(" "),t("h3",{attrs:{id:"i-can-t-find-the-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-can-t-find-the-logs"}},[e._v("#")]),e._v(" I can't find the logs")]),e._v(" "),t("p",[e._v("You can configure "),t("code",[e._v("CHEVERETO_DEBUG_LEVEL")]),e._v(" >= 2 but note that this error reporting level "),t("strong",[e._v("could compromise")]),e._v(" your installation. Restrict any public access to your website and revert to "),t("code",[e._v("CHEVERETO_DEBUG_LEVEL=1")]),e._v(" as soon as possible.")]),e._v(" "),t("p",[e._v("If you can't find the logs or you are having a hard time with this you can request "),t("a",{attrs:{href:"https://chevereto.com/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extra Support"),t("OutboundLink")],1),e._v(" so we can safely debug your installation.")])])}),[],!1,null,null,null);t.default=s.exports}}]);