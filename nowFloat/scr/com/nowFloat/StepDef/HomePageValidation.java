package com.nowFloat.StepDef;

import com.aventstack.extentreports.Status;
import com.nowFloat.Pages.HomePage;
import com.nowFloat.Utils.Config;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageValidation {
	
	@Given("^I am on Now Float Home Page$")
	public void i_am_on_Now_Float_Home_Page() throws Throwable {
		Config.createTest("BrowseLaunch", "Validating Browser and URL launch");
		Config.getBrowser("chrome");
		Config.test.log(Status.PASS, "User is able to launch browser and url successfully");
	  
	}

	@When("^I click Services link from home page$")
	public void i_click_Services_link_from_home_page() throws Throwable {
		new HomePage().nowFloatservices();
	}

	 

	@Then("^I verify list of services are displayed$")
	public void i_verify_list_of_services_are_displayed() throws Throwable {
		Config.createTest("Services List", "Validating Services List");
		new HomePage().servicesList();
		Config.test.log(Status.PASS, "User is able Verify Services List");
	}
	
	
	@When("^I click any \"([^\"]*)\" from dropdown list$")
	public void i_click_any_from_dropdown_list(String arg1) throws Throwable {
		new HomePage().selectService(arg1);
	}


	@Then("^I verify selected service is displayed$")
	public void i_verify_selected_service_is_displayed() throws Throwable {
		Config.createTest("Services Display", "Correct Services are Displayed");
		
		new HomePage().verifyServiceSelected();
		Config.test.log(Status.PASS, "Correct Services displayed");
	}
	
	@When("^I Mouse Over on Services link from home page$")
	public void i_Mouse_Over_on_Services_link_from_home_page() throws Throwable {
		new HomePage().serviceMouseOver();
		}

	@Then("^I click any \"([^\"]*)\" from overlay$")
	public void i_click_any_from_overlay(String arg1) throws Throwable {
		Config.createTest("Overlay Services Selection", "Validating Services Selection on Overlay");
		new HomePage().selectServiceFromOverlay(arg1);
		Config.test.log(Status.PASS, "User is able to select services from overlay");
		}
	

}
