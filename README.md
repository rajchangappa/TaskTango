# TaskTango

TaskTango is a small browser-based task list. Add tasks, mark them complete, delete them, and sort by name or creation time. Tasks are saved in your browser's local storage.

## Run locally

1. Install dependencies: `npm install`
2. Build the styles: `npm run build`
3. Start a local server in the project folder: `python3 -m http.server 8000`
4. Open `http://localhost:8000` in your browser.

To rebuild styles automatically while editing, run `npm run dev` in a second terminal.

## How it works

Each task is an object created with the `Task` class. The app stores the task list as JSON in local storage. The sort menu changes the display order without changing the saved array.

## JavaScript methods

- `push()` adds a task to an array.
- `filter()` makes an array containing items that pass a condition; used to delete a task.
- `find()` returns the first item that matches a condition.
- `slice()` copies the task array so sorting does not change its original order.
- `sort()` orders array items using a comparison function.
- `toLowerCase()` makes task names lowercase for case-insensitive sorting; `localeCompare()` compares two strings.
- `trim()` removes whitespace from the start and end of input.
- `JSON.parse()` turns saved JSON text into JavaScript data; `JSON.stringify()` turns it back into text.
- `getItem()` reads a value from local storage; `setItem()` saves one.
- `addEventListener()` runs code when an event occurs; `preventDefault()` stops the form's normal page reload; `reset()` clears the form.
- `Date.now()` gets the current timestamp. `toLocaleDateString()` and `toLocaleTimeString()` format dates for display.
- `getElementById()` finds a page element by ID; `createElement()` makes a DOM element; `append()` and `appendChild()` add elements to another element.
