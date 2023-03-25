import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    theme: "app_light_theme",
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perferendis earum error vitae repellat inventore quis deserunt
    accusamus! In, cupiditate hic a, nesciunt laborum dolore labore
    consequuntur consequatur earum explicabo ipsa placeat enim.
    Perferendis hic dolore placeat rem sunt explicabo distinctio
    neque nostrum reprehenderit, harum quae cupiditate sit tenetur
    tempora delectus cum vitae nam dolorum eum voluptatum facere
    iusto! Pariatur ullam, dolorum nemo amet consectetur blanditiis
    debitis illum explicabo nisi, tempore modi maxime adipisci
    suscipit, omnis maiores inventore distinctio molestiae labore
    beatae nulla reprehenderit. Ex voluptas cumque voluptate quo
    illo dignissimos molestiae, quia, esse harum ipsum doloremque
    enim quos adipisci laudantium?`,
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    className: "app_dark_theme",
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perferendis earum error vitae repellat inventore quis deserunt
    accusamus! In, cupiditate hic a, nesciunt laborum dolore labore
    consequuntur consequatur earum explicabo ipsa placeat enim.
    Perferendis hic dolore placeat rem sunt explicabo distinctio
    neque nostrum reprehenderit, harum quae cupiditate sit tenetur
    tempora delectus cum vitae nam dolorum eum voluptatum facere
    iusto! Pariatur ullam, dolorum nemo amet consectetur blanditiis
    debitis illum explicabo nisi, tempore modi maxime adipisci
    suscipit, omnis maiores inventore distinctio molestiae labore
    beatae nulla reprehenderit. Ex voluptas cumque voluptate quo
    illo dignissimos molestiae, quia, esse harum ipsum doloremque
    enim quos adipisci laudantium?`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
