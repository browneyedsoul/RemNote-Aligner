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
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(CENTER);
    },
  });
  await plugin.app.registerCommand({
    id: "right",
    name: "Right",
    description: "Align items per command",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(RIGHT);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
