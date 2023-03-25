import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with additional class", () => {
        const expected = "someClass cls garfield";
        expect(classNames("someClass", {}, ["cls", "garfield"])).toBe(expected);
    });

    test("with mods", () => {
        const expected = "someClass cls garfield scrollable";
        expect(
            classNames("someClass", { scrollable: true, hovered: false }, [
                "cls",
                "garfield",
            ])
        ).toBe(expected);
    });

    test("with mod undefined", () => {
        const expected = "someClass cls garfield scrollable";
        expect(
            classNames("someClass", { scrollable: true, hovered: undefined }, [
                "cls",
                "garfield",
            ])
        ).toBe(expected);
    });
});
