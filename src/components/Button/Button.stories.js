import SButton from "./Button.vue";

export default {
  title: "Components/Button/Button",
  component: SButton,
};

const Template = (args) => ({
  components: { SButton },
  setup: () => ({ args }),
  template: '<SButton v-bind="args"></SButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  text: "Button text",
  nativeType: "button",
};

