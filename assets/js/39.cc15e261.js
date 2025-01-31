(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{375:function(e,t,a){"use strict";a.r(t);var r=a(25),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"updating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[e._v("#")]),e._v(" Updating")]),e._v(" "),t("p",[e._v("This process is for instances already running "),t("strong",[e._v("Chevereto V4")]),e._v(". The process consist in update software files and then proceed with database migrations.")]),e._v(" "),t("h2",{attrs:{id:"software-filesystem-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-filesystem-update"}},[e._v("#")]),e._v(" Software filesystem update")]),e._v(" "),t("p",[e._v("To update the software files depends on how you installed Chevereto. Follow the instructions for your installation method.")]),e._v(" "),t("h3",{attrs:{id:"release-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#release-package"}},[e._v("#")]),e._v(" Release package")]),e._v(" "),t("p",[e._v("This applies to any "),t("strong",[e._v("non-Docker")]),e._v(" installation.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" For paid edition and if you haven't entered your license key make to visit "),t("code",[e._v("/dashboard/?license")]),e._v(" first.")]),e._v(" "),t("ul",[t("li",[e._v("Go to "),t("code",[e._v("/dashboard")])]),e._v(" "),t("li",[e._v("Click on "),t("strong",[e._v("Check upgrades")]),e._v(" button")]),e._v(" "),t("li",[e._v("Follow the on-screen upgrade instructions")])]),e._v(" "),t("p",[e._v("For CLI driven update run the following command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("php app/upgrading.php\n")])])]),t("p",[e._v("If you need to force upgrade (re-download software files) you can do it by accessing to "),t("code",[e._v("/dashboard/?upgrade")]),e._v(".")]),e._v(" "),t("p",[e._v("For manual upgrade refer to "),t("RouterLink",{attrs:{to:"/application/installing/installation.html#using-release-package"}},[e._v("Installing")]),e._v(" for instructions on how to install the software files.")],1),e._v(" "),t("h3",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),t("p",[e._v("When using Docker it will required to re-build the Chevereto image ("),t("a",{attrs:{href:"https://github.com/chevereto/docker/blob/4.2/docs/BUILDING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("make image"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://github.com/chevereto/docker/blob/4.2/docs/PURE-DOCKER.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker build"),t("OutboundLink")],1),e._v(") and then re-start the containers.")]),e._v(" "),t("p",[e._v("Refer to "),t("a",{attrs:{href:"https://github.com/chevereto/docker/blob/4.2/docs/UPDATING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("UPDATING"),t("OutboundLink")],1),e._v(" for instructions.")]),e._v(" "),t("h2",{attrs:{id:"database-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-update"}},[e._v("#")]),e._v(" Database update")]),e._v(" "),t("p",[e._v("Once the software files gets updated it will required to update the Chevereto database schema. This process can be carried on HTTP or command-line context.")]),e._v(" "),t("h3",{attrs:{id:"http-database-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-database-update"}},[e._v("#")]),e._v(" HTTP database update")]),e._v(" "),t("p",[e._v("To update Chevereto database via web:")]),e._v(" "),t("ul",[t("li",[e._v("Login as Admin")]),e._v(" "),t("li",[e._v("Go to "),t("code",[e._v("/update")])])]),e._v(" "),t("h3",{attrs:{id:"cli-database-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-database-update"}},[e._v("#")]),e._v(" CLI database update")]),e._v(" "),t("p",[e._v("To update Chevereto database from the command line:")]),e._v(" "),t("ul",[t("li",[e._v("SSH and "),t("code",[e._v("cd")]),e._v(" to your Chevereto instance")]),e._v(" "),t("li",[e._v("Run "),t("RouterLink",{attrs:{to:"/application/reference/cli.html#update"}},[e._v("CLI update")]),e._v(" "),t("code",[e._v("app/bin/legacy -C update")])],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);