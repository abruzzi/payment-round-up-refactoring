import { render, screen, waitFor } from "@testing-library/react";
import { Payment } from "./Payment";

describe("Payment", () => {
  it("renders payment title", () => {
    render(<Payment amount={0.0} />);
    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("shows me the total amount", () => {
    render(<Payment amount={19.9} />);
    expect(screen.getByText("$19.9")).toBeInTheDocument();
  });

  describe("payment methods from remote", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("shows all available payment methods", async () => {
      const methods = [{ name: "apple" }, { name: "google" }];

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(methods),
        })
      );

      render(<Payment amount={19.9} />);

      await waitFor(() => {
        expect(screen.getByText("Pay with apple")).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByText("Pay with google")).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByText("Pay in cash")).toBeInTheDocument();
      });
    });
  });
});
