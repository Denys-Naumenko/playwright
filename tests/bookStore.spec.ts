import { test } from '../src/fixtures/baseFixtures';


test("Book Store test with login", async ({ login, bookstore }) => {
    await bookstore.visitBookpage();
    await login.loginUser();
    await bookstore.addBookToColection();
});
