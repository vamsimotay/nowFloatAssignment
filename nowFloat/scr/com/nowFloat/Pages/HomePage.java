package com.nowFloat.Pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.nowFloat.Utils.Config;


public class HomePage {
private WebDriver driver =Config.driver;

WebDriverWait wait=new WebDriverWait(driver, 30);
	
	public HomePage(){
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.XPATH,using="//li[@id='product']//a[contains(text(),'Services')]")
	public WebElement servicesLink;
	@FindBy(how=How.ID,using="productCardSelect")
	public WebElement categoryDropDown;
	
	@FindBy(how=How.XPATH,using="//div[@class='prouct-box']")
	public WebElement productBox;
	@FindBy(how=How.XPATH,using="//ul[@class='dropdown-menu mega-menu']//ul//li")
	public List<WebElement> overlayList;
	
	
	public void nowFloatservices() {
		servicesLink.click();
	}
	
	public void servicesList() {
		if(categoryDropDown.isDisplayed()) {
			System.out.println("Services Links are displaying");
		}else {
			System.out.println("Services Links are not displaying");
		}
	}
	
	public void selectService(String arg) {
	    Select services = new Select(categoryDropDown);
	    services.selectByValue(arg);
	    wait.until(ExpectedConditions.visibilityOfElementLocated((By) productBox));
	}
	
	public void verifyServiceSelected() {
		
		if(productBox.isDisplayed()) {
			System.out.println("productBox Links are displaying");
		}else {
			System.out.println("productBox Links are not displaying");
		}
	}
	
	public void serviceMouseOver() {
		Actions actions = new Actions(driver);
		actions.moveToElement(servicesLink).build().perform();
	}
	
	public void selectServiceFromOverlay(String arg) throws InterruptedException {
	    List<WebElement> serviceList = overlayList;
	    for (WebElement li : serviceList) {
	    	if (li.getText().equals(arg)) {
	    	     li.click();
	    	     }
	    }
	    Thread.sleep(2000);
	    
	}
}