// test cases for toggle-list-selection

/// test1
it("should select an unselected item when clicked", async () => {
    render();
    const { screen } = TestingLibraryDom;
    const item = screen.getByText("Item 1");
    await userEvent.click(item);
    expect(item.classList.contains("selected")).to.be.true;
})

///// test2
it("should deselect a selected item when clicked", async () => {
    render();
    const { screen } = TestingLibraryDom;
    const item = screen.getByText("Item 1");
    await userEvent.click(item);
    await userEvent.click(item);
    expect(item.classList.contains("selected")).to.be.false;
});

/// test3
it("should not allow more than three items to be selected", async () => {
    render();
    const { screen } = TestingLibraryDom;
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"].map((name) => screen.getByText(name));
    for (const item of items) {
        await userEvent.click(item);
    }
    expect(items[0].classList.contains("selected")).to.be.false;
    expect(items[1].classList.contains("selected")).to.be.true;
    expect(items[2].classList.contains("selected")).to.be.true;
    expect(items[3].classList.contains("selected")).to.be.true;
});

/// test4
it("should handle multiple deselection and selection correctly", async () => {
    render();
    const { screen } = TestingLibraryDom;
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((name) => screen.getByText(name));
    await userEvent.click(items[0]);
    await userEvent.click(items[1]);
    await userEvent.click(items[2]);
    await userEvent.click(items[1]); // Deselecting the second item
    await userEvent.click(items[3]);
    await userEvent.click(items[4]);
    expect(items[0].classList.contains("selected")).to.be.false;
    expect(items[1].classList.contains("selected")).to.be.false;
    expect(items[2].classList.contains("selected")).to.be.true;
    expect(items[3].classList.contains("selected")).to.be.true;
    expect(items[4].classList.contains("selected")).to.be.true;
})

/// test5
it("should ensure the oldest selected item is deselected when selecting more", async () => {
    render();
    const { screen } = TestingLibraryDom;
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"].map((name) => screen.getByText(name));
    await userEvent.click(items[0]);
    await userEvent.click(items[1]);
    await userEvent.click(items[2]);
    await userEvent.click(items[1]); // Deselecting the second item
    await userEvent.click(items[3]);
    await userEvent.click(items[1]);
    expect(items[0].classList.contains("selected")).to.be.false;
    expect(items[1].classList.contains("selected")).to.be.true;
    expect(items[2].classList.contains("selected")).to.be.true;
    expect(items[3].classList.contains("selected")).to.be.true;
})


/// test6
it("should correctly deselect the oldest selected item regardless of its position in the DOM", async () => {
    render();
    const { screen } = TestingLibraryDom;

    const items = ["Item 6", "Item 7", "Item 8", "Item 5", "Item 4"].map((name) => screen.getByText(name));

    // Step 1: Select the last three items
    await userEvent.click(items[0]);
    await userEvent.click(items[1]);
    await userEvent.click(items[2]);
    expect(items[0].classList.contains("selected")).to.be.true;
    expect(items[1].classList.contains("selected")).to.be.true;
    expect(items[2].classList.contains("selected")).to.be.true;

    // Step 2: Select the items above the last three
    await userEvent.click(items[3]);
    expect(items[3].classList.contains("selected")).to.be.true;
    expect(items[0].classList.contains("selected")).to.be.false; // The oldest selected (Item 6) should be deselected
    expect(items[1].classList.contains("selected")).to.be.true;
    expect(items[2].classList.contains("selected")).to.be.true;

    await userEvent.click(items[4]);
    expect(items[4].classList.contains("selected")).to.be.true;
    expect(items[1].classList.contains("selected")).to.be.false; // The next oldest selected (Item 7) should be deselected
    expect(items[2].classList.contains("selected")).to.be.true;
    expect(items[3].classList.contains("selected")).to.be.true;
})