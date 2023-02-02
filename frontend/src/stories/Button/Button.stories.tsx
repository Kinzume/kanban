import { ComponentStory, ComponentMeta } from "@storybook/react";
import BasicButton from "./Button";
import Button from "@mui/material/Button";

export default {
  /**
   * Testing Basic Button
   */
  title: "Testing/BasicButton",
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = (args) => <BasicButton />;
export const Primary = Template.bind({});
