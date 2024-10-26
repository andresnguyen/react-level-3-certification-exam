# React Level 3 Certification

## Exercise 1: Create a Generic `localStorage` Handler Usable by React Function Components

1. **API for Key-Value Storage**

   - Enable any React function component to store a new key/value pair in the browser's `localStorage`.

2. **Subscription for Value Updates**

   - Allow components to subscribe to a specific key and receive updates when the value is added, updated, or deleted. Updates should trigger re-renders as necessary.

3. **Encapsulation of `localStorage` Logic**

   - Hide all `localStorage` interactions from consumer components. Components should remain unaware of the underlying storage mechanism.

4. **External Changes Handling**

   - If a `localStorage` value changes outside of the React app's scope, subscribed components should receive an update (a slight delay is acceptable).

5. **Example Illustration**
   - Demonstrate with two components: one sets a value in `localStorage` using the API, while the other displays any updates immediately on the screen.

---

## Exercise 2: Create a Generic Dialog Component Customizable with Any Content

In this task, you’ll create a dialog component to be used as an overlay for various use cases:

1. **Modal and Regular Dialog Modes**

   - The component should work as a modal (blocking user interaction with the rest of the page) or as a regular dialog (allowing interaction with the rest of the page).

2. **No Third-Party Components**

   - Do not use third-party component libraries, but you may use third-party CSS for overlay effects.

3. **Flexible Structure**

   - Allow users to set any HTML/component as the dialog's header, body, and footer. The dialog API should also enable open/close actions from another component.

4. **Sample Usage**
   - Create a sample component illustrating different dialog use cases.

---

## Exercise 3: Create a Generic Auto-Filter Dropdown Component to Filter Any Data List

Create a dropdown component that filters a list based on user input, adaptable to various data types:

1. **Text-Based Filtering**

   - Filter the list as the user types, showing only items containing the input text (e.g., typing "En" filters items with "en" in their names).

2. **Case Insensitivity**

   - Ensure filtering is not case-sensitive.

3. **Customizable Properties**

   - Allow users to specify the object property name for the label and filter criteria (e.g., “name” or “description”) via props.

4. **Highlight Matching Text**

   - Render matching portions of the option label in bold (e.g., **Enter**tainment).

5. **Callback for Selected Value**

   - When an item is selected, return it via a callback prop called `valueChange`.

6. **No Third-Party Components**

   - Use only HTML, CSS, and React; avoid third-party components.

7. **Example Illustration**
   - Use the auto-filter dropdown in a test component with two different data samples. For one sample, you may use this public API: [JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users).
