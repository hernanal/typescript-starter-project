import Hello from "components/Hello";
import HelloContainer from "containers/Hello";
import * as enzyme from "enzyme";
import * as React from "react";
import Root from "Root";


let wrappedComponent: any;

describe("Hello SFC", () => {
  it("renders the correct text when no enthusiasm level is given", () => {
    const hello = enzyme.shallow(<Hello name="Alex" />);
    expect(hello.find(".greeting").text()).toEqual("Hello Alex!");
  });

  it("renders the correct text with an explicit enthusiasm of 1", () => {
    const hello = enzyme.shallow(<Hello name="Alex" enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Alex!");
  });

  it("renders the correct text with an explicit enthusiasm level of 5", () => {
    const hello = enzyme.shallow(<Hello name="Alex" enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Alex!!!!!");
  });

  it("throws error when the enthusiasm level is 0", () => {
    expect(() => {
      enzyme.shallow(<Hello name="Alex" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it("throws error when the enthusiasm level is negative", () => {
    expect(() => {
      enzyme.shallow(<Hello name="Alex" enthusiasmLevel={-1} />);
    }).toThrow();
  });
});

describe("Hello container", () => {
  beforeEach(() => {
    const initialState = {
      enthusiasmLevel: 2,
      languageName: "TypeScript"
    };
    
    wrappedComponent = enzyme.mount(
      <Root initialState={initialState}>
        <HelloContainer />
      </Root>
    );
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it("has two buttons", () => {
    expect(wrappedComponent.find("button").length).toEqual(2);
  });

  describe("decrement button", () => {
    it("decreases the enthusiasm level", () => {
      wrappedComponent.find("#decrement-btn").simulate("click");
      wrappedComponent.update();
      expect(wrappedComponent.find('Hello').prop('enthusiasmLevel')).toEqual(1);
    });
  });
});
