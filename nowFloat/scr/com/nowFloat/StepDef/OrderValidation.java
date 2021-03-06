package com.nowFloat.StepDef;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.nowFloat.Pages.AddToCartPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrderValidation {
	

	
	@When("^I click Add to Bag button$")
	public void i_click_Add_to_Bag_button() throws Throwable {
		new AddToCartPage().addToCart();
	}

	@Then("^I verify product added to Bag$")
	public void i_verify_product_added_to_Bag() throws Throwable {
		new AddToCartPage().verifyAddToCart();
	    
	}

	@When("^I click shopping bag link$")
	public void i_click_shopping_bag_link() throws Throwable {
		new AddToCartPage().shoppingBag();
	}

	@Then("^I verify user navigated to shopping bag page$")
	public void i_verify_user_navigated_to_shopping_bag_page() throws Throwable {
		new AddToCartPage().verifyShoppingBag();
	}

	@Then("^I click checkout button$")
	public void i_click_checkout_button() throws Throwable {
		new AddToCartPage().checkoutPage();
	}

	@Then("^I verify user navigated to checkout page$")
	public void i_verify_user_navigated_to_checkout_page() throws Throwable {
		new AddToCartPage().verifyCheckoutPage();
	}

	@Then("^I enter shipping details$")
	public void i_enter_shipping_details() throws Throwable {
		new AddToCartPage().shippingDetails();
	}

	@Then("^I click payment options$")
	public void i_click_payment_options() throws Throwable {
		new AddToCartPage().paymentMethod();
	}

	@Then("^I Place order$")
	public void i_Place_order() throws Throwable {
		new AddToCartPage().placeOrder();
	}

	@Then("^I verify Order ID$")
	public void i_verify_Order_ID() throws Throwable {
		new AddToCartPage().verifyOrder();
	}



}
