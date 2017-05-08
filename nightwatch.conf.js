var seleniumServer = require('selenium-server');
var phantomjs = require('phantomjs-prebuilt')

module.exports = {
	"src_folders": ["tests"],
	"output_folder": "reports",
	"custom_commands_path": "",
	"custom_assertions_path": "",
	"page_objects_path": "page-objects",
	"globals_path": "",

	"selenium": {
		"start_process": true,
		"server_path": "./bin/drivers/selenium-server-standalone-2.52.0.jar",
		"host": "127.0.0.1",
		"port": 4444,
		"cli_args": {
			"webdriver.chrome.driver": "./bin/drivers/chromedriver",
			"webdriver.gecko.driver" : "./bin/drivers/geckodriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "https://www.amazon.com",
			"selenium_host": "localhost",
			"selenium_port": 4444,
			"pathname": "/wd/hub",
			"silent": true,
			"screenshots": {
				"enabled": true,
				"on_failure" : true,
				"path": "nightwatch-screenshots"
			},
			"desiredCapabilities": {
				"browserName": "chrome"
			}
		},

		"phantom": {
			"desiredCapabilities": {
				"browserName": "phantomjs",
				"phantomjs.binary.path": phantomjs.path,
			}
		}
	}
}
