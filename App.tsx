import { Box, Checkbox, NativeBaseProvider } from "native-base";

import { Button } from "native-base";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <Button onPress={() => console.log("hello world")}>Click Me</Button>


      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
    </NativeBaseProvider>
  );
}
