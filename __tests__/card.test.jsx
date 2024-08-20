// import { render, screen } from "@testing-library/react";
// import { isLoggedIn } from "@/lib/auth";
// import Card from "@/components/ui/card";

// // Mock the `isLoggedIn` function
// jest.mock("@/lib/auth", () => ({
//   isLoggedIn: jest.fn(),
// }));

// const mockPost = {
//   id: 1,
//   title: "Test Post",
//   content: "This is a test post content. It should not be too long.",
//   date: "2024-08-14",
// };

// describe("Card Component", () => {
//   it("should not display the delete button when not logged in", async () => {
//     // Mock `isLoggedIn` to return `false`
//     isLoggedIn.mockResolvedValue(false);

//     // Render the Card component
//     render(<Card {...mockPost} />);

//     // Assert that the Delete button is not present
//     const deleteButton = screen.queryByText(/delete/i);
//     expect(deleteButton).not.toBeInTheDocument();
//   });

//   it("should display the delete button when logged in", async () => {
//     // Mock `isLoggedIn` to return `true`
//     isLoggedIn.mockResolvedValue(true);

//     // Render the Card component
//     render(<Card {...mockPost} />);

//     // Assert that the Delete button is present
//     const deleteButton = screen.getByText(/delete/i);
//     expect(deleteButton).toBeInTheDocument();
//   });
// });
