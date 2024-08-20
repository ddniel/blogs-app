// import { render, screen, fireEvent } from "@testing-library/react";
// import CreateForm from "../components/ui/create-form";
// import Home from "../app/page";
// import { createPost } from "@/lib/actions";
// import { useRouter } from "next/navigation";

// // Mock necessary modules
// jest.mock("@/lib/actions", () => ({
//   createPost: jest.fn(),
// }));

// jest.mock("next/navigation", () => ({
//   useRouter: jest.fn(),
// }));

// describe("CreateForm and Home integration", () => {
//   it("should add a new blog post and display it on the index page", async () => {
//     const pushMock = jest.fn();
//     useRouter.mockReturnValue({ push: pushMock });

//     // Mock the createPost function to simulate a successful post creation
//     createPost.mockResolvedValue({ message: "Post created succesfully." });

//     // Render the CreateForm component
//     render(<CreateForm />);

//     // Simulate user input for the new post title and content
//     fireEvent.change(screen.getByPlaceholderText(/Post title/i), {
//       target: { value: "New Post" },
//     });
//     fireEvent.change(screen.getByPlaceholderText(/Post content/i), {
//       target: { value: "This is a new post." },
//     });

//     // Simulate form submission
//     fireEvent.click(screen.getByText(/Save/i));

//     // Ensure the createPost function was called with the correct arguments
//     expect(createPost).toHaveBeenCalledWith("New Post", "This is a new post.");

//     // Mock the push function to redirect to the Home component
//     render(<Home />);

//     // Assert that the new post is now displayed on the index page
//     expect(screen.getByText("New Post")).toBeInTheDocument();
//   });
// });
