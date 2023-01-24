import {declareIndexPlugin, ReactRNPlugin} from "@remnote/plugin-sdk";

export const [CENTER, RIGHT] = ["center_powerup", "right_powerup"];

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup("Center", CENTER, "A Power-up Block for aligning inline item", {slots: []});
  await plugin.app.registerPowerup("Right", RIGHT, "A Power-up Block for aligning inline item", {slots: []});
  
  await plugin.app.registerCommand({
    id: "center",
    name: "Center",
    description: "Align items per command",
    action: async () => {
      const focusedRem = await plugin.focus.getFocusedRem();
      if (!focusedRem) {
        return;
      }
      let tag = await plugin.rem.findByName(["Center"], null);
      if (!tag) {
        tag = await plugin.rem.createRem();
        if (!tag) {
          return;
        }
        await tag.setText(["Center"]);
      }
      await focusedRem.addTag(tag);
    },
  });
  await plugin.app.registerCommand({
    id: "right",
    name: "Right",
    description: "Align items per command",
    action: async () => {
      const focusedRem = await plugin.focus.getFocusedRem();
      if (!focusedRem) {
        return;
      }
      let tag = await plugin.rem.findByName(["Right"], null);
      if (!tag) {
        tag = await plugin.rem.createRem();
        if (!tag) {
          return;
        }
        await tag.setText(["Right"]);
      }
      await focusedRem.addTag(tag);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
