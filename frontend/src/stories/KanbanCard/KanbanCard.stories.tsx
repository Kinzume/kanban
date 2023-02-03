import { ComponentStory, ComponentMeta } from "@storybook/react";
import KanbanCard from "./KanbanCard";

export default {
  /**
   * Card
   */
  title: "Kanban/Card",
  component: KanbanCard,
} as ComponentMeta<typeof KanbanCard>;

const Template: ComponentStory<typeof KanbanCard> = (args) => (
  <KanbanCard {...args} />
);
export const Basic = Template.bind({});
Basic.args = { title: "Kanban", description: "Learn Kanban" };
