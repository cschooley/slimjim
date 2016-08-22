title: Home
# SlimJim

a website you don't have to patch

## Features
* A %100 client-side solution for semi-dynamic web pages
* Ideal use cases:
  * web pages that you like to ignore for years without getting hacked
  * static hosting enviornments
  * you like editing your web pages in markdown/vim
* All content is stored in markdown files (*.md) in the web directories
* # is used for URL base:
    * http://mysite.com/#mypage -> HTTPROOT/mypage.md
    * http://mysite.com/#mypage/subdir -> HTTPROOT/subdir/index.md
* Directories my be nested
* Page edits are accomplished by web-dav, ssh, or any other means to edit the .md files
    * Prevents attacks that leverage dymanic CMS systems
    * Only requires static HTTP hosting to install (no server-side code)

References:

* [github]	(https://github.com/cschooley/slimjim)
* [about]	(#about.md)
* [readme.md]   (#readme.md)
* [bootstrap]   (http://getbootstrap.com/)
* [markdown]    (https://daringfireball.net/projects/markdown/)
* [markdown.js] (https://github.com/evilstreak/markdown-js)
