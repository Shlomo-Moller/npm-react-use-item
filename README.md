# npm-react-use-item

A temporary test package. Provides a React hook named `useItem` for fetching information on a single item from https://restful-api.dev/.

## Installation

You can install the package via npm:

```sh
npm i npm-react-use-item
```

## Usage

Import the `useItem` hook in your React component and use it as follows:

```JS
import { useItem } from "npm-react-use-item";

function App() {
    const itemInfo = useItem(1);

    return (
        <>
            Info:
            <pre>
                {JSON.stringify(itemInfo, null, 4)}
            </pre>
        </>
    );
}
```

Where `useItem` returns an object with the following structure:

```
{
    isLoading: boolean, // Indicates if the item is currently being fetched
    error: string,      // Error message if any occurred during the fetch process
    item: Object        // The fetched item data
}
```

Alternatively, you can destruct `useItem` directly:

```JS
const { isLoading, error, item } = useItem(1);
```
