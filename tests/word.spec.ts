import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:8080/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dhisingara/);
});

test.skip("add word", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  await page.goto("http://localhost:8080/login");
  await page.getByPlaceholder("email@email.com").fill("user@dhisingara.com");
  await page.getByLabel("Password").fill("user@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Words" }).click();
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByPlaceholder("Abject").click();
  await page.getByPlaceholder("Abject").fill("test1");
  await page.getByPlaceholder("Of the most contemptible kind").click();
  await page.getByPlaceholder("Of the most contemptible kind").fill("test11");
  await page.getByRole("button", { name: "Add Word" }).click();
});

test.skip("edit word", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  await page.goto("http://localhost:8080/login");
  await page.getByPlaceholder("email@email.com").fill("user@dhisingara.com");
  await page.getByLabel("Password").fill("user@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Words" }).click();

  await page.getByRole("button", { name: "Edit" }).nth(0).click();
  await page.getByPlaceholder("Abject").click();
  await page.getByPlaceholder("Abject").fill("test22");
  await page.getByPlaceholder("Of the most contemptible kind").click();
  await page.getByPlaceholder("Of the most contemptible kind").fill("test22");
  await page.getByRole("button", { name: "Edit Word" }).click();
  await page.getByRole("button", { name: "Delete" }).nth(1).click();
  await page.getByRole("button", { name: "Yes" }).click();
});

test.skip("delete word", async ({ page }) => {
  await page.goto("http://localhost:8080/");
  await page.goto("http://localhost:8080/login");
  await page.getByPlaceholder("email@email.com").fill("user@dhisingara.com");
  await page.getByLabel("Password").fill("user@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Words" }).click();
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByPlaceholder("Abject").click();
  await page.getByPlaceholder("Abject").fill("test1");
  await page.getByPlaceholder("Of the most contemptible kind").click();
  await page.getByPlaceholder("Of the most contemptible kind").fill("test11");
  await page.getByRole("button", { name: "Add Word" }).click();
  await page.getByRole("button", { name: "Delete" }).nth(1).click();
  await page.getByRole("button", { name: "Yes" }).click();
});
