exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to this config file
    specs: ['./e2e/**/*.e2e-spec.js'],
  
    baseUrl: 'http://localhost:4200',
  
    // For angular tests
    useAllAngular2AppRoots: true
};