# status-indicator-chip

![Build](https://github.com/FilipeReynaud/status-indicator-chip/actions/workflows/main.yml/badge.svg)

## Description

The "status-indicator-chip" is a React component designed to showcase the status or availability of a certain resource. It offers a visually appealing chip-like indicator with a blinking animation, effectively representing the current state of the resource. With the ability to display various statuses like online/offline, busy/idle, available/unavailable, or custom states, this component proves to be highly versatile.

Built for React applications, the "status-indicator-chip" seamlessly integrates with the latest versions of React and React DOM. Its adaptability allows it to be easily customized according to specific application requirements, offering developers greater flexibility.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Props](#props)
-   [Examples](#examples)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

```bash
npm install status-chip-indicator
yarn add status-chip-indicator
```

## Usage

```jsx
import React from "react";
import StatusChip from "status-chip-indicator";

const App = () => {
  return (
    <div>
      <StatusChip type="active" />
    </div>
  );
};

export default App;
```

## Props

| Prop Name          | Type    | Required                 | Possible Values                               | Default | Description                                                                      |
| ------------------ | ------- | ------------------------ | --------------------------------------------- | ------- | -------------------------------------------------------------------------------- |
| type               | string  | Yes                      | `active` <br> `inactive` <br> `custom`            | --      | Type of status chip. You can use `custom` to apply your custom styles            |
| fontColor          | string  | Yes, if type is `custom` | Any color                                     | #0eaf00 | Color to be used for the status chip label (and animation if it's set to `true`) |
| backgroundColor    | string  | Yes, if type is `custom` | Any color                                     | #ddecd1 | Color to be used for the status chip background                                  |
| label              | string  | Yes, if type is `custom` | Any string                                    | Active  | Status chip label                                                                |
| withBlinkAnimation | boolean | Yes, if type is `custom` | `true` <br> `false`                             | false   | Whether to use a blinking animation on the status chip                           |
| size               | string  | Yes, if type is `custom` | `sm` (small) <br> `md` (medium) <br> `lg` (large) | md      | Size of the status chip indicator                                                |

## Examples

### Example 1: Active status

```jsx
<StatusChip type="active" />
```

### Example 2: Active status with custom label

```jsx
<StatusChip type="active" label="Available" />
```

### Example 3: Inactive status

```jsx
<StatusChip type="inactive" />
```

### Example 4: Inactive status with custom label

```jsx
<StatusChip type="inactive" label="Not Available" />
```

### Example 5: Custom status

```jsx
<StatusChip
  type="custom"
  fontColor="#00308F"
  backgroundColor="#F0F8FF"
  label="Dispatched"
  withBlinkAnimation={false}
/>
```

## Contributing

If you wish to contribute, read our [Contributing Guide](./CONTRIBUTING.md).

## License

This package is available under the MIT license. See the [LICENSE file](./LICENSE) for more info.
