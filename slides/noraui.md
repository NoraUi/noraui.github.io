---
title: NoraUi
---
Présentation générale de NoraUi

![logo](img/noraui.png)

---
# Summary

* [Gherkin](#/2)
* [Chapter 2](#/3)
* [Chapter 3](#/4)
* [Chapter 3a](#/4/1)
* [Chapter 3b](#/4/2)
* [Bonus](bonus.md)
* [Questions](#/6)

---

# Gherkin

    @LoginLogout
    Feature: LoginLogout (Scenario that login and logout with any good user.)

    	Scenario Outline:  Scenario that login and logout with any good user.

        Given I check that user '<user>' is not empty.
        Given I check that password '<password>' is not empty.

        Given 'DEMO_HOME' is opened.
        Then The DEMO home page is displayed

        When I log in to DEMO as '<user>' '<password>'
        Then The DEMO portal is displayed

        Then I expect to have 'demo.DemandPage-cellphoneNumber' with the text '<cellphoneNumber>'.
        Then I expect to have 'demo.DemandPage-startDate' with the text '<startDate>'.
        Then I expect to have 'demo.DemandPage-endDate' with the text '<endDate>'.
        Then I expect to have 'demo.DemandPage-description' with the text '<description>'.   

        When I log out of DEMO
        Then The DEMO logout page is displayed

        And I go back to 'DEMO_HOME'

    	Examples:
        #DATA
        |id|user|password|cellphoneNumber|startDate|endDate|description|
        #END

---

# Chapter 2

* Item A <!-- .element: class="fragment" -->
* Item B <!-- .element: class="fragment" -->
* Item C <!-- .element: class="fragment" -->

---

# Chapter 3

* Item A <!-- .element: class="fragment" -->
* Item B <!-- .element: class="fragment" -->
* Item C <!-- .element: class="fragment" -->

----

# Chapter 3a

----

# Chapter 3b

---

* [Bonus](bonus.md)

---

# Questions

![questions](img/questions.png)
