package com.nowFloat.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.nowFloat.Utils.Config;

public class AddToCartPage {
	
private WebDriver driver =Config.driver;

WebDriverWait wait=new WebDriverWait(driver, 30);
	
	public AddToCartPage(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.XPATH,using="//span[@class='cta-btn-primary product-btn']")
	public WebElement addToCartBtn;
	
	@FindBy(how=How.ID,using="snackbar")
	public WebElement addToCartMsg;
	
	@FindBy(how=How.XPATH,using="//a[contains(@class,'btn dropdown-toggle show-count')]")
	public WebElement shoppingBag;
	@FindBy(how=How.XPATH,using="//a[contains(text(),'checkout')]")
	public WebElement checkOutBtn;
	
	@FindBy(how=How.NAME,using="name")
	public WebElement custName;
	
	@FindBy(how=How.NAME,using="email")
	public WebElement custEmail;
	
	@FindBy(how=How.NAME,using="phone")
	public WebElement custPhone;
	
	@FindBy(how=How.NAME,using="zipcode")
	public WebElement custZipCode;
	
	@FindBy(how=How.NAME,using="address")
	public WebElement custAddress;
	
	
	@FindBy(how=How.NAME,using="city")
	public WebElement custCity;
	
	
	@FindBy(how=How.NAME,using="state")
	public WebElement custState;
	
	
	@FindBy(how=How.NAME,using="country")
	public WebElement custCountry;
	
	@FindBy(how=How.ID,using="place-order")
	public WebElement placeOrder;
	
	@FindBy(how=How.XPATH,using="//input[@value='COD']")
	public WebElement paymentCOD;
	
	@FindBy(how=How.ID,using="orderId")
	public WebElement orderID;

	
	public void addToCart() {
		addToCartBtn.click();
	}
	
	public void verifyAddToCart() {
		if(addToCartMsg.isDisplayed()) {
			System.out.println("Product Added To Cart");
		}else {
			System.out.println("Product did not get Added To Cart");
		}
		
		wait.until(ExpectedConditions.visibilityOfElementLocated((By) shoppingBag));
	}
	
	public void shoppingBag() {
		shoppingBag.click();
		
		}
	
	public void verifyShoppingBag() {
		if(checkOutBtn.isDisplayed()) {
			System.out.println("User is on shopping bag");
		}else {
			System.out.println("User is not on shopping bag");
		}
	}
	
	public void checkoutPage() {
		checkOutBtn.click();
	}
	
	public void verifyCheckoutPage() {
		if(custName.isDisplayed()) {
			System.out.println("User is on Checkout bag");
		}else {
			System.out.println("User is not on Checkout bag");
		}
	}
	
	public void shippingDetails() {
		custName.sendKeys("test");
		custEmail.sendKeys("test@testing.com");
		custPhone.sendKeys("7845214578");
		custZipCode.sendKeys("123456");
		custAddress.sendKeys("test");
		custCity.sendKeys("test");
		custState.sendKeys("test");
		custCountry.sendKeys("test");
			
	}
	
	public void paymentMethod() {
		paymentCOD.click();
	}
	
	public void placeOrder() {
		placeOrder.click();
	}
	
	public void verifyOrder() {
		if(orderID.isDisplayed()) {
			System.out.println("Order Placed Successfully");
		} else {
			System.out.println("Order did not get placed Successfully");
		}
	}

}
