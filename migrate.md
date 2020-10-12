# How to migrate from [4.3.x] to [4.4.x]

* You need change `robot\src\main\resources\NoraRobot.properties` (noSandbox=${noSandbox})  and `robot\src\test\resources\environments\xxx.properties` (noSandbox=...) by `robot\src\main\resources\webdrivers.properties` (webdriverOptionsAdditionalArgs=--no-sandbox)
* You need change `robot\src\main\resources\NoraRobot.properties` (remoteWebDriverUrl=${remoteWebDriverUrl}) by `robot\src\main\resources\webdrivers.properties` (remoteWebDriverUrl=${remoteWebDriverUrl})
* You need change `robot\src\main\resources\NoraRobot.properties` (remoteWebDriverBrowserVersion=${remoteWebDriverBrowserVersion}) by `robot\src\main\resources\webdrivers.properties` (remoteWebDriverBrowserVersion=${remoteWebDriverBrowserVersion})
* You need change `robot\src\main\resources\NoraRobot.properties` (remoteWebDriverPlatformName=${remoteWebDriverPlatformName}) by `robot\src\main\resources\webdrivers.properties` (remoteWebDriverPlatformName=${remoteWebDriverPlatformName})
* You need change `robot\src\main\resources\NoraRobot.properties` (modifyheaderPath=${modifyheaderPath}) by `robot\src\main\resources\webdrivers.properties` (modifyheaderPath=${modifyheaderPath})

# How to migrate from [4.1.x] to [4.2.x]

* You need use new PageElement:
    * Change 'google.GooglePage-searchField' by $google.GooglePage-searchField
    * Change {string} String pageElement by {page-element} PageElement pageElement

# How to migrate from [3.x.x] to [4.x.x]

* You need use all new features from cucumber v4.x.x. (Use Cucumber Expressions)
* You need use Cucumber Expressions instead of regular expressions
* You need use java 8 instead of java 7.
* You can use JUnit 5 instead of JUnit 4.3.
* Rename all `jenkinsresourcespath` by `ciToolResourcesPath` in your CI/CD
* Rename all import `cucumber.api.java.en.*` by `io.cucumber.java.en.*`
* Rename all import `cucumber.api.java.fr.*` by `io.cucumber.java.fr.*`
* Rename all import `cucumber.api.Scenario` by `io.cucumber.core.api.Scenario`
* Rename all import `cucumber.api.java.After` by `io.cucumber.java.After`
* Rename all import `cucumber.api.java.Before` by `io.cucumber.java.Before`
* Rename all import `cucumber.api.TypeRegistry` by `io.cucumber.core.api.TypeRegistry`
* Rename all import `cucumber.api.TypeRegistryConfigurer` by `io.cucumber.core.api.TypeRegistryConfigurer`
* Rename all import `cucumber.api.CucumberOptions` by `io.cucumber.junit.CucumberOptions`
* Rename all import `cucumber.api.Cucumber` by `io.cucumber.junit.Cucumber`
* Rename all import `cucumber.api.java.ObjectFactory` by `io.cucumber.core.backend.ObjectFactory`
* Rename all import `cucumber.api.Transpose` by `io.cucumber.java.Transpose`
* Rename all import `cucumber.metrics.*` by ` com.github.noraui.cucumber.metrics.*`

# How to migrate from [2.x.x] to [3.x.x] (mandatory because forbidden license)

* -Dcucumber.options="--tags '@tag1 or @tag2 or @tag3 or @tag4'"
* NoraUi use Oracle Jdbc Driver
1. if you use Oracle Db provider, use com.oracle.jdbc:ojdbc8 dependency and configure your env with OTN: Sample(https://github.com/sgrillon14/MavenSampleOracleJdbc) (default)
2. if you do not use Oracle Db provider, just exclude com.oracle.jdbc:ojdbc8 dependency in the noraui dependency call within your pom.xml. You can follow these instructions at https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html. It should look something like that :
```xml
<dependency>
    <groupId>com.github.noraui</groupId>
    <artifactId>noraui</artifactId>
    <version>${noraui.version}</version>
    <exclusions>
        <exclusion>
            <groupId>com.oracle.jdbc</groupId>
            <artifactId>ojdbc8</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
* Change all "noraui" import to "com.github.noraui"
* Change all `private static Logger LOGGER = Logger.getLogger` by `private static final Logger LOGGER = LoggerFactory.getLogger`
* Change all `import org.apache.log4j.Logger;` by `import org.slf4j.Logger;` and `import org.slf4j.LoggerFactory;`
* Change com.github.noraui.browser.DriverFactory#setProperty(String key, Properties propertyFile) to com.github.noraui.browser.DriverFactory#getProperty(String key, Properties propertyFile)
* Change com.github.noraui.browser.DriverFactory#setIntProperty(String key, Properties propertyFile) to com.github.noraui.browser.DriverFactory#getIntProperty(String key, Properties propertyFile)
* replace all step constructors by `com.google.inject.Inject` (inject pages)
* replace loadAuthentication(String browser) by loadAuthentication(Cookie cookie)
* replace PhantomJs by Chrome headless
* replace springframework RestTemplate by OkHttp
