// All test cases for auto-focus-switch functionality

it("should move focus forward when reaching the max digits", async () => {
    const param = [
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "4" },
    ];
    render(param);

    const [input1, input2, input3] = document.querySelectorAll("input[type=number]");

    await userEvent.type(input1, "123");
    expect(input1.value).to.equal("123");
    expect(document.activeElement).to.equal(input2);

    await userEvent.type(input2, "456");
    expect(input2.value).to.equal("456");
    expect(document.activeElement).to.equal(input3);

    await userEvent.type(input3, "78901");
    expect(document.activeElement).to.equal(input3);
    expect(input3.value).to.equal("7890");
})

it("should only accept digits and ignore other characters", async () => {
    const param = [{ type: "number", maxLength: "5", id: "n1" }];
    render(param);

    const input = document.querySelector("#n1");
    input.focus();

    await userEvent.type(input, "123-4.56");

    expect(input.value).to.equal("12345");
})

it("should properly handle the backspace key in an empty field", async () => {
    const param = [
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "3" },
    ];
    render(param);

    const [input1, input2] = document.querySelectorAll("input[type=number]");
    await userEvent.type(input1, "123");
    input2.focus();

    await userEvent.type(input2, "{backspace}")
    expect(document.activeElement).to.equal(input1);
    expect(input1.value).to.equal("12");
})

it("should move focus backwards when deleting in an empty input", async () => {
    const param = [
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "4" },
    ];
    render(param);

    const [input1, input2, input3] = document.querySelectorAll("input[type=number]");
    await userEvent.type(input1, "12345678");

    await userEvent.type(input3, "{backspace}{backspace}");
    expect(input3.value).to.equal("");
    expect(document.activeElement).to.equal(input3);

    await userEvent.type(input3, "{backspace}");
    expect(document.activeElement).to.equal(input2);
    expect(input2.value).to.equal("45");

    await userEvent.type(input2, "{backspace}{backspace}{backspace}");
    expect(document.activeElement).to.equal(input1);
    expect(input1.value).to.equal("12");

    await userEvent.type(input1, "{backspace}{backspace}{backspace}");
    expect(document.activeElement).to.equal(input1);
    expect(input1.value).to.equal("");
})

it("should handle large number of inputs", async () => {
    const param = [
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "1" },
    ];
    render(param);

    const inputs = document.querySelectorAll("input[type=number]");
    inputs[0].focus();
    for (let i = 0; i < inputs.length; i++) {
        await userEvent.type(document.activeElement, "1");
    }

    for (const input of inputs) {
        expect(input.value).to.equal("1");
    }

    inputs[inputs.length - 1].focus();
    for (let i = 0; i < inputs.length; i++) {
        await userEvent.type(document.activeElement, "{Backspace}");
    }

    for (const input of inputs) {
        expect(input.value).to.equal("");
    }
})

it("should handle large number of inputs with different maxLength", async () => {
    const param = [
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "2" },
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "4" },
        { type: "number", maxLength: "3" },
        { type: "number", maxLength: "2" },
        { type: "number", maxLength: "1" },
        { type: "number", maxLength: "4" },
        { type: "number", maxLength: "2" },
        { type: "number", maxLength: "1" },
    ];
    render(param);

    const inputs = document.querySelectorAll("input[type=number]");
    inputs[0].focus();
    for (let i = 0; i < inputs.length; i++) {
        await userEvent.type(document.activeElement, "1".repeat(param[i].maxLength));
    }

    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i].value).to.equal("1".repeat(param[i].maxLength));
    }

    inputs[inputs.length - 1].focus();
    for (let i = 0; i < inputs.length; i++) {
        await userEvent.type(document.activeElement, "{Backspace}".repeat(param[i].maxLength));
    }

    for (const input of inputs) {
        expect(input.value).to.equal("");
    }

    expect(document.activeElement).to.equal(inputs[0]);
})